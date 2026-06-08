import type { Metadata } from 'next';
import { ContactPageContent } from '@/components/pages/contact-content';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Direct line. No form by default. Reply within 48h on weekdays, in your timezone.',
  openGraph: {
    title: 'Contact · Dmitriy Zaporozhets',
    description: 'Email, WhatsApp, Telegram, LinkedIn — direct line, no middleman.',
    type: 'website',
    url: 'https://zapleo.com/contact/',
    images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630, alt: 'Contact — zapleo' }],
  },
  alternates: pageAlternates('contact'),
};

export default function ContactPage() {
  return <ContactPageContent locale="en" />;
}
