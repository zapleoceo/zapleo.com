import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';

/**
 * Track record section.
 * Anti-pattern removed: "big number + small label" hero-metric template.
 * Replaced with a horizontal stat rail: number and label sit side-by-side
 * in a clear reading hierarchy, stats separated by ruled dividers, industries
 * as a dense tag cloud below.
 */
export function TrustedStrip({ locale }: { locale: Locale }) {
  const t = getDict(locale).trusted;

  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(72px, 11vh, 130px) clamp(24px, 6vw, 96px)',
        background: 'var(--color-bg-elevated)',
        borderTop: '1px solid var(--color-line)',
        borderBottom: '1px solid var(--color-line)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 70% at 50% 50%, oklch(55% 0.12 50 / 0.07), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>

        {/* Section label — one deliberate eyebrow, not one on every section */}
        <p
          data-reveal
          className="mono"
          style={{
            fontSize: 10,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-ink-ghost)',
            marginBottom: 'clamp(40px, 6vh, 72px)',
          }}
        >
          {t.eyebrow}
        </p>

        {/* Stat rail — inline number + label pairs, ruled dividers */}
        <div
          data-reveal
          style={
            {
              '--stagger': '80ms',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0',
            } as React.CSSProperties
          }
          className="stat-rail"
        >
          {t.stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: 'clamp(24px, 3vh, 36px) clamp(20px, 2.5vw, 40px)',
                borderLeft: i > 0 ? '1px solid var(--color-line)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span
                  className="display"
                  style={{
                    fontSize: 'clamp(40px, 5.5vw, 72px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: 'var(--color-amber)',
                  }}
                >
                  {s.value}
                </span>
                {s.unit && (
                  <span
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink-faint)',
                    }}
                  >
                    {s.unit}
                  </span>
                )}
              </div>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink-faint)',
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Industries — dense tag cloud, wraps naturally */}
        <div
          data-reveal
          style={
            {
              '--stagger': '240ms',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 16px',
              marginTop: 'clamp(48px, 7vh, 88px)',
              maxWidth: 860,
            } as React.CSSProperties
          }
        >
          {t.industries.map((ind) => (
            <span
              key={ind}
              className="mono uppercase"
              style={{
                fontSize: 10,
                letterSpacing: '0.16em',
                color: 'var(--color-ink-faint)',
                padding: '5px 14px',
                border: '1px solid var(--color-line)',
                borderRadius: 2,
              }}
            >
              {ind}
            </span>
          ))}
        </div>

        {/* Source footnote */}
        <p
          data-reveal
          className="marginalia"
          style={
            {
              '--stagger': '360ms',
              marginTop: 40,
              maxWidth: '58ch',
              fontStyle: 'italic',
            } as React.CSSProperties
          }
        >
          * {t.footnote}{' '}
          <a className="link-line" href="https://github.com/zapleo" style={{ color: 'var(--color-ink-faint)' }}>
            github.com/zapleo
          </a>{' '}
          ·{' '}
          <a className="link-line" href="https://www.linkedin.com/company/zapleo" style={{ color: 'var(--color-ink-faint)' }}>
            linkedin/company/zapleo
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stat-rail {
            grid-template-columns: 1fr 1fr !important;
          }
          .stat-rail > div { border-left: none !important; border-top: 1px solid var(--color-line); }
          .stat-rail > div:first-child { border-top: none; }
          .stat-rail > div:nth-child(2) { border-top: none; }
        }
      `}</style>
    </section>
  );
}
