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
      liveLinks: 'Live links',
    },
    case: {
      stats: { place: 'Place', role: 'Role', team: 'Team', stack: 'Stack' },
    },
    nav: {
      work: 'Work',
      journey: 'Journey',
      now: 'Now',
      journal: 'Journal',
      contact: 'Contact',
      colophon: 'Colophon',
      aiDima: 'AI-Dima →',
    },
    home: {
      eyebrow: "Dnipro (UA) → Weligama (LK) → Nha Trang (VN) → Jakarta (ID) · Operator. Educator. AI-augmented.",
      headLine1: 'Operator first.',
      headLine2: 'Educator now.',
      lead:
        "Twelve years shipping software from a Dnipro agency. Forty-plus client engagements. Now running an IT academy branch in Jakarta — and teaching the path into tech with AI in the workflow, humans in the chair.",
      ctaWork: 'See the work',
      ctaJourney: 'The journey',
      ctaContact: 'Direct line →',
      contextNote: '',
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
      thenEyebrow: 'Then · The archive · Dnipro (UA) → Weligama (LK) → Nha Trang (VN)',
      cards: [
        { year: '2010', place: 'Dnipro · UA', title: 'Two laptops, one office', body: 'Started Zapleo. Web, mobile, brand microsites. Office on Shevchenko 59, Prospekt Pushkina 33 after.' },
        { year: '2014', place: 'Dnipro · UA', title: 'Subcontract engine', body: 'Sprints for studios working on classifieds, retail, hardware launches. Team grows to eight.' },
        { year: '2018', place: 'Dnipro · UA', title: 'Forty engagements deep', body: 'Cosmetics ecommerce, association portals, news platforms, Android apps. PHP + Rails + JS.' },
        { year: '2022', place: 'Weligama · LK', title: 'Sri Lanka. Pasijou opens.', body: 'February 24. Move family south. Open Pasijou — coworking + restaurant + cinema on the south coast.' },
        { year: '2023', place: 'Nha Trang · VN', title: 'Veranda', body: 'Veranda.my — second hospitality venture, this time in Nha Trang, Vietnam. Same playbook: work and food in one room.' },
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
        'Dmitriy Zaporozhets · AI in live business.\nFounder of Zapleo since 2010. Nha Trang, Vietnam, working worldwide.',
      mapLabel: 'Map',
      aroundLabel: 'Around the web',
      directLabel: 'Direct',
      copy: '© {year} · Zapleo · Built with Claude and Codex, reviewed by Dmitriy.',
      meta: 'Nha Trang, GMT+7',
    },
    work: {
      eyebrow: 'Chapter 02 · Work',
      title1: 'The defensible slice.',
      title2: 'The rest by request.',
      intro: 'AI systems built for live operations, two hospitality businesses — one I co-own today, one I co-owned until 2026 — and client work from Zapleo since 2010. Everything below can be checked; projects under NDA I can walk through on a call.',
      eras: {
        ai: 'AI systems · 2026',
        hospitality: 'Hospitality · 2023 →',
        agency: 'Zapleo client work · since 2010',
      },
      teaser: {
        heading: 'AI systems, hospitality, client work.',
        headingEm: 'More on request.',
        archive: 'All work →',
      },
      items: {
        'ai-sales-assistant': {
          tagline: 'AI sales conversations connected to CRM.',
          body: 'An AI agent for Instagram and WhatsApp. It qualified leads in the customer’s language, checked replies about prices, links and offers against business facts, and handed the conversation to a person with a stated reason.',
          place: 'Built for IT STEP Academy Jakarta',
        },
        aibroker: {
          tagline: 'One gateway for every AI provider.',
          body: 'Provider keys are kept in one place: calls go through the broker or get time-limited lease access. Every call is logged with an estimated cost, spending limits are set per project, and a monitor takes dead or rate-limited keys out of rotation.',
          place: 'Self-hosted',
        },
        veranda: {
          tagline: 'A restaurant I co-own and operate.',
          body: 'Opened in November 2025. I set up its operations software: POS integration, automatic payment reconciliation, a kitchen display with time alerts, and staff reporting over Telegram.',
          place: 'Nha Trang, Vietnam',
        },
        pasijou: {
          tagline: 'Coworking and restaurant on the south coast.',
          body: 'Co-owned and operated from February 2023 until the lease ended in March 2026. Breakeven in eight months; a 4.9 out of 5 guest rating while it ran.',
          place: 'Weligama, Sri Lanka',
        },
        apcu: {
          tagline: 'Website of the Association of Perfumery and Cosmetics of Ukraine.',
          body: 'Built by Zapleo and still run by the association’s own editors. The site credits Zapleo for its development.',
          place: 'Ukraine · live',
        },
        archive: {
          tagline: 'Web and mobile development since 2010.',
          body: 'Most client projects were delivered under NDA or have since been replaced. Public footprint: the Zapleo organisation on GitHub.',
          place: 'Ukraine, for clients in the US and Europe',
        },
      } as Record<string, { tagline: string; body: string; place?: string }>,
    },
    aiPitch: {
      eyebrow: 'Service · Custom AI build',
      heading1: 'I build AI assistants that ',
      headingEm: 'handle your leads',
      heading2: ' while you sleep.',
      features: [
        {
          title: 'Responds in seconds, not hours',
          body: 'Instagram DM at 2am, Telegram on a Sunday — the assistant answers immediately, qualifies the lead, books the appointment. Your team reviews the calendar Monday morning.',
        },
        {
          title: 'Your team trains it — no code',
          body: 'When the AI gives a wrong or outdated answer, any team member corrects it in a plain interface. The correction applies instantly across all channels. No developer ticket. No redeploy.',
        },
        {
          title: 'Custom build, 2–4 weeks',
          body: 'Built to your product, your pricing, your objection library. Connected to Instagram, Telegram, and WhatsApp. I build it; you run it. Full handover with a 30-day calibration window.',
        },
      ] as { title: string; body: string }[],
      proof: ['Live in production', 'Jakarta 2025 →', 'Instagram · Telegram · WhatsApp'] as string[],
      cta: 'Try Stepan →',
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
        ['Running in parallel', 'Pasijou (Weligama, LK) and Veranda (Nha Trang, VN) — both hospitality ventures, day-to-day with strong local teams.'],
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
      intro: 'Notes on putting AI into real operations: what worked, what broke, and what it cost. Nothing is published yet; essays will appear here as they are finished.',
      footnote: 'Want to hear when the first one is out? Write to dima@zapleo.com.',
      statusLabels: { soon: 'Soon', drafting: 'Drafting', published: 'min · EN' },
    },
    contact: {
      eyebrow: 'Chapter 06 · Direct line',
      title1: 'Working on something interesting?',
      title2: 'Skip the form.',
      intro: 'No form — write directly. A few sentences about your business and what is not working are enough to start.',
      footnote: 'Why no form on this page? Forms get triaged. Direct emails get answered. If you really prefer a form, this mailto link pre-fills one for you.',
      channels: [
        { label: 'Email', value: 'dima@zapleo.com', note: 'Best for anything that needs a paper trail.' },
        { label: 'Telegram', value: '@zapleosoft', note: 'Quickest for a short question.' },
        { label: 'WhatsApp', value: '+380 99 481 1889', note: 'Voice notes welcome.' },
        { label: 'LinkedIn', value: 'in/dmitriy-zaporozhets', note: 'For formal intros.' },
        { label: 'Instagram', value: '@ai_dimaz', note: 'Personal account.' },
      ],
    },
    colophon: {
      eyebrow: 'Appendix · Colophon',
      title1: 'How this site is',
      title2: 'actually',
      title3: 'made.',
      intro: 'How this site is made: the stack, the fonts and the role of AI in building it.',
      sections: { stack: 'Stack', type: 'Type', infra: 'Infrastructure', ai: 'AI / human split (honest disclosure)', source: 'Source code & audits' },
      sourceNotes: [
        'Content © Dmitriy Zaporozhets.',
        'Accessibility target: WCAG 2.2 AA. Found a violation? Tell me at dima@zapleo.com.',
        'There is no form on this site and Google Analytics is not loaded. The web server and CDN may keep technical logs. If other analytics is added, this text will be updated.',
      ],
      notes: {
        analytics: 'No Google Analytics script is loaded by this version. Hosting and CDN services may process technical request logs. If other analytics is added, this text will be updated.',
        ai: 'Built with Claude and Codex; decisions reviewed by Dmitriy. AI-assisted writing with source checks and explicit limits on project results.',
        contact: 'Direct email and messaging links; no website form.',
        scopeFee: 'Scope and fee',
      },
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
      liveLinks: 'Посилання',
    },
    case: {
      stats: { place: 'Місце', role: 'Роль', team: 'Команда', stack: 'Стек' },
    },
    nav: {
      work: 'Роботи',
      journey: 'Шлях',
      now: 'Зараз',
      journal: 'Журнал',
      contact: 'Контакти',
      colophon: 'Колофон',
      aiDima: 'AI-Dima →',
    },
    home: {
      eyebrow: 'Дніпро (UA) → Велігама (LK) → Нья Чанг (VN) → Джакарта (ID) · Оператор. Викладач. AI-доповнений.',
      headLine1: 'Спочатку оператор.',
      headLine2: 'Зараз — викладач.',
      lead:
        'Дванадцять років агенції в Дніпрі. 40+ проєктів. Зараз керую філією IT академії в Джакарті та будую AI-доповнений підхід до викладання технологій для Південно-Східної Азії.',
      ctaWork: 'Дивитися роботи',
      ctaJourney: 'Шлях',
      ctaContact: 'Пряма лінія →',
      contextNote: 'Українська сторінка веде з архіву: Дніпро, агенція 2010-2022, перехід на південь у 2022-му. Англомовну версію з акцентом на Джакарту дивіться через перемикач EN угорі.',
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
      thenEyebrow: 'Тоді · Архів · Дніпро (UA) → Велігама (LK) → Нья Чанг (VN)',
      cards: [
        { year: '2010', place: 'Дніпро · UA', title: 'Два ноутбуки, один офіс', body: 'Заснував Zapleo. Веб, мобайл, бренд-мікросайти. Офіс на Шевченка 59, потім Проспект Пушкіна 33.' },
        { year: '2014', place: 'Дніпро · UA', title: 'Субпідрядна машина', body: 'Спринти для студій, що працюють із classifieds, retail, hardware-запусками. Команда зростає до восьми.' },
        { year: '2018', place: 'Дніпро · UA', title: 'Сорок проєктів углиб', body: 'Косметика, асоціації, новинні платформи, Android-додатки. PHP + Rails + JS.' },
        { year: '2022', place: 'Велігама · LK', title: 'Шрі-Ланка. Відкривається Pasijou.', body: '24 лютого. Переїзд родини на південь. Відкриваємо Pasijou — коворкінг + ресторан + кінотеатр на південному березі.' },
        { year: '2023', place: 'Нья Чанг · VN', title: 'Veranda', body: 'Veranda.my — другий гастро-проєкт, тепер у Нья Чанг, В\'єтнам. Той самий плейбук: робота та їжа в одному просторі.' },
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
        'Дмитро Запорожець · ШІ в живому бізнесі.\nЗасновник Zapleo з 2010 року. Нячанг, В’єтнам, працюю з усім світом.',
      mapLabel: 'Мапа',
      aroundLabel: 'В мережі',
      directLabel: 'Напряму',
      copy: '© {year} · Zapleo · Створено з Claude і Codex, перевірено Дмитром.',
      meta: 'Нячанг, GMT+7',
    },
    work: {
      eyebrow: 'Розділ 02 · Роботи',
      title1: 'Те, що можна перевірити.',
      title2: 'Решта — на запит.',
      intro: 'ШІ-системи для реальної роботи, два заклади гостинності — одним я співволодію зараз, іншим співволодів до 2026 року, — і клієнтські проєкти Zapleo з 2010 року. Усе нижче можна перевірити; проєкти під NDA можу показати під час дзвінка.',
      eras: {
        ai: 'ШІ-системи · 2026',
        hospitality: 'Гостинність · 2023 →',
        agency: 'Клієнтські проєкти Zapleo · з 2010',
      },
      teaser: {
        heading: 'ШІ-системи, гостинність, клієнтські проєкти.',
        headingEm: 'Більше — на запит.',
        archive: 'Усі роботи →',
      },
      items: {
        'ai-sales-assistant': {
          tagline: 'ШІ-розмови з продажу, підключені до CRM.',
          body: 'ШІ-агент для Instagram і WhatsApp. Він кваліфікував лідів мовою клієнта, звіряв відповіді про ціни, посилання й пропозиції з фактами бізнесу і передавав розмову людині з указаною причиною.',
          place: 'Для IT STEP Academy Jakarta',
        },
        aibroker: {
          tagline: 'Один шлюз для всіх ШІ-провайдерів.',
          body: 'Ключі провайдерів зберігаються в одному місці: виклики йдуть через шлюз або отримують тимчасовий доступ. Кожен виклик записується з оцінкою вартості, ліміти витрат задаються для кожного проєкту, а монітор виводить з ротації непрацюючі ключі та ключі, що вперлися в ліміт запитів.',
          place: 'Власний сервер',
        },
        veranda: {
          tagline: 'Ресторан, яким я співволодію і керую.',
          body: 'Відкрився в листопаді 2025 року. Я налаштував для нього операційне програмне забезпечення: інтеграцію з POS, автоматичну звірку платежів, кухонний екран зі сповіщеннями про час і звітність персоналу через Telegram.',
          place: 'Нячанг, В’єтнам',
        },
        pasijou: {
          tagline: 'Коворкінг і ресторан на південному узбережжі.',
          body: 'Співволодів і керував з лютого 2023 року до завершення оренди в березні 2026-го. Беззбитковість за вісім місяців; оцінка гостей 4,9 з 5, поки проєкт працював.',
          place: 'Велігама, Шрі-Ланка',
        },
        apcu: {
          tagline: 'Сайт Асоціації парфумерії та косметики України.',
          body: 'Розроблений Zapleo, і досі його веде власна редакція асоціації. На сайті вказано, що його розробила Zapleo.',
          place: 'Україна · працює',
        },
        archive: {
          tagline: 'Веб- і мобільна розробка з 2010 року.',
          body: 'Більшість клієнтських проєктів зроблено під NDA або їх відтоді замінили. Публічний слід — організація Zapleo на GitHub.',
          place: 'Україна, для клієнтів зі США та Європи',
        },
      } as Record<string, { tagline: string; body: string; place?: string }>,
    },
    aiPitch: {
      eyebrow: 'Сервіс · Кастомна AI-розробка',
      heading1: 'Я будую AI-асистентів, які ',
      headingEm: 'обробляють ваші ліди',
      heading2: ' поки ви спите.',
      features: [
        {
          title: 'Відповідає за секунди, а не за години',
          body: 'Instagram DM о 2-й ночі, Telegram у неділю — асистент відповідає миттєво, кваліфікує ліда, записує на зустріч. Команда переглядає календар у понеділок вранці.',
        },
        {
          title: 'Команда навчає — без коду',
          body: 'Коли AI дає неправильну або застарілу відповідь, будь-який член команди виправляє це через простий інтерфейс. Виправлення застосовується миттєво на всіх каналах. Жодного квитка розробнику. Жодного деплою.',
        },
        {
          title: 'Кастомна розробка, 2–4 тижні',
          body: 'Побудовано під ваш продукт, ваш прайс, вашу бібліотеку заперечень. Підключено до Instagram, Telegram та WhatsApp. Я будую — ви запускаєте. Повне передання з 30-денним вікном калібрування.',
        },
      ] as { title: string; body: string }[],
      proof: ['Live in production', 'Джакарта 2025 →', 'Instagram · Telegram · WhatsApp'] as string[],
      cta: 'Спробувати Stepan →',
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
        ['Веду паралельно', 'Pasijou (Велігама, LK) та Veranda (Нья Чанг, VN) — обидва гастро-проєкти на щодень із сильними локальними командами.'],
        ['Читаю', '"How Big Things Get Done" (Флівб\'єрг) на полиці PM. "AI Engineering" (Чіп Хюйен) — для курикулуму.'],
        ['Вчу', 'Bahasa Indonesia (повільно). React 19 server components у проді (швидше).'],
        ['Відкритий для', 'Коротких дзвінків із людьми, що будують EdTech в SEA, з тими хто керує мультикраїновими командами, та з українськими інженерами, що планують переїзд на схід.'],
      ] as [string, string][],
      footnote: 'Сторінка "now" — конвенція від Дерека Сіверса. Розповідає, на чому людина зосереджена прямо зараз, замість того щоб гадати по соцмережах.',
    },
    journal: {
      eyebrow: 'Розділ 05 · Журнал',
      title1: 'Довгі тексти, без поспіху і',
      title2: 'з власною позицією.',
      intro: 'Нотатки про впровадження ШІ в реальну роботу: що спрацювало, що зламалося і скільки це коштувало. Поки нічого не опубліковано; есеї з’являтимуться тут, щойно будуть готові.',
      footnote: 'Хочете дізнатися, коли вийде перший? Напишіть на dima@zapleo.com.',
      statusLabels: { soon: 'Скоро', drafting: 'Чернетка', published: 'хв · EN' },
    },
    contact: {
      eyebrow: 'Розділ 06 · Пряма лінія',
      title1: 'Працюєте над чимось цікавим?',
      title2: 'Обійдімося без форми.',
      intro: 'Форми немає — пишіть напряму. Щоб почати, досить кількох речень про ваш бізнес і про те, що не працює.',
      footnote: 'Чому на цій сторінці немає форми? Заявки з форм сортують. На прямі листи відповідають. Якщо вам усе ж зручніша форма, це посилання mailto заповнить її за вас.',
      channels: [
        { label: 'Email', value: 'dima@zapleo.com', note: 'Найкраще для всього, що варто зафіксувати письмово.' },
        { label: 'Telegram', value: '@zapleosoft', note: 'Найшвидше для короткого питання.' },
        { label: 'WhatsApp', value: '+380 99 481 1889', note: 'Голосові повідомлення — будь ласка.' },
        { label: 'LinkedIn', value: 'in/dmitriy-zaporozhets', note: 'Для офіційних знайомств.' },
        { label: 'Instagram', value: '@ai_dimaz', note: 'Особистий акаунт.' },
      ],
    },
    colophon: {
      eyebrow: 'Додаток · Колофон',
      title1: 'Як цей сайт',
      title2: 'насправді',
      title3: 'зроблено.',
      intro: 'Як зроблено цей сайт: стек, шрифти і роль ШІ в його створенні.',
      sections: { stack: 'Стек', type: 'Шрифти', infra: 'Інфраструктура', ai: 'Розподіл між ШІ і людиною (чесно)', source: 'Вихідний код і аудити' },
      sourceNotes: [
        'Контент © Дмитро Запорожець.',
        'Ціль доступності: WCAG 2.2 AA. Знайшли порушення? Напишіть мені на dima@zapleo.com.',
        'На цьому сайті немає форм, і Google Analytics не завантажується. Вебсервер і CDN можуть зберігати технічні журнали. Якщо буде додано іншу аналітику, цей текст оновиться.',
      ],
      notes: {
        analytics: 'Ця версія сайту не завантажує Google Analytics. Хостинг і CDN можуть обробляти технічні журнали запитів. Якщо з’явиться інша аналітика, цей текст буде оновлено.',
        ai: 'Зроблено з Claude і Codex; рішення перевіряє Дмитро. Тексти написані з допомогою ШІ, з перевіркою джерел і чесними обмеженнями щодо результатів проєктів.',
        contact: 'Пряма пошта й посилання на месенджери; форми на сайті немає.',
        scopeFee: 'Обсяг і вартість',
      },
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
      liveLinks: 'Ссылки',
    },
    case: {
      stats: { place: 'Место', role: 'Роль', team: 'Команда', stack: 'Стек' },
    },
    nav: {
      work: 'Работы',
      journey: 'Путь',
      now: 'Сейчас',
      journal: 'Журнал',
      contact: 'Контакты',
      colophon: 'Колофон',
      aiDima: 'AI-Dima →',
    },
    home: {
      eyebrow: 'Днепр (UA) → Велигама (LK) → Нья Чанг (VN) → Джакарта (ID) · Оператор. Преподаватель. AI-дополненный.',
      headLine1: 'Сначала оператор.',
      headLine2: 'Сейчас — преподаватель.',
      lead:
        'Двенадцать лет агентства в Днепре. 40+ проектов. Сейчас руковожу филиалом IT-академии в Джакарте и строю AI-дополненный подход к преподаванию для Юго-Восточной Азии.',
      ctaWork: 'Смотреть работы',
      ctaJourney: 'Путь',
      ctaContact: 'Прямая линия →',
      contextNote: 'Русская версия ведёт с архива: Днепр, агентство 2010-2022, переезд на юг в 2022-м. Английская версия с акцентом на Джакарту — через переключатель EN вверху.',
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
      thenEyebrow: 'Тогда · Архив · Днепр (UA) → Велигама (LK) → Нья Чанг (VN)',
      cards: [
        { year: '2010', place: 'Днепр · UA', title: 'Два ноутбука, один офис', body: 'Основал Zapleo. Веб, мобайл, бренд-микросайты. Офис на Шевченко 59, потом Проспект Пушкина 33.' },
        { year: '2014', place: 'Днепр · UA', title: 'Субподрядная машина', body: 'Спринты для студий, работающих с classifieds, retail, hardware-запусками. Команда вырастает до восьми.' },
        { year: '2018', place: 'Днепр · UA', title: 'Сорок проектов вглубь', body: 'Косметика, ассоциации, новостные платформы, Android-приложения. PHP + Rails + JS.' },
        { year: '2022', place: 'Велигама · LK', title: 'Шри-Ланка. Открывается Pasijou.', body: '24 февраля. Переезд семьи на юг. Открываем Pasijou — коворкинг + ресторан + кинотеатр на южном берегу.' },
        { year: '2023', place: 'Нья Чанг · VN', title: 'Veranda', body: 'Veranda.my — второй гастро-проект, теперь в Нья Чанге, Вьетнам. Тот же плейбук: работа и еда в одном пространстве.' },
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
        'Дмитрий Запорожец · ИИ в живом бизнесе.\nОснователь Zapleo с 2010 года. Нячанг, Вьетнам, работаю по всему миру.',
      mapLabel: 'Карта',
      aroundLabel: 'В сети',
      directLabel: 'Напрямую',
      copy: '© {year} · Zapleo · Сделано с Claude и Codex, проверено Дмитрием.',
      meta: 'Нячанг, GMT+7',
    },
    work: {
      eyebrow: 'Глава 02 · Проекты',
      title1: 'То, что можно проверить.',
      title2: 'Остальное — по запросу.',
      intro: 'ИИ-системы для реальной работы, два бизнеса в гостеприимстве — в одном я совладелец сейчас, в другом был до 2026 года, — и клиентские проекты Zapleo с 2010 года. Всё, что ниже, можно проверить; проекты под NDA могу показать на созвоне.',
      eras: {
        ai: 'ИИ-системы · 2026',
        hospitality: 'Гостеприимство · 2023 →',
        agency: 'Клиентские проекты Zapleo · с 2010',
      },
      teaser: {
        heading: 'ИИ-системы, гостеприимство, клиентские проекты.',
        headingEm: 'Остальное — по запросу.',
        archive: 'Все проекты →',
      },
      items: {
        'ai-sales-assistant': {
          tagline: 'ИИ-продажи в переписке, связанные с CRM.',
          body: 'ИИ-агент для Instagram и WhatsApp. Квалифицировал заявки на языке клиента, сверял ответы о ценах, ссылках и предложениях с фактами бизнеса и передавал диалог человеку с указанием причины.',
          place: 'Для IT STEP Academy Jakarta',
        },
        aibroker: {
          tagline: 'Единый шлюз ко всем ИИ-провайдерам.',
          body: 'Ключи провайдеров хранятся в одном месте: вызовы идут через шлюз или получают временный доступ. Каждый вызов записывается с оценкой стоимости, лимиты расходов задаются для каждого проекта, а мониторинг убирает из ротации мёртвые ключи и ключи, упёршиеся в лимит.',
          place: 'Собственный сервер',
        },
        veranda: {
          tagline: 'Ресторан, совладельцем и управляющим которого я являюсь.',
          body: 'Открылся в ноябре 2025 года. Я настроил его операционный софт: интеграцию с кассой, автоматическую сверку платежей, кухонный экран с оповещениями по времени и отчёты персонала через Telegram.',
          place: 'Нячанг, Вьетнам',
        },
        pasijou: {
          tagline: 'Коворкинг и ресторан на южном побережье.',
          body: 'Совладелец и управляющий с февраля 2023 года до окончания аренды в марте 2026-го. Безубыточность за восемь месяцев; оценка гостей 4,9 из 5 всё время работы.',
          place: 'Велигама, Шри-Ланка',
        },
        apcu: {
          tagline: 'Сайт Ассоциации парфюмерии и косметики Украины.',
          body: 'Сделан Zapleo, ведут его редакторы самой ассоциации. На сайте указано, что разработала его Zapleo.',
          place: 'Украина · работает',
        },
        archive: {
          tagline: 'Веб- и мобильная разработка с 2010 года.',
          body: 'Большинство клиентских проектов сделаны под NDA или с тех пор заменены. Публичный след — организация Zapleo на GitHub.',
          place: 'Украина, для клиентов из США и Европы',
        },
      } as Record<string, { tagline: string; body: string; place?: string }>,
    },
    aiPitch: {
      eyebrow: 'Сервис · Кастомная AI-разработка',
      heading1: 'Я строю AI-ассистентов, которые ',
      headingEm: 'обрабатывают ваши лиды',
      heading2: ' пока вы спите.',
      features: [
        {
          title: 'Отвечает за секунды, не за часы',
          body: 'Instagram DM в 2 часа ночи, Telegram в воскресенье — ассистент отвечает мгновенно, квалифицирует лид, записывает на встречу. Команда смотрит календарь в понедельник утром.',
        },
        {
          title: 'Команда обучает — без кода',
          body: 'Когда AI даёт неправильный или устаревший ответ, любой член команды исправляет это через простой интерфейс. Исправление применяется мгновенно по всем каналам. Никакого тикета разработчику. Никакого деплоя.',
        },
        {
          title: 'Кастомная разработка, 2–4 недели',
          body: 'Построено под ваш продукт, ваш прайс, вашу библиотеку возражений. Подключено к Instagram, Telegram и WhatsApp. Я строю — вы запускаете. Полная передача с 30-дневным окном калибровки.',
        },
      ] as { title: string; body: string }[],
      proof: ['Live in production', 'Джакарта 2025 →', 'Instagram · Telegram · WhatsApp'] as string[],
      cta: 'Попробовать Stepan →',
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
        ['Веду параллельно', 'Pasijou (Велигама, LK) и Veranda (Нья Чанг, VN) — оба гастро-проекта на ежедневке с сильными локальными командами.'],
        ['Читаю', '"How Big Things Get Done" (Флибьорг) на полке PM. "AI Engineering" (Чип Хюйен) — для куррикулума.'],
        ['Учу', 'Bahasa Indonesia (медленно). React 19 server components в проде (быстрее).'],
        ['Открыт для', 'Коротких звонков с людьми, строящими EdTech в SEA, с теми кто управляет мультистрановыми командами, и с украинскими инженерами, планирующими переезд на восток.'],
      ] as [string, string][],
      footnote: 'Страница "now" — конвенция от Дерека Сиверса. Рассказывает, на чём человек сосредоточен прямо сейчас, вместо того чтобы гадать по соцсетям.',
    },
    journal: {
      eyebrow: 'Глава 05 · Журнал',
      title1: 'Длинно, неспешно и',
      title2: 'со своим мнением.',
      intro: 'Заметки о том, как внедрять ИИ в реальную работу: что сработало, что сломалось и во что это обошлось. Пока ничего не опубликовано; статьи будут появляться здесь по мере готовности.',
      footnote: 'Хотите узнать, когда выйдет первая? Напишите на dima@zapleo.com.',
      statusLabels: { soon: 'Скоро', drafting: 'В работе', published: 'мин · EN' },
    },
    contact: {
      eyebrow: 'Глава 06 · Напрямую',
      title1: 'Занимаетесь чем-то интересным?',
      title2: 'Без форм.',
      intro: 'Формы нет — пишите напрямую. Чтобы начать, достаточно пары предложений о вашем бизнесе и о том, что не работает.',
      footnote: 'Почему на странице нет формы? Заявки из форм сортируют. На прямые письма отвечают. Если вам всё же удобнее форма, эта mailto-ссылка заполнит письмо за вас.',
      channels: [
        { label: 'Email', value: 'dima@zapleo.com', note: 'Лучше всего для всего, что должно остаться в переписке.' },
        { label: 'Telegram', value: '@zapleosoft', note: 'Быстрее всего для короткого вопроса.' },
        { label: 'WhatsApp', value: '+380 99 481 1889', note: 'Голосовые — пожалуйста.' },
        { label: 'LinkedIn', value: 'in/dmitriy-zaporozhets', note: 'Для официальных знакомств.' },
        { label: 'Instagram', value: '@ai_dimaz', note: 'Личный аккаунт.' },
      ],
    },
    colophon: {
      eyebrow: 'Приложение · Колофон',
      title1: 'Как этот сайт',
      title2: 'на самом деле',
      title3: 'сделан.',
      intro: 'Как сделан этот сайт: стек, шрифты и роль ИИ в его создании.',
      sections: { stack: 'Стек', type: 'Шрифты', infra: 'Инфраструктура', ai: 'Что сделал ИИ, а что человек (честно)', source: 'Исходный код и аудиты' },
      sourceNotes: [
        'Контент © Дмитрий Запорожец.',
        'Цель по доступности: WCAG 2.2 AA. Нашли нарушение? Напишите мне на dima@zapleo.com.',
        'На сайте нет форм, Google Analytics не подключён. Веб-сервер и CDN могут хранить технические логи. Если добавится другая аналитика, этот текст будет обновлён.',
      ],
      notes: {
        analytics: 'Эта версия сайта не загружает Google Analytics. Хостинг и CDN могут обрабатывать технические журналы запросов. Если появится другая аналитика, этот текст будет обновлён.',
        ai: 'Сделано с Claude и Codex; решения проверяет Дмитрий. Тексты написаны с помощью ИИ, с проверкой источников и честными ограничениями по результатам проектов.',
        contact: 'Прямая почта и ссылки на мессенджеры; формы на сайте нет.',
        scopeFee: 'Объём и стоимость',
      },
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
      liveLinks: 'Tautan',
    },
    case: {
      stats: { place: 'Lokasi', role: 'Peran', team: 'Tim', stack: 'Stack' },
    },
    nav: {
      work: 'Karya',
      journey: 'Perjalanan',
      now: 'Sekarang',
      journal: 'Jurnal',
      contact: 'Kontak',
      colophon: 'Colophon',
      aiDima: 'AI-Dima →',
    },
    home: {
      eyebrow: 'Dnipro (UA) → Weligama (LK) → Nha Trang (VN) → Jakarta (ID) · Operator. Pendidik. AI-augmented.',
      headLine1: 'Operator dulu.',
      headLine2: 'Pendidik sekarang.',
      lead:
        'Branch Director IT STEP Academy Jakarta. Dua belas tahun mengelola agensi web di Ukraina, 40+ proyek klien. Sekarang membangun jalur karier tech di Asia Tenggara — dengan AI dalam alur kerja, manusia di kursi.',
      ctaWork: 'Lihat karya',
      ctaJourney: 'Perjalanan',
      ctaContact: 'Hubungi langsung →',
      contextNote: 'Halaman Indonesia membuka cerita dengan IT STEP Jakarta dan kursus Vibe Coding yang sedang dibangun. Untuk arsip agensi Dnipro yang lebih panjang — pilih EN di pojok kanan atas.',
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
      thenEyebrow: 'Dulu · Arsip · Dnipro (UA) → Weligama (LK) → Nha Trang (VN)',
      cards: [
        { year: '2010', place: 'Dnipro · UA', title: 'Dua laptop, satu kantor', body: 'Mendirikan Zapleo. Web, mobile, microsite brand. Kantor di Shevchenko 59, lalu Prospekt Pushkina 33.' },
        { year: '2014', place: 'Dnipro · UA', title: 'Mesin subkontrak', body: 'Sprint untuk studio yang bekerja di classifieds, retail, peluncuran hardware. Tim tumbuh menjadi delapan.' },
        { year: '2018', place: 'Dnipro · UA', title: 'Empat puluh proyek dalam', body: 'E-commerce kosmetik, portal asosiasi, platform berita, aplikasi Android. PHP + Rails + JS.' },
        { year: '2022', place: 'Weligama · LK', title: 'Sri Lanka. Pasijou buka.', body: '24 Februari. Bawa keluarga ke selatan. Buka Pasijou — coworking + restoran + bioskop di pesisir selatan.' },
        { year: '2023', place: 'Nha Trang · VN', title: 'Veranda', body: 'Veranda.my — usaha hospitality kedua, kali ini di Nha Trang, Vietnam. Playbook sama: kerja dan makanan dalam satu ruangan.' },
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
        'Dmitriy Zaporozhets · AI di bisnis nyata.\nPendiri Zapleo sejak 2010. Nha Trang, Vietnam, bekerja untuk klien di seluruh dunia.',
      mapLabel: 'Peta',
      aroundLabel: 'Di internet',
      directLabel: 'Langsung',
      copy: '© {year} · Zapleo · Dibuat dengan Claude dan Codex, diperiksa oleh Dmitriy.',
      meta: 'Nha Trang, GMT+7',
    },
    work: {
      eyebrow: 'Bab 02 · Karya',
      title1: 'Bagian yang bisa dibuktikan.',
      title2: 'Sisanya atas permintaan.',
      intro: 'Sistem AI yang dibangun untuk operasional nyata, dua bisnis hospitality — satu saya miliki bersama sekarang, satu lagi sampai 2026 — dan pekerjaan klien dari Zapleo sejak 2010. Semua yang ada di bawah ini bisa dicek; proyek di bawah NDA bisa saya jelaskan lewat panggilan.',
      eras: {
        ai: 'Sistem AI · 2026',
        hospitality: 'Hospitality · 2023 →',
        agency: 'Pekerjaan klien Zapleo · sejak 2010',
      },
      teaser: {
        heading: 'Sistem AI, hospitality, pekerjaan klien.',
        headingEm: 'Selebihnya atas permintaan.',
        archive: 'Semua karya →',
      },
      items: {
        'ai-sales-assistant': {
          tagline: 'Percakapan penjualan AI yang terhubung ke CRM.',
          body: 'AI agent untuk Instagram dan WhatsApp. Agent ini mengkualifikasi leads dalam bahasa pelanggan, mengecek balasan tentang harga, link, dan penawaran terhadap fakta bisnis, lalu menyerahkan percakapan ke manusia dengan alasan yang jelas.',
          place: 'Untuk IT STEP Academy Jakarta',
        },
        aibroker: {
          tagline: 'Satu gateway untuk semua penyedia AI.',
          body: 'Key penyedia disimpan di satu tempat: panggilan lewat gateway atau mendapat akses sewa berbatas waktu. Setiap panggilan dicatat dengan estimasi biaya, batas pengeluaran diatur per proyek, dan sebuah monitor mengeluarkan key yang mati atau terkena rate limit dari rotasi.',
          place: 'Self-hosted',
        },
        veranda: {
          tagline: 'Restoran yang saya miliki bersama dan kelola.',
          body: 'Dibuka pada November 2025. Saya menyiapkan software operasionalnya: integrasi POS, pencocokan pembayaran otomatis, layar dapur dengan peringatan waktu, dan laporan staf lewat Telegram.',
          place: 'Nha Trang, Vietnam',
        },
        pasijou: {
          tagline: 'Coworking dan restoran di pantai selatan.',
          body: 'Dimiliki bersama dan dikelola dari Februari 2023 sampai masa sewa berakhir pada Maret 2026. Titik impas dalam delapan bulan; rating tamu 4,9 dari 5 selama beroperasi.',
          place: 'Weligama, Sri Lanka',
        },
        apcu: {
          tagline: 'Situs web Asosiasi Parfum dan Kosmetik Ukraina.',
          body: 'Dibangun oleh Zapleo dan masih dikelola oleh editor asosiasi sendiri. Situs ini mencantumkan Zapleo sebagai pengembangnya.',
          place: 'Ukraina · aktif',
        },
        archive: {
          tagline: 'Pengembangan web dan mobile sejak 2010.',
          body: 'Sebagian besar proyek klien dikerjakan di bawah NDA atau sudah diganti. Jejak publik: organisasi Zapleo di GitHub.',
          place: 'Ukraina, untuk klien di AS dan Eropa',
        },
      } as Record<string, { tagline: string; body: string; place?: string }>,
    },
    aiPitch: {
      eyebrow: 'Layanan · Build AI kustom',
      heading1: 'Saya membangun asisten AI yang ',
      headingEm: 'menangani leads Anda',
      heading2: ' saat Anda tidur.',
      features: [
        {
          title: 'Merespons dalam detik, bukan jam',
          body: 'DM Instagram jam 2 pagi, Telegram hari Minggu — asisten menjawab langsung, memenuhi syarat leads, memesan janji. Tim Anda meninjau kalender Senin pagi.',
        },
        {
          title: 'Tim Anda melatihnya — tanpa kode',
          body: 'Saat AI memberi jawaban yang salah atau ketinggalan zaman, siapa pun di tim bisa mengoreksinya di antarmuka sederhana. Koreksi langsung berlaku di semua saluran. Tidak perlu tiket developer. Tidak perlu redeploy.',
        },
        {
          title: 'Build kustom, 2–4 minggu',
          body: 'Dibangun untuk produk, harga, dan perpustakaan keberatan Anda. Terhubung ke Instagram, Telegram, dan WhatsApp. Saya membangun; Anda menjalankannya. Serah terima penuh dengan jendela kalibrasi 30 hari.',
        },
      ] as { title: string; body: string }[],
      proof: ['Live in production', 'Jakarta 2025 →', 'Instagram · Telegram · WhatsApp'] as string[],
      cta: 'Coba Stepan →',
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
        ['Berjalan paralel', 'Pasijou (Weligama, LK) dan Veranda (Nha Trang, VN) — dua usaha hospitality, harian dengan tim lokal yang kuat.'],
        ['Membaca', '"How Big Things Get Done" (Flyvbjerg) untuk PM bench. "AI Engineering" (Chip Huyen) untuk kerja kurikulum.'],
        ['Belajar', 'Bahasa Indonesia (perlahan). React 19 server components di produksi (lebih cepat).'],
        ['Terbuka untuk', 'Panggilan singkat dengan orang yang membangun EdTech di SEA, siapa pun yang menjalankan tim lintas negara, dan engineer Ukraina yang merencanakan pindah ke timur.'],
      ] as [string, string][],
      footnote: 'Halaman "now" konvensi dari Derek Sivers. Memberitahumu fokus seseorang sekarang, bukan menebak dari feed sosial.',
    },
    journal: {
      eyebrow: 'Bab 05 · Jurnal',
      title1: 'Tulisan panjang, tidak terburu-buru, dan',
      title2: 'punya sikap.',
      intro: 'Catatan tentang menerapkan AI di operasional nyata: apa yang berhasil, apa yang rusak, dan berapa biayanya. Belum ada yang diterbitkan; esai akan muncul di sini setelah selesai.',
      footnote: 'Ingin tahu saat tulisan pertama terbit? Kirim email ke dima@zapleo.com.',
      statusLabels: { soon: 'Segera', drafting: 'Sedang ditulis', published: 'menit · EN' },
    },
    contact: {
      eyebrow: 'Bab 06 · Jalur langsung',
      title1: 'Sedang mengerjakan sesuatu yang menarik?',
      title2: 'Lewati formulir.',
      intro: 'Tidak ada formulir — tulis langsung. Beberapa kalimat tentang bisnis Anda dan apa yang tidak berjalan sudah cukup untuk memulai.',
      footnote: 'Mengapa tidak ada formulir di halaman ini? Formulir disortir dulu. Email langsung dibalas. Jika Anda tetap lebih suka formulir, link mailto ini akan mengisinya untuk Anda.',
      channels: [
        { label: 'Email', value: 'dima@zapleo.com', note: 'Paling cocok untuk hal yang perlu jejak tertulis.' },
        { label: 'Telegram', value: '@zapleosoft', note: 'Paling cepat untuk pertanyaan singkat.' },
        { label: 'WhatsApp', value: '+380 99 481 1889', note: 'Voice note dipersilakan.' },
        { label: 'LinkedIn', value: 'in/dmitriy-zaporozhets', note: 'Untuk perkenalan formal.' },
        { label: 'Instagram', value: '@ai_dimaz', note: 'Akun pribadi.' },
      ],
    },
    colophon: {
      eyebrow: 'Lampiran · Kolofon',
      title1: 'Bagaimana situs ini',
      title2: 'sebenarnya',
      title3: 'dibuat.',
      intro: 'Bagaimana situs ini dibuat: stack, font, dan peran AI dalam membangunnya.',
      sections: { stack: 'Stack', type: 'Tipografi', infra: 'Infrastruktur', ai: 'Pembagian AI / manusia (pengungkapan jujur)', source: 'Kode sumber & audit' },
      sourceNotes: [
        'Konten © Dmitriy Zaporozhets.',
        'Target aksesibilitas: WCAG 2.2 AA. Menemukan pelanggaran? Beri tahu saya di dima@zapleo.com.',
        'Situs ini tidak memiliki formulir dan Google Analytics tidak dimuat. Web server dan CDN mungkin menyimpan log teknis. Jika analitik lain ditambahkan, teks ini akan diperbarui.',
      ],
      notes: {
        analytics: 'Versi situs ini tidak memuat Google Analytics. Layanan hosting dan CDN dapat memproses log teknis permintaan. Jika analitik lain ditambahkan, teks ini akan diperbarui.',
        ai: 'Dibangun dengan Claude dan Codex; keputusan ditinjau oleh Dmitriy. Teks ditulis dengan bantuan AI, dengan pengecekan sumber dan batasan yang jelas atas hasil proyek.',
        contact: 'Email langsung dan tautan ke aplikasi pesan; tidak ada formulir di situs.',
        scopeFee: 'Cakupan dan biaya',
      },
    },
  },
} satisfies Record<Locale, unknown>;

export function getDict(locale: Locale) {
  return DICTS[locale] ?? DICTS.en;
}
