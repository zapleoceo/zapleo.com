import type { Metadata } from 'next';
import { Bricolage_Grotesque, Literata, JetBrains_Mono } from 'next/font/google';
import { pageAlternates } from '@/i18n/seo';
import { JsonLd } from '@/components/json-ld';
import { LenisInit } from '@/components/lenis-init';
import { Nav } from '@/components/nav';
import { ScrollReveal } from '@/components/scroll-reveal';
import './globals.css';

/**
 * Display — variable grotesque, geometric with character.
 * Chosen: off the impeccable reflex-reject list, pairs with Literata on the
 * sans/serif axis, signals "precision operator" rather than "literary editor."
 */
const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin', 'latin-ext'],
  axes: ['wdth'],
  display: 'swap',
});

/**
 * Body — variable serif with optical sizing.
 * Quality editorial readability without the Newsreader/Fraunces AI-default lane.
 */
const literata = Literata({
  variable: '--font-literata',
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz'],
  display: 'swap',
  style: ['normal', 'italic'],
});

/** Mono — marginalia, eyebrows, code artifacts. */
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
    'Dmitriy Zaporozhets traces lost leads across ads, CRM, calls and messages, then builds practical AI-assisted fixes for real business operations.',
  authors: [{ name: 'Dmitriy Zaporozhets', url: 'https://zapleo.com' }],
  creator: 'Dmitriy Zaporozhets',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zapleo.com',
    siteName: 'zapleo',
    title: 'Dmitriy Zaporozhets — zapleo',
    description: 'Find where paid leads disappear. AI integration and a ten-day revenue recovery diagnostic by Dmitriy Zaporozhets.',
    images: [
      {
        url: 'https://zapleo.com/og.svg',
        width: 1200,
        height: 630,
        alt: 'zapleo — AI integration for real operations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@zapleosoft',
    images: ['https://zapleo.com/og.svg'],
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
  alternates: pageAlternates(''),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${literata.variable} ${jbMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics 4 — G-DKW7C84LRB */}
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DKW7C84LRB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DKW7C84LRB');
            `,
          }}
        />
      </head>
      <body>
        {/* Film grain overlay */}
        <div className="grain" aria-hidden="true" />

        {/* Smooth scroll (Lenis) */}
        <LenisInit />

        {/* Scroll-reveal IntersectionObserver */}
        <ScrollReveal />

        {/* Global sticky navigation */}
        <Nav />

        {/* schema.org */}
        <JsonLd />

        {children}

      </body>
    </html>
  );
}
