import type { Metadata } from 'next';
import { JourneyPageContent } from '@/components/pages/journey-content';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Journey',
  description: 'Dnipro → Weligama → Vietnam → Jakarta. The timeline behind the operator.',
  openGraph: {
    title: 'Journey · Dmitriy Zaporozhets',
    description: 'From building a digital agency to leading operations and creating AI-assisted systems. Selected milestones, not a full chronology.',
    type: 'website',
    url: 'https://zapleo.com/journey/',
    images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630, alt: 'Journey — zapleo' }],
  },
  alternates: pageAlternates('journey'),
};

export default function JourneyPage() {
  return <JourneyPageContent locale="en" />;
}
