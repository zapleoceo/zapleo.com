import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Journal',
  description: 'Long-form essays. Tech career in Southeast Asia, AI workflow honesty, indie founder math.',
};

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

export default function JournalPage() {
  return (
    <PageShell
      eyebrow="Chapter 05 · Journal"
      title={<>Long-form, slow, and <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>opinionated</em>.</>}
      intro="Essays on tech-career building in Southeast Asia, AI-augmented workflow, and what a Ukrainian agency owner learns after running a restaurant. Posts arrive as they finish, not on a schedule."
      chapter="CH 05 / 06"
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
                      fontVariationSettings: '"SOFT" 50, "opsz" 144',
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
                    color: e.status === 'published' ? 'var(--color-mint)' : e.status === 'soon' ? 'var(--color-amber)' : 'var(--color-ink-ghost)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {e.status === 'published' ? `${e.min} min · ${e.lang}` : e.status === 'soon' ? 'Soon' : 'Drafting'}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="marginalia" style={{ marginTop: 64, maxWidth: '60ch' }}>
          New essays land in the&nbsp;
          <a href="https://t.me/zapleosoft" target="_blank" rel="noopener" className="link-line">
            Telegram channel
          </a>{' '}
          first. RSS coming when the first essay ships.
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
