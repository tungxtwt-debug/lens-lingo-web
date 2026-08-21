import translations from "./cocoTranslations.js";

// 例句在本地按语言语法资料生成一次，页面只读取最终句子，不做字符串翻译。
// 法语、西班牙语和德语明确记录冠词；日语区分有生命/无生命；韩语按收音选择助词。
const PLURAL_EN = new Set(["skis", "scissors"]);
const ANIMATE = new Set([
  "person", "bird", "cat", "dog", "horse", "sheep", "cow",
  "elephant", "bear", "zebra", "giraffe"
]);

const FR_FEMININE = new Set([
  "person", "car", "motorcycle", "fire hydrant", "cow", "giraffe",
  "tie", "suitcase", "baseball bat", "surfboard", "tennis racket", "bottle",
  "cup", "fork", "spoon", "banana", "apple", "orange", "carrot", "pizza", "chair",
  "potted plant", "dining table", "tv", "mouse", "remote", "clock", "toothbrush"
]);
const FR_PLURAL = new Set(["skis", "toilet", "scissors"]);

const ES_FEMININE = new Set([
  "person", "bicycle", "motorcycle", "fire hydrant", "stop sign", "cow", "sheep", "zebra",
  "giraffe", "backpack", "tie", "suitcase", "snowboard", "sports ball",
  "surfboard", "tennis racket", "bottle", "wine glass", "cup", "spoon", "apple", "orange",
  "carrot", "pizza", "chair", "potted plant", "bed", "dining table", "toaster"
]);
const ES_PLURAL_FEMININE = new Set(["scissors"]);
const ES_PLURAL_MASCULINE = new Set(["skis"]);

const DE_FEMININE = new Set([
  "person", "traffic light", "parking meter", "bench", "cat", "cow", "giraffe", "handbag",
  "tie", "bottle", "cup", "fork", "bowl", "banana", "orange", "carrot",
  "pizza", "potted plant", "toilet", "mouse", "remote", "keyboard", "microwave", "sink",
  "clock", "vase", "scissors", "toothbrush"
]);
const DE_PLURAL = new Set(["skis"]);
const DE_NEUTER = new Set([
  "bicycle", "car", "motorcycle", "airplane", "boat", "stop sign", "horse", "sheep", "zebra",
  "frisbee", "snowboard", "skateboard", "surfboard", "wine glass", "knife", "sandwich", "couch",
  "bed", "cell phone", "book"
]);

function frenchArticle(objectName) {
  if (FR_PLURAL.has(objectName)) return "des";
  return FR_FEMININE.has(objectName) ? "une" : "un";
}

function spanishArticle(objectName) {
  if (ES_PLURAL_FEMININE.has(objectName)) return "unas";
  if (ES_PLURAL_MASCULINE.has(objectName)) return "unos";
  return ES_FEMININE.has(objectName) ? "una" : "un";
}

function germanArticle(objectName) {
  if (DE_PLURAL.has(objectName)) return "die";
  return DE_FEMININE.has(objectName) ? "eine" : "ein";
}

function frenchDefinitePhrase(objectName, word) {
  if (FR_PLURAL.has(objectName)) return `Les ${word}`;
  if (/^[aeiouyàâäéèêëîïôöùûüœ]/i.test(word) || objectName === "clock") return `L'${word}`;
  return `${FR_FEMININE.has(objectName) ? "La" : "Le"} ${word}`;
}

function spanishDefiniteArticle(objectName) {
  if (ES_PLURAL_FEMININE.has(objectName)) return "Las";
  if (ES_PLURAL_MASCULINE.has(objectName)) return "Los";
  return ES_FEMININE.has(objectName) ? "La" : "El";
}

function germanDefiniteArticle(objectName) {
  if (DE_PLURAL.has(objectName) || DE_FEMININE.has(objectName)) return "Die";
  return DE_NEUTER.has(objectName) ? "Das" : "Der";
}

function koreanSubjectParticle(word) {
  const lastCharacter = word.trim().slice(-1);
  const code = lastCharacter.charCodeAt(0);
  const isHangulSyllable = code >= 0xac00 && code <= 0xd7a3;
  const hasFinalConsonant = isHangulSyllable && (code - 0xac00) % 28 !== 0;
  return hasFinalConsonant ? "이" : "가";
}

function koreanTopicParticle(word) {
  const lastCharacter = word.trim().slice(-1);
  const code = lastCharacter.charCodeAt(0);
  const isHangulSyllable = code >= 0xac00 && code <= 0xd7a3;
  const hasFinalConsonant = isHangulSyllable && (code - 0xac00) % 28 !== 0;
  return hasFinalConsonant ? "은" : "는";
}

function buildExamples(objectName) {
  const words = translations[objectName];
  const englishSentence = PLURAL_EN.has(objectName)
    ? `Here are the ${words.en}.`
    : `Here is the ${words.en}.`;
  const chineseSentence = `这里有${words.zh}。`;
  const englishLocation = PLURAL_EN.has(objectName)
    ? `The ${words.en} are in the picture.`
    : `The ${words.en} is in the picture.`;
  const chineseLocation = `${words.zh}在图片里。`;
  const germanSentence = DE_PLURAL.has(objectName)
    ? `Hier sind die ${words.de}.`
    : `Hier ist ${germanArticle(objectName)} ${words.de}.`;
  const frenchPhrase = frenchDefinitePhrase(objectName, words.fr);
  const frenchLocation = `${frenchPhrase} ${FR_PLURAL.has(objectName) ? "sont" : "est"} sur la photo.`;
  const spanishLocation = `${spanishDefiniteArticle(objectName)} ${words.es} ${ES_PLURAL_FEMININE.has(objectName) || ES_PLURAL_MASCULINE.has(objectName) ? "están" : "está"} en la foto.`;
  const germanLocation = `${germanDefiniteArticle(objectName)} ${words.de} ${DE_PLURAL.has(objectName) ? "sind" : "ist"} auf dem Bild.`;

  return {
    en: [
      { sentence: englishSentence, translation: chineseSentence },
      { sentence: englishLocation, translation: chineseLocation }
    ],
    zh: [
      { sentence: chineseSentence, translation: englishSentence },
      { sentence: chineseLocation, translation: englishLocation }
    ],
    ja: [{
      sentence: `ここに${words.ja}が${ANIMATE.has(objectName) ? "います" : "あります"}。`,
      translation: chineseSentence
    }, {
      sentence: `${words.ja}は写真の中に${ANIMATE.has(objectName) ? "います" : "あります"}。`,
      translation: chineseLocation
    }],
    ko: [{
      sentence: `여기에 ${words.ko}${koreanSubjectParticle(words.ko)} 있어요.`,
      translation: chineseSentence
    }, {
      sentence: `${words.ko}${koreanTopicParticle(words.ko)} 사진 속에 있어요.`,
      translation: chineseLocation
    }],
    fr: [{
      sentence: `Voici ${frenchArticle(objectName)} ${words.fr}.`,
      translation: chineseSentence
    }, { sentence: frenchLocation, translation: chineseLocation }],
    es: [{
      sentence: `Aquí hay ${spanishArticle(objectName)} ${words.es}.`,
      translation: chineseSentence
    }, { sentence: spanishLocation, translation: chineseLocation }],
    de: [
      { sentence: germanSentence, translation: chineseSentence },
      { sentence: germanLocation, translation: chineseLocation }
    ]
  };
}

export default Object.keys(translations).reduce((result, objectName) => {
  result[objectName] = buildExamples(objectName);
  return result;
}, {});
