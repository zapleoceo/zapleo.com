import { notFound } from 'next/navigation';
import { ColophonPageContent } from '@/components/pages/colophon-content';
import { getDict } from '@/i18n/dict';
import { isLocale, type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const t = getDict(locale);
  return { title: t.nav.colophon, description: t.colophon.intro };
}

export default async function LocaleColophonPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <ColophonPageContent locale={locale as Locale} />;
}
