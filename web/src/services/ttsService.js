const LOCALE_BY_LANGUAGE = Object.freeze({
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
  ko: "ko-KR",
  fr: "fr-FR",
  es: "es-ES",
  de: "de-DE"
});

const VOICE_WAIT_MS = 1_800;
const SPEECH_TIMEOUT_MS = 15_000;

let activeUtterance = null;
let activeRun = 0;

function speechEngine() {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    throw new Error("当前浏览器不支持系统发音");
  }
  return window.speechSynthesis;
}

function normalizeLocale(locale) {
  return String(locale || "").trim().replace(/_/g, "-").toLowerCase();
}

export function findMatchingVoice(voices, locale) {
  const target = normalizeLocale(locale);
  const language = target.split("-")[0];
  const available = Array.isArray(voices) ? voices : Array.from(voices || []);
  return available.find((voice) => normalizeLocale(voice.lang) === target)
    || available.find((voice) => normalizeLocale(voice.lang).split("-")[0] === language)
    || null;
}

function waitForVoices(engine, runId) {
  const initial = engine.getVoices();
  if (initial.length) return Promise.resolve(initial);

  return new Promise((resolve) => {
    let finished = false;
    let pollId = 0;
    let timeoutId = 0;
    const finish = () => {
      if (finished) return;
      const voices = engine.getVoices();
      if (!voices.length && performance.now() < deadline && runId === activeRun) return;
      finished = true;
      clearInterval(pollId);
      clearTimeout(timeoutId);
      engine.removeEventListener?.("voiceschanged", finish);
      resolve(voices);
    };
    const deadline = performance.now() + VOICE_WAIT_MS;
    engine.addEventListener?.("voiceschanged", finish, { once: false });
    pollId = window.setInterval(finish, 100);
    timeoutId = window.setTimeout(finish, VOICE_WAIT_MS);
  });
}

export async function speak(text, language, onState = () => {}) {
  stopSpeaking();
  const engine = speechEngine();
  const runId = activeRun;
  const locale = LOCALE_BY_LANGUAGE[language];
  const cleanText = String(text || "").trim();
  if (!locale || !cleanText) throw new Error("当前单词无法发音");

  onState("preparing");
  try {
    const voices = await waitForVoices(engine, runId);
    if (runId !== activeRun) throw new DOMException("发音已取消", "AbortError");
    const voice = findMatchingVoice(voices, locale);
    if (!voice) throw new Error("当前设备没有可用的该语言发音");

    await new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      let settled = false;
      const timeoutId = window.setTimeout(() => {
        engine.cancel();
        finish(() => reject(new Error("系统发音超时，请重试")));
      }, SPEECH_TIMEOUT_MS);
      const finish = (complete) => {
        if (settled) return;
        settled = true;
        clearTimeout(timeoutId);
        if (activeUtterance === utterance) activeUtterance = null;
        complete();
      };

      utterance.lang = locale;
      utterance.voice = voice;
      utterance.onstart = () => {
        if (runId === activeRun) onState("playing");
      };
      utterance.onend = () => finish(resolve);
      utterance.onerror = (event) => {
        if (runId !== activeRun || ["canceled", "interrupted"].includes(event.error)) {
          finish(() => reject(new DOMException("发音已取消", "AbortError")));
        } else {
          finish(() => reject(new Error("系统发音失败，请重试")));
        }
      };
      activeUtterance = utterance;
      engine.speak(utterance);
    });
    if (runId === activeRun) onState("ended");
  } catch (error) {
    if (error?.name === "AbortError") return;
    onState("error");
    throw error;
  }
}

export function stopSpeaking() {
  activeRun += 1;
  activeUtterance = null;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}
