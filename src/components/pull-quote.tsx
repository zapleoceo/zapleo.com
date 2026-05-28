import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';

export function PullQuote({ locale }: { locale: Locale }) {
  const t = getDict(locale).pullQuote;
  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(120px, 18vh, 220px) clamp(24px, 8vw, 160px)',
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
            radial-gradient(ellipse 80% 60% at 20% 30%, oklch(55% 0.18 35 / 0.22), transparent),
            radial-gradient(ellipse 60% 80% at 80% 70%, oklch(60% 0.18 50 / 0.18), transparent)
          `,
          pointerEvents: 'none',
        }}
      />

      <figure
        style={{
          position: 'relative',
          maxWidth: '28ch',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        <blockquote
          className="display"
          data-reveal
          style={
            {
              '--stagger': '0ms',
              fontSize: 'clamp(36px, 7vw, 108px)',
              fontWeight: 240,
              fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
              fontStyle: 'italic',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              margin: 0,
              color: 'var(--color-ink)',
              mixBlendMode: 'screen',
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
              '--stagger': '240ms',
              marginTop: 'clamp(32px, 5vh, 56px)',
              fontSize: 11,
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
