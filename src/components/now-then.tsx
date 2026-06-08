import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';

export function NowThen({ locale }: { locale: Locale }) {
  const t = getDict(locale).nowThen;

  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(96px, 14vh, 160px) clamp(24px, 6vw, 96px)',
        background: 'var(--color-bg-base)',
        borderTop: '1px solid var(--color-line)',
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
        {/* Left — sticky "now" column */}
        <div style={{ position: 'sticky', top: 'clamp(80px, 12vh, 140px)', alignSelf: 'start' }}>
          <p className="eyebrow" data-reveal style={{ marginBottom: 28 }}>
            {t.nowEyebrow}
          </p>
          <h2
            className="display"
            data-reveal
            style={
              {
                '--stagger': '80ms',
                fontSize: 'clamp(40px, 6vw, 88px)',
                fontWeight: 560,
                lineHeight: 0.96,
                letterSpacing: '-0.025em',
                margin: 0,
              } as React.CSSProperties
            }
          >
            {t.nowHead}
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
            {t.nowBody}
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
            {t.meta.map(([k, v]) => (
              <li
                key={k}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr',
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

        {/* Right — flat timeline list */}
        <div>
          <p className="eyebrow" data-reveal style={{ marginBottom: 'clamp(32px, 5vh, 56px)' }}>
            {t.thenEyebrow}
          </p>

          <div style={{ display: 'grid', gap: 0 }}>
            {t.cards.map((c, i) => (
              <article
                key={c.year}
                data-reveal
                style={
                  {
                    '--stagger': `${i * 90}ms`,
                    display: 'grid',
                    gridTemplateColumns: 'min-content 1fr',
                    gap: '0 clamp(20px, 3vw, 40px)',
                    paddingTop: 'clamp(24px, 3.5vh, 40px)',
                    paddingBottom: 'clamp(24px, 3.5vh, 40px)',
                    borderTop: '1px solid var(--color-line)',
                  } as React.CSSProperties
                }
                className="timeline-row"
              >
                {/* Year — structural left column */}
                <span
                  className="display"
                  aria-hidden
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    fontWeight: 200,
                    color: 'var(--color-line-bright)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    whiteSpace: 'nowrap',
                    paddingTop: 2,
                  }}
                >
                  {c.year}
                </span>

                {/* Content */}
                <div>
                  <div
                    className="mono uppercase"
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.22em',
                      color: 'var(--color-amber)',
                      marginBottom: 10,
                    }}
                  >
                    {c.place}
                  </div>
                  <h3
                    className="display"
                    style={{
                      fontSize: 'clamp(20px, 2.2vw, 28px)',
                      fontWeight: 500,
                      letterSpacing: '-0.015em',
                      margin: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 10,
                      color: 'var(--color-ink-mute)',
                      fontSize: 'clamp(14px, 1vw, 16px)',
                      lineHeight: 1.55,
                      maxWidth: '38ch',
                    }}
                  >
                    {c.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .now-then-grid { grid-template-columns: 1fr !important; }
          .now-then-grid > div:first-child { position: static !important; }
        }
        @media (max-width: 560px) {
          .timeline-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
