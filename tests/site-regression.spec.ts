import { expect, test } from '@playwright/test';

for (const locale of ['en', 'uk', 'ru', 'id']) {
  for (const width of [375, 1440]) {
    test(`${locale} core pages fit ${width}px and link to existing routes`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const base = locale === 'en' ? '' : `/${locale}`;
      const errors: string[] = [];
      const internalLinks = new Set<string>();
      page.on('pageerror', (error) => errors.push(error.message));

      for (const suffix of ['/', '/about/', '/work/', '/contact/', '/revenue-recovery/', '/work/aibroker/', '/work/pasijou/', '/colophon/']) {
        const route = `${base}${suffix}`;
        const response = await page.goto(route);
        expect(response?.status(), route).toBe(200);
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        await page.evaluate(() => document.fonts.ready);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        expect(overflow, `overflow on ${route}`).toBeLessThanOrEqual(1);
        await expect(page.locator('script[src*="googletagmanager"]')).toHaveCount(0);
        const hrefs = await page.locator('a[href^="/"]').evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute('href')).filter((href): href is string => href !== null));
        for (const href of hrefs) internalLinks.add(href.split('#')[0]);
      }

      for (const href of internalLinks) {
        expect((await page.request.get(href)).status(), `broken internal link ${href}`).toBe(200);
      }
      expect(errors).toEqual([]);
    });
  }
}
