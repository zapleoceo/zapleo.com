import { notFound } from 'next/navigation';
import { JournalPageContent } from '@/components/pages/journal-content';
import { getDict } from '@/i18n/dict';
import { isLocale, type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const t = getDict(locale);
  return { title: t.nav.journal, description: t.journal.intro };
}

export default async function LocaleJournalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <JournalPageContent locale={locale as Locale} />;
}
