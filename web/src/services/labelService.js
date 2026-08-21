import cocoTranslations from "../data/cocoTranslations.js";

export function translateAndLayout(objects, language) {
  const placed = [];
  return objects.map((item) => {
    const displayName = cocoTranslations[item.objectName]?.[language] || item.objectName;
    const dimensions = estimate(displayName);
    const box = item.boundingBox;
    const centerX = box.x + box.width / 2;
    const centerY = box.y + box.height / 2;
    const inset = 0.012;
    const candidates = [
      [centerX, centerY],
      [centerX, box.y + dimensions.height / 2 + inset],
      [centerX, box.y + box.height - dimensions.height / 2 - inset],
      [box.x + box.width - dimensions.width / 2 - inset, centerY],
      [box.x + dimensions.width / 2 + inset, centerY]
    ];
    let rectangle = candidates.map(([x, y]) => makeRect(x, y, dimensions)).find((candidate) => !placed.some((entry) => overlaps(candidate, entry)));
    if (!rectangle) rectangle = findNearby(centerX, centerY, dimensions, placed);
    placed.push(rectangle);
    return {
      ...item,
      displayName,
      language,
      isLongLabel: dimensions.isLong,
      labelX: round((rectangle.left + rectangle.right) / 2),
      labelY: round((rectangle.top + rectangle.bottom) / 2)
    };
  });
}

function estimate(text) {
  const units = Array.from(String(text || "")).reduce((total, character) => {
    if (/\s/.test(character)) return total + 0.45;
    if (/[\u3000-\u9fff\u3040-\u30ff\uac00-\ud7af]/.test(character)) return total + 1.65;
    return total + 1;
  }, 0);
  const isLong = units > 11;
  return { width: clamp(0.055 + units * (isLong ? 0.017 : 0.0215), 0.15, 0.38), height: 0.072, isLong };
}

function makeRect(x, y, dimensions) {
  const safeX = clamp(x, dimensions.width / 2, 1 - dimensions.width / 2);
  const safeY = clamp(y, dimensions.height / 2, 1 - dimensions.height / 2);
  return { left: safeX - dimensions.width / 2, right: safeX + dimensions.width / 2, top: safeY - dimensions.height / 2, bottom: safeY + dimensions.height / 2 };
}

function findNearby(centerX, centerY, dimensions, placed) {
  const positions = [];
  for (let x = 2; x < 25; x += 1) for (let y = 2; y < 25; y += 1) {
    positions.push({ x: x / 25, y: y / 25, distance: (x / 25 - centerX) ** 2 + (y / 25 - centerY) ** 2 });
  }
  positions.sort((a, b) => a.distance - b.distance);
  return positions.map((position) => makeRect(position.x, position.y, dimensions)).find((candidate) => !placed.some((entry) => overlaps(candidate, entry))) || makeRect(centerX, centerY, dimensions);
}

function overlaps(a, b, gap = 0.014) {
  return !(a.right + gap <= b.left || a.left >= b.right + gap || a.bottom + gap <= b.top || a.top >= b.bottom + gap);
}

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function round(value) {
  return Math.round(value * 10000) / 10000;
}
