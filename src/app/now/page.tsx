import type { Metadata } from 'next';
import { NowPageContent } from '@/components/pages/now-content';
import { pageAlternates } from '@/i18n/seo';
import { HOME_COPY } from '@/content/home';

export const metadata: Metadata = {
  title: HOME_COPY.en.about.title,
  description: HOME_COPY.en.about.intro,
  alternates: pageAlternates('about'),
};

export default function NowPage() {
  return <NowPageContent locale="en" />;
}
