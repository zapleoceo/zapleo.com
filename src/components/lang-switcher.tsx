'use client';

import { usePathname } from 'next/navigation';
import { LOCALES, type Locale, LOCALE_LABEL, isLocale } from '@/i18n/config';

/**
 * Context-aware language switcher.
 *
 * Routing rules:
 *   - EN is the default locale (no prefix).  /work/  /uk/work/  /ru/work/
 *   - Switching TO en   → strips locale prefix  /uk/work/ → /work/
 *   - Switching TO uk   → prepends prefix        /work/    → /uk/work/
 *   - homeOnly=true     → non-EN always routes to /{loc}/
 *     (use on pages that have no locale variants, e.g. AI-Dima)
 */
export function LangSwitcher({ current, homeOnly }: { current: Locale; homeOnly?: boolean }) {
  const pathname = usePathname() || '/';

  const buildHref = (loc: Locale) => {
    const parts = pathname.split('/').filter(Boolean);

    // Always strip an existing locale prefix first
    if (parts.length > 0 && isLocale(parts[0])) {
      parts.shift();
    }

    // homeOnly: non-default locales go straight to their home page
    if (homeOnly && loc !== 'en') {
      return `/${loc}/`;
    }

    // EN is the default → no prefix
    if (loc === 'en') {
      const joined = parts.join('/');
      return joined ? `/${joined}/` : '/';
    }

    // Non-EN: prepend locale segment
    parts.unshift(loc);
    return '/' + parts.join('/') + '/';
  };

  return (
    <nav
      aria-label="Language"
      className="mono inline-flex items-center gap-2"
      style={{ fontSize: 11, letterSpacing: '0.16em' }}
    >
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          <a
            href={buildHref(l)}
            aria-current={current === l ? 'true' : undefined}
            title={LOCALE_LABEL[l].native}
            className="link-line uppercase transition-opacity"
            style={{ color: current === l ? 'var(--color-ink)' : 'var(--color-ink-faint)' }}
          >
            {LOCALE_LABEL[l].label}
          </a>
          {i < LOCALES.length - 1 && (
            <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>
              ·
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
