const BASE = 'https://zapleo.com';

/** All locale+hreflang pairs for a given path segment (no leading slash). */
export function hreflang(path: string): Record<string, string> {
  const enUrl = path ? `${BASE}/${path}/` : `${BASE}/`;
  return {
    en: enUrl,
    uk: path ? `${BASE}/uk/${path}/` : `${BASE}/uk/`,
    ru: path ? `${BASE}/ru/${path}/` : `${BASE}/ru/`,
    id: path ? `${BASE}/id/${path}/` : `${BASE}/id/`,
    'x-default': enUrl,
  };
}

/** Alternates for EN pages: canonical + hreflang. */
export function pageAlternates(path: string) {
  return {
    canonical: path ? `${BASE}/${path}/` : `${BASE}/`,
    languages: hreflang(path),
  };
}

/** Alternates for locale pages: locale canonical + hreflang. */
export function localeAlternates(locale: string, path: string) {
  return {
    canonical: path ? `${BASE}/${locale}/${path}/` : `${BASE}/${locale}/`,
    languages: hreflang(path),
  };
}
