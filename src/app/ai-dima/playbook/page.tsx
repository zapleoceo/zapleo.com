import type { Metadata } from 'next';
import { AIDimaLayout, AIDimaHeaderLabel } from '@/components/ai-dima-layout';

export const metadata: Metadata = {
  title: 'The Playbook · How AI-Dima is built · AI-Dima',
  description:
    'Full transparency on the AI-augmented stack behind AI-Dima: HeyGen avatar, Claude, n8n, and why none of it works without a human in the chair.',
  openGraph: {
    title: 'AI-Dima Playbook · The full stack, exposed.',
    description: 'HeyGen avatar, Claude scripts, n8n automation, Claude Code for the site. And why none of it works without a human.',
    type: 'article',
  },
  alternates: { canonical: 'https://zapleo.com/ai-dima/playbook/' },
};

const GLOW = `
  radial-gradient(ellipse 60% 50% at 80% 20%, oklch(45% 0.14 30 / 0.18), transparent 60%),
  radial-gradient(ellipse 50% 55% at 20% 80%, oklch(60% 0.18 50 / 0.12), transparent 65%)
`;

const STACK = [
  {
    tool: 'HeyGen',
    role: 'AI avatar · video production',
    what: 'The "AI-Dima" avatar is generated using HeyGen. I record a script read-through, HeyGen produces the synced video at scale.',
    why: 'One human, many languages, consistent delivery. A Ukrainian-born educator can talk to Indonesia, Vietnam, and Thailand simultaneously.',
    honest: 'The face is generated. The voice is AI-synced. The script is written by me.',
    url: 'https://heygen.com',
  },
  {
    tool: 'Claude (Anthropic)',
    role: 'Scripts · research · copy',
    what: 'Every script goes through Claude. Research, outline, draft, refine. I prompt with specific constraints — audience, tone, what not to say.',
    why: 'One operator brain, AI production speed. Claude produces the first draft; I cut, rewrite, and make the editorial calls.',
    honest: 'First draft is AI. Final voice is mine. I review everything before it goes out.',
    url: 'https://claude.ai',
  },
  {
    tool: 'n8n',
    role: 'Automation · scheduling · posting',
    what: 'Content scheduling, cross-platform posting, and data pipelines run through n8n. No manual uploads to Instagram or Telegram.',
    why: 'Consistency without manual overhead. n8n lets a solo operator run a media cadence that would require a team.',
    honest: "No manual scheduling. But I decide what goes into the pipeline — n8n doesn't pick topics.",
    url: 'https://n8n.io',
  },
  {
    tool: 'Claude Code',
    role: 'This entire site',
    what: 'The zapleo.com site — including this page — is written with Claude Code (Anthropic\'s coding AI). I describe what I need; it generates the code.',
    why: 'I am not a full-stack developer. Claude Code lets me ship a production-quality site without a dev team.',
    honest: 'Code is AI-generated. Architecture decisions, content strategy, and final review are mine.',
    url: 'https://claude.ai/code',
  },
];

