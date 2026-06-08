import type { Metadata } from 'next';
import { AIDimaLayout, AIDimaHeaderLabel } from '@/components/ai-dima-layout';
import { ResourceGrid } from './resource-grid';
import type { Resource } from './resource-grid';

export const metadata: Metadata = {
  title: 'Resources · Tools, Courses & Communities · AI-Dima',
  description:
    'A growing, opinionated list of tools, courses, and communities for AI career learning in Southeast Asia — curated by AI-Dima.',
  openGraph: {
    title: 'AI-Dima Resources · Tools, courses & communities',
    description:
      'Free tools, structured bootcamps, and communities worth your time. Updated as the landscape changes.',
    type: 'website',
  },
  alternates: { canonical: 'https://zapleo.com/ai-dima/resources/' },
};

const GLOW = `
  radial-gradient(ellipse 60% 50% at 15% 30%, oklch(55% 0.16 160 / 0.12), transparent 60%),
  radial-gradient(ellipse 50% 55% at 85% 70%, oklch(60% 0.18 50 / 0.14), transparent 65%)
`;

/* ── All resources in one typed array ─────────────────────────────────────── */
const ALL_RESOURCES: Resource[] = [
  // Tools
  {
    name: 'Claude.ai',
    for: 'Everyone',
    audiences: ['all'],
    topics: ['AI', 'Tools'],
    cost: 'Freemium',
    what: 'Your best AI thinking partner for writing, coding, research, and planning. Start here.',
    url: 'https://claude.ai',
    added: 'May 2026',
  },
  {
    name: 'Cursor',
    for: 'Builders',
    audiences: ['students', 'switchers'],
    topics: ['Tools', 'Code'],
    cost: 'Freemium',
    what: 'AI-native IDE. Type what you want, get working code. Best entry point for non-coders wanting to ship apps.',
    url: 'https://cursor.com',
    added: 'May 2026',
  },
  {
    name: 'NotebookLM',
    for: 'Teens · Students',
    audiences: ['teens', 'students'],
    topics: ['Tools', 'AI'],
    cost: 'Free',
    what: "Google's AI research notebook. Upload any document — textbook, paper, course notes — and get a personalized tutor that knows the material cold.",
    url: 'https://notebooklm.google',
    added: 'May 2026',
  },
  {
    name: 'Replit',
    for: 'Beginners',
    audiences: ['students'],
    topics: ['Tools', 'Code'],
    cost: 'Freemium',
    what: 'Browser-based IDE with AI built in. Deploy your first app without installing anything.',
    url: 'https://replit.com',
    added: 'May 2026',
  },
  {
    name: 'n8n',
    for: 'Automation builders',
    audiences: ['switchers'],
    topics: ['Tools', 'AI'],
    cost: 'Free',
    what: 'Visual workflow automation. Open-source, self-hostable. Named verbatim in GoTo job postings for 2026.',
    url: 'https://n8n.io',
    added: 'May 2026',
  },
  {
    name: 'Hugging Face',
    for: 'ML practitioners',
    audiences: ['students', 'switchers'],
    topics: ['AI', 'Code'],
    cost: 'Free',
    what: 'The AI community hub. Free models, datasets, and hosting via Spaces. Non-negotiable bookmark.',
    url: 'https://huggingface.co',
    added: 'May 2026',
  },
  {
    name: 'LangChain',
    for: 'Developers',
    audiences: ['students', 'switchers'],
    topics: ['AI', 'Code'],
    cost: 'Free',
    what: 'The standard framework for RAG and agent applications. Required knowledge for any LLM engineering role.',
    url: 'https://www.langchain.com',
    added: 'May 2026',
  },
  // Kids tools
  {
    name: 'Scratch (MIT)',
    for: 'Kids 7-12 · Parents',
    audiences: ['parents', 'teens'],
    topics: ['Code'],
    cost: 'Free',
    what: "MIT's free visual programming for ages 7+. No syntax, pure logic. The best first language that isn't a language.",
    url: 'https://scratch.mit.edu',
    added: 'May 2026',
  },
  {
    name: 'Khan Academy + Khanmigo',
    for: 'Parents · Teens · Students',
    audiences: ['parents', 'teens', 'students'],
    topics: ['AI', 'Career'],
    cost: 'Free',
    what: "Free K-12 education + AI tutor. Teaches kids HOW to ask questions, not just what to answer. The AI literacy skill that compounds.",
    url: 'https://www.khanacademy.org',
    added: 'May 2026',
  },
  // Courses
  {
    name: 'DeepLearning.AI — Short Courses',
    for: 'All levels',
    audiences: ['students', 'switchers'],
    topics: ['AI', 'Career'],
    cost: 'Free',
    what: "Andrew Ng's free short courses. Do 'ChatGPT Prompt Engineering' and 'LangChain for LLM App Dev' first.",
    url: 'https://www.deeplearning.ai/short-courses/',
    added: 'May 2026',
  },
  {
    name: 'Dicoding — AI Engineer Path',
    for: 'Indonesian learners',
    audiences: ['all'],
    topics: ['AI', 'Code', 'Career'],
    cost: 'Free + cert',
    what: '6-course path in Bahasa Indonesia: Python, ML basics, Deep Learning, Applied ML. Google-backed certificate.',
    url: 'https://www.dicoding.com/learningpaths/64',
    added: 'May 2026',
  },
  {
    name: "Andrej Karpathy — 'Intro to LLMs'",
    for: 'Technical learners',
    audiences: ['students', 'switchers'],
    topics: ['AI'],
    cost: 'Free',
    what: '1-hour YouTube lecture that explains how LLMs actually work. Clearer than any course. Watch once, rewatch later.',
    url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g',
    added: 'May 2026',
  },
  {
    name: 'Google — Generative AI on Coursera',
    for: 'Credential-seekers',
    audiences: ['students', 'switchers'],
    topics: ['AI', 'Career'],
    cost: 'Freemium',
    what: 'Google Cloud Generative AI path. Good for the brand on your CV; surface-level but solid intro.',
    url: 'https://www.coursera.org/learn/introduction-to-generative-ai',
    added: 'May 2026',
  },
  {
    name: 'fast.ai — Practical Deep Learning',
    for: 'Developers with Python',
    audiences: ['students', 'switchers'],
    topics: ['AI', 'Code'],
    cost: 'Free',
    what: 'Top-down, code-first deep learning. For when you want to go deeper than prompt engineering.',
    url: 'https://course.fast.ai',
    added: 'May 2026',
  },
  // Communities
  {
    name: 'AI-Dima Instagram',
    for: 'Indonesia & Asia learners',
    audiences: ['all'],
    topics: ['AI', 'Career'],
    cost: 'Free',
    what: 'Weekly AI career tutorials, roadmaps, and salary breakdowns. Where this playbook gets updated.',
    url: 'https://www.instagram.com/ai_dimaz/',
    added: 'May 2026',
  },
  {
    name: 'Hugging Face Discord',
    for: 'ML practitioners',
    audiences: ['students', 'switchers'],
    topics: ['AI', 'Code'],
    cost: 'Free',
    what: 'Active community of AI researchers and practitioners. Good for debugging and staying current.',
    url: 'https://discord.com/invite/JfAtkvEtRb',
    added: 'May 2026',
  },
  {
    name: 'AI Indonesia · @ai_indonesia',
    for: 'Indonesian tech community',
    audiences: ['all'],
    topics: ['AI', 'Career'],
    cost: 'Free',
    what: 'Indonesian AI community: public seminars, practitioner discussions, job postings. Based in Depok, active nationally.',
    url: 'https://t.me/ai_indonesia',
    added: 'May 2026',
  },
  {
    name: 'LangChain Discord',
    for: 'LLM developers',
    audiences: ['students', 'switchers'],
    topics: ['AI', 'Code'],
    cost: 'Free',
    what: 'The most active community for RAG, agents, and LangChain-specific help.',
    url: 'https://discord.gg/langchain',
    added: 'May 2026',
  },
  // Bootcamps
  {
    name: 'Apple Developer Academy @ BINUS',
    for: 'Students 18+ · Teens',
    audiences: ['teens', 'students'],
    topics: ['Code', 'Career', 'Bootcamps'],
    cost: 'Scholarship',
    what: 'Full scholarship + MacBook + iPhone. 1-year intensive at BINUS Jakarta. Covers iOS development, design thinking, and entrepreneurship. The best free path in Indonesia.',
    url: 'https://applydeveloperacademy.binus.ac.id',
    added: 'May 2026',
  },
  {
    name: 'IT STEP Academy Jakarta',
    for: 'Kids · Parents · Students',
    audiences: ['parents', 'teens', 'students'],
    topics: ['Code', 'Bootcamps'],
    cost: 'Paid',
    what: 'In-person coding education for ages 6-18 in Jakarta. Python with Minecraft, game development, web front-end.',
    url: 'https://itstep.id',
    added: 'May 2026',
    disclosure: 'I run this branch. Full disclosure — I include it because the curriculum is good, not as a sales pitch.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://zapleo.com/ai-dima/resources/#article',
  headline: 'AI-Dima Resources · Tools, Courses & Communities',
  description:
    'A growing, opinionated list of tools, courses, and communities for AI career learning in Southeast Asia.',
  url: 'https://zapleo.com/ai-dima/resources/',
  inLanguage: 'en',
  author: { '@id': 'https://zapleo.com/#person' },
  publisher: { '@id': 'https://zapleo.com/#person' },
  datePublished: '2026-05-29',
};

export default function ResourcesPage() {
  return (
    <AIDimaLayout
      headerLabel={
        <AIDimaHeaderLabel>Curated · May 2026</AIDimaHeaderLabel>
      }
    >
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
              Opinionated. Growing. {ALL_RESOURCES.length} resources — everything here I've used or can vouch for.
            </p>
            <p
              className="marginalia"
              data-reveal
              style={
                {
                  '--stagger': '320ms',
                  marginTop: 32,
                  fontStyle: 'italic',
                  maxWidth: '56ch',
                } as React.CSSProperties
              }
            >
              This list changes as the landscape changes. Last updated May 2026.
              Filter by audience, topic, or cost below.
            </p>
          </div>
        </section>

        {/* ── Filterable grid (client component) ── */}
        <ResourceGrid resources={ALL_RESOURCES} />

        {/* ── Missing something CTA ── */}
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
              If you've found a tool or course that belongs here, DM me on Instagram. I read every message
              and update the list when something genuinely earns a spot.
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
    </AIDimaLayout>
  );
}
