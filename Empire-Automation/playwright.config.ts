import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  // Root test directory
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: false,

  // Fail build on CI if you accidentally left test.only
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Number of workers
  workers: process.env.CI ? 1 : 2,

  // Reporter
  reporter: [
    ['html', { outputFolder: 'reports', open: 'never' }],
    ['list'],
    ['json', { outputFile: 'temp_reports/results.json' }],
  ],

  // Shared settings for all tests
  use: {
    // Base URL — set via .env
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    // Always run headed locally, headless on CI
    headless: !!process.env.CI,

    // Viewport — 1920x1080 per playwright_rules.md
    viewport: { width: 1920, height: 1080 },

    // Capture screenshot on failure
    screenshot: 'only-on-failure',

    // Capture video on failure
    video: 'retain-on-failure',

    // Capture trace on first retry
    trace: 'on-first-retry',

    // Output artifacts to temp/ folder during run
    testIdAttribute: 'data-testid',

    // Action timeout
    actionTimeout: 10_000,

    // Navigation timeout
    navigationTimeout: 30_000,
  },

  // Test timeout
  timeout: 60_000,

  // Expect assertion timeout
  expect: {
    timeout: 10_000,
  },

  // Output directory
  outputDir: 'temp',

  projects: [
    // --- Setup project for auth state ---
    {
      name: 'setup',
      testMatch: '**/fixtures/auth.setup.ts',
    },

    // --- Desktop Chrome (main) ---
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        storageState: 'tests/fixtures/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // --- Mobile viewport (for responsive tests) ---
    {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 5'],
      },
      // Mobile tests opt-in only — tag with @mobile
      grep: /@mobile/,
    },
  ],
});
