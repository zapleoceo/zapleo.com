import type { Locale } from '@/i18n/config';
import { id } from './home.id';
import { ru } from './home.ru';
import { uk } from './home.uk';

type Link = { label: string; href: string };

export type HomeCopy = {
  meta: { title: string; description: string };
  nav: { work: string; about: string; contact: string; sprint: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    profile: Link;
    flow: { inputs: readonly string[]; output: string };
  };
  doors: {
    label: string;
    title: string;
    items: readonly {
      key: 'sales' | 'operations' | 'ai-infra';
      title: string;
      problem: string;
      approach: string;
      proof: readonly Link[];
      entry?: Link;
    }[];
  };
  depth: { label: string; title: string; body: string; flow: { inputs: readonly string[]; output: string }; href: string };
  cases: {
    label: string;
    title: string;
    note: string;
    fields: { problem: string; built: string; observed: string; limits: string };
    items: readonly {
      slug: string;
      name: string;
      problem: string;
      built: string;
      observed: string;
      limits: string;
      href: string;
    }[];
  };
  history: { label: string; title: string; body: string; trustLabel: string; trust: readonly string[] };
  principles: { title: string; items: readonly string[] };
  engage: { title: string; intro: string; steps: readonly { name: string; body: string; href?: string }[] };
  about: { eyebrow: string; title: string; intro: string; story: string; methodTitle: string; methodBody: string };
  contact: { title: string; body: string; emailLabel: string; emailSubject: string; emailBody: string };
  footer: { tagline: string };
};

