import { ANALYSIS_TIMEOUT_MS } from "../config/app.js";
import { analyzeLocally } from "./browserVision.js";

function clamp(value) {
  return Math.min(1, Math.max(0, Number(value) || 0));
}

function normalizeObjects(objects) {
  return (Array.isArray(objects) ? objects : []).map((item, index) => ({
    id: String(item.id || index + 1),
    objectName: String(item.objectName || "unknown").trim().toLowerCase(),
    boundingBox: {
      x: clamp(item.boundingBox?.x),
      y: clamp(item.boundingBox?.y),
      width: clamp(item.boundingBox?.width),
      height: clamp(item.boundingBox?.height)
    }
  }));
}

export async function analyzeImage(blob, _filename, externalSignal, options = {}) {
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort("timeout"), ANALYSIS_TIMEOUT_MS);
  const abort = () => timeoutController.abort("canceled");
  externalSignal?.addEventListener("abort", abort, { once: true });
  try {
    return normalizeObjects(await analyzeLocally(blob, timeoutController.signal, options.onProgress));
  } catch (error) {
    if (timeoutController.signal.aborted) {
      if (timeoutController.signal.reason === "timeout") throw new Error("本地识别超时，请重新尝试。 ");
      throw new DOMException("识别已取消", "AbortError");
    }
    throw new Error(error?.message || "浏览器本地识别暂时不可用。 ");
  } finally {
    clearTimeout(timeoutId);
    externalSignal?.removeEventListener("abort", abort);
  }
}
