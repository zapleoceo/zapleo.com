export const LOCALES = ['en', 'uk', 'ru', 'id'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(s: string): s is Locale {
  return (LOCALES as readonly string[]).includes(s);
}

export const LOCALE_LABEL: Record<Locale, { label: string; native: string }> = {
  en: { label: 'EN', native: 'English' },
  uk: { label: 'UK', native: 'Українська' },
  ru: { label: 'RU', native: 'Русский' },
  id: { label: 'ID', native: 'Bahasa' },
};

export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  uk: 'uk',
  ru: 'ru',
  id: 'id',
};
