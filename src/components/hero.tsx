import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';
import { HeroCanvas } from './hero-canvas';
import { LangSwitcher } from './lang-switcher';

/** Location milestones shown as a quiet right-side decoration. */
const JOURNEY = [
  { code: 'UA', year: '2010' },
  { code: 'LK', year: '2022' },
  { code: 'VN', year: '2023' },
  { code: 'ID', year: '2024 →' },
] as const;

export function Hero({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const home = t.home;
  const base = locale === 'en' ? '' : `/${locale}`;

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: 'var(--color-bg-deep)',
        overflow: 'hidden',
      }}
    >
      {/* Particle network — the AI/neural-network visual signal */}
      <HeroCanvas />

      {/* Top header — stays visible before nav slides in */}
      <header
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: 'clamp(22px, 3.5vw, 44px) clamp(24px, 6vw, 96px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <span className="mono uppercase" style={{ fontSize: 12, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
          zapleo
          <span aria-hidden style={{ margin: '0 10px', color: 'var(--color-ink-ghost)' }}>·</span>
          <span style={{ color: 'var(--color-ink-ghost)' }}>{t.common.brandTag}</span>
        </span>
        <LangSwitcher current={locale} />
      </header>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'grid',
          alignContent: 'center',
          padding: 'clamp(100px, 16vh, 180px) clamp(24px, 6vw, 96px) clamp(80px, 12vh, 140px)',
          zIndex: 5,
        }}
      >
        <div style={{ maxWidth: '68ch' }}>

          {/* Headline — capped at 6rem (96px) per impeccable ceiling */}
          <h1
            className="display"
            data-reveal
            style={
              {
                '--stagger': '40ms',
                fontSize: 'clamp(44px, 6.5vw, 96px)',
                fontWeight: 600,
                lineHeight: 0.96,
                letterSpacing: '-0.025em',
                margin: 0,
                textWrap: 'balance',
              } as React.CSSProperties
            }
          >
            {home.headLine1}
            <br />
            <em
              style={{
                fontStyle: 'italic',
                fontWeight: 200,
                letterSpacing: '-0.01em',
                color: 'var(--color-amber)',
              }}
            >
              {home.headLine2}
            </em>
          </h1>

          {/* Lead */}
          <p
            data-reveal
            style={
              {
                '--stagger': '160ms',
                marginTop: 'clamp(28px, 4vh, 48px)',
                fontSize: 'clamp(16px, 1.3vw, 20px)',
                lineHeight: 1.6,
                color: 'var(--color-ink-mute)',
                maxWidth: '52ch',
                textWrap: 'pretty',
              } as React.CSSProperties
            }
          >
            {home.lead}
          </p>

          {/* CTAs */}
          <div
            data-reveal
            style={
              {
                '--stagger': '280ms',
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

          {/* Location sub-note — replaces the eyebrow, sits below CTAs */}
          <p
            data-reveal
            className="mono"
            style={
              {
                '--stagger': '400ms',
                marginTop: 'clamp(32px, 5vh, 56px)',
                fontSize: 11,
                letterSpacing: '0.18em',
                color: 'var(--color-ink-ghost)',
                textTransform: 'uppercase',
              } as React.CSSProperties
            }
          >
            {home.eyebrow}
          </p>
        </div>
      </div>

      {/* Journey — precision readout, structural right column */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 'clamp(24px, 5vw, 72px)',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          zIndex: 5,
          pointerEvents: 'none',
        }}
        className="hero-journey"
      >
        {JOURNEY.map((item, i) => (
          <div
            key={item.code}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 10,
              opacity: 0.2 + i * 0.2,
            }}
          >
            <span
              className="display"
              style={{
                fontSize: 'clamp(18px, 2.5vw, 36px)',
                fontWeight: i === JOURNEY.length - 1 ? 500 : 200,
                letterSpacing: '-0.01em',
                lineHeight: 1,
                color: i === JOURNEY.length - 1 ? 'var(--color-amber)' : 'var(--color-ink-mute)',
              }}
            >
              {item.code}
            </span>
            <span className="mono" style={{ fontSize: 9, letterSpacing: '0.16em', color: 'var(--color-ink-ghost)' }}>
              {item.year}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(24px, 4vh, 48px)',
          left: 'clamp(24px, 6vw, 96px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          zIndex: 5,
          alignItems: 'flex-start',
        }}
      >
        <span className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-ink-ghost)', writingMode: 'vertical-rl' }}>
          scroll
        </span>
        <span
          aria-hidden
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, var(--color-ink-ghost), transparent)',
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-journey { display: none !important; }
        }
      `}</style>
    </section>
  );
}
