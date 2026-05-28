'use client';

import { usePathname } from 'next/navigation';
import { LOCALES, type Locale, LOCALE_LABEL, isLocale } from '@/i18n/config';

/**
 * Context-aware switcher.
 * Reads usePathname(), replaces (or prepends) the locale segment, preserves the rest.
 * /en/work/pasijou/  →  /uk/work/pasijou/
 * /work/pasijou/     →  /uk/work/pasijou/
 */
export function LangSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || '/';

  const buildHref = (loc: Locale) => {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length > 0 && isLocale(parts[0])) {
      parts[0] = loc;
    } else {
      parts.unshift(loc);
    }
    // trailing slash preserved
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
