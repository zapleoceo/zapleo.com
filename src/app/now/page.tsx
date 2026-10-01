import type { Metadata } from 'next';
import { NowPageContent } from '@/components/pages/now-content';
import { pageAlternates } from '@/i18n/seo';
import { RECOVERY_COPY } from '@/content/recovery';

export const metadata: Metadata = {
  title: 'Now',
  description: RECOVERY_COPY.en.home.aboutBody,
  openGraph: {
    title: 'Now · Dmitriy Zaporozhets',
    description: RECOVERY_COPY.en.home.aboutBody,
    type: 'website',
    url: 'https://zapleo.com/now/',
    images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630, alt: 'Now — zapleo' }],
  },
  alternates: pageAlternates('now'),
};

export default function NowPage() {
  return <NowPageContent locale="en" />;
}
