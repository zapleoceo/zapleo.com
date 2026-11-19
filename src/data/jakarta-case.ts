import type { Locale } from '@/i18n/config';

export const JAKARTA_CASE_SLUG = 'it-step-jakarta';
export const JAKARTA_CASE_PATH = '/work/it-step-jakarta/';

export const JAKARTA_CASE = {
  "name": "IT STEP Academy Jakarta",
  "tagline": "AI sales funnel audit: Instagram, WhatsApp, calls and CRM",
  "year": "2026",
  "place": "Jakarta, Indonesia",
  "role": "Branch operations and AI implementation",
  "team": "IT STEP Academy Jakarta",
  "stack": [
    "CRM attribution",
    "Instagram and WhatsApp"
  ],
  "brief": "Zapleo founder Dmitriy Zaporozhets connected inbound sales data and AI-assisted lead qualification at IT STEP Academy Jakarta.",
  "sections": [
    {
      "title": "Where leads were lost",
      "body": "The branch paid for leads but could not reliably identify which ads produced enquiries or where those enquiries dropped out before a sale."
    },
    {
      "title": "What we implemented",
      "body": "Zapleo connected ad-to-lead attribution, analyzed a CRM report covering 1,956 calls in April 2026 and connected the Stepan AI agent for Instagram and WhatsApp to CRM events. Stepan qualified enquiries and handed them to staff with a reason."
    },
    {
      "title": "What the data showed",
      "body": "Ad-to-lead attribution rose from 45.2% to 93.6% among 1,335 ad-sourced leads in July 2026. In the April call report, about 40% of calls did not connect and another quarter lasted under 30 seconds."
    },
    {
      "title": "What this does not show",
      "body": "Attribution coverage is not a conversion or revenue metric. This was one education branch in one market; the analysis alone did not increase sales."
    }
  ],
  "links": [
    {
      "label": "Explore the Revenue Recovery Sprint",
      "href": "/revenue-recovery/"
    },
    {
      "label": "Visit Stepan",
      "href": "https://stepan2.zapleo.com/"
    }
  ],
  "accent": "oklch(68% 0.20 280)"
};

const labels: Record<Locale, string> = {
  "en": "Read the IT STEP Academy Jakarta case",
  "uk": "Читати кейс IT STEP Academy Jakarta",
  "ru": "Читать кейс IT STEP Academy Jakarta",
  "id": "Baca studi kasus IT STEP Academy Jakarta"
};

export function jakartaCaseLink(locale: Locale) {
  return {
    label: labels[locale],
    href: `${locale === 'en' ? '' : `/${locale}`}${JAKARTA_CASE_PATH}`,
  };
}
