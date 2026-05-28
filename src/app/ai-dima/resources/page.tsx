import type { Metadata } from 'next';
import { LangSwitcher } from '@/components/lang-switcher';

export const metadata: Metadata = {
  title: 'Resources · AI-Dima',
  description:
    'A growing, opinionated list of tools, courses, and communities for AI career learning in Southeast Asia — curated by AI-Dima.',
  openGraph: {
    title: 'AI-Dima Resources · Tools, courses & communities',
    description: 'Free tools, structured bootcamps, and communities worth your time. Updated as the landscape changes.',
    type: 'website',
  },
  alternates: { canonical: 'https://zapleo.com/ai-dima/resources/' },
};

const GLOW = `
  radial-gradient(ellipse 60% 50% at 15% 30%, oklch(55% 0.16 160 / 0.12), transparent 60%),
  radial-gradient(ellipse 50% 55% at 85% 70%, oklch(60% 0.18 50 / 0.14), transparent 65%)
`;

type Resource = {
  name: string;
  for: string;
  what: string;
  cost: 'Free' | 'Freemium' | 'Paid' | 'Free + cert';
  url: string;
  added: string;
};

const TOOLS: Resource[] = [
  {
    name: 'Claude.ai',
    for: 'Everyone',
    what: 'Your best AI thinking partner for writing, coding, research, and planning. Start here.',
    cost: 'Freemium',
    url: 'https://claude.ai',
    added: 'May 2026',
  },
  {
    name: 'Cursor',
    for: 'Builders (coding)',
    what: 'AI-native IDE. Type what you want, get working code. Best entry point for non-coders who want to ship apps.',
    cost: 'Freemium',
    url: 'https://cursor.com',
    added: 'May 2026',
  },
  {
    name: 'Replit',
    for: 'Beginners',
    what: 'Browser-based IDE with AI help built in. Deploy your first app without installing anything.',
    cost: 'Freemium',
    url: 'https://replit.com',
    added: 'May 2026',
  },
  {
    name: 'n8n',
    for: 'Automation builders',
    what: 'Visual workflow automation. Open-source, self-hostable. Named verbatim in GoTo job postings.',
    cost: 'Free',
    url: 'https://n8n.io',
    added: 'May 2026',
  },
  {
    name: 'Hugging Face',
    for: 'ML practitioners',
    what: 'The AI community hub. Free models, datasets, and hosting via Spaces. Non-negotiable bookmark.',
    cost: 'Free',
    url: 'https://huggingface.co',
    added: 'May 2026',
  },
  {
    name: 'LangChain',
    for: 'Developers',
    what: 'The standard framework for RAG and agent applications. Required knowledge for any LLM engineering role.',
    cost: 'Free',
    url: 'https://www.langchain.com',
    added: 'May 2026',
  },
];

const COURSES: Resource[] = [
  {
    name: 'DeepLearning.AI — Short Courses',
    for: 'All levels',
    what: "Andrew Ng's free short courses. Do 'ChatGPT Prompt Engineering' and 'LangChain for LLM App Development' first.",
    cost: 'Free',
    url: 'https://www.deeplearning.ai/short-courses/',
    added: 'May 2026',
  },
  {
    name: 'Dicoding — AI Engineer Path',
    for: 'Indonesian learners',
    what: '6-course path in Bahasa Indonesia: Python, ML basics, Deep Learning, Applied ML. Google-backed certificate. Best free local starting point.',
    cost: 'Free + cert',
    url: 'https://www.dicoding.com/learningpaths/64',
    added: 'May 2026',
  },
  {
    name: "Andrej Karpathy — 'Intro to LLMs'",
    for: 'Technical learners',
    what: "1-hour YouTube lecture that explains how LLMs actually work. Clearer than any course. Watch it once, rewatch it later.",
    cost: 'Free',
    url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g',
    added: 'May 2026',
  },
  {
    name: 'Google — Generative AI on Coursera',
    for: 'Credential-seekers',
    what: 'Google Cloud Generative AI path. Good for the brand on your CV; the content is solid but surface-level.',
    cost: 'Freemium',
    url: 'https://www.coursera.org/learn/introduction-to-generative-ai',
    added: 'May 2026',
  },
  {
    name: 'fast.ai — Practical Deep Learning',
    for: 'Developers with Python',
    what: 'Top-down, code-first approach to deep learning. For when you want to go deeper than prompt engineering.',
    cost: 'Free',
    url: 'https://course.fast.ai',
    added: 'May 2026',
  },
];

