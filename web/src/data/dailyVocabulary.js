import cocoTranslations from "./cocoTranslations.js";
import wordDetails from "./wordDetails.js";
import extendedTranslations from "./dailyVocabularyTranslations.js";
import curatedExamples from "./dailyVocabularyExamples.js";

const LANGUAGES = ["zh", "ja", "ko", "fr", "es", "de"];
const EMPTY_EXAMPLES = () => ({ en: [], zh: [], ja: [], ko: [], fr: [], es: [], de: [] });

// Phase 1 候选词：以每天能在家中、学校或通勤途中看到的物品为准。
// 此文件暂不接管现有页面；只有 reviewStatus === "verified" 的完整数据才能展示。
const CATEGORY_WORDS = {
  home: [
    "bed", "chair", "table", "desk", "couch", "lamp", "pillow", "blanket",
    "sheet", "curtain", "door", "window", "mirror", "clock", "vase"
  ],
  kitchen: [
    "cup", "mug", "glass", "plate", "bowl", "spoon", "fork", "knife",
    "bottle", "kettle", "pan", "pot", "cutting board", "sink", "refrigerator"
  ],
  food: [
    "apple", "banana", "orange", "bread", "rice", "egg", "milk", "cake", "carrot", "sandwich"
  ],
  electronics: [
    "phone", "laptop", "tablet", "keyboard", "mouse", "charger", "headphones",
    "camera", "television", "remote control"
  ],
  study: [
    "book", "notebook", "pen", "pencil", "eraser", "ruler", "paper", "folder", "backpack", "scissors"
  ],
  bathroom: [
    "toothbrush", "toothpaste", "soap", "towel", "comb", "hairbrush", "shampoo", "toilet", "bathtub", "shower"
  ],
  clothes: [
    "shirt", "T-shirt", "jacket", "coat", "pants", "shorts", "skirt", "dress", "sock", "shoe"
  ],
  personal: [
    "bag", "wallet", "key", "umbrella", "eyeglasses", "sunglasses", "watch", "hat", "glove", "suitcase"
  ],
  transport: ["bicycle", "car", "bus", "train", "airplane"],
  outdoor: ["tree", "flower", "plant", "bench", "traffic light"]
};

const YOLO11_ALIASES = {
  phone: "cell phone",
  television: "tv",
  "remote control": "remote",
  table: "dining table",
  plant: "potted plant"
};

const YOLO_WORLD_WORDS = new Set([
  "cup", "mug", "glass", "plate", "bowl", "spoon", "fork", "knife", "bottle",
  "kettle", "pan", "pot", "cutting board", "refrigerator", "sink", "bed", "pillow",
  "blanket", "sheet", "lamp", "clock", "mirror", "toothbrush", "toothpaste", "soap",
  "towel", "comb", "hairbrush", "shampoo", "toilet", "bathtub", "shower", "book",
  "notebook", "pen", "pencil", "eraser", "ruler", "scissors", "keyboard", "mouse",
  "desk", "chair", "paper", "folder", "backpack", "phone", "laptop", "tablet",
  "television", "remote control", "charger", "headphones", "camera", "watch", "shirt",
  "T-shirt", "jacket", "coat", "pants", "shorts", "skirt", "dress", "sock", "shoe",
  "hat", "glove", "bag", "umbrella", "eyeglasses", "sunglasses", "wallet", "key", "suitcase", "plant"
]);

function slugify(word) {
  return word.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getCocoName(english) {
  const candidate = YOLO11_ALIASES[english] || english.toLowerCase();
  return cocoTranslations[candidate] ? candidate : "";
}

const vocabulary = Object.entries(CATEGORY_WORDS).flatMap(([category, words]) =>
  words.map((english) => {
    const cocoName = getCocoName(english);
    const sourceTranslations = cocoName ? cocoTranslations[cocoName] : extendedTranslations[english];
    const translations = LANGUAGES.reduce((result, language) => {
      result[language] = sourceTranslations ? sourceTranslations[language] : "";
      return result;
    }, {});

    return {
      id: `daily-${slugify(english)}`,
      english,
      category,
      translations,
      meaningZh: cocoName ? wordDetails[cocoName].definitionZh : sourceTranslations.zh,
      partOfSpeech: "noun",
      difficultyLevel: "A1",
      examples: curatedExamples[english] || EMPTY_EXAMPLES(),
      modelSupport: {
        yolo11n: cocoName || null,
        yoloWorld: YOLO_WORLD_WORDS.has(english) ? english : null
      },
      // 名称完成基础检查；例句未审核，因此整条记录仍不能标为 verified。
      reviewStatus: "checked"
    };
  })
);

if (vocabulary.length !== 100) {
  throw new Error(`Phase 1 vocabulary must contain 100 words, received ${vocabulary.length}`);
}

export { CATEGORY_WORDS, vocabulary };
