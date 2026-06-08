import type { Metadata } from 'next';
import { JourneyPageContent } from '@/components/pages/journey-content';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Journey',
  description: 'Dnipro → Weligama → Vietnam → Jakarta. The timeline behind the operator.',
  openGraph: {
    title: 'Journey · Dmitriy Zaporozhets',
    description: 'From a Dnipro web agency to running an IT academy in Jakarta. The full 2010–present timeline.',
    type: 'website',
    url: 'https://zapleo.com/journey/',
    images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630, alt: 'Journey — zapleo' }],
  },
  alternates: pageAlternates('journey'),
};

export default function JourneyPage() {
  return <JourneyPageContent locale="en" />;
}
