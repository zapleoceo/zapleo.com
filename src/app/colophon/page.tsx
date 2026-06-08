import type { Metadata } from 'next';
import { ColophonPageContent } from '@/components/pages/colophon-content';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Colophon',
  description: 'How this site is made. Stack, fonts, AI assistance, hosting, source code.',
  openGraph: {
    title: 'Colophon · zapleo',
    description: 'Next.js static export, Bricolage Grotesque + Literata, deployed on Hetzner. The full making-of.',
    type: 'website',
    url: 'https://zapleo.com/colophon/',
    images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630, alt: 'Colophon — zapleo' }],
  },
  alternates: pageAlternates('colophon'),
};

export default function ColophonPage() {
  return <ColophonPageContent locale="en" />;
}
