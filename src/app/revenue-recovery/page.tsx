import type { Metadata } from 'next';
import { RecoveryLanding } from '@/components/recovery-landing';
import { RECOVERY_COPY } from '@/content/recovery';
import { pageAlternates } from '@/i18n/seo';

export const metadata: Metadata = {
  title: 'Revenue Recovery Sprint',
  description: RECOVERY_COPY.en.service.intro,
  openGraph: {
    title: 'Revenue Recovery Sprint · zapleo',
    description: RECOVERY_COPY.en.service.intro,
    url: 'https://zapleo.com/revenue-recovery/',
  },
  alternates: pageAlternates('revenue-recovery'),
};

export default function RevenueRecoveryPage() {
  return <RecoveryLanding locale="en" />;
}
