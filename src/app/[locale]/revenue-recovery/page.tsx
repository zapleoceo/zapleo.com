import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RecoveryLanding } from '@/components/recovery-landing';
import { RECOVERY_COPY } from '@/content/recovery';
import { isLocale, type Locale } from '@/i18n/config';
import { localeAlternates } from '@/i18n/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const copy = RECOVERY_COPY[locale].service;
  return {
    title: copy.eyebrow,
    description: copy.intro,
    alternates: localeAlternates(locale, 'revenue-recovery'),
  };
}

export default async function LocaleRevenueRecoveryPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <RecoveryLanding locale={locale as Locale} />;
}
