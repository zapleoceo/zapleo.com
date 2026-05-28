import { LangSwitcher } from './lang-switcher';

/**
 * Cinematic hero — full viewport, asymmetric, warm espresso void
 * with double bloom + grain. Headline tilts to operator-narrative.
 */
export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--color-bg-deep)',
        overflow: 'hidden',
      }}
    >
      {/* warm atmospherics */}
      <div className="bloom-warm" style={{ position: 'absolute', inset: 0 }} />
      <div className="bloom-deep" style={{ position: 'absolute', inset: 0 }} />

      {/* top brand strip */}
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
          <span aria-hidden style={{ margin: '0 10px', color: 'var(--color-ink-ghost)' }}>
            ·
          </span>
          <span style={{ color: 'var(--color-ink-mute)' }}>est. 2010</span>
        </span>
        <LangSwitcher />
      </header>

      {/* main editorial block */}
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr)',
          alignItems: 'center',
          padding: 'clamp(96px, 14vh, 180px) clamp(24px, 6vw, 96px) clamp(60px, 10vh, 120px)',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '78ch' }}>
          <p
            className="eyebrow"
            data-reveal
            style={{ '--stagger': '0ms', marginBottom: 'clamp(24px, 3vh, 40px)' } as React.CSSProperties}
          >
            Dnipro → Weligama → Vietnam → Jakarta &nbsp;·&nbsp; Operator. Educator. AI-augmented.
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
            Operator first.
            <br />
            <em
              style={{
                fontStyle: 'italic',
                fontWeight: 220,
                color: 'var(--color-amber)',
                fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
              }}
            >
              Educator now.
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
            Twelve years shipping software from a Dnipro agency. Forty-plus client engagements.
            Now running an IT academy branch in Jakarta — and teaching the path into tech with AI
            in the workflow, humans in the chair.
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
            <a href="/work/" className="link-line mono uppercase" style={{ fontSize: 12, letterSpacing: '0.18em' }}>
              See the work
            </a>
            <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>
              ·
            </span>
            <a href="/journey/" className="link-line mono uppercase" style={{ fontSize: 12, letterSpacing: '0.18em' }}>
              The journey
            </a>
            <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>
              ·
            </span>
            <a
              href="/contact/"
              className="link-line mono uppercase"
              style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--color-amber)' }}
            >
              Direct line →
            </a>
          </div>
        </div>
      </div>

      {/* chapter marker — bottom right */}
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
          CH 00 / 06
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
