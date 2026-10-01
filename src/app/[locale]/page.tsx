import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ClientHome } from '@/components/client-home';
import { RECOVERY_COPY } from '@/content/recovery';
import { isLocale, type Locale } from '@/i18n/config';
import { localeAlternates } from '@/i18n/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  return {
    title: 'Dmitriy Zaporozhets · zapleo',
    description: RECOVERY_COPY[locale].home.lead,
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

  return <ClientHome locale={locale as Locale} />;
}
