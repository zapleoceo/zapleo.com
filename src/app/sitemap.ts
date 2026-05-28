import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const ROUTES = ['', '/work', '/journey', '/now', '/journal', '/contact', '/colophon'];
const LOCALES = ['', '/uk', '/ru', '/id'];

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

  for (const route of ROUTES) {
    for (const loc of LOCALES) {
      // Only home is localised for now; other routes have EN content only.
      if (loc !== '' && route !== '') continue;
      entries.push({
        url: `https://zapleo.com${loc}${route}`,
        lastModified: now,
        changeFrequency: route === '/now' ? 'monthly' : 'yearly',
        priority: route === '' ? 1.0 : 0.7,
      });
    }
  }

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
