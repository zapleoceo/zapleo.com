import { expect, test } from '@playwright/test';

for (const [name, width, height] of [
  ['mobile', 375, 812],
  ['desktop', 1440, 900],
] as const) {
  test(`recovery pages fit ${name}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.setViewportSize({ width, height });

    for (const route of ['/', '/revenue-recovery/']) {
      await page.goto(route);
      await page.screenshot({
        path: `test-results/revenue-recovery-site/${name}-${route === '/' ? 'home' : 'service'}.png`,
        fullPage: true,
      });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `${name} horizontal overflow on ${route}`).toBeLessThanOrEqual(1);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    }

    expect(errors).toEqual([]);
  });
}
