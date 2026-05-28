import type { Metadata } from 'next';
import { LangSwitcher } from '@/components/lang-switcher';

export const metadata: Metadata = {
  title: 'The 90-Day AI Roadmap for Indonesia · AI-Dima',
  description:
    'A free, week-by-week playbook to go from zero AI knowledge to your first AI-skilled job in Indonesia — built from live May 2026 unicorn job postings. By AI-Dima.',
  openGraph: {
    title: 'The 90-Day AI Roadmap for Indonesia',
    description:
      'From zero AI knowledge to your first AI-skilled job at an Indonesian unicorn — or a remote role with a foreign client. Free playbook.',
    type: 'article',
  },
  alternates: { canonical: 'https://zapleo.com/ai-dima/roadmap/' },
};

const COLOR_HERO_GLOW = `
  radial-gradient(ellipse 70% 50% at 25% 20%, oklch(60% 0.18 50 / 0.20), transparent 60%),
  radial-gradient(ellipse 50% 60% at 80% 80%, oklch(45% 0.14 30 / 0.22), transparent 65%)
`;

export default function AIRoadmapPage() {
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
        <a href="/ai-dima/" className="mono uppercase link-line" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
          ← AI-Dima
        </a>
        <div style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 32px)', alignItems: 'center' }}>
          <span className="mono uppercase ai-dima-header-label" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
            Free Playbook · v1.0
          </span>
          <LangSwitcher current="en" homeOnly />
        </div>
      </header>

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
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: COLOR_HERO_GLOW, pointerEvents: 'none' }} />

          <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
            <p className="eyebrow" data-reveal style={{ marginBottom: 28 }}>
              AI-Dima · Free Playbook · May 2026
            </p>

            <h1
              className="display"
              data-reveal
              style={
                {
                  '--stagger': '80ms',
                  fontSize: 'clamp(48px, 9vw, 144px)',
                  fontWeight: 300,
                  fontVariationSettings: '"SOFT" 50, "opsz" 144',
                  lineHeight: 0.92,
                  letterSpacing: '-0.025em',
                  margin: 0,
                  maxWidth: '14ch',
                } as React.CSSProperties
              }
            >
              The 90-day AI roadmap{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontWeight: 220,
                  color: 'var(--color-amber)',
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                }}
              >
                for Indonesia.
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
              From zero AI knowledge to your first AI-skilled job at an Indonesian unicorn — or a remote role with a foreign client.
            </p>

            {/* +25% callout */}
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
            >
              <span
                className="display"
                style={{
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  fontWeight: 240,
                  fontVariationSettings: '"SOFT" 100, "opsz" 144',
                  color: 'var(--color-amber)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                }}
              >
                +25%
              </span>
              <div>
                <p style={{ margin: 0, fontSize: 'clamp(15px, 1.1vw, 18px)', color: 'var(--color-ink)', fontWeight: 500 }}>
                  more salary for engineers with AI skills.
                </p>
                <p className="marginalia" style={{ margin: '6px 0 0' }}>
                  NodeFlair Tech Salary Report 2026 · 230,000+ verified data points, SE Asia.
                </p>
              </div>
            </div>

            {/* Inside this playbook */}
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
                Inside this playbook
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                {[
                  'The exact 90-day, 3-phase learning plan (week by week)',
                  '5 resources to start today (4 free + 1 structured)',
                  '3 portfolio projects that match real unicorn job postings',
                  'What GoTo, Shopee, Traveloka & Kredivo actually hire for',
                  'Your CV + LinkedIn headline templates',
                  'Jakarta school pathways — 6 options with direct course links',
                ].map((item) => (
                  <li key={item} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 12, alignItems: 'baseline' }}>
                    <span className="mono" style={{ color: 'var(--color-amber)', fontSize: 14 }}>
                      &gt;
                    </span>
                    <span style={{ fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--color-ink)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p
              className="marginalia"
              data-reveal
              style={{ '--stagger': '560ms', marginTop: 48, fontStyle: 'italic', maxWidth: '60ch' } as React.CSSProperties}
            >
              AI-delivered. Human-directed. Built from live May 2026 Indonesian job postings — not recycled advice.
            </p>
          </div>
        </section>

        {/* ── THE OPPORTUNITY ── */}
        <SectionBlock
          eyebrow="The opportunity"
          title={
            <>
              Why AI skills, why now,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>why Indonesia.</em>
            </>
          }
          background="var(--color-bg-base)"
        >
          <p
            data-reveal
            style={
              {
                '--stagger': '120ms',
                fontSize: 'clamp(16px, 1.15vw, 19px)',
                lineHeight: 1.6,
                color: 'var(--color-ink-mute)',
                maxWidth: '58ch',
                marginTop: 36,
              } as React.CSSProperties
            }
          >
            Indonesia's tech market split in two. A generic junior developer job is harder to get in 2026 than in 2024. But an
            AI-skilled junior job is <em style={{ color: 'var(--color-ink)' }}>easier</em> — because every major company is
            racing to ship AI and almost nobody has the skills yet.
          </p>

          <p className="eyebrow" data-reveal style={{ '--stagger': '200ms', marginTop: 64 } as React.CSSProperties}>
            What the data says · May 2026
          </p>

          <div
            style={{
              marginTop: 32,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(16px, 2vw, 24px)',
            }}
          >
            {[
              { stat: 'Up to 25% more', body: 'Engineers with AI skills out-earn peers across junior-to-senior levels. (NodeFlair 2026)' },
              { stat: '300+ open roles', body: 'AI Engineer jobs currently open in Indonesia. (Indeed Indonesia, May 2026)' },
              { stat: 'Rp 10–35 jt / mo', body: 'Typical junior prompt-engineer salary locally; more for remote / foreign clients.' },
              { stat: '70% of skills', body: 'LinkedIn projects 70% of job skills will change by 2030 — AI leads the list.' },
            ].map((card, i) => (
              <div
                key={card.stat}
                data-reveal
                style={
                  {
                    '--stagger': `${280 + i * 80}ms`,
                    padding: 'clamp(24px, 3vw, 32px)',
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-line)',
                    borderRadius: 4,
                  } as React.CSSProperties
                }
              >
                <p
                  className="display"
                  style={{
                    fontSize: 'clamp(24px, 2.4vw, 32px)',
                    fontWeight: 360,
                    color: 'var(--color-amber)',
                    margin: 0,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  {card.stat}
                </p>
                <p style={{ marginTop: 12, fontSize: 14.5, lineHeight: 1.55, color: 'var(--color-ink-mute)' }}>{card.body}</p>
              </div>
            ))}
          </div>

          <p className="eyebrow" data-reveal style={{ '--stagger': '300ms', marginTop: 80 } as React.CSSProperties}>
            The skills that actually pay
          </p>

          <p
            data-reveal
            style={
              {
                '--stagger': '360ms',
                marginTop: 24,
                fontSize: 'clamp(15px, 1.1vw, 18px)',
                lineHeight: 1.6,
                color: 'var(--color-ink-mute)',
                maxWidth: '60ch',
              } as React.CSSProperties
            }
          >
            Forget classical machine learning and 4-year math degrees. The May 2026 job postings from GoTo, Shopee, Traveloka and
            Kredivo all ask for the same modern stack:
          </p>

          <ul
            data-reveal
            style={
              {
                '--stagger': '440ms',
                marginTop: 28,
                padding: 0,
                listStyle: 'none',
                display: 'grid',
                gap: 14,
                maxWidth: 560,
              } as React.CSSProperties
            }
          >
            {['Prompt engineering', 'LLM API integration', 'RAG + vector databases', 'AI agents (LangChain / LangGraph / n8n)'].map(
              (s) => (
                <li key={s} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, alignItems: 'baseline' }}>
                  <span className="mono" style={{ color: 'var(--color-amber)', fontSize: 14 }}>
                    →
                  </span>
                  <span style={{ fontSize: 'clamp(15px, 1.15vw, 18px)', color: 'var(--color-ink)', fontWeight: 500 }}>{s}</span>
                </li>
              )
            )}
          </ul>
        </SectionBlock>

        {/* ── PHASE 1 ── */}
        <PhaseSection
          chip="Phase 1 · Days 1–30"
          title={
            <>
              Foundations &{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>AI tool fluency.</em>
            </>
          }
          goal="Goal: stop being intimidated. Stop typing every line yourself."
          background="var(--color-bg-deep)"
        >
          <PhaseBlock
            label="Days 1–3"
            heading="Set up all 5 accounts today"
            items={[
              'GitHub — your commit history IS your resume in 2026.',
              'Claude.ai (Anthropic) — your daily thinking & coding partner.',
              'ChatGPT (free) — for cross-checking answers.',
              'Hugging Face — free models + community + free hosting (Spaces).',
              'Lovable or Replit — pick ONE to ship your first app instantly.',
            ]}
          />
          <PhaseBlock
            label="Days 4–14"
            heading="Python + AI fluency in parallel"
            items={[
              "Free: Dicoding 'Belajar Dasar AI' + 'Belajar Generative AI' (Bahasa).",
              "Free: Andrej Karpathy 'Intro to Large Language Models' (YouTube, 1 hr).",
              "Free: DeepLearning.AI — 'ChatGPT Prompt Engineering for Developers'.",
              'Daily habit: ask Claude to teach 1 Python concept → run it in Replit → push to GitHub.',
            ]}
          />
          <PhaseBlock
            label="Days 15–30"
            heading="First tools + first shipped project"
            items={[
              'Install Cursor (AI IDE — kindest entry for non-coders) or Claude Code.',
              'Build your first tiny AI app using the OpenAI or Anthropic API: a calorie tracker, an ID↔EN translator, or a study-quiz bot.',
              "Deploy it publicly. It doesn't matter what it is — what matters is you SHIPPED.",
            ]}
          />

          <Checkpoint label="Day 30 checkpoint" body="One deployed AI app + daily GitHub commits + you can read Python." />
        </PhaseSection>

        {/* ── PHASE 2 ── */}
        <PhaseSection
          chip="Phase 2 · Days 31–60"
          title={
            <>
              Ship 3 <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>real</em> projects.
            </>
          }
          goal="Goal: 3 things in your GitHub a recruiter will actually open."
          background="var(--color-bg-base)"
        >
          <ProjectCard
            number="1"
            title="RAG chatbot over your own data"
            body="A chatbot that answers questions about a PDF you upload — a textbook, a product catalog, your CV."
            stack="LangChain or LlamaIndex + OpenAI/Claude API + free Pinecone or pgvector"
            jobQuote="Shopee's JD literally asks for: 'Design and develop AI-based solutions, such as RAG applications.'"
          />
          <ProjectCard
            number="2"
            title="An AI agent that does a task"
            body="An agent that scrapes 10 Indonesian job boards and emails you matching jobs daily, or summarizes ID news every morning."
            stack="LangGraph, CrewAI, or n8n (n8n is in GoTo's job posting verbatim)"
            jobQuote="GoTo's AI/ML infra JD lists: 'Tools: n8n, Langgraph/crewAI, Langchain etc.'"
          />
          <ProjectCard
            number="3"
            title="A multimodal / voice app"
            body="Indonesian voice-to-text with Whisper, or an image classifier with a Hugging Face vision model. Tie it to a real SME problem."
            stack="Whisper / Hugging Face vision models + a simple web front-end"
            jobQuote="Multimodal AI is named directly in Shopee & GoTo postings for 2026."
          />

          <Checkpoint label="Pro tip" body="Record a 60-sec demo video of each project. Post it. Proof > promises." />
        </PhaseSection>

        {/* ── PHASE 3 ── */}
        <PhaseSection
          chip="Phase 3 · Days 61–90"
          title={
            <>
              Get <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>hired.</em>
            </>
          }
          goal="Goal: turn 3 projects into your first AI-skilled offer."
          background="var(--color-bg-deep)"
        >
          <PhaseBlock
            label="Deploy"
            heading="Everything publicly"
            items={[
              'Put all 3 projects on Vercel / Replit / Hugging Face Spaces (all free tiers).',
              'Each project gets a clean README + a live link + a 60-sec demo video.',
            ]}
          />
          <PhaseBlock
            label="Rebuild"
            heading="Your LinkedIn"
            items={[
              "Headline formula: 'AI Engineer | 3 AI projects shipped | RAG + Agents | Open to work'.",
              'Post each project as a separate LinkedIn post — recruiters search by keyword.',
            ]}
          />
          <PhaseBlock
            label="Pick one"
            heading="Credential (not all)"
            items={[
              "DeepLearning.AI 'AI Engineering Specialization' (Coursera, paid) — best ROI.",
              "Google Cloud 'Generative AI' / 'ML Engineer' (Coursera).",
              'Or a structured Jakarta school — see the pathway section below.',
            ]}
          />
          <PhaseBlock
            label="Apply"
            heading="Weekly"
            items={[
              'Channels: Glints, Jobstreet, Kalibrr, lever.co/GoToGroup, Traveloka & Shopee careers.',
              "Search combos: 'Prompt Engineer Remote', 'AI Specialist Indonesia', 'LLM Engineer SEA'.",
              'Target 10 applications per week. Track replies. Iterate your CV.',
            ]}
          />

          <Checkpoint label="Day 90 goal" body="3 live projects, a keyword-optimized LinkedIn, and active applications out." />
        </PhaseSection>

        {/* ── YOUR TOOLKIT ── */}
        <SectionBlock
          eyebrow="Your toolkit"
          title={
            <>
              5 resources to <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>start.</em>
            </>
          }
          subtitle="4 free + 1 structured. Start with the free ones today."
          background="var(--color-bg-base)"
        >
          <div style={{ marginTop: 48, display: 'grid', gap: 'clamp(12px, 1.5vw, 18px)' }}>
            <ToolCard
              name="Claude.ai"
              badge="FREE"
              body="Your daily thinking & coding partner. Learn Python, debug, plan projects."
            />
            <ToolCard
              name="DeepLearning.AI"
              badge="FREE"
              body="Andrew Ng's short courses — do the LangChain & RAG ones specifically."
            />
            <ToolCard
              name="Hugging Face"
              badge="FREE"
              body="Free models, datasets, and free hosting via Spaces. The AI community hub."
            />
            <ToolCard name="Cursor" badge="FREE TIER" body="The AI-native IDE that lets a non-coder actually ship working apps." />
            <ToolCard
              name="Structured (paid)"
              badge="JAKARTA"
              badgeAccent="rust"
              body="IT STEP, Purwadhika, Dibimbing, RevoU, Dicoding, or Hacktiv8 — for fixed-schedule learning with a certificate. See the school pathways below."
            />
          </div>

          <Checkpoint
            label="Honest note"
            body="For a motivated self-learner, free Coursera + Hugging Face + GitHub can outperform a paid bootcamp. Pay for structure only if you need a fixed schedule and accountability."
          />
        </SectionBlock>

        {/* ── SCHOOL PATHWAYS ── */}
        <SectionBlock
          eyebrow="School pathways · Jakarta"
          title={
            <>
              Where to learn{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>in person.</em>
            </>
          }
          subtitle="6 verified options. Direct links to the relevant course page. No rankings — pick what fits your schedule and style."
          background="var(--color-bg-deep)"
        >
          <div style={{ marginTop: 48, display: 'grid', gap: 'clamp(16px, 2vw, 24px)' }}>

            {/* IT STEP — with disclosure */}
            <SchoolCard
              name="IT STEP Indonesia"
              badge="MY SCHOOL"
              badgeAccent="amber"
              program="Back-End Developer + AI"
              format="In-person · Jakarta · 8 months"
              url="https://itstep.id/python"
              urlLabel="itstep.id/python"
              why="The only school on this list I run. Covers Python, Django, REST APIs, LangChain integration, and OpenAI API. I'm the Branch Director — full transparency."
              disclosure="I run this branch. I include it because it's genuinely good — not as a sales pitch. Judge the curriculum, not my endorsement."
            />

            {/* Purwadhika */}
            <SchoolCard
              name="Purwadhika Digital Technology School"
              badge="BOOTCAMP"
              program="Job Connector AI Engineering"
              format="Hybrid (online + Jakarta campus) · 15 weeks"
              url="https://purwadhika.com/job-connector/ai-engineering"
              urlLabel="purwadhika.com → AI Engineering"
              why="One of Indonesia's oldest and most recognized tech schools. Strong hiring network across 1,000+ partners in Asia."
            />

            {/* Dibimbing */}
            <SchoolCard
              name="Dibimbing"
              badge="BOOTCAMP"
              program="Data Science & AI Machine Learning"
              format="Online + mentored project sprints · 24 weeks"
              url="https://dibimbing.id/layanan/bootcamp/data-science"
              urlLabel="dibimbing.id → Data Science"
              why="Covers ML, deep learning, NLP, and Generative AI. 96% alumni employment rate. Unlimited batch repeats."
            />

            {/* RevoU */}
            <SchoolCard
              name="RevoU"
              badge="BOOTCAMP"
              program="Bootcamp Data Analytics"
              format="Online · cohort-based"
              url="https://revou.co/bootcamp-data-analytics"
              urlLabel="revou.co → Data Analytics Bootcamp"
              why="Strong placement track record. AI integrated across modules. Alumni network active in GoTo, Shopee ecosystem."
            />

            {/* Dicoding */}
            <SchoolCard
              name="Dicoding"
              badge="FREE PATH"
              badgeAccent="mint"
              program="AI Engineer Learning Path"
              format="Self-paced online · Bahasa Indonesia · 6 courses"
              url="https://www.dicoding.com/learningpaths/64"
              urlLabel="dicoding.com → AI Engineer path"
              why="Fully free, in Bahasa: Python, ML basics, Deep Learning, Applied ML. Google-backed certificate. Best free local starting point."
            />

            {/* Hacktiv8 */}
            <SchoolCard
              name="Hacktiv8"
              badge="BOOTCAMP"
              program="Bootcamp Data Science & AI Machine Learning"
              format="In-person / Remote · Jakarta · 12 weeks"
              url="https://hacktiv8.com/data-science"
              urlLabel="hacktiv8.com → Data Science"
              why="Intensive pace, 87% graduate employment in 2025. Covers ML, deep learning, AI, data pipelines."
            />

          </div>

          <p
            data-reveal
            style={
              {
                '--stagger': '600ms',
                marginTop: 56,
                fontSize: 'clamp(15px, 1.1vw, 17px)',
                color: 'var(--color-ink-mute)',
                lineHeight: 1.6,
                maxWidth: '60ch',
                fontStyle: 'italic',
              } as React.CSSProperties
            }
          >
            Prices change. I don't list them. Visit each school directly and ask about scholarships — all of the above offer some
            form of financial assistance or deferred payment. What you're investing is time; that's the real variable.
          </p>
        </SectionBlock>

        {/* ── PROOF ── */}
        <SectionBlock
          eyebrow="Proof"
          title={
            <>
              What Indonesian unicorns{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>actually ask for.</em>
            </>
          }
          subtitle="Real lines from live May 2026 job postings. This is your study list."
          background="var(--color-bg-base)"
        >
          <div style={{ marginTop: 48, display: 'grid', gap: 'clamp(16px, 2vw, 24px)' }}>
            <UnicornCard
              company="GoTo (Gojek / Tokopedia)"
              role="AI/ML Infrastructure Engineer"
              quote='"Tools: n8n, Langgraph/crewAI, Langchain etc." — Python/Go automation, anomaly detection on logs & traces.'
            />
            <UnicornCard
              company="Shopee Indonesia"
              role="AI Solution Engineer"
              quote='"Understanding of prompt engineering, embeddings, RAG, or multi-agent systems. Build RAG and Multimodal AI applications."'
            />
            <UnicornCard
              company="Kredivo"
              role="Data Scientist / ML Engineer"
              quote='"Finetuning LLM using LoRA or building RAG applications using frameworks like LangChain or LlamaIndex."'
            />
            <UnicornCard
              company="Traveloka"
              role="SE — ML & Experimentation Platform"
              quote='"Developing an ML platform to streamline model training and deployment." Python/Golang, Kubernetes, GCP.'
            />
          </div>

          <p
            data-reveal
            style={
              {
                '--stagger': '500ms',
                marginTop: 56,
                fontSize: 'clamp(16px, 1.2vw, 19px)',
                color: 'var(--color-amber)',
                fontWeight: 500,
                maxWidth: '60ch',
                lineHeight: 1.55,
              } as React.CSSProperties
            }
          >
            Notice what's NOT here: no demand for a PhD, no "build a neural net from scratch". They want people who can
            BUILD WITH existing AI. That's learnable in 90 days.
          </p>
        </SectionBlock>

        {/* ── TEMPLATES ── */}
        <SectionBlock
          eyebrow="Templates"
          title={
            <>
              Your CV & LinkedIn,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>done for you.</em>
            </>
          }
          background="var(--color-bg-deep)"
        >
          <p className="eyebrow" data-reveal style={{ marginTop: 48 }}>
            LinkedIn headline · copy & adapt
          </p>

          <div data-reveal style={{ '--stagger': '120ms', marginTop: 20, display: 'grid', gap: 12 } as React.CSSProperties}>
            {[
              'AI Engineer | 3 AI projects shipped (RAG + Agents) | Open to opportunities',
              'Career-switcher → AI Engineer | Built RAG & LLM apps | Python · LangChain',
              'Prompt Engineer | Building AI tools for SEA businesses | Remote-ready',
            ].map((line) => (
              <div
                key={line}
                style={{
                  padding: '18px 22px',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-line)',
                  borderRadius: 4,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  color: 'var(--color-ink)',
                  lineHeight: 1.5,
                }}
              >
                {line}
              </div>
            ))}
          </div>

          <p className="eyebrow" data-reveal style={{ '--stagger': '200ms', marginTop: 56 } as React.CSSProperties}>
            CV project-bullet formula
          </p>

          <p
            data-reveal
            style={
              {
                '--stagger': '280ms',
                marginTop: 16,
                fontSize: 'clamp(15px, 1.1vw, 18px)',
                color: 'var(--color-ink-mute)',
                lineHeight: 1.6,
              } as React.CSSProperties
            }
          >
            [Action verb] + [what you built] + [tech] + [result]. Example:
          </p>
          <div
            data-reveal
            style={
              {
                '--stagger': '360ms',
                marginTop: 16,
                padding: '20px 24px',
                borderLeft: '3px solid var(--color-amber)',
                background: 'var(--color-bg-elevated)',
                maxWidth: '70ch',
                fontStyle: 'italic',
                color: 'var(--color-ink)',
                fontSize: 'clamp(15px, 1.1vw, 17px)',
                lineHeight: 1.55,
              } as React.CSSProperties
            }
          >
            "Built a RAG chatbot over 500-page Indonesian tax docs using LangChain + pgvector; cut lookup time from 10 min to 5
            sec."
          </div>

          <p className="eyebrow" data-reveal style={{ '--stagger': '440ms', marginTop: 56 } as React.CSSProperties}>
            The 30-second recruiter test
          </p>
          <ul
            data-reveal
            style={
              {
                '--stagger': '520ms',
                marginTop: 20,
                listStyle: 'none',
                padding: 0,
                display: 'grid',
                gap: 14,
                maxWidth: '60ch',
              } as React.CSSProperties
            }
          >
            {[
              'Does your GitHub show commits in the last 30 days?',
              'Can a recruiter click a LIVE link and use your project in 1 tap?',
              "Does your headline contain the words 'AI', 'RAG', or 'LLM'?",
              'Is there a 60-sec demo video they can watch without setup?',
            ].map((q) => (
              <li key={q} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, alignItems: 'baseline' }}>
                <span
                  className="mono"
                  style={{ color: 'var(--color-amber)', fontSize: 14, fontWeight: 600 }}
                  aria-hidden
                >
                  [ ]
                </span>
                <span style={{ fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--color-ink)', lineHeight: 1.5 }}>{q}</span>
              </li>
            ))}
          </ul>
        </SectionBlock>

        {/* ── AT A GLANCE ── */}
        <SectionBlock
          eyebrow="At a glance"
          title={
            <>
              Your 90 days,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>on one page.</em>
            </>
          }
          subtitle="Screenshot this."
          background="var(--color-bg-base)"
        >
          <ol style={{ marginTop: 48, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {[
              { week: 'Week 1', body: 'Set up 5 accounts. First Claude + Python session.', phase: 1 },
              { week: 'Week 2–3', body: 'Prompt engineering + LangChain free courses.', phase: 1 },
              { week: 'Week 4', body: 'Ship your first tiny AI app. Deploy it.', phase: 1 },
              { week: 'Week 5–6', body: 'Project 1: RAG chatbot over your own PDF.', phase: 2 },
              { week: 'Week 7', body: 'Project 2: an AI agent that does a real task.', phase: 2 },
              { week: 'Week 8', body: 'Project 3: multimodal / voice app.', phase: 2 },
              { week: 'Week 9–10', body: 'Deploy all 3 + record demo videos.', phase: 3 },
              { week: 'Week 11', body: 'Rebuild LinkedIn + CV. Pick 1 credential.', phase: 3 },
              { week: 'Week 12–13', body: 'Apply 10×/week. Track. Iterate. Interview.', phase: 3 },
            ].map((row, i) => {
              const phaseColor =
                row.phase === 1
                  ? 'var(--color-mint)'
                  : row.phase === 2
                    ? 'var(--color-amber)'
                    : 'var(--color-amber-deep)';
              return (
                <li
                  key={row.week}
                  data-reveal
                  style={
                    {
                      '--stagger': `${i * 50}ms`,
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      gap: 'clamp(16px, 2vw, 28px)',
                      alignItems: 'center',
                      padding: '18px 22px',
                      background: 'var(--color-bg-elevated)',
                      borderRadius: 4,
                      borderLeft: `3px solid ${phaseColor}`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className="mono uppercase"
                    style={{ fontSize: 12, letterSpacing: '0.16em', color: phaseColor, fontWeight: 600 }}
                  >
                    {row.week}
                  </span>
                  <span style={{ fontSize: 'clamp(14px, 1.05vw, 16px)', color: 'var(--color-ink)', lineHeight: 1.5 }}>
                    {row.body}
                  </span>
                </li>
              );
            })}
          </ol>
        </SectionBlock>

        {/* ── FINAL CTA ── */}
        <section
          style={{
            position: 'relative',
            padding: 'clamp(96px, 16vh, 180px) clamp(24px, 6vw, 96px)',
            background: 'var(--color-bg-deep)',
            borderTop: '1px solid var(--color-line)',
            overflow: 'hidden',
          }}
        >
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: COLOR_HERO_GLOW, opacity: 0.6, pointerEvents: 'none' }} />

          <div style={{ position: 'relative', maxWidth: 920, margin: '0 auto' }}>
            <h2
              className="display"
              data-reveal
              style={
                {
                  fontSize: 'clamp(40px, 7vw, 96px)',
                  fontWeight: 300,
                  fontVariationSettings: '"SOFT" 50, "opsz" 144',
                  lineHeight: 0.96,
                  letterSpacing: '-0.025em',
                  margin: 0,
                  maxWidth: '14ch',
                } as React.CSSProperties
              }
            >
              You have the map.{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontWeight: 220,
                  color: 'var(--color-amber)',
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "WONK" 1',
                }}
              >
                Now walk it.
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
              This roadmap works only if you start <em style={{ color: 'var(--color-ink)' }}>today</em>. Not Monday. Not next
              month. Open Claude.ai, create your GitHub, and ship one tiny thing this week. Then do it again. In 90 days you will
              not recognize your own skill level.
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
                  maxWidth: 720,
                } as React.CSSProperties
              }
            >
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                Want more?
              </p>
              <p style={{ margin: 0, fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--color-ink)', lineHeight: 1.55 }}>
                I post a new AI career playbook every week. Daily tutorials, salary breakdowns, and roadmaps for Indonesia &
                Asia — all in English.
              </p>
              <div
                style={{
                  marginTop: 28,
                  display: 'flex',
                  gap: 'clamp(16px, 2.5vw, 32px)',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
              >
                <a
                  href="https://www.instagram.com/ai_dimaz/"
                  target="_blank"
                  rel="noopener"
                  className="mono uppercase link-line"
                  style={{ fontSize: 13, letterSpacing: '0.18em', color: 'var(--color-amber)' }}
                >
                  Follow @ai_dimaz →
                </a>
                <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
                <a
                  href="mailto:dima@zapleo.com"
                  className="mono uppercase link-line"
                  style={{ fontSize: 13, letterSpacing: '0.18em' }}
                >
                  dima@zapleo.com
                </a>
                <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>·</span>
                <a
                  href="https://t.me/zapleosoft"
                  target="_blank"
                  rel="noopener"
                  className="mono uppercase link-line"
                  style={{ fontSize: 13, letterSpacing: '0.18em' }}
                >
                  Telegram
                </a>
              </div>
            </div>

            <p
              data-reveal
              style={
                {
                  '--stagger': '420ms',
                  marginTop: 48,
                  fontSize: 'clamp(15px, 1.1vw, 17px)',
                  color: 'var(--color-ink-mute)',
                  lineHeight: 1.55,
                  maxWidth: '54ch',
                } as React.CSSProperties
              }
            >
              <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>Stuck on a step?</strong> DM me on Instagram with
              your specific question. I read every message. The whole point of this account is that one mentor can reach you —
              wherever you are in Asia.
            </p>

            <p className="marginalia" data-reveal style={{ '--stagger': '500ms', marginTop: 56, fontStyle: 'italic', maxWidth: '70ch' } as React.CSSProperties}>
              AI-delivered. Human-directed. Built from live May 2026 Indonesian job postings. Salary figures: NodeFlair Tech
              Salary Report 2026. Not financial or career advice — your results depend on your effort.
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

      <style>{`
        @media (max-width: 640px) {
          .ai-dima-header-label { display: none; }
        }
      `}</style>
    </>
  );
}

/* ── Building blocks ── */

function SectionBlock({
  eyebrow,
  title,
  subtitle,
  background,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  background: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        padding: 'clamp(80px, 14vh, 160px) clamp(24px, 6vw, 96px)',
        background,
        borderTop: '1px solid var(--color-line)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h2
          className="display"
          data-reveal
          style={
            {
              '--stagger': '60ms',
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: 320,
              fontVariationSettings: '"SOFT" 50, "opsz" 144',
              lineHeight: 0.98,
              letterSpacing: '-0.022em',
              margin: '24px 0 0',
              maxWidth: '18ch',
            } as React.CSSProperties
          }
        >
          {title}
        </h2>
        {subtitle && (
          <p
            data-reveal
            style={
              {
                '--stagger': '160ms',
                marginTop: 24,
                fontSize: 'clamp(15px, 1.1vw, 18px)',
                color: 'var(--color-ink-mute)',
                fontStyle: 'italic',
                maxWidth: '60ch',
                lineHeight: 1.55,
              } as React.CSSProperties
            }
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

function PhaseSection({
  chip,
  title,
  goal,
  background,
  children,
}: {
  chip: string;
  title: React.ReactNode;
  goal: string;
  background: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        padding: 'clamp(80px, 14vh, 160px) clamp(24px, 6vw, 96px)',
        background,
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
            background: 'oklch(60% 0.18 50 / 0.12)',
            border: '1px solid var(--color-amber-deep)',
            borderRadius: 999,
            fontSize: 11,
            letterSpacing: '0.22em',
            color: 'var(--color-amber)',
            fontWeight: 600,
          }}
        >
          {chip}
        </span>
        <h2
          className="display"
          data-reveal
          style={
            {
              '--stagger': '80ms',
              fontSize: 'clamp(40px, 7vw, 96px)',
              fontWeight: 320,
              fontVariationSettings: '"SOFT" 50, "opsz" 144',
              lineHeight: 0.96,
              letterSpacing: '-0.025em',
              margin: '28px 0 0',
              maxWidth: '14ch',
            } as React.CSSProperties
          }
        >
          {title}
        </h2>
        <p
          data-reveal
          style={
            {
              '--stagger': '180ms',
              marginTop: 24,
              fontSize: 'clamp(15px, 1.1vw, 18px)',
              color: 'var(--color-ink-mute)',
              fontStyle: 'italic',
              maxWidth: '60ch',
              lineHeight: 1.55,
            } as React.CSSProperties
          }
        >
          {goal}
        </p>
        <div style={{ marginTop: 'clamp(48px, 7vh, 80px)', display: 'grid', gap: 'clamp(28px, 4vh, 48px)' }}>{children}</div>
      </div>
    </section>
  );
}

function PhaseBlock({ label, heading, items }: { label: string; heading: string; items: string[] }) {
  return (
    <div
      data-reveal
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 160px) 1fr',
        gap: 'clamp(20px, 3vw, 48px)',
      }}
      className="phase-block"
    >
      <div>
        <span
          className="mono uppercase"
          style={{ fontSize: 12, letterSpacing: '0.22em', color: 'var(--color-amber)', fontWeight: 600 }}
        >
          {label}
        </span>
      </div>
      <div>
        <h3
          className="display"
          style={{
            margin: 0,
            fontSize: 'clamp(22px, 2.4vw, 32px)',
            fontWeight: 440,
            letterSpacing: '-0.015em',
            color: 'var(--color-ink)',
            lineHeight: 1.15,
          }}
        >
          {heading}
        </h3>
        <ul style={{ marginTop: 16, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
          {items.map((item) => (
            <li
              key={item}
              style={{
                display: 'grid',
                gridTemplateColumns: '14px 1fr',
                gap: 12,
                alignItems: 'baseline',
                fontSize: 'clamp(14.5px, 1.05vw, 16.5px)',
                color: 'var(--color-ink-mute)',
                lineHeight: 1.55,
              }}
            >
              <span aria-hidden style={{ color: 'var(--color-ink-faint)' }}>
                ·
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .phase-block { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
}

function Checkpoint({ label, body }: { label: string; body: string }) {
  return (
    <div
      data-reveal
      style={
        {
          '--stagger': '120ms',
          marginTop: 'clamp(48px, 7vh, 80px)',
          padding: 'clamp(24px, 3vw, 36px) clamp(28px, 4vw, 44px)',
          background: 'oklch(60% 0.18 50 / 0.08)',
          border: '1px solid var(--color-amber-deep)',
          borderRadius: 4,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 200px) 1fr',
          gap: 'clamp(16px, 2.5vw, 36px)',
          alignItems: 'baseline',
        } as React.CSSProperties
      }
      className="checkpoint"
    >
      <span
        className="mono uppercase"
        style={{ fontSize: 12, letterSpacing: '0.22em', color: 'var(--color-amber)', fontWeight: 700 }}
      >
        {label}
      </span>
      <span style={{ fontSize: 'clamp(15px, 1.15vw, 18px)', color: 'var(--color-ink)', lineHeight: 1.55 }}>{body}</span>

      <style>{`
        @media (max-width: 700px) {
          .checkpoint { grid-template-columns: 1fr !important; gap: 10px !important; }
        }
      `}</style>
    </div>
  );
}

function ProjectCard({
  number,
  title,
  body,
  stack,
  jobQuote,
}: {
  number: string;
  title: string;
  body: string;
  stack: string;
  jobQuote: string;
}) {
  return (
    <div
      data-reveal
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 96px) 1fr',
        gap: 'clamp(16px, 3vw, 40px)',
        padding: 'clamp(28px, 4vw, 40px)',
        background: 'var(--color-bg-elevated)',
        border: '1px solid var(--color-line)',
        borderRadius: 4,
      }}
      className="project-card"
    >
      <span
        className="display"
        style={{
          fontSize: 'clamp(48px, 6vw, 80px)',
          fontWeight: 240,
          fontVariationSettings: '"SOFT" 100, "opsz" 144',
          color: 'var(--color-amber)',
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
        }}
      >
        {number}
      </span>
      <div>
        <h3
          className="display"
          style={{
            margin: 0,
            fontSize: 'clamp(22px, 2.4vw, 32px)',
            fontWeight: 460,
            letterSpacing: '-0.015em',
            color: 'var(--color-ink)',
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>
        <p style={{ marginTop: 14, fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--color-ink-mute)', lineHeight: 1.55 }}>
          {body}
        </p>
        <p style={{ marginTop: 16, fontSize: 14, color: 'var(--color-ink)' }}>
          <span className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--color-amber)', marginRight: 10 }}>
            Stack:
          </span>
          <span style={{ color: 'var(--color-ink-mute)' }}>{stack}</span>
        </p>
        <p
          style={{
            marginTop: 14,
            fontStyle: 'italic',
            fontSize: 14,
            color: 'var(--color-mint)',
            lineHeight: 1.5,
            opacity: 0.85,
          }}
        >
          {jobQuote}
        </p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .project-card { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
}

function ToolCard({
  name,
  badge,
  body,
  badgeAccent,
}: {
  name: string;
  badge: string;
  body: string;
  badgeAccent?: 'rust';
}) {
  const badgeColor = badgeAccent === 'rust' ? 'var(--color-rust)' : 'var(--color-amber)';
  const badgeBg =
    badgeAccent === 'rust' ? 'oklch(55% 0.18 35 / 0.15)' : 'oklch(60% 0.18 50 / 0.14)';
  return (
    <div
      data-reveal
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 240px) 1fr',
        gap: 'clamp(20px, 3vw, 48px)',
        padding: 'clamp(24px, 3vw, 32px)',
        background: 'var(--color-bg-elevated)',
        border: '1px solid var(--color-line)',
        borderRadius: 4,
        alignItems: 'center',
      }}
      className="tool-card"
    >
      <div>
        <h3
          className="display"
          style={{
            margin: 0,
            fontSize: 'clamp(20px, 1.8vw, 26px)',
            fontWeight: 480,
            letterSpacing: '-0.012em',
            color: 'var(--color-ink)',
            lineHeight: 1.1,
          }}
        >
          {name}
        </h3>
        <span
          className="mono uppercase"
          style={{
            display: 'inline-block',
            marginTop: 10,
            padding: '4px 12px',
            background: badgeBg,
            border: `1px solid ${badgeColor}`,
            borderRadius: 999,
            fontSize: 10,
            letterSpacing: '0.18em',
            color: badgeColor,
            fontWeight: 700,
          }}
        >
          {badge}
        </span>
      </div>
      <p style={{ margin: 0, fontSize: 'clamp(14.5px, 1.05vw, 16.5px)', color: 'var(--color-ink-mute)', lineHeight: 1.55 }}>
        {body}
      </p>

      <style>{`
        @media (max-width: 700px) {
          .tool-card { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
      `}</style>
    </div>
  );
}

function SchoolCard({
  name,
  badge,
  badgeAccent,
  program,
  format,
  url,
  urlLabel,
  why,
  disclosure,
}: {
  name: string;
  badge: string;
  badgeAccent?: 'amber' | 'mint';
  program: string;
  format: string;
  url: string;
  urlLabel: string;
  why: string;
  disclosure?: string;
}) {
  const badgeColor =
    badgeAccent === 'amber'
      ? 'var(--color-amber)'
      : badgeAccent === 'mint'
        ? 'var(--color-mint)'
        : 'var(--color-ink-faint)';
  const badgeBg =
    badgeAccent === 'amber'
      ? 'oklch(60% 0.18 50 / 0.14)'
      : badgeAccent === 'mint'
        ? 'oklch(70% 0.14 160 / 0.12)'
        : 'oklch(50% 0 0 / 0.10)';

  return (
    <div
      data-reveal
      style={{
        padding: 'clamp(24px, 3.5vw, 36px) clamp(28px, 4vw, 44px)',
        background: 'var(--color-bg-elevated)',
        border: `1px solid ${badgeAccent === 'amber' ? 'var(--color-line-bright)' : 'var(--color-line)'}`,
        borderRadius: 4,
      }}
      className="school-card"
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
        <h3
          className="display"
          style={{
            margin: 0,
            fontSize: 'clamp(20px, 1.8vw, 24px)',
            fontWeight: 500,
            letterSpacing: '-0.012em',
            color: 'var(--color-ink)',
            lineHeight: 1.15,
            flex: '1 1 auto',
          }}
        >
          {name}
        </h3>
        <span
          className="mono uppercase"
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            background: badgeBg,
            border: `1px solid ${badgeColor}`,
            borderRadius: 999,
            fontSize: 10,
            letterSpacing: '0.18em',
            color: badgeColor,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {badge}
        </span>
      </div>

      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px 24px' }}>
        <div>
          <span className="mono uppercase" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-ink-faint)' }}>Program</span>
          <p style={{ margin: '4px 0 0', fontSize: 14.5, color: 'var(--color-ink)', lineHeight: 1.4 }}>{program}</p>
        </div>
        <div>
          <span className="mono uppercase" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-ink-faint)' }}>Format</span>
          <p style={{ margin: '4px 0 0', fontSize: 14.5, color: 'var(--color-ink-mute)', lineHeight: 1.4 }}>{format}</p>
        </div>
        <div>
          <span className="mono uppercase" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-ink-faint)' }}>Link</span>
          <p style={{ margin: '4px 0 0' }}>
            <a
              href={url}
              target="_blank"
              rel="noopener"
              className="link-line mono"
              style={{ fontSize: 13, color: badgeAccent === 'amber' ? 'var(--color-amber)' : 'var(--color-ink-mute)', letterSpacing: '0.04em' }}
            >
              {urlLabel} →
            </a>
          </p>
        </div>
      </div>

      <p style={{ marginTop: 20, fontSize: 'clamp(14.5px, 1.05vw, 16px)', color: 'var(--color-ink-mute)', lineHeight: 1.55 }}>
        {why}
      </p>

      {disclosure && (
        <p
          className="marginalia"
          style={{
            marginTop: 12,
            fontStyle: 'italic',
            color: 'var(--color-amber)',
            opacity: 0.8,
            borderLeft: '2px solid var(--color-amber-deep)',
            paddingLeft: 14,
          }}
        >
          {disclosure}
        </p>
      )}

      <style>{`
        @media (max-width: 600px) {
          .school-card .school-meta { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function UnicornCard({ company, role, quote }: { company: string; role: string; quote: string }) {
  return (
    <div
      data-reveal
      style={{
        padding: 'clamp(28px, 3.5vw, 40px)',
        background: 'var(--color-bg-elevated)',
        border: '1px solid var(--color-line)',
        borderRadius: 4,
      }}
    >
      <h3
        className="display"
        style={{
          margin: 0,
          fontSize: 'clamp(20px, 2vw, 26px)',
          fontWeight: 520,
          letterSpacing: '-0.012em',
          color: 'var(--color-amber)',
          lineHeight: 1.1,
        }}
      >
        {company}
      </h3>
      <p
        className="mono uppercase"
        style={{ marginTop: 8, fontSize: 11, letterSpacing: '0.16em', color: 'var(--color-ink-faint)' }}
      >
        {role}
      </p>
      <p
        style={{
          marginTop: 18,
          fontSize: 'clamp(15px, 1.15vw, 17.5px)',
          color: 'var(--color-ink)',
          lineHeight: 1.6,
        }}
      >
        {quote}
      </p>
    </div>
  );
}
