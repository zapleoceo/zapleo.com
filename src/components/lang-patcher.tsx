'use client';

import { useEffect } from 'react';

/**
 * Patches document.documentElement.lang after mount.
 * Mounted by locale sub-layouts since the root layout is static (lang="en").
 */
export default function LangPatcher({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
