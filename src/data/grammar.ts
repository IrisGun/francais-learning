export type Block =
  | { t: 'p'; text: string }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'ex'; items: [fr: string, vi: string][] }
  | { t: 'tip'; text: string }

export interface Quiz {
  q: string
  options: string[]
  answer: number
  why: string
}

export interface Lesson {
  id: string
  title: string
  summary: string
  blocks: Block[]
  quiz: Quiz[]
}

export const lessons: Lesson[] = [
  {
    id: 'articles',
    title: 'Mạo từ & giống của danh từ',
    summary: 'le / la / les, un / une / des',
    blocks: [
      { t: 'p', text: 'Danh từ tiếng Pháp luôn có giống: giống đực (masculin) hoặc giống cái (féminin). Mạo từ đi trước danh từ phải khớp giống và số.' },
      {
        t: 'table',
        head: ['', 'Giống đực', 'Giống cái', 'Số nhiều'],
        rows: [
          ['Xác định (the)', 'le', 'la', 'les'],
          ['Không xác định (a/an)', 'un', 'une', 'des'],
        ],
      },
      { t: 'p', text: "Trước nguyên âm hoặc h câm, le/la rút gọn thành l' (l'ami, l'école)." },
      {
        t: 'ex',
        items: [
          ['le livre / un livre', 'quyển sách (đực)'],
          ['la table / une table', 'cái bàn (cái)'],
          ["l'école", 'trường học'],
          ['les amis / des amis', 'những người bạn'],
        ],
      },
      { t: 'tip', text: 'Học từ mới luôn kèm mạo từ (la maison, le pain). Đừng cố đoán giống, hãy nhớ cả cụm. Một mẹo nhỏ: danh từ tận cùng -tion, -té, -e thường là giống cái; tận cùng -ment, -age thường là giống đực.' },
    ],
    quiz: [
      { q: '___ maison (ngôi nhà)', options: ['le', 'la', 'les'], answer: 1, why: 'maison là giống cái nên dùng la.' },
      { q: '___ livre (một quyển sách)', options: ['un', 'une', 'des'], answer: 0, why: 'livre là giống đực số ít nên dùng un.' },
      { q: '___ amis (những người bạn)', options: ['le', 'la', 'les'], answer: 2, why: 'Số nhiều, dùng les.' },
      { q: "___ école (trường học) — dạng rút gọn", options: ["l'", 'la', 'le'], answer: 0, why: 'Trước nguyên âm, la rút gọn thành l\'.' },
    ],
  },
  {
    id: 'pronoms',
    title: 'Đại từ chủ ngữ',
    summary: 'je, tu, il/elle, nous, vous, ils/elles',
    blocks: [
      { t: 'p', text: 'Trong tiếng Pháp câu luôn cần chủ ngữ. Đại từ chủ ngữ:' },
      {
        t: 'table',
        head: ['Số', 'Đại từ', 'Nghĩa'],
        rows: [
          ['ít', 'je (j\')', 'tôi'],
          ['ít', 'tu', 'bạn (thân mật)'],
          ['ít', 'il / elle / on', 'anh ấy / cô ấy / người ta, chúng ta'],
          ['nhiều', 'nous', 'chúng tôi'],
          ['nhiều', 'vous', 'các bạn; bạn (lịch sự)'],
          ['nhiều', 'ils / elles', 'họ (nam hoặc hỗn hợp / toàn nữ)'],
        ],
      },
      { t: 'tip', text: 'tu dùng với bạn bè, người thân, trẻ em. vous dùng với người lạ, người lớn tuổi, nơi trang trọng. Khi không chắc, cứ dùng vous. Trong văn nói, on thường thay cho nous (On y va ! = Mình đi thôi!).' },
      { t: 'ex', items: [['Je suis Linh.', 'Tôi là Linh.'], ['Tu parles français ?', 'Bạn nói tiếng Pháp à?'], ['Vous êtes professeur ?', 'Ông/bà là giáo viên ạ?']] },
    ],
    quiz: [
      { q: 'Nói chuyện với một ông cụ lạ, bạn dùng…', options: ['tu', 'vous', 'il'], answer: 1, why: 'Người lạ, lớn tuổi: vous.' },
      { q: '"Họ" gồm toàn nữ:', options: ['ils', 'elles', 'elle'], answer: 1, why: 'elles = họ (toàn nữ).' },
      { q: '"Họ" gồm 2 nữ và 1 nam:', options: ['ils', 'elles', 'vous'], answer: 0, why: 'Có một nam trong nhóm thì dùng ils.' },
    ],
  },
  {
    id: 'etre',
    title: 'Động từ être (là, thì)',
    summary: 'je suis, tu es, il est…',
    blocks: [
      { t: 'p', text: 'être là động từ quan trọng nhất, bất quy tắc, phải thuộc lòng. Dùng để nói bạn là ai, ở đâu, thế nào.' },
      {
        t: 'table',
        head: ['Đại từ', 'être', 'Đọc'],
        rows: [
          ['je', 'suis', 'xuy'],
          ['tu', 'es', 'e'],
          ['il / elle / on', 'est', 'e'],
          ['nous', 'sommes', 'xom'],
          ['vous', 'êtes', 'et'],
          ['ils / elles', 'sont', 'xông'],
        ],
      },
      {
        t: 'ex',
        items: [
          ['Je suis vietnamien.', 'Tôi là người Việt (nam).'],
          ['Elle est fatiguée.', 'Cô ấy mệt.'],
          ['Nous sommes à Paris.', 'Chúng tôi ở Paris.'],
          ["C'est un livre.", 'Đây là một quyển sách.'],
        ],
      },
      { t: 'tip', text: "Nghề nghiệp và quốc tịch không cần mạo từ: Je suis étudiant (không nói un étudiant). 'C'est' = ce + est, dùng để chỉ/giới thiệu: C'est Paul. C'est bon." },
    ],
    quiz: [
      { q: 'Nous ___ à Paris.', options: ['êtes', 'sommes', 'sont'], answer: 1, why: 'nous sommes.' },
      { q: 'Ils ___ contents.', options: ['est', 'sont', 'es'], answer: 1, why: 'ils sont.' },
      { q: 'Tu ___ fatigué ?', options: ['es', 'est', 'suis'], answer: 0, why: 'tu es.' },
      { q: 'Je ___ étudiant.', options: ['es', 'suis', 'est'], answer: 1, why: 'je suis.' },
    ],
  },
  {
    id: 'avoir',
    title: 'Động từ avoir (có)',
    summary: "j'ai, tu as, il a…",
    blocks: [
      { t: 'p', text: 'avoir nghĩa là "có", cũng bất quy tắc. Nó còn dùng để nói tuổi (khác tiếng Việt và tiếng Anh).' },
      {
        t: 'table',
        head: ['Đại từ', 'avoir', 'Đọc'],
        rows: [
          ['j\'', 'ai', 'ê'],
          ['tu', 'as', 'a'],
          ['il / elle / on', 'a', 'a'],
          ['nous', 'avons', 'a-vông'],
          ['vous', 'avez', 'a-vê'],
          ['ils / elles', 'ont', 'ông'],
        ],
      },
      {
        t: 'ex',
        items: [
          ["J'ai un frère.", 'Tôi có một anh/em trai.'],
          ["Elle a vingt ans.", 'Cô ấy 20 tuổi (lit.: có 20 năm).'],
          ["J'ai faim.", 'Tôi đói (lit.: có cơn đói).'],
          ["Nous avons une maison.", 'Chúng tôi có một ngôi nhà.'],
        ],
      },
      { t: 'tip', text: "Tuổi, đói (faim), khát (soif), lạnh (froid), nóng (chaud), sợ (peur) đều dùng avoir: J'ai froid = Tôi lạnh." },
    ],
    quiz: [
      { q: 'Il ___ trois enfants.', options: ['a', 'as', 'ai'], answer: 0, why: 'il a.' },
      { q: 'Nous ___ faim.', options: ['avez', 'avons', 'ont'], answer: 1, why: 'nous avons.' },
      { q: 'Nói "Tôi 25 tuổi":', options: ['Je suis 25 ans', "J'ai 25 ans", 'Je a 25 ans'], answer: 1, why: "Tuổi dùng avoir: J'ai 25 ans." },
    ],
  },
  {
    id: 'er',
    title: 'Động từ nhóm -er',
    summary: 'parler, manger, habiter…',
    blocks: [
      { t: 'p', text: 'Hơn 90% động từ tiếng Pháp tận cùng -er và chia theo cùng một quy tắc. Bỏ -er, thêm đuôi tương ứng:' },
      {
        t: 'table',
        head: ['Đại từ', 'Đuôi', 'parler', 'Đọc'],
        rows: [
          ['je', '-e', 'parle', 'par-l'],
          ['tu', '-es', 'parles', 'par-l'],
          ['il / elle / on', '-e', 'parle', 'par-l'],
          ['nous', '-ons', 'parlons', 'par-lông'],
          ['vous', '-ez', 'parlez', 'par-lê'],
          ['ils / elles', '-ent', 'parlent', 'par-l'],
        ],
      },
      { t: 'tip', text: 'Đuôi -e, -es, -ent đều là âm câm. Vì vậy je parle, tu parles, ils parlent nghe y hệt nhau. Chỉ có nous (-ons) và vous (-ez) nghe khác.' },
      { t: 'p', text: "Động từ bắt đầu bằng nguyên âm: je → j' (j'habite, j'aime). Với manger, nous viết mangeons (thêm e để giữ âm 'zh')." },
      {
        t: 'ex',
        items: [
          ['Je parle français.', 'Tôi nói tiếng Pháp.'],
          ["J'habite à Hanoï.", 'Tôi sống ở Hà Nội.'],
          ['Nous mangeons du riz.', 'Chúng tôi ăn cơm.'],
          ['Ils travaillent ici.', 'Họ làm việc ở đây.'],
        ],
      },
    ],
    quiz: [
      { q: 'Tu ___ français ? (parler)', options: ['parle', 'parles', 'parlez'], answer: 1, why: 'tu → -es.' },
      { q: 'Nous ___ à Paris. (habiter)', options: ['habitons', 'habitez', 'habitent'], answer: 0, why: 'nous → -ons.' },
      { q: 'Vous ___ beaucoup. (travailler)', options: ['travaillons', 'travaillez', 'travaille'], answer: 1, why: 'vous → -ez.' },
      { q: "J'___ le café. (aimer)", options: ['aime', 'aimes', 'aiment'], answer: 0, why: "je → -e, rút gọn j'aime." },
    ],
  },
  {
    id: 'negation',
    title: 'Phủ định: ne … pas',
    summary: 'Je ne parle pas…',
    blocks: [
      { t: 'p', text: 'Để phủ định, kẹp động từ giữa ne và pas.' },
      { t: 'ex', items: [['Je parle chinois.', 'Tôi nói tiếng Trung.'], ['Je ne parle pas chinois.', 'Tôi không nói tiếng Trung.'], ['Il est fatigué → Il n\'est pas fatigué.', 'Anh ấy không mệt.']] },
      { t: 'p', text: "Trước nguyên âm, ne → n' (n'est, n'ai). Trong văn nói đời thường, người Pháp thường bỏ ne: Je sais pas." },
      { t: 'tip', text: "Sau phủ định, un/une/des/du đổi thành de (d'): J'ai un frère → Je n'ai pas de frère. Ngoại lệ là động từ être: Ce n'est pas un livre." },
    ],
    quiz: [
      { q: 'Je ___ comprends ___.', options: ['ne / pas', 'pas / ne', 'ne / non'], answer: 0, why: 'ne + động từ + pas.' },
      { q: "Elle ___ est ___ ici. (không ở đây)", options: ["ne / pas", "n' / pas", "n' / ne"], answer: 1, why: "Trước nguyên âm: n'est pas." },
      { q: "J'ai un chien → phủ định:", options: ["Je n'ai pas un chien", "Je n'ai pas de chien", "Je ne ai pas de chien"], answer: 1, why: 'Sau phủ định, un → de.' },
    ],
  },
  {
    id: 'questions',
    title: 'Đặt câu hỏi',
    summary: 'est-ce que, đảo ngữ, từ để hỏi',
    blocks: [
      { t: 'p', text: 'Có 3 cách hỏi câu Có/Không, từ dễ đến trang trọng:' },
      {
        t: 'table',
        head: ['Cách', 'Ví dụ'],
        rows: [
          ['1. Lên giọng cuối câu', 'Tu parles français ?'],
          ['2. Est-ce que + câu', 'Est-ce que tu parles français ?'],
          ['3. Đảo ngữ (trang trọng)', 'Parles-tu français ?'],
        ],
      },
      { t: 'p', text: 'Từ để hỏi: qui (ai), que/quoi (gì), où (ở đâu), quand (khi nào), pourquoi (tại sao), comment (thế nào), combien (bao nhiêu). Đặt trước est-ce que, hoặc cuối câu trong văn nói.' },
      {
        t: 'ex',
        items: [
          ['Où est-ce que tu habites ?', 'Bạn sống ở đâu?'],
          ['Tu habites où ?', 'Bạn sống ở đâu? (văn nói)'],
          ['Comment tu t\'appelles ?', 'Bạn tên gì?'],
          ['Pourquoi tu apprends le français ?', 'Sao bạn học tiếng Pháp?'],
        ],
      },
      { t: 'tip', text: "Với người mới, cách 1 và 2 là đủ. Trả lời: Oui / Non / Si (si dùng khi phản bác một câu hỏi phủ định: Tu ne viens pas ? — Si, je viens.)" },
    ],
    quiz: [
      { q: 'Cách hỏi "Bạn sống ở đâu?" với est-ce que:', options: ['Où est-ce que tu habites ?', 'Est-ce que où tu habites ?', 'Tu est-ce que habites où ?'], answer: 0, why: 'Từ để hỏi đứng trước est-ce que.' },
      { q: '"Tại sao" là…', options: ['pourquoi', 'comment', 'quand'], answer: 0, why: 'pourquoi = tại sao.' },
      { q: 'Cách hỏi nào KHÔNG đúng?', options: ['Tu aimes le café ?', 'Est-ce que tu aimes le café ?', 'Est-ce que aimes-tu le café ?'], answer: 2, why: 'Không kết hợp cả est-ce que và đảo ngữ.' },
    ],
  },
  {
    id: 'adjectifs',
    title: 'Tính từ: hòa hợp & vị trí',
    summary: 'grand / grande, petit / petits',
    blocks: [
      { t: 'p', text: 'Tính từ phải khớp giống và số với danh từ. Thông thường: giống cái thêm -e, số nhiều thêm -s.' },
      {
        t: 'table',
        head: ['', 'Đực', 'Cái'],
        rows: [
          ['Số ít', 'petit', 'petite'],
          ['Số nhiều', 'petits', 'petites'],
        ],
      },
      { t: 'p', text: 'Nếu tính từ đã tận cùng -e thì giống cái không đổi: rouge, jaune, facile.' },
      { t: 'p', text: 'Vị trí: hầu hết tính từ đứng SAU danh từ (une voiture rouge). Một nhóm nhỏ đứng TRƯỚC: grand, petit, bon, mauvais, beau, nouveau, jeune, vieux (nhớ nhóm BAGS: Beauty, Age, Goodness, Size).' },
      {
        t: 'ex',
        items: [
          ['un livre intéressant', 'một quyển sách thú vị'],
          ['une petite maison', 'một ngôi nhà nhỏ'],
          ['des fleurs rouges', 'những bông hoa đỏ'],
          ['Elle est contente.', 'Cô ấy vui.'],
        ],
      },
    ],
    quiz: [
      { q: 'Elle est ___ . (content)', options: ['content', 'contente', 'contents'], answer: 1, why: 'Chủ ngữ giống cái: thêm -e.' },
      { q: 'Des voitures ___ . (rouge)', options: ['rouge', 'rouges', 'rougent'], answer: 1, why: 'Số nhiều: thêm -s (rouge đã có -e nên giống cái không đổi).' },
      { q: 'Cách nói đúng: "một ngôi nhà lớn"', options: ['une maison grande', 'une grande maison', 'un grand maison'], answer: 1, why: 'grand đứng trước danh từ và maison giống cái.' },
    ],
  },
  {
    id: 'pluriel',
    title: 'Danh từ số nhiều',
    summary: 'thêm -s, -x, và âm câm',
    blocks: [
      { t: 'p', text: 'Thông thường thêm -s: livre → livres. Nhưng -s cuối là âm câm, nên thường chỉ có mạo từ cho bạn biết số ít hay nhiều: le livre / les livres (nghe khác nhau ở le / les).' },
      {
        t: 'table',
        head: ['Quy tắc', 'Số ít', 'Số nhiều'],
        rows: [
          ['thêm -s', 'un livre', 'des livres'],
          ['-eau, -eu → thêm -x', 'un gâteau', 'des gâteaux'],
          ['-al → -aux', 'un journal', 'des journaux'],
          ['tận cùng -s, -x, -z: không đổi', 'un fils', 'des fils'],
        ],
      },
      { t: 'tip', text: "Liaison: khi les/des đứng trước nguyên âm, -s được đọc thành 'z': les amis → lê-za-mi; des enfants → đê-zãng-fãng." },
    ],
    quiz: [
      { q: 'Số nhiều của "un gâteau":', options: ['des gâteaus', 'des gâteaux', 'des gâteau'], answer: 1, why: '-eau → -eaux.' },
      { q: 'Số nhiều của "le fils" (con trai):', options: ['les fils', 'les filx', 'les filses'], answer: 0, why: 'Tận cùng -s nên không đổi.' },
      { q: 'Nghe "lê-za-mi" là…', options: ['le ami', 'les amis', 'la ami'], answer: 1, why: 'Liaison: les + amis → z.' },
    ],
  },
  {
    id: 'possessifs',
    title: 'Tính từ sở hữu',
    summary: 'mon, ma, mes, ton, ta, tes…',
    blocks: [
      { t: 'p', text: 'Tính từ sở hữu khớp với vật được sở hữu (không phải với người sở hữu).' },
      {
        t: 'table',
        head: ['Của ai', 'Đực', 'Cái', 'Nhiều'],
        rows: [
          ['tôi', 'mon', 'ma', 'mes'],
          ['bạn (tu)', 'ton', 'ta', 'tes'],
          ['anh/cô ấy', 'son', 'sa', 'ses'],
          ['chúng tôi', 'notre', 'notre', 'nos'],
          ['các bạn / ông bà', 'votre', 'votre', 'vos'],
          ['họ', 'leur', 'leur', 'leurs'],
        ],
      },
      { t: 'tip', text: "Trước danh từ giống cái bắt đầu bằng nguyên âm, dùng mon/ton/son: mon amie, mon école (để dễ đọc)." },
      { t: 'ex', items: [['mon père, ma mère, mes parents', 'bố tôi, mẹ tôi, bố mẹ tôi'], ['Son frère est grand.', 'Anh/em trai của anh/cô ấy cao.'], ['Notre maison est petite.', 'Nhà chúng tôi nhỏ.']] },
    ],
    quiz: [
      { q: '___ mère (mẹ tôi)', options: ['mon', 'ma', 'mes'], answer: 1, why: 'mère giống cái nên dùng ma.' },
      { q: '___ amie (bạn gái của tôi)', options: ['ma', 'mon', 'mes'], answer: 1, why: 'Trước nguyên âm dùng mon.' },
      { q: '___ livres (sách của bạn, tu)', options: ['ton', 'ta', 'tes'], answer: 2, why: 'Số nhiều: tes.' },
    ],
  },
  {
    id: 'aller-contractions',
    title: 'Aller, à / de và rút gọn',
    summary: 'au, aux, du, des; aller + nơi chốn',
    blocks: [
      { t: 'p', text: 'aller (đi) bất quy tắc: je vais, tu vas, il va, nous allons, vous allez, ils vont.' },
      { t: 'p', text: 'à (đến/ở) và de (của/từ) kết hợp với le, les sẽ rút gọn:' },
      {
        t: 'table',
        head: ['', 'le', 'la', "l'", 'les'],
        rows: [
          ['à +', 'au', 'à la', "à l'", 'aux'],
          ['de +', 'du', 'de la', "de l'", 'des'],
        ],
      },
      {
        t: 'ex',
        items: [
          ['Je vais au restaurant.', 'Tôi đi nhà hàng.'],
          ['Il va à la maison.', 'Anh ấy về nhà.'],
          ['Je mange du pain.', 'Tôi ăn (một ít) bánh mì.'],
          ['Elle vient de la gare.', 'Cô ấy từ nhà ga đến.'],
        ],
      },
      { t: 'tip', text: "Với thành phố dùng à (à Paris); với nước giống cái dùng en (en France); nước giống đực dùng au (au Vietnam). Du/de la/des cũng chỉ 'một ít' (mạo từ bộ phận): du café, de la soupe." },
    ],
    quiz: [
      { q: 'Je vais ___ restaurant.', options: ['à le', 'au', 'aux'], answer: 1, why: 'à + le = au.' },
      { q: 'Il habite ___ France.', options: ['à', 'au', 'en'], answer: 2, why: 'Nước giống cái: en.' },
      { q: 'Je mange ___ pain.', options: ['de le', 'du', 'des'], answer: 1, why: 'de + le = du.' },
      { q: 'Nous ___ à Paris. (aller)', options: ['allons', 'allez', 'vont'], answer: 0, why: 'nous allons.' },
    ],
  },
]
