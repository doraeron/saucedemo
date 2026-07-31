import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  //globalThis to access process without requiring Node type definitions
  forbidOnly: !!(globalThis as any).process?.env?.CI,
  retries: (globalThis as any).process?.env?.CI ? 2 : 0,
  workers: (globalThis as any).process?.env?.CI ? 1 : undefined,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});