const en: HomeCopy = {
  meta: {
    title: 'Dmitriy Zaporozhets · Zapleo — AI that works in your business',
    description:
      'Founder of Zapleo since 2010. I find where a running business loses money or time — in sales, operations or its AI tools — and build a focused solution, tested in the real workflow.',
  },
  nav: { work: 'Work', about: 'About', contact: 'Contact', sprint: 'Revenue sprint' },
  hero: {
    eyebrow: 'Dmitriy Zaporozhets · AI in live business · Nha Trang, working worldwide',
    title: 'AI that works in your business, not just in the demo.',
    lead: "I'm Dmitriy, founder of Zapleo since 2010. I find where a running business loses money or time — in sales, operations or its AI tools — and build a focused solution, tested in the real workflow.",
    ctaPrimary: 'Tell me what is not working',
    ctaSecondary: 'See what I have built',
    profile: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dmitriy-zaporozhets-83b15375/' },
    flow: { inputs: ['Ad', 'Chat', 'Call', 'CRM'], output: 'One working system' },
  },
  doors: {
    label: 'Where I am useful',
    title: 'Three kinds of problems I take on.',
    items: [
      {
        key: 'sales',
        title: 'Customers get lost between the ad, the chat, the call and the CRM',
        problem: 'You pay for leads, but nobody can say which ones were answered, by whom, and where they went quiet.',
        approach: 'I trace one funnel end to end, measure where people drop out, and design and pilot the fix — from an AI agent that answers in the customer’s language to a clean handover to your sales team.',
        proof: [
          { label: 'Stepan', href: 'https://stepan2.zapleo.com/' },
          { label: 'IT STEP Jakarta funnel', href: '/revenue-recovery/' },
        ],
        entry: { label: 'Revenue Recovery Sprint', href: '/revenue-recovery/' },
      },
      {
        key: 'operations',
        title: 'The business runs on manual routine',
        problem: 'Payments are reconciled by hand, orders slip, and reports arrive late or not at all.',
        approach: 'I connect the tools you already pay for, automate the copy-paste, and leave people the decisions.',
        proof: [{ label: 'Veranda', href: '/work/' }],
      },
      {
        key: 'ai-infra',
        title: 'You already use AI, and it is expensive or unreliable',
        problem: 'Bills grow, answers drift, and one invented price in a customer chat costs more than the whole setup.',
        approach: 'I put in the unglamorous layer that makes AI safe to rely on: routing between models, spend control, and checks that stop an agent from stating what it cannot back up.',
        proof: [{ label: 'AIbroker', href: '/work/aibroker/' }],
      },
    ],
  },
  depth: {
    label: 'How deep it goes',
    title: 'Vera — the AI memory I built for myself.',
    body: 'Before I sell an idea, I run my own work on it. Vera is a private prototype that gathers my working correspondence into one store and finds things by meaning, not by keyword.',
    flow: { inputs: ['Messages', 'Documents', 'Decisions'], output: 'One answer, with its source' },
    href: '/work/',
  },
  cases: {
    label: 'Selected work',
    title: 'What I built, and what we saw.',
    note: 'Numbers describe the work examined. They are not promised sales results.',
    fields: { problem: 'Problem', built: 'What I built', observed: 'What we saw', limits: 'Limits' },
    items: [
      {
        slug: 'it-step-jakarta',
        name: 'IT STEP Academy Jakarta — inbound sales',
        problem: 'The branch paid for leads but could not say which ads generated enquiries, or where those enquiries were lost.',
        built: 'Ad-to-lead attribution, a review of a CRM report covering 1,956 calls from April 2026, and an AI sales agent on Instagram and WhatsApp with human handover.',
        observed: 'Attribution went from 45.2% to 93.6% of ad-sourced leads (1,335 leads, July 2026). In the call report about 40% of calls never connected and another quarter lasted under 30 seconds: the loss sat in what happened after a missed call, not in the number of leads.',
        limits: 'One branch, one market. The analysis located the loss; it did not by itself raise sales.',
        href: '/revenue-recovery/',
      },
      {
        slug: 'aibroker',
        name: 'AIbroker — one gateway for every AI provider',
        problem: 'Several AI systems called many model providers, each with its own keys, limits and bills — and the logged costs could not be trusted.',
        built: 'A single self-hosted gateway: provider keys are kept in one place, with calls proxied or given time-limited lease access, every call is logged with an estimated cost, and a monitor takes dead or rate-limited keys out of rotation.',
        observed: 'A library update once turned every logged cost into $0, and a $122 gap appeared against a provider invoice. Both were caught; logged costs are now treated as estimates and checked against the invoice. In August 2026 the gateway had 14 providers configured, and its estimated spend for all my systems averaged $0.66 a day.',
        limits: 'Built for my own systems, not yet run for an outside client.',
        href: '/work/aibroker/',
      },
    ],
  },
  history: {
    label: 'Since 2010',
    title: 'Sixteen years between business problems and the teams that solve them.',
    body: 'I founded Zapleo in 2010 as a web and mobile development company for clients in the US and Europe. My job was to turn a client’s business problem into something a team could build. It still is. Today AI lets me prototype and build much more of that work myself.',
    trustLabel: 'Selected projects',
    trust: ['IT STEP Academy', 'Veranda', 'Pasijou', 'APCU'],
  },
  principles: {
    title: 'How I work',
    items: [
      'First I find where money or time actually leaks. Then we decide what to build.',
      'We agree up front what must not be automated.',
      'I take responsibility for the implementation and for checking the result in real operation.',
    ],
  },
  engage: {
    title: 'Ways to work together',
    intro: 'Every engagement is scoped in writing before it starts.',
    steps: [
      { name: 'Conversation', body: 'You describe the process that bothers you. I tell you honestly whether it is worth touching.' },
      { name: 'Diagnosis', body: 'Fixed scope, fixed fee. For sales funnels this is the Revenue Recovery Sprint.', href: '/revenue-recovery/' },
      { name: 'Build', body: 'One system into live operation, with a measured before and after.' },
      { name: 'Fractional AI leadership', body: 'A scoped, ongoing engagement for companies that want someone senior to own AI decisions with them.' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'An operator who builds with AI.',
    intro: 'I have run a software company, carried the P&L of an education branch, and co-own and operate a restaurant in Nha Trang. I build the systems I need myself.',
    story: 'Zapleo started in 2010 as a development company for US and European clients. In 2026 I ran IT STEP Academy’s branch in Jakarta, where I built the sales agent and the funnel analytics described on this site. I live in Nha Trang, Vietnam, and work with companies remotely.',
    methodTitle: 'Why this works',
    methodBody: 'I would rather find a simple fix for a hard problem than talk about it for months. I measure before I build, keep a human where judgement matters, and check the system after it goes live.',
  },
  contact: {
    title: 'Which process bothers you most?',
    body: 'Two or three sentences are enough: what the business does, what is not working, and what you have already tried.',
    emailLabel: 'Email Dmitriy',
    emailSubject: 'A process that is not working',
    emailBody: 'Hi Dmitriy,\n\nOur business: \nWhat is not working: \nWhat we have tried: \n',
  },
  footer: { tagline: 'AI that works in your business, not just in the demo.' },
};

export const HOME_COPY = { en, uk, ru, id } as const satisfies Record<Locale, HomeCopy>;
