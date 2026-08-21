export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
export const TTS_PROVIDER = import.meta.env.VITE_TTS_PROVIDER || "local-api";
export const TTS_STATIC_BASE_URL = (import.meta.env.VITE_TTS_STATIC_BASE_URL || "/audio").replace(/\/$/, "");
export const TTS_STATIC_AVAILABLE = import.meta.env.VITE_TTS_STATIC_AVAILABLE === "true";
export const ANALYSIS_TIMEOUT_MS = 120_000;
export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
export const MAX_IMAGE_EDGE = 1600;

export const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" }
];
