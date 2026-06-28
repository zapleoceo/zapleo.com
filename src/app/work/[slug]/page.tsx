import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
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
      <div style={{ padding: 'clamp(48px, 8vh, 96px) clamp(24px, 6vw, 96px)', maxWidth: 1080, margin: '0 auto' }}>
        {/* stats bar */}
        <dl
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 'clamp(16px, 2vw, 32px)',
            padding: '24px 0',
            borderTop: '1px solid var(--color-line)',
            borderBottom: '1px solid var(--color-line)',
            marginBottom: 'clamp(56px, 8vh, 88px)',
            margin: 0,
          }}
        >
          {[
            ['Place', c.place],
            ['Role', c.role],
            ['Team', c.team],
            ['Stack', c.stack.slice(0, 2).join(' · ')],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="mono uppercase" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
                {k}
              </dt>
              <dd className="mono" style={{ marginTop: 8, fontSize: 13, color: 'var(--color-ink)', letterSpacing: '0.02em' }}>
                {v}
              </dd>
            </div>
          ))}
        </dl>

        {/* brief */}
        <p
          data-reveal
          style={
            {
              '--stagger': '80ms',
              fontSize: 'clamp(20px, 2vw, 28px)',
              lineHeight: 1.55,
              fontFamily: 'var(--font-display)',
              fontWeight: 380,
              color: 'var(--color-ink)',
              maxWidth: '52ch',
              margin: '64px 0 0',
            } as React.CSSProperties
          }
        >
          {c.brief}
        </p>

        {/* sections with marginalia */}
        <div style={{ marginTop: 'clamp(80px, 12vh, 140px)', display: 'grid', gap: 'clamp(64px, 10vh, 120px)' }}>
          {c.sections.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              style={
                {
                  '--stagger': `${i * 80}ms`,
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 3fr)',
                  gap: 'clamp(32px, 5vw, 80px)',
                  alignItems: 'start',
                } as React.CSSProperties
              }
              className="case-row"
            >
              <div>
                <h2
                  className="display"
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    fontWeight: 380,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  {s.title}
                </h2>
                <p style={{ marginTop: 24, color: 'var(--color-ink-mute)', fontSize: 18, lineHeight: 1.65, maxWidth: '54ch' }}>{s.body}</p>
              </div>
              {s.note && (
                <aside className="marginalia" style={{ borderLeft: `2px solid ${c.accent}`, paddingLeft: 20, fontStyle: 'italic', maxWidth: '28ch' }}>
                  {s.note}
                </aside>
              )}
            </article>
          ))}
        </div>

        {/* links */}
        {c.links.length > 0 && (
          <section
            data-reveal
            style={
              {
                '--stagger': '200ms',
                marginTop: 'clamp(80px, 12vh, 120px)',
                paddingTop: 32,
                borderTop: '1px solid var(--color-line)',
              } as React.CSSProperties
            }
          >
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              Live links
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              {c.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    className="link-line mono uppercase"
                    style={{ fontSize: 12, letterSpacing: '0.18em', color: c.accent }}
                  >
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* back to work */}
        <p style={{ marginTop: 'clamp(64px, 10vh, 96px)', textAlign: 'center' }}>
          <a href="/work/" className="link-line mono uppercase" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-ink-mute)' }}>
            ← Back to all work
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
