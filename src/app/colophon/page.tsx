import { ColophonPageContent } from '@/components/pages/colophon-content';

export const metadata = {
  title: 'Colophon',
  description: 'How this site is made. Stack, fonts, AI assistance, hosting, source code.',
};

export default function ColophonPage() {
  return <ColophonPageContent locale="en" />;
}
