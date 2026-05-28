import { notFound } from 'next/navigation';
import { PageShell } from '@/components/page-shell';

// MVP catalog — full MDX pipeline lands in a later iteration.
const CASES: Record<string, CaseStudy> = {
  pasijou: {
    name: 'Pasijou',
    tagline: 'Coworking, kitchen, cinema. One room.',
    year: '2022 — present',
    place: 'Weligama, Sri Lanka',
    role: 'Founder, operator',
    team: '8 (local kitchen + ops + community)',
    stack: ['Hospitality ops', 'Community programming', 'Tripadvisor 4.9', 'IG @pasijou'],
    brief:
      'After the agency closed in early 2022, the first project on the south coast was not a startup. It was a building — with a kitchen, twelve coworking seats, a small cinema room, and a yoga deck. Pasijou opened in Weligama as a place where digital nomads could work, eat, and have actual human evenings on the same plot of land.',
    sections: [
      {
        title: 'Why a clubhouse instead of a SaaS',
        body:
          'The brief I gave myself was selfish: build the place I wanted to spend my own months in. A coworking with a real kitchen. Ukrainian comfort food, fast Wi-Fi, lunch you do not have to leave for, and a community calendar that runs music nights and movie evenings without becoming a hostel.',
        note: 'Coworking-only is fragile in a town with monsoons; a kitchen makes you indispensable.',
      },
      {
        title: 'What an engineer learns running F&B',
        body:
          'Inventory is a database with worse error messages. Staff scheduling is a constraint solver. Menu engineering is product. The first six months we lost money on a beef burger we kept on the menu because guests asked for it; once we replaced it with a curry-of-the-week, margin went from -8% to +21%. Same code-review discipline, different vocabulary.',
        note: 'F&B taught me cost control faster than 12 years of agency P&L.',
      },
      {
        title: 'Outcome and what stayed',
        body:
          'Three years in. Tripadvisor 4.9 on a hundred-plus reviews. Uber Eats Sri Lanka live. A small loyal regulars list that knows the staff by name. The cinema room runs at 30% utilisation and that is fine — it pays for itself in retention, not ticket sales.',
        note: 'The clubhouse model works in towns where nomad density is high but venue density is low.',
      },
    ],
    links: [
      { label: 'Pasijou on Instagram', href: 'https://www.instagram.com/pasijou/' },
      { label: 'Tripadvisor reviews', href: 'https://www.tripadvisor.com/Restaurant_Review-g612380-d24111150-Reviews-Pasijou_Coworking_And_Food-Weligama_Matara_Southern_Province.html' },
      { label: 'Uber Eats LK', href: 'https://www.ubereats.com/lk/store/pasijou-restaurant-coworking-cinema-yoga-space-for-anything-weligama/3otPqT1CV2iYMCDEpmuYxg' },
    ],
    accent: 'oklch(78% 0.14 165)',
  },
  apcu: {
    name: 'apcu.ua',
    tagline: 'Industry portal that still iterates after eight years.',
    year: '2018 — present',
    place: 'Ukraine · live',
    role: 'Tech lead at Zapleo',
    team: '3 (PM + dev + design)',
    stack: ['WordPress (custom theme)', 'PHP', 'Regulatory CMS', 'Member directory'],
    brief:
      'Official portal for the Ukrainian Cosmetics & Perfumery Association — APCU. Members are manufacturers, importers, distributors. The portal had to handle three audiences without three sites: industry news, regulatory updates, and a public-facing membership directory.',
    sections: [
      {
        title: 'Why custom WordPress in 2018',
        body:
          'The first instinct was to skip WordPress and build it on Symfony. Wrong instinct. The non-technical editorial team is a single person, working evenings. WordPress with a tight custom theme means she ships on her schedule, not ours. Eight years later, the editorial cadence still works without a developer in the loop.',
        note: 'Choose stack by maintenance reality, not engineer preference.',
      },
      {
        title: 'The regulatory bit',
        body:
          'EU cosmetic regulations change quarterly. The portal tracks notification labelling, INCI updates, ingredient bans, and the Ukrainian equivalents. Originally a flat CMS; we added a structured "regulation" content type with sort-by-effective-date and a per-document changelog. Boring. Critical.',
        note: 'Boring features keep users from leaving for Telegram channels.',
      },
      {
        title: 'Outcome',
        body:
          'Live since 2018. Still on the same custom theme. Multiple ownership transitions on the association side — the portal kept publishing through all of them. The strongest signal an agency build worked is that it still works after the agency closed.',
      },
    ],
    links: [
      { label: 'Visit apcu.ua', href: 'https://apcu.ua/' },
    ],
    accent: 'oklch(82% 0.18 70)',
  },
};

