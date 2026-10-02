import type { Locale } from './config';

export type CaseI18n = {
  brief: string;
  sections: { title: string; body: string; note?: string }[];
  links: { label: string }[];
  tagline?: string;
  place?: string;
  role?: string;
  team?: string;
  year?: string;
  stack?: string[];
};

export const CASES_I18N: Partial<Record<string, Partial<Record<Exclude<Locale, 'en'>, CaseI18n>>>> = {
  "pasijou": {
    uk: {
      "stack": ["Операційна робота закладу","Мережева інфраструктура","Цифрові замовлення","Комунікація з гостями"],
      "brief": "Pasijou — коворкінг і ресторан на південному узбережжі Шрі-Ланки. Я був його співвласником і керував ним з лютого 2023 року до березня 2026-го, коли закінчилася оренда і проєкт закрився.",
      "sections": [
        {
          "title": "За що я відповідав",
          "body": "Щоденну роботу і всю технічну частину за нею: мережу, в якій працювали гості, — маршрутизацію, VPN, mesh Wi-Fi, балансування навантаження і резервне живлення, — а також цифрову частину бізнесу: замовлення, аналітику і комунікацію з гостями.",
          "note": "Коворкінг живе або вмирає разом зі своїм Wi-Fi."
        },
        {
          "title": "Результат",
          "body": "Проєкт вийшов на беззбитковість за вісім місяців і, поки працював, тримав оцінку гостей 4,9 з 5. Він закрився в березні 2026 року, коли закінчилася оренда."
        },
        {
          "title": "Чого це мене навчило",
          "body": "У фізичному бізнесі операційна робота перестає бути абстракцією. Запаси, зміни персоналу й повідомлення гостей — це задачі з даними, які мають реальні наслідки. Ті самі задачі я тепер розв’язую для інших бізнесів за допомогою ШІ."
        }
      ],
      "links": [
        {
          "label": "Pasijou в Instagram"
        }
      ],
      "tagline": "Коворкінг, кухня і спільнота в одному місці.",
      "place": "Велігама, Шрі-Ланка",
      "role": "Співвласник, керуючий",
      "team": "Місцева команда кухні та операційної роботи"
    },
    ru: {
      "stack": ["Операционная работа заведения","Сетевая инфраструктура","Цифровые заказы","Коммуникация с гостями"],
      "tagline": "Коворкинг, кухня и комьюнити в одном месте.",
      "place": "Велигама, Шри-Ланка",
      "role": "Совладелец, управляющий",
      "team": "Местная команда кухни и операционного персонала",
      "brief": "Pasijou — коворкинг и ресторан на южном побережье Шри-Ланки. Я был его совладельцем и управляющим с февраля 2023 по март 2026 года, когда закончилась аренда и проект закрылся.",
      "sections": [
        {
          "title": "За что я отвечал",
          "body": "Ежедневная работа и вся техника за ней: сеть, в которой работали гости, — маршрутизация, VPN, mesh Wi-Fi, балансировка нагрузки и резервное питание, — и цифровая часть бизнеса: заказы, аналитика и общение с гостями.",
          "note": "Коворкинг живёт или умирает вместе со своим Wi-Fi."
        },
        {
          "title": "Результат",
          "body": "Проект вышел в безубыточность за восемь месяцев и всё время работы держал оценку гостей 4,9 из 5. Закрылся в марте 2026 года, когда закончилась аренда."
        },
        {
          "title": "Чему это меня научило",
          "body": "В офлайн-бизнесе операционка перестаёт быть абстракцией. Склад, смены персонала и сообщения гостей — это задачи с данными и с реальными последствиями. Те же задачи я сейчас решаю для других бизнесов с помощью ИИ."
        }
      ],
      "links": [
        {
          "label": "Pasijou в Instagram"
        }
      ]
    },
    id: {
      "stack": ["Operasional hospitality","Infrastruktur jaringan","Pemesanan digital","Komunikasi dengan tamu"],
      "tagline": "Coworking, dapur, dan komunitas dalam satu tempat.",
      "place": "Weligama, Sri Lanka",
      "role": "Co-owner, operator",
      "team": "Tim dapur dan operasional lokal",
      "brief": "Pasijou adalah coworking space dan restoran di pantai selatan Sri Lanka. Saya ikut memiliki dan mengelolanya dari Februari 2023 sampai Maret 2026, saat masa sewa berakhir dan proyek ini ditutup.",
      "sections": [
        {
          "title": "Tanggung jawab saya",
          "body": "Operasional sehari-hari dan semua hal teknis di baliknya: jaringan yang dipakai tamu untuk bekerja — routing, VPN, mesh Wi-Fi, load balancing, dan daya cadangan — serta sisi digital bisnis: pemesanan, analitik, dan komunikasi dengan tamu.",
          "note": "Hidup matinya coworking space ditentukan oleh Wi-Fi-nya."
        },
        {
          "title": "Hasil",
          "body": "Proyek ini mencapai titik impas dalam delapan bulan dan mempertahankan rating tamu 4,9 dari 5 selama beroperasi. Proyek ditutup pada Maret 2026 saat masa sewa berakhir."
        },
        {
          "title": "Apa yang saya pelajari",
          "body": "Menjalankan bisnis fisik adalah tempat di mana operasional berhenti menjadi hal abstrak. Stok, shift staf, dan pesan tamu adalah masalah data dengan konsekuensi nyata — masalah yang sama yang sekarang saya selesaikan untuk bisnis lain dengan AI."
        }
      ],
      "links": [
        {
          "label": "Pasijou di Instagram"
        }
      ]
    },
  },
  "apcu": {
    uk: {
      "brief": "Zapleo розробила сайт української асоціації виробників парфумерії та косметики. Сайт досі працює, і на ньому досі вказано, що його розробила Zapleo.",
      "sections": [
        {
          "title": "Що робить сайт",
          "body": "Публікує галузеві новини та зміни в регулюванні для членів асоціації і для всіх охочих. Веде його власна редакція асоціації, без участі розробника.",
          "note": "Розробку завершено, коли клієнт може вести сайт без вас."
        }
      ],
      "links": [
        {
          "label": "Перейти на apcu.ua"
        }
      ],
      "tagline": "Сайт Асоціації парфумерії та косметики України.",
      "year": "Проєкт Zapleo",
      "place": "Україна · працює",
      "role": "Zapleo — розробка",
      "team": "Команда Zapleo"
    },
    ru: {
      "tagline": "Сайт Ассоциации парфюмерии и косметики Украины.",
      "year": "Проект Zapleo",
      "place": "Украина · работает",
      "role": "Zapleo — разработка",
      "team": "Команда Zapleo",
      "brief": "Zapleo сделала сайт украинской ассоциации производителей парфюмерии и косметики. Сайт до сих пор работает, и в нём по-прежнему указано, что разработала его Zapleo.",
      "sections": [
        {
          "title": "Что делает сайт",
          "body": "Публикует новости отрасли и изменения в регулировании для членов ассоциации и всех желающих. Ведут его редакторы самой ассоциации, без участия разработчика.",
          "note": "Работа закончена, когда клиент может вести проект без вас."
        }
      ],
      "links": [
        {
          "label": "Открыть apcu.ua"
        }
      ]
    },
    id: {
      "tagline": "Situs web Asosiasi Parfum dan Kosmetik Ukraina.",
      "year": "Proyek Zapleo",
      "place": "Ukraina · aktif",
      "role": "Zapleo — pengembangan",
      "team": "Tim Zapleo",
      "brief": "Zapleo membangun situs web asosiasi produsen parfum dan kosmetik Ukraina. Situs ini masih aktif dan masih mencantumkan Zapleo sebagai pengembangnya.",
      "sections": [
        {
          "title": "Fungsi situs ini",
          "body": "Situs ini menerbitkan berita industri dan pembaruan regulasi untuk anggota asosiasi dan publik, dan dikelola oleh editor asosiasi sendiri tanpa perlu melibatkan developer.",
          "note": "Sebuah proyek selesai saat klien bisa menjalankannya tanpa Anda."
        }
      ],
      "links": [
        {
          "label": "Kunjungi apcu.ua"
        }
      ]
    },
  },
  "ai-sales-assistant": {
    uk: {
      "brief": "Я створив Stepan для філії IT STEP, якою керував у Джакарті, коли за цю ідею більше нікому було взятися. Він відповідав на вхідні повідомлення в Instagram і WhatsApp, вів поетапну розмову про продаж мовою клієнта й передавав ліда менеджеру з указаною причиною. У липні та серпні 2026 року він обробляв близько 80 вхідних розмов на день.",
      "sections": [
        {
          "title": "Навіщо це було потрібно",
          "body": "Філія платила за ліди, але значна частина з них замовкала після пропущеного дзвінка або повільної першої відповіді. До того ж менеджери переводили розмови в особисті чати, де ніхто не бачив, що відбувається далі."
        },
        {
          "title": "Що він робив",
          "body": "Відповідав на вхідні розмови, кваліфікував ліда, фіксував контекст і передавав розмову людині, коли було потрібне людське рішення. Він був підключений до CRM, тож пропущений дзвінок міг запускати повторний контакт.",
          "note": "Агент розбирає чергу; важливі рішення ухвалюють люди."
        },
        {
          "title": "Найважливіша перевірка безпеки",
          "body": "Одного разу в живому чаті агент назвав ціну, якої не існувало. Відтоді відповіді, де згадано ціну, посилання чи пропозицію, перед надсиланням звіряються з фактами самого бізнесу. Якщо твердження нічим не підкріплене, агент переписує відповідь або передає розмову людині.",
          "note": "ШІ, який може вигадати ціну, потребує перевірки, а не кращого промпту."
        }
      ],
      "links": [
        {
          "label": "Stepan"
        },
        {
          "label": "Обговорити агента для вашого бізнесу"
        }
      ],
      "tagline": "ШІ-агент, який спілкується з лідами й передає їх людям.",
      "place": "Створено для IT STEP Academy Jakarta",
      "role": "Ідея, архітектура і розробка",
      "team": "Зробив сам, із розробкою за допомогою ШІ"
    },
    ru: {
      "tagline": "ИИ-агент, который общается с заявками и передаёт их людям.",
      "place": "Сделан для IT STEP Academy Jakarta",
      "role": "Идея, архитектура и разработка",
      "team": "Сделал сам, с разработкой при помощи ИИ",
      "brief": "Я сделал Stepan для филиала IT STEP, которым руководил в Джакарте, — взяться за эту идею было больше некому. Он отвечал на входящие сообщения в Instagram и WhatsApp, вёл продажный разговор по этапам на языке клиента и передавал заявку менеджеру с указанием причины. В июле и августе 2026 года он обрабатывал около 80 входящих диалогов в день.",
      "sections": [
        {
          "title": "Зачем он был нужен",
          "body": "Филиал платил за заявки, но большая их часть замолкала после пропущенного звонка или медленного первого ответа. К тому же менеджеры уводили диалоги в личные чаты, где никто не видел, что происходит дальше."
        },
        {
          "title": "Что он делал",
          "body": "Отвечал на входящие диалоги, квалифицировал заявку, записывал контекст и передавал её человеку, когда требовалось решение человека. Он был подключён к CRM, чтобы пропущенный звонок мог запускать повторный контакт.",
          "note": "Агент разбирает очередь, а важные решения принимают люди."
        },
        {
          "title": "Самая важная проверка",
          "body": "Однажды в живом чате агент назвал цену, которой не существовало. После этого ответы, где упоминается цена, ссылка или предложение, перед отправкой сверяются с фактами самого бизнеса. Если утверждение не подтверждается, агент переписывает ответ или передаёт диалог человеку.",
          "note": "ИИ, способному выдумать цену, нужна проверка, а не промпт получше."
        }
      ],
      "links": [
        {
          "label": "Stepan"
        },
        {
          "label": "Обсудить агента для вашего бизнеса"
        }
      ]
    },
    id: {
      "tagline": "AI agent yang berbicara dengan leads dan menyerahkannya ke manusia.",
      "place": "Dibangun untuk IT STEP Academy Jakarta",
      "role": "Ide, arsitektur, dan pembangunan",
      "team": "Saya bangun sendiri dengan pengembangan berbantuan AI",
      "brief": "Saya membangun Stepan untuk cabang IT STEP yang saya pimpin di Jakarta, karena tidak ada orang lain yang bisa mengerjakan ide ini. Stepan menjawab pesan masuk di Instagram dan WhatsApp, menjalankan percakapan penjualan bertahap dalam bahasa pelanggan, lalu menyerahkan lead ke manajer dengan alasan yang jelas. Selama Juli dan Agustus 2026, Stepan menangani sekitar 80 percakapan masuk per hari.",
      "sections": [
        {
          "title": "Mengapa ini dibutuhkan",
          "body": "Cabang ini membayar untuk leads, tetapi banyak di antaranya berhenti merespons setelah panggilan tidak terjawab atau balasan pertama yang lambat. Para manajer juga memindahkan percakapan ke chat pribadi, sehingga tidak ada yang bisa melihat apa yang terjadi selanjutnya."
        },
        {
          "title": "Apa yang dilakukannya",
          "body": "Stepan menjawab percakapan masuk, mengkualifikasi lead, mencatat konteksnya, dan meneruskannya ke orang saat dibutuhkan keputusan manusia. Stepan terhubung ke CRM, sehingga panggilan yang tidak terjawab bisa memicu follow-up.",
          "note": "Agent mengerjakan antrean; manusia mengambil keputusan yang penting."
        },
        {
          "title": "Pengecekan keamanan yang paling penting",
          "body": "Satu kali, di chat langsung, agent menyebutkan harga yang tidak ada. Sejak itu, balasan yang menyebut harga, link, atau penawaran dicek terhadap fakta bisnis sendiri sebelum dikirim. Jika sebuah klaim tidak didukung fakta, agent menulis ulang balasannya atau menyerahkan percakapan ke manusia.",
          "note": "AI yang bisa mengarang harga butuh pengecekan, bukan prompt yang lebih bagus."
        }
      ],
      "links": [
        {
          "label": "Stepan"
        },
        {
          "label": "Diskusikan agent untuk bisnis Anda"
        }
      ]
    },
  },
  "aibroker": {
    uk: {
      "brief": "Мої ШІ-системи — серед них пам’ять Vera і агент з продажів Stepan — звертаються до багатьох провайдерів моделей. AIbroker — єдиний шлюз перед усіма ними: ключі провайдерів зберігаються в одному місці, а виклики йдуть через шлюз або з тимчасовим доступом, кожен виклик записується з оцінкою вартості, а непрацюючі ключі та ключі, що вперлися в ліміт запитів, автоматично виводяться з ротації.",
      "sections": [
        {
          "title": "Чому витрати треба перевіряти, а не вірити їм",
          "body": "27 червня 2026 року оновлення бібліотеки непомітно змінило спосіб розрахунку вартості викликів, і всі записані витрати стали $0. Пізніше між записаними витратами й рахунком провайдера виникла розбіжність у $122. Відтоді записані витрати вважаються оцінкою і звіряються з рахунком самого провайдера.",
          "note": "Контроль витрат, який вірить власним оцінкам, — не контроль витрат."
        },
        {
          "title": "Два способи обслуговувати проєкт",
          "body": "Режим проксі: брокер сам звертається до моделі й повертає відповідь, тож проєкт ніколи не бачить ключа. Режим оренди: для API, які не вкладаються в стандартний інтерфейс, брокер видає короткоживучий ключ і записує використання, коли дані про нього повертаються."
        },
        {
          "title": "Що тримає систему в робочому стані",
          "body": "Монітор запускається кожні десять хвилин: збійні ключі перевіряє щоразу, справні — приблизно раз на годину. Ключ, що вперся в ліміт запитів, відкладається на кілька хвилин; ключ, що вичерпав місячну квоту, — до її оновлення. Ліміти витрат задаються для кожного проєкту окремо."
        }
      ],
      "links": [
        {
          "label": "GitHub — zapleoceo/AIbroker"
        }
      ],
      "tagline": "Один шлюз для всіх ШІ-провайдерів, якими користуються мої системи.",
      "place": "На власному сервері",
      "role": "Архітектура і розробка",
      "team": "Зробив сам, із розробкою за допомогою ШІ"
    },
    ru: {
      "tagline": "Единый шлюз ко всем ИИ-провайдерам, которые используют мои системы.",
      "place": "На собственном сервере",
      "role": "Архитектура и разработка",
      "team": "Сделал сам, с разработкой при помощи ИИ",
      "brief": "Мои ИИ-системы — среди них память Vera и агент продаж Stepan — обращаются ко многим провайдерам моделей. AIbroker — единый шлюз перед всеми ними: ключи провайдеров хранятся в одном месте, а вызовы идут через шлюз или с временным доступом, каждый вызов записывается с оценкой стоимости, а мёртвые ключи и ключи, упёршиеся в лимит, автоматически убираются из ротации.",
      "sections": [
        {
          "title": "Почему расходы нужно проверять, а не принимать на веру",
          "body": "27 июня 2026 года обновление библиотеки незаметно изменило расчёт стоимости вызовов, и все записанные расходы стали $0. Позже обнаружилось расхождение в $122 между записанными расходами и счётом провайдера. С тех пор записанные расходы считаются оценкой и сверяются с собственным счётом провайдера.",
          "note": "Контроль расходов, который верит своим же оценкам, — это не контроль."
        },
        {
          "title": "Два способа обслуживать проект",
          "body": "Режим прокси: брокер сам вызывает модель и возвращает ответ, так что проект никогда не видит ключ. Режим аренды: для API, которые не укладываются в стандартный интерфейс, брокер выдаёт ключ на короткий срок и записывает расход, когда ключ возвращается."
        },
        {
          "title": "Что обеспечивает работу",
          "body": "Мониторинг запускается каждые десять минут: сбойные ключи проверяет каждый раз, исправные — примерно раз в час. Ключ, упёршийся в лимит запросов, откладывается на несколько минут; ключ, исчерпавший месячную квоту, — до её обновления. Лимиты расходов задаются для каждого проекта."
        }
      ],
      "links": [
        {
          "label": "GitHub — zapleoceo/AIbroker"
        }
      ]
    },
    id: {
      "tagline": "Satu gateway untuk semua penyedia AI yang dipakai sistem saya.",
      "place": "Self-hosted",
      "role": "Arsitektur dan pembangunan",
      "team": "Saya bangun sendiri dengan pengembangan berbantuan AI",
      "brief": "Sistem AI saya — termasuk memori Vera dan sales agent Stepan — memanggil banyak penyedia model. AIbroker adalah satu gateway di depan semuanya: key penyedia disimpan di satu tempat, dengan panggilan lewat gateway atau akses sewa berbatas waktu, setiap panggilan dicatat dengan estimasi biaya, dan key yang mati atau terkena rate limit dikeluarkan dari rotasi secara otomatis.",
      "sections": [
        {
          "title": "Mengapa biaya harus dicek, bukan dipercaya",
          "body": "Pada 27 Juni 2026, sebuah update library diam-diam mengubah cara biaya panggilan dihitung, dan semua biaya yang tercatat menjadi $0. Kemudian muncul selisih $122 antara pengeluaran yang tercatat dan invoice dari penyedia. Sejak itu, biaya yang tercatat diperlakukan sebagai estimasi dan dicocokkan dengan invoice dari penyedia itu sendiri.",
          "note": "Pengaman biaya yang percaya pada estimasinya sendiri bukanlah pengaman biaya."
        },
        {
          "title": "Dua cara melayani proyek",
          "body": "Mode proxy: broker memanggil model dan mengembalikan jawabannya, sehingga proyek tidak pernah melihat key. Mode lease: untuk API yang tidak cocok dengan interface standar, broker memberikan key berumur pendek dan mencatat pemakaiannya saat key itu dikembalikan."
        },
        {
          "title": "Yang membuatnya tetap berjalan",
          "body": "Sebuah monitor berjalan setiap sepuluh menit: key yang bermasalah dicek di setiap putaran, key yang sehat kira-kira sekali per jam. Key yang terkena rate limit diparkir beberapa menit; key yang kuota bulanannya habis diparkir sampai kuotanya direset. Batas pengeluaran diatur per proyek."
        }
      ],
      "links": [
        {
          "label": "GitHub — zapleoceo/AIbroker"
        }
      ]
    },
  },
};

export function getCaseI18n(slug: string, locale: Locale): CaseI18n | null {
  if (locale === 'en') return null;
  return CASES_I18N[slug]?.[locale as Exclude<Locale, 'en'>] ?? null;
}
