import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/pages/about-content';
import { HOME_COPY } from '@/content/home';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: HOME_COPY.en.about.title,
  description: HOME_COPY.en.about.intro,
  alternates: pageAlternates('about'),
};

export default function AboutPage() {
  return <AboutPageContent locale="en" />;
}
