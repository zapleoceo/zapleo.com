import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NowPageContent } from '@/components/pages/now-content';
import { getDict } from '@/i18n/dict';
import { isLocale, type Locale } from '@/i18n/config';
import { localeAlternates } from '@/i18n/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const t = getDict(locale);
  return {
    title: t.nav.now,
    description: t.now.intro,
    alternates: localeAlternates(locale, 'now'),
  };
}

export default async function LocaleNowPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <NowPageContent locale={locale as Locale} />;
}
