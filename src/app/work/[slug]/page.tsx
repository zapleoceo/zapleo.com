import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { CaseContent } from '@/components/pages/case-content';
import { Stepan2Redirect } from '@/components/stepan2-redirect';
import { CASES } from '@/data/cases';
import { pageAlternates } from '@/i18n/seo';

const STEPAN2_URL = 'https://stepan2.zapleo.com';

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return { title: 'Not found' };
  if (slug === 'ai-sales-assistant') {
    return {
      title: 'AI Sales Assistant — Stepan',
      description: 'AI sales agent for Instagram, WhatsApp and Messenger DMs.',
      alternates: { canonical: STEPAN2_URL },
      openGraph: { url: STEPAN2_URL },
    };
  }
  return {
    title: c.name,
    description: c.tagline,
    openGraph: {
      type: 'article',
      url: `https://zapleo.com/work/${slug}/`,
      title: `${c.name} — zapleo`,
      description: c.tagline,
      images: [{ url: 'https://zapleo.com/og.svg', width: 1200, height: 630 }],
    },
    alternates: pageAlternates(`work/${slug}`),
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();

  if (slug === 'ai-sales-assistant') {
    return <Stepan2Redirect />;
  }

  return (
    <PageShell
      eyebrow={`Chapter 02 · Case · ${c.year}`}
      title={
        <>
          {c.name}.{' '}
          <em style={{ fontStyle: 'italic', color: c.accent }}>{c.tagline}</em>
        </>
      }
      chapter="CASE"
    >
      <CaseContent c={c} locale="en" slug={slug} />
    </PageShell>
  );
}
