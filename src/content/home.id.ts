import type { HomeCopy } from './home';

export const id: HomeCopy = {
  meta: {
    title: 'Dmitriy Zaporozhets · Zapleo — AI yang bekerja di bisnis Anda',
    description:
      'Pendiri Zapleo sejak 2010. Saya mencari titik di mana bisnis yang sedang berjalan kehilangan uang atau waktu — di penjualan, operasional, atau tools AI-nya — lalu membangun solusi yang terfokus dan diuji langsung di alur kerja nyata.',
  },
  nav: { work: 'Karya', about: 'Tentang', contact: 'Kontak', sprint: 'Revenue sprint' },
  hero: {
    eyebrow: 'Dmitriy Zaporozhets · AI di bisnis nyata · Nha Trang, bekerja untuk klien di seluruh dunia',
    title: 'AI yang bekerja di bisnis Anda, bukan cuma saat demo.',
    lead: 'Saya Dmitriy, pendiri Zapleo sejak 2010. Saya mencari titik di mana bisnis yang sedang berjalan kehilangan uang atau waktu — di penjualan, operasional, atau tools AI-nya — lalu membangun solusi yang terfokus dan diuji langsung di alur kerja nyata.',
    ctaPrimary: 'Ceritakan apa yang tidak berjalan',
    ctaSecondary: 'Lihat apa yang sudah saya bangun',
    profile: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dmitriy-zaporozhets-83b15375/' },
    flow: { inputs: ['Iklan', 'Chat', 'Telepon', 'CRM'], output: 'Satu sistem yang berjalan' },
  },
  doors: {
    label: 'Di mana saya bisa membantu',
    title: 'Tiga jenis masalah yang saya tangani.',
    items: [
      {
        key: 'sales',
        title: 'Calon pelanggan hilang di antara iklan, chat, telepon, dan CRM',
        problem: 'Anda membayar untuk leads, tetapi tidak ada yang bisa menjawab leads mana yang sudah dibalas, oleh siapa, dan di titik mana mereka berhenti merespons.',
        approach: 'Saya menelusuri satu funnel dari awal sampai akhir, mengukur di mana orang keluar, lalu merancang dan menguji perbaikannya — mulai dari AI agent yang menjawab dalam bahasa pelanggan sampai serah terima yang rapi ke tim sales Anda.',
        proof: [
          { label: 'Stepan', href: 'https://stepan2.zapleo.com/' },
          { label: 'Funnel IT STEP Jakarta', href: '/revenue-recovery/' },
        ],
        entry: { label: 'Revenue Recovery Sprint', href: '/revenue-recovery/' },
      },
      {
        key: 'operations',
        title: 'Bisnis berjalan dengan rutinitas manual',
        problem: 'Pembayaran dicocokkan secara manual, pesanan terlewat, dan laporan datang terlambat atau tidak datang sama sekali.',
        approach: 'Saya menghubungkan tools yang sudah Anda bayar, mengotomatiskan pekerjaan copy-paste, dan menyerahkan keputusan kepada orang.',
        proof: [{ label: 'Veranda', href: '/work/' }],
      },
      {
        key: 'ai-infra',
        title: 'Anda sudah memakai AI, tetapi mahal atau tidak bisa diandalkan',
        problem: 'Tagihan terus naik, jawaban makin melenceng, dan satu harga karangan di chat pelanggan bisa lebih mahal daripada seluruh sistemnya.',
        approach: 'Saya memasang lapisan yang tidak mencolok tetapi membuat AI aman untuk diandalkan: routing antar model, kontrol biaya, dan pengecekan yang mencegah agent menyatakan hal yang tidak bisa ia buktikan.',
        proof: [{ label: 'AIbroker', href: '/work/aibroker/' }],
      },
    ],
  },
  depth: {
    label: 'Seberapa dalam',
    title: 'Vera — memori AI yang saya bangun untuk diri sendiri.',
    body: 'Sebelum menjual sebuah ide, saya menjalankan pekerjaan saya sendiri di atasnya. Vera adalah prototipe pribadi yang mengumpulkan korespondensi kerja saya ke satu tempat dan mencari informasi berdasarkan makna, bukan kata kunci.',
    flow: { inputs: ['Pesan', 'Dokumen', 'Keputusan'], output: 'Satu jawaban, beserta sumbernya' },
    href: '/work/',
  },
  cases: {
    label: 'Karya pilihan',
    title: 'Apa yang saya bangun, dan apa yang kami lihat.',
    note: 'Angka-angka ini menggambarkan pekerjaan yang diperiksa. Ini bukan janji hasil penjualan.',
    fields: { problem: 'Masalah', built: 'Yang saya bangun', observed: 'Yang kami lihat', limits: 'Batasan' },
    items: [
      {
        slug: 'it-step-jakarta',
        name: 'IT STEP Academy Jakarta — penjualan inbound',
        problem: 'Cabang ini membayar untuk leads, tetapi tidak bisa mengetahui iklan mana yang menghasilkan pertanyaan masuk, atau di mana pertanyaan itu hilang.',
        built: 'Atribusi dari iklan ke lead, tinjauan laporan CRM atas 1.956 panggilan selama April 2026, dan AI sales agent di Instagram dan WhatsApp dengan serah terima ke manusia.',
        observed: 'Atribusi naik dari 45,2% menjadi 93,6% dari lead yang berasal dari iklan (1.335 lead, Juli 2026). Menurut laporan itu, sekitar 40% panggilan tidak pernah tersambung dan seperempat lainnya kurang dari 30 detik: kebocorannya ada setelah panggilan tidak terjawab, bukan pada jumlah lead.',
        limits: 'Satu cabang, satu pasar. Analisis ini menemukan letak kebocoran; analisis itu sendiri tidak menaikkan penjualan.',
        href: '/revenue-recovery/',
      },
      {
        slug: 'aibroker',
        name: 'AIbroker — satu gateway untuk semua penyedia AI',
        problem: 'Beberapa sistem AI memanggil banyak penyedia model, masing-masing dengan key, limit, dan tagihannya sendiri — dan biaya yang tercatat tidak bisa dipercaya.',
        built: 'Satu gateway self-hosted: key penyedia disimpan di satu tempat, dengan panggilan lewat gateway atau akses sewa berbatas waktu, setiap panggilan dicatat dengan estimasi biaya, dan sebuah monitor mengeluarkan key yang mati atau terkena rate limit dari rotasi.',
        observed: 'Satu kali, update library membuat semua biaya yang tercatat menjadi $0, dan muncul selisih $122 dibanding invoice dari penyedia. Keduanya terdeteksi; kini biaya yang tercatat diperlakukan sebagai estimasi dan dicocokkan dengan invoice. Pada Agustus 2026, gateway ini memiliki 14 penyedia yang dikonfigurasi, dan estimasi biayanya untuk seluruh sistem saya rata-rata $0,66 per hari.',
        limits: 'Dibangun untuk sistem saya sendiri, belum dijalankan untuk klien luar.',
        href: '/work/aibroker/',
      },
    ],
  },
  history: {
    label: 'Sejak 2010',
    title: 'Enam belas tahun di antara masalah bisnis dan tim yang menyelesaikannya.',
    body: 'Saya mendirikan Zapleo pada 2010 sebagai perusahaan pengembangan web dan mobile untuk klien di AS dan Eropa. Tugas saya adalah mengubah masalah bisnis klien menjadi sesuatu yang bisa dibangun oleh tim. Sampai sekarang pun masih begitu. Kini AI memungkinkan saya membuat prototipe dan membangun jauh lebih banyak bagian dari pekerjaan itu sendiri.',
    trustLabel: 'Proyek pilihan',
    trust: ['IT STEP Academy', 'Veranda', 'Pasijou', 'APCU'],
  },
  principles: {
    title: 'Cara saya bekerja',
    items: [
      'Pertama, saya mencari di mana uang atau waktu benar-benar bocor. Baru setelah itu kita memutuskan apa yang dibangun.',
      'Sejak awal kita sepakati apa yang tidak boleh diotomatiskan.',
      'Saya bertanggung jawab atas implementasinya dan atas pengecekan hasilnya di operasional nyata.',
    ],
  },
  engage: {
    title: 'Cara bekerja sama',
    intro: 'Setiap kerja sama ditentukan cakupannya secara tertulis sebelum dimulai.',
    steps: [
      { name: 'Percakapan', body: 'Anda menjelaskan proses yang mengganggu Anda. Saya katakan dengan jujur apakah proses itu layak untuk disentuh.' },
      { name: 'Diagnosis', body: 'Cakupan tetap, biaya tetap. Untuk funnel penjualan, ini adalah Revenue Recovery Sprint.', href: '/revenue-recovery/' },
      { name: 'Pembangunan', body: 'Satu sistem sampai berjalan di operasional nyata, dengan kondisi sebelum dan sesudah yang terukur.' },
      { name: 'Kepemimpinan AI paruh waktu', body: 'Kerja sama berkelanjutan dengan cakupan jelas, untuk perusahaan yang ingin ada orang senior yang ikut bertanggung jawab atas keputusan AI bersama mereka.' },
    ],
  },
  about: {
    eyebrow: 'Tentang',
    title: 'Operator yang membangun dengan AI.',
    intro: 'Saya pernah menjalankan perusahaan software, memegang P&L sebuah cabang pendidikan, dan kini ikut memiliki serta mengelola sebuah restoran di Nha Trang. Sistem yang saya butuhkan, saya bangun sendiri.',
    story: 'Zapleo dimulai pada 2010 sebagai perusahaan pengembangan untuk klien di AS dan Eropa. Pada 2026 saya memimpin cabang IT STEP Academy di Jakarta, tempat saya membangun sales agent dan analitik funnel yang dijelaskan di situs ini. Saya tinggal di Nha Trang, Vietnam, dan bekerja dengan perusahaan secara remote.',
    methodTitle: 'Mengapa ini berhasil',
    methodBody: 'Saya lebih memilih menemukan solusi sederhana untuk masalah yang sulit daripada membicarakannya berbulan-bulan. Saya mengukur sebelum membangun, tetap melibatkan manusia di tempat yang butuh pertimbangan, dan mengecek sistem setelah berjalan.',
  },
  contact: {
    title: 'Proses mana yang paling mengganggu Anda?',
    body: 'Dua atau tiga kalimat sudah cukup: apa bisnis Anda, apa yang tidak berjalan, dan apa yang sudah Anda coba.',
    emailLabel: 'Email Dmitriy',
    emailSubject: 'Proses yang tidak berjalan',
    emailBody: 'Halo Dmitriy,\n\nBisnis kami: \nYang tidak berjalan: \nYang sudah kami coba: \n',
  },
  footer: { tagline: 'AI yang bekerja di bisnis Anda, bukan cuma saat demo.' },
};
