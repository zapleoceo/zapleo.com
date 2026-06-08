import type { Locale } from '@/i18n/config';
import { CursorDot } from './cursor-dot';
import { Footer } from './footer';

/**
 * Shared chrome for inner pages (work, journey, now, journal, contact, colophon).
 * The global Nav (in layout.tsx) handles navigation; this component focuses on
 * the page hero, chapter indicator, and footer.
 */
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
  chapter: string;
  locale?: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <CursorDot />

      {/* Hero */}
      <section
        className="nav-offset"
        style={{
          position: 'relative',
          padding: 'clamp(56px, 10vh, 120px) clamp(24px, 6vw, 96px) clamp(48px, 8vh, 80px)',
          background: 'var(--color-bg-deep)',
          overflow: 'hidden',
        }}
      >
        <div aria-hidden className="bloom-warm" style={{ position: 'absolute', inset: 0, opacity: 0.45 }} />

        {/* Chapter indicator */}
        <span
          className="mono"
          style={{
            position: 'absolute',
            top: 'clamp(16px, 2.5vw, 28px)',
            right: 'clamp(24px, 6vw, 96px)',
            fontSize: 10,
            letterSpacing: '0.22em',
            color: 'var(--color-ink-ghost)',
          }}
        >
          {chapter}
        </span>

        <div style={{ position: 'relative', maxWidth: '72ch' }}>
          {/* Eyebrow — keep as the chapter's named system, one per page */}
          <p className="eyebrow" data-reveal style={{ marginBottom: 20 }}>
            {eyebrow}
          </p>

          <h1
            className="display"
            data-reveal
            style={
              {
                '--stagger': '80ms',
                fontSize: 'clamp(40px, 6.5vw, 96px)',
                fontWeight: 320,
                lineHeight: 0.96,
                letterSpacing: '-0.02em',
                margin: 0,
                textWrap: 'balance',
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
                  textWrap: 'pretty',
                } as React.CSSProperties
              }
            >
              {intro}
            </p>
          )}
        </div>
      </section>

      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
