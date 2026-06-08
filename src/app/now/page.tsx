import type { Metadata } from 'next';
import { NowPageContent } from '@/components/pages/now-content';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What I am doing right now. Updated monthly. Inspired by nownownow.com.',
  openGraph: {
    title: 'Now · Dmitriy Zaporozhets',
    description: 'Current focus: IT STEP Academy Jakarta, AI-augmented teaching, zapleo site rebuild.',
    type: 'website',
    url: 'https://zapleo.com/now/',
    images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630, alt: 'Now — zapleo' }],
  },
  alternates: pageAlternates('now'),
};

export default function NowPage() {
  return <NowPageContent locale="en" />;
}
