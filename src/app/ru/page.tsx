import { LocaleHero } from '@/components/locale-hero';

export const metadata = {
  title: 'Дмитрий Запорожец · zapleo',
  description: 'Двенадцать лет агентства из Днепра. Сейчас — филиал IT-академии в Джакарте и AI-дополненная методика преподавания.',
  alternates: { canonical: 'https://zapleo.com/ru/' },
};

export default function RUHome() {
  return (
    <LocaleHero
      locale="ru"
      eyebrow="Днепр → Велигама → Вьетнам → Джакарта"
      title={
        <>
          Сначала оператор.{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>Сейчас — преподаватель.</em>
        </>
      }
      intro="Двенадцать лет агентства в Днепре. 40+ проектов. Сейчас руковожу филиалом IT-академии в Джакарте и строю AI-дополненный подход к преподаванию для Юго-Восточной Азии."
      ctaPrimary={{ label: 'Работы · Work →', href: '/work/' }}
      ctaSecondary={{ label: 'Путь · Journey', href: '/journey/' }}
      contextNote="Русская версия ведёт с архива: Днепр, агентство 2010-2022, переезд на юг в 2022-м. Английская версия с акцентом на Джакарту — через переключатель EN вверху."
    />
  );
}
