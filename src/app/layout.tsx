import type { Metadata } from 'next';
import { Fraunces, Newsreader, JetBrains_Mono } from 'next/font/google';
import { ScrollReveal } from '@/components/scroll-reveal';
import './globals.css';

// Display — variable, multi-axis (wght, SOFT, WONK, opsz).
// Cyrillic locales fall back to Newsreader (which has Cyrillic) — see globals.css font stack.
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin', 'latin-ext'],
  axes: ['SOFT', 'WONK', 'opsz'],
  display: 'swap',
});

// Body — variable, optical sizing.
// TODO: switch to Lora for Cyrillic locales once next-intl middleware lands.
const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz'],
  display: 'swap',
});

// Mono — for eyebrows, year-stamps, marginalia.
const jbMono = JetBrains_Mono({
  variable: '--font-mono-jb',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zapleo.com'),
  title: {
    default: 'Dmitriy Zaporozhets — zapleo',
    template: '%s · zapleo',
  },
  description:
    'Operator first, educator now. Twelve years shipping software from a Dnipro agency. Building an IT academy branch in Jakarta — and an AI-augmented way to teach the path into tech.',
  authors: [{ name: 'Dmitriy Zaporozhets', url: 'https://zapleo.com' }],
  creator: 'Dmitriy Zaporozhets',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zapleo.com',
    siteName: 'zapleo',
    title: 'Dmitriy Zaporozhets — zapleo',
    description:
      'Operator first, educator now. Building from Jakarta with an Ukrainian engineering spine.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@zapleosoft',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${jbMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* atmospherics */}
        <div className="grain" aria-hidden="true" />

        {/* scroll-reveal observer */}
        <ScrollReveal />

        {children}
      </body>
    </html>
  );
}
