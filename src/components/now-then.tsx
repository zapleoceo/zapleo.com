/**
 * Asymmetric 7/5 split:
 *   Left (sticky, larger): Now — Jakarta
 *   Right (scrolling): Then-archive cards
 */
const THEN_CARDS = [
  {
    year: '2010',
    place: 'Dnipro · UA',
    title: 'Two laptops, one office',
    body: 'Started Zapleo. Web, mobile, brand microsites. Office on Shevchenko 59, Prospekt Pushkina 33 after.',
  },
  {
    year: '2014',
    place: 'Dnipro · UA',
    title: 'Subcontract engine',
    body: 'Sprints for studios working on classifieds, retail, hardware launches. Team grows to eight.',
  },
  {
    year: '2018',
    place: 'Dnipro · UA',
    title: 'Forty engagements deep',
    body: 'Cosmetics ecommerce, association portals, news platforms, Android apps. PHP + Rails + JS.',
  },
  {
    year: '2022',
    place: 'Weligama · LK',
    title: 'Sri Lanka. Pasijou opens.',
    body: 'February 24. Move family south. Open Pasijou — coworking + restaurant + cinema on the south coast. First time operating in F&B.',
  },
  {
    year: '2023',
    place: 'Vietnam',
    title: 'Veranda',
    body: 'Veranda.my — second hospitality venture, this time in Vietnam. Same playbook: a place where work and food belong in one room.',
  },
  {
    year: '2024',
    place: 'Jakarta · ID',
    title: 'Pivot to education',
    body: 'Met the Indonesian market as consultant. Saw the English-content gap. Started building toward it.',
  },
];

export function NowThen() {
  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(96px, 14vh, 160px) clamp(24px, 6vw, 96px)',
        background: 'var(--color-bg-base)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
          gap: 'clamp(40px, 6vw, 96px)',
        }}
        className="now-then-grid"
      >
        {/* sticky LEFT — Now */}
        <div
          style={{
            position: 'sticky',
            top: 'clamp(80px, 12vh, 140px)',
            alignSelf: 'start',
          }}
        >
          <p className="eyebrow" data-reveal style={{ marginBottom: 28 }}>
            Now · Jakarta · 2026
          </p>
          <h2
            className="display"
            data-reveal
            style={
              {
                '--stagger': '80ms',
                fontSize: 'clamp(40px, 6vw, 88px)',
                fontWeight: 360,
                fontVariationSettings: '"SOFT" 30, "opsz" 144',
                lineHeight: 1,
                margin: 0,
              } as React.CSSProperties
            }
          >
            Building an IT academy branch in&nbsp;Indonesia. Teaching the path into tech.
          </h2>
          <p
            data-reveal
            style={
              {
                '--stagger': '200ms',
                marginTop: 32,
                color: 'var(--color-ink-mute)',
                fontSize: 'clamp(15px, 1.15vw, 18px)',
                maxWidth: '46ch',
                lineHeight: 1.6,
              } as React.CSSProperties
            }
          >
            Branch Director at IT STEP Academy Jakarta. Curriculum, hiring, ops. In parallel —
            building a public English-language voice for the Asian career-switcher pipeline. The
            voice is AI-augmented; the calls are mine.
          </p>

          <ul
            data-reveal
            style={
              {
                '--stagger': '300ms',
                marginTop: 40,
                padding: 0,
                listStyle: 'none',
                display: 'grid',
                gap: 12,
              } as React.CSSProperties
            }
          >
            {[
              ['Where', 'Menteng, Jakarta'],
              ['Role', 'Branch Director, IT STEP Academy Jakarta'],
              ['Stack', 'Operator brain · AI pipeline · Ukrainian engineering spine'],
              ['Open for', 'Brief calls, partner intros, smart questions'],
            ].map(([k, v]) => (
              <li
                key={k}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: 16,
                  paddingBottom: 12,
                  borderBottom: '1px solid var(--color-line)',
                }}
              >
                <span className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--color-ink-faint)' }}>
                  {k}
                </span>
                <span style={{ color: 'var(--color-ink)' }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* scrolling RIGHT — Then archive cards */}
        <div style={{ display: 'grid', gap: 'clamp(48px, 8vh, 120px)' }}>
          <p className="eyebrow" data-reveal>
            Then · The archive · Dnipro → Weligama → Vietnam
          </p>

          {THEN_CARDS.map((c, i) => (
            <article
              key={c.year}
              data-reveal
              style={
                {
                  '--stagger': `${i * 90}ms`,
                  padding: '36px 32px',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-line)',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                } as React.CSSProperties
              }
            >
              <span
                className="display"
                aria-hidden
                style={{
                  position: 'absolute',
                  top: -8,
                  right: -12,
                  fontSize: 'clamp(80px, 14vw, 180px)',
                  fontWeight: 220,
                  fontVariationSettings: '"SOFT" 100, "opsz" 144',
                  color: 'var(--color-line-bright)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {c.year}
              </span>
              <div
                className="mono uppercase"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  color: 'var(--color-amber)',
                  position: 'relative',
                  zIndex: 1,
                  marginBottom: 10,
                }}
              >
                {c.place}
              </div>
              <h3
                className="display"
                style={{
                  fontSize: 'clamp(22px, 2.2vw, 30px)',
                  fontWeight: 480,
                  letterSpacing: '-0.015em',
                  margin: 0,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  marginTop: 12,
                  color: 'var(--color-ink-mute)',
                  fontSize: 16,
                  lineHeight: 1.55,
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: '38ch',
                }}
              >
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .now-then-grid {
            grid-template-columns: 1fr !important;
          }
          .now-then-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
