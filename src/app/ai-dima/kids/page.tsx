import type { Metadata } from 'next';
import { AIDimaLayout, AIDimaHeaderBadge } from '@/components/ai-dima-layout';

export const metadata: Metadata = {
  title: 'Kids Tech Roadmap Ages 7-18 · Indonesia · AI Literacy Path · AI-Dima',
  description:
    'Free age-by-age roadmap for parents in Indonesia. From Scratch at 7 to Apple Developer Academy at 18. AI-delivered. Human-directed.',
  openGraph: {
    title: 'Kids Tech Roadmap Ages 7-18 · Indonesia · AI-Dima',
    description:
      'Free age-by-age roadmap for parents in Indonesia. From Scratch at 7 to Apple Developer Academy at 18.',
    type: 'article',
  },
  alternates: { canonical: 'https://zapleo.com/ai-dima/kids/' },
};

const GLOW = `
  radial-gradient(ellipse 70% 55% at 30% 25%, oklch(65% 0.20 160 / 0.15), transparent 60%),
  radial-gradient(ellipse 50% 60% at 80% 75%, oklch(60% 0.18 50 / 0.12), transparent 65%)
`;

/* ── Age-block data ── */
const AGE_BLOCKS = [
  {
    range: 'Ages 7–10',
    title: 'Foundation: logic, not syntax.',
    accent: 'var(--color-mint)',
    accentBg: 'oklch(70% 0.14 160 / 0.10)',
    goal: 'Goal: build a first game. Prove that code is creative, not scary.',
    honest: '30 min/week is enough at this age. Consistency beats intensity. Stop before they get bored.',
    items: [
      {
        tool: 'Scratch (MIT)',
        badge: 'FREE',
        url: 'https://scratch.mit.edu',
        body: 'Visual drag-and-drop coding by MIT. No syntax, pure logic and creativity. Designed for 8+ but works at 6 with a parent alongside.',
      },
      {
        tool: 'Code.org — Hour of Code',
        badge: 'FREE',
        url: 'https://code.org/learn',
        body: 'One-hour guided coding activities. No account needed, instant results. Great for the very first session.',
      },
      {
        tool: 'Minecraft Education',
        badge: 'FREE TRIAL',
        url: 'https://education.minecraft.net',
        body: 'Block-based coding inside Minecraft. For kids already in the game — the natural pathway to Python at 12.',
      },
    ],
  },
  {
    range: 'Ages 10–12',
    title: 'AI literacy + early exposure.',
    accent: 'var(--color-mint)',
    accentBg: 'oklch(70% 0.14 160 / 0.10)',
    goal: 'Goal: the child understands what an LLM is and how to ask it a good question.',
    honest:
      "The AI tool rule at this age: always ask 'is this true?'. Build the habit of checking. A child who learns to verify AI output at 11 is far ahead of one who doesn't at 18.",
    items: [
      {
        tool: 'Claude.ai',
        badge: 'FREE',
        url: 'https://claude.ai',
        body: 'With parental guidance: teach the child to ask structured questions, notice when AI is wrong, and fact-check answers. This is the AI literacy skill that matters most.',
      },
      {
        tool: 'Khan Academy + Khanmigo',
        badge: 'FREE',
        url: 'https://www.khanacademy.org',
        body: "Khan Academy's AI tutor. The child learns HOW to use an AI tutor — to ask follow-up questions, push back, verify — not just what it teaches.",
      },
      {
        tool: 'Scratch (original projects)',
        badge: 'FREE',
        url: 'https://scratch.mit.edu',
        body: "At 10–12, move from guided tutorials to original projects. Remixing others' work and sharing publicly builds intrinsic motivation that no curriculum can.",
      },
    ],
  },
  {
    range: 'Ages 12–14',
    title: 'Real code, fun context.',
    accent: 'var(--color-amber)',
    accentBg: 'oklch(60% 0.18 50 / 0.10)',
    goal: 'Goal: one shipped Python project. Something that runs. Something the child chose to build.',
    honest:
      "Don't push toward competitive programming at this age unless the child asks. Building something that exists and works beats solving puzzles that don't.",
    items: [
      {
        tool: 'Python + Minecraft (Dicoding)',
        badge: 'FREE',
        url: 'https://www.dicoding.com',
        body: 'Dicoding has Python tracks in Bahasa Indonesia. Connecting Python to Minecraft keeps engagement high — they already care about the outcome.',
      },
      {
        tool: 'HTML + CSS — first website',
        badge: 'FREE',
        url: 'https://developer.mozilla.org/en-US/docs/Learn',
        body: "MDN's free curriculum. First milestone: their own portfolio page. Something to show friends, something to be proud of. Ownership > grades.",
      },
      {
        tool: 'Replit',
        badge: 'FREE',
        url: 'https://replit.com',
        body: 'Browser-based IDE — no installation friction. Write Python in the browser, share with a link, see it run instantly. Removes every excuse not to start.',
      },
    ],
  },
  {
    range: 'Ages 14–16',
    title: 'Modern tools, real workflow.',
    accent: 'var(--color-amber)',
    accentBg: 'oklch(60% 0.18 50 / 0.10)',
    goal: 'Goal: one published project with a live link. Portfolio-ready by 16.',
    honest:
      'The GitHub habit: one commit per week minimum. Commit history = proof of work. University admissions and employers check it. Start now, not at 17.',
    items: [
      {
        tool: 'Cursor (AI IDE)',
        badge: 'FREE TIER',
        url: 'https://cursor.com',
        body: 'The AI-native IDE used by professional developers. Learning to direct AI-generated code — to read it, test it, debug it — is more valuable than typing every line by hand.',
      },
      {
        tool: 'Prompt Engineering for Developers',
        badge: 'FREE',
        url: 'https://www.deeplearning.ai/short-courses/',
        body: "DeepLearning.AI's free short course. Accessible at 14. This is the skill separating people who use AI from people who direct it.",
      },
      {
        tool: 'Hugging Face account',
        badge: 'FREE',
        url: 'https://huggingface.co',
        body: "Create a profile, deploy a first AI demo (Spaces), get familiar with the ecosystem. Hugging Face profiles are checked by university programs and employers — a public portfolio that's not GitHub.",
      },
    ],
  },
  {
    range: 'Ages 16–18',
    title: 'Portfolio + scholarship paths.',
    accent: 'var(--color-amber)',
    accentBg: 'oklch(60% 0.18 50 / 0.10)',
    goal: 'Goal: 3–5 real projects on GitHub, university application ready, first scholarship applied for.',
    honest:
      'Other scholarship paths worth knowing: BINUS pre-college, ITB, NUS (Singapore), NTU (Singapore). Each has merit awards available for Indonesian students with strong GitHub portfolios.',
    items: [
      {
        tool: 'GitHub portfolio (3–5 projects)',
        badge: 'FREE',
        url: 'https://github.com',
        body: 'READMEs, live links, demo videos. Each project solves a problem the student cares about — not textbook exercises. Proof > certificates at this stage.',
      },
      {
        tool: 'Real AI projects (RAG, agents)',
        badge: 'FREE',
        url: 'https://www.deeplearning.ai',
        body: 'RAG chatbots, AI agents, multimodal apps. A motivated 16-year-old can build production-quality AI tools using DeepLearning.AI courses + free Claude/OpenAI API tiers.',
      },
      {
        tool: 'Apple Developer Academy @ BINUS',
        badge: 'SCHOLARSHIP',
        url: 'https://applydeveloperacademy.binus.ac.id',
        body: 'Full scholarship + MacBook + iPhone. 1-year intensive at BINUS Jakarta. Covers iOS development, design thinking, and entrepreneurship. The best free path in Indonesia. Application opens annually — check the site.',
      },
    ],
  },
] as const;

