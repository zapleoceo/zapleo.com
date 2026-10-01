import type { MetadataRoute } from 'next';
import { hreflang } from '@/i18n/seo';

export const dynamic = 'force-static';

const MULTI_ROUTES = ['', 'revenue-recovery', 'work', 'journey', 'now', 'journal', 'contact', 'colophon'];
const WORK_SLUGS = ['pasijou', 'apcu', 'aibroker'];
const NON_EN_LOCALES = ['uk', 'ru', 'id'] as const;


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
      priority: route === '' ? 1.0 : route === 'revenue-recovery' ? 0.95 : 0.7,
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
        priority: route === 'revenue-recovery' ? 0.85 : 0.65,
        alternates: { languages: hreflang(route) },
      });
    }
  }

  // Work case study pages — EN + all locales
  for (const slug of WORK_SLUGS) {
    entries.push({
      url: `https://zapleo.com/work/${slug}/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
      alternates: { languages: hreflang(`work/${slug}`) },
    });
    for (const locale of NON_EN_LOCALES) {
      entries.push({
        url: `https://zapleo.com/${locale}/work/${slug}/`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.55,
        alternates: { languages: hreflang(`work/${slug}`) },
      });
    }
  }

  return entries;
}
