import { expect, test } from '@playwright/test';

const locales = ['en', 'uk', 'ru', 'id'];
const origin = 'https://zapleo.com';
const prefix = (locale: string) => locale === 'en' ? '' : `/${locale}`;
const casePath = (locale: string) => `${prefix(locale)}/work/it-step-jakarta/`;

for (const locale of locales) {
  test(`Jakarta case is published and linked in ${locale}`, async ({ page }) => {
    const path = casePath(locale);
    const response = await page.request.get(path);
    expect(response.ok()).toBeTruthy();
    const html = await response.text();
    expect(html).toContain('IT STEP Academy Jakarta');
    expect(html).toMatch(/93[.,]6%/);
    expect(html).not.toMatch(/name="robots" content="[^"]*noindex/);
    await page.goto(path);

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', origin + path);
    for (const alternate of [...locales, 'x-default']) {
      await expect(page.locator(`link[hreflang="${alternate}"]`)).toHaveAttribute('href', origin + casePath(alternate === 'x-default' ? 'en' : alternate));
    }

    for (const entry of ['/', '/work/', '/revenue-recovery/']) {
      const from = await page.request.get(prefix(locale) + entry);
      expect(from.ok()).toBeTruthy();
      expect(await from.text()).toContain(`href="${path}"`);
    }
  });
}

test('Jakarta case paths are in the sitemap', async ({ request }) => {
  const response = await request.get('/sitemap.xml');
  expect(response.ok()).toBeTruthy();
  const xml = await response.text();
  for (const locale of locales) expect(xml).toContain(`<loc>${origin}${casePath(locale)}</loc>`);
});
