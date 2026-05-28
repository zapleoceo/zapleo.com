import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Journey',
  description: 'Dnipro → Weligama → Vietnam → Jakarta. The timeline behind the operator.',
};

type Era = 'pre' | 'agency' | 'transition' | 'now';

const TIMELINE: Array<{ year: string; place: string; title: string; body: string; era: Era }> = [
  { year: '~2007', place: 'Dnipropetrovsk, UA', title: 'Oles Honchar National University', body: 'Studied at DNU. First freelance gigs while in school.', era: 'pre' },
  { year: 'mid-2000s', place: 'Dnipro, UA', title: 'Privat24 → InMotion Soft → Pinta', body: 'Bank operations to web/mobile project management. Operator habits formed here — process, capacity, ship dates.', era: 'pre' },
  { year: '2010', place: 'Dnipro, UA', title: 'Zapleo founded', body: 'Two laptops, one office. Web, mobile, brand microsites. PHP, WordPress, MODx, then Rails, then React.', era: 'agency' },
  { year: '2012-2014', place: 'Dnipro, UA', title: 'The grind years', body: 'Subcontract sprints for studios. Classifieds, retail, hardware launches. Team grows from two to eight.', era: 'agency' },
  { year: '2016', place: 'Dnipro, UA', title: 'CMS era', body: 'Custom CMS work for independent news (opentv.media), industry portals, niche e-commerce.', era: 'agency' },
  { year: '2018', place: 'Dnipro, UA', title: 'apcu.ua ships', body: 'Industry-association portal for cosmetics & perfumery of Ukraine. Still iterates today, eight years on.', era: 'agency' },
  { year: '2020', place: 'Remote, UA', title: 'Pandemic. Remote-first.', body: 'Agency goes distributed. Half the team leaves. The other half rebuilds.', era: 'agency' },
  { year: '2022 · Feb', place: 'En route', title: 'February 24', body: 'Move family south. Close ops in Dnipro. Stop being just an agency-CEO; become something else.', era: 'transition' },
  { year: '2022', place: 'Weligama, LK', title: 'Pasijou opens', body: 'First hospitality venture. Coworking + restaurant + cinema + yoga, in one room. 4.9 on Tripadvisor.', era: 'transition' },
  { year: '2023', place: 'Vietnam', title: 'Veranda', body: 'Second F&B project. Same playbook: a place where work and food belong together.', era: 'transition' },
  { year: '2023 · Nov', place: 'Online', title: 'PM(O) pivot', body: 'Public LinkedIn post: open to Senior PM / CCO roles. Operator label gets sharper.', era: 'transition' },
  { year: '2024', place: 'Jakarta, ID', title: 'First year in SEA', body: 'Met the Indonesian market as consultant. Saw the English-content gap. Started building toward it.', era: 'now' },
  { year: '2026 · Apr', place: 'Jakarta, ID', title: 'IT STEP Branch Director', body: 'Took over operations of IT STEP Academy Jakarta branch. Curriculum, hiring, ops, growth.', era: 'now' },
  { year: '2026 · now', place: 'Jakarta, ID', title: 'Vibe Coding launches', body: 'AI-augmented English-language teaching for SEA learners. Personal voice on social. Honest about the AI in the workflow.', era: 'now' },
];

const ERA_LABEL: Record<Era, { label: string; color: string }> = {
  pre: { label: 'Pre-Zapleo', color: 'var(--color-ink-faint)' },
  agency: { label: 'Agency era', color: 'var(--color-amber)' },
  transition: { label: 'Pivot', color: 'var(--color-rust)' },
  now: { label: 'Now', color: 'var(--color-mint)' },
};

export default function JourneyPage() {
  return (
    <PageShell
      eyebrow="Chapter 03 · Journey"
      title={
        <>
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>Twelve years</em>, four countries, one operator brain.
        </>
      }
      intro="A timeline instead of an About page. What was happening, where, and what shape it left in the work."
      chapter="CH 03 / 06"
    >
      <div
        style={{
          padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, position: 'relative' }}>
          {/* central vertical line */}
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
          {TIMELINE.map((t, i) => {
            const era = ERA_LABEL[t.era];
            return (
              <li
                key={t.year + t.title}
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
                  {t.year}
                  <div style={{ marginTop: 6, color: 'var(--color-ink-faint)', fontSize: 10 }}>
                    {t.place}
                  </div>
                </div>

                {/* dot on the line */}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
                  <span
                    aria-hidden
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: '50%',
                      background: 'var(--color-bg-base)',
                      border: `2px solid ${era.color}`,
                      boxShadow: `0 0 0 4px var(--color-bg-base), 0 0 16px ${era.color}40`,
                    }}
                  />
                </div>

                <div>
                  <span
                    className="mono uppercase"
                    style={{ fontSize: 10, letterSpacing: '0.22em', color: era.color }}
                  >
                    {era.label}
                  </span>
                  <h3
                    className="display"
                    style={{
                      marginTop: 6,
                      fontSize: 'clamp(22px, 2.6vw, 36px)',
                      fontWeight: 400,
                      fontVariationSettings: '"SOFT" 50, "opsz" 144',
                      lineHeight: 1.1,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ marginTop: 10, color: 'var(--color-ink-mute)', fontSize: 16, lineHeight: 1.55, maxWidth: '50ch' }}>
                    {t.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .timeline-row {
            grid-template-columns: 1fr !important;
          }
          .timeline-row > div:nth-child(2) { display: none; }
          .timeline-row > div:first-child { text-align: left !important; }
        }
      `}</style>
    </PageShell>
  );
}
