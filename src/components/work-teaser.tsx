/**
 * Three selected projects — honest framing (verifiable industries, not name-flexed).
 */
const WORK = [
  {
    slug: 'apcu',
    year: '2018 — present',
    name: 'apcu.ua',
    role: 'Custom WordPress build · industry portal',
    tags: ['EdTech-adjacent', 'Government', 'WordPress'],
    desc: 'Official portal for the Ukrainian Cosmetics & Perfumery Association. Multi-section editorial CMS, member directory, news feed. Still live; iterates with industry changes.',
    accent: 'oklch(78% 0.14 165)',
  },
  {
    slug: 'mobilshina',
    year: '2014 — 2017',
    name: 'Mobilshina earlier version',
    role: 'Frontend rebuild · automotive ecommerce',
    tags: ['E-commerce', 'High-SKU catalog', 'PHP + JS'],
    desc: 'Frontend rebuild of a tire & wheel ecommerce platform with 30K+ SKUs. Catalog UX, fitment selector, mobile-first checkout. Site has since been refactored by another studio.',
    accent: 'oklch(82% 0.18 70)',
  },
  {
    slug: 'opentv',
    year: '2016 — 2020',
    name: 'opentv.media',
    role: 'Editorial CMS · independent news',
    tags: ['News', 'Editorial workflow', 'PHP'],
    desc: 'Custom CMS for an independent Ukrainian news outlet — long-form articles, photo essays, live coverage workflow. Domain since archived; codebase in agency cold storage.',
    accent: 'oklch(55% 0.18 35)',
  },
];

export function WorkTeaser() {
  return (
    <section
      style={{
        padding: 'clamp(96px, 14vh, 160px) clamp(24px, 6vw, 96px)',
        background: 'var(--color-bg-base)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
          gap: 'clamp(40px, 6vw, 96px)',
          alignItems: 'baseline',
          marginBottom: 'clamp(56px, 8vh, 96px)',
        }}
        className="work-head"
      >
        <div>
          <p className="eyebrow" data-reveal>
            Chapter 02 · Selected work
          </p>
        </div>
        <div>
          <h2
            className="display"
            data-reveal
            style={
              {
                '--stagger': '80ms',
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 360,
                fontVariationSettings: '"SOFT" 30, "opsz" 144',
                margin: 0,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
              } as React.CSSProperties
            }
          >
            Three from the archive. <em style={{ fontStyle: 'italic', color: 'var(--color-ink-mute)' }}>The rest by request.</em>
          </h2>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'clamp(48px, 8vh, 96px)' }}>
        {WORK.map((w, i) => (
          <article
            key={w.slug}
            data-reveal
            style={
              {
                '--stagger': `${i * 100}ms`,
                position: 'relative',
                padding: 'clamp(36px, 5vw, 72px)',
                background: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-line)',
                borderRadius: 4,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 320ms var(--ease-out-cinema), box-shadow 320ms var(--ease-out-cinema), border-color 320ms var(--ease-out-cinema)',
              } as React.CSSProperties
            }
            className="work-card"
          >
            {/* accent glow on hover */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(ellipse at top right, ${w.accent}30, transparent 60%)`,
                opacity: 0,
                transition: 'opacity 480ms var(--ease-out-cinema)',
                pointerEvents: 'none',
              }}
              className="work-glow"
            />

            <div
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
                gap: 'clamp(32px, 4vw, 80px)',
                alignItems: 'start',
              }}
              className="work-row"
            >
              <div>
                <span className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
                  {w.year}
                </span>
                <h3
                  className="display"
                  style={{
                    marginTop: 16,
                    fontSize: 'clamp(32px, 4.5vw, 64px)',
                    fontWeight: 340,
                    fontVariationSettings: '"SOFT" 60, "opsz" 144',
                    lineHeight: 1.0,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-ink)',
                  }}
                >
                  {w.name}
                </h3>
                <p style={{ marginTop: 12, color: w.accent, fontStyle: 'italic', fontSize: 16 }}>
                  {w.role}
                </p>
              </div>

              <div>
                <p style={{ color: 'var(--color-ink-mute)', fontSize: 17, lineHeight: 1.6, maxWidth: '50ch' }}>
                  {w.desc}
                </p>
                <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="mono uppercase"
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.18em',
                        color: 'var(--color-ink-faint)',
                        padding: '6px 12px',
                        border: '1px solid var(--color-line-bright)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div
        data-reveal
        style={
          {
            '--stagger': '400ms',
            marginTop: 'clamp(56px, 8vh, 96px)',
            textAlign: 'center',
          } as React.CSSProperties
        }
      >
        <a href="/work/" className="link-line mono uppercase" style={{ fontSize: 12, letterSpacing: '0.22em', color: 'var(--color-amber)' }}>
          Full archive · 40+ engagements →
        </a>
      </div>

      <style>{`
        .work-card:hover {
          transform: translate(-3px, -3px);
          border-color: var(--color-line-bright);
          box-shadow: 0 32px 64px -24px oklch(50% 0.18 50 / 0.25);
        }
        .work-card:hover .work-glow {
          opacity: 1;
        }
        @media (max-width: 900px) {
          .work-head,
          .work-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
