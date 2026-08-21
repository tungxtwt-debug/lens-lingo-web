import { MAX_IMAGE_EDGE, MAX_UPLOAD_BYTES } from "../config/app.js";

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("无法读取这张图片，请换一张再试。"));
    };
    image.src = url;
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("图片压缩失败，请重试。")), type, quality);
  });
}

export async function prepareImage(file) {
  if (!file || !file.type.startsWith("image/")) throw new Error("请选择 JPG、PNG 或 WebP 图片。");

  const image = await loadImage(file);
  const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: false });
  context.fillStyle = "#fff";
  context.fillRect(0, 0, width, height);
  // Modern Safari/Chrome decode EXIF orientation before drawing to canvas.
  context.drawImage(image, 0, 0, width, height);

  let quality = 0.9;
  let blob = await canvasToBlob(canvas, "image/jpeg", quality);
  while (blob.size > MAX_UPLOAD_BYTES && quality > 0.5) {
    quality -= 0.1;
    blob = await canvasToBlob(canvas, "image/jpeg", quality);
  }
  if (blob.size > MAX_UPLOAD_BYTES) throw new Error("压缩后仍超过 5MB，请选择尺寸更小的图片。 ");

  const stem = (file.name || "photo").replace(/\.[^.]+$/, "");
  return { blob, width, height, name: `${stem}.jpg` };
}

export async function createObjectCrop(imageUrl, boundingBox) {
  if (!imageUrl || !boundingBox) return "";
  const image = await loadImage(await (await fetch(imageUrl)).blob());
  const paddingX = boundingBox.width * 0.15;
  const paddingY = boundingBox.height * 0.15;
  const left = Math.max(0, boundingBox.x - paddingX);
  const top = Math.max(0, boundingBox.y - paddingY);
  const right = Math.min(1, boundingBox.x + boundingBox.width + paddingX);
  const bottom = Math.min(1, boundingBox.y + boundingBox.height + paddingY);
  const sourceX = Math.round(left * image.naturalWidth);
  const sourceY = Math.round(top * image.naturalHeight);
  const sourceWidth = Math.max(1, Math.round((right - left) * image.naturalWidth));
  const sourceHeight = Math.max(1, Math.round((bottom - top) * image.naturalHeight));
  const scale = Math.min(1, 900 / sourceWidth, 700 / sourceHeight);
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(sourceWidth * scale));
  canvas.height = Math.max(1, Math.round(sourceHeight * scale));
  canvas.getContext("2d").drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.9);
}
