import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Colophon',
  description: 'How this site is made. Stack, fonts, AI assistance, hosting, source code.',
};

const STACK = [
  { k: 'Framework', v: 'Next.js 16.2 (App Router, static export)' },
  { k: 'Language', v: 'TypeScript 5.9 (strict)' },
  { k: 'Styling', v: 'Tailwind CSS 4 (oklch native), CSS @theme tokens' },
  { k: 'Motion', v: 'Motion 12 (Framer Motion lineage), GSAP, Lenis smooth scroll' },
  { k: '3D moment', v: 'react-three-fiber + drei (one scene on /journey)' },
  { k: 'i18n', v: 'next-intl, 4 locales (EN / UK / RU / ID)' },
  { k: 'Forms', v: 'react-hook-form + zod (no form on /contact by default)' },
  { k: 'Lint + format', v: 'Biome (replaces eslint + prettier)' },
  { k: 'Package manager', v: 'pnpm@9' },
];

const FONTS = [
  { k: 'Display', v: 'Fraunces (variable: wght · SOFT · WONK · opsz)', note: 'Pangram-feel editorial, single-axis serif for cinematic emphasis.' },
  { k: 'Body', v: 'Newsreader (variable opsz)', note: 'Designed for long reading at body sizes.' },
  { k: 'Mono', v: 'JetBrains Mono', note: 'Eyebrows, year stamps, marginalia, switcher.' },
];

const INFRA = [
  { k: 'Hosting', v: 'Bare nginx on Debian, static files via rsync' },
  { k: 'CI/CD', v: 'GitHub Actions on push to main → build → rsync to /var/www/zapleo.com (~50s end-to-end)' },
  { k: 'TLS', v: 'Cloudflare Origin Cert + edge proxy' },
  { k: 'Analytics', v: 'Cloudflare Web Analytics (cookieless)' },
  { k: 'Backups', v: 'Server-side nightly snapshots, off-site mirror' },
];

const AI = [
  { k: 'Design system', v: 'Drafted with Claude · reviewed and adjusted by Dmitriy' },
  { k: 'Copy', v: 'Co-authored with Claude · facts cross-checked against LinkedIn, GitHub, Clutch, DOU, Tripadvisor public records' },
  { k: 'Photos / b-roll', v: 'Mine. Or labelled stock when used.' },
  { k: 'Voice in social', v: 'AI-augmented per Vibe Coding strategy. Decisions and replies — mine.' },
];

function Block({ title, rows }: { title: string; rows: { k: string; v: string; note?: string }[] }) {
  return (
    <section data-reveal style={{ marginBottom: 'clamp(56px, 8vh, 96px)' } as React.CSSProperties}>
      <p className="eyebrow" style={{ marginBottom: 24 }}>
        {title}
      </p>
      <dl style={{ display: 'grid', gap: 0, margin: 0 }}>
        {rows.map((r, i) => (
          <div
            key={r.k}
            style={{
              padding: '20px 0',
              borderTop: i === 0 ? '1px solid var(--color-line)' : 'none',
              borderBottom: '1px solid var(--color-line)',
              display: 'grid',
              gridTemplateColumns: 'minmax(160px, 1fr) minmax(0, 3fr)',
              gap: 'clamp(16px, 3vw, 40px)',
              alignItems: 'baseline',
            }}
            className="colophon-row"
          >
            <dt className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-ink-faint)' }}>
              {r.k}
            </dt>
            <dd style={{ margin: 0, color: 'var(--color-ink)' }}>
              {r.v}
              {r.note && (
                <div className="marginalia" style={{ marginTop: 6 }}>
                  {r.note}
                </div>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function ColophonPage() {
  return (
    <PageShell
      eyebrow="Appendix · Colophon"
      title={
        <>
          How this site is <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>actually</em> made.
        </>
      }
      intro="A colophon is the page at the back of a book that lists the type, the paper, the printer. Same idea here — the stack, the fonts, the AI in the workflow, the host. So you can audit before you trust."
      chapter="APPENDIX"
    >
      <div
        style={{
          padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        <Block title="Stack" rows={STACK} />
        <Block title="Type" rows={FONTS} />
        <Block title="Infrastructure" rows={INFRA} />
        <Block title="AI / human split (honest disclosure)" rows={AI} />

        <section data-reveal style={{ marginTop: 'clamp(64px, 10vh, 120px)' }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            Source code & audits
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li>
              <a className="link-line" href="https://github.com/zapleoceo/zapleo.com" target="_blank" rel="noopener" style={{ color: 'var(--color-amber)' }}>
                github.com/zapleoceo/zapleo.com →
              </a>
            </li>
            <li>
              <span className="marginalia">
                License: MIT for the build setup; content is © Dmitriy Zaporozhets.
              </span>
            </li>
            <li>
              <span className="marginalia">
                Accessibility target: WCAG 2.2 AA. Found a violation? Tell me at{' '}
                <a className="link-line" href="mailto:dima@zapleo.com">
                  dima@zapleo.com
                </a>
                .
              </span>
            </li>
            <li>
              <span className="marginalia">
                No cookies. No third-party trackers. No newsletter pop-up.
              </span>
            </li>
          </ul>
        </section>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .colophon-row { grid-template-columns: 1fr !important; gap: 6px !important; }
        }
      `}</style>
    </PageShell>
  );
}
