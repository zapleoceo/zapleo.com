import type { Metadata } from 'next';
import { LangSwitcher } from '@/components/lang-switcher';

export const metadata: Metadata = {
  title: 'AI-Dima · AI-augmented career education for Asia',
  description:
    'AI-Dima is an AI-augmented education project by Dmitriy Zaporozhets — Branch Director at IT STEP Academy Jakarta. Free roadmaps, curated resources, and a public playbook for anyone entering tech in Southeast Asia.',
  openGraph: {
    title: 'AI-Dima · AI-delivered. Human-directed.',
    description:
      'A Ukrainian operator-turned-educator building AI career resources for the Asian market. Free playbooks, honest school reviews, and the full tech stack exposed.',
    type: 'website',
  },
  alternates: { canonical: 'https://zapleo.com/ai-dima/' },
};

const GLOW = `
  radial-gradient(ellipse 70% 50% at 20% 25%, oklch(60% 0.18 50 / 0.18), transparent 60%),
  radial-gradient(ellipse 50% 60% at 85% 75%, oklch(45% 0.14 30 / 0.20), transparent 65%)
`;

const SECTIONS = [
  {
    href: '/ai-dima/roadmap/',
    label: 'Roadmap',
    eyebrow: 'Free playbook',
    title: 'The 90-Day AI Roadmap for Indonesia',
    desc: 'Week-by-week plan from zero to your first AI-skilled job. Built from live May 2026 unicorn job postings.',
    cta: 'Read the roadmap →',
    accent: 'var(--color-amber)',
  },
  {
    href: '/ai-dima/resources/',
    label: 'Resources',
    eyebrow: 'Curated library',
    title: 'Tools, courses & communities',
    desc: 'A growing, opinionated list of what actually works — free tools, structured bootcamps, and communities worth your time.',
    cta: 'Browse resources →',
    accent: 'var(--color-mint)',
  },
  {
    href: '/ai-dima/playbook/',
    label: 'Playbook',
    eyebrow: 'Transparency',
    title: 'How this brand is built',
    desc: 'The full AI-augmented stack behind AI-Dima: HeyGen, Claude, n8n, and why none of it works without a human in the chair.',
    cta: 'See the playbook →',
    accent: 'var(--color-ink-mute)',
  },
  {
    href: '/ai-dima/kids/',
    label: 'Kids',
    eyebrow: 'Ages 7–18 · Indonesia',
    title: 'AI for Kids — Indonesia',
    desc: 'Age-by-age tech roadmap from Scratch at 7 to Apple Developer Academy at 18. Plus a parent playbook.',
    cta: 'Read the kids roadmap →',
    accent: 'var(--color-mint)',
  },
];

