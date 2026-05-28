import { ContactPageContent } from '@/components/pages/contact-content';

export const metadata = {
  title: 'Contact',
  description: 'Direct line. No form by default. Reply within 48h on weekdays, in your timezone.',
};

export default function ContactPage() {
  return <ContactPageContent locale="en" />;
}