const COMMUNITIES: Resource[] = [
  {
    name: 'AI-Dima Instagram',
    for: 'Indonesia & Asia learners',
    what: 'Weekly AI career tutorials, roadmaps, and salary breakdowns. Where this playbook gets updated.',
    cost: 'Free',
    url: 'https://www.instagram.com/ai_dimaz/',
    added: 'May 2026',
  },
  {
    name: 'Hugging Face Discord',
    for: 'ML practitioners',
    what: 'Active community of AI researchers and practitioners. Good for debugging and staying current.',
    cost: 'Free',
    url: 'https://discord.com/invite/JfAtkvEtRb',
    added: 'May 2026',
  },
  {
    name: 'AI Indonesia · @ai_indonesia',
    for: 'Indonesian tech community',
    what: 'Indonesian AI community: public seminars, practitioner discussions, job postings. Based in Depok, active nationally.',
    cost: 'Free',
    url: 'https://t.me/ai_indonesia',
    added: 'May 2026',
  },
  {
    name: 'LangChain Discord',
    for: 'Developers building with LLMs',
    what: 'The most active community for RAG, agents, and LangChain-specific help.',
    cost: 'Free',
    url: 'https://discord.gg/langchain',
    added: 'May 2026',
  },
];

function costColor(cost: Resource['cost']) {
  if (cost === 'Free') return 'var(--color-mint)';
  if (cost === 'Free + cert') return 'var(--color-mint)';
  if (cost === 'Freemium') return 'var(--color-amber)';
  return 'var(--color-ink-faint)';
}

function costBg(cost: Resource['cost']) {
  if (cost === 'Free' || cost === 'Free + cert') return 'oklch(70% 0.14 160 / 0.12)';
  if (cost === 'Freemium') return 'oklch(60% 0.18 50 / 0.12)';
  return 'oklch(50% 0 0 / 0.10)';
}

