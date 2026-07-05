import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { CaseContent } from '@/components/pages/case-content';
import { Stepan2Redirect } from '@/components/stepan2-redirect';
import { CASES } from '@/data/cases';
import { isLocale, type Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';
import { localeAlternates } from '@/i18n/seo';

const STEPAN2_URL = 'https://stepan2.zapleo.com';

const NON_EN_LOCALES = ['uk', 'ru', 'id'] as const;

export function generateStaticParams() {
  return NON_EN_LOCALES.flatMap((locale) =>
    Object.keys(CASES).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const c = CASES[slug];
  if (!c || !isLocale(locale) || locale === 'en') return { title: 'Not found' };
  if (slug === 'ai-sales-assistant') {
    return {
      title: 'AI Sales Assistant — Stepan',
      description: 'AI sales agent for Instagram, WhatsApp and Messenger DMs.',
      alternates: { canonical: STEPAN2_URL },
      openGraph: { url: STEPAN2_URL },
    };
  }
  const localTagline = getDict(locale as Locale).work.items[slug]?.tagline ?? c.tagline;
  return {
    title: c.name,
    description: localTagline,
    openGraph: {
      type: 'article',
      url: `https://zapleo.com/${locale}/work/${slug}/`,
      title: `${c.name} — zapleo`,
      description: localTagline,
      images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630 }],
    },
    alternates: localeAlternates(locale, `work/${slug}`),
  };
}

export default async function LocaleCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();

  const c = CASES[slug];
  if (!c) notFound();

  if (slug === 'ai-sales-assistant') {
    return <Stepan2Redirect />;
  }

  const t = getDict(locale as Locale);
  const tagline = t.work.items[slug]?.tagline ?? c.tagline;

  return (
    <PageShell
      eyebrow={`${t.common.chapter(2, 6)} · ${c.year}`}
      title={
        <>
          {c.name}.{' '}
          <em style={{ fontStyle: 'italic', color: c.accent }}>{tagline}</em>
        </>
      }
      chapter="CASE"
      locale={locale as Locale}
    >
      <CaseContent c={c} locale={locale as Locale} slug={slug} />
    </PageShell>
  );
}
