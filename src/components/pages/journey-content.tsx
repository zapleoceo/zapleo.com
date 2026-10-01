import { PageShell } from '@/components/page-shell';
import { getDict } from '@/i18n/dict';
import type { Locale } from '@/i18n/config';

type Era = 'pre' | 'agency' | 'transition' | 'now';

const TIMELINE: Array<{ year: string; place: string; title: string; body: string; era: Era }> = [
  { year: '2010', place: 'Ukraine', title: 'Zapleo founded', body: 'Built and led a digital agency, delivering web products and coordinating cross-functional teams for clients.', era: 'agency' },
  { year: '2020s', place: 'Southeast Asia', title: 'Operating businesses', body: 'Moved from agency delivery into running businesses and solving operational problems directly.', era: 'transition' },
  { year: '2026 · Apr–Aug', place: 'Jakarta, ID', title: 'IT STEP Jakarta', body: 'Led the branch while building and testing AI-assisted sales and operational tools in a live business.', era: 'now' },
  { year: '2026 · now', place: 'Remote · GMT+7', title: 'AI systems and revenue operations', body: 'Focus: connect fragmented lead, CRM and conversation data; find handoff failures; and ship practical improvements.', era: 'now' },
];

const ERA_COLOR: Record<Era, string> = {
  pre: 'var(--color-ink-faint)',
  agency: 'var(--color-amber)',
  transition: 'var(--color-rust)',
  now: 'var(--color-mint)',
};

export function JourneyPageContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const tj = t.journey;
  const tc = t.common;

  return (
    <PageShell
      eyebrow={tj.eyebrow}
      title={
        <>
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>{tj.title1}</em>{' '}
          {tj.title2}
        </>
      }
      intro={tj.intro}
      chapter={tc.chapter(3, 6)}
      locale={locale}
    >
      <div
        style={{
          padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, position: 'relative' }}>
          <span
            aria-hidden
            style={{
              position: 'absolute',
              left: 'clamp(80px, 11vw, 140px)',
              top: 0,
              bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, transparent, var(--color-line-bright) 8%, var(--color-line-bright) 92%, transparent)',
            }}
          />
          {TIMELINE.map((item, i) => {
            const color = ERA_COLOR[item.era];
            const eraLabel = tj.eraLabels[item.era];
            return (
              <li
                key={item.year + item.title}
                data-reveal
                style={
                  {
                    '--stagger': `${(i % 6) * 80}ms`,
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: 'clamp(80px, 11vw, 140px) 32px 1fr',
                    gap: 'clamp(16px, 2vw, 32px)',
                    paddingBottom: 'clamp(40px, 6vh, 64px)',
                  } as React.CSSProperties
                }
                className="timeline-row"
              >
                <div className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-ink-mute)', textAlign: 'right', paddingTop: 4 }}>
                  {item.year}
                  <div style={{ marginTop: 6, color: 'var(--color-ink-faint)', fontSize: 10 }}>
                    {item.place}
                  </div>
                </div>

                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
                  <span
                    aria-hidden
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: '50%',
                      background: 'var(--color-bg-base)',
                      border: `2px solid ${color}`,
                      boxShadow: `0 0 0 4px var(--color-bg-base), 0 0 16px ${color}40`,
                    }}
                  />
                </div>

                <div>
                  <span className="mono uppercase" style={{ fontSize: 10, letterSpacing: '0.22em', color }}>
                    {eraLabel}
                  </span>
                  <h3
                    className="display"
                    style={{
                      marginTop: 6,
                      fontSize: 'clamp(22px, 2.6vw, 36px)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ marginTop: 10, color: 'var(--color-ink-mute)', fontSize: 16, lineHeight: 1.55, maxWidth: '50ch' }}>
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .timeline-row { grid-template-columns: 1fr !important; }
          .timeline-row > div:nth-child(2) { display: none; }
          .timeline-row > div:first-child { text-align: left !important; }
        }
      `}</style>
    </PageShell>
  );
}
