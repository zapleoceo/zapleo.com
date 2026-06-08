import type { Metadata } from 'next';
import { WorkPageContent } from '@/components/pages/work-content';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Work',
  description: '12 years, 40+ engagements. The defensible slice — apcu.ua, mobilshina (earlier), opentv.media, Pasijou, Veranda, and more.',
  openGraph: {
    title: 'Work · Dmitriy Zaporozhets',
    description: '12 years of web agency work out of Dnipro. Selected engagements: apcu.ua, opentv.media, Pasijou, Veranda bar.',
    type: 'website',
    url: 'https://zapleo.com/work/',
    images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630, alt: 'Work — zapleo' }],
  },
  alternates: pageAlternates('work'),
};

export default function WorkPage() {
  return <WorkPageContent locale="en" />;
}
