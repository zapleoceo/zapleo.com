import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocaleHero } from '@/components/locale-hero';
import { getDict } from '@/i18n/dict';
import { isLocale, type Locale } from '@/i18n/config';
import { localeAlternates } from '@/i18n/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const t = getDict(locale);
  return {
    title: 'Dmitriy Zaporozhets · zapleo',
    description: t.home.lead,
    alternates: localeAlternates(locale, ''),
  };
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === 'en') notFound();

  const t = getDict(locale as Locale);
  const th = t.home;

  return (
    <LocaleHero
      locale={locale as Locale}
      eyebrow={th.eyebrow}
      title={
        <>
          {th.headLine1}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>{th.headLine2}</em>
        </>
      }
      intro={th.lead}
      ctaPrimary={{ label: `${th.ctaWork} →`, href: `/${locale}/work/` }}
      ctaSecondary={{ label: th.ctaJourney, href: `/${locale}/journey/` }}
      contextNote={th.contextNote}
    />
  );
}