const LOCAL_OPTIONS = [
  {
    name: 'IT STEP Academy Jakarta',
    ages: 'Ages 6–18 · In-person · Jakarta',
    badge: 'MY SCHOOL',
    badgeColor: 'var(--color-amber)',
    url: 'https://itstep.id',
    what: 'Python with Minecraft, game development, web front-end. Structured in-person program for kids in Jakarta.',
    disclosure:
      'I run this branch. Full transparency — I include it because the curriculum is genuinely good, not as a sales pitch. Visit and judge the program for yourself.',
  },
  {
    name: 'Apple Developer Academy @ BINUS',
    ages: 'Ages 18+ · Full scholarship',
    badge: 'FREE',
    badgeColor: 'var(--color-mint)',
    url: 'https://applydeveloperacademy.binus.ac.id',
    what: 'Full scholarship + MacBook + iPhone. 1-year program at BINUS Jakarta. The best free endpoint for Indonesian developers.',
    disclosure: undefined,
  },
  {
    name: 'Dicoding',
    ages: 'All ages · Online · Bahasa Indonesia',
    badge: 'FREE',
    badgeColor: 'var(--color-mint)',
    url: 'https://www.dicoding.com',
    what: 'Free and paid Indonesian-language tech courses. The AI Engineer learning path is Google-backed and well-structured.',
    disclosure: undefined,
  },
  {
    name: 'Coding Bee · KodeKiddo · Timedoor',
    ages: 'Ages 7–15 · Paid · Jakarta',
    badge: 'PAID',
    badgeColor: 'var(--color-ink-faint)',
    url: 'https://codingbee.id',
    what: 'Established kids coding bootcamps in Jakarta. Good for structured accountability when self-directed learning stalls.',
    disclosure: undefined,
  },
] as const;

