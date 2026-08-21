"""Reproduce the browser model; this is a development tool, not a Web runtime dependency."""

from pathlib import Path
import hashlib
import shutil

from ultralytics import YOLO


WEB_ROOT = Path(__file__).resolve().parents[1]
OUTPUT = WEB_ROOT / "public" / "models" / "yolo11n-512-dynamic-v2.onnx"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as source:
        for chunk in iter(lambda: source.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def main() -> None:
    exported = Path(
        YOLO("yolo11n.pt").export(
            format="onnx",
            imgsz=512,
            opset=17,
            dynamic=True,
            simplify=True,
            nms=False,
        )
    )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(exported, OUTPUT)
    print(f"wrote {OUTPUT}")
    print(f"bytes {OUTPUT.stat().st_size}")
    print(f"sha256 {sha256(OUTPUT)}")


if __name__ == "__main__":
    main()
