/**
 * nav-header.spec.ts
 * Module: NAV-HEADER (1.1) — CongDong
 * TCs: EMPIRE_TC_001 – EMPIRE_TC_009
 *
 * Pre-condition: User đã logged in (via auth.setup.ts → storageState).
 */

import { test, expect } from '../../fixtures/base.fixture';

test.describe('NAV-HEADER (1.1)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cong-dong');
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_001 — Tab switching | Priority: HIGH
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_001 — User can switch between four main tabs', async ({ navHeaderPage, page }) => {
    await expect(navHeaderPage.tabSanhChung).toBeVisible();
    await expect(navHeaderPage.tabReels).toBeVisible();
    await expect(navHeaderPage.tabNhom).toBeVisible();
    await expect(navHeaderPage.tabThongBao).toBeVisible();

    await navHeaderPage.clickTab('Reels');
    await expect(page).toHaveURL(/\/cong-dong\/reels/);

    await navHeaderPage.clickTab('Nhóm');
    await expect(page).toHaveURL(/\/cong-dong\/groups/);
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_002 — Search from header | Priority: MEDIUM
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_002 — User can search posts from header search box', async ({ navHeaderPage }) => {
    await navHeaderPage.searchFor('Python');
    await expect(navHeaderPage.page.getByText(/Python/i).first()).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_003 — Profile menu | Priority: MEDIUM
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_003 — Profile icon visible; clicking opens profile menu', async ({ navHeaderPage }) => {
    await expect(navHeaderPage.profileIcon).toBeVisible();
    await navHeaderPage.openProfileMenu();
    await expect(navHeaderPage.profileMenuOption).toBeVisible();
    await expect(navHeaderPage.settingsMenuOption).toBeVisible();
    await expect(navHeaderPage.logoutMenuOption).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_004 — Logout | Priority: MEDIUM
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_004 — User can logout from profile menu', async ({ navHeaderPage, page }) => {
    await navHeaderPage.logout();
    await expect(page).toHaveURL(/login/);

    await page.goto('/cong-dong');
    await expect(page).toHaveURL(/login/);
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_005 — Notification badge | Priority: LOW
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_005 — Notification badge shows unread count', async ({ navHeaderPage }) => {
    const badge = navHeaderPage.notificationBadge;
    const badgeVisible = await badge.isVisible().catch(() => false);
    if (badgeVisible) {
      const badgeText = await badge.textContent();
      expect(Number(badgeText)).toBeGreaterThan(0);
    }
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_007 — Sticky header | Priority: LOW
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_007 — Header remains sticky when scrolling', async ({ navHeaderPage, page }) => {
    await page.evaluate(() => window.scrollBy(0, 1000));
    await navHeaderPage.expectHeaderSticky();
    await expect(navHeaderPage.tabSanhChung).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_008 — Responsive header on mobile | Priority: LOW @mobile
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_008 — Header adapts on mobile viewport @mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/cong-dong');

    const headerWidth = await page.getByRole('banner').evaluate(
      (el) => el.getBoundingClientRect().width
    );
    expect(headerWidth).toBeLessThanOrEqual(375);
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_009 — Logo/home button | Priority: LOW
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_009 — Logo navigates to /cong-dong', async ({ navHeaderPage, page }) => {
    await page.goto('/cong-dong/reels');
    await navHeaderPage.logoLink.click();
    await expect(page).toHaveURL(/\/cong-dong$/);
  });
});
