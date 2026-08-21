import hashlib
import os
import re
import subprocess
import tempfile
import threading
import wave
from pathlib import Path

SERVER_DIR = Path(__file__).resolve().parent
CACHE_DIR = SERVER_DIR / "cache" / "tts"
CACHE_DIR.mkdir(parents=True, exist_ok=True)

VOICE_BY_LANGUAGE = {
    "en": "Daniel",
    "zh": "Tingting",
    "ja": "Kyoko",
    "ko": "Yuna",
    "fr": "Thomas",
    "es": "Mónica",
    "de": "Anna",
}

SAY_PATH = "/usr/bin/say"
SAFE_AUDIO_NAME = re.compile(r"^[0-9a-f]{64}\.wav$")
generation_lock = threading.Lock()


class TTSServiceError(Exception):
    pass


def synthesize(text: str, language: str):
    clean_text = validate_input(text, language)
    voice = VOICE_BY_LANGUAGE[language]
    cache_key = hashlib.sha256(f"{language}\0{voice}\0{clean_text}".encode("utf-8")).hexdigest()
    output_path = CACHE_DIR / f"{cache_key}.wav"

    if is_valid_wav(output_path):
        return output_path, voice, True

    with generation_lock:
        if is_valid_wav(output_path):
            return output_path, voice, True
        generate_wav(clean_text, voice, output_path)
    return output_path, voice, False


def validate_input(text: str, language: str):
    if language not in VOICE_BY_LANGUAGE:
        raise TTSServiceError("暂不支持该语言的本地发音")
    clean_text = str(text or "").strip()
    if not clean_text:
        raise TTSServiceError("发音文字不能为空")
    if len(clean_text) > 100:
        raise TTSServiceError("发音文字不能超过 100 个字符")
    if "\x00" in clean_text:
        raise TTSServiceError("发音文字包含不支持的字符")
    return clean_text


def generate_wav(text: str, voice: str, output_path: Path):
    temporary_path = None
    try:
        with tempfile.NamedTemporaryFile(dir=CACHE_DIR, suffix=".wav", delete=False) as temporary:
            temporary_path = Path(temporary.name)

        # 参数数组直接交给 subprocess，不经过 shell，文字不会被解释为命令。
        subprocess.run(
            [
                SAY_PATH,
                "-v", voice,
                "--file-format=WAVE",
                "--data-format=LEI16@22050",
                "-o", str(temporary_path),
                text,
            ],
            check=True,
            capture_output=True,
            timeout=20,
        )

        if not is_valid_wav(temporary_path):
            raise TTSServiceError("macOS 没有生成有效音频，请在普通 Terminal 中启动后端")
        os.replace(temporary_path, output_path)
        temporary_path = None
    except subprocess.TimeoutExpired as error:
        raise TTSServiceError("本地语音生成超时，请稍后重试") from error
    except subprocess.CalledProcessError as error:
        raise TTSServiceError("macOS 本地语音生成失败") from error
    finally:
        if temporary_path and temporary_path.exists():
            temporary_path.unlink()


def is_valid_wav(path: Path):
    if not path.exists() or path.stat().st_size <= 44:
        return False
    try:
        with wave.open(str(path), "rb") as audio:
            return audio.getnframes() > 0 and audio.getframerate() > 0
    except (wave.Error, EOFError, OSError):
        return False


def get_cached_audio(filename: str):
    if not SAFE_AUDIO_NAME.fullmatch(filename):
        return None
    path = CACHE_DIR / filename
    return path if is_valid_wav(path) else None
