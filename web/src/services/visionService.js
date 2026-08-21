import { ANALYSIS_TIMEOUT_MS, API_BASE_URL } from "../config/app.js";

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

export async function analyzeImage(blob, filename, externalSignal) {
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort("timeout"), ANALYSIS_TIMEOUT_MS);
  const abort = () => timeoutController.abort("canceled");
  externalSignal?.addEventListener("abort", abort, { once: true });
  const formData = new FormData();
  formData.append("image", blob, filename || "photo.jpg");

  try {
    const response = await fetch(`${API_BASE_URL}/api/vision/analyze`, {
      method: "POST",
      body: formData,
      signal: timeoutController.signal
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.success || !Array.isArray(data.objects)) {
      throw new Error(data.message || "图片识别服务暂时不可用。 ");
    }
    return normalizeObjects(data.objects);
  } catch (error) {
    if (timeoutController.signal.aborted) {
      if (timeoutController.signal.reason === "timeout") throw new Error("识别服务暂时没有响应，请重新尝试。");
      throw new DOMException("识别已取消", "AbortError");
    }
    if (error instanceof TypeError) throw new Error("识别服务暂时没有响应，请重新尝试。");
    throw error;
  } finally {
    clearTimeout(timeoutId);
    externalSignal?.removeEventListener("abort", abort);
  }
}
