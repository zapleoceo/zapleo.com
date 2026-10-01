import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NowPageContent } from '@/components/pages/now-content';
import { RECOVERY_COPY } from '@/content/recovery';
import { isLocale, type Locale } from '@/i18n/config';
import { localeAlternates } from '@/i18n/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  return {
    title: RECOVERY_COPY[locale].home.aboutTitle,
    description: RECOVERY_COPY[locale].home.aboutBody,
    alternates: localeAlternates(locale, 'now'),
  };
}

export default async function LocaleNowPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <NowPageContent locale={locale as Locale} />;
}
