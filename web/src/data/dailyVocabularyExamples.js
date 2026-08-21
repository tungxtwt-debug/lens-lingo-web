// Phase 1 人工整理例句。中文模式使用英文辅助翻译，其余语言使用中文辅助翻译。
// checked 表示已完成语法与语义检查；母语复核后才可升级为 verified。
const checked = (sentence, translation) => ({ sentence, translation, reviewStatus: "checked" });

export default {
  hairbrush: {
    en: [
      checked("Use the hairbrush gently to remove the knots.", "用发刷轻轻梳开打结的头发。"),
      checked("Her hairbrush is beside the mirror.", "她的发刷在镜子旁边。")
    ],
    zh: [
      checked("用发刷轻轻梳开打结的头发。", "Use the hairbrush gently to remove the knots."),
      checked("她的发刷在镜子旁边。", "Her hairbrush is beside the mirror.")
    ],
    ja: [
      checked("ヘアブラシを優しく使って髪のもつれをほぐしてください。", "用发刷轻轻梳开打结的头发。"),
      checked("彼女のヘアブラシは鏡のそばにあります。", "她的发刷在镜子旁边。")
    ],
    ko: [
      checked("헤어브러시로 엉킨 머리를 부드럽게 풀어 주세요.", "用发刷轻轻梳开打结的头发。"),
      checked("그녀의 헤어브러시는 거울 옆에 있어요.", "她的发刷在镜子旁边。")
    ],
    fr: [
      checked("Utilise doucement la brosse à cheveux pour défaire les nœuds.", "用发刷轻轻梳开打结的头发。"),
      checked("Sa brosse à cheveux est à côté du miroir.", "她的发刷在镜子旁边。")
    ],
    es: [
      checked("Usa el cepillo para el pelo con cuidado para deshacer los nudos.", "用发刷轻轻梳开打结的头发。"),
      checked("Su cepillo para el pelo está al lado del espejo.", "她的发刷在镜子旁边。")
    ],
    de: [
      checked("Löse die Knoten vorsichtig mit der Haarbürste.", "用发刷轻轻梳开打结的头发。"),
      checked("Ihre Haarbürste liegt neben dem Spiegel.", "她的发刷在镜子旁边。")
    ]
  },
  shampoo: {
    en: [
      checked("You only need a small amount of shampoo.", "你只需要用少量洗发水。"),
      checked("The shampoo bottle is almost empty.", "洗发水瓶快空了。")
    ],
    zh: [
      checked("你只需要用少量洗发水。", "You only need a small amount of shampoo."),
      checked("洗发水瓶快空了。", "The shampoo bottle is almost empty.")
    ],
    ja: [
      checked("シャンプーは少量だけで十分です。", "你只需要用少量洗发水。"),
      checked("シャンプーのボトルはもうすぐ空になります。", "洗发水瓶快空了。")
    ],
    ko: [
      checked("샴푸는 조금만 사용하면 돼요.", "你只需要用少量洗发水。"),
      checked("샴푸 병이 거의 비었어요.", "洗发水瓶快空了。")
    ],
    fr: [
      checked("Tu n'as besoin que d'une petite quantité de shampooing.", "你只需要用少量洗发水。"),
      checked("La bouteille de shampooing est presque vide.", "洗发水瓶快空了。")
    ],
    es: [
      checked("Solo necesitas una pequeña cantidad de champú.", "你只需要用少量洗发水。"),
      checked("La botella de champú está casi vacía.", "洗发水瓶快空了。")
    ],
    de: [
      checked("Du brauchst nur eine kleine Menge Shampoo.", "你只需要用少量洗发水。"),
      checked("Die Shampooflasche ist fast leer.", "洗发水瓶快空了。")
    ]
  },
  bathtub: {
    en: [
      checked("Fill the bathtub with warm water.", "在浴缸里放满温水。"),
      checked("A yellow toy is floating in the bathtub.", "一个黄色玩具漂在浴缸里。")
    ],
    zh: [
      checked("在浴缸里放满温水。", "Fill the bathtub with warm water."),
      checked("一个黄色玩具漂在浴缸里。", "A yellow toy is floating in the bathtub.")
    ],
    ja: [
      checked("浴槽に温かいお湯をためてください。", "在浴缸里放满温水。"),
      checked("黄色いおもちゃが浴槽に浮かんでいます。", "一个黄色玩具漂在浴缸里。")
    ],
    ko: [
      checked("욕조에 따뜻한 물을 받으세요.", "在浴缸里放满温水。"),
      checked("노란색 장난감이 욕조에 떠 있어요.", "一个黄色玩具漂在浴缸里。")
    ],
    fr: [
      checked("Remplis la baignoire d'eau tiède.", "在浴缸里放满温水。"),
      checked("Un jouet jaune flotte dans la baignoire.", "一个黄色玩具漂在浴缸里。")
    ],
    es: [
      checked("Llena la bañera con agua templada.", "在浴缸里放满温水。"),
      checked("Un juguete amarillo flota en la bañera.", "一个黄色玩具漂在浴缸里。")
    ],
    de: [
      checked("Füll die Badewanne mit warmem Wasser.", "在浴缸里放满温水。"),
      checked("Ein gelbes Spielzeug schwimmt in der Badewanne.", "一个黄色玩具漂在浴缸里。")
    ]
  },
  shower: {
    en: [
      checked("I take a quick shower after exercising.", "运动后我会快速冲个澡。"),
      checked("Turn off the shower while you wash your hair.", "洗头时把淋浴关掉。")
    ],
    zh: [
      checked("运动后我会快速冲个澡。", "I take a quick shower after exercising."),
      checked("洗头时把淋浴关掉。", "Turn off the shower while you wash your hair.")
    ],
    ja: [
      checked("運動した後は短いシャワーを浴びます。", "运动后我会快速冲个澡。"),
      checked("髪を洗っている間はシャワーを止めてください。", "洗头时把淋浴关掉。")
    ],
    ko: [
      checked("저는 운동 후에 간단히 샤워해요.", "运动后我会快速冲个澡。"),
      checked("머리를 감는 동안에는 샤워기를 잠그세요.", "洗头时把淋浴关掉。")
    ],
    fr: [
      checked("Je prends une douche rapide après le sport.", "运动后我会快速冲个澡。"),
      checked("Coupe l'eau de la douche pendant que tu te laves les cheveux.", "洗头时把淋浴关掉。")
    ],
    es: [
      checked("Me doy una ducha rápida después de hacer ejercicio.", "运动后我会快速冲个澡。"),
      checked("Cierra la ducha mientras te lavas el pelo.", "洗头时把淋浴关掉。")
    ],
    de: [
      checked("Nach dem Sport dusche ich kurz.", "运动后我会快速冲个澡。"),
      checked("Stell die Dusche ab, während du dir die Haare wäschst.", "洗头时把淋浴关掉。")
    ]
  },
  toilet: {
    en: [
      checked("Please flush the toilet after using it.", "使用后请冲洗马桶。"),
      checked("The toilet in the guest bathroom needs cleaning.", "客用浴室的马桶需要清洁。")
    ],
    zh: [
      checked("使用后请冲洗马桶。", "Please flush the toilet after using it."),
      checked("客用浴室的马桶需要清洁。", "The toilet in the guest bathroom needs cleaning.")
    ],
    ja: [
      checked("使用後はトイレの水を流してください。", "使用后请冲洗马桶。"),
      checked("客用の浴室にあるトイレは掃除が必要です。", "客用浴室的马桶需要清洁。")
    ],
    ko: [
      checked("사용 후에는 변기의 물을 내려 주세요.", "使用后请冲洗马桶。"),
      checked("손님용 화장실의 변기를 청소해야 해요.", "客用浴室的马桶需要清洁。")
    ],
    fr: [
      checked("Tire la chasse d'eau après avoir utilisé les toilettes.", "使用后请冲洗马桶。"),
      checked("Les toilettes de la salle de bains des invités doivent être nettoyées.", "客用浴室的马桶需要清洁。")
    ],
    es: [
      checked("Tira de la cadena después de usar el inodoro.", "使用后请冲洗马桶。"),
      checked("Hay que limpiar el inodoro del baño de invitados.", "客用浴室的马桶需要清洁。")
    ],
    de: [
      checked("Spül die Toilette nach der Benutzung.", "使用后请冲洗马桶。"),
      checked("Die Toilette im Gästebad muss gereinigt werden.", "客用浴室的马桶需要清洁。")
    ]
  },
  toothbrush: {
    en: [
      checked("Replace your toothbrush every three months.", "每三个月更换一次牙刷。"),
      checked("Rinse the toothbrush after brushing your teeth.", "刷完牙后把牙刷冲洗干净。")
    ],
    zh: [
      checked("每三个月更换一次牙刷。", "Replace your toothbrush every three months."),
      checked("刷完牙后把牙刷冲洗干净。", "Rinse the toothbrush after brushing your teeth.")
    ],
    ja: [
      checked("歯ブラシは三か月ごとに交換してください。", "每三个月更换一次牙刷。"),
      checked("歯を磨いた後は歯ブラシを水ですすいでください。", "刷完牙后把牙刷冲洗干净。")
    ],
    ko: [
      checked("칫솔은 3개월마다 교체하세요.", "每三个月更换一次牙刷。"),
      checked("양치질한 후에는 칫솔을 물로 헹구세요.", "刷完牙后把牙刷冲洗干净。")
    ],
    fr: [
      checked("Remplace ta brosse à dents tous les trois mois.", "每三个月更换一次牙刷。"),
      checked("Rince la brosse à dents après t'être brossé les dents.", "刷完牙后把牙刷冲洗干净。")
    ],
    es: [
      checked("Cambia el cepillo de dientes cada tres meses.", "每三个月更换一次牙刷。"),
      checked("Enjuaga el cepillo después de lavarte los dientes.", "刷完牙后把牙刷冲洗干净。")
    ],
    de: [
      checked("Wechsle deine Zahnbürste alle drei Monate.", "每三个月更换一次牙刷。"),
      checked("Spül die Zahnbürste nach dem Zähneputzen aus.", "刷完牙后把牙刷冲洗干净。")
    ]
  },
  toothpaste: {
    en: [
      checked("Put a small amount of toothpaste on the brush.", "在牙刷上挤少量牙膏。"),
      checked("Close the toothpaste tube after using it.", "牙膏用完后把盖子盖好。")
    ],
    zh: [
      checked("在牙刷上挤少量牙膏。", "Put a small amount of toothpaste on the brush."),
      checked("牙膏用完后把盖子盖好。", "Close the toothpaste tube after using it.")
    ],
    ja: [
      checked("歯ブラシに歯磨き粉を少しつけてください。", "在牙刷上挤少量牙膏。"),
      checked("歯磨き粉を使った後はチューブのふたを閉めてください。", "牙膏用完后把盖子盖好。")
    ],
    ko: [
      checked("칫솔에 치약을 조금 짜세요.", "在牙刷上挤少量牙膏。"),
      checked("치약을 사용한 후에는 뚜껑을 닫으세요.", "牙膏用完后把盖子盖好。")
    ],
    fr: [
      checked("Mets une petite quantité de dentifrice sur la brosse.", "在牙刷上挤少量牙膏。"),
      checked("Referme le tube de dentifrice après l'avoir utilisé.", "牙膏用完后把盖子盖好。")
    ],
    es: [
      checked("Pon una pequeña cantidad de pasta de dientes en el cepillo.", "在牙刷上挤少量牙膏。"),
      checked("Cierra el tubo de pasta de dientes después de usarlo.", "牙膏用完后把盖子盖好。")
    ],
    de: [
      checked("Gib eine kleine Menge Zahnpasta auf die Bürste.", "在牙刷上挤少量牙膏。"),
      checked("Verschließ die Zahnpastatube nach dem Gebrauch.", "牙膏用完后把盖子盖好。")
    ]
  },
  soap: {
    en: [
      checked("Wash your hands with soap before eating.", "吃饭前用肥皂洗手。"),
      checked("The wet soap slipped into the sink.", "湿肥皂滑进了水槽。")
    ],
    zh: [
      checked("吃饭前用肥皂洗手。", "Wash your hands with soap before eating."),
      checked("湿肥皂滑进了水槽。", "The wet soap slipped into the sink.")
    ],
    ja: [
      checked("食事の前に石けんで手を洗ってください。", "吃饭前用肥皂洗手。"),
      checked("ぬれた石けんが流しに滑り落ちました。", "湿肥皂滑进了水槽。")
    ],
    ko: [
      checked("먹기 전에 비누로 손을 씻으세요.", "吃饭前用肥皂洗手。"),
      checked("젖은 비누가 싱크대 안으로 미끄러져 들어갔어요.", "湿肥皂滑进了水槽。")
    ],
    fr: [
      checked("Lave-toi les mains avec du savon avant de manger.", "吃饭前用肥皂洗手。"),
      checked("Le savon mouillé a glissé dans l'évier.", "湿肥皂滑进了水槽。")
    ],
    es: [
      checked("Lávate las manos con jabón antes de comer.", "吃饭前用肥皂洗手。"),
      checked("El jabón mojado se deslizó dentro del fregadero.", "湿肥皂滑进了水槽。")
    ],
    de: [
      checked("Wasch dir vor dem Essen die Hände mit Seife.", "吃饭前用肥皂洗手。"),
      checked("Die nasse Seife rutschte in die Spüle.", "湿肥皂滑进了水槽。")
    ]
  },
  towel: {
    en: [
      checked("Dry your hands with a clean towel.", "用干净的毛巾擦干双手。"),
      checked("Hang the wet towel by the window to dry.", "把湿毛巾挂在窗边晾干。")
    ],
    zh: [
      checked("用干净的毛巾擦干双手。", "Dry your hands with a clean towel."),
      checked("把湿毛巾挂在窗边晾干。", "Hang the wet towel by the window to dry.")
    ],
    ja: [
      checked("清潔なタオルで手を拭いてください。", "用干净的毛巾擦干双手。"),
      checked("ぬれたタオルを窓のそばに掛けて乾かしてください。", "把湿毛巾挂在窗边晾干。")
    ],
    ko: [
      checked("깨끗한 수건으로 손을 닦으세요.", "用干净的毛巾擦干双手。"),
      checked("젖은 수건을 창문 옆에 걸어 말리세요.", "把湿毛巾挂在窗边晾干。")
    ],
    fr: [
      checked("Sèche-toi les mains avec une serviette propre.", "用干净的毛巾擦干双手。"),
      checked("Suspends la serviette mouillée près de la fenêtre pour la faire sécher.", "把湿毛巾挂在窗边晾干。")
    ],
    es: [
      checked("Sécate las manos con una toalla limpia.", "用干净的毛巾擦干双手。"),
      checked("Cuelga la toalla mojada junto a la ventana para que se seque.", "把湿毛巾挂在窗边晾干。")
    ],
    de: [
      checked("Trockne deine Hände mit einem sauberen Handtuch ab.", "用干净的毛巾擦干双手。"),
      checked("Häng das nasse Handtuch zum Trocknen neben dem Fenster auf.", "把湿毛巾挂在窗边晾干。")
    ]
  },
  comb: {
    en: [
      checked("She combs her hair before leaving home.", "她出门前梳头。"),
      checked("The wooden comb is in the bathroom drawer.", "木梳子在浴室抽屉里。")
    ],
    zh: [
      checked("她出门前梳头。", "She combs her hair before leaving home."),
      checked("木梳子在浴室抽屉里。", "The wooden comb is in the bathroom drawer.")
    ],
    ja: [
      checked("彼女は家を出る前に髪をとかします。", "她出门前梳头。"),
      checked("木のくしは浴室の引き出しに入っています。", "木梳子在浴室抽屉里。")
    ],
    ko: [
      checked("그녀는 집을 나가기 전에 머리를 빗어요.", "她出门前梳头。"),
      checked("나무 빗은 욕실 서랍 안에 있어요.", "木梳子在浴室抽屉里。")
    ],
    fr: [
      checked("Elle se peigne les cheveux avant de quitter la maison.", "她出门前梳头。"),
      checked("Le peigne en bois est dans le tiroir de la salle de bains.", "木梳子在浴室抽屉里。")
    ],
    es: [
      checked("Ella se peina antes de salir de casa.", "她出门前梳头。"),
      checked("El peine de madera está en el cajón del baño.", "木梳子在浴室抽屉里。")
    ],
    de: [
      checked("Sie kämmt sich die Haare, bevor sie das Haus verlässt.", "她出门前梳头。"),
      checked("Der Holzkamm liegt in der Badezimmerschublade.", "木梳子在浴室抽屉里。")
    ]
  },
  paper: {
    en: [
      checked("Print the document on both sides of the paper.", "把文件双面打印在纸上。"),
      checked("The children folded the paper into an airplane.", "孩子们把纸折成了一架飞机。")
    ],
    zh: [
      checked("把文件双面打印在纸上。", "Print the document on both sides of the paper."),
      checked("孩子们把纸折成了一架飞机。", "The children folded the paper into an airplane.")
    ],
    ja: [
      checked("用紙の両面に資料を印刷してください。", "把文件双面打印在纸上。"),
      checked("子どもたちは紙を飛行機の形に折りました。", "孩子们把纸折成了一架飞机。")
    ],
    ko: [
      checked("문서를 종이 양면에 인쇄하세요.", "把文件双面打印在纸上。"),
      checked("아이들은 종이를 비행기 모양으로 접었어요.", "孩子们把纸折成了一架飞机。")
    ],
    fr: [
      checked("Imprime le document sur les deux côtés de la feuille.", "把文件双面打印在纸上。"),
      checked("Les enfants ont plié le papier pour en faire un avion.", "孩子们把纸折成了一架飞机。")
    ],
    es: [
      checked("Imprime el documento por las dos caras del papel.", "把文件双面打印在纸上。"),
      checked("Los niños doblaron el papel para hacer un avión.", "孩子们把纸折成了一架飞机。")
    ],
    de: [
      checked("Drucke das Dokument auf beide Seiten des Papiers.", "把文件双面打印在纸上。"),
      checked("Die Kinder falteten aus dem Papier ein Flugzeug.", "孩子们把纸折成了一架飞机。")
    ]
  },
  folder: {
    en: [
      checked("Put the worksheets in the blue folder.", "把练习纸放进蓝色文件夹。"),
      checked("Write your name on the front of the folder.", "把你的名字写在文件夹正面。")
    ],
    zh: [
      checked("把练习纸放进蓝色文件夹。", "Put the worksheets in the blue folder."),
      checked("把你的名字写在文件夹正面。", "Write your name on the front of the folder.")
    ],
    ja: [
      checked("プリントを青いフォルダーに入れてください。", "把练习纸放进蓝色文件夹。"),
      checked("フォルダーの表に名前を書いてください。", "把你的名字写在文件夹正面。")
    ],
    ko: [
      checked("학습지를 파란색 폴더에 넣으세요.", "把练习纸放进蓝色文件夹。"),
      checked("폴더 앞면에 이름을 쓰세요.", "把你的名字写在文件夹正面。")
    ],
    fr: [
      checked("Mets les fiches d'exercices dans le dossier bleu.", "把练习纸放进蓝色文件夹。"),
      checked("Écris ton nom sur le devant du dossier.", "把你的名字写在文件夹正面。")
    ],
    es: [
      checked("Pon las hojas de ejercicios en la carpeta azul.", "把练习纸放进蓝色文件夹。"),
      checked("Escribe tu nombre en la parte delantera de la carpeta.", "把你的名字写在文件夹正面。")
    ],
    de: [
      checked("Leg die Arbeitsblätter in den blauen Ordner.", "把练习纸放进蓝色文件夹。"),
      checked("Schreib deinen Namen auf die Vorderseite des Ordners.", "把你的名字写在文件夹正面。")
    ]
  },
  backpack: {
    en: [
      checked("He packed a book and his lunch in the backpack.", "他把一本书和午餐装进背包。"),
      checked("This backpack is too heavy for the child.", "这个背包对那个孩子来说太重了。")
    ],
    zh: [
      checked("他把一本书和午餐装进背包。", "He packed a book and his lunch in the backpack."),
      checked("这个背包对那个孩子来说太重了。", "This backpack is too heavy for the child.")
    ],
    ja: [
      checked("彼はリュックに本と昼食を入れました。", "他把一本书和午餐装进背包。"),
      checked("このリュックはその子どもには重すぎます。", "这个背包对那个孩子来说太重了。")
    ],
    ko: [
      checked("그는 배낭에 책 한 권과 점심을 넣었어요.", "他把一本书和午餐装进背包。"),
      checked("이 배낭은 아이가 메기에 너무 무거워요.", "这个背包对那个孩子来说太重了。")
    ],
    fr: [
      checked("Il a mis un livre et son déjeuner dans le sac à dos.", "他把一本书和午餐装进背包。"),
      checked("Ce sac à dos est trop lourd pour l'enfant.", "这个背包对那个孩子来说太重了。")
    ],
    es: [
      checked("Él guardó un libro y su almuerzo en la mochila.", "他把一本书和午餐装进背包。"),
      checked("Esta mochila es demasiado pesada para el niño.", "这个背包对那个孩子来说太重了。")
    ],
    de: [
      checked("Er packte ein Buch und sein Mittagessen in den Rucksack.", "他把一本书和午餐装进背包。"),
      checked("Dieser Rucksack ist für das Kind zu schwer.", "这个背包对那个孩子来说太重了。")
    ]
  },
  scissors: {
    en: [
      checked("Use the scissors to cut along the dotted line.", "用剪刀沿虚线剪开。"),
      checked("Keep the scissors away from small children.", "把剪刀放在幼儿够不到的地方。")
    ],
    zh: [
      checked("用剪刀沿虚线剪开。", "Use the scissors to cut along the dotted line."),
      checked("把剪刀放在幼儿够不到的地方。", "Keep the scissors away from small children.")
    ],
    ja: [
      checked("はさみで点線に沿って切ってください。", "用剪刀沿虚线剪开。"),
      checked("はさみは小さな子どもの手の届かない所に置いてください。", "把剪刀放在幼儿够不到的地方。")
    ],
    ko: [
      checked("가위로 점선을 따라 자르세요.", "用剪刀沿虚线剪开。"),
      checked("가위는 어린아이의 손이 닿지 않는 곳에 두세요.", "把剪刀放在幼儿够不到的地方。")
    ],
    fr: [
      checked("Utilise les ciseaux pour découper le long des pointillés.", "用剪刀沿虚线剪开。"),
      checked("Garde les ciseaux hors de portée des jeunes enfants.", "把剪刀放在幼儿够不到的地方。")
    ],
    es: [
      checked("Usa las tijeras para cortar por la línea de puntos.", "用剪刀沿虚线剪开。"),
      checked("Mantén las tijeras fuera del alcance de los niños pequeños.", "把剪刀放在幼儿够不到的地方。")
    ],
    de: [
      checked("Schneide mit der Schere an der gestrichelten Linie entlang.", "用剪刀沿虚线剪开。"),
      checked("Bewahre die Schere außerhalb der Reichweite kleiner Kinder auf.", "把剪刀放在幼儿够不到的地方。")
    ]
  },
  desk: {
    en: [
      checked("My desk is beside the window.", "我的书桌在窗户旁边。"),
      checked("Clear the desk before you start your homework.", "开始写作业前先把书桌收拾干净。")
    ],
    zh: [
      checked("我的书桌在窗户旁边。", "My desk is beside the window."),
      checked("开始写作业前先把书桌收拾干净。", "Clear the desk before you start your homework.")
    ],
    ja: [
      checked("私の机は窓のそばにあります。", "我的书桌在窗户旁边。"),
      checked("宿題を始める前に机の上を片づけてください。", "开始写作业前先把书桌收拾干净。")
    ],
    ko: [
      checked("제 책상은 창문 옆에 있어요.", "我的书桌在窗户旁边。"),
      checked("숙제를 시작하기 전에 책상을 정리하세요.", "开始写作业前先把书桌收拾干净。")
    ],
    fr: [
      checked("Mon bureau est à côté de la fenêtre.", "我的书桌在窗户旁边。"),
      checked("Range le bureau avant de commencer tes devoirs.", "开始写作业前先把书桌收拾干净。")
    ],
    es: [
      checked("Mi escritorio está al lado de la ventana.", "我的书桌在窗户旁边。"),
      checked("Ordena el escritorio antes de empezar los deberes.", "开始写作业前先把书桌收拾干净。")
    ],
    de: [
      checked("Mein Schreibtisch steht neben dem Fenster.", "我的书桌在窗户旁边。"),
      checked("Räum den Schreibtisch auf, bevor du mit den Hausaufgaben beginnst.", "开始写作业前先把书桌收拾干净。")
    ]
  },
  notebook: {
    en: [
      checked("I write new words in a small notebook.", "我把新单词写在一本小笔记本里。"),
      checked("She left her notebook in the classroom.", "她把笔记本落在教室里了。")
    ],
    zh: [
      checked("我把新单词写在一本小笔记本里。", "I write new words in a small notebook."),
      checked("她把笔记本落在教室里了。", "She left her notebook in the classroom.")
    ],
    ja: [
      checked("小さなノートに新しい単語を書きます。", "我把新单词写在一本小笔记本里。"),
      checked("彼女は教室にノートを忘れました。", "她把笔记本落在教室里了。")
    ],
    ko: [
      checked("저는 작은 공책에 새로운 단어를 적어요.", "我把新单词写在一本小笔记本里。"),
      checked("그녀는 교실에 공책을 두고 왔어요.", "她把笔记本落在教室里了。")
    ],
    fr: [
      checked("J'écris les nouveaux mots dans un petit cahier.", "我把新单词写在一本小笔记本里。"),
      checked("Elle a oublié son cahier dans la salle de classe.", "她把笔记本落在教室里了。")
    ],
    es: [
      checked("Escribo las palabras nuevas en un cuaderno pequeño.", "我把新单词写在一本小笔记本里。"),
      checked("Ella dejó su cuaderno en el aula.", "她把笔记本落在教室里了。")
    ],
    de: [
      checked("Ich schreibe neue Wörter in ein kleines Notizbuch.", "我把新单词写在一本小笔记本里。"),
      checked("Sie hat ihr Notizbuch im Klassenzimmer liegen lassen.", "她把笔记本落在教室里了。")
    ]
  },
  pen: {
    en: [
      checked("Please sign your name with a blue pen.", "请用蓝色笔签名。"),
      checked("My pen ran out of ink during the lesson.", "上课时我的笔没墨水了。")
    ],
    zh: [
      checked("请用蓝色笔签名。", "Please sign your name with a blue pen."),
      checked("上课时我的笔没墨水了。", "My pen ran out of ink during the lesson.")
    ],
    ja: [
      checked("青いペンで名前を書いてください。", "请用蓝色笔签名。"),
      checked("授業中にペンのインクが切れました。", "上课时我的笔没墨水了。")
    ],
    ko: [
      checked("파란색 펜으로 서명해 주세요.", "请用蓝色笔签名。"),
      checked("수업 중에 펜의 잉크가 다 떨어졌어요.", "上课时我的笔没墨水了。")
    ],
    fr: [
      checked("Signez votre nom avec un stylo bleu, s'il vous plaît.", "请用蓝色笔签名。"),
      checked("Mon stylo n'avait plus d'encre pendant le cours.", "上课时我的笔没墨水了。")
    ],
    es: [
      checked("Firma con un bolígrafo azul, por favor.", "请用蓝色笔签名。"),
      checked("Mi bolígrafo se quedó sin tinta durante la clase.", "上课时我的笔没墨水了。")
    ],
    de: [
      checked("Unterschreib bitte mit einem blauen Kugelschreiber.", "请用蓝色笔签名。"),
      checked("Während des Unterrichts ging meinem Kugelschreiber die Tinte aus.", "上课时我的笔没墨水了。")
    ]
  },
  pencil: {
    en: [
      checked("Sharpen your pencil before the test begins.", "考试开始前把铅笔削好。"),
      checked("He drew a simple map with a pencil.", "他用铅笔画了一张简单的地图。")
    ],
    zh: [
      checked("考试开始前把铅笔削好。", "Sharpen your pencil before the test begins."),
      checked("他用铅笔画了一张简单的地图。", "He drew a simple map with a pencil.")
    ],
    ja: [
      checked("テストが始まる前に鉛筆を削ってください。", "考试开始前把铅笔削好。"),
      checked("彼は鉛筆で簡単な地図を描きました。", "他用铅笔画了一张简单的地图。")
    ],
    ko: [
      checked("시험이 시작되기 전에 연필을 깎으세요.", "考试开始前把铅笔削好。"),
      checked("그는 연필로 간단한 지도를 그렸어요.", "他用铅笔画了一张简单的地图。")
    ],
    fr: [
      checked("Taille ton crayon avant le début du contrôle.", "考试开始前把铅笔削好。"),
      checked("Il a dessiné une carte simple au crayon.", "他用铅笔画了一张简单的地图。")
    ],
    es: [
      checked("Saca punta al lápiz antes de que empiece el examen.", "考试开始前把铅笔削好。"),
      checked("Él dibujó un mapa sencillo con un lápiz.", "他用铅笔画了一张简单的地图。")
    ],
    de: [
      checked("Spitz deinen Bleistift an, bevor der Test beginnt.", "考试开始前把铅笔削好。"),
      checked("Er zeichnete mit einem Bleistift eine einfache Karte.", "他用铅笔画了一张简单的地图。")
    ]
  },
  eraser: {
    en: [
      checked("Use an eraser to remove the pencil mark.", "用橡皮擦掉铅笔印。"),
      checked("I found my eraser under the desk.", "我在书桌下面找到了橡皮。")
    ],
    zh: [
      checked("用橡皮擦掉铅笔印。", "Use an eraser to remove the pencil mark."),
      checked("我在书桌下面找到了橡皮。", "I found my eraser under the desk.")
    ],
    ja: [
      checked("消しゴムで鉛筆の跡を消してください。", "用橡皮擦掉铅笔印。"),
      checked("机の下で消しゴムを見つけました。", "我在书桌下面找到了橡皮。")
    ],
    ko: [
      checked("지우개로 연필 자국을 지우세요.", "用橡皮擦掉铅笔印。"),
      checked("책상 밑에서 제 지우개를 찾았어요.", "我在书桌下面找到了橡皮。")
    ],
    fr: [
      checked("Utilise une gomme pour effacer la trace de crayon.", "用橡皮擦掉铅笔印。"),
      checked("J'ai retrouvé ma gomme sous le bureau.", "我在书桌下面找到了橡皮。")
    ],
    es: [
      checked("Usa una goma para borrar la marca de lápiz.", "用橡皮擦掉铅笔印。"),
      checked("Encontré mi goma debajo del escritorio.", "我在书桌下面找到了橡皮。")
    ],
    de: [
      checked("Entferne den Bleistiftstrich mit einem Radiergummi.", "用橡皮擦掉铅笔印。"),
      checked("Ich habe meinen Radiergummi unter dem Schreibtisch gefunden.", "我在书桌下面找到了橡皮。")
    ]
  },
  ruler: {
    en: [
      checked("Measure the notebook with a ruler.", "用尺子量一下笔记本。"),
      checked("She used a ruler to draw a straight line.", "她用尺子画了一条直线。")
    ],
    zh: [
      checked("用尺子量一下笔记本。", "Measure the notebook with a ruler."),
      checked("她用尺子画了一条直线。", "She used a ruler to draw a straight line.")
    ],
    ja: [
      checked("定規でノートの長さを測ってください。", "用尺子量一下笔记本。"),
      checked("彼女は定規を使って直線を引きました。", "她用尺子画了一条直线。")
    ],
    ko: [
      checked("자로 공책의 길이를 재세요.", "用尺子量一下笔记本。"),
      checked("그녀는 자를 사용해 직선을 그었어요.", "她用尺子画了一条直线。")
    ],
    fr: [
      checked("Mesure le cahier avec une règle.", "用尺子量一下笔记本。"),
      checked("Elle a utilisé une règle pour tracer une ligne droite.", "她用尺子画了一条直线。")
    ],
    es: [
      checked("Mide el cuaderno con una regla.", "用尺子量一下笔记本。"),
      checked("Ella usó una regla para trazar una línea recta.", "她用尺子画了一条直线。")
    ],
    de: [
      checked("Miss das Notizbuch mit einem Lineal.", "用尺子量一下笔记本。"),
      checked("Sie zog mit einem Lineal eine gerade Linie.", "她用尺子画了一条直线。")
    ]
  },
  tablet: {
    en: [
      checked("She reads magazines on her tablet during the journey.", "旅途中她用平板电脑看杂志。"),
      checked("The child draws on the tablet with a digital pen.", "那个孩子用触控笔在平板电脑上画画。")
    ],
    zh: [
      checked("旅途中她用平板电脑看杂志。", "She reads magazines on her tablet during the journey."),
      checked("那个孩子用触控笔在平板电脑上画画。", "The child draws on the tablet with a digital pen.")
    ],
    ja: [
      checked("彼女は旅行中にタブレットで雑誌を読みます。", "旅途中她用平板电脑看杂志。"),
      checked("子どもはデジタルペンを使ってタブレットに絵を描きます。", "那个孩子用触控笔在平板电脑上画画。")
    ],
    ko: [
      checked("그녀는 여행 중에 태블릿으로 잡지를 읽어요.", "旅途中她用平板电脑看杂志。"),
      checked("아이는 디지털 펜으로 태블릿에 그림을 그려요.", "那个孩子用触控笔在平板电脑上画画。")
    ],
    fr: [
      checked("Elle lit des magazines sur sa tablette pendant le voyage.", "旅途中她用平板电脑看杂志。"),
      checked("L'enfant dessine sur la tablette avec un stylet.", "那个孩子用触控笔在平板电脑上画画。")
    ],
    es: [
      checked("Ella lee revistas en su tableta durante el viaje.", "旅途中她用平板电脑看杂志。"),
      checked("El niño dibuja en la tableta con un lápiz digital.", "那个孩子用触控笔在平板电脑上画画。")
    ],
    de: [
      checked("Sie liest während der Reise Zeitschriften auf ihrem Tablet.", "旅途中她用平板电脑看杂志。"),
      checked("Das Kind zeichnet mit einem digitalen Stift auf dem Tablet.", "那个孩子用触控笔在平板电脑上画画。")
    ]
  },
  headphones: {
    en: [
      checked("I put on my headphones to listen to music.", "我戴上耳机听音乐。"),
      checked("The volume in your headphones is too high.", "你耳机里的音量太大了。")
    ],
    zh: [
      checked("我戴上耳机听音乐。", "I put on my headphones to listen to music."),
      checked("你耳机里的音量太大了。", "The volume in your headphones is too high.")
    ],
    ja: [
      checked("音楽を聴くためにヘッドホンをつけます。", "我戴上耳机听音乐。"),
      checked("ヘッドホンの音量が大きすぎます。", "你耳机里的音量太大了。")
    ],
    ko: [
      checked("음악을 들으려고 헤드폰을 써요.", "我戴上耳机听音乐。"),
      checked("헤드폰 소리가 너무 커요.", "你耳机里的音量太大了。")
    ],
    fr: [
      checked("Je mets mon casque pour écouter de la musique.", "我戴上耳机听音乐。"),
      checked("Le volume de ton casque est trop élevé.", "你耳机里的音量太大了。")
    ],
    es: [
      checked("Me pongo los auriculares para escuchar música.", "我戴上耳机听音乐。"),
      checked("El volumen de tus auriculares está demasiado alto.", "你耳机里的音量太大了。")
    ],
    de: [
      checked("Ich setze meine Kopfhörer auf, um Musik zu hören.", "我戴上耳机听音乐。"),
      checked("Die Lautstärke deiner Kopfhörer ist zu hoch.", "你耳机里的音量太大了。")
    ]
  },
  camera: {
    en: [
      checked("He carries a camera around his neck when he travels.", "旅行时他把相机挂在脖子上。"),
      checked("Clean the camera lens with a soft cloth.", "用软布清洁相机镜头。")
    ],
    zh: [
      checked("旅行时他把相机挂在脖子上。", "He carries a camera around his neck when he travels."),
      checked("用软布清洁相机镜头。", "Clean the camera lens with a soft cloth.")
    ],
    ja: [
      checked("彼は旅行中、首からカメラを下げています。", "旅行时他把相机挂在脖子上。"),
      checked("柔らかい布でカメラのレンズを拭いてください。", "用软布清洁相机镜头。")
    ],
    ko: [
      checked("그는 여행할 때 목에 카메라를 걸고 다녀요.", "旅行时他把相机挂在脖子上。"),
      checked("부드러운 천으로 카메라 렌즈를 닦으세요.", "用软布清洁相机镜头。")
    ],
    fr: [
      checked("Il porte un appareil photo autour du cou quand il voyage.", "旅行时他把相机挂在脖子上。"),
      checked("Nettoie l'objectif de l'appareil photo avec un chiffon doux.", "用软布清洁相机镜头。")
    ],
    es: [
      checked("Él lleva una cámara colgada del cuello cuando viaja.", "旅行时他把相机挂在脖子上。"),
      checked("Limpia el objetivo de la cámara con un paño suave.", "用软布清洁相机镜头。")
    ],
    de: [
      checked("Auf Reisen trägt er eine Kamera um den Hals.", "旅行时他把相机挂在脖子上。"),
      checked("Reinige das Kameraobjektiv mit einem weichen Tuch.", "用软布清洁相机镜头。")
    ]
  },
  television: {
    en: [
      checked("Turn off the television before you leave the room.", "离开房间前关掉电视。"),
      checked("We watched the weather report on television.", "我们在电视上看了天气预报。")
    ],
    zh: [
      checked("离开房间前关掉电视。", "Turn off the television before you leave the room."),
      checked("我们在电视上看了天气预报。", "We watched the weather report on television.")
    ],
    ja: [
      checked("部屋を出る前にテレビを消してください。", "离开房间前关掉电视。"),
      checked("私たちはテレビで天気予報を見ました。", "我们在电视上看了天气预报。")
    ],
    ko: [
      checked("방을 나가기 전에 텔레비전을 끄세요.", "离开房间前关掉电视。"),
      checked("우리는 텔레비전으로 일기 예보를 봤어요.", "我们在电视上看了天气预报。")
    ],
    fr: [
      checked("Éteins la télévision avant de quitter la pièce.", "离开房间前关掉电视。"),
      checked("Nous avons regardé la météo à la télévision.", "我们在电视上看了天气预报。")
    ],
    es: [
      checked("Apaga el televisor antes de salir de la habitación.", "离开房间前关掉电视。"),
      checked("Vimos el pronóstico del tiempo en la televisión.", "我们在电视上看了天气预报。")
    ],
    de: [
      checked("Schalte den Fernseher aus, bevor du das Zimmer verlässt.", "离开房间前关掉电视。"),
      checked("Wir haben den Wetterbericht im Fernsehen gesehen.", "我们在电视上看了天气预报。")
    ]
  },
  "remote control": {
    en: [
      checked("The remote control was between the sofa cushions.", "遥控器夹在沙发垫之间。"),
      checked("Press the red button on the remote control.", "按下遥控器上的红色按钮。")
    ],
    zh: [
      checked("遥控器夹在沙发垫之间。", "The remote control was between the sofa cushions."),
      checked("按下遥控器上的红色按钮。", "Press the red button on the remote control.")
    ],
    ja: [
      checked("リモコンはソファのクッションの間にありました。", "遥控器夹在沙发垫之间。"),
      checked("リモコンの赤いボタンを押してください。", "按下遥控器上的红色按钮。")
    ],
    ko: [
      checked("리모컨은 소파 쿠션 사이에 있었어요.", "遥控器夹在沙发垫之间。"),
      checked("리모컨의 빨간 버튼을 누르세요.", "按下遥控器上的红色按钮。")
    ],
    fr: [
      checked("La télécommande était entre les coussins du canapé.", "遥控器夹在沙发垫之间。"),
      checked("Appuie sur le bouton rouge de la télécommande.", "按下遥控器上的红色按钮。")
    ],
    es: [
      checked("El mando a distancia estaba entre los cojines del sofá.", "遥控器夹在沙发垫之间。"),
      checked("Pulsa el botón rojo del mando a distancia.", "按下遥控器上的红色按钮。")
    ],
    de: [
      checked("Die Fernbedienung lag zwischen den Sofakissen.", "遥控器夹在沙发垫之间。"),
      checked("Drück den roten Knopf auf der Fernbedienung.", "按下遥控器上的红色按钮。")
    ]
  },
  phone: {
    en: [
      checked("Please put your phone on silent during the meeting.", "开会时请把手机调成静音。"),
      checked("I charge my phone before going to bed.", "我睡觉前给手机充电。")
    ],
    zh: [
      checked("开会时请把手机调成静音。", "Please put your phone on silent during the meeting."),
      checked("我睡觉前给手机充电。", "I charge my phone before going to bed.")
    ],
    ja: [
      checked("会議中は携帯電話をマナーモードにしてください。", "开会时请把手机调成静音。"),
      checked("寝る前に携帯電話を充電します。", "我睡觉前给手机充电。")
    ],
    ko: [
      checked("회의 중에는 휴대전화를 무음으로 설정해 주세요.", "开会时请把手机调成静音。"),
      checked("저는 자기 전에 휴대전화를 충전해요.", "我睡觉前给手机充电。")
    ],
    fr: [
      checked("Mets ton téléphone portable en mode silencieux pendant la réunion.", "开会时请把手机调成静音。"),
      checked("Je recharge mon téléphone avant de me coucher.", "我睡觉前给手机充电。")
    ],
    es: [
      checked("Pon el teléfono móvil en silencio durante la reunión.", "开会时请把手机调成静音。"),
      checked("Cargo el teléfono antes de acostarme.", "我睡觉前给手机充电。")
    ],
    de: [
      checked("Stell dein Handy während der Besprechung bitte lautlos.", "开会时请把手机调成静音。"),
      checked("Ich lade mein Handy vor dem Schlafengehen auf.", "我睡觉前给手机充电。")
    ]
  },
  laptop: {
    en: [
      checked("She takes her laptop to the library to study.", "她带着笔记本电脑去图书馆学习。"),
      checked("The laptop battery lasts about six hours.", "这台笔记本电脑的电池能用大约六小时。")
    ],
    zh: [
      checked("她带着笔记本电脑去图书馆学习。", "She takes her laptop to the library to study."),
      checked("这台笔记本电脑的电池能用大约六小时。", "The laptop battery lasts about six hours.")
    ],
    ja: [
      checked("彼女は勉強するためにノートパソコンを図書館へ持っていきます。", "她带着笔记本电脑去图书馆学习。"),
      checked("このノートパソコンのバッテリーは約六時間もちます。", "这台笔记本电脑的电池能用大约六小时。")
    ],
    ko: [
      checked("그녀는 공부하려고 노트북을 도서관에 가져가요.", "她带着笔记本电脑去图书馆学习。"),
      checked("이 노트북 배터리는 약 여섯 시간 동안 사용할 수 있어요.", "这台笔记本电脑的电池能用大约六小时。")
    ],
    fr: [
      checked("Elle emporte son ordinateur portable à la bibliothèque pour étudier.", "她带着笔记本电脑去图书馆学习。"),
      checked("La batterie de cet ordinateur portable dure environ six heures.", "这台笔记本电脑的电池能用大约六小时。")
    ],
    es: [
      checked("Ella lleva su portátil a la biblioteca para estudiar.", "她带着笔记本电脑去图书馆学习。"),
      checked("La batería de este portátil dura unas seis horas.", "这台笔记本电脑的电池能用大约六小时。")
    ],
    de: [
      checked("Sie nimmt ihren Laptop zum Lernen mit in die Bibliothek.", "她带着笔记本电脑去图书馆学习。"),
      checked("Der Akku dieses Laptops hält etwa sechs Stunden.", "这台笔记本电脑的电池能用大约六小时。")
    ]
  },
  keyboard: {
    en: [
      checked("Clean the keyboard with a soft cloth.", "用软布清洁键盘。"),
      checked("The keyboard is directly in front of the monitor.", "键盘就在显示器正前方。")
    ],
    zh: [
      checked("用软布清洁键盘。", "Clean the keyboard with a soft cloth."),
      checked("键盘就在显示器正前方。", "The keyboard is directly in front of the monitor.")
    ],
    ja: [
      checked("柔らかい布でキーボードを掃除してください。", "用软布清洁键盘。"),
      checked("キーボードはモニターのすぐ前にあります。", "键盘就在显示器正前方。")
    ],
    ko: [
      checked("부드러운 천으로 키보드를 닦으세요.", "用软布清洁键盘。"),
      checked("키보드는 모니터 바로 앞에 있어요.", "键盘就在显示器正前方。")
    ],
    fr: [
      checked("Nettoie le clavier avec un chiffon doux.", "用软布清洁键盘。"),
      checked("Le clavier est juste devant l'écran.", "键盘就在显示器正前方。")
    ],
    es: [
      checked("Limpia el teclado con un paño suave.", "用软布清洁键盘。"),
      checked("El teclado está justo delante del monitor.", "键盘就在显示器正前方。")
    ],
    de: [
      checked("Reinige die Tastatur mit einem weichen Tuch.", "用软布清洁键盘。"),
      checked("Die Tastatur liegt direkt vor dem Monitor.", "键盘就在显示器正前方。")
    ]
  },
  mouse: {
    en: [
      checked("Move the mouse and click the blue icon.", "移动鼠标，然后点击蓝色图标。"),
      checked("This wireless mouse needs a new battery.", "这个无线鼠标需要换新电池。")
    ],
    zh: [
      checked("移动鼠标，然后点击蓝色图标。", "Move the mouse and click the blue icon."),
      checked("这个无线鼠标需要换新电池。", "This wireless mouse needs a new battery.")
    ],
    ja: [
      checked("マウスを動かして、青いアイコンをクリックしてください。", "移动鼠标，然后点击蓝色图标。"),
      checked("このワイヤレスマウスは電池を交換する必要があります。", "这个无线鼠标需要换新电池。")
    ],
    ko: [
      checked("마우스를 움직여 파란색 아이콘을 클릭하세요.", "移动鼠标，然后点击蓝色图标。"),
      checked("이 무선 마우스는 새 배터리가 필요해요.", "这个无线鼠标需要换新电池。")
    ],
    fr: [
      checked("Déplace la souris et clique sur l'icône bleue.", "移动鼠标，然后点击蓝色图标。"),
      checked("Cette souris sans fil a besoin d'une nouvelle pile.", "这个无线鼠标需要换新电池。")
    ],
    es: [
      checked("Mueve el ratón y haz clic en el icono azul.", "移动鼠标，然后点击蓝色图标。"),
      checked("Este ratón inalámbrico necesita una pila nueva.", "这个无线鼠标需要换新电池。")
    ],
    de: [
      checked("Bewege die Maus und klicke auf das blaue Symbol.", "移动鼠标，然后点击蓝色图标。"),
      checked("Diese kabellose Maus braucht eine neue Batterie.", "这个无线鼠标需要换新电池。")
    ]
  },
  charger: {
    en: [
      checked("I left my phone charger at home.", "我把手机充电器落在家里了。"),
      checked("Unplug the charger when the battery is full.", "电池充满后拔掉充电器。")
    ],
    zh: [
      checked("我把手机充电器落在家里了。", "I left my phone charger at home."),
      checked("电池充满后拔掉充电器。", "Unplug the charger when the battery is full.")
    ],
    ja: [
      checked("携帯電話の充電器を家に忘れました。", "我把手机充电器落在家里了。"),
      checked("充電が完了したら、充電器を抜いてください。", "电池充满后拔掉充电器。")
    ],
    ko: [
      checked("휴대전화 충전기를 집에 두고 왔어요.", "我把手机充电器落在家里了。"),
      checked("배터리가 다 충전되면 충전기를 빼세요.", "电池充满后拔掉充电器。")
    ],
    fr: [
      checked("J'ai oublié mon chargeur de téléphone à la maison.", "我把手机充电器落在家里了。"),
      checked("Débranche le chargeur lorsque la batterie est pleine.", "电池充满后拔掉充电器。")
    ],
    es: [
      checked("Dejé el cargador del teléfono en casa.", "我把手机充电器落在家里了。"),
      checked("Desenchufa el cargador cuando la batería esté llena.", "电池充满后拔掉充电器。")
    ],
    de: [
      checked("Ich habe mein Handyladegerät zu Hause vergessen.", "我把手机充电器落在家里了。"),
      checked("Zieh das Ladegerät ab, wenn der Akku voll ist.", "电池充满后拔掉充电器。")
    ]
  },
  milk: {
    en: [
      checked("I warm a little milk before going to bed.", "我睡觉前会热一点牛奶。"),
      checked("There is only a little milk left in the carton.", "纸盒里只剩下一点牛奶了。")
    ],
    zh: [
      checked("我睡觉前会热一点牛奶。", "I warm a little milk before going to bed."),
      checked("纸盒里只剩下一点牛奶了。", "There is only a little milk left in the carton.")
    ],
    ja: [
      checked("寝る前に牛乳を少し温めます。", "我睡觉前会热一点牛奶。"),
      checked("パックには牛乳が少ししか残っていません。", "纸盒里只剩下一点牛奶了。")
    ],
    ko: [
      checked("저는 자기 전에 우유를 조금 데워요.", "我睡觉前会热一点牛奶。"),
      checked("우유 팩에 우유가 조금밖에 남지 않았어요.", "纸盒里只剩下一点牛奶了。")
    ],
    fr: [
      checked("Je fais chauffer un peu de lait avant de me coucher.", "我睡觉前会热一点牛奶。"),
      checked("Il ne reste qu'un peu de lait dans la brique.", "纸盒里只剩下一点牛奶了。")
    ],
    es: [
      checked("Caliento un poco de leche antes de acostarme.", "我睡觉前会热一点牛奶。"),
      checked("Solo queda un poco de leche en el cartón.", "纸盒里只剩下一点牛奶了。")
    ],
    de: [
      checked("Vor dem Schlafengehen wärme ich etwas Milch auf.", "我睡觉前会热一点牛奶。"),
      checked("In der Packung ist nur noch etwas Milch.", "纸盒里只剩下一点牛奶了。")
    ]
  },
  cake: {
    en: [
      checked("We baked a chocolate cake for her birthday.", "我们为她的生日烤了一个巧克力蛋糕。"),
      checked("Save a slice of cake for your brother.", "给你弟弟留一块蛋糕。")
    ],
    zh: [
      checked("我们为她的生日烤了一个巧克力蛋糕。", "We baked a chocolate cake for her birthday."),
      checked("给你弟弟留一块蛋糕。", "Save a slice of cake for your brother.")
    ],
    ja: [
      checked("私たちは彼女の誕生日にチョコレートケーキを焼きました。", "我们为她的生日烤了一个巧克力蛋糕。"),
      checked("弟のためにケーキを一切れ残しておいてください。", "给你弟弟留一块蛋糕。")
    ],
    ko: [
      checked("우리는 그녀의 생일을 위해 초콜릿 케이크를 구웠어요.", "我们为她的生日烤了一个巧克力蛋糕。"),
      checked("남동생을 위해 케이크 한 조각을 남겨 두세요.", "给你弟弟留一块蛋糕。")
    ],
    fr: [
      checked("Nous avons préparé un gâteau au chocolat pour son anniversaire.", "我们为她的生日烤了一个巧克力蛋糕。"),
      checked("Garde une part de gâteau pour ton frère.", "给你弟弟留一块蛋糕。")
    ],
    es: [
      checked("Horneamos un pastel de chocolate para su cumpleaños.", "我们为她的生日烤了一个巧克力蛋糕。"),
      checked("Guarda un trozo de pastel para tu hermano.", "给你弟弟留一块蛋糕。")
    ],
    de: [
      checked("Wir haben zu ihrem Geburtstag einen Schokoladenkuchen gebacken.", "我们为她的生日烤了一个巧克力蛋糕。"),
      checked("Heb ein Stück Kuchen für deinen Bruder auf.", "给你弟弟留一块蛋糕。")
    ]
  },
  carrot: {
    en: [
      checked("Chop the carrot into small pieces for the soup.", "把胡萝卜切成小块放进汤里。"),
      checked("The rabbit is eating a carrot in the garden.", "兔子正在花园里吃胡萝卜。")
    ],
    zh: [
      checked("把胡萝卜切成小块放进汤里。", "Chop the carrot into small pieces for the soup."),
      checked("兔子正在花园里吃胡萝卜。", "The rabbit is eating a carrot in the garden.")
    ],
    ja: [
      checked("スープに入れるにんじんを小さく切ってください。", "把胡萝卜切成小块放进汤里。"),
      checked("うさぎが庭でにんじんを食べています。", "兔子正在花园里吃胡萝卜。")
    ],
    ko: [
      checked("수프에 넣을 당근을 작게 썰어 주세요.", "把胡萝卜切成小块放进汤里。"),
      checked("토끼가 정원에서 당근을 먹고 있어요.", "兔子正在花园里吃胡萝卜。")
    ],
    fr: [
      checked("Coupe la carotte en petits morceaux pour la soupe.", "把胡萝卜切成小块放进汤里。"),
      checked("Le lapin mange une carotte dans le jardin.", "兔子正在花园里吃胡萝卜。")
    ],
    es: [
      checked("Corta la zanahoria en trozos pequeños para la sopa.", "把胡萝卜切成小块放进汤里。"),
      checked("El conejo está comiendo una zanahoria en el jardín.", "兔子正在花园里吃胡萝卜。")
    ],
    de: [
      checked("Schneide die Karotte für die Suppe in kleine Stücke.", "把胡萝卜切成小块放进汤里。"),
      checked("Das Kaninchen frisst im Garten eine Karotte.", "兔子正在花园里吃胡萝卜。")
    ]
  },
  sandwich: {
    en: [
      checked("I packed a cheese sandwich for lunch.", "我带了一个奶酪三明治当午餐。"),
      checked("She cut the sandwich in half and shared it.", "她把三明治切成两半和别人分享。")
    ],
    zh: [
      checked("我带了一个奶酪三明治当午餐。", "I packed a cheese sandwich for lunch."),
      checked("她把三明治切成两半和别人分享。", "She cut the sandwich in half and shared it.")
    ],
    ja: [
      checked("昼食にチーズサンドイッチを持っていきました。", "我带了一个奶酪三明治当午餐。"),
      checked("彼女はサンドイッチを半分に切って分けました。", "她把三明治切成两半和别人分享。")
    ],
    ko: [
      checked("점심으로 치즈 샌드위치를 싸 갔어요.", "我带了一个奶酪三明治当午餐。"),
      checked("그녀는 샌드위치를 반으로 잘라 나누어 먹었어요.", "她把三明治切成两半和别人分享。")
    ],
    fr: [
      checked("J'ai emporté un sandwich au fromage pour le déjeuner.", "我带了一个奶酪三明治当午餐。"),
      checked("Elle a coupé le sandwich en deux et l'a partagé.", "她把三明治切成两半和别人分享。")
    ],
    es: [
      checked("Llevé un sándwich de queso para el almuerzo.", "我带了一个奶酪三明治当午餐。"),
      checked("Ella cortó el sándwich por la mitad y lo compartió.", "她把三明治切成两半和别人分享。")
    ],
    de: [
      checked("Ich nahm ein Käsesandwich zum Mittagessen mit.", "我带了一个奶酪三明治当午餐。"),
      checked("Sie schnitt das Sandwich in zwei Hälften und teilte es.", "她把三明治切成两半和别人分享。")
    ]
  },
  orange: {
    en: [
      checked("This orange is easy to peel.", "这个橙子很容易剥皮。"),
      checked("We made fresh juice from three oranges.", "我们用三个橙子榨了新鲜果汁。")
    ],
    zh: [
      checked("这个橙子很容易剥皮。", "This orange is easy to peel."),
      checked("我们用三个橙子榨了新鲜果汁。", "We made fresh juice from three oranges.")
    ],
    ja: [
      checked("このオレンジは皮がむきやすいです。", "这个橙子很容易剥皮。"),
      checked("オレンジを三個使って新鮮なジュースを作りました。", "我们用三个橙子榨了新鲜果汁。")
    ],
    ko: [
      checked("이 오렌지는 껍질을 벗기기 쉬워요.", "这个橙子很容易剥皮。"),
      checked("오렌지 세 개로 신선한 주스를 만들었어요.", "我们用三个橙子榨了新鲜果汁。")
    ],
    fr: [
      checked("Cette orange est facile à éplucher.", "这个橙子很容易剥皮。"),
      checked("Nous avons préparé du jus frais avec trois oranges.", "我们用三个橙子榨了新鲜果汁。")
    ],
    es: [
      checked("Esta naranja es fácil de pelar.", "这个橙子很容易剥皮。"),
      checked("Preparamos zumo fresco con tres naranjas.", "我们用三个橙子榨了新鲜果汁。")
    ],
    de: [
      checked("Diese Orange lässt sich leicht schälen.", "这个橙子很容易剥皮。"),
      checked("Wir haben aus drei Orangen frischen Saft gemacht.", "我们用三个橙子榨了新鲜果汁。")
    ]
  },
  apple: {
    en: [
      checked("She sliced an apple for her lunch box.", "她切了一个苹果放进午餐盒。"),
      checked("These apples are crisp and sweet.", "这些苹果又脆又甜。")
    ],
    zh: [
      checked("她切了一个苹果放进午餐盒。", "She sliced an apple for her lunch box."),
      checked("这些苹果又脆又甜。", "These apples are crisp and sweet.")
    ],
    ja: [
      checked("彼女はお弁当のためにりんごを一つ切りました。", "她切了一个苹果放进午餐盒。"),
      checked("これらのりんごはシャキシャキして甘いです。", "这些苹果又脆又甜。")
    ],
    ko: [
      checked("그녀는 도시락에 넣을 사과 한 개를 잘랐어요.", "她切了一个苹果放进午餐盒。"),
      checked("이 사과들은 아삭하고 달아요.", "这些苹果又脆又甜。")
    ],
    fr: [
      checked("Elle a coupé une pomme pour sa boîte à déjeuner.", "她切了一个苹果放进午餐盒。"),
      checked("Ces pommes sont croquantes et sucrées.", "这些苹果又脆又甜。")
    ],
    es: [
      checked("Ella cortó una manzana para su fiambrera.", "她切了一个苹果放进午餐盒。"),
      checked("Estas manzanas están crujientes y dulces.", "这些苹果又脆又甜。")
    ],
    de: [
      checked("Sie schnitt einen Apfel für ihre Brotdose in Stücke.", "她切了一个苹果放进午餐盒。"),
      checked("Diese Äpfel sind knackig und süß.", "这些苹果又脆又甜。")
    ]
  },
  banana: {
    en: [
      checked("I usually eat a banana with breakfast.", "我早餐通常会吃一根香蕉。"),
      checked("The banana peel turned brown overnight.", "香蕉皮一夜之间变成了褐色。")
    ],
    zh: [
      checked("我早餐通常会吃一根香蕉。", "I usually eat a banana with breakfast."),
      checked("香蕉皮一夜之间变成了褐色。", "The banana peel turned brown overnight.")
    ],
    ja: [
      checked("私はたいてい朝食にバナナを一本食べます。", "我早餐通常会吃一根香蕉。"),
      checked("バナナの皮は一晩で茶色くなりました。", "香蕉皮一夜之间变成了褐色。")
    ],
    ko: [
      checked("저는 보통 아침 식사로 바나나 한 개를 먹어요.", "我早餐通常会吃一根香蕉。"),
      checked("바나나 껍질이 하룻밤 사이에 갈색으로 변했어요.", "香蕉皮一夜之间变成了褐色。")
    ],
    fr: [
      checked("Je mange habituellement une banane au petit-déjeuner.", "我早餐通常会吃一根香蕉。"),
      checked("La peau de la banane a bruni pendant la nuit.", "香蕉皮一夜之间变成了褐色。")
    ],
    es: [
      checked("Normalmente como un plátano con el desayuno.", "我早餐通常会吃一根香蕉。"),
      checked("La cáscara del plátano se volvió marrón durante la noche.", "香蕉皮一夜之间变成了褐色。")
    ],
    de: [
      checked("Zum Frühstück esse ich normalerweise eine Banane.", "我早餐通常会吃一根香蕉。"),
      checked("Die Bananenschale wurde über Nacht braun.", "香蕉皮一夜之间变成了褐色。")
    ]
  },
  bread: {
    en: [
      checked("The bakery makes fresh bread every morning.", "这家面包店每天早上制作新鲜面包。"),
      checked("I toasted a slice of bread for breakfast.", "我早餐烤了一片面包。")
    ],
    zh: [
      checked("这家面包店每天早上制作新鲜面包。", "The bakery makes fresh bread every morning."),
      checked("我早餐烤了一片面包。", "I toasted a slice of bread for breakfast.")
    ],
    ja: [
      checked("そのパン屋は毎朝焼きたてのパンを作ります。", "这家面包店每天早上制作新鲜面包。"),
      checked("朝食にパンを一枚焼きました。", "我早餐烤了一片面包。")
    ],
    ko: [
      checked("그 빵집은 매일 아침 신선한 빵을 만들어요.", "这家面包店每天早上制作新鲜面包。"),
      checked("아침 식사로 빵 한 조각을 구웠어요.", "我早餐烤了一片面包。")
    ],
    fr: [
      checked("La boulangerie prépare du pain frais chaque matin.", "这家面包店每天早上制作新鲜面包。"),
      checked("J'ai fait griller une tranche de pain pour le petit-déjeuner.", "我早餐烤了一片面包。")
    ],
    es: [
      checked("La panadería prepara pan fresco cada mañana.", "这家面包店每天早上制作新鲜面包。"),
      checked("Tosté una rebanada de pan para el desayuno.", "我早餐烤了一片面包。")
    ],
    de: [
      checked("Die Bäckerei backt jeden Morgen frisches Brot.", "这家面包店每天早上制作新鲜面包。"),
      checked("Ich habe zum Frühstück eine Scheibe Brot getoastet.", "我早餐烤了一片面包。")
    ]
  },
  rice: {
    en: [
      checked("Wash the rice before you cook it.", "煮米饭前先把米洗干净。"),
      checked("We ate vegetable curry with rice.", "我们吃了配米饭的蔬菜咖喱。")
    ],
    zh: [
      checked("煮米饭前先把米洗干净。", "Wash the rice before you cook it."),
      checked("我们吃了配米饭的蔬菜咖喱。", "We ate vegetable curry with rice.")
    ],
    ja: [
      checked("炊く前にお米を洗ってください。", "煮米饭前先把米洗干净。"),
      checked("私たちは野菜カレーをご飯と一緒に食べました。", "我们吃了配米饭的蔬菜咖喱。")
    ],
    ko: [
      checked("밥을 짓기 전에 쌀을 씻으세요.", "煮米饭前先把米洗干净。"),
      checked("우리는 밥과 함께 채소 카레를 먹었어요.", "我们吃了配米饭的蔬菜咖喱。")
    ],
    fr: [
      checked("Rince le riz avant de le faire cuire.", "煮米饭前先把米洗干净。"),
      checked("Nous avons mangé du curry de légumes avec du riz.", "我们吃了配米饭的蔬菜咖喱。")
    ],
    es: [
      checked("Lava el arroz antes de cocinarlo.", "煮米饭前先把米洗干净。"),
      checked("Comimos curry de verduras con arroz.", "我们吃了配米饭的蔬菜咖喱。")
    ],
    de: [
      checked("Wasch den Reis, bevor du ihn kochst.", "煮米饭前先把米洗干净。"),
      checked("Wir haben Gemüsecurry mit Reis gegessen.", "我们吃了配米饭的蔬菜咖喱。")
    ]
  },
  egg: {
    en: [
      checked("Boil the egg for seven minutes.", "把鸡蛋煮七分钟。"),
      checked("He cracked an egg into the bowl.", "他把一个鸡蛋打进碗里。")
    ],
    zh: [
      checked("把鸡蛋煮七分钟。", "Boil the egg for seven minutes."),
      checked("他把一个鸡蛋打进碗里。", "He cracked an egg into the bowl.")
    ],
    ja: [
      checked("卵を七分間ゆでてください。", "把鸡蛋煮七分钟。"),
      checked("彼はボウルに卵を一つ割り入れました。", "他把一个鸡蛋打进碗里。")
    ],
    ko: [
      checked("달걀을 7분 동안 삶으세요.", "把鸡蛋煮七分钟。"),
      checked("그는 그릇에 달걀 한 개를 깨서 넣었어요.", "他把一个鸡蛋打进碗里。")
    ],
    fr: [
      checked("Fais cuire l'œuf pendant sept minutes.", "把鸡蛋煮七分钟。"),
      checked("Il a cassé un œuf dans le bol.", "他把一个鸡蛋打进碗里。")
    ],
    es: [
      checked("Hierve el huevo durante siete minutos.", "把鸡蛋煮七分钟。"),
      checked("Él rompió un huevo en el cuenco.", "他把一个鸡蛋打进碗里。")
    ],
    de: [
      checked("Koch das Ei sieben Minuten lang.", "把鸡蛋煮七分钟。"),
      checked("Er schlug ein Ei in die Schüssel.", "他把一个鸡蛋打进碗里。")
    ]
  },
  pan: {
    en: [
      checked("Heat the oil in the pan before adding the vegetables.", "放蔬菜前先把锅里的油加热。"),
      checked("The handle of the pan is hot, so be careful.", "锅柄很烫，要小心。")
    ],
    zh: [
      checked("放蔬菜前先把锅里的油加热。", "Heat the oil in the pan before adding the vegetables."),
      checked("锅柄很烫，要小心。", "The handle of the pan is hot, so be careful.")
    ],
    ja: [
      checked("野菜を入れる前に、フライパンの油を熱してください。", "放蔬菜前先把锅里的油加热。"),
      checked("フライパンの取っ手は熱いので、気をつけてください。", "锅柄很烫，要小心。")
    ],
    ko: [
      checked("채소를 넣기 전에 프라이팬의 기름을 데우세요.", "放蔬菜前先把锅里的油加热。"),
      checked("프라이팬 손잡이가 뜨거우니 조심하세요.", "锅柄很烫，要小心。")
    ],
    fr: [
      checked("Fais chauffer l'huile dans la poêle avant d'ajouter les légumes.", "放蔬菜前先把锅里的油加热。"),
      checked("Le manche de la poêle est chaud, alors fais attention.", "锅柄很烫，要小心。")
    ],
    es: [
      checked("Calienta el aceite en la sartén antes de añadir las verduras.", "放蔬菜前先把锅里的油加热。"),
      checked("El mango de la sartén está caliente, así que ten cuidado.", "锅柄很烫，要小心。")
    ],
    de: [
      checked("Erhitze das Öl in der Pfanne, bevor du das Gemüse hinzugibst.", "放蔬菜前先把锅里的油加热。"),
      checked("Der Griff der Pfanne ist heiß, also sei vorsichtig.", "锅柄很烫，要小心。")
    ]
  },
  pot: {
    en: [
      checked("The soup is simmering in the pot.", "汤正在锅里慢慢炖煮。"),
      checked("Put the lid on the pot to keep the food warm.", "盖上锅盖，让食物保持温热。")
    ],
    zh: [
      checked("汤正在锅里慢慢炖煮。", "The soup is simmering in the pot."),
      checked("盖上锅盖，让食物保持温热。", "Put the lid on the pot to keep the food warm.")
    ],
    ja: [
      checked("鍋の中でスープがことこと煮えています。", "汤正在锅里慢慢炖煮。"),
      checked("料理が冷めないように鍋にふたをしてください。", "盖上锅盖，让食物保持温热。")
    ],
    ko: [
      checked("냄비에서 수프가 약한 불로 끓고 있어요.", "汤正在锅里慢慢炖煮。"),
      checked("음식이 따뜻하게 유지되도록 냄비 뚜껑을 덮으세요.", "盖上锅盖，让食物保持温热。")
    ],
    fr: [
      checked("La soupe mijote dans la casserole.", "汤正在锅里慢慢炖煮。"),
      checked("Mets le couvercle sur la casserole pour garder le plat au chaud.", "盖上锅盖，让食物保持温热。")
    ],
    es: [
      checked("La sopa se está cocinando a fuego lento en la olla.", "汤正在锅里慢慢炖煮。"),
      checked("Pon la tapa en la olla para mantener la comida caliente.", "盖上锅盖，让食物保持温热。")
    ],
    de: [
      checked("Die Suppe köchelt im Topf.", "汤正在锅里慢慢炖煮。"),
      checked("Setz den Deckel auf den Topf, damit das Essen warm bleibt.", "盖上锅盖，让食物保持温热。")
    ]
  },
  "cutting board": {
    en: [
      checked("Slice the bread on the wooden cutting board.", "在木砧板上切面包。"),
      checked("Wash the cutting board after preparing raw meat.", "处理生肉后要清洗砧板。")
    ],
    zh: [
      checked("在木砧板上切面包。", "Slice the bread on the wooden cutting board."),
      checked("处理生肉后要清洗砧板。", "Wash the cutting board after preparing raw meat.")
    ],
    ja: [
      checked("木のまな板の上でパンを切ってください。", "在木砧板上切面包。"),
      checked("生肉を扱った後は、まな板を洗ってください。", "处理生肉后要清洗砧板。")
    ],
    ko: [
      checked("나무 도마 위에서 빵을 썰어 주세요.", "在木砧板上切面包。"),
      checked("생고기를 손질한 후에는 도마를 씻으세요.", "处理生肉后要清洗砧板。")
    ],
    fr: [
      checked("Coupe le pain sur la planche à découper en bois.", "在木砧板上切面包。"),
      checked("Lave la planche à découper après avoir préparé de la viande crue.", "处理生肉后要清洗砧板。")
    ],
    es: [
      checked("Corta el pan en la tabla de cortar de madera.", "在木砧板上切面包。"),
      checked("Lava la tabla de cortar después de preparar carne cruda.", "处理生肉后要清洗砧板。")
    ],
    de: [
      checked("Schneide das Brot auf dem hölzernen Schneidebrett.", "在木砧板上切面包。"),
      checked("Spül das Schneidebrett ab, nachdem du rohes Fleisch zubereitet hast.", "处理生肉后要清洗砧板。")
    ]
  },
  sink: {
    en: [
      checked("The dirty dishes are soaking in the sink.", "脏餐具正在水槽里浸泡。"),
      checked("The sponge is beside the kitchen sink.", "海绵在厨房水槽旁边。")
    ],
    zh: [
      checked("脏餐具正在水槽里浸泡。", "The dirty dishes are soaking in the sink."),
      checked("海绵在厨房水槽旁边。", "The sponge is beside the kitchen sink.")
    ],
    ja: [
      checked("汚れた食器を流し台でつけ置きしています。", "脏餐具正在水槽里浸泡。"),
      checked("スポンジは台所の流し台の横にあります。", "海绵在厨房水槽旁边。")
    ],
    ko: [
      checked("더러운 그릇을 싱크대에 담가 두었어요.", "脏餐具正在水槽里浸泡。"),
      checked("수세미는 주방 싱크대 옆에 있어요.", "海绵在厨房水槽旁边。")
    ],
    fr: [
      checked("La vaisselle sale trempe dans l'évier.", "脏餐具正在水槽里浸泡。"),
      checked("L'éponge est à côté de l'évier de la cuisine.", "海绵在厨房水槽旁边。")
    ],
    es: [
      checked("Los platos sucios están en remojo en el fregadero.", "脏餐具正在水槽里浸泡。"),
      checked("La esponja está al lado del fregadero de la cocina.", "海绵在厨房水槽旁边。")
    ],
    de: [
      checked("Das schmutzige Geschirr weicht in der Spüle ein.", "脏餐具正在水槽里浸泡。"),
      checked("Der Schwamm liegt neben der Küchenspüle.", "海绵在厨房水槽旁边。")
    ]
  },
  refrigerator: {
    en: [
      checked("Milk stays fresh longer in the refrigerator.", "牛奶放在冰箱里能保鲜更久。"),
      checked("Put the leftovers in the refrigerator after dinner.", "晚饭后把剩菜放进冰箱。")
    ],
    zh: [
      checked("牛奶放在冰箱里能保鲜更久。", "Milk stays fresh longer in the refrigerator."),
      checked("晚饭后把剩菜放进冰箱。", "Put the leftovers in the refrigerator after dinner.")
    ],
    ja: [
      checked("牛乳は冷蔵庫に入れると長持ちします。", "牛奶放在冰箱里能保鲜更久。"),
      checked("夕食の後、残り物を冷蔵庫に入れてください。", "晚饭后把剩菜放进冰箱。")
    ],
    ko: [
      checked("우유는 냉장고에 넣으면 더 오래 신선하게 보관할 수 있어요.", "牛奶放在冰箱里能保鲜更久。"),
      checked("저녁 식사 후에 남은 음식을 냉장고에 넣으세요.", "晚饭后把剩菜放进冰箱。")
    ],
    fr: [
      checked("Le lait reste frais plus longtemps au réfrigérateur.", "牛奶放在冰箱里能保鲜更久。"),
      checked("Mets les restes au réfrigérateur après le dîner.", "晚饭后把剩菜放进冰箱。")
    ],
    es: [
      checked("La leche se mantiene fresca más tiempo en el refrigerador.", "牛奶放在冰箱里能保鲜更久。"),
      checked("Guarda las sobras en el refrigerador después de cenar.", "晚饭后把剩菜放进冰箱。")
    ],
    de: [
      checked("Milch bleibt im Kühlschrank länger frisch.", "牛奶放在冰箱里能保鲜更久。"),
      checked("Stell die Reste nach dem Abendessen in den Kühlschrank.", "晚饭后把剩菜放进冰箱。")
    ]
  },
  fork: {
    en: [
      { sentence: "Use a fork to pick up the vegetables.", translation: "用叉子叉起蔬菜。", reviewStatus: "checked" },
      { sentence: "Your fork is beside the plate.", translation: "你的叉子在盘子旁边。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "用叉子叉起蔬菜。", translation: "Use a fork to pick up the vegetables.", reviewStatus: "checked" },
      { sentence: "你的叉子在盘子旁边。", translation: "Your fork is beside the plate.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "フォークで野菜を取ってください。", translation: "用叉子叉起蔬菜。", reviewStatus: "checked" },
      { sentence: "あなたのフォークは皿の横にあります。", translation: "你的叉子在盘子旁边。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "포크로 채소를 집어 주세요.", translation: "用叉子叉起蔬菜。", reviewStatus: "checked" },
      { sentence: "포크는 접시 옆에 있어요.", translation: "你的叉子在盘子旁边。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Prends les légumes avec une fourchette.", translation: "用叉子叉起蔬菜。", reviewStatus: "checked" },
      { sentence: "Ta fourchette est à côté de l'assiette.", translation: "你的叉子在盘子旁边。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Toma las verduras con un tenedor.", translation: "用叉子叉起蔬菜。", reviewStatus: "checked" },
      { sentence: "Tu tenedor está al lado del plato.", translation: "你的叉子在盘子旁边。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Nimm das Gemüse mit einer Gabel.", translation: "用叉子叉起蔬菜。", reviewStatus: "checked" },
      { sentence: "Deine Gabel liegt neben dem Teller.", translation: "你的叉子在盘子旁边。", reviewStatus: "checked" }
    ]
  },
  knife: {
    en: [
      { sentence: "Cut the apple carefully with a sharp knife.", translation: "用锋利的刀小心地切苹果。", reviewStatus: "checked" },
      { sentence: "Please put the knife back in the drawer.", translation: "请把刀放回抽屉里。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "用锋利的刀小心地切苹果。", translation: "Cut the apple carefully with a sharp knife.", reviewStatus: "checked" },
      { sentence: "请把刀放回抽屉里。", translation: "Please put the knife back in the drawer.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "鋭いナイフでりんごを注意して切ってください。", translation: "用锋利的刀小心地切苹果。", reviewStatus: "checked" },
      { sentence: "ナイフを引き出しに戻してください。", translation: "请把刀放回抽屉里。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "날카로운 칼로 사과를 조심해서 자르세요.", translation: "用锋利的刀小心地切苹果。", reviewStatus: "checked" },
      { sentence: "칼을 서랍에 다시 넣어 주세요.", translation: "请把刀放回抽屉里。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Coupe la pomme avec précaution à l'aide d'un couteau bien aiguisé.", translation: "用锋利的刀小心地切苹果。", reviewStatus: "checked" },
      { sentence: "Remets le couteau dans le tiroir, s'il te plaît.", translation: "请把刀放回抽屉里。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Corta la manzana con cuidado usando un cuchillo afilado.", translation: "用锋利的刀小心地切苹果。", reviewStatus: "checked" },
      { sentence: "Vuelve a guardar el cuchillo en el cajón, por favor.", translation: "请把刀放回抽屉里。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Schneide den Apfel vorsichtig mit einem scharfen Messer.", translation: "用锋利的刀小心地切苹果。", reviewStatus: "checked" },
      { sentence: "Leg das Messer bitte zurück in die Schublade.", translation: "请把刀放回抽屉里。", reviewStatus: "checked" }
    ]
  },
  mug: {
    en: [
      { sentence: "He drinks coffee from his favorite mug.", translation: "他用最喜欢的马克杯喝咖啡。", reviewStatus: "checked" },
      { sentence: "The blue mug is still warm.", translation: "那个蓝色马克杯还是温的。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "他用最喜欢的马克杯喝咖啡。", translation: "He drinks coffee from his favorite mug.", reviewStatus: "checked" },
      { sentence: "那个蓝色马克杯还是温的。", translation: "The blue mug is still warm.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "彼はお気に入りのマグカップでコーヒーを飲みます。", translation: "他用最喜欢的马克杯喝咖啡。", reviewStatus: "checked" },
      { sentence: "青いマグカップはまだ温かいです。", translation: "那个蓝色马克杯还是温的。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "그는 가장 좋아하는 머그잔으로 커피를 마셔요.", translation: "他用最喜欢的马克杯喝咖啡。", reviewStatus: "checked" },
      { sentence: "파란 머그잔은 아직 따뜻해요.", translation: "那个蓝色马克杯还是温的。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Il boit son café dans son mug préféré.", translation: "他用最喜欢的马克杯喝咖啡。", reviewStatus: "checked" },
      { sentence: "Le mug bleu est encore chaud.", translation: "那个蓝色马克杯还是温的。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Él bebe café en su taza favorita.", translation: "他用最喜欢的马克杯喝咖啡。", reviewStatus: "checked" },
      { sentence: "La taza azul todavía está caliente.", translation: "那个蓝色马克杯还是温的。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Er trinkt Kaffee aus seinem Lieblingsbecher.", translation: "他用最喜欢的马克杯喝咖啡。", reviewStatus: "checked" },
      { sentence: "Der blaue Becher ist noch warm.", translation: "那个蓝色马克杯还是温的。", reviewStatus: "checked" }
    ]
  },
  glass: {
    en: [
      { sentence: "She filled the glass with cold water.", translation: "她在玻璃杯里倒满了冷水。", reviewStatus: "checked" },
      { sentence: "Be careful not to drop the glass.", translation: "小心别把玻璃杯摔了。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "她在玻璃杯里倒满了冷水。", translation: "She filled the glass with cold water.", reviewStatus: "checked" },
      { sentence: "小心别把玻璃杯摔了。", translation: "Be careful not to drop the glass.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "彼女はグラスに冷たい水をいっぱい入れました。", translation: "她在玻璃杯里倒满了冷水。", reviewStatus: "checked" },
      { sentence: "グラスを落とさないように気をつけてください。", translation: "小心别把玻璃杯摔了。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "그녀는 유리잔에 찬물을 가득 채웠어요.", translation: "她在玻璃杯里倒满了冷水。", reviewStatus: "checked" },
      { sentence: "유리잔을 떨어뜨리지 않도록 조심하세요.", translation: "小心别把玻璃杯摔了。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Elle a rempli le verre d'eau froide.", translation: "她在玻璃杯里倒满了冷水。", reviewStatus: "checked" },
      { sentence: "Fais attention à ne pas faire tomber le verre.", translation: "小心别把玻璃杯摔了。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Ella llenó el vaso de agua fría.", translation: "她在玻璃杯里倒满了冷水。", reviewStatus: "checked" },
      { sentence: "Ten cuidado de no dejar caer el vaso.", translation: "小心别把玻璃杯摔了。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Sie füllte das Glas mit kaltem Wasser.", translation: "她在玻璃杯里倒满了冷水。", reviewStatus: "checked" },
      { sentence: "Pass auf, dass du das Glas nicht fallen lässt.", translation: "小心别把玻璃杯摔了。", reviewStatus: "checked" }
    ]
  },
  kettle: {
    en: [
      { sentence: "The kettle is boiling in the kitchen.", translation: "厨房里的水壶烧开了。", reviewStatus: "checked" },
      { sentence: "Fill the kettle before making tea.", translation: "泡茶前先给水壶加水。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "厨房里的水壶烧开了。", translation: "The kettle is boiling in the kitchen.", reviewStatus: "checked" },
      { sentence: "泡茶前先给水壶加水。", translation: "Fill the kettle before making tea.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "台所でやかんのお湯が沸いています。", translation: "厨房里的水壶烧开了。", reviewStatus: "checked" },
      { sentence: "お茶を入れる前にやかんに水を入れてください。", translation: "泡茶前先给水壶加水。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "주방에서 주전자의 물이 끓고 있어요.", translation: "厨房里的水壶烧开了。", reviewStatus: "checked" },
      { sentence: "차를 끓이기 전에 주전자에 물을 채우세요.", translation: "泡茶前先给水壶加水。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "L'eau bout dans la bouilloire, dans la cuisine.", translation: "厨房里的水壶烧开了。", reviewStatus: "checked" },
      { sentence: "Remplis la bouilloire avant de préparer le thé.", translation: "泡茶前先给水壶加水。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "El agua está hirviendo en el hervidor de la cocina.", translation: "厨房里的水壶烧开了。", reviewStatus: "checked" },
      { sentence: "Llena el hervidor antes de preparar el té.", translation: "泡茶前先给水壶加水。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Das Wasser im Wasserkocher in der Küche kocht.", translation: "厨房里的水壶烧开了。", reviewStatus: "checked" },
      { sentence: "Füll den Wasserkocher, bevor du Tee machst.", translation: "泡茶前先给水壶加水。", reviewStatus: "checked" }
    ]
  },
  cup: {
    en: [
      { sentence: "Pour some tea into this cup.", translation: "往这个杯子里倒些茶。", reviewStatus: "checked" },
      { sentence: "Please wash the cup after using it.", translation: "杯子用完后请洗干净。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "往这个杯子里倒些茶。", translation: "Pour some tea into this cup.", reviewStatus: "checked" },
      { sentence: "杯子用完后请洗干净。", translation: "Please wash the cup after using it.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "このカップにお茶を少し注いでください。", translation: "往这个杯子里倒些茶。", reviewStatus: "checked" },
      { sentence: "カップは使った後に洗ってください。", translation: "杯子用完后请洗干净。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "이 컵에 차를 조금 따라 주세요.", translation: "往这个杯子里倒些茶。", reviewStatus: "checked" },
      { sentence: "컵을 사용한 후에 씻어 주세요.", translation: "杯子用完后请洗干净。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Verse un peu de thé dans cette tasse.", translation: "往这个杯子里倒些茶。", reviewStatus: "checked" },
      { sentence: "Lave la tasse après l'avoir utilisée.", translation: "杯子用完后请洗干净。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Sirve un poco de té en esta taza.", translation: "往这个杯子里倒些茶。", reviewStatus: "checked" },
      { sentence: "Lava la taza después de usarla.", translation: "杯子用完后请洗干净。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Gieß etwas Tee in diese Tasse.", translation: "往这个杯子里倒些茶。", reviewStatus: "checked" },
      { sentence: "Spül die Tasse nach dem Gebrauch.", translation: "杯子用完后请洗干净。", reviewStatus: "checked" }
    ]
  },
  bottle: {
    en: [
      { sentence: "Fill the bottle with water before you leave.", translation: "出门前把瓶子装满水。", reviewStatus: "checked" },
      { sentence: "Keep the bottle in the refrigerator.", translation: "把瓶子放在冰箱里。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "出门前把瓶子装满水。", translation: "Fill the bottle with water before you leave.", reviewStatus: "checked" },
      { sentence: "把瓶子放在冰箱里。", translation: "Keep the bottle in the refrigerator.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "出かける前にボトルに水をいっぱい入れてください。", translation: "出门前把瓶子装满水。", reviewStatus: "checked" },
      { sentence: "ボトルは冷蔵庫に入れておいてください。", translation: "把瓶子放在冰箱里。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "나가기 전에 병에 물을 가득 채워 주세요.", translation: "出门前把瓶子装满水。", reviewStatus: "checked" },
      { sentence: "병을 냉장고에 보관하세요.", translation: "把瓶子放在冰箱里。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Remplis la bouteille d'eau avant de partir.", translation: "出门前把瓶子装满水。", reviewStatus: "checked" },
      { sentence: "Garde la bouteille au réfrigérateur.", translation: "把瓶子放在冰箱里。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Llena la botella de agua antes de salir.", translation: "出门前把瓶子装满水。", reviewStatus: "checked" },
      { sentence: "Guarda la botella en el refrigerador.", translation: "把瓶子放在冰箱里。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Füll die Flasche mit Wasser, bevor du gehst.", translation: "出门前把瓶子装满水。", reviewStatus: "checked" },
      { sentence: "Bewahre die Flasche im Kühlschrank auf.", translation: "把瓶子放在冰箱里。", reviewStatus: "checked" }
    ]
  },
  plate: {
    en: [
      { sentence: "Put the bread on a clean plate.", translation: "把面包放在干净的盘子里。", reviewStatus: "checked" },
      { sentence: "The plate fell, but it did not break.", translation: "盘子掉了下来，但没有摔碎。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "把面包放在干净的盘子里。", translation: "Put the bread on a clean plate.", reviewStatus: "checked" },
      { sentence: "盘子掉了下来，但没有摔碎。", translation: "The plate fell, but it did not break.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "パンをきれいな皿に置いてください。", translation: "把面包放在干净的盘子里。", reviewStatus: "checked" },
      { sentence: "皿は落ちましたが、割れませんでした。", translation: "盘子掉了下来，但没有摔碎。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "빵을 깨끗한 접시에 놓아 주세요.", translation: "把面包放在干净的盘子里。", reviewStatus: "checked" },
      { sentence: "접시가 떨어졌지만 깨지지 않았어요.", translation: "盘子掉了下来，但没有摔碎。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Mets le pain sur une assiette propre.", translation: "把面包放在干净的盘子里。", reviewStatus: "checked" },
      { sentence: "L'assiette est tombée, mais elle ne s'est pas cassée.", translation: "盘子掉了下来，但没有摔碎。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Pon el pan en un plato limpio.", translation: "把面包放在干净的盘子里。", reviewStatus: "checked" },
      { sentence: "El plato se cayó, pero no se rompió.", translation: "盘子掉了下来，但没有摔碎。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Leg das Brot auf einen sauberen Teller.", translation: "把面包放在干净的盘子里。", reviewStatus: "checked" },
      { sentence: "Der Teller ist heruntergefallen, aber nicht zerbrochen.", translation: "盘子掉了下来，但没有摔碎。", reviewStatus: "checked" }
    ]
  },
  bowl: {
    en: [
      { sentence: "She poured the soup into a large bowl.", translation: "她把汤倒进一个大碗里。", reviewStatus: "checked" },
      { sentence: "There is fresh fruit in the blue bowl.", translation: "蓝色碗里有新鲜水果。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "她把汤倒进一个大碗里。", translation: "She poured the soup into a large bowl.", reviewStatus: "checked" },
      { sentence: "蓝色碗里有新鲜水果。", translation: "There is fresh fruit in the blue bowl.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "彼女はスープを大きなボウルに注ぎました。", translation: "她把汤倒进一个大碗里。", reviewStatus: "checked" },
      { sentence: "青いボウルに新鮮な果物が入っています。", translation: "蓝色碗里有新鲜水果。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "그녀는 큰 그릇에 수프를 부었어요.", translation: "她把汤倒进一个大碗里。", reviewStatus: "checked" },
      { sentence: "파란 그릇에 신선한 과일이 있어요.", translation: "蓝色碗里有新鲜水果。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Elle a versé la soupe dans un grand bol.", translation: "她把汤倒进一个大碗里。", reviewStatus: "checked" },
      { sentence: "Il y a des fruits frais dans le bol bleu.", translation: "蓝色碗里有新鲜水果。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Ella vertió la sopa en un cuenco grande.", translation: "她把汤倒进一个大碗里。", reviewStatus: "checked" },
      { sentence: "Hay fruta fresca en el cuenco azul.", translation: "蓝色碗里有新鲜水果。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Sie goss die Suppe in eine große Schüssel.", translation: "她把汤倒进一个大碗里。", reviewStatus: "checked" },
      { sentence: "In der blauen Schüssel liegt frisches Obst.", translation: "蓝色碗里有新鲜水果。", reviewStatus: "checked" }
    ]
  },
  spoon: {
    en: [
      { sentence: "Stir your coffee with this spoon.", translation: "用这把勺子搅拌咖啡。", reviewStatus: "checked" },
      { sentence: "The child dropped his spoon under the table.", translation: "那个孩子把勺子掉到了桌子下面。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "用这把勺子搅拌咖啡。", translation: "Stir your coffee with this spoon.", reviewStatus: "checked" },
      { sentence: "那个孩子把勺子掉到了桌子下面。", translation: "The child dropped his spoon under the table.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "このスプーンでコーヒーを混ぜてください。", translation: "用这把勺子搅拌咖啡。", reviewStatus: "checked" },
      { sentence: "子どもはスプーンをテーブルの下に落としました。", translation: "那个孩子把勺子掉到了桌子下面。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "이 숟가락으로 커피를 저어 주세요.", translation: "用这把勺子搅拌咖啡。", reviewStatus: "checked" },
      { sentence: "아이가 숟가락을 식탁 밑에 떨어뜨렸어요.", translation: "那个孩子把勺子掉到了桌子下面。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Remue ton café avec cette cuillère.", translation: "用这把勺子搅拌咖啡。", reviewStatus: "checked" },
      { sentence: "L'enfant a fait tomber sa cuillère sous la table.", translation: "那个孩子把勺子掉到了桌子下面。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Remueve el café con esta cuchara.", translation: "用这把勺子搅拌咖啡。", reviewStatus: "checked" },
      { sentence: "El niño dejó caer su cuchara debajo de la mesa.", translation: "那个孩子把勺子掉到了桌子下面。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Rühr deinen Kaffee mit diesem Löffel um.", translation: "用这把勺子搅拌咖啡。", reviewStatus: "checked" },
      { sentence: "Das Kind ließ seinen Löffel unter den Tisch fallen.", translation: "那个孩子把勺子掉到了桌子下面。", reviewStatus: "checked" }
    ]
  },
  bed: {
    en: [
      { sentence: "I make my bed every morning.", translation: "我每天早上整理床铺。", reviewStatus: "checked" },
      { sentence: "The cat is sleeping under the bed.", translation: "猫正在床底下睡觉。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "我每天早上整理床铺。", translation: "I make my bed every morning.", reviewStatus: "checked" },
      { sentence: "猫正在床底下睡觉。", translation: "The cat is sleeping under the bed.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "毎朝、ベッドを整えます。", translation: "我每天早上整理床铺。", reviewStatus: "checked" },
      { sentence: "猫がベッドの下で寝ています。", translation: "猫正在床底下睡觉。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "저는 매일 아침 침대를 정리해요.", translation: "我每天早上整理床铺。", reviewStatus: "checked" },
      { sentence: "고양이가 침대 밑에서 자고 있어요.", translation: "猫正在床底下睡觉。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Je fais mon lit chaque matin.", translation: "我每天早上整理床铺。", reviewStatus: "checked" },
      { sentence: "Le chat dort sous le lit.", translation: "猫正在床底下睡觉。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Hago la cama cada mañana.", translation: "我每天早上整理床铺。", reviewStatus: "checked" },
      { sentence: "El gato duerme debajo de la cama.", translation: "猫正在床底下睡觉。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Ich mache jeden Morgen mein Bett.", translation: "我每天早上整理床铺。", reviewStatus: "checked" },
      { sentence: "Die Katze schläft unter dem Bett.", translation: "猫正在床底下睡觉。", reviewStatus: "checked" }
    ]
  },
  chair: {
    en: [
      { sentence: "Please put your coat on the chair.", translation: "请把外套放在椅子上。", reviewStatus: "checked" },
      { sentence: "This chair is comfortable for reading.", translation: "这把椅子坐着阅读很舒服。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "请把外套放在椅子上。", translation: "Please put your coat on the chair.", reviewStatus: "checked" },
      { sentence: "这把椅子坐着阅读很舒服。", translation: "This chair is comfortable for reading.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "コートを椅子の上に置いてください。", translation: "请把外套放在椅子上。", reviewStatus: "checked" },
      { sentence: "この椅子は読書をするのに快適です。", translation: "这把椅子坐着阅读很舒服。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "코트를 의자 위에 놓아 주세요.", translation: "请把外套放在椅子上。", reviewStatus: "checked" },
      { sentence: "이 의자는 책을 읽기에 편해요.", translation: "这把椅子坐着阅读很舒服。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Pose ton manteau sur la chaise, s'il te plaît.", translation: "请把外套放在椅子上。", reviewStatus: "checked" },
      { sentence: "Cette chaise est confortable pour lire.", translation: "这把椅子坐着阅读很舒服。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Pon el abrigo en la silla, por favor.", translation: "请把外套放在椅子上。", reviewStatus: "checked" },
      { sentence: "Esta silla es cómoda para leer.", translation: "这把椅子坐着阅读很舒服。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Leg bitte deinen Mantel auf den Stuhl.", translation: "请把外套放在椅子上。", reviewStatus: "checked" },
      { sentence: "Dieser Stuhl ist zum Lesen bequem.", translation: "这把椅子坐着阅读很舒服。", reviewStatus: "checked" }
    ]
  },
  table: {
    en: [
      { sentence: "Dinner is ready, so please come to the table.", translation: "晚饭好了，请到餐桌边来。", reviewStatus: "checked" },
      { sentence: "I left my keys on the kitchen table.", translation: "我把钥匙落在厨房的桌子上了。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "晚饭好了，请到餐桌边来。", translation: "Dinner is ready, so please come to the table.", reviewStatus: "checked" },
      { sentence: "我把钥匙落在厨房的桌子上了。", translation: "I left my keys on the kitchen table.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "夕食ができたので、テーブルに来てください。", translation: "晚饭好了，请到餐桌边来。", reviewStatus: "checked" },
      { sentence: "台所のテーブルに鍵を置き忘れました。", translation: "我把钥匙落在厨房的桌子上了。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "저녁이 준비됐으니 식탁으로 오세요.", translation: "晚饭好了，请到餐桌边来。", reviewStatus: "checked" },
      { sentence: "부엌 식탁 위에 열쇠를 두고 왔어요.", translation: "我把钥匙落在厨房的桌子上了。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Le dîner est prêt, alors viens à table.", translation: "晚饭好了，请到餐桌边来。", reviewStatus: "checked" },
      { sentence: "J'ai laissé mes clés sur la table de la cuisine.", translation: "我把钥匙落在厨房的桌子上了。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "La cena está lista, así que ven a la mesa.", translation: "晚饭好了，请到餐桌边来。", reviewStatus: "checked" },
      { sentence: "Dejé las llaves en la mesa de la cocina.", translation: "我把钥匙落在厨房的桌子上了。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Das Abendessen ist fertig, also komm bitte an den Tisch.", translation: "晚饭好了，请到餐桌边来。", reviewStatus: "checked" },
      { sentence: "Ich habe meine Schlüssel auf dem Küchentisch liegen lassen.", translation: "我把钥匙落在厨房的桌子上了。", reviewStatus: "checked" }
    ]
  },
  lamp: {
    en: [
      { sentence: "Turn on the lamp; it is getting dark.", translation: "天快黑了，把灯打开吧。", reviewStatus: "checked" },
      { sentence: "The lamp beside my bed gives a warm light.", translation: "床边的灯发出温暖的光。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "天快黑了，把灯打开吧。", translation: "Turn on the lamp; it is getting dark.", reviewStatus: "checked" },
      { sentence: "床边的灯发出温暖的光。", translation: "The lamp beside my bed gives a warm light.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "暗くなってきたので、ランプをつけてください。", translation: "天快黑了，把灯打开吧。", reviewStatus: "checked" },
      { sentence: "ベッドのそばのランプは暖かい光を放ちます。", translation: "床边的灯发出温暖的光。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "어두워지고 있으니 램프를 켜 주세요.", translation: "天快黑了，把灯打开吧。", reviewStatus: "checked" },
      { sentence: "침대 옆 램프에서 따뜻한 빛이 나와요.", translation: "床边的灯发出温暖的光。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "Allume la lampe, il commence à faire sombre.", translation: "天快黑了，把灯打开吧。", reviewStatus: "checked" },
      { sentence: "La lampe près de mon lit donne une lumière chaude.", translation: "床边的灯发出温暖的光。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Enciende la lámpara; está oscureciendo.", translation: "天快黑了，把灯打开吧。", reviewStatus: "checked" },
      { sentence: "La lámpara junto a mi cama da una luz cálida.", translation: "床边的灯发出温暖的光。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Mach die Lampe an, es wird dunkel.", translation: "天快黑了，把灯打开吧。", reviewStatus: "checked" },
      { sentence: "Die Lampe neben meinem Bett gibt ein warmes Licht.", translation: "床边的灯发出温暖的光。", reviewStatus: "checked" }
    ]
  },
  book: {
    en: [
      { sentence: "I borrowed this book from the library.", translation: "这本书是我从图书馆借来的。", reviewStatus: "checked" },
      { sentence: "She reads a book before going to sleep.", translation: "她睡觉前会读一本书。", reviewStatus: "checked" }
    ],
    zh: [
      { sentence: "这本书是我从图书馆借来的。", translation: "I borrowed this book from the library.", reviewStatus: "checked" },
      { sentence: "她睡觉前会读一本书。", translation: "She reads a book before going to sleep.", reviewStatus: "checked" }
    ],
    ja: [
      { sentence: "この本は図書館で借りました。", translation: "这本书是我从图书馆借来的。", reviewStatus: "checked" },
      { sentence: "彼女は寝る前に本を読みます。", translation: "她睡觉前会读一本书。", reviewStatus: "checked" }
    ],
    ko: [
      { sentence: "이 책은 도서관에서 빌렸어요.", translation: "这本书是我从图书馆借来的。", reviewStatus: "checked" },
      { sentence: "그녀는 자기 전에 책을 읽어요.", translation: "她睡觉前会读一本书。", reviewStatus: "checked" }
    ],
    fr: [
      { sentence: "J'ai emprunté ce livre à la bibliothèque.", translation: "这本书是我从图书馆借来的。", reviewStatus: "checked" },
      { sentence: "Elle lit un livre avant de dormir.", translation: "她睡觉前会读一本书。", reviewStatus: "checked" }
    ],
    es: [
      { sentence: "Tomé prestado este libro de la biblioteca.", translation: "这本书是我从图书馆借来的。", reviewStatus: "checked" },
      { sentence: "Ella lee un libro antes de dormir.", translation: "她睡觉前会读一本书。", reviewStatus: "checked" }
    ],
    de: [
      { sentence: "Ich habe dieses Buch aus der Bibliothek ausgeliehen.", translation: "这本书是我从图书馆借来的。", reviewStatus: "checked" },
      { sentence: "Sie liest vor dem Schlafengehen ein Buch.", translation: "她睡觉前会读一本书。", reviewStatus: "checked" }
    ]
  }
};
