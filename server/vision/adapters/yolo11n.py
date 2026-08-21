from ultralytics import YOLO

from .base import VisionAdapter


class YOLO11nAdapter(VisionAdapter):
    model_id = "yolo11n"

    def load_model(self, model_path):
        return YOLO(str(model_path))
