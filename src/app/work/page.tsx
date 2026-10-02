import type { Metadata } from 'next';
import { WorkPageContent } from '@/components/pages/work-content';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected work across AI systems, operations, hospitality and web delivery.',
  openGraph: {
    title: 'Work · Dmitriy Zaporozhets',
    description: 'Selected AI, operational and web projects: Stepan, AIbroker, apcu.ua, Pasijou and Veranda.',
    type: 'website',
    url: 'https://zapleo.com/work/',
    images: [{ url: 'https://zapleo.com/og.png', width: 1200, height: 630, alt: 'Work — zapleo' }],
  },
  alternates: pageAlternates('work'),
};

export default function WorkPage() {
  return <WorkPageContent locale="en" />;
}
