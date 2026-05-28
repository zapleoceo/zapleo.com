import { NowPageContent } from '@/components/pages/now-content';

export const metadata = {
  title: 'Now',
  description: 'What I am doing right now. Updated monthly. Inspired by nownownow.com.',
};

export default function NowPage() {
  return <NowPageContent locale="en" />;
}
