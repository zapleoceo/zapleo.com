import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { CaseContent } from '@/components/pages/case-content';
import { CASES } from '@/data/cases';
import { pageAlternates } from '@/i18n/seo';

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return { title: 'Not found' };
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
