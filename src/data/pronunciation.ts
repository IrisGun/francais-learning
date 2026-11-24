export interface T {
  vi: string
  en: string
}

export interface Sound {
  fr: string // example word (spoken)
  ipa: string
  say: string
  note?: T
}

export interface Section {
  id: string
  title: T
  intro: T
  sounds?: Sound[]
  points?: T[]
}

export const pronunciation: Section[] = [
  {
    id: 'how-to-read',
    title: { vi: 'Cách đọc ký hiệu trong app', en: 'How to read the notation in this app' },
    intro: {
      vi: 'Mỗi từ có 3 dòng: chữ Pháp, IPA (quốc tế, giữa hai dấu /…/) và "phiên âm" bằng chữ Việt. Phiên âm Việt chỉ gần đúng, hãy dùng nút 🔊 để nghe giọng thật rồi bắt chước.',
      en: 'Each word has 3 lines: the French spelling, IPA (international, between /…/) and a Vietnamese-style respelling. The respelling is only approximate, so tap 🔊 to hear the real voice and imitate it.',
    },
    points: [
      { vi: 'Dấu gạch nối "-" tách các âm tiết: bon-jour → bông-zhua.', en: 'A hyphen "-" separates syllables: bon-jour → bông-zhua.' },
      { vi: 'Nguyên âm có dấu ngã/hỏi như ã, ẳng, ỡ, ông là nguyên âm mũi: đọc qua mũi, KHÔNG bật âm n/ng cuối.', en: 'Vowels marked ã, ẳng, ỡ, ông are nasal vowels: air goes through the nose, and the final n/ng is NOT pronounced.' },
      { vi: '"zh" là âm /ʒ/ (như "s" trong tiếng Anh vision; gần "gi" giọng Nam). "sh" là /ʃ/ (như "ch" Việt nhưng tròn môi hơn).', en: '"zh" is /ʒ/ (like the s in "vision"). "sh" is /ʃ/ (like "sh" in "ship").' },
      { vi: 'Chữ "r" đứng riêng (ví dụ a-voa-r) là âm R họng, xát nhẹ ở cổ họng như khi súc miệng, không rung lưỡi.', en: 'A standalone "r" (e.g. a-voa-r) is the French throat R: a light friction at the back of the throat, not a rolled tongue R.' },
      { vi: '"ơ" cuối từ như le, de, je là âm /ə/ rất ngắn, môi tròn nhẹ.', en: 'A final "ơ" as in le, de, je is a very short /ə/ with slightly rounded lips.' },
    ],
  },
  {
    id: 'rules',
    title: { vi: 'Quy tắc chung quan trọng nhất', en: 'The most important general rules' },
    intro: {
      vi: 'Nắm 4 quy tắc này là đọc được phần lớn từ tiếng Pháp.',
      en: 'These 4 rules let you read most French words.',
    },
    points: [
      { vi: 'Phụ âm cuối thường câm: petit (pơ-ti, không đọc t), grand (grãng), vous (vu), trois (troa). Ngoại lệ hay gặp là c, r, f, l ở cuối (nhớ "CaRéFuL"): avec, bonjour, neuf, hôtel.', en: 'Final consonants are usually silent: petit (pơ-ti, no t), grand (grãng), vous (vu), trois (troa). Common exceptions are final c, r, f, l ("CaReFuL"): avec, bonjour, neuf, hôtel.' },
      { vi: 'Nhấn giọng ở âm tiết CUỐI của từ/cụm từ, nhẹ và đều, không nhấn mạnh như tiếng Anh.', en: 'Stress falls on the LAST syllable of a word or phrase, lightly and evenly, not forcefully like English.' },
      { vi: 'Liaison (nối âm): phụ âm câm cuối từ được đọc lại khi từ sau bắt đầu bằng nguyên âm: vous avez → vu-za-vê, les amis → lê-za-mi. s/x đọc là "z", d đọc là "t".', en: 'Liaison: a silent final consonant is pronounced when the next word starts with a vowel: vous avez → vu-za-vê, les amis → lê-za-mi. s/x sound like "z", d sounds like "t".' },
      { vi: 'Chữ h luôn câm: homme (om), hôtel (ô-tel). Với "h muet" có liaison/rút gọn (l\'homme), với "h aspiré" thì không (le héros).', en: 'The letter h is always silent: homme (om), hôtel (ô-tel). With "h muet" you get liaison/elision (l\'homme); with "h aspiré" you do not (le héros).' },
    ],
  },
  {
    id: 'vowels',
    title: { vi: 'Nguyên âm', en: 'Vowels' },
    intro: {
      vi: 'Bấm 🔊 để nghe từng ví dụ. Đây là những âm không có sẵn trong tiếng Việt, hãy luyện kỹ.',
      en: 'Tap 🔊 to hear each example. These are the sounds that do not exist in Vietnamese, so practise them well.',
    },
    sounds: [
      { fr: 'tu', ipa: '/ty/', say: 'tuy', note: { vi: 'u = "i" nhưng tròn môi (như phát âm "uy" rồi bỏ y)', en: 'u = say "ee" with rounded lips' } },
      { fr: 'rue', ipa: '/ʁy/', say: 'ruy', note: { vi: 'u ngắn, tròn môi', en: 'short rounded u' } },
      { fr: 'vous', ipa: '/vu/', say: 'vu', note: { vi: 'ou = "u" tiếng Việt', en: 'ou = "oo" in "food"' } },
      { fr: 'deux', ipa: '/dø/', say: 'đơ', note: { vi: 'eu/œu = "ơ" tròn môi', en: 'eu = rounded "uh/er"' } },
      { fr: 'soeur', ipa: '/sœʁ/', say: 'xơ-r', note: { vi: 'eu trước r = "ơ" mở hơn', en: 'eu before r: more open' } },
      { fr: 'le', ipa: '/lə/', say: 'lơ', note: { vi: 'e không dấu cuối từ: "ơ" rất ngắn', en: 'unmarked e at end: very short "uh"' } },
      { fr: 'été', ipa: '/e.te/', say: 'ê-tê', note: { vi: 'é = "ê" tiếng Việt', en: 'é = "ay" without the glide' } },
      { fr: 'mère', ipa: '/mɛʁ/', say: 'me-r', note: { vi: 'è / ê = "e" mở như "me" Việt', en: 'è / ê = open "e" as in "bed"' } },
      { fr: 'oiseau', ipa: '/wa.zo/', say: 'oa-zô', note: { vi: 'oi = "oa"; eau/au = "ô"', en: 'oi = "wa"; eau/au = "o"' } },
      { fr: 'maison', ipa: '/mɛ.zɔ̃/', say: 'me-zông', note: { vi: 'ai = "e"; s giữa hai nguyên âm = "z"', en: 'ai = "e"; s between vowels = "z"' } },
      { fr: 'ville', ipa: '/vil/', say: 'vil', note: { vi: 'i = "i" Việt (nhưng ngắn và căng)', en: 'i = short, tense "ee"' } },
    ],
  },
  {
    id: 'nasals',
    title: { vi: 'Nguyên âm mũi', en: 'Nasal vowels' },
    intro: {
      vi: 'Khi nguyên âm đi với n hoặc m cuối từ (hoặc trước phụ âm), đó là nguyên âm mũi: bạn KHÔNG phát âm n/m, chỉ cho hơi thoát qua mũi. Có 3 âm chính.',
      en: 'When a vowel is followed by n or m at the end of a word (or before a consonant), it is nasal: you do NOT pronounce the n/m, just let the air flow through your nose. There are 3 main sounds.',
    },
    sounds: [
      { fr: 'bon', ipa: '/bɔ̃/', say: 'bông', note: { vi: 'on / om → /ɔ̃/ như "ông" nhưng mũi', en: 'on / om → /ɔ̃/, like nasal "awng"' } },
      { fr: 'enfant', ipa: '/ɑ̃.fɑ̃/', say: 'ãng-phãng', note: { vi: 'an / am / en / em → /ɑ̃/ như "ang" mũi', en: 'an / am / en / em → /ɑ̃/' } },
      { fr: 'pain', ipa: '/pɛ̃/', say: 'pẳng', note: { vi: 'in / ain / ein → /ɛ̃/ như "ăng" mũi', en: 'in / ain / ein → /ɛ̃/' } },
      { fr: 'un', ipa: '/œ̃/', say: 'ỡ', note: { vi: 'un / um → /œ̃/ (nhiều người Pháp đọc giống in)', en: 'un / um → /œ̃/ (many speakers say it like in)' } },
      { fr: 'bonne', ipa: '/bɔn/', say: 'bon', note: { vi: 'Nếu n đôi hoặc có nguyên âm theo sau thì KHÔNG mũi: bon (mũi) vs bonne (n rõ)', en: 'Double n or a following vowel means NOT nasal: bon (nasal) vs bonne (clear n)' } },
    ],
  },
  {
    id: 'consonants',
    title: { vi: 'Phụ âm cần chú ý', en: 'Consonants to watch' },
    intro: {
      vi: 'Phần lớn phụ âm giống tiếng Việt. Những điểm khác biệt:',
      en: 'Most consonants are similar to Vietnamese. The differences:',
    },
    sounds: [
      { fr: 'rouge', ipa: '/ʁuʒ/', say: 'ru-zh', note: { vi: 'r = R họng. j và g trước e/i = "zh"', en: 'r = throat R. j and g before e/i = "zh"' } },
      { fr: 'chat', ipa: '/ʃa/', say: 'sha', note: { vi: 'ch = "sh" (như "x" nhưng lưỡi cong, môi tròn)', en: 'ch = "sh"' } },
      { fr: 'garçon', ipa: '/gaʁ.sɔ̃/', say: 'gar-xông', note: { vi: 'ç = "x/s" (cedille). c trước e/i cũng là "s"', en: 'ç = "s" (cedilla). c before e/i is also "s"' } },
      { fr: 'cadeau', ipa: '/ka.do/', say: 'ca-đô', note: { vi: 'c trước a/o/u = "c/k"', en: 'c before a/o/u = "k"' } },
      { fr: 'gare', ipa: '/gaʁ/', say: 'ga-r', note: { vi: 'g trước a/o/u = "g" cứng', en: 'g before a/o/u = hard "g"' } },
      { fr: 'montagne', ipa: '/mɔ̃.taɲ/', say: 'mông-ta-nh', note: { vi: 'gn = "nh" Việt', en: 'gn = "ny" as in "canyon"' } },
      { fr: 'qui', ipa: '/ki/', say: 'ki', note: { vi: 'qu = "k"', en: 'qu = "k"' } },
      { fr: 'photo', ipa: '/fo.to/', say: 'phô-tô', note: { vi: 'ph = "ph" Việt (f)', en: 'ph = "f"' } },
      { fr: 'hôtel', ipa: '/o.tɛl/', say: 'ô-ten', note: { vi: 'h câm', en: 'h is silent' } },
      { fr: 'bouillon', ipa: '/bu.jɔ̃/', say: 'bu-yông', note: { vi: 'ill thường = "y" (ville, mille là ngoại lệ)', en: 'ill usually = "y"' } },
    ],
  },
  {
    id: 'accents',
    title: { vi: 'Dấu trong tiếng Pháp', en: 'French accents' },
    intro: {
      vi: 'Dấu chủ yếu cho biết cách đọc, và ít khi đổi nghĩa.',
      en: 'Accents mostly tell you how to pronounce a letter, and rarely change meaning.',
    },
    points: [
      { vi: 'é (accent aigu): "ê" — été, café.', en: 'é (acute): "ay" — été, café.' },
      { vi: 'è, ê (grave, circonflexe): "e" mở — mère, fête.', en: 'è, ê (grave, circumflex): open "e" — mère, fête.' },
      { vi: 'à, ù: không đổi âm, chỉ phân biệt từ — a (có) / à (tại), ou (hoặc) / où (ở đâu).', en: 'à, ù: no sound change, just tell words apart — a (has) / à (to), ou (or) / où (where).' },
      { vi: 'ç (cédille): c đọc "s" trước a/o/u — garçon, ça.', en: 'ç (cedilla): c sounds "s" before a/o/u — garçon, ça.' },
      { vi: 'ë, ï (tréma): đọc riêng từng nguyên âm — Noël, naïf.', en: 'ë, ï (diaeresis): pronounce vowels separately — Noël, naïf.' },
    ],
  },
]
