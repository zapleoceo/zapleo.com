import type { Locale } from '@/i18n/config';
import { CursorDot } from './cursor-dot';
import { Footer } from './footer';
import { LangSwitcher } from './lang-switcher';

export function PageShell({
  eyebrow,
  title,
  intro,
  chapter,
  locale = 'en',
  children,
}: {
  eyebrow: string;
  title: string | React.ReactNode;
  intro?: string | React.ReactNode;
  chapter: string; // e.g. "CH 02 / 06"
  locale?: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <CursorDot />
      <header
        style={{
          padding: 'clamp(24px, 4vw, 48px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--color-bg-deep)',
          borderBottom: '1px solid var(--color-line)',
        }}
      >
        <a href="/" className="mono uppercase link-line" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
          ← zapleo
        </a>
        <LangSwitcher current={locale} />
      </header>

      <section
        style={{
          position: 'relative',
          padding: 'clamp(72px, 14vh, 140px) clamp(24px, 6vw, 96px) clamp(48px, 8vh, 80px)',
          background: 'var(--color-bg-deep)',
          overflow: 'hidden',
        }}
      >
        <div aria-hidden className="bloom-warm" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'relative', maxWidth: '72ch' }}>
          <p className="eyebrow" data-reveal style={{ marginBottom: 24 }}>
            {eyebrow}
          </p>
          <h1
            className="display"
            data-reveal
            style={
              {
                '--stagger': '80ms',
                fontSize: 'clamp(40px, 7vw, 96px)',
                fontWeight: 320,
                fontVariationSettings: '"SOFT" 50, "opsz" 144',
                margin: 0,
                lineHeight: 0.96,
                letterSpacing: '-0.02em',
              } as React.CSSProperties
            }
          >
            {title}
          </h1>
          {intro && (
            <p
              data-reveal
              style={
                {
                  '--stagger': '200ms',
                  marginTop: 32,
                  fontSize: 'clamp(16px, 1.2vw, 19px)',
                  color: 'var(--color-ink-mute)',
                  maxWidth: '54ch',
                  lineHeight: 1.6,
                } as React.CSSProperties
              }
            >
              {intro}
            </p>
          )}
        </div>
        <span
          className="mono"
          style={{
            position: 'absolute',
            top: 'clamp(24px, 4vw, 48px)',
            right: 'clamp(24px, 6vw, 96px)',
            fontSize: 10,
            letterSpacing: '0.22em',
            color: 'var(--color-ink-faint)',
          }}
        >
          {chapter}
        </span>
      </section>

      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
