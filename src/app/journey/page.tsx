import { JourneyPageContent } from '@/components/pages/journey-content';

export const metadata = {
  title: 'Journey',
  description: 'Dnipro → Weligama → Vietnam → Jakarta. The timeline behind the operator.',
};

export default function JourneyPage() {
  return <JourneyPageContent locale="en" />;
}
