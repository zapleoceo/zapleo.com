/**
 * Person + WebSite schema for the homepage.
 * Only stable, publicly supported identity and service facts belong here.
 */
export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://zapleo.com/#person',
        name: 'Dmitriy Zaporozhets',
        url: 'https://zapleo.com',
        description:
          'AI integrator and business operator. Founder of Zapleo and former branch director of IT STEP Academy Jakarta.',
        jobTitle: 'Founder, AI integration',
        worksFor: { '@type': 'Organization', name: 'Zapleo' },
        founder: { '@type': 'Organization', name: 'Zapleo', url: 'https://zapleo.com' },
        knowsAbout: [
          'Software engineering',
          'Web development',
          'Conversational AI',
          'AI sales automation',
          'Project management',
          'EdTech',
          'Business operations automation',
        ],
        sameAs: [
          'https://www.linkedin.com/in/dmitriy-zaporozhets-83b15375/',
          'https://github.com/zapleo',
          'https://www.instagram.com/ai_dimaz/',
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://zapleo.com/#revenue-recovery-service',
        name: 'Revenue Recovery Sprint',
        description: 'Ten-business-day diagnostic of one inbound sales funnel across source, CRM, calls, messages and handoffs. Delivers a measured loss map and a first-fix blueprint.',
        url: 'https://zapleo.com/revenue-recovery/',
        provider: { '@id': 'https://zapleo.com/#person' },
        serviceType: 'Sales funnel diagnostic and AI integration planning',
        areaServed: ['Southeast Asia', 'Ukraine', 'Global'],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://zapleo.com/contact/',
          contactType: 'sales',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://zapleo.com/#website',
        url: 'https://zapleo.com',
        name: 'zapleo',
        description:
          'Dmitriy Zaporozhets builds and tests AI systems inside live business operations.',
        publisher: { '@id': 'https://zapleo.com/#person' },
        inLanguage: ['en', 'uk', 'ru', 'id'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
