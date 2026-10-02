import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AboutPageContent } from '@/components/pages/about-content';
import { HOME_COPY } from '@/content/home';
import { isLocale, type Locale } from '@/i18n/config';
import { localeAlternates } from '@/i18n/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  return {
    title: HOME_COPY[locale].about.title,
    description: HOME_COPY[locale].about.intro,
    alternates: localeAlternates(locale, 'about'),
  };
}

export default async function LocaleAboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <AboutPageContent locale={locale as Locale} />;
}
