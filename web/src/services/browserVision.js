import * as ort from "onnxruntime-web/wasm";
import { COCO_CLASSES } from "./cocoClasses.js";

const INPUT_SIZE = 512;
const MODEL_STRIDE = 32;
const CONFIDENCE_THRESHOLD = 0.45;
const MODEL_HASH = "d3c0638cc1a384f0dda77134287b5dd98bbe1a86e4395235c4a2d57565d3d04d";
const MODEL_URL = `/models/yolo11n-512-dynamic-v2.onnx?v=${MODEL_HASH}`;
const MODEL_CACHE_PREFIX = "lens-lingo-yolo11n-";
const MODEL_CACHE = `${MODEL_CACHE_PREFIX}${MODEL_HASH}`;

const isIPhoneSafari = /iP(?:hone|ad|od)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent);

// Cloudflare Pages does not add cross-origin isolation headers by default, so
// the production path is intentionally single-thread WASM on every device.
ort.env.wasm.numThreads = 1;
ort.env.wasm.simd = true;
ort.env.wasm.wasmPaths = "/ort/";

let activeSession = null;
let sessionPromise = null;
let inferencePromise = null;
let lastMetrics = null;
let cacheCleanupPromise = null;

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function intersectionOverUnion(a, b) {
  const intersection = Math.max(0, Math.min(a.x2, b.x2) - Math.max(a.x1, b.x1))
    * Math.max(0, Math.min(a.y2, b.y2) - Math.max(a.y1, b.y1));
  const union = (a.x2 - a.x1) * (a.y2 - a.y1) + (b.x2 - b.x1) * (b.y2 - b.y1) - intersection;
  return union > 0 ? intersection / union : 0;
}

function nms(items, threshold, limit) {
  const kept = [];
  for (const candidate of [...items].sort((a, b) => b.confidence - a.confidence)) {
    if (kept.some((existing) => candidate.classId === existing.classId && intersectionOverUnion(candidate, existing) > threshold)) continue;
    kept.push(candidate);
    if (kept.length >= limit) break;
  }
  return kept;
}

async function readWithProgress(response, onProgress, signal) {
  const total = Number(response.headers.get("content-length")) || 0;
  if (!response.body || !total) {
    const buffer = await response.arrayBuffer();
    onProgress?.({ phase: "model", ratio: 1, bytes: buffer.byteLength, fromCache: false });
    return buffer;
  }
  const reader = response.body.getReader();
  const chunks = [];
  let received = 0;
  while (true) {
    if (signal?.aborted) throw new DOMException("识别已取消", "AbortError");
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.byteLength;
    onProgress?.({ phase: "model", ratio: received / total, bytes: received, fromCache: false });
  }
  const merged = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return merged.buffer;
}

async function getModelBuffer(onProgress, signal) {
  if ("caches" in globalThis && !cacheCleanupPromise) {
    cacheCleanupPromise = caches.keys().then((names) => Promise.all(
      names
        .filter((name) => name.startsWith(MODEL_CACHE_PREFIX) && name !== MODEL_CACHE)
        .map((name) => caches.delete(name))
    ));
  }
  await cacheCleanupPromise;
  const cache = "caches" in globalThis ? await caches.open(MODEL_CACHE) : null;
  const cached = cache ? await cache.match(MODEL_URL) : null;
  if (cached) {
    const buffer = await cached.arrayBuffer();
    onProgress?.({ phase: "model", ratio: 1, bytes: buffer.byteLength, fromCache: true });
    return buffer;
  }
  const response = await fetch(MODEL_URL, { cache: "force-cache", signal });
  if (!response.ok) throw new Error(`本地识别模型加载失败（HTTP ${response.status}）。`);
  const buffer = await readWithProgress(response, onProgress, signal);
  if (cache) {
    await cache.put(MODEL_URL, new Response(buffer, {
      headers: { "Content-Type": "application/octet-stream", "Content-Length": String(buffer.byteLength) }
    }));
  }
  return buffer;
}

async function createSession(backend, modelBuffer) {
  return ort.InferenceSession.create(modelBuffer, {
    executionProviders: [backend],
    graphOptimizationLevel: "all",
    executionMode: "sequential"
  });
}

async function ensureSession(onProgress, signal) {
  if (activeSession) return activeSession;
  if (sessionPromise) return sessionPromise;
  sessionPromise = (async () => {
    const loadStarted = performance.now();
    const modelBuffer = await getModelBuffer(onProgress, signal);
    onProgress?.({ phase: "initializing", backend: "wasm" });
    activeSession = await createSession("wasm", modelBuffer);
    lastMetrics = { ...lastMetrics, modelLoadMs: performance.now() - loadStarted };
    return activeSession;
  })();
  try {
    return await sessionPromise;
  } finally {
    sessionPromise = null;
  }
}

