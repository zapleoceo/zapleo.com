import { AboutPageContent } from '@/components/pages/about-content';
import type { Locale } from '@/i18n/config';

export function JourneyPageContent({ locale }: { locale: Locale }) {
  return <AboutPageContent locale={locale} />;
}