export default function ResourcesPage() {
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
        <div style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 32px)', alignItems: 'center' }}>
          <span className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
            Curated · May 2026
          </span>
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
              AI-Dima · Resources
            </p>
            <h1
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '80ms',
                  fontSize: 'clamp(52px, 9vw, 140px)',
                  fontWeight: 300,
                  fontVariationSettings: '"SOFT" 50, "opsz" 144',
                  lineHeight: 0.92,
                  letterSpacing: '-0.025em',
                  margin: '24px 0 0',
                  maxWidth: '14ch',
                } as React.CSSProperties
              }
            >
              Tools, courses{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontWeight: 220,
                  color: 'var(--color-mint)',
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                }}
              >
                & communities.
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
              Opinionated. Growing. Everything here I've used or can vouch for.
              If it's on this list, it works.
            </p>
            <p
              className="marginalia"
              data-reveal
              style={{ '--stagger': '320ms', marginTop: 32, fontStyle: 'italic', maxWidth: '56ch' } as React.CSSProperties}
            >
              This list changes as the landscape changes. Last updated May 2026.
            </p>
          </div>
        </section>

        {/* ── Tools ── */}
        <ResourceSection
          eyebrow="Tools"
          title={<>Use every <em style={{ fontStyle: 'italic', color: 'var(--color-mint)' }}>day.</em></>}
          bg="var(--color-bg-base)"
          resources={TOOLS}
        />

        {/* ── Courses ── */}
        <ResourceSection
          eyebrow="Courses"
          title={<>Learn by <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>doing.</em></>}
          bg="var(--color-bg-deep)"
          resources={COURSES}
        />

        {/* ── Communities ── */}
        <ResourceSection
          eyebrow="Communities"
          title={<>Don't learn <em style={{ fontStyle: 'italic', color: 'var(--color-mint)' }}>alone.</em></>}
          bg="var(--color-bg-base)"
          resources={COMMUNITIES}
        />

        {/* ── CTA ── */}
        <section
          style={{
            padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-deep)',
            borderTop: '1px solid var(--color-line)',
          }}
        >
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal style={{ marginBottom: 24 }}>
              Missing something?
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
              If you've found a tool or course that belongs here, DM me on Instagram. I read every message and update
              the list when something genuinely earns a spot.
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
                href="/ai-dima/roadmap/"
                className="mono uppercase link-line"
                style={{ fontSize: 12, letterSpacing: '0.18em' }}
              >
                Back to the roadmap
              </a>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .resource-row:hover { border-color: var(--color-line-bright) !important; }
      `}</style>

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

/* ── ResourceSection ── */
function ResourceSection({
  eyebrow,
  title,
  bg,
  resources,
}: {
  eyebrow: string;
  title: React.ReactNode;
  bg: string;
  resources: Resource[];
}) {
  return (
    <section
      style={{
        padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
        background: bg,
        borderTop: '1px solid var(--color-line)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p className="eyebrow" data-reveal>{eyebrow}</p>
        <h2
          className="display"
          data-reveal
          style={
            {
              '--stagger': '60ms',
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 320,
              fontVariationSettings: '"SOFT" 50, "opsz" 144',
              lineHeight: 0.98,
              letterSpacing: '-0.022em',
              margin: '24px 0 0',
              maxWidth: '16ch',
            } as React.CSSProperties
          }
        >
          {title}
        </h2>
        <div
          style={{
            marginTop: 'clamp(40px, 6vh, 64px)',
            display: 'grid',
            gap: 'clamp(10px, 1.2vw, 14px)',
          }}
        >
          {resources.map((r, i) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener"
              data-reveal
              style={
                {
                  '--stagger': `${i * 60}ms`,
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: 'clamp(16px, 2vw, 28px)',
                  alignItems: 'start',
                  padding: 'clamp(20px, 2.5vw, 28px) clamp(24px, 3vw, 36px)',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-line)',
                  borderRadius: 4,
                  textDecoration: 'none',
                  transition: 'border-color 250ms',
                } as React.CSSProperties
              }
              className="resource-row"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                  <h3
                    className="display"
                    style={{
                      margin: 0,
                      fontSize: 'clamp(17px, 1.4vw, 20px)',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      color: 'var(--color-ink)',
                      lineHeight: 1.15,
                    }}
                  >
                    {r.name}
                  </h3>
                  <span className="mono" style={{ fontSize: 12, color: 'var(--color-ink-faint)', letterSpacing: '0.08em' }}>
                    · {r.for}
                  </span>
                </div>
                <p style={{ margin: '8px 0 0', fontSize: 'clamp(14px, 1vw, 15.5px)', color: 'var(--color-ink-mute)', lineHeight: 1.55 }}>
                  {r.what}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
                <span
                  className="mono uppercase"
                  style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    background: costBg(r.cost),
                    border: `1px solid ${costColor(r.cost)}`,
                    borderRadius: 999,
                    fontSize: 10,
                    letterSpacing: '0.16em',
                    color: costColor(r.cost),
                    fontWeight: 700,
                  }}
                >
                  {r.cost}
                </span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--color-ink-ghost)', letterSpacing: '0.1em' }}>
                  {r.added}
                </span>
              </div>

              <style>{`
                @media (max-width: 600px) {
                  .resource-row { grid-template-columns: 1fr !important; }
                }
              `}</style>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
