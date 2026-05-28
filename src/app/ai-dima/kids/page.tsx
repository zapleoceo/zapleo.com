import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI for Kids — Indonesia · Coming Soon · AI-Dima',
  description:
    'A dedicated AI roadmap for students aged 10–17 and the parents who want to guide them. Building now — join the waitlist.',
  openGraph: {
    title: 'AI for Kids — Indonesia · AI-Dima',
    description: 'Coming soon: a dedicated roadmap for students aged 10–17 and parents in Indonesia.',
    type: 'website',
  },
  alternates: { canonical: 'https://zapleo.com/ai-dima/kids/' },
};

const GLOW = `
  radial-gradient(ellipse 70% 55% at 30% 25%, oklch(65% 0.20 160 / 0.15), transparent 60%),
  radial-gradient(ellipse 50% 60% at 80% 75%, oklch(60% 0.18 50 / 0.12), transparent 65%)
`;

export default function KidsPage() {
  return (
    <>
      {/* ── Nav ── */}
      <header
        style={{
          padding: 'clamp(20px, 3vw, 36px) clamp(24px, 4vw, 48px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--color-bg-deep)',
          borderBottom: '1px solid var(--color-line)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(12px)',
        }}
      >
        <a href="/ai-dima/" className="mono uppercase link-line" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
          ← AI-Dima
        </a>
        <span
          className="mono uppercase"
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            background: 'oklch(65% 0.20 160 / 0.12)',
            border: '1px solid var(--color-mint)',
            borderRadius: 999,
            fontSize: 10,
            letterSpacing: '0.22em',
            color: 'var(--color-mint)',
            fontWeight: 700,
          }}
        >
          Coming soon
        </span>
      </header>

      <main>
        {/* ── Hero ── */}
        <section
          style={{
            position: 'relative',
            minHeight: '80vh',
            display: 'grid',
            alignItems: 'center',
            padding: 'clamp(80px, 14vh, 160px) clamp(24px, 6vw, 96px) clamp(64px, 10vh, 120px)',
            background: 'var(--color-bg-deep)',
            overflow: 'hidden',
          }}
        >
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: GLOW, pointerEvents: 'none' }} />

          <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal>
              AI-Dima · Kids
            </p>

            <h1
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '80ms',
                  fontSize: 'clamp(52px, 9vw, 144px)',
                  fontWeight: 300,
                  fontVariationSettings: '"SOFT" 50, "opsz" 144',
                  lineHeight: 0.92,
                  letterSpacing: '-0.025em',
                  margin: '24px 0 0',
                  maxWidth: '13ch',
                } as React.CSSProperties
              }
            >
              AI for Kids{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontWeight: 220,
                  color: 'var(--color-mint)',
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                }}
              >
                — Indonesia.
              </em>
            </h1>

            <p
              data-reveal
              style={
                {
                  '--stagger': '200ms',
                  marginTop: 'clamp(28px, 4vh, 44px)',
                  fontSize: 'clamp(17px, 1.4vw, 22px)',
                  lineHeight: 1.55,
                  color: 'var(--color-ink-mute)',
                  maxWidth: '52ch',
                } as React.CSSProperties
              }
            >
              A dedicated roadmap for students aged 10–17 and the parents who want to guide them.
              Not a dumbed-down version of the adult roadmap — built from scratch for how kids actually learn.
            </p>

            {/* What's coming */}
            <div
              data-reveal
              style={
                {
                  '--stagger': '320ms',
                  marginTop: 'clamp(48px, 7vh, 80px)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 'clamp(16px, 2vw, 24px)',
                  maxWidth: 900,
                } as React.CSSProperties
              }
            >
              {[
                {
                  for: 'Ages 10–13',
                  title: 'AI Curiosity',
                  body: 'What is AI? How does it think? Creative projects with no-code tools. Built for wonder, not for jobs.',
                },
                {
                  for: 'Ages 13–17',
                  title: 'AI Builder',
                  body: 'Python basics, first AI app, Scratch → real code progression. Portfolio-first for university applications.',
                },
                {
                  for: 'Parents',
                  title: 'Parent Playbook',
                  body: 'How to support without over-directing. What signs of genuine interest look like. Which tools are safe.',
                },
              ].map((card) => (
                <div
                  key={card.for}
                  style={{
                    padding: 'clamp(24px, 3vw, 32px)',
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-line)',
                    borderRadius: 4,
                  }}
                >
                  <p className="mono uppercase" style={{ margin: 0, fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-mint)' }}>
                    {card.for}
                  </p>
                  <h2
                    className="display"
                    style={{
                      margin: '12px 0 0',
                      fontSize: 'clamp(20px, 1.8vw, 24px)',
                      fontWeight: 500,
                      letterSpacing: '-0.012em',
                      color: 'var(--color-ink)',
                      lineHeight: 1.15,
                    }}
                  >
                    {card.title}
                  </h2>
                  <p style={{ marginTop: 12, fontSize: 14.5, color: 'var(--color-ink-mute)', lineHeight: 1.55 }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Waitlist CTA */}
            <div
              data-reveal
              style={
                {
                  '--stagger': '480ms',
                  marginTop: 'clamp(56px, 8vh, 96px)',
                  padding: 'clamp(28px, 4vw, 44px)',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-line-bright)',
                  borderRadius: 6,
                  maxWidth: 640,
                } as React.CSSProperties
              }
            >
              <p className="eyebrow" style={{ marginBottom: 16 }}>
                Join the waitlist
              </p>
              <p style={{ margin: '0 0 24px', fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                I'm building this now. When it launches, you'll get early access and a direct line to ask questions
                about your child's specific situation.
              </p>
              <div style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 28px)', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="https://www.instagram.com/ai_dimaz/"
                  target="_blank"
                  rel="noopener"
                  className="mono uppercase link-line"
                  style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--color-mint)' }}
                >
                  Follow @ai_dimaz →
                </a>
                <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
                <a
                  href="mailto:dima@zapleo.com?subject=Kids%20waitlist"
                  className="mono uppercase link-line"
                  style={{ fontSize: 12, letterSpacing: '0.18em' }}
                >
                  dima@zapleo.com
                </a>
                <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
                <a
                  href="https://t.me/zapleosoft"
                  target="_blank"
                  rel="noopener"
                  className="mono uppercase link-line"
                  style={{ fontSize: 12, letterSpacing: '0.18em' }}
                >
                  Telegram
                </a>
              </div>
            </div>

            <p
              className="marginalia"
              data-reveal
              style={
                {
                  '--stagger': '580ms',
                  marginTop: 56,
                  fontStyle: 'italic',
                  maxWidth: '56ch',
                  borderLeft: '1px solid var(--color-line-bright)',
                  paddingLeft: 24,
                } as React.CSSProperties
              }
            >
              I run the IT STEP Academy Jakarta branch. We teach ages 6–18 in-person. This online roadmap is a
              companion to that — for families who can't reach us physically but want the same framework.
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          padding: 'clamp(40px, 6vh, 64px) clamp(24px, 6vw, 96px)',
          background: 'var(--color-bg-deep)',
          borderTop: '1px solid var(--color-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <a href="/ai-dima/" className="mono uppercase link-line" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
          ← AI-Dima
        </a>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-ink-ghost)' }}>
          © {new Date().getFullYear()} · AI-Dima · Jakarta (ID) → Asia → the world
        </span>
      </footer>
    </>
  );
}
