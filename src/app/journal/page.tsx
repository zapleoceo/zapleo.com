import { JournalPageContent } from '@/components/pages/journal-content';

export const metadata = {
  title: 'Journal',
  description: 'Long-form essays. Tech career in Southeast Asia, AI workflow honesty, indie founder math.',
};

export default function JournalPage() {
  return <JournalPageContent locale="en" />;
}
