import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AIPitch } from '@/components/ai-pitch';
import { CTABlock } from '@/components/cta-block';
import { Footer } from '@/components/footer';
import { LocaleHero } from '@/components/locale-hero';
import { NowThen } from '@/components/now-then';
import { PullQuote } from '@/components/pull-quote';
import { TrustedStrip } from '@/components/trusted-strip';
import { WorkTeaser } from '@/components/work-teaser';
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

  const l = locale as Locale;
  const t = getDict(l);
  const th = t.home;

  return (
    <>
      <main>
        <LocaleHero
          locale={l}
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
        <NowThen locale={l} />
        <TrustedStrip locale={l} />
        <AIPitch locale={l} />
        <WorkTeaser locale={l} />
        <PullQuote locale={l} />
        <CTABlock locale={l} />
      </main>
      <Footer locale={l} />
    </>
  );
}
