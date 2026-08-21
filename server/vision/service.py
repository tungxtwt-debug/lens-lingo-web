import logging
import threading
from pathlib import Path

import torch

from .adapters import YOLO11nAdapter, YOLOWorldAdapter

logger = logging.getLogger("local-vision")

MODEL_FILES = {
    "yolo11n": "yolo11n.pt",
    "yolo-world": "yolov8s-worldv2.pt",
}

ADAPTERS = {
    "yolo11n": YOLO11nAdapter,
    "yolo-world": YOLOWorldAdapter,
}


class VisionService:
    """选择检测器并向 FastAPI 提供稳定、与模型无关的结果格式。"""

    def __init__(
        self,
        server_dir: Path,
        model_id="yolo11n",
        confidence=0.45,
        max_objects=10,
        image_size=640,
    ):
        if model_id not in ADAPTERS:
            supported = ", ".join(ADAPTERS)
            raise ValueError(f"不支持的 VISION_MODEL：{model_id}，可选值：{supported}")

        self.model_id = model_id
        self.confidence = confidence
        self.max_objects = max_objects
        if image_size not in {512, 640}:
            raise ValueError("VISION_IMAGE_SIZE 仅支持 512 或 640")
        self.image_size = image_size
        self.model_path = server_dir / MODEL_FILES[model_id]
        self._adapter = None
        self._lock = threading.Lock()

    @property
    def device(self):
        return "mps" if torch.backends.mps.is_available() else "cpu"

    def load(self):
        if self._adapter is None:
            if not self.model_path.exists():
                raise FileNotFoundError(f"本地模型不存在：{self.model_path.name}")
            logger.info("正在加载本地模型 %s", self.model_id)
            self._adapter = ADAPTERS[self.model_id](self.model_path)
            logger.info("本地模型加载完成：%s", self.model_id)
        return self._adapter

    def detect(self, image):
        width, height = image.size
        if width <= 0 or height <= 0:
            return []

        with self._lock:
            objects = self.load().detect(
                image=image,
                confidence=self.confidence,
                max_candidates=self.max_objects * 3,
                device=self.device,
                image_size=self.image_size,
            )

        objects.sort(key=lambda item: item["confidence"], reverse=True)
        return remove_duplicate_detections(objects)[:self.max_objects]


def remove_duplicate_detections(objects, iou_threshold=0.5):
    """同类别且高度重叠时，只保留置信度最高的一项。"""
    kept = []
    for candidate in objects:
        duplicate = any(
            candidate["objectName"] == existing["objectName"]
            and calculate_iou(candidate["boundingBox"], existing["boundingBox"]) > iou_threshold
            for existing in kept
        )
        if not duplicate:
            kept.append(candidate)

    for index, item in enumerate(kept, start=1):
        item["id"] = str(index)
    return kept


def calculate_iou(first, second):
    first_right = first["x"] + first["width"]
    first_bottom = first["y"] + first["height"]
    second_right = second["x"] + second["width"]
    second_bottom = second["y"] + second["height"]
    intersection_width = max(0.0, min(first_right, second_right) - max(first["x"], second["x"]))
    intersection_height = max(0.0, min(first_bottom, second_bottom) - max(first["y"], second["y"]))
    intersection = intersection_width * intersection_height
    union = first["width"] * first["height"] + second["width"] * second["height"] - intersection
    return intersection / union if union > 0 else 0.0
