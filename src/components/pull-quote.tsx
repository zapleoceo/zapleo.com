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
        borderTop: '1px solid var(--color-line)',
        borderBottom: '1px solid var(--color-line)',
      }}
    >
      <figure style={{ position: 'relative', maxWidth: '26ch', margin: '0 auto', textAlign: 'left' }}>
        {/* Amber accent line — structural, not decorative */}
        <div
          aria-hidden
          style={{
            width: 48,
            height: 2,
            background: 'var(--color-amber)',
            marginBottom: 'clamp(28px, 4vh, 48px)',
          }}
        />

        <blockquote
          className="display"
          data-reveal
          style={
            {
              fontSize: 'clamp(32px, 5.5vw, 88px)',
              fontWeight: 200,
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
