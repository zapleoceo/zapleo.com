import { notFound } from 'next/navigation';
import { JourneyPageContent } from '@/components/pages/journey-content';
import { getDict } from '@/i18n/dict';
import { isLocale, type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const t = getDict(locale);
  return { title: t.nav.journey, description: t.journey.intro };
}

export default async function LocaleJourneyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <JourneyPageContent locale={locale as Locale} />;
}
