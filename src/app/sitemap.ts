import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const ROUTES = ['', '/work', '/journey', '/now', '/journal', '/contact', '/colophon', '/ai-roadmap'];
const LOCALES = ['', '/uk', '/ru', '/id'];

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
        changeFrequency: route === '/now' ? 'monthly' : route === '/ai-roadmap' ? 'monthly' : 'yearly',
        priority: route === '' ? 1.0 : route === '/ai-roadmap' ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
