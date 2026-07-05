import { getDict } from '@/i18n/dict';
import type { Locale } from '@/i18n/config';

const ACCENT = 'oklch(68% 0.20 280)';

export function AIPitch({ locale = 'en' }: { locale?: Locale }) {
  const t = getDict(locale).aiPitch;

  return (
    <section
      data-testid="ai-pitch"
      style={{
        padding: 'clamp(80px, 12vh, 148px) clamp(24px, 6vw, 96px)',
        background: 'var(--color-bg-elevated)',
        borderTop: '1px solid var(--color-line)',
        borderBottom: '1px solid var(--color-line)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 70% 60% at 80% 50%, ${ACCENT}0d, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 1100 }}>
        <p
          data-reveal
          className="mono uppercase"
          style={{ fontSize: 10, letterSpacing: '0.22em', color: ACCENT, marginBottom: 24 }}
        >
          {t.eyebrow}
        </p>

        <h2
          data-reveal
          className="display"
          style={
            {
              '--stagger': '60ms',
              fontSize: 'clamp(32px, 5vw, 68px)',
              fontWeight: 340,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              maxWidth: '20ch',
              textWrap: 'balance',
              marginBottom: 'clamp(32px, 5vh, 56px)',
            } as React.CSSProperties
          }
        >
          {t.heading1}
          <em style={{ fontStyle: 'italic', color: ACCENT }}>{t.headingEm}</em>
          {t.heading2}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px, 3vw, 48px)', marginBottom: 'clamp(40px, 6vh, 64px)' }} className="ai-pitch-grid">
          {t.features.map((item, i) => (
            <div key={i} data-reveal style={{ borderTop: `1px solid ${ACCENT}40`, paddingTop: 20 }}>
              <span className="mono" style={{ fontSize: 11, color: ACCENT, display: 'block', marginBottom: 14 }}>
                0{i + 1}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 440, color: 'var(--color-ink)', marginBottom: 10, lineHeight: 1.2 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 15, color: 'var(--color-ink-mute)', lineHeight: 1.65 }}>{item.body}</p>
            </div>
          ))}
        </div>

        <div
          data-reveal
          style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40, flexWrap: 'wrap' }}
        >
          {t.proof.map((label, i) => (
            <span key={i}>
              {i > 0 && <span style={{ color: 'var(--color-line)', marginRight: 20 }}>·</span>}
              <span
                className="mono uppercase"
                style={{ fontSize: 9, letterSpacing: '0.18em', color: 'var(--color-ink-ghost)' }}
              >
                {label}
              </span>
            </span>
          ))}
        </div>

        <a
          href="https://stepan2.zapleo.com"
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          data-testid="ai-pitch-cta"
          style={
            {
              '--stagger': '80ms',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              background: ACCENT,
              color: '#fff',
              borderRadius: 2,
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.04em',
              transition: 'opacity 200ms',
            } as React.CSSProperties
          }
          className="ai-pitch-cta"
        >
          {t.cta}
        </a>
      </div>

      <style>{`
        .ai-pitch-cta:hover { opacity: 0.82; }
        @media (max-width: 860px) {
          .ai-pitch-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
