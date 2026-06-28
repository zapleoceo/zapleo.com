import { LangSwitcher } from './lang-switcher';

type LocaleHeroProps = {
  locale: 'en' | 'uk' | 'ru' | 'id';
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  contextNote: string;
};

export function LocaleHero(p: LocaleHeroProps) {
  return (
    <section
        style={{
          position: 'relative',
          minHeight: '100svh',
          background: 'var(--color-bg-deep)',
          overflow: 'hidden',
        }}
      >
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
            zIndex: 10,
          }}
        >
          <a href="/" className="mono uppercase link-line" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
            zapleo
          </a>
          <LangSwitcher current={p.locale} />
        </header>

        <div
          style={{
            position: 'relative',
            minHeight: '100svh',
            display: 'grid',
            alignItems: 'center',
            padding: 'clamp(96px, 14vh, 180px) clamp(24px, 6vw, 96px) clamp(60px, 10vh, 120px)',
            zIndex: 2,
          }}
        >
          <div style={{ maxWidth: '72ch' }}>
            <p className="eyebrow" data-reveal style={{ marginBottom: 'clamp(24px, 3vh, 40px)' }}>
              {p.eyebrow}
            </p>

            <h1
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '90ms',
                  fontSize: 'clamp(44px, 6.5vw, 96px)',
                  fontWeight: 600,
                  lineHeight: 0.95,
                  letterSpacing: '-0.025em',
                  margin: 0,
                  textWrap: 'balance',
                } as React.CSSProperties
              }
            >
              {p.title}
            </h1>

            <p
              data-reveal
              style={
                {
                  '--stagger': '220ms',
                  marginTop: 'clamp(28px, 4vh, 48px)',
                  fontSize: 'clamp(17px, 1.4vw, 21px)',
                  lineHeight: 1.55,
                  color: 'var(--color-ink-mute)',
                  maxWidth: '54ch',
                } as React.CSSProperties
              }
            >
              {p.intro}
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
              <a
                href={p.ctaPrimary.href}
                className="link-line mono uppercase"
                style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--color-amber)' }}
              >
                {p.ctaPrimary.label}
              </a>
              <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
              <a
                href={p.ctaSecondary.href}
                className="link-line mono uppercase"
                style={{ fontSize: 12, letterSpacing: '0.18em' }}
              >
                {p.ctaSecondary.label}
              </a>
            </div>

            <p
              data-reveal
              className="marginalia"
              style={
                {
                  '--stagger': '460ms',
                  marginTop: 'clamp(48px, 7vh, 88px)',
                  maxWidth: '54ch',
                  fontStyle: 'italic',
                  color: 'var(--color-ink-faint)',
                } as React.CSSProperties
              }
            >
              {p.contextNote}
            </p>
          </div>
        </div>
    </section>
  );
}
