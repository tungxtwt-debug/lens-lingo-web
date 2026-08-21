import { TTS_PROVIDER, TTS_STATIC_AVAILABLE, TTS_STATIC_BASE_URL } from "../config/app.js";

let activeAudio = null;
let activeController = null;

function stopActive() {
  activeController?.abort();
  activeController = null;
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.src = "";
    activeAudio = null;
  }
}

async function resolveAudioUrl(text, language, signal) {
  if (signal.aborted) throw new DOMException("发音已取消", "AbortError");
  if (TTS_PROVIDER !== "static-audio" || !TTS_STATIC_AVAILABLE) throw new Error("网页版发音正在准备中");
  const slug = String(text).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-").replace(/^-|-$/g, "");
  return `${TTS_STATIC_BASE_URL}/${language}/${slug}.mp3`;
}

export async function speak(text, language, onState = () => {}) {
  stopActive();
  activeController = new AbortController();
  onState("preparing");
  try {
    const audioUrl = await resolveAudioUrl(text, language, activeController.signal);
    const audio = new Audio(audioUrl);
    activeAudio = audio;
    await new Promise((resolve, reject) => {
      audio.onplay = () => onState("playing");
      audio.onended = resolve;
      audio.onerror = () => reject(new Error("音频播放失败，请重试。 "));
      audio.play().catch(reject);
    });
    if (activeAudio === audio) onState("ended");
  } catch (error) {
    if (error.name === "AbortError") return;
    onState("error");
    throw error;
  } finally {
    activeController = null;
  }
}

export function stopSpeaking() {
  stopActive();
}