function preprocess(image) {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const scale = Math.min(INPUT_SIZE / sourceWidth, INPUT_SIZE / sourceHeight);
  const resizedWidth = Math.round(sourceWidth * scale);
  const resizedHeight = Math.round(sourceHeight * scale);
  const remainingWidth = (INPUT_SIZE - resizedWidth) % MODEL_STRIDE;
  const remainingHeight = (INPUT_SIZE - resizedHeight) % MODEL_STRIDE;
  const padX = Math.round(remainingWidth / 2 - 0.1);
  const padY = Math.round(remainingHeight / 2 - 0.1);
  const padRight = Math.round(remainingWidth / 2 + 0.1);
  const padBottom = Math.round(remainingHeight / 2 + 0.1);
  const tensorWidth = resizedWidth + padX + padRight;
  const tensorHeight = resizedHeight + padY + padBottom;
  const canvas = document.createElement("canvas");
  canvas.width = tensorWidth;
  canvas.height = tensorHeight;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.fillStyle = "rgb(114,114,114)";
  context.fillRect(0, 0, tensorWidth, tensorHeight);
  context.drawImage(image, padX, padY, resizedWidth, resizedHeight);
  const rgba = context.getImageData(0, 0, tensorWidth, tensorHeight).data;
  const plane = tensorWidth * tensorHeight;
  const input = new Float32Array(plane * 3);
  for (let pixel = 0; pixel < plane; pixel += 1) {
    const source = pixel * 4;
    input[pixel] = rgba[source + 2] / 255;
    input[plane + pixel] = rgba[source + 1] / 255;
    input[plane * 2 + pixel] = rgba[source] / 255;
  }
  return {
    tensor: new ort.Tensor("float32", input, [1, 3, tensorHeight, tensorWidth]),
    meta: { sourceWidth, sourceHeight, scale, padX, padY }
  };
}

function decode(output, meta) {
  const [, channels, candidates] = output.dims;
  if (channels !== 84) throw new Error(`不支持的 YOLO 输出：${output.dims.join("×")}`);
  const decoded = [];
  for (let index = 0; index < candidates; index += 1) {
    let classId = 0;
    let confidence = -Infinity;
    for (let classIndex = 0; classIndex < COCO_CLASSES.length; classIndex += 1) {
      const score = output.data[(classIndex + 4) * candidates + index];
      if (score > confidence) {
        confidence = score;
        classId = classIndex;
      }
    }
    if (confidence < CONFIDENCE_THRESHOLD) continue;
    const centerX = output.data[index];
    const centerY = output.data[candidates + index];
    const width = output.data[candidates * 2 + index];
    const height = output.data[candidates * 3 + index];
    decoded.push({
      classId,
      confidence,
      x1: clamp((centerX - width / 2 - meta.padX) / meta.scale, 0, meta.sourceWidth),
      y1: clamp((centerY - height / 2 - meta.padY) / meta.scale, 0, meta.sourceHeight),
      x2: clamp((centerX + width / 2 - meta.padX) / meta.scale, 0, meta.sourceWidth),
      y2: clamp((centerY + height / 2 - meta.padY) / meta.scale, 0, meta.sourceHeight)
    });
  }
  return nms(nms(decoded, 0.7, 30), 0.5, 10).map((item, index) => ({
    id: String(index + 1),
    objectName: COCO_CLASSES[item.classId],
    boundingBox: {
      x: clamp(item.x1 / meta.sourceWidth),
      y: clamp(item.y1 / meta.sourceHeight),
      width: clamp((item.x2 - item.x1) / meta.sourceWidth),
      height: clamp((item.y2 - item.y1) / meta.sourceHeight)
    }
  }));
}

function loadBlobImage(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("无法解码这张图片。"));
    };
    image.src = url;
  });
}

async function runInference(blob, signal, onProgress) {
  if (signal?.aborted) throw new DOMException("识别已取消", "AbortError");
  const session = await ensureSession(onProgress, signal);
  if (signal?.aborted) throw new DOMException("识别已取消", "AbortError");
  onProgress?.({ phase: "analyzing", backend: "wasm" });
  const image = await loadBlobImage(blob);
  const preprocessStarted = performance.now();
  const { tensor, meta } = preprocess(image);
  const inferenceStarted = performance.now();
  const outputMap = await session.run({ [session.inputNames[0]]: tensor });
  const inferenceMs = performance.now() - inferenceStarted;
  if (signal?.aborted) throw new DOMException("识别已取消", "AbortError");
  onProgress?.({ phase: "generating", backend: "wasm" });
  const objects = decode(outputMap[session.outputNames[0]], meta);
  lastMetrics = {
    ...lastMetrics,
    backend: "wasm",
    preprocessMs: inferenceStarted - preprocessStarted,
    inferenceMs,
    detectionCount: objects.length
  };
  console.info(`[Lens Lingo vision] ${JSON.stringify(lastMetrics)}`);
  return objects;
}

export async function analyzeLocally(blob, signal, onProgress) {
  // Keep inference serial. A canceled request may still be finishing inside a
  // native WASM call, so a retry waits instead of overlapping it.
  while (inferencePromise) await inferencePromise.catch(() => {});
  const current = runInference(blob, signal, onProgress);
  inferencePromise = current;
  try {
    return await current;
  } finally {
    if (inferencePromise === current) inferencePromise = null;
  }
}

export function getVisionRuntimeInfo() {
  return {
    backend: "wasm",
    modelCached: Boolean(activeSession),
    iPhoneSingleThreadWasm: isIPhoneSafari,
    numThreads: 1,
    simd: true,
    lastMetrics
  };
}
