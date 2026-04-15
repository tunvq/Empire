/**
 * nav-sidebar.page.ts
 * Page Object for NAV-SIDEBAR module (1.2)
 * Covers: TC_010–020
 *
 * ⚠️ LOCATORS = PLACEHOLDER — must be verified via UI Recon (Step 2) when app is deployed.
 */

import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class NavSidebarPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // --- Sidebar sections ---

  get sidebarContainer() {
    return this.page.locator('[data-testid="sidebar"]');
  }

  get friendsSection() {
    return this.page.getByRole('region', { name: /bạn bè/i });
  }

  get suggestedGroupsSection() {
    return this.page.getByRole('region', { name: /nhóm đề xuất/i });
  }

  get followersSection() {
    return this.page.getByRole('region', { name: /người theo dõi/i });
  }

  // --- Friends ---

  get friendItems() {
    return this.friendsSection.locator('[data-testid="friend-item"]');
  }

  getFriendByName(name: string) {
    return this.friendsSection.getByRole('link', { name });
  }

  // --- Suggested Groups ---

  get suggestedGroupItems() {
    return this.suggestedGroupsSection.locator('[data-testid="group-item"]');
  }

  getJoinButton(groupName: string) {
    return this.suggestedGroupsSection
      .getByRole('listitem')
      .filter({ hasText: groupName })
      .getByRole('button', { name: 'Tham gia' });
  }

  getJoinedLabel(groupName: string) {
    return this.suggestedGroupsSection
      .getByRole('listitem')
      .filter({ hasText: groupName })
      .getByText('Đã tham gia');
  }

  // --- Followers ---

  get followerItems() {
    return this.followersSection.locator('[data-testid="follower-item"]');
  }

  getFollowBackButton(name: string) {
    return this.followersSection
      .getByRole('listitem')
      .filter({ hasText: name })
      .getByRole('button', { name: 'Theo dõi' });
  }

  // --- Mobile drawer ---

  get hamburgerButton() {
    return this.page.getByRole('button', { name: /menu|hamburger/i });
  }

  get drawerOverlay() {
    return this.page.locator('[data-testid="sidebar-drawer"]');
  }

  // --- Actions ---

  async joinGroup(groupName: string) {
    await this.getJoinButton(groupName).click();
    await expect(this.getJoinedLabel(groupName)).toBeVisible();
  }

  async clickFriend(name: string) {
    await this.getFriendByName(name).click();
  }

  async openMobileDrawer() {
    await this.hamburgerButton.click();
    await expect(this.drawerOverlay).toBeVisible();
  }

  // --- Assertions ---

  async expectFriendsCount(min: number, max: number) {
    const count = await this.friendItems.count();
    expect(count).toBeGreaterThanOrEqual(min);
    expect(count).toBeLessThanOrEqual(max);
  }

  async expectSuggestedGroupsCount(min: number, max: number) {
    const count = await this.suggestedGroupItems.count();
    expect(count).toBeGreaterThanOrEqual(min);
    expect(count).toBeLessThanOrEqual(max);
  }
}
