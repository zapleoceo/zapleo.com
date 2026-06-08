import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';

export function CTABlock({ locale }: { locale: Locale }) {
  const t = getDict(locale).cta;

  return (
    <section
      style={{
        padding: 'clamp(96px, 14vh, 160px) clamp(24px, 6vw, 96px)',
        background: 'var(--color-bg-deep)',
        borderTop: '1px solid var(--color-line)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, oklch(55% 0.18 70 / 0.1), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '58ch', margin: '0 auto', textAlign: 'center' }}>
        <h2
          className="display"
          data-reveal
          style={
            {
              fontSize: 'clamp(36px, 5.5vw, 80px)',
              fontWeight: 320,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              margin: 0,
              textWrap: 'balance',
            } as React.CSSProperties
          }
        >
          {t.head1}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)', fontWeight: 260 }}>{t.head2}</em>
        </h2>

        <p
          data-reveal
          style={
            {
              '--stagger': '100ms',
              marginTop: 'clamp(24px, 3.5vh, 40px)',
              color: 'var(--color-ink-mute)',
              fontSize: 'clamp(15px, 1.15vw, 18px)',
              lineHeight: 1.65,
              textWrap: 'pretty',
            } as React.CSSProperties
          }
        >
          {t.body}
        </p>

        <div
          data-reveal
          style={
            {
              '--stagger': '200ms',
              marginTop: 'clamp(40px, 6vh, 64px)',
              display: 'flex',
              gap: 'clamp(16px, 2.5vw, 36px)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            } as React.CSSProperties
          }
        >
          <a
            href="mailto:dima@zapleo.com"
            className="link-line mono uppercase"
            style={{ fontSize: 13, letterSpacing: '0.18em', color: 'var(--color-amber)' }}
          >
            dima@zapleo.com
          </a>
          <a
            href="https://wa.me/380994811889"
            target="_blank"
            rel="noopener"
            className="link-line mono uppercase"
            style={{ fontSize: 13, letterSpacing: '0.18em' }}
          >
            WhatsApp →
          </a>
          <a
            href="https://t.me/zapleosoft"
            target="_blank"
            rel="noopener"
            className="link-line mono uppercase"
            style={{ fontSize: 13, letterSpacing: '0.18em' }}
          >
            Telegram
          </a>
          <a
            href="https://www.linkedin.com/in/dmitriy-zaporozhets-83b15375/"
            target="_blank"
            rel="noopener"
            className="link-line mono uppercase"
            style={{ fontSize: 13, letterSpacing: '0.18em' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
