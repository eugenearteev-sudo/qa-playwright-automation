const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // чтобы trace появился: нужен retry
  retries: 1,

  reporter: [['html']],

  use: {
    headless: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'reatin-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],
});
