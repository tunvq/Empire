/**
 * auth.setup.ts
 * Runs ONCE before all tests (via "setup" project in playwright.config.ts).
 * Logs in and saves browser storage state → reused across all test specs.
 */

import { test as setup, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

const AUTH_FILE = path.join(__dirname, '.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Ensure .auth directory exists
  const authDir = path.dirname(AUTH_FILE);
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  const email = process.env.TEST_USER_EMAIL ?? 'demo@empire.io.vn';
  const password = process.env.TEST_USER_PASSWORD ?? '';

  await page.goto('/login');

  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Mật khẩu').fill(password);
  await page.getByRole('button', { name: 'Đăng nhập' }).click();

  // Wait until redirected to main page (not login)
  await expect(page).toHaveURL(/cong-dong/);

  // Save storage state (cookies + localStorage)
  await page.context().storageState({ path: AUTH_FILE });
});
