import type { Metadata } from 'next';
import { JournalPageContent } from '@/components/pages/journal-content';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'No essays are published here yet.',
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Journal · Dmitriy Zaporozhets',
    description: 'No essays are published here yet.',
    type: 'website',
    url: 'https://zapleo.com/journal/',
    images: [{ url: 'https://zapleo.com/og.png', width: 1200, height: 630, alt: 'Journal — zapleo' }],
  },
  alternates: pageAlternates('journal'),
};

export default function JournalPage() {
  return <JournalPageContent locale="en" />;
}
