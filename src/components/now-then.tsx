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
                fontWeight: 360,
                fontVariationSettings: '"SOFT" 30, "opsz" 144',
                lineHeight: 1,
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

        <div style={{ display: 'grid', gap: 'clamp(48px, 8vh, 120px)' }}>
          <p className="eyebrow" data-reveal>
            {t.thenEyebrow}
          </p>

          {t.cards.map((c, i) => (
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
          .now-then-grid { grid-template-columns: 1fr !important; }
          .now-then-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
