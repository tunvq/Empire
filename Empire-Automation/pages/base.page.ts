/**
 * base.page.ts
 * Base class cho tất cả Page Objects.
 * Chứa các helper methods dùng chung.
 */

import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // --- Navigation ---

  async navigate(path: string = '') {
    await this.page.goto(path);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  // --- Common assertions ---

  async expectUrl(pattern: string | RegExp) {
    await expect(this.page).toHaveURL(pattern);
  }

  async expectVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async expectText(locator: Locator, text: string) {
    await expect(locator).toHaveText(text);
  }

  // --- Viewport helpers (per playwright_rules.md) ---

  async setDesktopViewport() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  async setMobileViewport() {
    await this.page.setViewportSize({ width: 375, height: 667 });
  }

  async setTabletViewport() {
    await this.page.setViewportSize({ width: 768, height: 1024 });
  }
}