type CaseStudy = {
  name: string;
  tagline: string;
  year: string;
  place: string;
  role: string;
  team: string;
  stack: string[];
  brief: string;
  sections: { title: string; body: string; note?: string }[];
  links: { label: string; href: string }[];
  accent: string;
};

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return { title: 'Not found' };
  return {
    title: `${c.name}`,
    description: c.tagline,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();

  return (
    <PageShell
      eyebrow={`Chapter 02 · Case · ${c.year}`}
      title={
        <>
          {c.name}.{' '}
          <em style={{ fontStyle: 'italic', color: c.accent }}>{c.tagline}</em>
        </>
      }
      chapter="CASE"
    >
      <div style={{ padding: 'clamp(48px, 8vh, 96px) clamp(24px, 6vw, 96px)', maxWidth: 1080, margin: '0 auto' }}>
        {/* stats bar */}
        <dl
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 'clamp(16px, 2vw, 32px)',
            padding: '24px 0',
            borderTop: '1px solid var(--color-line)',
            borderBottom: '1px solid var(--color-line)',
            marginBottom: 'clamp(56px, 8vh, 88px)',
            margin: 0,
          }}
        >
          {[
            ['Place', c.place],
            ['Role', c.role],
            ['Team', c.team],
            ['Stack', c.stack.slice(0, 2).join(' · ')],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="mono uppercase" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
                {k}
              </dt>
              <dd className="mono" style={{ marginTop: 8, fontSize: 13, color: 'var(--color-ink)', letterSpacing: '0.02em' }}>
                {v}
              </dd>
            </div>
          ))}
        </dl>

        {/* brief */}
        <p
          data-reveal
          style={
            {
              '--stagger': '80ms',
              fontSize: 'clamp(20px, 2vw, 28px)',
              lineHeight: 1.55,
              fontFamily: 'var(--font-display)',
              fontWeight: 380,
              fontVariationSettings: '"SOFT" 80, "opsz" 32',
              color: 'var(--color-ink)',
              maxWidth: '52ch',
              margin: '64px 0 0',
            } as React.CSSProperties
          }
        >
          {c.brief}
        </p>

        {/* sections with marginalia */}
        <div style={{ marginTop: 'clamp(80px, 12vh, 140px)', display: 'grid', gap: 'clamp(64px, 10vh, 120px)' }}>
          {c.sections.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              style={
                {
                  '--stagger': `${i * 80}ms`,
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 3fr)',
                  gap: 'clamp(32px, 5vw, 80px)',
                  alignItems: 'start',
                } as React.CSSProperties
              }
              className="case-row"
            >
              <div>
                <h2
                  className="display"
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    fontWeight: 380,
                    fontVariationSettings: '"SOFT" 50, "opsz" 144',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  {s.title}
                </h2>
                <p style={{ marginTop: 24, color: 'var(--color-ink-mute)', fontSize: 18, lineHeight: 1.65, maxWidth: '54ch' }}>{s.body}</p>
              </div>
              {s.note && (
                <aside className="marginalia" style={{ borderLeft: `2px solid ${c.accent}`, paddingLeft: 20, fontStyle: 'italic', maxWidth: '28ch' }}>
                  {s.note}
                </aside>
              )}
            </article>
          ))}
        </div>

        {/* links */}
        {c.links.length > 0 && (
          <section
            data-reveal
            style={
              {
                '--stagger': '200ms',
                marginTop: 'clamp(80px, 12vh, 120px)',
                paddingTop: 32,
                borderTop: '1px solid var(--color-line)',
              } as React.CSSProperties
            }
          >
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              Live links
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              {c.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    className="link-line mono uppercase"
                    style={{ fontSize: 12, letterSpacing: '0.18em', color: c.accent }}
                  >
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* back to work */}
        <p style={{ marginTop: 'clamp(64px, 10vh, 96px)', textAlign: 'center' }}>
          <a href="/work/" className="link-line mono uppercase" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-ink-mute)' }}>
            ← Back to all work
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
