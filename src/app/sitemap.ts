import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const EN_ROUTES = ['', '/work', '/journey', '/now', '/journal', '/contact', '/colophon'];
const NON_EN_LOCALES = ['uk', 'ru', 'id'] as const;
const SUB_ROUTES = ['/work', '/journey', '/now', '/journal', '/contact', '/colophon'];

const AI_DIMA_ROUTES = [
  { path: '/ai-dima', priority: 0.9, freq: 'monthly' as const },
  { path: '/ai-dima/roadmap', priority: 0.95, freq: 'monthly' as const },
  { path: '/ai-dima/resources', priority: 0.85, freq: 'monthly' as const },
  { path: '/ai-dima/playbook', priority: 0.8, freq: 'yearly' as const },
  { path: '/ai-dima/kids', priority: 0.75, freq: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // EN routes (no prefix)
  for (const route of EN_ROUTES) {
    entries.push({
      url: `https://zapleo.com${route}`,
      lastModified: now,
      changeFrequency: route === '/now' ? 'monthly' : 'yearly',
      priority: route === '' ? 1.0 : 0.7,
    });
  }

  // Non-EN home pages
  for (const locale of NON_EN_LOCALES) {
    entries.push({
      url: `https://zapleo.com/${locale}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  }

  // Non-EN sub-pages
  for (const locale of NON_EN_LOCALES) {
    for (const route of SUB_ROUTES) {
      entries.push({
        url: `https://zapleo.com/${locale}${route}`,
        lastModified: now,
        changeFrequency: route === '/now' ? 'monthly' : 'yearly',
        priority: 0.65,
      });
    }
  }

  // AI-Dima pages (EN only)
  for (const r of AI_DIMA_ROUTES) {
    entries.push({
      url: `https://zapleo.com${r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    });
  }

  return entries;
}