export default function AIDimaHub() {
  return (
    <>
      {/* ── Top nav ── */}
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
        <a href="/" className="mono uppercase link-line" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
          ← zapleo
        </a>
        <div style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 32px)', alignItems: 'center' }}>
          <nav className="mono ai-dima-section-nav" style={{ display: 'flex', gap: 'clamp(12px, 2vw, 28px)', fontSize: 11, letterSpacing: '0.16em' }}>
            {SECTIONS.slice(0, 3).map((s) => (
              <a key={s.href} href={s.href} className="link-line uppercase" style={{ color: 'var(--color-ink-faint)' }}>
                {s.label}
              </a>
            ))}
          </nav>
          <LangSwitcher current="en" homeOnly />
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section
          style={{
            position: 'relative',
            padding: 'clamp(80px, 14vh, 160px) clamp(24px, 6vw, 96px) clamp(64px, 10vh, 120px)',
            background: 'var(--color-bg-deep)',
            overflow: 'hidden',
          }}
        >
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: GLOW, pointerEvents: 'none' }} />

          <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal>
              AI-Dima · The project
            </p>

            <h1
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '80ms',
                  fontSize: 'clamp(52px, 9.5vw, 148px)',
                  fontWeight: 300,
                  fontVariationSettings: '"SOFT" 50, "opsz" 144',
                  lineHeight: 0.92,
                  letterSpacing: '-0.025em',
                  margin: '24px 0 0',
                  maxWidth: '12ch',
                } as React.CSSProperties
              }
            >
              AI-delivered.{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontWeight: 220,
                  color: 'var(--color-amber)',
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                }}
              >
                Human-directed.
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
              Free career-tech education for the Asian market. Roadmaps, honest school reviews, and a
              public playbook — built with AI, run by a human.
            </p>

            {/* The human behind the project */}
            <div
              data-reveal
              style={
                {
                  '--stagger': '320ms',
                  marginTop: 'clamp(40px, 6vh, 64px)',
                  padding: 'clamp(24px, 3.5vw, 36px) clamp(28px, 4vw, 44px)',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-line-bright)',
                  borderRadius: 6,
                  maxWidth: 680,
                  display: 'grid',
                  gridTemplateColumns: '4px 1fr',
                  gap: 'clamp(20px, 3vw, 32px)',
                } as React.CSSProperties
              }
            >
              <div style={{ background: 'var(--color-amber)', borderRadius: 2 }} />
              <div>
                <p className="eyebrow" style={{ marginBottom: 14 }}>
                  The human behind this
                </p>
                <p style={{ margin: 0, fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                  AI-Dima is a project by{' '}
                  <a href="/" className="link-line" style={{ color: 'var(--color-amber)' }}>
                    Dmitriy Zaporozhets
                  </a>{' '}
                  — Branch Director at IT STEP Academy Jakarta, 12 years of agency work
                  across Ukraine and Southeast Asia. The avatar and the voice are AI-augmented.
                  The strategy, the curriculum choices, and the editorial calls are mine.
                </p>
                <p className="marginalia" style={{ marginTop: 12, fontStyle: 'italic' }}>
                  This disclosure is the whole point. An AI-augmented educator who hides the AI is
                  teaching the wrong lesson.
                </p>
              </div>
            </div>

            {/* Social links */}
            <div
              data-reveal
              style={
                {
                  '--stagger': '440ms',
                  marginTop: 40,
                  display: 'flex',
                  gap: 'clamp(16px, 2.5vw, 32px)',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                } as React.CSSProperties
              }
            >
              <a
                href="https://www.instagram.com/ai_dimaz/"
                target="_blank"
                rel="noopener"
                className="mono uppercase link-line"
                style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--color-amber)' }}
              >
                Instagram @ai_dimaz →
              </a>
              <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
              <a
                href="https://t.me/zapleosoft"
                target="_blank"
                rel="noopener"
                className="mono uppercase link-line"
                style={{ fontSize: 12, letterSpacing: '0.18em' }}
              >
                Telegram @zapleosoft
              </a>
              <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
              <a
                href="mailto:dima@zapleo.com"
                className="mono uppercase link-line"
                style={{ fontSize: 12, letterSpacing: '0.18em' }}
              >
                dima@zapleo.com
              </a>
            </div>
          </div>
        </section>

        {/* ── Section cards ── */}
        <section
          style={{
            padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-base)',
            borderTop: '1px solid var(--color-line)',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal style={{ marginBottom: 48 }}>
              What's here
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(16px, 2vw, 24px)',
              }}
            >
              {SECTIONS.map((s, i) => (
                <a
                  key={s.href}
                  href={s.href}
                  data-reveal
                  className="section-card"
                  style={
                    {
                      '--stagger': `${i * 80}ms`,
                      display: 'block',
                      padding: 'clamp(28px, 3.5vw, 40px)',
                      background: 'var(--color-bg-elevated)',
                      border: '1px solid var(--color-line)',
                      borderRadius: 4,
                      textDecoration: 'none',
                      transition: 'border-color 300ms, background 300ms',
                    } as React.CSSProperties
                  }
                >
                  <p
                    className="mono uppercase"
                    style={{ fontSize: 10, letterSpacing: '0.22em', color: s.accent, marginBottom: 14 }}
                  >
                    {s.eyebrow}
                  </p>
                  <h2
                    className="display"
                    style={{
                      margin: 0,
                      fontSize: 'clamp(22px, 2.2vw, 28px)',
                      fontWeight: 460,
                      letterSpacing: '-0.015em',
                      color: 'var(--color-ink)',
                      lineHeight: 1.15,
                    }}
                  >
                    {s.title}
                  </h2>
                  <p
                    style={{
                      marginTop: 14,
                      fontSize: 'clamp(14px, 1vw, 16px)',
                      color: 'var(--color-ink-mute)',
                      lineHeight: 1.6,
                    }}
                  >
                    {s.desc}
                  </p>
                  <p
                    className="mono uppercase link-line"
                    style={{
                      marginTop: 24,
                      fontSize: 12,
                      letterSpacing: '0.16em',
                      color: s.accent,
                      display: 'inline-block',
                    }}
                  >
                    {s.cta}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stack transparency strip ── */}
        <section
          style={{
            padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-deep)',
            borderTop: '1px solid var(--color-line)',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal style={{ marginBottom: 36 }}>
              The AI stack · brief version
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'clamp(16px, 2vw, 24px)',
              }}
            >
              {[
                { tool: 'HeyGen', role: 'AI avatar + lip-sync video', note: 'The face is generated.' },
                { tool: 'Claude (Anthropic)', role: 'Scripts, research, copy', note: 'First draft is AI.' },
                { tool: 'n8n', role: 'Automation & posting', note: 'No manual scheduling.' },
                { tool: 'Claude Code', role: 'This entire site', note: 'Code reviewed, humans decide.' },
              ].map((item, i) => (
                <div
                  key={item.tool}
                  data-reveal
                  style={
                    {
                      '--stagger': `${i * 80}ms`,
                      padding: 'clamp(20px, 2.5vw, 28px)',
                      background: 'var(--color-bg-elevated)',
                      border: '1px solid var(--color-line)',
                      borderRadius: 4,
                    } as React.CSSProperties
                  }
                >
                  <p
                    className="display"
                    style={{
                      margin: 0,
                      fontSize: 'clamp(18px, 1.6vw, 22px)',
                      fontWeight: 500,
                      color: 'var(--color-ink)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.1,
                    }}
                  >
                    {item.tool}
                  </p>
                  <p style={{ margin: '10px 0 0', fontSize: 14, color: 'var(--color-ink-mute)', lineHeight: 1.5 }}>
                    {item.role}
                  </p>
                  <p className="marginalia" style={{ marginTop: 8, fontStyle: 'italic' }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
            <p
              data-reveal
              style={
                {
                  '--stagger': '400ms',
                  marginTop: 48,
                  fontSize: 'clamp(15px, 1.1vw, 17px)',
                  color: 'var(--color-ink-mute)',
                  lineHeight: 1.6,
                  maxWidth: '60ch',
                } as React.CSSProperties
              }
            >
              The human decides what to teach, who to trust, and what not to say. AI handles the production.
              That split is non-negotiable — and it's the same split I teach.{' '}
              <a href="/ai-dima/playbook/" className="link-line" style={{ color: 'var(--color-amber)' }}>
                Full playbook →
              </a>
            </p>
          </div>
        </section>
      </main>

      <style>{`
        .section-card:hover {
          border-color: var(--color-line-bright) !important;
          background: var(--color-bg-base) !important;
        }
        @media (max-width: 640px) {
          .ai-dima-section-nav { display: none; }
        }
        @media (max-width: 700px) {
          .aidima-op-bridge {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .aidima-op-bridge > div:first-child { display: none; }
        }
      `}</style>

      {/* ── Operator cross-link ── */}
      <section
        style={{
          padding: 'clamp(36px, 5vh, 52px) clamp(24px, 6vw, 96px)',
          background: 'var(--color-bg-deep)',
          borderTop: '1px solid var(--color-line)',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '3px 1fr auto',
            gap: 'clamp(20px, 3vw, 36px)',
            alignItems: 'center',
          }}
          className="aidima-op-bridge"
        >
          <div
            style={{ background: 'var(--color-amber-deep)', borderRadius: 2, alignSelf: 'stretch', minHeight: 40 }}
          />
          <div>
            <p className="eyebrow" style={{ margin: '0 0 8px' }}>
              Operator behind this
            </p>
            <p
              style={{ margin: 0, fontSize: 'clamp(14px, 1vw, 15.5px)', color: 'var(--color-ink-mute)', lineHeight: 1.5 }}
            >
              <a href="/" className="link-line" style={{ color: 'var(--color-ink)' }}>
                Dmitriy Zaporozhets
              </a>{' '}
              · 12 years shipping software · Branch Director at IT STEP Academy Jakarta
            </p>
          </div>
          <a
            href="/journey/"
            className="mono uppercase link-line"
            style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--color-amber)', flexShrink: 0 }}
          >
            See the full journey →
          </a>
        </div>
      </section>

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
        <a href="/" className="mono uppercase link-line" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
          ← zapleo.com · Dmitriy Zaporozhets
        </a>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-ink-ghost)' }}>
          © {new Date().getFullYear()} · AI-Dima · Jakarta (ID) → Asia → the world
        </span>
      </footer>
    </>
  );
}
