/**
 * cong-dong.page.ts
 * Page Object for HALL-FEED module (2.1) — Main Hall /cong-dong
 * Covers: TC_021–030
 *
 * ⚠️ LOCATORS = PLACEHOLDER — must be verified via UI Recon (Step 2) when app is deployed.
 */

import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CongDongPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // --- Feed ---

  get feedContainer() {
    return this.page.getByRole('feed');
  }

  get feedPosts() {
    return this.page.locator('[data-testid="post-item"]');
  }

  get loadingIndicator() {
    return this.page.getByText(/đang tải/i);
  }

  get networkErrorMessage() {
    return this.page.getByText(/không thể tải bài viết/i);
  }

  get retryButton() {
    return this.page.getByRole('button', { name: /thử lại/i });
  }

  // --- Post elements ---

  getPostByIndex(index: number) {
    return this.feedPosts.nth(index);
  }

  getPostTimestamp(postLocator: ReturnType<typeof this.getPostByIndex>) {
    return postLocator.locator('[data-testid="post-timestamp"]');
  }

  getLikeButton(postLocator: ReturnType<typeof this.getPostByIndex>) {
    return postLocator.getByRole('button', { name: /like|thích/i });
  }

  getCommentButton(postLocator: ReturnType<typeof this.getPostByIndex>) {
    return postLocator.getByRole('button', { name: /comment|bình luận/i });
  }

  getShareButton(postLocator: ReturnType<typeof this.getPostByIndex>) {
    return postLocator.getByRole('button', { name: /share|chia sẻ/i });
  }

  // --- Actions ---

  async goto() {
    await this.navigate('/cong-dong');
  }

  async scrollToBottom() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
  }

  async scrollAndLoadMore(times: number = 3) {
    for (let i = 0; i < times; i++) {
      const countBefore = await this.feedPosts.count();
      await this.scrollToBottom();
      await expect(this.feedPosts).toHaveCount(countBefore + 1, {
        timeout: 5000,
      });
    }
  }

  // --- Assertions ---

  async expectFeedLoaded(minPosts: number = 1) {
    await expect(this.feedPosts.first()).toBeVisible();
    const count = await this.feedPosts.count();
    expect(count).toBeGreaterThanOrEqual(minPosts);
  }

  async expectPostsSortedNewestFirst() {
    const timestamps: number[] = [];
    for (let i = 0; i < 3; i++) {
      const ts = await this.getPostTimestamp(this.getPostByIndex(i))
        .getAttribute('data-timestamp');
      if (ts) timestamps.push(Number(ts));
    }
    for (let i = 0; i < timestamps.length - 1; i++) {
      expect(timestamps[i]).toBeGreaterThanOrEqual(timestamps[i + 1]);
    }
  }
}
