import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';
import { LangSwitcher } from './lang-switcher';

export function Hero({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const home = t.home;
  const base = locale === 'en' ? '' : `/${locale}`;

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--color-bg-deep)',
        overflow: 'hidden',
      }}
    >
      <div className="bloom-warm" style={{ position: 'absolute', inset: 0 }} />
      <div className="bloom-deep" style={{ position: 'absolute', inset: 0 }} />

      <header
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: 'clamp(24px, 4vw, 48px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <span className="mono uppercase" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
          zapleo
          <span aria-hidden style={{ margin: '0 10px', color: 'var(--color-ink-ghost)' }}>·</span>
          <span style={{ color: 'var(--color-ink-mute)' }}>{t.common.brandTag}</span>
        </span>
        <LangSwitcher current={locale} />
      </header>

      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'grid',
          alignItems: 'center',
          padding: 'clamp(96px, 14vh, 180px) clamp(24px, 6vw, 96px) clamp(60px, 10vh, 120px)',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '78ch' }}>
          <p className="eyebrow" data-reveal style={{ marginBottom: 'clamp(24px, 3vh, 40px)' }}>
            {home.eyebrow}
          </p>

          <h1
            className="display"
            data-reveal
            style={
              {
                '--stagger': '90ms',
                fontSize: 'clamp(48px, 9.5vw, 156px)',
                fontWeight: 320,
                fontVariationSettings: '"SOFT" 50, "opsz" 144',
                lineHeight: 0.92,
                letterSpacing: '-0.025em',
                margin: 0,
              } as React.CSSProperties
            }
          >
            {home.headLine1}
            <br />
            <em
              style={{
                fontStyle: 'italic',
                fontWeight: 220,
                color: 'var(--color-amber)',
                fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
              }}
            >
              {home.headLine2}
            </em>
          </h1>

          <p
            data-reveal
            style={
              {
                '--stagger': '220ms',
                marginTop: 'clamp(28px, 4vh, 48px)',
                fontSize: 'clamp(17px, 1.4vw, 22px)',
                lineHeight: 1.55,
                color: 'var(--color-ink-mute)',
                maxWidth: '54ch',
              } as React.CSSProperties
            }
          >
            {home.lead}
          </p>

          <div
            data-reveal
            style={
              {
                '--stagger': '340ms',
                marginTop: 'clamp(40px, 6vh, 72px)',
                display: 'flex',
                gap: 'clamp(16px, 2vw, 28px)',
                flexWrap: 'wrap',
                alignItems: 'center',
              } as React.CSSProperties
            }
          >
            <a href={`${base}/work/`} className="link-line mono uppercase" style={{ fontSize: 12, letterSpacing: '0.18em' }}>
              {home.ctaWork}
            </a>
            <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
            <a href={`${base}/journey/`} className="link-line mono uppercase" style={{ fontSize: 12, letterSpacing: '0.18em' }}>
              {home.ctaJourney}
            </a>
            <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
            <a
              href={`${base}/contact/`}
              className="link-line mono uppercase"
              style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--color-amber)' }}
            >
              {home.ctaContact}
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(24px, 4vh, 48px)',
          right: 'clamp(24px, 4vw, 48px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 12,
          zIndex: 2,
        }}
      >
        <span className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
          {t.common.chapter(0, 6)}
        </span>
        <span
          aria-hidden
          style={{
            width: 1,
            height: 56,
            background: 'linear-gradient(to bottom, transparent, var(--color-ink-faint))',
          }}
        />
      </div>
    </section>
  );
}
