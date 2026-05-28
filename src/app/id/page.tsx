import { LocaleHero } from '@/components/locale-hero';

export const metadata = {
  title: 'Dmitriy Zaporozhets · zapleo · Jakarta',
  description: 'Branch Director IT STEP Academy Jakarta. 12 tahun pengalaman agensi web dari Ukraina. Sekarang membangun pendekatan AI-augmented untuk pendidikan teknologi di Asia Tenggara.',
  alternates: { canonical: 'https://zapleo.com/id/' },
};

export default function IDHome() {
  return (
    <LocaleHero
      locale="id"
      eyebrow="Dnipro → Weligama → Vietnam → Jakarta"
      title={
        <>
          Operator dulu.{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>Pendidik sekarang.</em>
        </>
      }
      intro="Branch Director IT STEP Academy Jakarta. Dua belas tahun mengelola agensi web di Ukraina, 40+ proyek klien. Sekarang membangun jalur karier tech di Asia Tenggara — dengan AI dalam alur kerja, manusia di kursi."
      ctaPrimary={{ label: 'Karya · Work →', href: '/work/' }}
      ctaSecondary={{ label: 'Perjalanan · Journey', href: '/journey/' }}
      contextNote="Halaman Indonesia membuka cerita dengan IT STEP Jakarta dan kursus Vibe Coding yang sedang dibangun. Untuk arsip agensi Dnipro yang lebih panjang — pilih EN di pojok kanan atas."
    />
  );
}
