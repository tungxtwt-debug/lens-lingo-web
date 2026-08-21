import io
import logging
import os
from contextlib import asynccontextmanager
from pathlib import Path

SERVER_DIR = Path(__file__).resolve().parent
RUNTIME_DIR = SERVER_DIR / ".runtime"
RUNTIME_DIR.mkdir(exist_ok=True)
os.environ.setdefault("YOLO_CONFIG_DIR", str(RUNTIME_DIR / "ultralytics"))
os.environ.setdefault("MPLCONFIGDIR", str(RUNTIME_DIR / "matplotlib"))

from fastapi import FastAPI, File, HTTPException, Request, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field
from PIL import Image, UnidentifiedImageError
from dotenv import load_dotenv
from tts_service import TTSServiceError, get_cached_audio, synthesize
from vision import VisionService

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("local-vision")

load_dotenv()

VISION_MODEL = os.getenv("VISION_MODEL", "yolo11n").strip().lower()
MIN_CONFIDENCE = float(os.getenv("VISION_MIN_CONFIDENCE", "0.45"))
MAX_OBJECTS = int(os.getenv("VISION_MAX_OBJECTS", "10"))
INFERENCE_SIZE = int(os.getenv("VISION_IMAGE_SIZE", "640"))
MAX_FILE_SIZE = int(os.getenv("VISION_MAX_UPLOAD_MB", "10")) * 1024 * 1024
MAX_IMAGE_PIXELS = int(os.getenv("VISION_MAX_IMAGE_PIXELS", "100000000"))
ENABLE_TTS = os.getenv("ENABLE_TTS", "true").strip().lower() in {"1", "true", "yes"}
CORS_ORIGINS = [
    origin.strip().rstrip("/")
    for origin in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")
    if origin.strip()
]
SUPPORTED_TYPES = {"image/jpeg", "image/png", "image/webp", "image/gif", "image/bmp"}

vision_service = VisionService(
    server_dir=SERVER_DIR,
    model_id=VISION_MODEL,
    confidence=MIN_CONFIDENCE,
    max_objects=MAX_OBJECTS,
    image_size=INFERENCE_SIZE,
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    vision_service.load()
    yield


app = FastAPI(title="Lens Lingo Local Vision", lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Accept"],
)


@app.get("/health")
def health():
    return {
        "success": True,
        "service": "local-yolo-vision",
        "model": vision_service.model_id,
        "modelFile": vision_service.model_path.name,
        "device": vision_service.device,
        "imageSize": vision_service.image_size,
    }


class TTSRequest(BaseModel):
    text: str = Field(min_length=1, max_length=100)
    language: str


@app.post("/api/tts")
def create_tts_audio(payload: TTSRequest, request: Request):
    if not ENABLE_TTS:
        raise HTTPException(503, "网页版发音正在准备中")
    try:
        audio_path, voice, cached = synthesize(payload.text, payload.language)
        base_url = str(request.base_url).rstrip("/")
        return {
            "success": True,
            "audioUrl": f"{base_url}/api/tts/audio/{audio_path.name}",
            "voice": voice,
            "cached": cached,
        }
    except TTSServiceError as error:
        raise HTTPException(503, str(error))


@app.get("/api/tts/audio/{filename}")
def serve_tts_audio(filename: str):
    if not ENABLE_TTS:
        raise HTTPException(404, "网页版发音正在准备中")
    audio_path = get_cached_audio(filename)
    if not audio_path:
        raise HTTPException(404, "发音文件不存在或已失效")
    return FileResponse(
        path=audio_path,
        media_type="audio/wav",
    )


@app.post("/api/vision/analyze")
async def analyze_image(image: UploadFile = File(...)):
    if image.content_type not in SUPPORTED_TYPES:
        raise HTTPException(415, "图片格式不受支持，请使用 JPG、PNG 或 WebP")

    content = await image.read(MAX_FILE_SIZE + 1)
    if len(content) > MAX_FILE_SIZE:
        raise HTTPException(413, f"图片不能超过 {MAX_FILE_SIZE // 1024 // 1024}MB")
    if not content:
        raise HTTPException(400, "请选择一张图片")

    try:
        pil_image = Image.open(io.BytesIO(content))
        if pil_image.width * pil_image.height > MAX_IMAGE_PIXELS:
            raise HTTPException(413, "图片尺寸过大，请压缩后重试")
        pil_image.load()
        pil_image = pil_image.convert("RGB")
    except HTTPException:
        raise
    except (UnidentifiedImageError, OSError):
        raise HTTPException(400, "无法读取图片，请重新选择 JPG、PNG 或 WebP 图片")

    try:
        return {"success": True, "objects": vision_service.detect(pil_image)}
    except Exception:
        logger.exception("本地物体检测失败")
        raise HTTPException(500, "本地图片识别失败，请稍后重试")

@app.exception_handler(HTTPException)
async def friendly_http_error(request, error):
    return JSONResponse(
        status_code=error.status_code,
        content={"success": False, "message": error.detail},
    )
