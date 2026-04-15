/**
 * login.page.ts
 * Page Object for /login page.
 */

import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // --- Locators ---
  // NOTE: Verify these against real DOM after app is deployed (Step 2 — UI Recon)

  get emailInput() {
    return this.page.getByLabel('Email');
  }

  get passwordInput() {
    return this.page.getByLabel('Mật khẩu');
  }

  get loginButton() {
    return this.page.getByRole('button', { name: 'Đăng nhập' });
  }

  get errorMessage() {
    return this.page.getByRole('alert');
  }

  // --- Actions ---

  async goto() {
    await this.navigate('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginAndWait(email: string, password: string) {
    await this.login(email, password);
    await expect(this.page).toHaveURL(/cong-dong/);
  }
}
