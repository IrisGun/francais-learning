import type { Lesson } from './grammar'

export const lessonsEn: Lesson[] = [
  {
    id: 'articles',
    title: 'Articles & noun gender',
    summary: 'le / la / les, un / une / des',
    blocks: [
      { t: 'p', text: 'French nouns always have a gender: masculine or feminine. The article before a noun must match its gender and number.' },
      {
        t: 'table',
        head: ['', 'Masculine', 'Feminine', 'Plural'],
        rows: [
          ['Definite (the)', 'le', 'la', 'les'],
          ['Indefinite (a/an)', 'un', 'une', 'des'],
        ],
      },
      { t: 'p', text: "Before a vowel or silent h, le/la become l' (l'ami, l'école)." },
      {
        t: 'ex',
        items: [
          ['le livre / un livre', 'the book / a book (masc.)'],
          ['la table / une table', 'the table / a table (fem.)'],
          ["l'école", 'the school'],
          ['les amis / des amis', 'the friends / some friends'],
        ],
      },
      { t: 'tip', text: 'Always learn a new noun with its article (la maison, le pain). Do not try to guess the gender. A small hint: nouns ending in -tion, -té, -e are often feminine; -ment, -age are often masculine.' },
    ],
    quiz: [
      { q: '___ maison (the house)', options: ['le', 'la', 'les'], answer: 1, why: 'maison is feminine, so la.' },
      { q: '___ livre (a book)', options: ['un', 'une', 'des'], answer: 0, why: 'livre is masculine singular, so un.' },
      { q: '___ amis (the friends)', options: ['le', 'la', 'les'], answer: 2, why: 'Plural, so les.' },
      { q: "___ école (the school), contracted form", options: ["l'", 'la', 'le'], answer: 0, why: "Before a vowel, la becomes l'." },
    ],
  },
  {
    id: 'pronoms',
    title: 'Subject pronouns',
    summary: 'je, tu, il/elle, nous, vous, ils/elles',
    blocks: [
      { t: 'p', text: 'A French sentence always needs a subject. The subject pronouns:' },
      {
        t: 'table',
        head: ['Number', 'Pronoun', 'Meaning'],
        rows: [
          ['sing.', "je (j')", 'I'],
          ['sing.', 'tu', 'you (informal)'],
          ['sing.', 'il / elle / on', 'he / she / one, we'],
          ['plur.', 'nous', 'we'],
          ['plur.', 'vous', 'you (plural, or formal)'],
          ['plur.', 'ils / elles', 'they (masc. or mixed / all female)'],
        ],
      },
      { t: 'tip', text: 'Use tu with friends, family and children. Use vous with strangers, older people and in formal settings. When unsure, use vous. In speech, on often replaces nous (On y va ! = Let\'s go!).' },
      { t: 'ex', items: [['Je suis Linh.', "I'm Linh."], ['Tu parles français ?', 'Do you speak French?'], ['Vous êtes professeur ?', 'Are you a teacher, sir/madam?']] },
    ],
    quiz: [
      { q: 'Talking to an elderly stranger, you use…', options: ['tu', 'vous', 'il'], answer: 1, why: 'Stranger, older person: vous.' },
      { q: '"They" (all women):', options: ['ils', 'elles', 'elle'], answer: 1, why: 'elles = they (all female).' },
      { q: '"They" (2 women and 1 man):', options: ['ils', 'elles', 'vous'], answer: 0, why: 'One man in the group makes it ils.' },
    ],
  },
  {
    id: 'etre',
    title: 'The verb être (to be)',
    summary: 'je suis, tu es, il est…',
    blocks: [
      { t: 'p', text: 'être is the most important verb. It is irregular, so learn it by heart. Use it to say who you are, where you are and how you are.' },
      {
        t: 'table',
        head: ['Pronoun', 'être', 'Sound'],
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
          ['Je suis vietnamien.', "I'm Vietnamese (male)."],
          ['Elle est fatiguée.', "She's tired."],
          ['Nous sommes à Paris.', 'We are in Paris.'],
          ["C'est un livre.", "It's a book."],
        ],
      },
      { t: 'tip', text: "Jobs and nationalities take no article: Je suis étudiant (not un étudiant). C'est = ce + est, used to point out or introduce: C'est Paul. C'est bon." },
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
    title: 'The verb avoir (to have)',
    summary: "j'ai, tu as, il a…",
    blocks: [
      { t: 'p', text: 'avoir means "to have" and is also irregular. It is also used to give your age (unlike English).' },
      {
        t: 'table',
        head: ['Pronoun', 'avoir', 'Sound'],
        rows: [
          ["j'", 'ai', 'ê'],
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
          ["J'ai un frère.", 'I have a brother.'],
          ['Elle a vingt ans.', 'She is 20 (lit.: has 20 years).'],
          ["J'ai faim.", "I'm hungry (lit.: have hunger)."],
          ['Nous avons une maison.', 'We have a house.'],
        ],
      },
      { t: 'tip', text: "Age, hunger (faim), thirst (soif), cold (froid), heat (chaud), fear (peur) all use avoir: J'ai froid = I'm cold." },
    ],
    quiz: [
      { q: 'Il ___ trois enfants.', options: ['a', 'as', 'ai'], answer: 0, why: 'il a.' },
      { q: 'Nous ___ faim.', options: ['avez', 'avons', 'ont'], answer: 1, why: 'nous avons.' },
      { q: 'How to say "I am 25":', options: ['Je suis 25 ans', "J'ai 25 ans", 'Je a 25 ans'], answer: 1, why: "Age uses avoir: J'ai 25 ans." },
    ],
  },
  {
    id: 'er',
    title: '-er verbs',
    summary: 'parler, manger, habiter…',
    blocks: [
      { t: 'p', text: 'Over 90% of French verbs end in -er and follow one pattern. Drop -er and add the ending:' },
      {
        t: 'table',
        head: ['Pronoun', 'Ending', 'parler', 'Sound'],
        rows: [
          ['je', '-e', 'parle', 'par-l'],
          ['tu', '-es', 'parles', 'par-l'],
          ['il / elle / on', '-e', 'parle', 'par-l'],
          ['nous', '-ons', 'parlons', 'par-lông'],
          ['vous', '-ez', 'parlez', 'par-lê'],
          ['ils / elles', '-ent', 'parlent', 'par-l'],
        ],
      },
      { t: 'tip', text: 'The endings -e, -es, -ent are silent. So je parle, tu parles and ils parlent sound identical. Only nous (-ons) and vous (-ez) sound different.' },
      { t: 'p', text: "Verbs starting with a vowel: je → j' (j'habite, j'aime). For manger, nous is written mangeons (an extra e keeps the 'zh' sound)." },
      {
        t: 'ex',
        items: [
          ['Je parle français.', 'I speak French.'],
          ["J'habite à Hanoï.", 'I live in Hanoi.'],
          ['Nous mangeons du riz.', 'We eat rice.'],
          ['Ils travaillent ici.', 'They work here.'],
        ],
      },
    ],
    quiz: [
      { q: 'Tu ___ français ? (parler)', options: ['parle', 'parles', 'parlez'], answer: 1, why: 'tu → -es.' },
      { q: 'Nous ___ à Paris. (habiter)', options: ['habitons', 'habitez', 'habitent'], answer: 0, why: 'nous → -ons.' },
      { q: 'Vous ___ beaucoup. (travailler)', options: ['travaillons', 'travaillez', 'travaille'], answer: 1, why: 'vous → -ez.' },
      { q: "J'___ le café. (aimer)", options: ['aime', 'aimes', 'aiment'], answer: 0, why: "je → -e, contracted j'aime." },
    ],
  },
  {
    id: 'negation',
    title: 'Negation: ne … pas',
    summary: 'Je ne parle pas…',
    blocks: [
      { t: 'p', text: 'To negate, wrap the verb in ne and pas.' },
      { t: 'ex', items: [['Je parle chinois.', 'I speak Chinese.'], ['Je ne parle pas chinois.', "I don't speak Chinese."], ["Il est fatigué → Il n'est pas fatigué.", "He isn't tired."]] },
      { t: 'p', text: "Before a vowel, ne → n' (n'est, n'ai). In casual speech the French often drop ne: Je sais pas." },
      { t: 'tip', text: "After a negation, un/une/des/du become de (d'): J'ai un frère → Je n'ai pas de frère. Exception: the verb être: Ce n'est pas un livre." },
    ],
    quiz: [
      { q: 'Je ___ comprends ___.', options: ['ne / pas', 'pas / ne', 'ne / non'], answer: 0, why: 'ne + verb + pas.' },
      { q: "Elle ___ est ___ ici. (is not here)", options: ['ne / pas', "n' / pas", "n' / ne"], answer: 1, why: "Before a vowel: n'est pas." },
      { q: "J'ai un chien → negative:", options: ["Je n'ai pas un chien", "Je n'ai pas de chien", 'Je ne ai pas de chien'], answer: 1, why: 'After a negation, un → de.' },
    ],
  },
  {
    id: 'questions',
    title: 'Asking questions',
    summary: 'est-ce que, inversion, question words',
    blocks: [
      { t: 'p', text: 'There are 3 ways to ask a yes/no question, from easiest to most formal:' },
      {
        t: 'table',
        head: ['Way', 'Example'],
        rows: [
          ['1. Rising intonation', 'Tu parles français ?'],
          ['2. Est-ce que + sentence', 'Est-ce que tu parles français ?'],
          ['3. Inversion (formal)', 'Parles-tu français ?'],
        ],
      },
      { t: 'p', text: 'Question words: qui (who), que/quoi (what), où (where), quand (when), pourquoi (why), comment (how), combien (how much). Put them before est-ce que, or at the end in casual speech.' },
      {
        t: 'ex',
        items: [
          ['Où est-ce que tu habites ?', 'Where do you live?'],
          ['Tu habites où ?', 'Where do you live? (spoken)'],
          ["Comment tu t'appelles ?", "What's your name?"],
          ['Pourquoi tu apprends le français ?', 'Why are you learning French?'],
        ],
      },
      { t: 'tip', text: 'For beginners, ways 1 and 2 are enough. Answers: Oui / Non / Si (si contradicts a negative question: Tu ne viens pas ? — Si, je viens.)' },
    ],
    quiz: [
      { q: 'Asking "Where do you live?" with est-ce que:', options: ['Où est-ce que tu habites ?', 'Est-ce que où tu habites ?', 'Tu est-ce que habites où ?'], answer: 0, why: 'The question word goes before est-ce que.' },
      { q: '"Why" is…', options: ['pourquoi', 'comment', 'quand'], answer: 0, why: 'pourquoi = why.' },
      { q: 'Which is NOT correct?', options: ['Tu aimes le café ?', 'Est-ce que tu aimes le café ?', 'Est-ce que aimes-tu le café ?'], answer: 2, why: 'Do not combine est-ce que with inversion.' },
    ],
  },
  {
    id: 'adjectifs',
    title: 'Adjectives: agreement & position',
    summary: 'grand / grande, petit / petits',
    blocks: [
      { t: 'p', text: 'Adjectives agree with the noun in gender and number. Usually: add -e for feminine, -s for plural.' },
      {
        t: 'table',
        head: ['', 'Masc.', 'Fem.'],
        rows: [
          ['Singular', 'petit', 'petite'],
          ['Plural', 'petits', 'petites'],
        ],
      },
      { t: 'p', text: 'If the adjective already ends in -e, the feminine does not change: rouge, jaune, facile.' },
      { t: 'p', text: 'Position: most adjectives go AFTER the noun (une voiture rouge). A small group goes BEFORE: grand, petit, bon, mauvais, beau, nouveau, jeune, vieux (remember BAGS: Beauty, Age, Goodness, Size).' },
      {
        t: 'ex',
        items: [
          ['un livre intéressant', 'an interesting book'],
          ['une petite maison', 'a small house'],
          ['des fleurs rouges', 'red flowers'],
          ['Elle est contente.', "She's happy."],
        ],
      },
    ],
    quiz: [
      { q: 'Elle est ___ . (content)', options: ['content', 'contente', 'contents'], answer: 1, why: 'Feminine subject: add -e.' },
      { q: 'Des voitures ___ . (rouge)', options: ['rouge', 'rouges', 'rougent'], answer: 1, why: 'Plural: add -s (rouge already ends in -e).' },
      { q: 'Correct way to say "a big house":', options: ['une maison grande', 'une grande maison', 'un grand maison'], answer: 1, why: 'grand goes before the noun and maison is feminine.' },
    ],
  },
  {
    id: 'pluriel',
    title: 'Plural nouns',
    summary: 'add -s, -x, and silent endings',
    blocks: [
      { t: 'p', text: 'Usually add -s: livre → livres. But the final -s is silent, so usually only the article tells you singular from plural: le livre / les livres (le vs les sound different).' },
      {
        t: 'table',
        head: ['Rule', 'Singular', 'Plural'],
        rows: [
          ['add -s', 'un livre', 'des livres'],
          ['-eau, -eu → add -x', 'un gâteau', 'des gâteaux'],
          ['-al → -aux', 'un journal', 'des journaux'],
          ['ends in -s, -x, -z: no change', 'un fils', 'des fils'],
        ],
      },
      { t: 'tip', text: "Liaison: when les/des come before a vowel, the -s is pronounced 'z': les amis → lê-za-mi; des enfants → đê-zãng-fãng." },
    ],
    quiz: [
      { q: 'Plural of "un gâteau":', options: ['des gâteaus', 'des gâteaux', 'des gâteau'], answer: 1, why: '-eau → -eaux.' },
      { q: 'Plural of "le fils" (son):', options: ['les fils', 'les filx', 'les filses'], answer: 0, why: 'Ends in -s so it does not change.' },
      { q: 'You hear "lê-za-mi". It is…', options: ['le ami', 'les amis', 'la ami'], answer: 1, why: 'Liaison: les + amis → z.' },
    ],
  },
  {
    id: 'possessifs',
    title: 'Possessive adjectives',
    summary: 'mon, ma, mes, ton, ta, tes…',
    blocks: [
      { t: 'p', text: 'Possessive adjectives agree with the thing owned (not with the owner).' },
      {
        t: 'table',
        head: ['Owner', 'Masc.', 'Fem.', 'Plural'],
        rows: [
          ['my', 'mon', 'ma', 'mes'],
          ['your (tu)', 'ton', 'ta', 'tes'],
          ['his/her', 'son', 'sa', 'ses'],
          ['our', 'notre', 'notre', 'nos'],
          ['your (vous)', 'votre', 'votre', 'vos'],
          ['their', 'leur', 'leur', 'leurs'],
        ],
      },
      { t: 'tip', text: 'Before a feminine noun starting with a vowel, use mon/ton/son: mon amie, mon école (easier to say).' },
      { t: 'ex', items: [['mon père, ma mère, mes parents', 'my father, my mother, my parents'], ['Son frère est grand.', 'His/her brother is tall.'], ['Notre maison est petite.', 'Our house is small.']] },
    ],
    quiz: [
      { q: '___ mère (my mother)', options: ['mon', 'ma', 'mes'], answer: 1, why: 'mère is feminine, so ma.' },
      { q: '___ amie (my girlfriend/friend)', options: ['ma', 'mon', 'mes'], answer: 1, why: 'Before a vowel use mon.' },
      { q: '___ livres (your books, tu)', options: ['ton', 'ta', 'tes'], answer: 2, why: 'Plural: tes.' },
    ],
  },
  {
    id: 'aller-contractions',
    title: 'Aller, à / de and contractions',
    summary: 'au, aux, du, des; aller + place',
    blocks: [
      { t: 'p', text: 'aller (to go) is irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont.' },
      { t: 'p', text: 'à (to/at) and de (of/from) contract with le and les:' },
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
          ['Je vais au restaurant.', "I'm going to the restaurant."],
          ['Il va à la maison.', "He's going home."],
          ['Je mange du pain.', "I'm eating (some) bread."],
          ['Elle vient de la gare.', 'She comes from the station.'],
        ],
      },
      { t: 'tip', text: "For cities use à (à Paris); for feminine countries use en (en France); for masculine countries use au (au Vietnam). Du/de la/des also mean 'some' (partitive): du café, de la soupe." },
    ],
    quiz: [
      { q: 'Je vais ___ restaurant.', options: ['à le', 'au', 'aux'], answer: 1, why: 'à + le = au.' },
      { q: 'Il habite ___ France.', options: ['à', 'au', 'en'], answer: 2, why: 'Feminine country: en.' },
      { q: 'Je mange ___ pain.', options: ['de le', 'du', 'des'], answer: 1, why: 'de + le = du.' },
      { q: 'Nous ___ à Paris. (aller)', options: ['allons', 'allez', 'vont'], answer: 0, why: 'nous allons.' },
    ],
  },
]
