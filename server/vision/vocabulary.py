"""YOLO-World 实验词表。

词表使用适合学习和展示的英文规范名称。pants、scissors、eyeglasses 等
属于英语中通常使用复数形式的名词，因此保留自然写法。
"""

OBJECT_VOCABULARY = (
    # 厨房（20）
    "cup", "mug", "glass", "plate", "bowl", "spoon", "fork", "knife",
    "bottle", "kettle", "pan", "pot", "cutting board", "refrigerator",
    "microwave", "oven", "sink", "faucet", "toaster", "blender",
    # 卧室与卫浴（20）
    "bed", "pillow", "blanket", "sheet", "lamp", "clock", "wardrobe",
    "drawer", "mirror", "toothbrush", "toothpaste", "soap", "towel",
    "comb", "hairbrush", "shampoo", "toilet", "bathtub", "shower", "slipper",
    # 学习与办公（20）
    "book", "notebook", "pen", "pencil", "eraser", "ruler", "marker",
    "scissors", "stapler", "keyboard", "mouse", "desk", "chair", "paper",
    "folder", "envelope", "calculator", "backpack", "glue", "whiteboard",
    # 电子产品（15）
    "phone", "laptop", "tablet", "monitor", "television", "remote control",
    "charger", "headphones", "earphones", "speaker", "camera", "watch",
    "printer", "cable", "power strip",
    # 衣物与配饰（15）
    "shirt", "T-shirt", "jacket", "coat", "pants", "shorts", "skirt", "dress",
    "sock", "shoe", "sneaker", "hat", "cap", "glove", "handbag",
    # 随身及家居物品（10）
    "umbrella", "eyeglasses", "sunglasses", "wallet", "key", "trash can",
    "basket", "box", "suitcase", "plant",
)

assert len(OBJECT_VOCABULARY) == 100