const PRINCIPLES = [
  {
    number: '01',
    title: 'Disclose everything',
    body: 'If AI touched it, say so. An AI educator who hides the AI is teaching the wrong lesson. The avatar is generated. Say it in the video. The script is AI-drafted. Put it in the description.',
  },
  {
    number: '02',
    title: 'The human decides what to teach',
    body: "AI doesn't pick topics. It doesn't choose what to recommend or what to omit. The editorial judgment — what's worth teaching, who to trust, what advice is dangerous — that's the job that doesn't get automated.",
  },
  {
    number: '03',
    title: 'Production is the cheap part',
    body: 'The hard work is staying current, interviewing employers, reading actual job postings, and filtering bad advice from good. AI handles the production; the human handles the knowledge work.',
  },
  {
    number: '04',
    title: 'This is the model I teach',
    body: "Every student of AI-Dima learns this split: use AI for production, keep humans in the decision seat. I can't teach that while hiding how I work. So I show it.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://zapleo.com/ai-dima/playbook/#article',
  headline: 'The AI-Dima Playbook — Full Stack Exposed',
  description: 'Full transparency on the AI-augmented stack behind AI-Dima: HeyGen avatar, Claude, n8n, and why none of it works without a human.',
  url: 'https://zapleo.com/ai-dima/playbook/',
  inLanguage: 'en',
  author: { '@id': 'https://zapleo.com/#person' },
  publisher: { '@id': 'https://zapleo.com/#person' },
  datePublished: '2026-05-01',
};

export default function PlaybookPage() {
  return (
    <AIDimaLayout headerLabel={<AIDimaHeaderLabel>Transparency</AIDimaHeaderLabel>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
              AI-Dima · Playbook
            </p>
            <h1
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '80ms',
                  fontSize: 'clamp(52px, 9vw, 140px)',
                  fontWeight: 300,
                  lineHeight: 0.92,
                  letterSpacing: '-0.025em',
                  margin: '24px 0 0',
                  maxWidth: '13ch',
                } as React.CSSProperties
              }
            >
              How this brand{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontWeight: 220,
                  color: 'var(--color-amber)',
                }}
              >
                is built.
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
              Full stack exposed. Every tool, every workflow, every honest note about what AI does and what I do.
            </p>

            {/* The human */}
            <div
              data-reveal
              style={
                {
                  '--stagger': '320ms',
                  marginTop: 'clamp(48px, 7vh, 72px)',
                  padding: 'clamp(24px, 3.5vw, 36px) clamp(28px, 4vw, 44px)',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-line-bright)',
                  borderRadius: 6,
                  maxWidth: 700,
                  display: 'grid',
                  gridTemplateColumns: '4px 1fr',
                  gap: 'clamp(20px, 3vw, 32px)',
                } as React.CSSProperties
              }
            >
              <div style={{ background: 'var(--color-amber)', borderRadius: 2 }} />
              <div>
                <p className="eyebrow" style={{ marginBottom: 14 }}>The human in the chair</p>
                <p style={{ margin: 0, fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                  <a href="/" className="link-line" style={{ color: 'var(--color-amber)' }}>Dmitriy Zaporozhets</a>
                  {' '}— Branch Director at IT STEP Academy Jakarta. 12 years of agency and operator work across Ukraine
                  and Southeast Asia: Dnipro (UA) → Weligama (LK) → Nha Trang (VN) → Jakarta (ID).
                </p>
                <p className="marginalia" style={{ marginTop: 12, fontStyle: 'italic' }}>
                  The avatar and the voice are AI-augmented. The strategy, the curriculum choices, and the editorial
                  calls are mine. That split is non-negotiable — it's also what I teach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stack detail ── */}
        <section
          style={{
            padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-base)',
            borderTop: '1px solid var(--color-line)',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal>The stack</p>
            <h2
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '60ms',
                  fontSize: 'clamp(36px, 6vw, 72px)',
                  fontWeight: 320,
                  lineHeight: 0.98,
                  letterSpacing: '-0.022em',
                  margin: '24px 0 0',
                  maxWidth: '16ch',
                } as React.CSSProperties
              }
            >
              Tool by tool,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>no omissions.</em>
            </h2>

            <div style={{ marginTop: 'clamp(48px, 7vh, 80px)', display: 'grid', gap: 'clamp(16px, 2vw, 24px)' }}>
              {STACK.map((item, i) => (
                <div
                  key={item.tool}
                  data-reveal
                  style={
                    {
                      '--stagger': `${i * 80}ms`,
                      padding: 'clamp(28px, 4vw, 44px)',
                      background: 'var(--color-bg-elevated)',
                      border: '1px solid var(--color-line)',
                      borderRadius: 4,
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 220px) 1fr',
                      gap: 'clamp(24px, 3.5vw, 48px)',
                    } as React.CSSProperties
                  }
                  className="stack-card"
                >
                  <div>
                    <p
                      className="display"
                      style={{
                        margin: 0,
                        fontSize: 'clamp(22px, 2vw, 28px)',
                        fontWeight: 520,
                        letterSpacing: '-0.012em',
                        color: 'var(--color-amber)',
                        lineHeight: 1.1,
                      }}
                    >
                      {item.tool}
                    </p>
                    <p className="mono" style={{ marginTop: 8, fontSize: 12, color: 'var(--color-ink-faint)', letterSpacing: '0.08em', lineHeight: 1.4 }}>
                      {item.role}
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener"
                      className="mono uppercase link-line"
                      style={{ display: 'inline-block', marginTop: 12, fontSize: 11, letterSpacing: '0.16em', color: 'var(--color-ink-faint)' }}
                    >
                      Visit →
                    </a>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--color-ink)', lineHeight: 1.6 }}>
                      {item.what}
                    </p>
                    <p style={{ marginTop: 14, fontSize: 'clamp(14.5px, 1vw, 16px)', color: 'var(--color-ink-mute)', lineHeight: 1.55 }}>
                      <span className="mono uppercase" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-amber)', marginRight: 8 }}>Why:</span>
                      {item.why}
                    </p>
                    <p
                      className="marginalia"
                      style={{
                        marginTop: 16,
                        fontStyle: 'italic',
                        borderLeft: '2px solid var(--color-line-bright)',
                        paddingLeft: 14,
                      }}
                    >
                      <span style={{ color: 'var(--color-ink-faint)' }}>Honest: </span>
                      {item.honest}
                    </p>
                  </div>

                  <style>{`
                    @media (max-width: 700px) {
                      .stack-card { grid-template-columns: 1fr !important; gap: 20px !important; }
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Principles ── */}
        <section
          style={{
            padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-deep)',
            borderTop: '1px solid var(--color-line)',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal>The principles</p>
            <h2
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '60ms',
                  fontSize: 'clamp(36px, 6vw, 72px)',
                  fontWeight: 320,
                  lineHeight: 0.98,
                  letterSpacing: '-0.022em',
                  margin: '24px 0 0',
                  maxWidth: '18ch',
                } as React.CSSProperties
              }
            >
              Why I do it{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>this way.</em>
            </h2>

            <div style={{ marginTop: 'clamp(48px, 7vh, 80px)', display: 'grid', gap: 'clamp(12px, 1.5vw, 18px)' }}>
              {PRINCIPLES.map((p, i) => (
                <div
                  key={p.number}
                  data-reveal
                  style={
                    {
                      '--stagger': `${i * 80}ms`,
                      padding: 'clamp(24px, 3vw, 36px) clamp(28px, 4vw, 44px)',
                      background: 'var(--color-bg-elevated)',
                      border: '1px solid var(--color-line)',
                      borderRadius: 4,
                      display: 'grid',
                      gridTemplateColumns: '64px 1fr',
                      gap: 'clamp(20px, 3vw, 40px)',
                      alignItems: 'baseline',
                    } as React.CSSProperties
                  }
                  className="principle-row"
                >
                  <span
                    className="display"
                    style={{
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      fontWeight: 240,
                      color: 'var(--color-amber)',
                      lineHeight: 0.9,
                      letterSpacing: '-0.03em',
                      opacity: 0.5,
                    }}
                  >
                    {p.number}
                  </span>
                  <div>
                    <h3
                      className="display"
                      style={{
                        margin: 0,
                        fontSize: 'clamp(18px, 1.6vw, 22px)',
                        fontWeight: 500,
                        letterSpacing: '-0.01em',
                        color: 'var(--color-ink)',
                        lineHeight: 1.2,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ marginTop: 12, fontSize: 'clamp(14.5px, 1.05vw, 16.5px)', color: 'var(--color-ink-mute)', lineHeight: 1.6 }}>
                      {p.body}
                    </p>
                  </div>

                  <style>{`
                    @media (max-width: 600px) {
                      .principle-row { grid-template-columns: 1fr !important; gap: 10px !important; }
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-base)',
            borderTop: '1px solid var(--color-line)',
          }}
        >
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal style={{ marginBottom: 24 }}>
              Questions about the stack?
            </p>
            <p
              data-reveal
              style={
                {
                  '--stagger': '80ms',
                  fontSize: 'clamp(16px, 1.2vw, 19px)',
                  color: 'var(--color-ink-mute)',
                  lineHeight: 1.6,
                  maxWidth: '54ch',
                } as React.CSSProperties
              }
            >
              If you're building a similar AI-augmented project and want to compare notes, DM me. I'm genuinely
              interested in how other operators are running this.
            </p>
            <div
              data-reveal
              style={
                {
                  '--stagger': '160ms',
                  marginTop: 36,
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
                @ai_dimaz →
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
      </main>
    </AIDimaLayout>
  );
}
