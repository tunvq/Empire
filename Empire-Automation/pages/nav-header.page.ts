/**
 * nav-header.page.ts
 * Page Object for NAV-HEADER module (1.1)
 * Covers: TC_001–009
 *
 * ⚠️ LOCATORS = PLACEHOLDER — must be verified via UI Recon (Step 2) when app is deployed.
 */

import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class NavHeaderPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // --- Tab locators ---

  get tabSanhChung() {
    return this.page.getByRole('link', { name: 'Sảnh chung' });
  }

  get tabReels() {
    return this.page.getByRole('link', { name: 'Reels' });
  }

  get tabNhom() {
    return this.page.getByRole('link', { name: 'Nhóm' });
  }

  get tabThongBao() {
    return this.page.getByRole('link', { name: 'Thông báo' });
  }

  get notificationBadge() {
    return this.page.locator('[data-testid="notification-badge"]');
  }

  // --- Search ---

  get searchInput() {
    return this.page.getByPlaceholder(/tìm kiếm/i);
  }

  // --- Profile menu ---

  get profileIcon() {
    return this.page.getByRole('button', { name: /profile|avatar|hồ sơ/i });
  }

  get profileMenuOption() {
    return this.page.getByRole('menuitem', { name: 'Hồ sơ' });
  }

  get settingsMenuOption() {
    return this.page.getByRole('menuitem', { name: 'Cài đặt' });
  }

  get logoutMenuOption() {
    return this.page.getByRole('menuitem', { name: 'Đăng xuất' });
  }

  // --- Logo ---

  get logoLink() {
    return this.page.getByRole('link', { name: /empire|home|logo/i });
  }

  // --- Actions ---

  async clickTab(tabName: 'Sảnh chung' | 'Reels' | 'Nhóm' | 'Thông báo') {
    const tabMap = {
      'Sảnh chung': this.tabSanhChung,
      'Reels': this.tabReels,
      'Nhóm': this.tabNhom,
      'Thông báo': this.tabThongBao,
    };
    await tabMap[tabName].click();
  }

  async searchFor(keyword: string) {
    await this.searchInput.click();
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
  }

  async openProfileMenu() {
    await this.profileIcon.click();
    await expect(this.logoutMenuOption).toBeVisible();
  }

  async logout() {
    await this.openProfileMenu();
    await this.logoutMenuOption.click();
    await expect(this.page).toHaveURL(/login/);
  }

  // --- Assertions ---

  async expectHeaderSticky() {
    const header = this.page.getByRole('banner');
    await expect(header).toBeVisible();
    const position = await header.evaluate((el) =>
      window.getComputedStyle(el).position
    );
    expect(['sticky', 'fixed']).toContain(position);
  }
}
