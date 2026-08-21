#!/usr/bin/env python3
"""Generate the small WeChat-side knowledge index from local OEWN data."""

import json
import hashlib
import os
import subprocess
from pathlib import Path

import wn


ROOT = Path(__file__).resolve().parents[2]
SERVER_ROOT = ROOT / "server"
WORDNET_DIR = SERVER_ROOT / "data" / "wordnet"
OUTPUT_PATH = ROOT / "data" / "wordKnowledge.js"
LEXICON = "oewn:2025"
REVIEWED_VOCABULARY_HASH = "91b608dfaf1ac2d246568408519a7f0451ecb13069eedce166bd2ce977873fae"

LOOKUP_ALIASES = {
    "phone": "mobile phone",
    "glass": "drinking glass",
    "sheet": "bed sheet",
    "pan": "frying pan",
    "T-shirt": "tee shirt",
    "eyeglasses": "glasses",
    "pants": "trousers",
}

PREFERRED_SYNSET_IDS = {
    "mug": "oewn-03802912-n",
    "banana": "oewn-07769568-n",
    "cake": "oewn-07644479-n",
    "charger": "oewn-03012598-n",
    "book": "oewn-02873453-n",
    "ruler": "oewn-04125870-n",
    "glove": "oewn-03446036-n",
    "television": "oewn-04413042-n",
    "flower": "oewn-11689786-n",
}

EXCLUDED_LEMMAS = {
    "boob tube", "can", "crapper", "cylix", "Dixie cup", "goggle box", "grace cup",
    "idiot box", "john", "kylix", "mustache cup", "moustache cup", "pot", "potty",
    "stool", "throne", "ticker",
}

# Only ambiguous words need hints. The score is applied to definitions and lemmas.
SENSE_HINTS = {
    "table": ("piece of furniture", "flat top"),
    "mouse": ("computer screen", "cursor", "electronic device"),
    "phone": ("telephone", "radio", "hand-held"),
    "tablet": ("portable computer", "touchscreen"),
    "keyboard": ("computer", "keys"),
    "remote control": ("control", "distance"),
    "pen": ("writing implement", "ink"),
    "paper": ("writing", "printing", "material"),
    "folder": ("folded", "protect the contents"),
    "plant": ("living organism", "botany"),
    "orange": ("edible fruit", "citrus"),
    "watch": ("timepiece",),
    "key": ("lock", "metal device"),
    "bag": ("container",),
    "coat": ("outer garment",),
    "dress": ("one-piece garment",),
    "glove": ("hand", "covering"),
    "hat": ("headdress", "head"),
    "shower": ("plumbing fixture", "sprays water"),
    "toilet": ("plumbing fixture",),
    "comb": ("toothed device", "hair"),
    "bowl": ("dish", "container"),
    "plate": ("dish", "food"),
    "pot": ("cooking", "vessel"),
    "sink": ("plumbing fixture", "washbasin"),
    "lamp": ("artificial light",),
    "mirror": ("reflecting surface",),
    "window": ("opening", "glass"),
    "door": ("movable barrier",),
    "bench": ("seat",),
    "clock": ("timepiece",),
}

LEARNING_RELATION_GROUPS = (
    ("bed", "pillow", "blanket", "sheet", "lamp"),
    ("chair", "table", "desk", "couch", "bench"),
    ("curtain", "door", "window", "mirror", "clock", "vase", "lamp"),
    ("cup", "mug", "glass", "bottle", "kettle"),
    ("plate", "bowl", "spoon", "fork", "knife"),
    ("pan", "pot", "cutting board", "sink", "refrigerator"),
    ("apple", "banana", "orange", "carrot"),
    ("bread", "rice", "egg", "milk", "sandwich", "cake"),
    ("phone", "laptop", "tablet", "keyboard", "mouse", "charger"),
    ("headphones", "camera", "television", "remote control"),
    ("book", "notebook", "pen", "pencil", "eraser", "ruler", "paper", "folder", "backpack", "scissors", "desk"),
    ("toothbrush", "toothpaste", "soap", "towel", "comb", "hairbrush", "shampoo"),
    ("toilet", "bathtub", "shower", "towel", "soap"),
    ("shirt", "T-shirt", "jacket", "coat"),
    ("pants", "shorts", "skirt", "dress", "sock", "shoe"),
    ("bag", "wallet", "key", "umbrella", "eyeglasses", "sunglasses", "watch", "hat", "glove", "suitcase"),
    ("bicycle", "car", "bus", "train", "airplane"),
    ("tree", "flower", "plant", "bench", "traffic light", "umbrella"),
)


def load_vocabulary():
    script = "const {vocabulary}=require('./data/dailyVocabulary');process.stdout.write(JSON.stringify(vocabulary))"
    result = subprocess.run(
        ["node", "-e", script], cwd=ROOT, check=True, capture_output=True, text=True
    )
    return json.loads(result.stdout)


