import { notFound } from 'next/navigation';
import { WorkPageContent } from '@/components/pages/work-content';
import { getDict } from '@/i18n/dict';
import { isLocale, type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const t = getDict(locale);
  return { title: t.nav.work, description: t.work.intro };
}

export default async function LocaleWorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <WorkPageContent locale={locale as Locale} />;
}
