import type { Locale } from './config';

// Single dictionary file. Per-section, per-locale.
// Translation discipline: not mirror — UK/RU lead with Kyiv archive, ID leads with Jakarta.

export type Dict = (typeof DICTS)['en'];

export const DICTS = {
  // ============================================================
  en: {
    common: {
      brandTag: 'est. 2010',
      chapter: (n: number, total: number) => `CH ${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
      readCase: 'Read case →',
      backToWork: '← Back to all work',
      viewAll: 'See all',
      backHome: '← zapleo',
    },
    nav: {
      work: 'Work',
      journey: 'Journey',
      now: 'Now',
      journal: 'Journal',
      contact: 'Contact',
      colophon: 'Colophon',
    },
    home: {
      eyebrow: "Dnipro → Weligama → Vietnam → Jakarta · Operator. Educator. AI-augmented.",
      headLine1: 'Operator first.',
      headLine2: 'Educator now.',
      lead:
        "Twelve years shipping software from a Dnipro agency. Forty-plus client engagements. Now running an IT academy branch in Jakarta — and teaching the path into tech with AI in the workflow, humans in the chair.",
      ctaWork: 'See the work',
      ctaJourney: 'The journey',
      ctaContact: 'Direct line →',
    },
    nowThen: {
      nowEyebrow: 'Now · Jakarta · 2026',
      nowHead: 'Building an IT academy branch in Indonesia. Teaching the path into tech.',
      nowBody:
        'Branch Director at IT STEP Academy Jakarta. Curriculum, hiring, ops. In parallel — building a public English-language voice for the Asian career-switcher pipeline. The voice is AI-augmented; the calls are mine.',
      meta: [
        ['Where', 'Menteng, Jakarta'],
        ['Role', 'Branch Director, IT STEP Academy Jakarta'],
        ['Stack', 'Operator brain · AI pipeline · Ukrainian engineering spine'],
        ['Open for', 'Brief calls, partner intros, smart questions'],
      ] as [string, string][],
      thenEyebrow: 'Then · The archive · Dnipro → Weligama → Vietnam',
      cards: [
        { year: '2010', place: 'Dnipro · UA', title: 'Two laptops, one office', body: 'Started Zapleo. Web, mobile, brand microsites. Office on Shevchenko 59, Prospekt Pushkina 33 after.' },
        { year: '2014', place: 'Dnipro · UA', title: 'Subcontract engine', body: 'Sprints for studios working on classifieds, retail, hardware launches. Team grows to eight.' },
        { year: '2018', place: 'Dnipro · UA', title: 'Forty engagements deep', body: 'Cosmetics ecommerce, association portals, news platforms, Android apps. PHP + Rails + JS.' },
        { year: '2022', place: 'Weligama · LK', title: 'Sri Lanka. Pasijou opens.', body: 'February 24. Move family south. Open Pasijou — coworking + restaurant + cinema on the south coast.' },
        { year: '2023', place: 'Vietnam', title: 'Veranda', body: 'Veranda.my — second hospitality venture, this time in Vietnam. Same playbook: work and food in one room.' },
        { year: '2024', place: 'Jakarta · ID', title: 'Pivot to education', body: 'Met the Indonesian market as consultant. Saw the English-content gap. Started building toward it.' },
      ],
    },
    trusted: {
      eyebrow: 'The track record, in honest numbers',
      stats: [
        { value: '12', unit: 'years', label: 'agency operations' },
        { value: '40+', unit: '', label: 'client engagements' },
        { value: '6', unit: '', label: 'tech stacks shipped' },
        { value: '4', unit: '', label: 'languages on this site' },
      ],
      industriesLabel: '',
      industries: ['EdTech', 'Classifieds', 'Tech media', 'E-commerce', 'Industry associations', 'Booking platforms', 'Cosmetics & beauty', 'News & opinion'],
      footnote: 'Specific clients available on request, where NDA permits. Public agency footprint:',
    },
    pullQuote: {
      text: '"The teacher I needed didn\'t exist in my language. So I built one."',
      caption: '— On launching the Vibe Coding course · Jakarta · 2026',
    },
    cta: {
      eyebrow: 'Direct line · No form',
      head1: 'Working on something interesting?',
      head2: 'Skip the form.',
      body:
        'Email is read daily. WhatsApp is faster if you are in Asia. Reply within 48 hours on weekdays, in your timezone if you tell me where you are.',
    },
    footer: {
      tagline:
        'Dmitriy Zaporozhets · Operator · Educator · AI-augmented.\nDnipro → Sri Lanka → Vietnam → Jakarta. Building one classroom and a few F&B ventures.',
      mapLabel: 'Map',
      aroundLabel: 'Around the web',
      directLabel: 'Direct',
      copy: '© {year} · Zapleo · Built with Claude, code reviewed by a human.',
      meta: 'v0.1 · Jakarta, GMT+7',
    },
    work: {
      eyebrow: 'Chapter 02 · Work',
      title1: 'The defensible slice.',
      title2: 'The rest by request.',
      intro: 'Twelve years of agency engagements + two hospitality ventures. Below is what can be verified publicly. Anything under NDA — happy to walk through on a call.',
      eras: {
        hospitality: 'Hospitality · 2022 →',
        agency: 'Agency selected · 2010 → 2022',
      },
    },
    journey: {
      eyebrow: 'Chapter 03 · Journey',
      title1: 'Twelve years,',
      title2: 'four countries, one operator brain.',
      intro: 'A timeline instead of an About page. What was happening, where, and what shape it left in the work.',
      eraLabels: { pre: 'Pre-Zapleo', agency: 'Agency era', transition: 'Pivot', now: 'Now' },
    },
    now: {
      eyebrow: 'Chapter 04 · Now · Updated May 2026',
      title: 'What I am doing right now.',
      intro: 'Replaces the usual /about with a snapshot of this month. Updates on the 1st.',
      blocks: [
        ['Living', 'Jakarta, Indonesia. Menteng side of town. UTC+7. Family on the same timezone.'],
        ['Working on', 'Branch Director at IT STEP Academy Jakarta. Curriculum, hiring, ops, growth. First full quarter in role.'],
        ['Building', 'Vibe Coding — English-language tech course for Southeast Asian learners. AI-augmented teaching, human-directed. Launches Q3 2026.'],
        ['Running in parallel', 'Pasijou (Weligama) and Veranda (Vietnam) — both hospitality ventures, day-to-day with strong local teams.'],
        ['Reading', '"How Big Things Get Done" (Flyvbjerg) on the project-management bench. "AI Engineering" (Chip Huyen) for the curriculum work.'],
        ['Learning', 'Bahasa Indonesia (slowly). React 19 server components in production (faster).'],
        ['Open for', 'Short calls with people building EdTech in SEA, anyone running multi-country teams, and Ukrainian engineers planning a move east.'],
      ] as [string, string][],
      footnote: 'A "now page" is a convention started by Derek Sivers. It tells you what someone is focused on right now, instead of forcing you to guess from social feeds.',
    },
    journal: {
      eyebrow: 'Chapter 05 · Journal',
      title1: 'Long-form, slow, and',
      title2: 'opinionated.',
      intro: 'Essays on tech-career building in Southeast Asia, AI-augmented workflow, and what a Ukrainian agency owner learns after running a restaurant. Posts arrive as they finish, not on a schedule.',
      footnote: 'New essays land in the Telegram channel first. RSS coming when the first essay ships.',
      statusLabels: { soon: 'Soon', drafting: 'Drafting', published: 'min · EN' },
    },
    contact: {
      eyebrow: 'Chapter 06 · Direct line',
      title1: 'Working on something interesting?',
      title2: 'Skip the form.',
      intro: 'No form on this page by default. You will get a reply within 48 hours on weekdays — in your timezone if you tell me where you are.',
      footnote: 'Why no form on this page? Forms get triaged. Direct emails get answered. If you really prefer a form, this mailto link pre-fills one for you.',
      channels: [
        { label: 'Email', value: 'dima@zapleo.com', note: 'Best for anything that needs a paper trail.' },
        { label: 'Telegram', value: '@zapleosoft', note: 'Fastest in Asia hours.' },
        { label: 'WhatsApp', value: '+380 99 481 1889', note: 'Voice notes welcome.' },
        { label: 'LinkedIn', value: 'in/dmitriy-zaporozhets', note: 'For formal intros.' },
        { label: 'Instagram', value: '@ai_dimaz', note: 'Day-to-day, behind-the-scenes.' },
      ],
    },
    colophon: {
      eyebrow: 'Appendix · Colophon',
      title1: 'How this site is',
      title2: 'actually',
      title3: 'made.',
      intro: 'A colophon is the page at the back of a book that lists the type, the paper, the printer. Same idea here — the stack, the fonts, the AI in the workflow, the host. So you can audit before you trust.',
      sections: { stack: 'Stack', type: 'Type', infra: 'Infrastructure', ai: 'AI / human split (honest disclosure)', source: 'Source code & audits' },
      sourceNotes: [
        'License: MIT for the build setup; content is © Dmitriy Zaporozhets.',
        'Accessibility target: WCAG 2.2 AA. Found a violation? Tell me at dima@zapleo.com.',
        'No cookies. No third-party trackers. No newsletter pop-up.',
      ],
    },
  },

  // ============================================================
  uk: {
    common: {
      brandTag: 'засн. 2010',
      chapter: (n: number, total: number) => `РОЗД ${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
      readCase: 'Читати кейс →',
      backToWork: '← До всіх робіт',
      viewAll: 'Дивитися всі',
      backHome: '← zapleo',
    },
    nav: {
      work: 'Роботи',
      journey: 'Шлях',
      now: 'Зараз',
      journal: 'Журнал',
      contact: 'Контакти',
      colophon: 'Колофон',
    },
    home: {
      eyebrow: 'Дніпро → Велігама → В\'єтнам → Джакарта · Оператор. Викладач. AI-доповнений.',
      headLine1: 'Спочатку оператор.',
      headLine2: 'Зараз — викладач.',
      lead:
        'Дванадцять років агенції в Дніпрі. 40+ проєктів. Зараз керую філією IT академії в Джакарті та будую AI-доповнений підхід до викладання технологій для Південно-Східної Азії.',
      ctaWork: 'Дивитися роботи',
      ctaJourney: 'Шлях',
      ctaContact: 'Пряма лінія →',
    },
    nowThen: {
      nowEyebrow: 'Зараз · Джакарта · 2026',
      nowHead: 'Будую філію IT академії в Індонезії. Викладаю шлях у тех.',
      nowBody:
        'Директор філії IT STEP Academy у Джакарті. Програма, найм, операційка. Паралельно — будую публічний англомовний голос для трубопроводу career-switcher\'ів в Азії. Голос — AI-доповнений; рішення — мої.',
      meta: [
        ['Де', 'Ментенг, Джакарта'],
        ['Роль', 'Директор філії IT STEP Academy Jakarta'],
        ['Стек', 'Операторський мозок · AI-конвеєр · Український інженерний хребет'],
        ['Відкритий для', 'Коротких дзвінків, партнерських представлень, розумних питань'],
      ] as [string, string][],
      thenEyebrow: 'Тоді · Архів · Дніпро → Велігама → В\'єтнам',
      cards: [
        { year: '2010', place: 'Дніпро · UA', title: 'Два ноутбуки, один офіс', body: 'Заснував Zapleo. Веб, мобайл, бренд-мікросайти. Офіс на Шевченка 59, потім Проспект Пушкіна 33.' },
        { year: '2014', place: 'Дніпро · UA', title: 'Субпідрядна машина', body: 'Спринти для студій, що працюють із classifieds, retail, hardware-запусками. Команда зростає до восьми.' },
        { year: '2018', place: 'Дніпро · UA', title: 'Сорок проєктів углиб', body: 'Косметика, асоціації, новинні платформи, Android-додатки. PHP + Rails + JS.' },
        { year: '2022', place: 'Велігама · LK', title: 'Шрі-Ланка. Відкривається Pasijou.', body: '24 лютого. Переїзд родини на південь. Відкриваємо Pasijou — коворкінг + ресторан + кінотеатр на південному березі.' },
        { year: '2023', place: 'В\'єтнам', title: 'Veranda', body: 'Veranda.my — другий гастро-проєкт, тепер у В\'єтнамі. Той самий плейбук: робота та їжа в одному просторі.' },
        { year: '2024', place: 'Джакарта · ID', title: 'Поворот до освіти', body: 'Зустрівся з індонезійським ринком як консультант. Побачив прогалину в англомовному контенті. Почав будувати назустріч.' },
      ],
    },
    trusted: {
      eyebrow: 'Послужний список — у чесних числах',
      stats: [
        { value: '12', unit: 'років', label: 'роботи агенції' },
        { value: '40+', unit: '', label: 'клієнтських проєктів' },
        { value: '6', unit: '', label: 'тех-стеків випущено' },
        { value: '4', unit: '', label: 'мови на цьому сайті' },
      ],
      industriesLabel: '',
      industries: ['EdTech', 'Classifieds', 'Тех-медіа', 'E-commerce', 'Галузеві асоціації', 'Booking-платформи', 'Косметика та краса', 'Новини та думки'],
      footnote: 'Конкретні клієнти — на запит, де дозволяє NDA. Публічний слід агенції:',
    },
    pullQuote: {
      text: '"Викладача, якого я потребував, не існувало моєю мовою. Тому я побудував одного."',
      caption: '— Про запуск курсу Vibe Coding · Джакарта · 2026',
    },
    cta: {
      eyebrow: 'Пряма лінія · Без форми',
      head1: 'Працюєш над чимось цікавим?',
      head2: 'Пропусти форму.',
      body: 'Пошту читаю щодня. WhatsApp швидший, якщо ти в Азії. Відповідь протягом 48 годин у будні — у твоєму часовому поясі, якщо скажеш де ти.',
    },
    footer: {
      tagline:
        'Дмитро Запорожець · Оператор · Викладач · AI-доповнений.\nДніпро → Шрі-Ланка → В\'єтнам → Джакарта. Будую одну аудиторію та кілька F&B проєктів.',
      mapLabel: 'Карта',
      aroundLabel: 'У мережі',
      directLabel: 'Прямо',
      copy: '© {year} · Zapleo · Створено з Claude, код переглянуто людиною.',
      meta: 'v0.1 · Джакарта, GMT+7',
    },
    work: {
      eyebrow: 'Розділ 02 · Роботи',
      title1: 'Те, що можна показати.',
      title2: 'Решта — за запитом.',
      intro: 'Дванадцять років агенційних проєктів + два F&B-підприємства. Нижче — те, що можна перевірити публічно. Все під NDA — радо проведу дзвінком.',
      eras: {
        hospitality: 'Гостинність · 2022 →',
        agency: 'Агенція, обране · 2010 → 2022',
      },
    },
    journey: {
      eyebrow: 'Розділ 03 · Шлях',
      title1: 'Дванадцять років,',
      title2: 'чотири країни, один операторський мозок.',
      intro: 'Таймлайн замість сторінки About. Що відбувалося, де, і яку форму це залишило в роботах.',
      eraLabels: { pre: 'До Zapleo', agency: 'Епоха агенції', transition: 'Поворот', now: 'Зараз' },
    },
    now: {
      eyebrow: 'Розділ 04 · Зараз · Оновлено травень 2026',
      title: 'Чим я зайнятий просто зараз.',
      intro: 'Замінює звичайний /about знімком цього місяця. Оновлюється першого числа.',
      blocks: [
        ['Живу', 'Джакарта, Індонезія. Сторона Ментенг. UTC+7. Родина в тому ж часовому поясі.'],
        ['Працюю над', 'Директор філії IT STEP Academy Jakarta. Програма, найм, операційка, зростання. Перший повний квартал на ролі.'],
        ['Будую', 'Vibe Coding — англомовний tech-курс для учнів Південно-Східної Азії. AI-доповнене викладання, режисура людська. Запуск Q3 2026.'],
        ['Веду паралельно', 'Pasijou (Велігама) та Veranda (В\'єтнам) — обидва гастро-проєкти на щодень із сильними локальними командами.'],
        ['Читаю', '"How Big Things Get Done" (Флівб\'єрг) на полиці PM. "AI Engineering" (Чіп Хюйен) — для курикулуму.'],
        ['Вчу', 'Bahasa Indonesia (повільно). React 19 server components у проді (швидше).'],
        ['Відкритий для', 'Коротких дзвінків із людьми, що будують EdTech в SEA, з тими хто керує мультикраїновими командами, та з українськими інженерами, що планують переїзд на схід.'],
      ] as [string, string][],
      footnote: 'Сторінка "now" — конвенція від Дерека Сіверса. Розповідає, на чому людина зосереджена прямо зараз, замість того щоб гадати по соцмережах.',
    },
    journal: {
      eyebrow: 'Розділ 05 · Журнал',
      title1: 'Лонгріди, повільно, з',
      title2: 'позицією.',
      intro: 'Есеї про побудову tech-кар\'єри в Південно-Східній Азії, AI-доповнений workflow, і що український власник агенції розуміє після того, як керував рестораном. Пости з\'являються коли готові, не за розкладом.',
      footnote: 'Нові есеї спочатку — в Telegram-каналі. RSS буде коли вийде перший пост.',
      statusLabels: { soon: 'Скоро', drafting: 'Чернетка', published: 'хв · UK' },
    },
    contact: {
      eyebrow: 'Розділ 06 · Пряма лінія',
      title1: 'Працюєш над чимось цікавим?',
      title2: 'Пропусти форму.',
      intro: 'За замовчуванням на цій сторінці немає форми. Отримаєш відповідь протягом 48 годин у будні — у твоєму часовому поясі, якщо скажеш де ти.',
      footnote: 'Чому без форми? Форми сортують. На прямі листи відповідають. Якщо все ж потрібна форма — це mailto-посилання попередньо заповнить її.',
      channels: [
        { label: 'Пошта', value: 'dima@zapleo.com', note: 'Найкраще для всього, що потребує паперового сліду.' },
        { label: 'Telegram', value: '@zapleosoft', note: 'Найшвидше в азійський час.' },
        { label: 'WhatsApp', value: '+380 99 481 1889', note: 'Голосові вітаються.' },
        { label: 'LinkedIn', value: 'in/dmitriy-zaporozhets', note: 'Для формальних знайомств.' },
        { label: 'Instagram', value: '@ai_dimaz', note: 'Щоденне, з-за лаштунків.' },
      ],
    },
    colophon: {
      eyebrow: 'Додаток · Колофон',
      title1: 'Як цей сайт',
      title2: 'насправді',
      title3: 'зроблений.',
      intro: 'Колофон — це сторінка наприкінці книги зі шрифтом, папером, друкарнею. Та сама ідея тут: стек, шрифти, AI в роботі, хостинг. Щоб ти міг перевірити, перш ніж довіряти.',
      sections: { stack: 'Стек', type: 'Шрифти', infra: 'Інфраструктура', ai: 'AI / людський поділ (чесне розкриття)', source: 'Вихідний код та аудити' },
      sourceNotes: [
        'Ліцензія: MIT для збірки; контент © Дмитро Запорожець.',
        'Ціль доступності: WCAG 2.2 AA. Знайшов порушення? Напиши на dima@zapleo.com.',
        'Без кукі. Без сторонніх трекерів. Без поп-апа на розсилку.',
      ],
    },
  },

  // ============================================================
  ru: {
    common: {
      brandTag: 'осн. 2010',
      chapter: (n: number, total: number) => `ГЛ ${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
      readCase: 'Читать кейс →',
      backToWork: '← Ко всем работам',
      viewAll: 'Смотреть все',
      backHome: '← zapleo',
    },
    nav: {
      work: 'Работы',
      journey: 'Путь',
      now: 'Сейчас',
      journal: 'Журнал',
      contact: 'Контакты',
      colophon: 'Колофон',
    },
    home: {
      eyebrow: 'Днепр → Велигама → Вьетнам → Джакарта · Оператор. Преподаватель. AI-дополненный.',
      headLine1: 'Сначала оператор.',
      headLine2: 'Сейчас — преподаватель.',
      lead:
        'Двенадцать лет агентства в Днепре. 40+ проектов. Сейчас руковожу филиалом IT-академии в Джакарте и строю AI-дополненный подход к преподаванию для Юго-Восточной Азии.',
      ctaWork: 'Смотреть работы',
      ctaJourney: 'Путь',
      ctaContact: 'Прямая линия →',
    },
    nowThen: {
      nowEyebrow: 'Сейчас · Джакарта · 2026',
      nowHead: 'Строю филиал IT-академии в Индонезии. Преподаю путь в тех.',
      nowBody:
        'Директор филиала IT STEP Academy в Джакарте. Программа, найм, операционка. Параллельно — строю публичный англоязычный голос для трубопровода career-switcher\'ов в Азии. Голос AI-дополнен; решения мои.',
      meta: [
        ['Где', 'Ментенг, Джакарта'],
        ['Роль', 'Директор филиала IT STEP Academy Jakarta'],
        ['Стек', 'Операторский мозг · AI-конвейер · Украинский инженерный хребет'],
        ['Открыт для', 'Коротких звонков, партнёрских представлений, умных вопросов'],
      ] as [string, string][],
      thenEyebrow: 'Тогда · Архив · Днепр → Велигама → Вьетнам',
      cards: [
        { year: '2010', place: 'Днепр · UA', title: 'Два ноутбука, один офис', body: 'Основал Zapleo. Веб, мобайл, бренд-микросайты. Офис на Шевченко 59, потом Проспект Пушкина 33.' },
        { year: '2014', place: 'Днепр · UA', title: 'Субподрядная машина', body: 'Спринты для студий, работающих с classifieds, retail, hardware-запусками. Команда вырастает до восьми.' },
        { year: '2018', place: 'Днепр · UA', title: 'Сорок проектов вглубь', body: 'Косметика, ассоциации, новостные платформы, Android-приложения. PHP + Rails + JS.' },
        { year: '2022', place: 'Велигама · LK', title: 'Шри-Ланка. Открывается Pasijou.', body: '24 февраля. Переезд семьи на юг. Открываем Pasijou — коворкинг + ресторан + кинотеатр на южном берегу.' },
        { year: '2023', place: 'Вьетнам', title: 'Veranda', body: 'Veranda.my — второй гастро-проект, теперь во Вьетнаме. Тот же плейбук: работа и еда в одном пространстве.' },
        { year: '2024', place: 'Джакарта · ID', title: 'Поворот к образованию', body: 'Встретил индонезийский рынок консультантом. Увидел gap в англоязычном контенте. Начал строить навстречу.' },
      ],
    },
    trusted: {
      eyebrow: 'Послужной список — в честных числах',
      stats: [
        { value: '12', unit: 'лет', label: 'работы агентства' },
        { value: '40+', unit: '', label: 'клиентских проектов' },
        { value: '6', unit: '', label: 'тех-стеков выпущено' },
        { value: '4', unit: '', label: 'языка на этом сайте' },
      ],
      industriesLabel: '',
      industries: ['EdTech', 'Classifieds', 'Тех-медиа', 'E-commerce', 'Отраслевые ассоциации', 'Booking-платформы', 'Косметика и красота', 'Новости и мнения'],
      footnote: 'Конкретные клиенты — по запросу, где позволяет NDA. Публичный след агентства:',
    },
    pullQuote: {
      text: '"Преподавателя, которого я хотел, не существовало на моём языке. Поэтому я построил одного."',
      caption: '— О запуске курса Vibe Coding · Джакарта · 2026',
    },
    cta: {
      eyebrow: 'Прямая линия · Без формы',
      head1: 'Работаешь над чем-то интересным?',
      head2: 'Пропусти форму.',
      body: 'Почту читаю ежедневно. WhatsApp быстрее, если ты в Азии. Ответ в течение 48 часов в будни — в твоём часовом поясе, если скажешь где ты.',
    },
    footer: {
      tagline:
        'Дмитрий Запорожец · Оператор · Преподаватель · AI-дополненный.\nДнепр → Шри-Ланка → Вьетнам → Джакарта. Строю одну аудиторию и несколько F&B-проектов.',
      mapLabel: 'Карта',
      aroundLabel: 'В сети',
      directLabel: 'Прямо',
      copy: '© {year} · Zapleo · Сделано с Claude, код просмотрен человеком.',
      meta: 'v0.1 · Джакарта, GMT+7',
    },
    work: {
      eyebrow: 'Глава 02 · Работы',
      title1: 'То, что можно показать.',
      title2: 'Остальное — по запросу.',
      intro: 'Двенадцать лет агентских проектов + два F&B-предприятия. Ниже — то, что можно проверить публично. Всё под NDA — рад провести звонком.',
      eras: {
        hospitality: 'Гостеприимство · 2022 →',
        agency: 'Агентство, избранное · 2010 → 2022',
      },
    },
    journey: {
      eyebrow: 'Глава 03 · Путь',
      title1: 'Двенадцать лет,',
      title2: 'четыре страны, один операторский мозг.',
      intro: 'Таймлайн вместо страницы About. Что происходило, где, и какую форму это оставило в работах.',
      eraLabels: { pre: 'До Zapleo', agency: 'Эпоха агентства', transition: 'Поворот', now: 'Сейчас' },
    },
    now: {
      eyebrow: 'Глава 04 · Сейчас · Обновлено май 2026',
      title: 'Чем занят прямо сейчас.',
      intro: 'Заменяет обычный /about снимком этого месяца. Обновляется первого числа.',
      blocks: [
        ['Живу', 'Джакарта, Индонезия. Сторона Ментенг. UTC+7. Семья в том же часовом поясе.'],
        ['Работаю над', 'Директор филиала IT STEP Academy Jakarta. Программа, найм, операционка, рост. Первый полный квартал на роли.'],
        ['Строю', 'Vibe Coding — англоязычный tech-курс для учеников Юго-Восточной Азии. AI-дополненное преподавание, режиссура человеческая. Запуск Q3 2026.'],
        ['Веду параллельно', 'Pasijou (Велигама) и Veranda (Вьетнам) — оба гастро-проекта на ежедневке с сильными локальными командами.'],
        ['Читаю', '"How Big Things Get Done" (Флибьорг) на полке PM. "AI Engineering" (Чип Хюйен) — для куррикулума.'],
        ['Учу', 'Bahasa Indonesia (медленно). React 19 server components в проде (быстрее).'],
        ['Открыт для', 'Коротких звонков с людьми, строящими EdTech в SEA, с теми кто управляет мультистрановыми командами, и с украинскими инженерами, планирующими переезд на восток.'],
      ] as [string, string][],
      footnote: 'Страница "now" — конвенция от Дерека Сиверса. Рассказывает, на чём человек сосредоточен прямо сейчас, вместо того чтобы гадать по соцсетям.',
    },
    journal: {
      eyebrow: 'Глава 05 · Журнал',
      title1: 'Лонгриды, медленно, с',
      title2: 'позицией.',
      intro: 'Эссе о построении tech-карьеры в Юго-Восточной Азии, AI-дополненном workflow, и что украинский владелец агентства понимает после того, как руководил рестораном. Посты появляются когда готовы, не по расписанию.',
      footnote: 'Новые эссе сначала — в Telegram-канале. RSS будет когда выйдет первый пост.',
      statusLabels: { soon: 'Скоро', drafting: 'Черновик', published: 'мин · RU' },
    },
    contact: {
      eyebrow: 'Глава 06 · Прямая линия',
      title1: 'Работаешь над чем-то интересным?',
      title2: 'Пропусти форму.',
      intro: 'По умолчанию на этой странице нет формы. Получишь ответ в течение 48 часов в будни — в твоём часовом поясе, если скажешь где ты.',
      footnote: 'Почему без формы? Формы сортируют. На прямые письма отвечают. Если всё же нужна форма — это mailto-ссылка предзаполнит её.',
      channels: [
        { label: 'Почта', value: 'dima@zapleo.com', note: 'Лучше всего для всего что требует бумажного следа.' },
        { label: 'Telegram', value: '@zapleosoft', note: 'Быстрее всего в азиатские часы.' },
        { label: 'WhatsApp', value: '+380 99 481 1889', note: 'Голосовые приветствуются.' },
        { label: 'LinkedIn', value: 'in/dmitriy-zaporozhets', note: 'Для формальных знакомств.' },
        { label: 'Instagram', value: '@ai_dimaz', note: 'Ежедневное, из-за кулис.' },
      ],
    },
    colophon: {
      eyebrow: 'Приложение · Колофон',
      title1: 'Как этот сайт',
      title2: 'на самом деле',
      title3: 'сделан.',
      intro: 'Колофон — страница в конце книги со шрифтом, бумагой, типографией. Та же идея здесь: стек, шрифты, AI в работе, хостинг. Чтобы ты мог проверить, прежде чем доверять.',
      sections: { stack: 'Стек', type: 'Шрифты', infra: 'Инфраструктура', ai: 'AI / человеческое разделение (честное раскрытие)', source: 'Исходный код и аудиты' },
      sourceNotes: [
        'Лицензия: MIT для сборки; контент © Дмитрий Запорожец.',
        'Цель доступности: WCAG 2.2 AA. Нашёл нарушение? Напиши на dima@zapleo.com.',
        'Без кук. Без сторонних трекеров. Без поп-апа на рассылку.',
      ],
    },
  },

  // ============================================================
  id: {
    common: {
      brandTag: 'sejak 2010',
      chapter: (n: number, total: number) => `BAB ${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
      readCase: 'Baca studi kasus →',
      backToWork: '← Kembali ke karya',
      viewAll: 'Lihat semua',
      backHome: '← zapleo',
    },
    nav: {
      work: 'Karya',
      journey: 'Perjalanan',
      now: 'Sekarang',
      journal: 'Jurnal',
      contact: 'Kontak',
      colophon: 'Colophon',
    },
    home: {
      eyebrow: 'Dnipro → Weligama → Vietnam → Jakarta · Operator. Pendidik. AI-augmented.',
      headLine1: 'Operator dulu.',
      headLine2: 'Pendidik sekarang.',
      lead:
        'Branch Director IT STEP Academy Jakarta. Dua belas tahun mengelola agensi web di Ukraina, 40+ proyek klien. Sekarang membangun jalur karier tech di Asia Tenggara — dengan AI dalam alur kerja, manusia di kursi.',
      ctaWork: 'Lihat karya',
      ctaJourney: 'Perjalanan',
      ctaContact: 'Hubungi langsung →',
    },
    nowThen: {
      nowEyebrow: 'Sekarang · Jakarta · 2026',
      nowHead: 'Membangun cabang akademi IT di Indonesia. Mengajar jalan masuk ke tech.',
      nowBody:
        'Branch Director IT STEP Academy Jakarta. Kurikulum, rekrutmen, operasi. Paralel — membangun suara publik berbahasa Inggris untuk pipeline career-switcher di Asia. Suara AI-augmented; keputusan tetap manusia.',
      meta: [
        ['Di mana', 'Menteng, Jakarta'],
        ['Peran', 'Branch Director IT STEP Academy Jakarta'],
        ['Stack', 'Otak operator · Pipeline AI · Tulang punggung engineering Ukraina'],
        ['Terbuka untuk', 'Panggilan singkat, intro mitra, pertanyaan cerdas'],
      ] as [string, string][],
      thenEyebrow: 'Dulu · Arsip · Dnipro → Weligama → Vietnam',
      cards: [
        { year: '2010', place: 'Dnipro · UA', title: 'Dua laptop, satu kantor', body: 'Mendirikan Zapleo. Web, mobile, microsite brand. Kantor di Shevchenko 59, lalu Prospekt Pushkina 33.' },
        { year: '2014', place: 'Dnipro · UA', title: 'Mesin subkontrak', body: 'Sprint untuk studio yang bekerja di classifieds, retail, peluncuran hardware. Tim tumbuh menjadi delapan.' },
        { year: '2018', place: 'Dnipro · UA', title: 'Empat puluh proyek dalam', body: 'E-commerce kosmetik, portal asosiasi, platform berita, aplikasi Android. PHP + Rails + JS.' },
        { year: '2022', place: 'Weligama · LK', title: 'Sri Lanka. Pasijou buka.', body: '24 Februari. Bawa keluarga ke selatan. Buka Pasijou — coworking + restoran + bioskop di pesisir selatan.' },
        { year: '2023', place: 'Vietnam', title: 'Veranda', body: 'Veranda.my — usaha hospitality kedua, kali ini di Vietnam. Playbook sama: kerja dan makanan dalam satu ruangan.' },
        { year: '2024', place: 'Jakarta · ID', title: 'Pivot ke pendidikan', body: 'Bertemu pasar Indonesia sebagai konsultan. Lihat celah konten berbahasa Inggris. Mulai membangun ke arah itu.' },
      ],
    },
    trusted: {
      eyebrow: 'Rekam jejak, dalam angka yang jujur',
      stats: [
        { value: '12', unit: 'tahun', label: 'operasi agensi' },
        { value: '40+', unit: '', label: 'proyek klien' },
        { value: '6', unit: '', label: 'tech stack dirilis' },
        { value: '4', unit: '', label: 'bahasa di situs ini' },
      ],
      industriesLabel: '',
      industries: ['EdTech', 'Classifieds', 'Media teknologi', 'E-commerce', 'Asosiasi industri', 'Platform booking', 'Kosmetik & kecantikan', 'Berita & opini'],
      footnote: 'Klien spesifik atas permintaan, sesuai NDA. Jejak agensi publik:',
    },
    pullQuote: {
      text: '"Guru yang saya butuhkan tidak ada dalam bahasa saya. Jadi saya membangunnya."',
      caption: '— Tentang peluncuran kursus Vibe Coding · Jakarta · 2026',
    },
    cta: {
      eyebrow: 'Jalur langsung · Tanpa formulir',
      head1: 'Sedang mengerjakan sesuatu yang menarik?',
      head2: 'Lewati formulirnya.',
      body: 'Email dibaca setiap hari. WhatsApp lebih cepat kalau kamu di Asia. Balasan dalam 48 jam di hari kerja — dalam zona waktumu kalau kamu kasih tahu di mana.',
    },
    footer: {
      tagline:
        'Dmitriy Zaporozhets · Operator · Pendidik · AI-augmented.\nDnipro → Sri Lanka → Vietnam → Jakarta. Membangun satu kelas dan beberapa usaha F&B.',
      mapLabel: 'Peta',
      aroundLabel: 'Di internet',
      directLabel: 'Langsung',
      copy: '© {year} · Zapleo · Dibangun dengan Claude, kode direview oleh manusia.',
      meta: 'v0.1 · Jakarta, GMT+7',
    },
    work: {
      eyebrow: 'Bab 02 · Karya',
      title1: 'Yang bisa ditampilkan.',
      title2: 'Sisanya atas permintaan.',
      intro: 'Dua belas tahun proyek agensi + dua usaha hospitality. Di bawah — yang bisa diverifikasi publik. Yang di bawah NDA — senang berbagi lewat panggilan.',
      eras: {
        hospitality: 'Hospitality · 2022 →',
        agency: 'Agensi pilihan · 2010 → 2022',
      },
    },
    journey: {
      eyebrow: 'Bab 03 · Perjalanan',
      title1: 'Dua belas tahun,',
      title2: 'empat negara, satu otak operator.',
      intro: 'Linimasa, bukan halaman About. Apa yang terjadi, di mana, dan bentuk apa yang tertinggal di karya.',
      eraLabels: { pre: 'Pra-Zapleo', agency: 'Era agensi', transition: 'Pivot', now: 'Sekarang' },
    },
    now: {
      eyebrow: 'Bab 04 · Sekarang · Diperbarui Mei 2026',
      title: 'Yang sedang saya kerjakan sekarang.',
      intro: 'Mengganti /about biasa dengan cuplikan bulan ini. Diperbarui tanggal 1.',
      blocks: [
        ['Tinggal', 'Jakarta, Indonesia. Sisi Menteng. UTC+7. Keluarga di zona waktu yang sama.'],
        ['Sedang mengerjakan', 'Branch Director IT STEP Academy Jakarta. Kurikulum, rekrutmen, operasi, pertumbuhan. Kuartal penuh pertama di peran ini.'],
        ['Membangun', 'Vibe Coding — kursus tech berbahasa Inggris untuk pelajar Asia Tenggara. Pengajaran AI-augmented, diarahkan manusia. Peluncuran Q3 2026.'],
        ['Berjalan paralel', 'Pasijou (Weligama) dan Veranda (Vietnam) — dua usaha hospitality, harian dengan tim lokal yang kuat.'],
        ['Membaca', '"How Big Things Get Done" (Flyvbjerg) untuk PM bench. "AI Engineering" (Chip Huyen) untuk kerja kurikulum.'],
        ['Belajar', 'Bahasa Indonesia (perlahan). React 19 server components di produksi (lebih cepat).'],
        ['Terbuka untuk', 'Panggilan singkat dengan orang yang membangun EdTech di SEA, siapa pun yang menjalankan tim lintas negara, dan engineer Ukraina yang merencanakan pindah ke timur.'],
      ] as [string, string][],
      footnote: 'Halaman "now" konvensi dari Derek Sivers. Memberitahumu fokus seseorang sekarang, bukan menebak dari feed sosial.',
    },
    journal: {
      eyebrow: 'Bab 05 · Jurnal',
      title1: 'Bentuk panjang, lambat, dan',
      title2: 'beropini.',
      intro: 'Esai tentang membangun karier tech di Asia Tenggara, alur kerja AI-augmented, dan apa yang pelajari pemilik agensi Ukraina setelah menjalankan restoran. Tulisan tiba saat selesai, bukan sesuai jadwal.',
      footnote: 'Esai baru muncul dulu di kanal Telegram. RSS menyusul saat tulisan pertama rilis.',
      statusLabels: { soon: 'Segera', drafting: 'Draf', published: 'mnt · ID' },
    },
    contact: {
      eyebrow: 'Bab 06 · Jalur langsung',
      title1: 'Sedang mengerjakan sesuatu yang menarik?',
      title2: 'Lewati formulirnya.',
      intro: 'Tidak ada formulir default di halaman ini. Kamu akan dapat balasan dalam 48 jam di hari kerja — dalam zona waktumu kalau kamu kasih tahu di mana.',
      footnote: 'Kenapa tidak ada formulir? Formulir di-triase. Email langsung dibalas. Kalau kamu memang lebih suka formulir, link mailto ini sudah mengisi sebagiannya.',
      channels: [
        { label: 'Email', value: 'dima@zapleo.com', note: 'Terbaik untuk apa pun yang butuh jejak tertulis.' },
        { label: 'Telegram', value: '@zapleosoft', note: 'Tercepat di jam Asia.' },
        { label: 'WhatsApp', value: '+380 99 481 1889', note: 'Voice note diterima.' },
        { label: 'LinkedIn', value: 'in/dmitriy-zaporozhets', note: 'Untuk perkenalan formal.' },
        { label: 'Instagram', value: '@ai_dimaz', note: 'Hari-hari, di balik layar.' },
      ],
    },
    colophon: {
      eyebrow: 'Lampiran · Colophon',
      title1: 'Bagaimana situs ini',
      title2: 'sebenarnya',
      title3: 'dibuat.',
      intro: 'Colophon adalah halaman di akhir buku yang mencantumkan font, kertas, percetakan. Ide yang sama di sini — stack, font, AI di alur kerja, hosting. Supaya kamu bisa mengaudit sebelum percaya.',
      sections: { stack: 'Stack', type: 'Font', infra: 'Infrastruktur', ai: 'Pembagian AI / manusia (pengungkapan jujur)', source: 'Kode sumber & audit' },
      sourceNotes: [
        'Lisensi: MIT untuk build setup; konten © Dmitriy Zaporozhets.',
        'Target aksesibilitas: WCAG 2.2 AA. Menemukan pelanggaran? Tulis ke dima@zapleo.com.',
        'Tanpa cookie. Tanpa pelacak pihak ketiga. Tanpa pop-up newsletter.',
      ],
    },
  },
} satisfies Record<Locale, unknown>;

export function getDict(locale: Locale) {
  return DICTS[locale] ?? DICTS.en;
}
