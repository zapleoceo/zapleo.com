/**
 * Three selected projects.
 * Ghost-card pattern removed: no border + large-blur shadow on same element.
 * Using shadow-only on hover; border stays at a quiet level at all times.
 */
const WORK = [
  {
    slug: 'apcu',
    year: '2018 — present',
    name: 'apcu.ua',
    role: 'Custom WordPress build · industry portal',
    tags: ['EdTech-adjacent', 'Government', 'WordPress'],
    desc: 'Official portal for the Ukrainian Cosmetics & Perfumery Association. Multi-section editorial CMS, member directory, news feed. Still live; iterates with industry changes.',
    accent: 'var(--color-mint)',
  },
  {
    slug: 'mobilshina',
    year: '2014 — 2017',
    name: 'Mobilshina earlier version',
    role: 'Frontend rebuild · automotive ecommerce',
    tags: ['E-commerce', 'High-SKU catalog', 'PHP + JS'],
    desc: 'Frontend rebuild of a tire & wheel ecommerce platform with 30K+ SKUs. Catalog UX, fitment selector, mobile-first checkout. Site has since been refactored by another studio.',
    accent: 'var(--color-amber)',
  },
  {
    slug: 'opentv',
    year: '2016 — 2020',
    name: 'opentv.media',
    role: 'Editorial CMS · independent news',
    tags: ['News', 'Editorial workflow', 'PHP'],
    desc: 'Custom CMS for an independent Ukrainian news outlet — long-form articles, photo essays, live coverage workflow. Domain since archived; codebase in agency cold storage.',
    accent: 'var(--color-rust)',
  },
];

export function WorkTeaser() {
  return (
    <section
      style={{
        padding: 'clamp(80px, 12vh, 148px) clamp(24px, 6vw, 96px)',
        background: 'var(--color-bg-base)',
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 4fr) minmax(0, 8fr)',
          gap: 'clamp(32px, 5vw, 80px)',
          alignItems: 'baseline',
          marginBottom: 'clamp(48px, 7vh, 88px)',
          maxWidth: 1100,
        }}
        className="work-head"
      >
        <div data-reveal>
          <span
            className="display"
            style={{
              fontSize: 'clamp(52px, 8vw, 96px)',
              fontWeight: 280,
              letterSpacing: '-0.03em',
              color: 'var(--color-line-bright)',
              lineHeight: 1,
              display: 'block',
            }}
          >
            03
          </span>
        </div>
        <div>
          <h2
            className="display"
            data-reveal
            style={
              {
                '--stagger': '60ms',
                fontSize: 'clamp(28px, 4vw, 60px)',
                fontWeight: 340,
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                margin: 0,
                textWrap: 'balance',
              } as React.CSSProperties
            }
          >
            Three from the archive.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-ink-mute)', fontWeight: 280 }}>
              The rest by request.
            </em>
          </h2>
        </div>
      </div>

      {/* Project rows */}
      <div style={{ display: 'grid', gap: 2, maxWidth: 1100 }}>
        {WORK.map((w, i) => (
          <article
            key={w.slug}
            data-reveal
            style={
              {
                '--stagger': `${i * 80}ms`,
                position: 'relative',
                padding: 'clamp(28px, 4vw, 56px)',
                background: 'var(--color-bg-elevated)',
                borderTop: '1px solid var(--color-line)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'background 280ms var(--ease-out-cinema)',
              } as React.CSSProperties
            }
            className="work-row-item"
          >
            {/* Accent glow — appears on hover only */}
            <div
              aria-hidden
              className="work-glow"
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(ellipse 60% 80% at top right, ${w.accent}18, transparent 65%)`,
                opacity: 0,
                transition: 'opacity 400ms var(--ease-out-cinema)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 4fr) minmax(0, 8fr)',
                gap: 'clamp(24px, 4vw, 72px)',
                alignItems: 'start',
              }}
              className="work-inner"
            >
              {/* Left: meta */}
              <div>
                <span className="mono uppercase" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-ink-ghost)' }}>
                  {w.year}
                </span>
                <h3
                  className="display"
                  style={{
                    marginTop: 14,
                    fontSize: 'clamp(24px, 3.5vw, 52px)',
                    fontWeight: 340,
                    lineHeight: 1.0,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-ink)',
                  }}
                >
                  {w.name}
                </h3>
                <p style={{ marginTop: 10, color: w.accent, fontStyle: 'italic', fontSize: 15, lineHeight: 1.4 }}>
                  {w.role}
                </p>
              </div>

              {/* Right: description + tags */}
              <div style={{ paddingTop: 4 }}>
                <p style={{ color: 'var(--color-ink-mute)', fontSize: 16, lineHeight: 1.65, maxWidth: '52ch', textWrap: 'pretty' }}>
                  {w.desc}
                </p>
                <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono uppercase"
                      style={{
                        fontSize: 9,
                        letterSpacing: '0.18em',
                        color: 'var(--color-ink-ghost)',
                        padding: '4px 10px',
                        border: '1px solid var(--color-line)',
                        borderRadius: 2,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Archive link */}
      <div
        data-reveal
        style={
          {
            '--stagger': '320ms',
            marginTop: 'clamp(40px, 6vh, 72px)',
            maxWidth: 1100,
          } as React.CSSProperties
        }
      >
        <a href="/work/" className="link-line mono uppercase" style={{ fontSize: 12, letterSpacing: '0.22em', color: 'var(--color-amber)' }}>
          Full archive · 40+ engagements →
        </a>
      </div>

      <style>{`
        .work-row-item:hover {
          background: var(--color-bg-elevated) !important;
        }
        .work-row-item:hover .work-glow {
          opacity: 1;
        }
        /* Use translate only (no box-shadow) to avoid ghost-card pattern */
        .work-row-item:hover .work-inner {
          transform: translateX(6px);
          transition: transform 280ms var(--ease-out-cinema);
        }
        @media (max-width: 860px) {
          .work-head,
          .work-inner { grid-template-columns: 1fr !important; }
          .work-head > div:first-child { display: none !important; }
        }
        @media (max-width: 600px) {
          .work-inner { gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
