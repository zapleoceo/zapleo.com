import { PageShell } from '@/components/page-shell';
import { getDict } from '@/i18n/dict';
import type { Locale } from '@/i18n/config';

const WORK = [
  {
    eraKey: 'hospitality' as const,
    items: [
      {
        slug: 'pasijou',
        year: '2022 — present',
        place: 'Weligama, Sri Lanka',
        name: 'Pasijou',
        tagline: 'Coworking + restaurant + cinema + yoga, in one room',
        body: 'Hybrid clubhouse on the south coast — work and lunch in the same space, BBQ nights, music. Ukrainian comfort food, 4.9 on Tripadvisor.',
        tags: ['F&B', 'Hospitality', 'Coworking', 'Operator role'],
        url: 'https://www.instagram.com/pasijou/',
      },
      {
        slug: 'veranda',
        year: '2023 — present',
        place: 'Vietnam',
        name: 'Veranda',
        tagline: 'Second hospitality venture, same playbook',
        body: 'A place where work and food belong in one room. Currently semi-private — public launch in progress.',
        tags: ['F&B', 'Hospitality', 'Operator role'],
        url: '#',
      },
    ],
  },
  {
    eraKey: 'agency' as const,
    items: [
      {
        slug: 'apcu',
        year: '2018 — present',
        place: 'Ukraine · live',
        name: 'apcu.ua',
        tagline: 'Industry portal · Cosmetics & Perfumery Association of Ukraine',
        body: 'Custom WordPress build. Multi-section editorial CMS, member directory, regulatory news feed. Built once, iterating with the industry ever since.',
        tags: ['CMS', 'Industry body', 'WordPress', 'PHP'],
        url: 'https://apcu.ua/',
      },
      {
        slug: 'mobilshina',
        year: '2014 — 2017',
        place: 'Ukraine · since refactored',
        name: 'Mobilshina (earlier version)',
        tagline: 'Frontend rebuild · automotive ecommerce, 30K+ SKUs',
        body: 'Catalog UX, fitment selector, mobile-first checkout. Site has since been re-platformed by another studio.',
        tags: ['E-commerce', 'High-SKU', 'PHP + JS'],
        url: '#',
      },
      {
        slug: 'opentv',
        year: '2016 — 2020',
        place: 'Ukraine · archived',
        name: 'opentv.media',
        tagline: 'Custom CMS · independent news outlet',
        body: 'Long-form articles, photo essays, live coverage workflow. Editorial-first publishing pipeline.',
        tags: ['News', 'Editorial CMS', 'PHP'],
        url: '#',
      },
      {
        slug: 'archive',
        year: '2010 — 2022',
        place: 'Dnipro, mostly',
        name: '+ 37 client engagements',
        tagline: 'Booking platforms, retail, EdTech-adjacent, mobile apps',
        body: 'A long tail of agency work — most under NDA, some long-since taken offline. Public footprint: github.com/zapleo (org repos), Clutch profile, LinkedIn company page.',
        tags: ['Agency archive', 'Mixed stack', 'On request'],
        url: 'https://github.com/zapleo',
      },
    ],
  },
];

export function WorkPageContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const tw = t.work;
  const tc = t.common;

  return (
    <PageShell
      eyebrow={tw.eyebrow}
      title={
        <>
          {tw.title1}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>{tw.title2}</em>
        </>
      }
      intro={tw.intro}
      chapter={tc.chapter(2, 6)}
      locale={locale}
    >
      <div style={{ padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)' }}>
        {WORK.map((era) => (
          <section key={era.eraKey} style={{ marginBottom: 'clamp(80px, 12vh, 140px)' }}>
            <p className="eyebrow" data-reveal style={{ marginBottom: 'clamp(32px, 5vh, 56px)' }}>
              {tw.eras[era.eraKey]}
            </p>
            <div style={{ display: 'grid', gap: 'clamp(36px, 6vh, 72px)' }}>
              {era.items.map((w, i) => {
                const hasCase = ['pasijou', 'apcu'].includes(w.slug);
                const Wrap = hasCase
                  ? (props: { children: React.ReactNode; style: React.CSSProperties; className: string; 'data-reveal'?: boolean }) => (
                      <a href={`/work/${w.slug}/`} {...props} />
                    )
                  : 'article';
                return (
                  <Wrap
                    key={w.slug}
                    data-reveal
                    style={
                      {
                        '--stagger': `${i * 80}ms`,
                        padding: 'clamp(32px, 5vw, 64px)',
                        background: 'var(--color-bg-elevated)',
                        border: '1px solid var(--color-line)',
                        borderRadius: 4,
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
                        gap: 'clamp(28px, 4vw, 64px)',
                        transition: 'border-color 320ms var(--ease-out-cinema), transform 320ms var(--ease-out-cinema)',
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: hasCase ? 'pointer' : 'default',
                      } as React.CSSProperties
                    }
                    className="work-row"
                  >
                    <div>
                      <span className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-ink-faint)' }}>
                        {w.year} &nbsp;·&nbsp; {w.place}
                      </span>
                      <h3
                        className="display"
                        style={{
                          marginTop: 16,
                          fontSize: 'clamp(28px, 4vw, 56px)',
                          fontWeight: 340,
                          fontVariationSettings: '"SOFT" 50, "opsz" 144',
                          lineHeight: 1.0,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {w.name}
                      </h3>
                      <p style={{ marginTop: 12, color: 'var(--color-amber)', fontStyle: 'italic', fontSize: 16, lineHeight: 1.5 }}>
                        {w.tagline}
                      </p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--color-ink-mute)', fontSize: 17, lineHeight: 1.6, maxWidth: '50ch' }}>{w.body}</p>
                      <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {w.tags.map((tag) => (
                          <span
                            key={tag}
                            className="mono uppercase"
                            style={{
                              fontSize: 10,
                              letterSpacing: '0.18em',
                              color: 'var(--color-ink-faint)',
                              padding: '6px 12px',
                              border: '1px solid var(--color-line-bright)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {w.url !== '#' && !hasCase && (
                        <p style={{ marginTop: 24 }}>
                          <a
                            href={w.url}
                            target="_blank"
                            rel="noopener"
                            className="link-line mono uppercase"
                            style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-amber)' }}
                          >
                            {w.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} →
                          </a>
                        </p>
                      )}
                      {hasCase && (
                        <p style={{ marginTop: 24 }}>
                          <span className="mono uppercase" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-amber)' }}>
                            {tc.readCase}
                          </span>
                        </p>
                      )}
                    </div>
                  </Wrap>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <style>{`
        .work-row:hover { border-color: var(--color-line-bright); transform: translate(-2px, -2px); }
        @media (max-width: 900px) { .work-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </PageShell>
  );
}
