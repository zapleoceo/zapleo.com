import { PageShell } from '@/components/page-shell';
import { getDict } from '@/i18n/dict';
import type { Locale } from '@/i18n/config';

// Technical data — proper nouns and version strings stay in English
const STACK = [
  { k: 'Framework', v: 'Next.js 16.2 (App Router, static export)' },
  { k: 'Language', v: 'TypeScript 5.9 (strict)' },
  { k: 'Styling', v: 'Tailwind CSS 4 (oklch native), CSS @theme tokens' },
  { k: 'Motion', v: 'CSS animation, IntersectionObserver, Lenis smooth scroll' },
  { k: 'i18n', v: 'Typed content dictionaries, 4 locales (EN / UK / RU / ID)' },
  { k: 'Contact', v: 'Direct email and messaging links; no website form' },
  { k: 'Lint + format', v: 'Biome (replaces eslint + prettier)' },
  { k: 'Package manager', v: 'pnpm@9' },
];

const FONTS = [
  { k: 'Display', v: 'Bricolage Grotesque' },
  { k: 'Body', v: 'Literata' },
  { k: 'Mono', v: 'JetBrains Mono' },
];

const INFRA = [
  { k: 'Hosting', v: 'Static export served through nginx and Cloudflare' },
  { k: 'CI/CD', v: 'GitHub Actions → typecheck, build and browser tests → rsync deployment' },
  { k: 'Analytics', v: 'No Google Analytics script is loaded by this version. Hosting and CDN services may process technical request logs.' },
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

export function ColophonPageContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const tco = t.colophon;

  return (
    <PageShell
      eyebrow={tco.eyebrow}
      title={
        <>
          {tco.title1}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>{tco.title2}</em>{' '}
          {tco.title3}
        </>
      }
      intro={tco.intro}
      chapter="APPENDIX"
      locale={locale}
    >
      <div
        style={{
          padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        <Block title={tco.sections.stack} rows={STACK.map((row) => row.k === 'Contact' ? { ...row, v: tco.notes.contact } : row)} />
        <Block title={tco.sections.type} rows={FONTS} />
        <Block title={tco.sections.infra} rows={INFRA.map((row) => row.k === 'Analytics' ? { ...row, v: tco.notes.analytics } : row)} />
        <Block title={tco.sections.ai} rows={[{ k: 'Claude / Codex', v: tco.notes.ai }]} />

        <section data-reveal style={{ marginTop: 'clamp(64px, 10vh, 120px)' }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            {tco.sections.source}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li>
              <a className="link-line" href="https://github.com/zapleoceo/zapleo.com" target="_blank" rel="noopener" style={{ color: 'var(--color-amber)' }}>
                github.com/zapleoceo/zapleo.com →
              </a>
            </li>
            {tco.sourceNotes.map((note) => (
              <li key={note}>
                <span className="marginalia">{note}</span>
              </li>
            ))}
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
