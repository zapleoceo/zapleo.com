import type { Locale } from './config';

export type CaseI18n = {
  brief: string;
  sections: { title: string; body: string; note?: string }[];
  links: { label: string }[];
};

export const CASES_I18N: Partial<Record<string, Partial<Record<Exclude<Locale, 'en'>, CaseI18n>>>> = {
  'ai-sales-assistant': {
    ru: {
      brief:
        'Большинство бизнесов теряют 60–80% входящих лидов не потому, что продукт плохой, а потому что никто не ответил достаточно быстро. Этот AI-ассистент закрывает разрыв — отвечает в Instagram, Telegram и WhatsApp за секунды, 24/7, и умнеет каждую неделю через встроенный интерфейс коучинга, не требующий кода.',
      sections: [
        {
          title: 'Скорость ответа — переменная, которую никто не оптимизирует',
          body: 'Исследования во всех индустриях последовательны: лид, получивший ответ в течение пяти минут, в 21 раз вероятнее конвертируется, чем тот, кто ждёт час. Большинство бизнесов действует так, словно этого числа не существует — команда на совещании, сейчас 23:00, воскресенье. У AI-ассистента нет такого расписания. Он обрабатывает первый контакт, квалифицирует лида через скриптованный разговорный флоу и либо записывает на встречу, либо эскалирует к человеку — без того чтобы лид когда-либо ждал.',
          note: 'Скорость первого ответа важнее его качества.',
        },
        {
          title: 'Режим коуча: ваша команда обучает AI',
          body: 'Самый распространённый режим отказа AI-чатботов — они устаревают. Скрипты, которые конвертировали в марте, перестают работать в июне — цены меняются, запускаются новые продукты, возражения эволюционируют. Режим коуча решает это в источнике. Когда AI даёт неправильный или устаревший ответ, владелец бизнеса — или любой член команды — исправляет его в простом интерфейсе. Исправление сохраняется, применяется немедленно ко всем разговорам, и AI не повторяет ошибку. Без передеплоя. Без тикета разработчику. Люди, которые лучше всего понимают ваш продукт, — именно они обновляют AI.',
          note: 'AI, который команда не может обновить, — AI, который становится неправильным.',
        },
        {
          title: 'Один ассистент на каждом канале, где уже есть ваши лиды',
          body: 'Лиды приходят через несколько каналов одновременно — Instagram DM, Telegram, WhatsApp, веб-чат. Каждый ожидает ответа в течение минут. Один AI-ассистент обслуживает их всех из единой базы знаний, автоматически адаптируя тон под канал. Каждый разговор логируется, доступен для поиска и помечен по исходу: какой канал конвертирует, какой скрипт не работает, где именно в флоу лиды отваливаются. При подключении CRM статус лида обновляется без участия человека.',
          note: 'Те же знания о продукте, разные стили разговора на каждом канале.',
        },
        {
          title: 'Что строится и что вы получаете в управление',
          body: 'Кастомный AI-ассистент, обученный на вашем продукте, ценах и библиотеке возражений. Подключён к вашим активным каналам продаж. Интерфейс коуча, который любой нетехнический член команды может использовать для ежедневного обновления. Начальная сборка занимает 2–4 недели в зависимости от количества каналов и сложности скрипта. Затем следует 30-дневный период калибровки, где обрабатываются крайние случаи и настраивается конверсионный флоу. После передачи ваша команда обучает его — Zapleo поддерживает, когда архитектура требует роста.',
          note: 'Подходит для EdTech, гостеприимства, ритейла, услуг — любого бизнеса с высоким объёмом входящих.',
        },
      ],
      links: [{ label: 'Обсудить сборку для вашего бизнеса' }],
    },
    uk: {
      brief:
        'Більшість бізнесів втрачають 60–80% вхідних лідів не тому, що продукт поганий, а тому що ніхто не відповів достатньо швидко. Цей AI-асистент закриває прогалину — відповідає в Instagram, Telegram і WhatsApp за секунди, 24/7, і стає розумнішим щотижня через вбудований інтерфейс коучингу, що не потребує коду.',
      sections: [
        {
          title: 'Швидкість відповіді — змінна, яку ніхто не оптимізує',
          body: 'Дослідження в усіх галузях послідовні: лід, який отримав відповідь протягом п\'яти хвилин, у 21 раз вірогідніше конвертується, ніж той, хто чекає годину. Більшість бізнесів діє так, ніби цього числа не існує — команда на нараді, зараз 23:00, неділя. У AI-асистента немає такого розкладу. Він обробляє перший контакт, кваліфікує ліда через скриптований розмовний флоу та або записує на зустріч, або ескалює до людини — без того щоб лід коли-небудь чекав.',
          note: 'Швидкість першої відповіді важливіша за її якість.',
        },
        {
          title: 'Режим коуча: ваша команда навчає AI',
          body: 'Найпоширеніший режим відмови AI-чатботів — вони застарівають. Скрипти, що конвертували в березні, перестають працювати в червні — ціни змінюються, виходять нові продукти, заперечення еволюціонують. Режим коуча вирішує це в джерелі. Коли AI дає неправильну або застарілу відповідь, власник бізнесу — або будь-який член команди — виправляє це в простому інтерфейсі. Виправлення зберігається, застосовується негайно до всіх розмов, і AI не повторює помилку. Без переодеплою. Без тікета розробнику. Люди, які найкраще розуміють ваш продукт, — саме вони оновлюють AI.',
          note: 'AI, який команда не може оновити, — AI, який стає неправильним.',
        },
        {
          title: 'Один асистент на кожному каналі, де є ваші ліди',
          body: 'Ліди надходять через декілька каналів одночасно — Instagram DM, Telegram, WhatsApp, веб-чат. Кожен очікує відповіді протягом хвилин. Один AI-асистент обслуговує їх усіх з єдиної бази знань, автоматично адаптуючи тон під канал. Кожна розмова логується, доступна для пошуку та помічена за результатом: який канал конвертує, який скрипт не працює, де саме у флоу ліди відвалюються. При підключенні CRM статус ліда оновлюється без участі людини.',
          note: 'Ті самі знання про продукт, різні стилі розмови на кожному каналі.',
        },
        {
          title: 'Що будується і що ви отримуєте в управління',
          body: 'Кастомний AI-асистент, навчений на вашому продукті, цінах та бібліотеці заперечень. Підключений до ваших активних каналів продажів. Інтерфейс коуча, який може використовувати будь-який нетехнічний член команди для щоденного оновлення. Початкова збірка займає 2–4 тижні залежно від кількості каналів та складності скрипту. Потім слідує 30-денний період калібрування, де обробляються крайні випадки та налаштовується конверсійний флоу. Після передачі ваша команда навчає його — Zapleo підтримує, коли архітектура потребує зростання.',
          note: 'Підходить для EdTech, гостинності, роздрібу, послуг — будь-якого бізнесу з великим обсягом вхідних.',
        },
      ],
      links: [{ label: 'Обговорити збірку для вашого бізнесу' }],
    },
    id: {
      brief:
        'Sebagian besar bisnis kehilangan 60–80% leads masuk bukan karena produknya salah, tapi karena tidak ada yang membalas cukup cepat. Asisten AI ini menutup celah itu — merespons di Instagram, Telegram, dan WhatsApp dalam hitungan detik, 24/7, dan semakin pintar setiap minggu melalui antarmuka coaching bawaan yang tidak memerlukan kode.',
      sections: [
        {
          title: 'Kecepatan respons — variabel yang tidak dioptimalkan siapa pun',
          body: 'Penelitian di berbagai industri konsisten: leads yang mendapat balasan dalam lima menit 21 kali lebih mungkin konversi dibanding yang menunggu satu jam. Kebanyakan bisnis beroperasi seolah angka ini tidak ada — tim penjualan sedang rapat, sudah jam 11 malam, hari Minggu. Asisten AI tidak punya jadwal seperti itu. Ia menangani kontak pertama, mengkualifikasi leads melalui alur percakapan terskrip, dan baik memesan janji maupun mengeskalasinya ke manusia — tanpa leads pernah mengalami penantian.',
          note: 'Kecepatan respons pertama lebih penting daripada kualitasnya.',
        },
        {
          title: 'Mode coach: tim Anda melatih AI, bukan sebaliknya',
          body: 'Mode kegagalan paling umum chatbot AI adalah menjadi usang. Skrip yang berhasil di Maret berhenti bekerja di Juni — harga berubah, produk baru diluncurkan, keberatan berkembang. Mode coach menyelesaikan ini di sumbernya. Ketika AI memberi jawaban yang salah atau ketinggalan zaman, pemilik bisnis — atau anggota tim mana pun — mengoreksinya di antarmuka sederhana. Koreksi disimpan, diterapkan langsung ke semua percakapan, dan AI tidak mengulangi kesalahan itu. Tidak perlu redeploy. Tidak perlu tiket developer. Orang yang paling memahami produk Anda itulah yang memperbarui AI.',
          note: 'AI yang tidak bisa diperbarui tim Anda adalah AI yang menjadi salah.',
        },
        {
          title: 'Satu asisten, di setiap saluran tempat leads Anda sudah berada',
          body: 'Leads datang melalui beberapa saluran sekaligus — Instagram DM, Telegram, WhatsApp, web chat. Masing-masing mengharapkan balasan dalam hitungan menit. Satu asisten AI melayani semua dari satu basis pengetahuan, secara otomatis menyesuaikan nada per saluran. Setiap percakapan dicatat, dapat dicari, dan ditandai berdasarkan hasil: saluran mana yang konversi, skrip mana yang gagal, persis di mana dalam alur leads keluar. Ketika CRM terhubung, status leads diperbarui tanpa manusia menyentuhnya.',
          note: 'Pengetahuan produk yang sama, gaya percakapan berbeda per saluran.',
        },
        {
          title: 'Apa yang dibangun dan apa yang Anda operasikan',
          body: 'Asisten AI kustom yang dilatih pada produk, harga, dan perpustakaan keberatan Anda. Terhubung ke saluran penjualan aktif Anda. Antarmuka coach yang dapat digunakan anggota tim non-teknis mana pun untuk memperbaruinya sehari-hari. Build awal membutuhkan 2–4 minggu tergantung jumlah saluran dan kompleksitas skrip. Periode kalibrasi 30 hari menyusul di mana kasus tepi ditangani dan alur konversi disetel. Setelah serah terima, tim Anda melatihnya — Zapleo mendukung ketika arsitektur perlu berkembang.',
          note: 'Cocok untuk EdTech, hospitality, retail, jasa — bisnis apa pun dengan saluran masuk volume tinggi.',
        },
      ],
      links: [{ label: 'Diskusikan membangun satu untuk bisnis Anda' }],
    },
  },

  aibroker: {
    ru: {
      brief:
        'Запуская два AI-продукта с одного сервера — Vera (персональный ассистент) и Stepan (Instagram-агент продаж) — повторяющейся проблемой было размножение API-ключей и невидимые затраты. AIbroker — единая управляющая плоскость: каждый LLM-вызов во всех проектах маршрутизируется через неё, с ограничениями затрат на проект, автоматическим охлаждением на 429-ых и Telegram-алертом в момент смерти ключа.',
      sections: [
        {
          title: 'Инцидент с затратами, который сделал это необходимым',
          body: 'В июне 2026 года устаревший множитель затрат в LiteLLM привёл к тому, что провайдерские вызовы логировались по 1/20 реальной цены. Охранник затрат думал, что бюджет остался; его не было. Пришёл счёт на $25. AIbroker уже находился в разработке; инцидент перевёл его из «полезного эксперимента» в «требование продакшена». Брокер читает реальные USD из логов использования, а не оценки по уровню модели.',
          note: 'Любой охранник затрат, использующий расчётные цены вместо реальных, — не охранник.',
        },
        {
          title: 'Два режима для двух проблем',
          body: 'Режим прокси: брокер вызывает провайдера через LiteLLM SDK, возвращает ответ, логирует затраты. Клиентский проект никогда не видит API-ключ. Режим выдачи: брокер выдаёт краткосрочную аренду ключа; клиент вызывает провайдера напрямую, сообщает об использовании при освобождении. Выдача обрабатывает провайдеров, не совместимых с OpenAI-интерфейсом.',
          note: 'Выдача стоит один дополнительный круговой рейс, но неизбежна для не-LLM API.',
        },
        {
          title: 'Что работает в продакшене',
          body: 'LRU-aware выбор ключей избегает горячей ротации одного ключа, пока другие простаивают. Дневные и месячные ограничения затрат на проект обеспечивают бюджетную дисциплину по всем подключённым клиентам. Монитор здоровья запускается каждые 10 минут — дешевейший валидный вызов на провайдера — и немедленно отмечает мёртвые ключи с Telegram-алертом. Живая панель показывает затраты, здоровье ключей и использование по проектам.',
        },
      ],
      links: [
        { label: 'Панель AIbroker' },
        { label: 'GitHub — zapleoceo/AIbroker' },
      ],
    },
    uk: {
      brief:
        'Запускаючи два AI-продукти з одного сервера — Vera (персональний асистент) та Stepan (Instagram-агент продажів) — повторюваною проблемою було розростання API-ключів та невидимі витрати. AIbroker — єдина управляюча площина: кожен LLM-виклик по всіх проєктах маршрутизується через неї, з обмеженнями витрат на проєкт, автоматичним охолодженням на 429-их та Telegram-алертом в момент смерті ключа.',
      sections: [
        {
          title: 'Інцидент з витратами, що зробив це необхідним',
          body: 'У червні 2026 року застарілий множник витрат у LiteLLM призвів до того, що провайдерські виклики логувалися по 1/20 реальної ціни. Охоронник витрат думав, що бюджет залишився; його не було. Прийшов рахунок на $25. AIbroker вже перебував у розробці; інцидент перевів його з «корисного експерименту» в «вимогу продакшену». Брокер читає реальні USD з журналів використання, а не оцінки по рівню моделі.',
          note: 'Будь-який охоронник витрат, що використовує розрахункові ціни замість реальних, — не охоронник.',
        },
        {
          title: 'Два режими для двох проблем',
          body: 'Режим проксі: брокер викликає провайдера через LiteLLM SDK, повертає відповідь, логує витрати. Клієнтський проєкт ніколи не бачить API-ключ. Режим видачі: брокер видає короткострокову оренду ключа; клієнт викликає провайдера напряму, звітує про використання при звільненні. Видача обробляє провайдерів, несумісних з OpenAI-інтерфейсом.',
          note: 'Видача коштує один додатковий round-trip, але неминуча для не-LLM API.',
        },
        {
          title: 'Що працює в продакшені',
          body: 'LRU-aware вибір ключів уникає гарячої ротації одного ключа, поки інші простоюють. Денні та місячні обмеження витрат на проєкт забезпечують бюджетну дисципліну по всіх підключених клієнтах. Монітор здоров\'я запускається кожні 10 хвилин — найдешевший валідний виклик на провайдера — і негайно відмічає мертві ключі Telegram-алертом. Жива панель показує витрати, здоров\'я ключів та використання по проєктах.',
        },
      ],
      links: [
        { label: 'Панель AIbroker' },
        { label: 'GitHub — zapleoceo/AIbroker' },
      ],
    },
    id: {
      brief:
        'Menjalankan dua produk bertenaga AI dari satu server — Vera (asisten pribadi) dan Stepan (agen penjualan Instagram) — masalah berulangnya adalah proliferasi kunci API dan biaya yang tidak terlihat. AIbroker adalah control plane tunggal: setiap panggilan LLM di semua proyek melewatinya, dengan batas biaya per proyek, cooldown otomatis pada 429, dan peringatan Telegram saat kunci mati.',
      sections: [
        {
          title: 'Insiden biaya yang membuatnya perlu',
          body: 'Pada Juni 2026, cost multiplier yang usang di LiteLLM menyebabkan panggilan provider dicatat dengan 1/20 harga sebenarnya. Cost guard mengira masih ada anggaran; ternyata tidak. Tagihan $25 datang. AIbroker sudah dalam pengembangan; insiden itu mendorongnya dari "eksperimen berguna" menjadi "persyaratan produksi". Broker membaca USD nyata dari log penggunaan, bukan estimasi dari tier model.',
          note: 'Cost guard mana pun yang menggunakan harga perkiraan daripada harga nyata — bukan cost guard.',
        },
        {
          title: 'Dua mode untuk dua masalah',
          body: 'Mode proxy: broker memanggil provider via LiteLLM SDK, mengembalikan respons, mencatat biaya. Proyek klien tidak pernah melihat kunci API. Mode vending: broker menerbitkan lease kunci jangka pendek; klien memanggil provider langsung, melaporkan penggunaan saat rilis. Vending menangani provider yang tidak sesuai antarmuka OpenAI-compatible.',
          note: 'Vending menghabiskan satu round-trip ekstra tapi tidak terhindarkan untuk non-LLM API.',
        },
        {
          title: 'Yang berjalan di produksi',
          body: 'Pemilihan kunci LRU-aware menghindari rotasi panas satu kunci sementara yang lain menganggur. Batas biaya harian dan bulanan per proyek menegakkan disiplin anggaran di semua klien yang terhubung. Monitor kesehatan berjalan setiap 10 menit — panggilan valid termurah per provider — dan langsung menandai kunci mati dengan peringatan Telegram. Dashboard langsung menampilkan biaya, kesehatan kunci, dan penggunaan per proyek.',
        },
      ],
      links: [
        { label: 'Dashboard AIbroker' },
        { label: 'GitHub — zapleoceo/AIbroker' },
      ],
    },
  },

  pasijou: {
    ru: {
      brief:
        'После закрытия агентства в начале 2022 года первым проектом на южном побережье был не стартап. Это было здание — с кухней, двенадцатью рабочими местами, небольшим кинозалом и йога-террасой. Pasijou открылся в Велигаме как место, где цифровые кочевники могли работать, есть и проводить настоящие человеческие вечера на одном участке земли.',
      sections: [
        {
          title: 'Почему клубхаус, а не SaaS',
          body: 'Бриф, который я дал себе, был эгоистичным: построить место, где сам хотел бы провести свои месяцы. Коворкинг с настоящей кухней. Украинская домашняя еда, быстрый Wi-Fi, обед из которого не надо уходить, и сообщество, которое проводит музыкальные вечера и кино-показы без превращения в хостел.',
          note: 'Только коворкинг хрупок в городе с муссонами; кухня делает тебя незаменимым.',
        },
        {
          title: 'Что инженер узнаёт, управляя F&B',
          body: 'Инвентарь — это база данных с худшими сообщениями об ошибках. Составление расписания персонала — решатель ограничений. Инженерия меню — это продукт. Первые шесть месяцев мы теряли деньги на бургере, который оставляли в меню по просьбе гостей; когда заменили его на карри недели, маржа выросла с -8% до +21%. Та же дисциплина код-ревью, другой словарный запас.',
          note: 'F&B научил меня контролю затрат быстрее, чем 12 лет P&L агентства.',
        },
        {
          title: 'Результат и что осталось',
          body: 'Три года. Tripadvisor 4.9 на сотне отзывов. Uber Eats Sri Lanka живой. Небольшой список лояльных постоянных гостей, знающих персонал по имени. Кинозал работает на 30% загрузки — это нормально, он окупается удержанием, а не продажей билетов.',
          note: 'Модель клубхауса работает в городах с высокой плотностью кочевников и низкой плотностью заведений.',
        },
      ],
      links: [
        { label: 'Pasijou в Instagram' },
        { label: 'Отзывы на Tripadvisor' },
        { label: 'Uber Eats LK' },
      ],
    },
    uk: {
      brief:
        'Після закриття агенції на початку 2022 року першим проєктом на південному узбережжі був не стартап. Це була будівля — з кухнею, дванадцятьма робочими місцями, невеликим кінозалом і йога-терасою. Pasijou відкрився у Велігамі як місце, де цифрові кочівники могли працювати, їсти та проводити справжні людські вечори на одній ділянці землі.',
      sections: [
        {
          title: 'Чому клубхаус, а не SaaS',
          body: 'Бриф, який я дав собі, був егоїстичним: побудувати місце, де сам хотів би провести свої місяці. Коворкінг зі справжньою кухнею. Українська домашня їжа, швидкий Wi-Fi, обід з якого не треба йти, і спільнота, що проводить музичні вечори та кінопокази без перетворення на хостел.',
          note: 'Тільки коворкінг крихкий у місті з мусонами; кухня робить тебе незамінним.',
        },
        {
          title: 'Що інженер дізнається, керуючи F&B',
          body: 'Інвентар — це база даних з гіршими повідомленнями про помилки. Складання розкладу персоналу — вирішувач обмежень. Інженерія меню — це продукт. Перші шість місяців ми втрачали гроші на бургері, який тримали в меню, бо гості просили; коли замінили його на каррі тижня, маржа зросла з -8% до +21%. Та сама дисципліна код-рев\'ю, інший словниковий запас.',
          note: 'F&B навчив мене контролю витрат швидше, ніж 12 років P&L агенції.',
        },
        {
          title: 'Результат і що залишилося',
          body: 'Три роки. Tripadvisor 4.9 на сотні відгуків. Uber Eats Sri Lanka живий. Невеликий список лояльних постійних гостей, що знають персонал на ім\'я. Кінозал працює на 30% завантаження — це нормально, він окупається утриманням, а не продажем квитків.',
          note: 'Модель клубхаусу працює в містах з високою щільністю кочівників і низькою щільністю закладів.',
        },
      ],
      links: [
        { label: 'Pasijou в Instagram' },
        { label: 'Відгуки на Tripadvisor' },
        { label: 'Uber Eats LK' },
      ],
    },
    id: {
      brief:
        'Setelah agensi tutup di awal 2022, proyek pertama di pesisir selatan bukan startup. Itu sebuah bangunan — dengan dapur, dua belas kursi coworking, ruang bioskop kecil, dan dek yoga. Pasijou dibuka di Weligama sebagai tempat di mana digital nomad bisa bekerja, makan, dan menghabiskan malam yang benar-benar manusiawi di sebidang tanah yang sama.',
      sections: [
        {
          title: 'Mengapa clubhouse, bukan SaaS',
          body: 'Brief yang saya beri diri sendiri bersifat egois: bangun tempat yang saya sendiri ingin habiskan berbulan-bulan di sana. Coworking dengan dapur sungguhan. Makanan nyaman Ukraina, Wi-Fi cepat, makan siang yang tidak perlu pergi jauh, dan komunitas yang menyelenggarakan malam musik dan pemutaran film tanpa berubah menjadi hostel.',
          note: 'Coworking saja rapuh di kota dengan musim hujan; dapur membuat Anda tak tergantikan.',
        },
        {
          title: 'Yang dipelajari engineer dalam menjalankan F&B',
          body: 'Inventaris adalah database dengan pesan error yang lebih buruk. Penjadwalan staf adalah constraint solver. Menu engineering adalah produk. Enam bulan pertama kami rugi pada burger yang terus ada di menu karena tamu memintanya; setelah menggantinya dengan curry of the week, margin naik dari -8% menjadi +21%. Disiplin code review yang sama, kosakata yang berbeda.',
          note: 'F&B mengajarkan kontrol biaya lebih cepat dari 12 tahun P&L agensi.',
        },
        {
          title: 'Hasil dan yang tersisa',
          body: 'Tiga tahun. Tripadvisor 4.9 dari lebih dari seratus ulasan. Uber Eats Sri Lanka live. Daftar pelanggan setia kecil yang mengenal staf by name. Ruang bioskop berjalan di 30% utilisasi dan itu tidak masalah — ia membayar dirinya sendiri dalam retensi, bukan penjualan tiket.',
          note: 'Model clubhouse berhasil di kota dengan kepadatan nomad tinggi tapi kepadatan venue rendah.',
        },
      ],
      links: [
        { label: 'Pasijou di Instagram' },
        { label: 'Ulasan Tripadvisor' },
        { label: 'Uber Eats LK' },
      ],
    },
  },

  apcu: {
    ru: {
      brief:
        'Официальный портал Ассоциации косметики и парфюмерии Украины — APCU. Члены — производители, импортёры, дистрибьюторы. Портал должен был обслуживать три аудитории без трёх сайтов: отраслевые новости, регуляторные обновления и публичный каталог участников.',
      sections: [
        {
          title: 'Почему кастомный WordPress в 2018',
          body: 'Первый инстинкт — пропустить WordPress и построить на Symfony. Неверный инстинкт. Нетехническая редакционная команда — это один человек, работающий по вечерам. WordPress с жёстко кастомной темой означает, что она публикует по своему расписанию, а не нашему. Восемь лет спустя редакционный ритм всё ещё работает без разработчика в цикле.',
          note: 'Выбирай стек по реальности обслуживания, а не по предпочтению инженера.',
        },
        {
          title: 'Регуляторная часть',
          body: 'Нормативы ЕС по косметике меняются ежеквартально. Портал отслеживает нотификационную маркировку, обновления INCI, запреты ингредиентов и украинские эквиваленты. Изначально плоская CMS; мы добавили структурированный тип контента «регуляторный документ» с сортировкой по дате вступления в силу и историей изменений. Скучно. Критично.',
          note: 'Скучные функции удерживают пользователей от ухода в Telegram-каналы.',
        },
        {
          title: 'Результат',
          body: 'В эфире с 2018 года. До сих пор на той же кастомной теме. Несколько смен владельцев на стороне ассоциации — портал продолжал публиковаться через все из них. Самый сильный сигнал, что сборка агентства сработала — то, что она всё ещё работает после закрытия агентства.',
        },
      ],
      links: [{ label: 'Посетить apcu.ua' }],
    },
    uk: {
      brief:
        'Офіційний портал Асоціації косметики та парфумерії України — APCU. Члени — виробники, імпортери, дистриб\'ютори. Портал мав обслуговувати три аудиторії без трьох сайтів: галузеві новини, регуляторні оновлення та публічний каталог учасників.',
      sections: [
        {
          title: 'Чому кастомний WordPress у 2018',
          body: 'Перший інстинкт — пропустити WordPress і зробити на Symfony. Неправильний інстинкт. Нетехнічна редакційна команда — це одна людина, що працює ввечері. WordPress з жорстко кастомною темою означає, що вона публікує за своїм розкладом, а не за нашим. Вісім років потому редакційний ритм досі працює без розробника в циклі.',
          note: 'Обирай стек за реальністю обслуговування, а не за перевагою інженера.',
        },
        {
          title: 'Регуляторна частина',
          body: 'Нормативи ЄС по косметиці змінюються щокварталу. Портал відстежує нотифікаційне маркування, оновлення INCI, заборони інгредієнтів та українські еквіваленти. Спочатку плоска CMS; ми додали структурований тип контенту «регуляторний документ» із сортуванням за датою набрання чинності та журналом змін. Нудно. Критично.',
          note: 'Нудні функції утримують користувачів від переходу в Telegram-канали.',
        },
        {
          title: 'Результат',
          body: 'В ефірі з 2018 року. Досі на тій самій кастомній темі. Кілька змін власників на стороні асоціації — портал продовжував публікувати крізь усі. Найсильніший сигнал, що збірка агенції спрацювала — те, що вона досі працює після закриття агенції.',
        },
      ],
      links: [{ label: 'Відвідати apcu.ua' }],
    },
    id: {
      brief:
        'Portal resmi Asosiasi Kosmetik & Parfum Ukraina — APCU. Anggotanya adalah produsen, importir, distributor. Portal harus melayani tiga audiens tanpa tiga situs: berita industri, pembaruan regulasi, dan direktori keanggotaan publik.',
      sections: [
        {
          title: 'Mengapa WordPress kustom di 2018',
          body: 'Insting pertama adalah melewati WordPress dan membangun dengan Symfony. Insting yang salah. Tim editorial non-teknis adalah satu orang yang bekerja di malam hari. WordPress dengan tema kustom yang ketat berarti ia menerbitkan sesuai jadwalnya, bukan jadwal kami. Delapan tahun kemudian, ritme editorial masih berjalan tanpa developer dalam loop.',
          note: 'Pilih stack berdasarkan realitas pemeliharaan, bukan preferensi engineer.',
        },
        {
          title: 'Bagian regulasi',
          body: 'Regulasi kosmetik UE berubah setiap kuartal. Portal melacak pelabelan notifikasi, pembaruan INCI, larangan bahan, dan setara Ukrainanya. Awalnya CMS flat; kami menambahkan tipe konten "regulasi" terstruktur dengan sort-by-effective-date dan changelog per dokumen. Membosankan. Kritis.',
          note: 'Fitur membosankan membuat pengguna tidak kabur ke kanal Telegram.',
        },
        {
          title: 'Hasil',
          body: 'Live sejak 2018. Masih di tema kustom yang sama. Beberapa pergantian kepemilikan di sisi asosiasi — portal terus menerbitkan melalui semuanya. Sinyal terkuat bahwa build agensi berhasil adalah bahwa ia masih bekerja setelah agensi tutup.',
        },
      ],
      links: [{ label: 'Kunjungi apcu.ua' }],
    },
  },
};

export function getCaseI18n(slug: string, locale: Locale): CaseI18n | null {
  if (locale === 'en') return null;
  return CASES_I18N[slug]?.[locale as Exclude<Locale, 'en'>] ?? null;
}
