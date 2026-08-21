import wordKnowledge from "../data/wordKnowledge.js";
import wordDetails from "../data/wordDetails.js";
import cocoTranslations from "../data/cocoTranslations.js";
import { vocabulary } from "../data/dailyVocabulary.js";

const vocabularyByWord = Object.fromEntries(vocabulary.map((item) => [item.english.toLowerCase(), item]));
const aliases = { "cell phone": "phone", "dining table": "table", "potted plant": "plant", remote: "remote control", tv: "television" };
const basicRelations = new Set(["appliance", "container", "device", "dishware", "electronic device", "food", "footwear", "fruit", "furniture", "garment", "handwear", "seat", "tableware", "timepiece", "tool", "vehicle"]);
const languageNames = { en: "英语", zh: "简体中文", ja: "日语", ko: "韩语", fr: "法语", es: "西班牙语", de: "德语" };
const partOfSpeech = { en: "noun", zh: "名词", ja: "名詞", ko: "명사", fr: "nom", es: "sustantivo", de: "Substantiv" };

export function normalizeWord(word) {
  const normalized = String(word || "").trim().toLowerCase();
  return aliases[normalized] || normalized;
}

export function buildWordDetail(routeWord, language, detectedObject) {
  const normalized = normalizeWord(routeWord);
  const isDetected = detectedObject && normalizeWord(detectedObject.objectName) === normalized;
  const originalName = isDetected ? detectedObject.objectName : routeWord;
  const source = wordDetails[originalName];
  const learning = vocabularyByWord[normalized];
  if (!source && !learning) return null;

  const translations = source ? cocoTranslations[originalName] : { en: learning.english, ...learning.translations };
  const displayName = isDetected ? detectedObject.displayName : (language === "en" ? translations.en : translations[language] || translations.en);
  const examples = (source?.examples || learning.examples)?.[language] || [];
  return {
    objectName: originalName,
    displayName,
    language,
    helperWord: language === "zh" ? translations.en : translations.zh,
    helperLabel: language === "zh" ? "英文" : "中文释义",
    definitionZh: source?.definitionZh || learning.meaningZh,
    partOfSpeech: source?.partOfSpeech?.[language] || partOfSpeech[language] || "noun",
    pronunciation: language === "en" && source ? source.pronunciation.en : "",
    examples,
    exampleHint: language === "zh" ? "中文例句和英文辅助解释" : `${languageNames[language] || "当前语言"}例句和中文解释`,
    knowledge: getKnowledge(originalName),
    boundingBox: isDetected ? detectedObject.boundingBox : null
  };
}

export function getKnowledge(word) {
  const entry = wordKnowledge[normalizeWord(word)];
  if (!entry || entry.reviewStatus !== "verified" || !entry.wordnet.definition) return null;
  const isLearning = (item) => Boolean(vocabularyByWord[String(item || "").toLowerCase()]);
  const filterRelation = (item) => isLearning(item) || basicRelations.has(String(item || "").toLowerCase());
  const synonyms = (entry.wordnet.synonyms || []).filter(filterRelation);
  const hypernyms = (entry.wordnet.hypernyms || []).filter(filterRelation);
  const hyponyms = (entry.wordnet.hyponyms || []).filter(isLearning);
  return {
    definition: entry.wordnet.definition,
    synonyms,
    hypernyms,
    hyponyms,
    relatedLearningWords: entry.relatedLearningWords || []
  };
}