export default function KidsRoadmapPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://zapleo.com/ai-dima/kids/#article',
        headline: 'Kids Tech Roadmap Ages 7-18 · Indonesia',
        description:
          'Free age-by-age technology learning path for children in Indonesia. From Scratch at 7 to Apple Developer Academy at 18.',
        url: 'https://zapleo.com/ai-dima/kids/',
        inLanguage: 'en',
        author: { '@id': 'https://zapleo.com/#person' },
        publisher: { '@id': 'https://zapleo.com/#person' },
        datePublished: '2026-05-29',
      },
      {
        '@type': 'EducationalOccupationalProgram',
        '@id': 'https://zapleo.com/ai-dima/kids/#program',
        name: 'Kids Tech Roadmap — Indonesia',
        description: 'Age-by-age technology and AI literacy learning path for children ages 7–18 in Indonesia',
        url: 'https://zapleo.com/ai-dima/kids/',
        educationalProgramMode: 'Online',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        provider: { '@id': 'https://zapleo.com/#person' },
      },
    ],
  };

  return (
    <AIDimaLayout headerLabel={<AIDimaHeaderBadge>Ages 7–18 · Indonesia</AIDimaHeaderBadge>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main>
        {/* ── HERO ── */}
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
              AI-Dima · Kids Roadmap
            </p>

            <h1
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '80ms',
                  fontSize: 'clamp(52px, 9vw, 144px)',
                  fontWeight: 300,
                  lineHeight: 0.92,
                  letterSpacing: '-0.025em',
                  margin: '24px 0 0',
                  maxWidth: '13ch',
                } as React.CSSProperties
              }
            >
              The Kids Tech Roadmap{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontWeight: 220,
                  color: 'var(--color-mint)',
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
              Age 7 to 18 · Indonesia edition.
              From Scratch at 7 to Apple Developer Academy at 18.
            </p>

            {/* Credibility stat */}
            <div
              data-reveal
              style={
                {
                  '--stagger': '320ms',
                  marginTop: 'clamp(40px, 6vh, 64px)',
                  padding: 'clamp(28px, 4vw, 40px) clamp(28px, 4vw, 44px)',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-line-bright)',
                  borderRadius: 6,
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'clamp(20px, 3vw, 36px)',
                  alignItems: 'center',
                  maxWidth: 720,
                } as React.CSSProperties
              }
              className="kids-stat"
            >
              <span
                className="display"
                style={{
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  fontWeight: 240,
                  color: 'var(--color-mint)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                }}
              >
                70%
              </span>
              <div>
                <p style={{ margin: 0, fontSize: 'clamp(15px, 1.1vw, 18px)', color: 'var(--color-ink)', fontWeight: 500 }}>
                  of job skills will change by 2030.
                </p>
                <p
                  style={{
                    margin: '6px 0 0',
                    fontSize: 'clamp(15px, 1.1vw, 17px)',
                    color: 'var(--color-ink-mute)',
                    lineHeight: 1.55,
                  }}
                >
                  AI literacy leads the list. Your kid can start building it at 7.
                </p>
                <p className="marginalia" style={{ margin: '6px 0 0' }}>
                  LinkedIn 2026 Skills on the Rise.
                </p>
              </div>
            </div>

            {/* Inside this roadmap */}
            <div
              data-reveal
              style={
                {
                  '--stagger': '440ms',
                  marginTop: 'clamp(48px, 7vh, 80px)',
                  maxWidth: 760,
                } as React.CSSProperties
              }
            >
              <p className="eyebrow" style={{ marginBottom: 20 }}>
                Inside this roadmap
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                {[
                  'Age-by-age learning path from 7 to 18',
                  '5 free tools to start today (most with no account needed)',
                  "The honest 'AI as a tool, not teacher' rule",
                  'Apple Developer Academy @ BINUS — the full scholarship endpoint',
                  'Local Jakarta options + free online alternatives',
                ].map((item) => (
                  <li
                    key={item}
                    style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 12, alignItems: 'baseline' }}
                  >
                    <span className="mono" style={{ color: 'var(--color-mint)', fontSize: 14 }}>
                      ›
                    </span>
                    <span
                      style={{ fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--color-ink)', lineHeight: 1.5 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── AGE BLOCKS ── */}
        {AGE_BLOCKS.map((block, blockIdx) => (
          <section
            key={block.range}
            style={{
              padding: 'clamp(80px, 14vh, 160px) clamp(24px, 6vw, 96px)',
              background: blockIdx % 2 === 0 ? 'var(--color-bg-base)' : 'var(--color-bg-deep)',
              borderTop: '1px solid var(--color-line)',
            }}
          >
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <span
                data-reveal
                className="mono uppercase"
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  background: block.accentBg,
                  border: `1px solid ${block.accent}`,
                  borderRadius: 999,
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  color: block.accent,
                  fontWeight: 600,
                }}
              >
                {block.range}
              </span>

              <h2
                className="display"
                data-reveal
                style={
                  {
                    '--stagger': '80ms',
                    fontSize: 'clamp(36px, 6.5vw, 88px)',
                    fontWeight: 320,
                    lineHeight: 0.96,
                    letterSpacing: '-0.022em',
                    margin: '28px 0 0',
                    maxWidth: '18ch',
                  } as React.CSSProperties
                }
              >
                {block.title}
              </h2>

              <p
                data-reveal
                style={
                  {
                    '--stagger': '160ms',
                    marginTop: 24,
                    fontSize: 'clamp(15px, 1.1vw, 17px)',
                    color: 'var(--color-ink-mute)',
                    fontStyle: 'italic',
                    maxWidth: '56ch',
                    lineHeight: 1.55,
                  } as React.CSSProperties
                }
              >
                {block.goal}
              </p>

              <div
                style={{
                  marginTop: 'clamp(40px, 6vh, 64px)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'clamp(14px, 1.8vw, 20px)',
                }}
              >
                {block.items.map((item, i) => (
                  <a
                    key={item.tool}
                    href={item.url}
                    target="_blank"
                    rel="noopener"
                    data-reveal
                    style={
                      {
                        '--stagger': `${i * 80}ms`,
                        display: 'block',
                        padding: 'clamp(24px, 3vw, 32px)',
                        background: 'var(--color-bg-elevated)',
                        border: '1px solid var(--color-line)',
                        borderRadius: 4,
                        textDecoration: 'none',
                        transition: 'border-color 250ms',
                      } as React.CSSProperties
                    }
                    className="kids-tool-card"
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 12,
                        flexWrap: 'wrap',
                      }}
                    >
                      <h3
                        className="display"
                        style={{
                          margin: 0,
                          fontSize: 'clamp(18px, 1.6vw, 22px)',
                          fontWeight: 500,
                          letterSpacing: '-0.01em',
                          color: 'var(--color-ink)',
                          lineHeight: 1.15,
                        }}
                      >
                        {item.tool}
                      </h3>
                      <span
                        className="mono uppercase"
                        style={{
                          display: 'inline-block',
                          padding: '3px 10px',
                          background: block.accentBg,
                          border: `1px solid ${block.accent}`,
                          borderRadius: 999,
                          fontSize: 10,
                          letterSpacing: '0.16em',
                          color: block.accent,
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p
                      style={{
                        marginTop: 12,
                        fontSize: 'clamp(14px, 1vw, 15.5px)',
                        color: 'var(--color-ink-mute)',
                        lineHeight: 1.55,
                      }}
                    >
                      {item.body}
                    </p>
                    <p
                      className="mono uppercase"
                      style={{ marginTop: 14, fontSize: 11, letterSpacing: '0.14em', color: block.accent }}
                    >
                      Visit →
                    </p>
                  </a>
                ))}
              </div>

              {/* Per-block honest note */}
              <div
                data-reveal
                style={
                  {
                    '--stagger': '320ms',
                    marginTop: 'clamp(36px, 5vh, 52px)',
                    padding: 'clamp(20px, 2.5vw, 28px) clamp(24px, 3vw, 36px)',
                    background: block.accentBg,
                    border: `1px solid ${block.accent}`,
                    borderRadius: 4,
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: 'clamp(14px, 2vw, 24px)',
                    alignItems: 'baseline',
                    maxWidth: 800,
                  } as React.CSSProperties
                }
                className="kids-note"
              >
                <span
                  className="mono uppercase"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    color: block.accent,
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Honest note
                </span>
                <span
                  style={{
                    fontSize: 'clamp(14.5px, 1.05vw, 16px)',
                    color: 'var(--color-ink-mute)',
                    lineHeight: 1.55,
                    fontStyle: 'italic',
                  }}
                >
                  {block.honest}
                </span>
              </div>
            </div>
          </section>
        ))}

        {/* ── HONEST TRUTH ── */}
        <section
          style={{
            padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-base)',
            borderTop: '1px solid var(--color-line)',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal>
              The honest truth
            </p>
            <h2
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '60ms',
                  fontSize: 'clamp(36px, 6vw, 80px)',
                  fontWeight: 320,
                  lineHeight: 0.98,
                  letterSpacing: '-0.022em',
                  margin: '24px 0 0',
                  maxWidth: '16ch',
                } as React.CSSProperties
              }
            >
              AI is a tool.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>Not a teacher.</em>
            </h2>
            <div style={{ marginTop: 40, maxWidth: '60ch', display: 'grid', gap: 20 }}>
              <p
                data-reveal
                style={
                  {
                    '--stagger': '120ms',
                    fontSize: 'clamp(16px, 1.2vw, 19px)',
                    lineHeight: 1.6,
                    color: 'var(--color-ink-mute)',
                    margin: 0,
                  } as React.CSSProperties
                }
              >
                Your kid still needs to read books. Struggle with math. Debug code line by line. Get frustrated and
                fix it. The children who win in 2030 use AI{' '}
                <em style={{ color: 'var(--color-ink)' }}>on top of fundamentals</em> — not instead of them.
              </p>
              <p
                data-reveal
                style={
                  {
                    '--stagger': '200ms',
                    fontSize: 'clamp(16px, 1.2vw, 19px)',
                    lineHeight: 1.6,
                    color: 'var(--color-ink-mute)',
                    margin: 0,
                  } as React.CSSProperties
                }
              >
                AI as a shortcut teaches dependence. AI as an amplifier — used after the student has wrestled with
                the problem themselves — teaches leverage. The difference is everything.
              </p>
            </div>
          </div>
        </section>

        {/* ── LOCAL JAKARTA OPTIONS ── */}
        <section
          style={{
            padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-deep)',
            borderTop: '1px solid var(--color-line)',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal>
              Local options · Jakarta
            </p>
            <h2
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '60ms',
                  fontSize: 'clamp(36px, 6vw, 80px)',
                  fontWeight: 320,
                  lineHeight: 0.98,
                  letterSpacing: '-0.022em',
                  margin: '24px 0 0',
                  maxWidth: '18ch',
                } as React.CSSProperties
              }
            >
              Where to learn{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-mint)' }}>in person.</em>
            </h2>
            <div
              style={{ marginTop: 'clamp(48px, 7vh, 80px)', display: 'grid', gap: 'clamp(14px, 1.8vw, 20px)' }}
            >
              {LOCAL_OPTIONS.map((opt, i) => {
                const isAmber = opt.badgeColor === 'var(--color-amber)';
                const isMint = opt.badgeColor === 'var(--color-mint)';
                const badgeBg = isAmber
                  ? 'oklch(60% 0.18 50 / 0.14)'
                  : isMint
                    ? 'oklch(70% 0.14 160 / 0.12)'
                    : 'oklch(50% 0 0 / 0.10)';

                return (
                  <div
                    key={opt.name}
                    data-reveal
                    style={
                      {
                        '--stagger': `${i * 60}ms`,
                        padding: 'clamp(24px, 3.5vw, 36px) clamp(28px, 4vw, 44px)',
                        background: 'var(--color-bg-elevated)',
                        border: `1px solid ${isAmber ? 'var(--color-line-bright)' : 'var(--color-line)'}`,
                        borderRadius: 4,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 14, flexWrap: 'wrap' }}
                    >
                      <div style={{ flex: '1 1 auto' }}>
                        <h3
                          className="display"
                          style={{
                            margin: 0,
                            fontSize: 'clamp(18px, 1.6vw, 22px)',
                            fontWeight: 500,
                            letterSpacing: '-0.01em',
                            color: 'var(--color-ink)',
                            lineHeight: 1.15,
                          }}
                        >
                          {opt.name}
                        </h3>
                        <p
                          className="mono"
                          style={{
                            margin: '6px 0 0',
                            fontSize: 12,
                            color: 'var(--color-ink-faint)',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {opt.ages}
                        </p>
                      </div>
                      <span
                        className="mono uppercase"
                        style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          background: badgeBg,
                          border: `1px solid ${opt.badgeColor}`,
                          borderRadius: 999,
                          fontSize: 10,
                          letterSpacing: '0.18em',
                          color: opt.badgeColor,
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {opt.badge}
                      </span>
                    </div>
                    <p
                      style={{
                        marginTop: 16,
                        fontSize: 'clamp(14.5px, 1.05vw, 16px)',
                        color: 'var(--color-ink-mute)',
                        lineHeight: 1.55,
                      }}
                    >
                      {opt.what}
                    </p>
                    {opt.disclosure && (
                      <p
                        className="marginalia"
                        style={{
                          marginTop: 12,
                          fontStyle: 'italic',
                          color: 'var(--color-amber)',
                          opacity: 0.85,
                          borderLeft: '2px solid var(--color-amber-deep)',
                          paddingLeft: 14,
                        }}
                      >
                        {opt.disclosure}
                      </p>
                    )}
                    <a
                      href={opt.url}
                      target="_blank"
                      rel="noopener"
                      className="mono uppercase link-line"
                      style={{
                        display: 'inline-block',
                        marginTop: 14,
                        fontSize: 11,
                        letterSpacing: '0.16em',
                        color: opt.badgeColor,
                      }}
                    >
                      Visit →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            position: 'relative',
            padding: 'clamp(96px, 16vh, 180px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-deep)',
            borderTop: '1px solid var(--color-line)',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden
            style={{ position: 'absolute', inset: 0, background: GLOW, opacity: 0.5, pointerEvents: 'none' }}
          />
          <div style={{ position: 'relative', maxWidth: 920, margin: '0 auto' }}>
            <h2
              className="display"
              data-reveal
              style={
                {
                  fontSize: 'clamp(40px, 7vw, 96px)',
                  fontWeight: 300,
                  lineHeight: 0.96,
                  letterSpacing: '-0.025em',
                  margin: 0,
                  maxWidth: '14ch',
                } as React.CSSProperties
              }
            >
              Start where{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontWeight: 220,
                  color: 'var(--color-mint)',
                }}
              >
                they are.
              </em>
            </h2>
            <p
              data-reveal
              style={
                {
                  '--stagger': '160ms',
                  marginTop: 32,
                  fontSize: 'clamp(17px, 1.3vw, 21px)',
                  lineHeight: 1.55,
                  color: 'var(--color-ink-mute)',
                  maxWidth: '54ch',
                } as React.CSSProperties
              }
            >
              Pick the age block that matches your child. Start with one tool. One session per week.
              The habit matters more than the tool. The curiosity matters more than the speed.
            </p>

            <div
              data-reveal
              style={
                {
                  '--stagger': '300ms',
                  marginTop: 'clamp(48px, 8vh, 80px)',
                  padding: 'clamp(28px, 4vw, 40px)',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-line-bright)',
                  borderRadius: 6,
                  maxWidth: 680,
                } as React.CSSProperties
              }
            >
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                Get the printable PDF
              </p>
              <p
                style={{
                  margin: '0 0 24px',
                  fontSize: 'clamp(15px, 1.1vw, 17px)',
                  color: 'var(--color-ink)',
                  lineHeight: 1.55,
                }}
              >
                Comment <strong>KIDS</strong> on Instagram for the one-page printable version. Good for the
                fridge. Good for parent-teacher conversations.
              </p>
              <div
                style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 28px)', flexWrap: 'wrap', alignItems: 'center' }}
              >
                <a
                  href="https://www.instagram.com/ai_dimaz/"
                  target="_blank"
                  rel="noopener"
                  className="mono uppercase link-line"
                  style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--color-mint)' }}
                >
                  @ai_dimaz on Instagram →
                </a>
                <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
                <a
                  href="mailto:dima@zapleo.com?subject=Kids%20Roadmap"
                  className="mono uppercase link-line"
                  style={{ fontSize: 12, letterSpacing: '0.18em' }}
                >
                  dima@zapleo.com
                </a>
              </div>
            </div>

            <p
              className="marginalia"
              data-reveal
              style={
                {
                  '--stagger': '420ms',
                  marginTop: 48,
                  fontStyle: 'italic',
                  maxWidth: '60ch',
                } as React.CSSProperties
              }
            >
              AI-delivered. Human-directed. I run IT STEP Academy Jakarta (disclosure above). This roadmap is not a
              sales pitch — it exists because I get the same questions from parents every week, and I'd rather
              answer them once, properly.
            </p>
          </div>
        </section>
      </main>

      <style>{`
        .kids-tool-card:hover { border-color: var(--color-line-bright) !important; }
        @media (max-width: 700px) {
          .kids-note { grid-template-columns: 1fr !important; gap: 8px !important; }
          .kids-stat { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AIDimaLayout>
  );
}
