'use client';
import { useState } from 'react';

export type Audience = 'all' | 'students' | 'switchers' | 'parents' | 'teens';
export type CostType = 'Free' | 'Freemium' | 'Paid' | 'Scholarship' | 'Free + cert';
export type Topic = 'AI' | 'Code' | 'Career' | 'Tools' | 'Bootcamps';

export type Resource = {
  name: string;
  for: string;
  audiences: Audience[];
  topics: Topic[];
  cost: CostType;
  what: string;
  url: string;
  added: string;
  disclosure?: string;
};

const AUDIENCE_LABELS: Record<Exclude<Audience, 'all'>, string> = {
  students: 'Students',
  switchers: 'Switchers',
  parents: 'Parents',
  teens: 'Teens',
};

const TOPIC_LABELS: Record<Topic, string> = {
  AI: 'AI',
  Code: 'Code',
  Career: 'Career',
  Tools: 'Tools',
  Bootcamps: 'Bootcamps',
};

function costColor(cost: CostType) {
  if (cost === 'Free' || cost === 'Free + cert') return 'var(--color-mint)';
  if (cost === 'Freemium') return 'var(--color-amber)';
  if (cost === 'Scholarship') return 'var(--color-mint)';
  return 'var(--color-ink-faint)';
}

function costBg(cost: CostType) {
  if (cost === 'Free' || cost === 'Free + cert' || cost === 'Scholarship')
    return 'oklch(70% 0.14 160 / 0.12)';
  if (cost === 'Freemium') return 'oklch(60% 0.18 50 / 0.12)';
  return 'oklch(50% 0 0 / 0.10)';
}

function FilterPills<T extends string>({
  active,
  options,
  labels,
  onChange,
}: {
  active: T | null;
  options: T[];
  labels: Record<T, string>;
  onChange: (v: T | null) => void;
}) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <button
        onClick={() => onChange(null)}
        style={{
          padding: '6px 16px',
          borderRadius: 999,
          border: `1px solid ${active === null ? 'var(--color-amber)' : 'var(--color-line)'}`,
          background: active === null ? 'oklch(60% 0.18 50 / 0.14)' : 'transparent',
          color: active === null ? 'var(--color-amber)' : 'var(--color-ink-faint)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 200ms',
        }}
      >
        All
      </button>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(active === opt ? null : opt)}
          style={{
            padding: '6px 16px',
            borderRadius: 999,
            border: `1px solid ${active === opt ? 'var(--color-amber)' : 'var(--color-line)'}`,
            background: active === opt ? 'oklch(60% 0.18 50 / 0.14)' : 'transparent',
            color: active === opt ? 'var(--color-amber)' : 'var(--color-ink-faint)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 200ms',
          }}
        >
          {labels[opt]}
        </button>
      ))}
    </div>
  );
}

