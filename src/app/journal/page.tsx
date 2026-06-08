import type { Metadata } from 'next';
import { JournalPageContent } from '@/components/pages/journal-content';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Long-form essays. Tech career in Southeast Asia, AI workflow honesty, indie founder math.',
  openGraph: {
    title: 'Journal · Dmitriy Zaporozhets',
    description: 'Essays on tech careers in Southeast Asia, AI-augmented work, and the unit economics of running a school branch.',
    type: 'website',
    url: 'https://zapleo.com/journal/',
    images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630, alt: 'Journal — zapleo' }],
  },
  alternates: pageAlternates('journal'),
};

export default function JournalPage() {
  return <JournalPageContent locale="en" />;
}
