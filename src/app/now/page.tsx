import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Now',
  description: 'What I am doing right now. Updated monthly. Inspired by nownownow.com.',
};

const UPDATED = 'May 2026';

const BLOCKS = [
  {
    label: 'Living',
    body: 'Jakarta, Indonesia. Menteng side of town. UTC+7. Family on the same timezone.',
  },
  {
    label: 'Working on',
    body: 'Branch Director at IT STEP Academy Jakarta. Curriculum, hiring, ops, growth. First full quarter in role.',
  },
  {
    label: 'Building',
    body: 'Vibe Coding — English-language tech course for Southeast Asian learners. AI-augmented teaching, human-directed. Launches Q3 2026.',
  },
  {
    label: 'Running in parallel',
    body: 'Pasijou (Weligama) and Veranda (Vietnam) — both hospitality ventures, day-to-day with strong local teams.',
  },
  {
    label: 'Reading',
    body: '"How Big Things Get Done" (Flyvbjerg) on the project-management bench. "AI Engineering" (Chip Huyen) for the curriculum work.',
  },
  {
    label: 'Learning',
    body: 'Bahasa Indonesia (slowly). React 19 server components in production (faster).',
  },
  {
    label: 'Open for',
    body: 'Short calls with people building EdTech in SEA, anyone running multi-country teams, and Ukrainian engineers planning a move east.',
  },
];

export default function NowPage() {
  return (
    <PageShell
      eyebrow={`Chapter 04 · Now · Updated ${UPDATED}`}
      title="What I am doing right now."
      intro="Replaces the usual /about with a snapshot of this month. Updates on the 1st."
      chapter="CH 04 / 06"
    >
      <div
        style={{
          padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
          maxWidth: 980,
          margin: '0 auto',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 0 }}>
          {BLOCKS.map((b, i) => (
            <li
              key={b.label}
              data-reveal
              style={
                {
                  '--stagger': `${i * 70}ms`,
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, 1fr) minmax(0, 3fr)',
                  gap: 'clamp(20px, 4vw, 64px)',
                  padding: 'clamp(28px, 4vh, 40px) 0',
                  borderBottom: i === BLOCKS.length - 1 ? 'none' : '1px solid var(--color-line)',
                  alignItems: 'baseline',
                } as React.CSSProperties
              }
              className="now-row"
            >
              <span
                className="mono uppercase"
                style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-amber)' }}
              >
                {b.label}
              </span>
              <p
                style={{
                  fontSize: 'clamp(17px, 1.6vw, 22px)',
                  lineHeight: 1.55,
                  color: 'var(--color-ink)',
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 380,
                  fontVariationSettings: '"SOFT" 80, "opsz" 32',
                  letterSpacing: '-0.01em',
                }}
              >
                {b.body}
              </p>
            </li>
          ))}
        </ul>

        <p className="marginalia" style={{ marginTop: 56, fontStyle: 'italic' }}>
          A “now page” is a single-page convention started by{' '}
          <a href="https://nownownow.com/about" target="_blank" rel="noopener" className="link-line">
            Derek Sivers
          </a>
          . It tells you what someone is focused on now, instead of forcing you to guess from social
          feeds. Last updated: {UPDATED}.
        </p>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .now-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </PageShell>
  );
}