export function ResourceGrid({ resources }: { resources: Resource[] }) {
  const [audience, setAudience] = useState<Exclude<Audience, 'all'> | null>(null);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const filtered = resources.filter((r) => {
    if (audience && !r.audiences.includes(audience) && !r.audiences.includes('all')) return false;
    if (topic && !r.topics.includes(topic)) return false;
    if (showFreeOnly && r.cost !== 'Free' && r.cost !== 'Free + cert' && r.cost !== 'Scholarship')
      return false;
    return true;
  });

  const hasFilters = audience !== null || topic !== null || showFreeOnly;

  return (
    <>
      {/* Filter bar */}
      <div
        style={{
          padding: 'clamp(32px, 4vh, 48px) clamp(24px, 6vw, 96px)',
          background: 'var(--color-bg-elevated)',
          borderTop: '1px solid var(--color-line)',
          borderBottom: '1px solid var(--color-line)',
          position: 'sticky',
          top: 57,
          zIndex: 40,
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: 18 }}>
          <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 36px)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div>
              <p
                className="mono uppercase"
                style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-ink-faint)', marginBottom: 8 }}
              >
                Audience
              </p>
              <FilterPills
                active={audience}
                options={['students', 'switchers', 'parents', 'teens'] as const}
                labels={AUDIENCE_LABELS}
                onChange={setAudience}
              />
            </div>
            <div>
              <p
                className="mono uppercase"
                style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-ink-faint)', marginBottom: 8 }}
              >
                Topic
              </p>
              <FilterPills
                active={topic}
                options={['AI', 'Code', 'Career', 'Tools', 'Bootcamps'] as const}
                labels={TOPIC_LABELS}
                onChange={setTopic}
              />
            </div>
            <div>
              <p
                className="mono uppercase"
                style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-ink-faint)', marginBottom: 8 }}
              >
                Cost
              </p>
              <button
                onClick={() => setShowFreeOnly((v) => !v)}
                style={{
                  padding: '6px 16px',
                  borderRadius: 999,
                  border: `1px solid ${showFreeOnly ? 'var(--color-mint)' : 'var(--color-line)'}`,
                  background: showFreeOnly ? 'oklch(70% 0.14 160 / 0.12)' : 'transparent',
                  color: showFreeOnly ? 'var(--color-mint)' : 'var(--color-ink-faint)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                }}
              >
                Free only
              </button>
            </div>
          </div>

          {hasFilters && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span className="mono" style={{ fontSize: 12, color: 'var(--color-ink-faint)' }}>
                {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              </span>
              <button
                onClick={() => {
                  setAudience(null);
                  setTopic(null);
                  setShowFreeOnly(false);
                }}
                className="mono uppercase link-line"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  color: 'var(--color-ink-faint)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Resource rows */}
      <section
        style={{
          padding: 'clamp(48px, 8vh, 96px) clamp(24px, 6vw, 96px)',
          background: 'var(--color-bg-base)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: 'clamp(10px, 1.2vw, 14px)' }}>
          {filtered.length === 0 ? (
            <p
              style={{
                padding: 'clamp(48px, 8vh, 80px) 0',
                textAlign: 'center',
                fontSize: 16,
                color: 'var(--color-ink-faint)',
                fontStyle: 'italic',
              }}
            >
              No resources match these filters. Try a different combination.
            </p>
          ) : (
            filtered.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener"
                style={{
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
                }}
                className="resource-row"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
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
                    <span
                      className="mono"
                      style={{ fontSize: 12, color: 'var(--color-ink-faint)', letterSpacing: '0.06em' }}
                    >
                      · {r.for}
                    </span>
                    {/* Topic pills */}
                    <span style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {r.topics.map((t) => (
                        <span
                          key={t}
                          className="mono uppercase"
                          style={{
                            fontSize: 9,
                            letterSpacing: '0.14em',
                            color: 'var(--color-ink-ghost)',
                            border: '1px solid var(--color-line)',
                            borderRadius: 999,
                            padding: '2px 8px',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: '8px 0 0',
                      fontSize: 'clamp(14px, 1vw, 15.5px)',
                      color: 'var(--color-ink-mute)',
                      lineHeight: 1.55,
                    }}
                  >
                    {r.what}
                  </p>
                  {r.disclosure && (
                    <p
                      className="marginalia"
                      style={{
                        marginTop: 10,
                        fontStyle: 'italic',
                        color: 'var(--color-amber)',
                        opacity: 0.8,
                        borderLeft: '2px solid var(--color-amber-deep)',
                        paddingLeft: 12,
                      }}
                    >
                      {r.disclosure}
                    </p>
                  )}
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
                  <span
                    className="mono"
                    style={{ fontSize: 10, color: 'var(--color-ink-ghost)', letterSpacing: '0.1em' }}
                  >
                    {r.added}
                  </span>
                </div>
              </a>
            ))
          )}
        </div>
      </section>

      <style>{`
        .resource-row:hover { border-color: var(--color-line-bright) !important; }
        @media (max-width: 600px) {
          .resource-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
