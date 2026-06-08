import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';

export function PullQuote({ locale }: { locale: Locale }) {
  const t = getDict(locale).pullQuote;

  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(96px, 16vh, 180px) clamp(24px, 8vw, 140px)',
        background: 'var(--color-bg-deep)',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, oklch(55% 0.18 35 / 0.2), transparent),
            radial-gradient(ellipse 60% 80% at 80% 70%, oklch(60% 0.18 50 / 0.16), transparent)
          `,
          pointerEvents: 'none',
        }}
      />

      <figure style={{ position: 'relative', maxWidth: '26ch', margin: '0 auto', textAlign: 'left' }}>
        {/* Quote mark — decorative, not a separate node */}
        <span
          aria-hidden
          className="display"
          style={{
            position: 'absolute',
            top: '-0.3em',
            left: '-0.25em',
            fontSize: 'clamp(80px, 12vw, 160px)',
            fontWeight: 240,
            lineHeight: 1,
            color: 'var(--color-amber)',
            opacity: 0.12,
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.04em',
          }}
        >
          &ldquo;
        </span>

        <blockquote
          className="display"
          data-reveal
          style={
            {
              /* capped at 6rem (~96px) — impeccable ceiling */
              fontSize: 'clamp(32px, 5.5vw, 88px)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              margin: 0,
              color: 'var(--color-ink)',
              textWrap: 'pretty',
            } as React.CSSProperties
          }
        >
          {t.text}
        </blockquote>

        <figcaption
          data-reveal
          className="mono uppercase"
          style={
            {
              '--stagger': '200ms',
              marginTop: 'clamp(28px, 4vh, 48px)',
              fontSize: 10,
              letterSpacing: '0.22em',
              color: 'var(--color-ink-faint)',
            } as React.CSSProperties
          }
        >
          {t.caption}
        </figcaption>
      </figure>
    </section>
  );
}
