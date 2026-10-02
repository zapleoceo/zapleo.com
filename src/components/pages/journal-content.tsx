import { PageShell } from '@/components/page-shell';
import { getDict } from '@/i18n/dict';
import type { Locale } from '@/i18n/config';

const ESSAYS: Array<{ slug: string; year: string; title: string; teaser: string; min: number; lang: string; status: 'draft' | 'soon' | 'published' }> = [
];

export function JournalPageContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const tj = t.journal;
  const tc = t.common;

  return (
    <PageShell
      eyebrow={tj.eyebrow}
      title={
        <>
          {tj.title1}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>{tj.title2}</em>
        </>
      }
      intro={tj.intro}
      chapter={tc.chapter(5, 6)}
      locale={locale}
    >
      <div
        style={{
          padding: 'clamp(56px, 9vh, 110px) clamp(24px, 6vw, 96px)',
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {ESSAYS.map((e, i) => {
            const isPublished = e.status === 'published';
            const statusText =
              e.status === 'published'
                ? `${e.min} ${tj.statusLabels.published}`
                : e.status === 'soon'
                  ? tj.statusLabels.soon
                  : tj.statusLabels.drafting;
            return (
              <li
                key={e.slug}
                data-reveal
                style={
                  {
                    '--stagger': `${i * 60}ms`,
                    padding: 'clamp(32px, 4vh, 48px) 0',
                    borderTop: '1px solid var(--color-line)',
                    display: 'grid',
                    gridTemplateColumns: '90px 1fr auto',
                    gap: 'clamp(20px, 4vw, 56px)',
                    alignItems: 'baseline',
                  } as React.CSSProperties
                }
                className="essay-row"
              >
                <span className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
                  {e.year}
                </span>
                <div>
                  <h2
                    className="display"
                    style={{
                      fontSize: 'clamp(24px, 3vw, 40px)',
                      fontWeight: 380,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      margin: 0,
                      color: isPublished ? 'var(--color-ink)' : 'var(--color-ink-mute)',
                    }}
                  >
                    {e.title}
                  </h2>
                  <p style={{ marginTop: 12, color: 'var(--color-ink-mute)', fontSize: 16, lineHeight: 1.55, maxWidth: '54ch' }}>{e.teaser}</p>
                </div>
                <span
                  className="mono uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    color:
                      e.status === 'published'
                        ? 'var(--color-mint)'
                        : e.status === 'soon'
                          ? 'var(--color-amber)'
                          : 'var(--color-ink-ghost)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {statusText}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="marginalia" style={{ marginTop: 64, maxWidth: '60ch' }}>
          <a href={`${locale === 'en' ? '' : `/${locale}`}/work/`} className="link-line">
            {t.nav.work} →
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .essay-row { grid-template-columns: 1fr !important; }
          .essay-row > span:last-child { justify-self: start; }
        }
      `}</style>
    </PageShell>
  );
}
