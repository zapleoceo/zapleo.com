import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';

export function CTABlock({ locale }: { locale: Locale }) {
  const t = getDict(locale).cta;
  return (
    <section
      style={{
        padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
        background: 'var(--color-bg-base)',
        borderTop: '1px solid var(--color-line)',
      }}
    >
      <div style={{ maxWidth: '64ch', margin: '0 auto', textAlign: 'center' }}>
        <p className="eyebrow" data-reveal>
          {t.eyebrow}
        </p>
        <h2
          className="display"
          data-reveal
          style={
            {
              '--stagger': '80ms',
              marginTop: 24,
              fontSize: 'clamp(34px, 5vw, 64px)',
              fontWeight: 360,
              fontVariationSettings: '"SOFT" 50, "opsz" 144',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            } as React.CSSProperties
          }
        >
          {t.head1}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>{t.head2}</em>
        </h2>
        <p
          data-reveal
          style={
            {
              '--stagger': '180ms',
              marginTop: 32,
              color: 'var(--color-ink-mute)',
              fontSize: 'clamp(15px, 1.1vw, 18px)',
              lineHeight: 1.6,
            } as React.CSSProperties
          }
        >
          {t.body}
        </p>
        <div
          data-reveal
          style={
            {
              '--stagger': '280ms',
              marginTop: 'clamp(40px, 6vh, 64px)',
              display: 'flex',
              gap: 'clamp(20px, 3vw, 40px)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            } as React.CSSProperties
          }
        >
          <a href="mailto:dima@zapleo.com" className="link-line mono uppercase" style={{ fontSize: 13, letterSpacing: '0.18em', color: 'var(--color-amber)' }}>
            dima@zapleo.com
          </a>
          <a href="https://wa.me/380994811889" target="_blank" rel="noopener" className="link-line mono uppercase" style={{ fontSize: 13, letterSpacing: '0.18em' }}>
            WhatsApp →
          </a>
          <a href="https://t.me/zapleosoft" target="_blank" rel="noopener" className="link-line mono uppercase" style={{ fontSize: 13, letterSpacing: '0.18em' }}>
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
