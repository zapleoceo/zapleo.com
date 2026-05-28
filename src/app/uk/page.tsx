import { LocaleHero } from '@/components/locale-hero';

export const metadata = {
  title: 'Дмитро Запорожець · zapleo',
  description: 'Дванадцять років агенції в Дніпрі. Зараз — філія IT академії в Джакарті та AI-доповнений підхід до викладання.',
  alternates: { canonical: 'https://zapleo.com/uk/' },
};

export default function UKHome() {
  return (
    <LocaleHero
      locale="uk"
      eyebrow="Дніпро → Велігама → В'єтнам → Джакарта"
      title={
        <>
          Спочатку оператор.{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>Зараз — викладач.</em>
        </>
      }
      intro="Дванадцять років агенції в Дніпрі. 40+ проєктів. Зараз — керую філією IT академії в Джакарті та будую AI-доповнений підхід до викладання технологій для Південно-Східної Азії."
      ctaPrimary={{ label: 'Проєкти ·  Work →', href: '/work/' }}
      ctaSecondary={{ label: 'Шлях · Journey', href: '/journey/' }}
      contextNote="Українська сторінка веде з архіву: Дніпро, агенція 2010-2022, перехід на південь у 2022-му. Англомовну версію з акцентом на Джакарту дивіться через перемикач EN угорі."
    />
  );
}
