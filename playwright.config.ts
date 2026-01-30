import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,

  // Run tests against the built site
  webServer: {
    command: 'npm run serve',
    port: 3000,
    reuseExistingServer: true,
  },

  // Chrome only for fast smoke tests
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
  ],

  // Simple reporter
  reporter: [['list']],
});
