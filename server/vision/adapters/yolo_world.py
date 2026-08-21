import gc

import torch
from ultralytics import YOLOWorld

from ..vocabulary import OBJECT_VOCABULARY
from .base import VisionAdapter


class YOLOWorldAdapter(VisionAdapter):
    model_id = "yolo-world"

    def load_model(self, model_path):
        model = YOLOWorld(str(model_path))
        # 文本特征仅在启动时编码；检测图片不会离开本机。
        model.set_classes(list(OBJECT_VOCABULARY))
        # 特征已经写入检测头，释放约 338MB 的 CLIP 编码器常驻内存。
        model.model.clip_model = None
        gc.collect()
        if torch.backends.mps.is_available():
            torch.mps.empty_cache()
        return model
