import { defineConfig, devices } from '@playwright/test';

const BASE_URL = process.env.TEST_URL ?? 'http://localhost:3001';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: process.env.CI
    ? {
        command: 'npx serve out -l 3001 --no-clipboard',
        url: BASE_URL,
        reuseExistingServer: false,
        timeout: 30_000,
      }
    : undefined,
});
