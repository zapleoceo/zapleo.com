import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function AIDimaArchiveLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <aside className="archive-notice">
        Archive: these education guides were prepared in 2026 and are not maintained. Dmitriy left IT STEP Jakarta in August 2026.
        {' '}For current services, <a href="/revenue-recovery/">start here</a>.
      </aside>
      {children}
    </>
  );
}
