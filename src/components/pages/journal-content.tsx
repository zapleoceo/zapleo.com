import { PageShell } from '@/components/page-shell';
import { getDict } from '@/i18n/dict';
import type { Locale } from '@/i18n/config';

// Essay content stays in English — proper titles, slugs, professional record
const ESSAYS: Array<{ slug: string; year: string; title: string; teaser: string; min: number; lang: string; status: 'draft' | 'soon' | 'published' }> = [
  {
    slug: 'why-jakarta',
    year: '2026',
    title: 'Why I moved to Jakarta to run an IT school',
    teaser: 'Southeast Asia has the tech demand the West already used up. Three reasons the math works.',
    min: 7,
    lang: 'EN',
    status: 'soon',
  },
  {
    slug: 'ai-in-classroom',
    year: '2026',
    title: 'AI in the classroom is not a feature; it is the curriculum',
    teaser: 'How Vibe Coding teaches the AI-augmented workflow without producing prompt monkeys.',
    min: 9,
    lang: 'EN',
    status: 'soon',
  },
  {
    slug: 'agency-economics-2010s',
    year: '2026',
    title: 'A 12-year agency P&L, in honest numbers',
    teaser: 'What 40+ engagements taught me about pricing, scope, and the moment to walk away.',
    min: 12,
    lang: 'EN',
    status: 'draft',
  },
  {
    slug: 'pasijou-postmortem',
    year: '2025',
    title: 'Three years of running a clubhouse in Sri Lanka',
    teaser: 'Food cost, monsoon, staff, the cinema night nobody attended. What an engineer learns when the kitchen breaks.',
    min: 10,
    lang: 'EN',
    status: 'draft',
  },
];

export function JournalPageContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const tj = t.journal;
  const tc = t.common;

  return (
    <PageShell
      eyebrow={tj.eyebrow}
      title={
        <>
          {tj.title1}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>{tj.title2}</em>
        </>
      }
      intro={tj.intro}
      chapter={tc.chapter(5, 6)}
      locale={locale}
    >
      <div
        style={{
          padding: 'clamp(56px, 9vh, 110px) clamp(24px, 6vw, 96px)',
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {ESSAYS.map((e, i) => {
            const isPublished = e.status === 'published';
            const statusText =
              e.status === 'published'
                ? `${e.min} ${tj.statusLabels.published}`
                : e.status === 'soon'
                  ? tj.statusLabels.soon
                  : tj.statusLabels.drafting;
            return (
              <li
                key={e.slug}
                data-reveal
                style={
                  {
                    '--stagger': `${i * 60}ms`,
                    padding: 'clamp(32px, 4vh, 48px) 0',
                    borderTop: '1px solid var(--color-line)',
                    display: 'grid',
                    gridTemplateColumns: '90px 1fr auto',
                    gap: 'clamp(20px, 4vw, 56px)',
                    alignItems: 'baseline',
                  } as React.CSSProperties
                }
                className="essay-row"
              >
                <span className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
                  {e.year}
                </span>
                <div>
                  <h2
                    className="display"
                    style={{
                      fontSize: 'clamp(24px, 3vw, 40px)',
                      fontWeight: 380,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      margin: 0,
                      color: isPublished ? 'var(--color-ink)' : 'var(--color-ink-mute)',
                    }}
                  >
                    {e.title}
                  </h2>
                  <p style={{ marginTop: 12, color: 'var(--color-ink-mute)', fontSize: 16, lineHeight: 1.55, maxWidth: '54ch' }}>{e.teaser}</p>
                </div>
                <span
                  className="mono uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    color:
                      e.status === 'published'
                        ? 'var(--color-mint)'
                        : e.status === 'soon'
                          ? 'var(--color-amber)'
                          : 'var(--color-ink-ghost)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {statusText}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="marginalia" style={{ marginTop: 64, maxWidth: '60ch' }}>
          {tj.footnote}{' '}
          <a href="https://t.me/zapleosoft" target="_blank" rel="noopener" className="link-line">
            t.me/zapleosoft →
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .essay-row { grid-template-columns: 1fr !important; }
          .essay-row > span:last-child { justify-self: start; }
        }
      `}</style>
    </PageShell>
  );
}
