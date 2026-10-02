import type { Locale } from '@/i18n/config';

type RecoveryCopy = {
  nav: string;
  home: {
    eyebrow: string;
    title: string;
    accent: string;
    lead: string;
    context: string;
    serviceLabel: string;
    serviceTitle: string;
    serviceBody: string;
    proofLabel: string;
    proofTitle: string;
    proofBody: string;
    cases: readonly { name: string; outcome: string; href: string }[];
    aboutTitle: string;
    aboutBody: string;
    contactTitle: string;
    contactBody: string;
    workLabel: string;
  };
  service: {
    eyebrow: string;
    title: string;
    intro: string;
    fitTitle: string;
    fitBody: string;
    fit: readonly string[];
    leaksTitle: string;
    leaks: readonly { title: string; body: string }[];
    deliverTitle: string;
    deliver: readonly { title: string; body: string }[];
    processTitle: string;
    process: readonly { title: string; body: string }[];
    proofTitle: string;
    proofBody: string;
    termsTitle: string;
    terms: readonly string[];
    fee: string;
    feeNote: string;
    cta: string;
    ctaNote: string;
    emailSubject: string;
    emailBody: string;
  };
  links: { offer: string; work: string; contact: string; email: string };
};

export const RECOVERY_COPY = {
  en: {
    nav: 'Revenue recovery',
    home: {
      eyebrow: 'Dmitriy Zaporozhets · AI integration · Remote from Vietnam',
      title: 'You already paid for the lead.',
      accent: 'Find out where it disappears.',
      lead: 'I trace the path from ad and first message through CRM, calls and handoffs. Then I show your team which gaps are real, what they may cost, and which fix is worth building first.',
      context: 'Founder of Zapleo (2010) and former IT STEP Jakarta branch director. I build AI systems with modern tools and take responsibility for the business logic and the result.',
      serviceLabel: 'A focused first engagement',
      serviceTitle: 'A ten-day diagnosis of your inbound funnel.',
      serviceBody: 'One funnel, one CRM, one month of real leads. You get measured losses, a financial model with assumptions, and a practical plan for the first repair. Fixed scope, fixed fee.',
      proofLabel: 'Selected work',
      proofTitle: 'Built inside real operations.',
      proofBody: 'I have run a sales and education operation, built an AI sales agent connected to CRM, and traced failures across thousands of calls and messages. The numbers below describe the work examined, not promised sales gains.',
      cases: [
        { name: 'Sales funnel diagnosis', outcome: 'A CRM report covering 1,956 calls reviewed; ad-to-lead attribution raised from 45.2% to 93.6%.', href: '/revenue-recovery/' },
        { name: 'Stepan', outcome: 'An AI sales agent connected to messaging and CRM, with human handover and checks on claims.', href: 'https://stepan2.zapleo.com/' },
        { name: 'AIbroker', outcome: 'A model gateway that routes requests across providers and keeps usage and costs visible.', href: '/work/aibroker/' },
      ],
      aboutTitle: 'A business operator who can build with AI.',
      aboutBody: 'I founded Zapleo in 2010 and later carried the P&L of an education branch. I do not sell myself as a traditional programmer. I can turn a commercial problem into a working system with AI-assisted development, testing and human review.',
      contactTitle: 'Tell me where leads get stuck.',
      contactBody: 'A short note about your lead volume, CRM and biggest suspected gap is enough to start. I will tell you whether this sprint fits.',
      workLabel: 'See selected work',
    },
    service: {
      eyebrow: 'Revenue recovery sprint · 10 business days',
      title: 'Find the sales your current funnel is missing.',
      intro: 'I examine one inbound path from source to CRM, first response, calls and handoff. You receive a measured diagnosis and a buildable first fix, based on your own data.',
      fitTitle: 'Who this is for',
      fitBody: 'Teams already buying or generating leads, with enough history to diagnose a pattern.',
      fit: ['Roughly 100+ inbound leads a month', 'A CRM plus message or call history', 'An owner or sales lead who can explain deal value and grant lawful access'],
      leaksTitle: 'What we look for',
      leaks: [
        { title: 'Slow or missing first response', body: 'How long real people waited, and which leads got no useful reply.' },
        { title: 'Calls and handoffs that died', body: 'Missed calls, unanswered callbacks and leads passed between people without ownership.' },
        { title: 'Marketing without a joined outcome', body: 'Where campaign source disappears before the sale, so spend cannot be compared with results.' },
      ],
      deliverTitle: 'What you receive',
      deliver: [
        { title: 'A loss map', body: 'Counts and examples for each break in the funnel, with a clear data-quality note.' },
        { title: 'An opportunity model', body: 'A range, not an invented revenue promise: assumptions, deal economics and what would change the result.' },
        { title: 'A first-fix blueprint', body: 'Prioritized actions, owner, effort, cost and an implementation specification for one pilot.' },
      ],
      processTitle: 'The ten-day sequence',
      process: [
        { title: '01 · Scope and access', body: 'Agree one funnel and one primary channel. Review exports and remove data we do not need.' },
        { title: '02 · Reconstruct and test', body: 'Follow a sample of leads across the systems, quantify the gaps and validate findings with your team.' },
        { title: '03 · Decide what to fix', body: 'Review the numbers together. Leave with an ordered plan and a demonstration on sanitized examples.' },
      ],
      proofTitle: 'Why I can do this',
      proofBody: 'At an education business, I reviewed a CRM report covering 1,956 calls, measured reply times across 10,879 answered incoming messages over 60 days, raised ad-to-lead attribution from 45.2% to 93.6%, and connected an AI sales agent to CRM events. Those are past project facts; they do not predict your result.',
      termsTitle: 'A bounded engagement',
      terms: ['One funnel, one CRM, one primary messaging or call channel, up to 30 days of history.', 'Requires usable exports and a responsible person to answer operational questions.', 'This sprint diagnoses and specifies a pilot. Production integration, ongoing operation and guaranteed revenue are outside its scope.'],
      fee: '$5,000 fixed project fee',
      feeNote: '$2,500 to start, $2,500 after the agreed deliverables are reviewed. Final scope is written down before payment.',
      cta: 'Ask for a fit call',
      ctaNote: 'Email me your company, monthly lead volume, CRM and the gap you suspect. If this service is not a fit, I will say so.',
      emailSubject: 'Revenue recovery sprint — fit call',
      emailBody: 'Company:\nMonthly inbound leads:\nCRM and main channel:\nWhat seems to be going wrong:\nYour time zone:',
    },
    links: { offer: 'Explore the sprint', work: 'Selected work', contact: 'Contact', email: 'Email Dmitriy' },
  },
  uk: {
    nav: 'Повернення лідів',
    home: {
      eyebrow: 'Дмитро Запорожець · AI-інтеграція · Віддалено з В’єтнаму',
      title: 'За ліда вже заплачено.',
      accent: 'Знайдімо, де він зникає.',
      lead: 'Я простежую шлях від реклами й першого повідомлення до CRM, дзвінків і передачі менеджеру. Показую, де є реальні втрати, скільки вони можуть коштувати та що варто виправити першим.',
      context: 'Колишній власник IT-компанії та директор філії IT STEP у Джакарті. Будую AI-системи сучасними інструментами й відповідаю за бізнес-логіку та результат.',
      serviceLabel: 'Перший конкретний проєкт',
      serviceTitle: 'Діагностика вхідної воронки за десять днів.',
      serviceBody: 'Одна воронка, одна CRM, місяць реальних лідів. Ви отримуєте виміряні втрати, фінансову модель із припущеннями та план першого виправлення.',
      proofLabel: 'Вибрані роботи',
      proofTitle: 'Системи в реальних процесах.',
      proofBody: 'Я керував продажами й навчальною операцією, створив AI-агента з інтеграцією в CRM і дослідив тисячі дзвінків та повідомлень. Ці цифри описують обсяг аналізу, а не обіцяний приріст продажів.',
      cases: [
        { name: 'Діагностика продажів', outcome: 'Розібрано звіт CRM про 1 956 дзвінків; прив’язку реклами до лідів підвищено з 45,2% до 93,6%.', href: '/uk/revenue-recovery/' },
        { name: 'Stepan', outcome: 'AI-агент для переписки та CRM з передачею людині й перевіркою тверджень.', href: 'https://stepan2.zapleo.com/' },
        { name: 'AIbroker', outcome: 'Шлюз моделей із вибором провайдера та контролем використання й витрат.', href: '/uk/work/aibroker/' },
      ],
      aboutTitle: 'Бізнес-оператор, який будує з AI.',
      aboutBody: 'Я заснував Zapleo у 2010 році, а згодом відповідав за P&L навчальної філії. Я не називаю себе класичним програмістом: перетворюю бізнес-проблему на робочу систему за допомогою AI-розробки, тестування та людської перевірки.',
      contactTitle: 'Розкажіть, де застрягають ліди.',
      contactBody: 'Для початку досить коротко описати обсяг заявок, CRM і ймовірну проблему. Я скажу, чи підходить вам цей формат.',
      workLabel: 'Переглянути роботи',
    },
    service: {
      eyebrow: 'Діагностика втрат · 10 робочих днів',
      title: 'Знайдіть продажі, які губить ваша поточна воронка.',
      intro: 'Я перевіряю один шлях ліда від джерела до CRM, першої відповіді, дзвінків і передачі менеджеру. Ви отримуєте виміряну проблему та план першого виправлення.',
      fitTitle: 'Кому це підходить',
      fitBody: 'Командам, які вже залучають лідів і мають достатньо історії для аналізу.',
      fit: ['Приблизно 100+ вхідних лідів на місяць', 'CRM та історія повідомлень або дзвінків', 'Власник чи керівник продажів, який знає цінність угоди та надасть законний доступ'],
      leaksTitle: 'Що перевіряємо',
      leaks: [
        { title: 'Повільна або відсутня відповідь', body: 'Скільки чекали люди та хто так і не отримав змістовної відповіді.' },
        { title: 'Зірвані дзвінки й передачі', body: 'Пропущені дзвінки, повернення без відповіді та заявки без відповідального.' },
        { title: 'Реклама без зв’язку з продажем', body: 'Де губиться джерело кампанії й чому витрати не зіставити з результатом.' },
      ],
      deliverTitle: 'Що ви отримуєте',
      deliver: [
        { title: 'Карту втрат', body: 'Кількість і приклади збоїв, а також застереження щодо якості даних.' },
        { title: 'Модель можливостей', body: 'Діапазон із припущеннями та економікою угоди замість вигаданої обіцянки доходу.' },
        { title: 'План першого виправлення', body: 'Пріоритети, відповідальні, зусилля, вартість і технічне завдання для пілота.' },
      ],
      processTitle: 'Як проходять десять днів',
      process: [
        { title: '01 · Межі й доступ', body: 'Погоджуємо одну воронку й основний канал. Перевіряємо експорт і прибираємо зайві дані.' },
        { title: '02 · Відновлення шляху', body: 'Проходимо вибірку лідів через системи, рахуємо втрати й звіряємо висновки з командою.' },
        { title: '03 · Рішення', body: 'Разом переглядаємо цифри. Ви отримуєте план і демонстрацію на знеособлених прикладах.' },
      ],
      proofTitle: 'Мій досвід',
      proofBody: 'У навчальному бізнесі я розібрав звіт CRM про 1 956 дзвінків, виміряв час відповіді на 10 879 вхідних повідомлень за 60 днів, підвищив прив’язку реклами до лідів із 45,2% до 93,6% і підключив ШІ-агента з продажів до подій CRM. Це факти минулого проєкту; вони не прогнозують ваш результат.',
      termsTitle: 'Чіткі межі',
      terms: ['Одна воронка, одна CRM, один основний канал, до 30 днів історії.', 'Потрібні придатні експорти й людина, яка відповість на питання про процес.', 'Повноцінне впровадження, подальша підтримка та гарантія доходу не входять у діагностику.'],
      fee: 'Фіксована вартість — $5 000',
      feeNote: '$2 500 на старті й $2 500 після перегляду погоджених результатів. Обсяг роботи фіксуємо до оплати.',
      cta: 'Обговорити відповідність задачі',
      ctaNote: 'Напишіть назву компанії, кількість лідів, CRM і підозрювану проблему. Якщо формат не підійде, скажу прямо.',
      emailSubject: 'Діагностика втрат лідів — розмова',
      emailBody: 'Компанія:\nВхідних лідів на місяць:\nCRM та основний канал:\nЩо, на вашу думку, не працює:\nЧасовий пояс:',
    },
    links: { offer: 'Про діагностику', work: 'Вибрані роботи', contact: 'Зв’язатися', email: 'Написати Дмитру' },
  },
  ru: {
    nav: 'Возврат лидов',
    home: {
      eyebrow: 'Дмитрий Запорожец · Внедрение ИИ · Удалённо из Вьетнама',
      title: 'За лид уже заплачено.',
      accent: 'Найдем, где он теряется.',
      lead: 'Я прослеживаю путь от рекламы и первого сообщения до CRM, звонков и передачи менеджеру. Показываю, где реальные потери, сколько они могут стоить и что имеет смысл исправить первым.',
      context: 'Бывший владелец IT-компании и директор филиала IT STEP в Джакарте. Строю ИИ-системы современными инструментами и отвечаю за бизнес-логику и результат.',
      serviceLabel: 'Первый конкретный проект',
      serviceTitle: 'Диагностика входящей воронки за десять дней.',
      serviceBody: 'Одна воронка, одна CRM, месяц реальных лидов. Вы получаете измеренные потери, финансовую модель с допущениями и план первого исправления.',
      proofLabel: 'Избранные работы',
      proofTitle: 'Системы в реальных процессах.',
      proofBody: 'Я руководил продажами и учебным подразделением, создал ИИ-агента с интеграцией в CRM и исследовал тысячи звонков и сообщений. Цифры описывают объём анализа, а не обещанный рост продаж.',
      cases: [
        { name: 'Диагностика продаж', outcome: 'Разобран отчёт CRM по 1 956 звонкам; привязка рекламы к заявкам выросла с 45,2% до 93,6%.', href: '/ru/revenue-recovery/' },
        { name: 'Stepan', outcome: 'ИИ-агент для переписки и CRM с передачей человеку и проверкой утверждений.', href: 'https://stepan2.zapleo.com/' },
        { name: 'AIbroker', outcome: 'Шлюз моделей с выбором провайдера и контролем использования и расходов.', href: '/ru/work/aibroker/' },
      ],
      aboutTitle: 'Бизнес-оператор, который умеет строить с ИИ.',
      aboutBody: 'Я основал Zapleo в 2010 году, позднее отвечал за P&L учебного филиала. Я не называю себя классическим программистом: превращаю бизнес-проблему в работающую систему с помощью ИИ-разработки, тестирования и проверки человеком.',
      contactTitle: 'Расскажите, где застревают лиды.',
      contactBody: 'Для начала достаточно коротко описать поток заявок, CRM и предполагаемую проблему. Я скажу, подходит ли вам этот формат.',
      workLabel: 'Посмотреть работы',
    },
    service: {
      eyebrow: 'Диагностика потерь · 10 рабочих дней',
      title: 'Найдите продажи, которые теряет ваша текущая воронка.',
      intro: 'Я проверяю один путь лида от источника до CRM, первого ответа, звонков и передачи менеджеру. Вы получаете измеренную проблему и план первого исправления.',
      fitTitle: 'Кому подходит',
      fitBody: 'Командам, которые уже получают лидов и накопили достаточно истории для анализа.',
      fit: ['Примерно 100+ входящих лидов в месяц', 'CRM и история сообщений или звонков', 'Владелец или руководитель продаж, который знает экономику сделки и может дать законный доступ'],
      leaksTitle: 'Что проверяем',
      leaks: [
        { title: 'Медленный или пропущенный ответ', body: 'Сколько ждали люди и кто так и не получил полезного ответа.' },
        { title: 'Сорванные звонки и передачи', body: 'Пропущенные звонки, неудачные перезвоны и заявки без ответственного.' },
        { title: 'Реклама без связи с продажей', body: 'Где теряется источник кампании и почему расходы не сопоставить с результатом.' },
      ],
      deliverTitle: 'Что вы получаете',
      deliver: [
        { title: 'Карту потерь', body: 'Количество и примеры сбоев, а также оговорку о качестве данных.' },
        { title: 'Модель возможностей', body: 'Диапазон с допущениями и экономикой сделки вместо выдуманного обещания выручки.' },
        { title: 'План первого исправления', body: 'Приоритеты, ответственные, усилия, стоимость и техническое задание для пилота.' },
      ],
      processTitle: 'Как проходят десять дней',
      process: [
        { title: '01 · Границы и доступ', body: 'Согласуем одну воронку и основной канал. Проверяем выгрузку и убираем лишние данные.' },
        { title: '02 · Восстановление пути', body: 'Проходим выборку лидов по системам, считаем потери и сверяем выводы с командой.' },
        { title: '03 · Решение', body: 'Вместе разбираем цифры. Вы получаете план и демонстрацию на обезличенных примерах.' },
      ],
      proofTitle: 'Мой опыт',
      proofBody: 'В образовательном бизнесе я разобрал отчёт CRM по 1 956 звонкам, измерил время ответа на 10 879 входящих сообщений за 60 дней, поднял привязку рекламы к заявкам с 45,2% до 93,6% и подключил ИИ-агента продаж к событиям CRM. Это факты прошлого проекта; они не прогнозируют ваш результат.',
      termsTitle: 'Чёткие границы',
      terms: ['Одна воронка, одна CRM, один основной канал, до 30 дней истории.', 'Нужны пригодные выгрузки и человек, который ответит на вопросы о процессе.', 'Полное внедрение, дальнейшая поддержка и гарантия выручки не входят в диагностику.'],
      fee: 'Фиксированная стоимость — $5 000',
      feeNote: '$2 500 на старте и $2 500 после рассмотрения согласованных результатов. Объём работы закрепляем до оплаты.',
      cta: 'Обсудить задачу',
      ctaNote: 'Напишите название компании, количество лидов, CRM и предполагаемую проблему. Если формат не подойдёт, скажу прямо.',
      emailSubject: 'Диагностика потерь лидов — разговор',
      emailBody: 'Компания:\nВходящих лидов в месяц:\nCRM и основной канал:\nЧто, по вашему мнению, не работает:\nЧасовой пояс:',
    },
    links: { offer: 'О диагностике', work: 'Избранные работы', contact: 'Связаться', email: 'Написать Дмитрию' },
  },
  id: {
    nav: 'Pulihkan prospek',
    home: {
      eyebrow: 'Dmitriy Zaporozhets · Integrasi AI · Jarak jauh dari Vietnam',
      title: 'Anda sudah membayar untuk prospek itu.',
      accent: 'Cari tahu di mana ia hilang.',
      lead: 'Saya menelusuri perjalanan dari iklan dan pesan pertama hingga CRM, telepon, dan serah terima ke tim. Saya tunjukkan celah yang nyata, perkiraan biayanya, dan perbaikan pertama yang layak dilakukan.',
      context: 'Mantan pemilik perusahaan perangkat lunak dan direktur cabang IT STEP Jakarta. Saya membangun sistem AI dengan alat modern, sambil bertanggung jawab atas logika bisnis dan hasilnya.',
      serviceLabel: 'Langkah pertama yang jelas',
      serviceTitle: 'Diagnosis alur prospek masuk dalam sepuluh hari.',
      serviceBody: 'Satu alur, satu CRM, satu bulan data prospek nyata. Anda mendapat peta kehilangan, model finansial beserta asumsinya, dan rencana perbaikan pertama.',
      proofLabel: 'Pekerjaan pilihan',
      proofTitle: 'Dibangun dalam operasi nyata.',
      proofBody: 'Saya pernah mengelola operasi penjualan dan pendidikan, membangun agen penjualan AI yang terhubung ke CRM, serta menelusuri ribuan panggilan dan pesan. Angka ini menunjukkan pekerjaan yang dianalisis, bukan janji kenaikan penjualan.',
      cases: [
        { name: 'Diagnosis alur penjualan', outcome: 'Laporan CRM atas 1.956 panggilan ditinjau; atribusi iklan ke prospek naik dari 45,2% menjadi 93,6%.', href: '/id/revenue-recovery/' },
        { name: 'Stepan', outcome: 'Agen penjualan AI untuk pesan dan CRM, dengan serah terima ke manusia dan pemeriksaan klaim.', href: 'https://stepan2.zapleo.com/' },
        { name: 'AIbroker', outcome: 'Gerbang model yang memilih penyedia dan memantau penggunaan serta biaya.', href: '/id/work/aibroker/' },
      ],
      aboutTitle: 'Operator bisnis yang membangun dengan AI.',
      aboutBody: 'Saya mendirikan Zapleo pada 2010, lalu memegang tanggung jawab P&L sebuah cabang pendidikan. Saya bukan programmer konvensional; saya mengubah masalah bisnis menjadi sistem kerja dengan bantuan pengembangan AI, pengujian, dan tinjauan manusia.',
      contactTitle: 'Ceritakan di mana prospek tersendat.',
      contactBody: 'Cukup beri tahu volume prospek, CRM yang digunakan, dan masalah yang Anda duga. Saya akan mengatakan apakah proyek ini cocok.',
      workLabel: 'Lihat pekerjaan',
    },
    service: {
      eyebrow: 'Diagnosis kehilangan prospek · 10 hari kerja',
      title: 'Temukan penjualan yang hilang di alur Anda saat ini.',
      intro: 'Saya memeriksa satu jalur prospek dari sumber ke CRM, respons pertama, telepon, dan serah terima. Anda mendapat diagnosis terukur dan rencana perbaikan pertama.',
      fitTitle: 'Untuk siapa',
      fitBody: 'Tim yang sudah mendapatkan prospek dan memiliki cukup riwayat untuk melihat polanya.',
      fit: ['Sekitar 100+ prospek masuk per bulan', 'CRM serta riwayat pesan atau panggilan', 'Pemilik atau kepala penjualan yang memahami nilai transaksi dan dapat memberi akses yang sah'],
      leaksTitle: 'Yang kami periksa',
      leaks: [
        { title: 'Respons pertama yang lambat atau tidak ada', body: 'Berapa lama orang menunggu dan siapa yang tidak mendapat jawaban yang berguna.' },
        { title: 'Panggilan dan serah terima yang terputus', body: 'Panggilan terlewat, tindak lanjut tanpa hasil, dan prospek tanpa penanggung jawab.' },
        { title: 'Iklan tanpa hasil yang terhubung', body: 'Di mana sumber kampanye hilang sehingga biaya tidak bisa dibandingkan dengan hasil.' },
      ],
      deliverTitle: 'Hasil yang Anda terima',
      deliver: [
        { title: 'Peta kehilangan', body: 'Jumlah dan contoh setiap celah, disertai catatan kualitas data.' },
        { title: 'Model peluang', body: 'Rentang dengan asumsi dan ekonomi transaksi, tanpa janji pendapatan yang dibuat-buat.' },
        { title: 'Rancangan perbaikan pertama', body: 'Prioritas, penanggung jawab, usaha, biaya, dan spesifikasi untuk satu proyek percontohan.' },
      ],
      processTitle: 'Urutan sepuluh hari',
      process: [
        { title: '01 · Cakupan dan akses', body: 'Sepakati satu alur dan satu kanal utama. Tinjau ekspor dan singkirkan data yang tidak perlu.' },
        { title: '02 · Telusuri dan uji', body: 'Ikuti sampel prospek di seluruh sistem, hitung celahnya, dan validasi temuan bersama tim.' },
        { title: '03 · Tentukan perbaikan', body: 'Bahas angkanya bersama. Anda mendapat rencana serta demo dengan contoh yang dianonimkan.' },
      ],
      proofTitle: 'Mengapa saya bisa melakukannya',
      proofBody: 'Di sebuah bisnis pendidikan, saya meninjau laporan CRM atas 1.956 panggilan, mengukur waktu balasan untuk 10.879 pesan masuk selama 60 hari, menaikkan atribusi iklan ke prospek dari 45,2% menjadi 93,6%, dan menghubungkan agen AI penjualan ke peristiwa CRM. Ini fakta proyek terdahulu, bukan prediksi hasil Anda.',
      termsTitle: 'Cakupan yang jelas',
      terms: ['Satu alur, satu CRM, satu kanal pesan atau telepon utama, hingga 30 hari riwayat.', 'Membutuhkan ekspor yang dapat digunakan dan orang yang dapat menjawab pertanyaan operasional.', 'Integrasi produksi, pengoperasian lanjutan, dan jaminan pendapatan berada di luar cakupan diagnosis.'],
      fee: 'Biaya proyek tetap: US$5.000',
      feeNote: 'US$2.500 saat mulai dan US$2.500 setelah hasil yang disepakati ditinjau. Cakupan tertulis sebelum pembayaran.',
      cta: 'Minta panggilan kecocokan',
      ctaNote: 'Kirim nama perusahaan, volume prospek bulanan, CRM, dan masalah yang Anda duga. Jika tidak cocok, saya akan mengatakannya.',
      emailSubject: 'Diagnosis kehilangan prospek — panggilan awal',
      emailBody: 'Perusahaan:\nProspek masuk per bulan:\nCRM dan kanal utama:\nMasalah yang diduga:\nZona waktu:',
    },
    links: { offer: 'Lihat layanan', work: 'Pekerjaan pilihan', contact: 'Kontak', email: 'Email Dmitriy' },
  },
} satisfies Record<Locale, RecoveryCopy>;

export function recoveryPath(locale: Locale): string {
  return locale === 'en' ? '/revenue-recovery/' : `/${locale}/revenue-recovery/`;
}

export function recoveryEmailHref(locale: Locale): string {
  const { emailSubject, emailBody } = RECOVERY_COPY[locale].service;
  return `mailto:dima@zapleo.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
}
