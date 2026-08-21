from abc import ABC, abstractmethod
from pathlib import Path

import numpy as np
from PIL import Image


class VisionAdapter(ABC):
    """不同检测模型共同遵守的最小接口。"""

    model_id: str

    def __init__(self, model_path: Path):
        self.model_path = model_path
        self.model = self.load_model(model_path)

    @abstractmethod
    def load_model(self, model_path: Path):
        raise NotImplementedError

    def detect(
        self,
        image: Image.Image,
        confidence: float,
        max_candidates: int,
        device: str,
        image_size: int,
    ):
        results = self.model.predict(
            source=np.asarray(image),
            conf=confidence,
            max_det=max_candidates,
            device=device,
            imgsz=image_size,
            verbose=False,
        )
        return self._normalize(results, image.size)

    @staticmethod
    def _normalize(results, image_size):
        if not results:
            return []

        width, height = image_size
        objects = []
        result = results[0]
        for box in result.boxes:
            x1, y1, x2, y2 = [float(value) for value in box.xyxy[0].tolist()]
            class_id = int(box.cls[0])
            objects.append({
                "id": str(len(objects) + 1),
                "objectName": str(result.names[class_id]).strip().lower(),
                "confidence": clamp(float(box.conf[0])),
                "boundingBox": {
                    "x": clamp(x1 / width),
                    "y": clamp(y1 / height),
                    "width": clamp((x2 - x1) / width),
                    "height": clamp((y2 - y1) / height),
                },
            })
        return objects


def clamp(value):
    return min(1.0, max(0.0, value))
