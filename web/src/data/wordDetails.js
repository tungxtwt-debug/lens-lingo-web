import translations from "./cocoTranslations.js";
import examples from "./examples.js";

const definitionsZh = {
  "person": "人；人物", "bicycle": "自行车；脚踏车", "car": "汽车；轿车", "motorcycle": "摩托车",
  "airplane": "飞机；航空器", "bus": "公交车；巴士", "train": "火车；列车", "truck": "卡车；货车",
  "boat": "船；小船", "traffic light": "交通信号灯；红绿灯", "fire hydrant": "消防栓；消火栓",
  "stop sign": "停车标志；停止标志", "parking meter": "停车计时器", "bench": "长椅；长凳",
  "bird": "鸟；鸟类", "cat": "猫", "dog": "狗；犬", "horse": "马", "sheep": "羊；绵羊", "cow": "牛；奶牛",
  "elephant": "大象", "bear": "熊", "zebra": "斑马", "giraffe": "长颈鹿", "backpack": "背包；双肩包",
  "umbrella": "雨伞；伞", "handbag": "手提包；女式手包", "tie": "领带", "suitcase": "行李箱；旅行箱",
  "frisbee": "飞盘", "skis": "滑雪板；双板滑雪用具", "snowboard": "单板滑雪板", "sports ball": "运动用球",
  "kite": "风筝", "baseball bat": "棒球棒", "baseball glove": "棒球手套", "skateboard": "滑板",
  "surfboard": "冲浪板", "tennis racket": "网球拍", "bottle": "瓶子；盛装液体的容器",
  "wine glass": "酒杯；葡萄酒杯", "cup": "杯子；饮水容器", "fork": "叉子；餐叉", "knife": "刀；餐刀",
  "spoon": "勺子；汤匙", "bowl": "碗；钵", "banana": "香蕉", "apple": "苹果", "sandwich": "三明治",
  "orange": "橙子；橘子", "broccoli": "西兰花；花椰菜", "carrot": "胡萝卜", "hot dog": "热狗",
  "pizza": "披萨；比萨饼", "donut": "甜甜圈", "cake": "蛋糕", "chair": "椅子；座椅", "couch": "沙发",
  "potted plant": "盆栽；盆栽植物", "bed": "床；床铺", "dining table": "餐桌；饭桌", "toilet": "马桶；坐便器",
  "tv": "电视；电视机", "laptop": "笔记本电脑", "mouse": "鼠标；电脑鼠标", "remote": "遥控器",
  "keyboard": "键盘；电脑键盘", "cell phone": "手机；移动电话", "microwave": "微波炉", "oven": "烤箱；烤炉",
  "toaster": "烤面包机；吐司机", "sink": "水槽；洗涤池", "refrigerator": "冰箱；电冰箱", "book": "书；书籍",
  "clock": "时钟；钟", "vase": "花瓶；装饰瓶", "scissors": "剪刀", "teddy bear": "泰迪熊；玩具熊",
  "hair drier": "吹风机；电吹风", "toothbrush": "牙刷"
};

// 只收录经过人工确认的常见英语 IPA；没有可靠数据时不显示。
const englishPronunciations = {
  "person": "/ˈpɜː.sən/", "car": "/kɑːr/", "cat": "/kæt/", "dog": "/dɒɡ/",
  "bottle": "/ˈbɒt.əl/", "cup": "/kʌp/", "apple": "/ˈæp.əl/", "chair": "/tʃeər/",
  "book": "/bʊk/", "cell phone": "/ˌsel ˈfəʊn/", "dining table": "/ˈdaɪ.nɪŋ ˌteɪ.bəl/"
};

const partOfSpeechLabels = {
  en: "noun", zh: "名词", ja: "名詞", ko: "명사", fr: "nom", es: "sustantivo", de: "Substantiv"
};

const wordDetails = Object.keys(translations).reduce((result, objectName) => {
  result[objectName] = {
    objectName,
    definitionZh: definitionsZh[objectName],
    pronunciation: { en: englishPronunciations[objectName] || "" },
    partOfSpeech: partOfSpeechLabels,
    examples: examples[objectName]
  };
  return result;
}, {});

export default wordDetails;
