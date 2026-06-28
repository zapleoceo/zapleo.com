import type { MetadataRoute } from 'next';
import { hreflang } from '@/i18n/seo';

export const dynamic = 'force-static';

const MULTI_ROUTES = ['', 'work', 'journey', 'now', 'journal', 'contact', 'colophon'];
const WORK_SLUGS = ['pasijou', 'apcu', 'aibroker', 'ai-sales-assistant'];
const NON_EN_LOCALES = ['uk', 'ru', 'id'] as const;

const AI_DIMA_ROUTES = [
  { path: 'ai-dima', priority: 0.9, freq: 'monthly' as const },
  { path: 'ai-dima/roadmap', priority: 0.95, freq: 'monthly' as const },
  { path: 'ai-dima/resources', priority: 0.85, freq: 'monthly' as const },
  { path: 'ai-dima/playbook', priority: 0.8, freq: 'yearly' as const },
  { path: 'ai-dima/kids', priority: 0.75, freq: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // EN routes + hreflang alternates for all multilingual pages
  for (const route of MULTI_ROUTES) {
    const url = route ? `https://zapleo.com/${route}/` : 'https://zapleo.com/';
    entries.push({
      url,
      lastModified: now,
      changeFrequency: route === 'now' ? 'monthly' : 'yearly',
      priority: route === '' ? 1.0 : 0.7,
      alternates: { languages: hreflang(route) },
    });
  }

  // Non-EN locale pages
  for (const locale of NON_EN_LOCALES) {
    entries.push({
      url: `https://zapleo.com/${locale}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: { languages: hreflang('') },
    });

    for (const route of MULTI_ROUTES.filter(r => r !== '')) {
      entries.push({
        url: `https://zapleo.com/${locale}/${route}/`,
        lastModified: now,
        changeFrequency: route === 'now' ? 'monthly' : 'yearly',
        priority: 0.65,
        alternates: { languages: hreflang(route) },
      });
    }
  }

  // Work case study pages
  for (const slug of WORK_SLUGS) {
    entries.push({
      url: `https://zapleo.com/work/${slug}/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    });
  }

  // AI-Dima pages (EN only)
  for (const r of AI_DIMA_ROUTES) {
    entries.push({
      url: `https://zapleo.com/${r.path}/`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    });
  }

  return entries;
}