def build_learning_relations(vocabulary):
    by_word = {item["english"]: item for item in vocabulary}
    relations = {}
    for word in by_word:
        candidates = []
        for group in LEARNING_RELATION_GROUPS:
            if word not in group:
                continue
            index = group.index(word)
            ordered = group[index + 1:] + group[:index]
            for candidate in ordered:
                if candidate in by_word and candidate not in candidates:
                    candidates.append(candidate)
        relations[word] = [
            {"word": candidate, "meaning": by_word[candidate]["translations"]["zh"]}
            for candidate in candidates[:3]
        ]
    return relations


def normalized_lemmas(synset):
    return [word.lemma().replace("_", " ") for word in synset.words()]


def choose_synset(lexicon, word):
    query = LOOKUP_ALIASES.get(word, word).lower()
    candidates = list(lexicon.synsets(query, pos="n"))
    if not candidates and query.endswith("s"):
        candidates = list(lexicon.synsets(query[:-1], pos="n"))
    if not candidates:
        return None

    preferred_id = PREFERRED_SYNSET_IDS.get(word)
    if preferred_id:
        preferred = next((synset for synset in candidates if synset.id == preferred_id), None)
        if preferred:
            return preferred

    hints = SENSE_HINTS.get(word, ())
    if not hints:
        return candidates[0]

    def score(synset):
        text = f"{synset.definition()} {' '.join(normalized_lemmas(synset))}".lower()
        return sum(10 for hint in hints if hint.lower() in text)

    return max(enumerate(candidates), key=lambda pair: (score(pair[1]), -pair[0]))[1]


def relation_lemmas(synsets, limit):
    result = []
    for synset in synsets:
        for lemma in normalized_lemmas(synset):
            if lemma in EXCLUDED_LEMMAS or lemma.lower() in EXCLUDED_LEMMAS:
                continue
            if lemma not in result:
                result.append(lemma)
            if len(result) >= limit:
                return result
    return result


def build_entry(lexicon, word, review_status):
    synset = choose_synset(lexicon, word)
    if synset is None:
        return {
            "english": word,
            "wordnet": {"synsets": [], "definition": "", "synonyms": [], "hypernyms": [], "hyponyms": []},
            "reviewStatus": "not_found",
        }

    lemmas = normalized_lemmas(synset)
    query_forms = {word.lower(), LOOKUP_ALIASES.get(word, word).lower()}
    synonyms = [
        lemma for lemma in lemmas
        if lemma.lower() not in query_forms and lemma.lower() not in EXCLUDED_LEMMAS
    ][:6]
    hypernyms = relation_lemmas(synset.hypernyms(), 6)
    hyponyms = relation_lemmas(synset.hyponyms(), 5)
    synset_data = {
        "id": synset.id,
        "partOfSpeech": "noun",
        "definition": synset.definition(),
        "synonyms": synonyms,
        "hypernyms": hypernyms,
        "hyponyms": hyponyms,
    }
    return {
        "english": word,
        "wordnet": {
            "synsets": [synset_data],
            "definition": synset_data["definition"],
            "synonyms": synonyms,
            "hypernyms": hypernyms,
            "hyponyms": hyponyms,
        },
        "reviewStatus": review_status,
    }


def main():
    os.environ["WN_DATA_DIR"] = str(WORDNET_DIR)
    wn.config.data_directory = WORDNET_DIR
    lexicon = wn.Wordnet(LEXICON)
    vocabulary = load_vocabulary()
    words = [item["english"] for item in vocabulary]
    vocabulary_hash = hashlib.sha256(
        json.dumps(words, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    ).hexdigest()
    review_status = "verified" if vocabulary_hash == REVIEWED_VOCABULARY_HASH else "checked"
    entries = {word: build_entry(lexicon, word, review_status) for word in words}
    learning_relations = build_learning_relations(vocabulary)
    for word, entry in entries.items():
        entry["relatedLearningWords"] = learning_relations[word]
    payload = json.dumps(entries, ensure_ascii=False, indent=2)
    header = (
        "// Generated from Open English WordNet 2025 (CC BY 4.0).\n"
        "// Source: https://en-word.net/ — includes material derived from Princeton WordNet.\n"
        "// Do not edit manually; regenerate with server/scripts/generate_word_knowledge.py.\n"
    )
    OUTPUT_PATH.write_text(f"{header}module.exports = {payload};\n", encoding="utf-8")
    found = sum(entry["reviewStatus"] != "not_found" for entry in entries.values())
    print(json.dumps({"total": len(entries), "found": found, "notFound": len(entries) - found, "output": str(OUTPUT_PATH)}))


if __name__ == "__main__":
    main()
