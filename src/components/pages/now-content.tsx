import { PageShell } from '@/components/page-shell';
import { getDict } from '@/i18n/dict';
import type { Locale } from '@/i18n/config';

export function NowPageContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const tn = t.now;
  const tc = t.common;

  return (
    <PageShell
      eyebrow={tn.eyebrow}
      title={tn.title}
      intro={tn.intro}
      chapter={tc.chapter(4, 6)}
      locale={locale}
    >
      <div
        style={{
          padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
          maxWidth: 980,
          margin: '0 auto',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 0 }}>
          {tn.blocks.map(([label, body], i) => (
            <li
              key={label}
              data-reveal
              style={
                {
                  '--stagger': `${i * 70}ms`,
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, 1fr) minmax(0, 3fr)',
                  gap: 'clamp(20px, 4vw, 64px)',
                  padding: 'clamp(28px, 4vh, 40px) 0',
                  borderBottom: i === tn.blocks.length - 1 ? 'none' : '1px solid var(--color-line)',
                  alignItems: 'baseline',
                } as React.CSSProperties
              }
              className="now-row"
            >
              <span className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-amber)' }}>
                {label}
              </span>
              <p
                style={{
                  fontSize: 'clamp(17px, 1.6vw, 22px)',
                  lineHeight: 1.55,
                  color: 'var(--color-ink)',
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 380,
                  fontVariationSettings: '"SOFT" 80, "opsz" 32',
                  letterSpacing: '-0.01em',
                }}
              >
                {body}
              </p>
            </li>
          ))}
        </ul>

        <p className="marginalia" style={{ marginTop: 56, fontStyle: 'italic' }}>
          {tn.footnote}{' '}
          <a href="https://nownownow.com/about" target="_blank" rel="noopener" className="link-line">
            nownownow.com →
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .now-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </PageShell>
  );
}
