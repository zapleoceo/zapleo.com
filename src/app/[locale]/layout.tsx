import type { Locale } from '@/i18n/config';
import { HTML_LANG } from '@/i18n/config';
import LangPatcher from '@/components/lang-patcher';

export function generateStaticParams() {
  // EN is the default locale at root — only non-EN locales get the [locale] prefix
  return [{ locale: 'uk' }, { locale: 'ru' }, { locale: 'id' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = HTML_LANG[locale as Locale] ?? 'en';

  return (
    <>
      {/* Patches document.documentElement.lang after hydration */}
      <LangPatcher lang={lang} />
      {children}
    </>
  );
}
