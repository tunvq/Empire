/**
 * hall-feed.spec.ts
 * Module: HALL-FEED (2.1) — CongDong
 * TCs: EMPIRE_TC_021 – EMPIRE_TC_030
 *
 * Pre-condition: User đã logged in (via auth.setup.ts → storageState).
 */

import { test, expect } from '../../fixtures/base.fixture';

test.describe('HALL-FEED (2.1)', () => {
  test.beforeEach(async ({ congDongPage }) => {
    await congDongPage.goto();
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_021 — Posts sorted newest first | Priority: HIGH
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_021 — Feed displays posts sorted by newest first', async ({ congDongPage }) => {
    await congDongPage.expectFeedLoaded(20);
    await congDongPage.expectPostsSortedNewestFirst();
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_022 — Infinite scroll | Priority: HIGH
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_022 — Feed implements infinite scroll', async ({ congDongPage }) => {
    const initialCount = await congDongPage.feedPosts.count();
    expect(initialCount).toBeGreaterThanOrEqual(1);

    await congDongPage.scrollAndLoadMore(2);

    const newCount = await congDongPage.feedPosts.count();
    expect(newCount).toBeGreaterThan(initialCount);
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_025 — Media types display | Priority: HIGH
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_025 — Posts can display text, images, and videos', async ({ congDongPage }) => {
    const images = congDongPage.page.locator('[data-testid="post-item"] img');
    const imageCount = await images.count();
    if (imageCount > 0) {
      for (let i = 0; i < Math.min(imageCount, 5); i++) {
        const naturalWidth = await images.nth(i).evaluate(
          (img: HTMLImageElement) => img.naturalWidth
        );
        expect(naturalWidth).toBeGreaterThan(0);
      }
    }
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_027 — Like/comment/share counts | Priority: MEDIUM
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_027 — Posts display like, comment, share counts', async ({ congDongPage }) => {
    const firstPost = congDongPage.getPostByIndex(0);
    await expect(congDongPage.getLikeButton(firstPost)).toBeVisible();
    await expect(congDongPage.getCommentButton(firstPost)).toBeVisible();
    await expect(congDongPage.getShareButton(firstPost)).toBeVisible();
  });

  // ---------------------------------------------------------------------------
  // EMPIRE_TC_030 — Network error handling | Priority: MEDIUM
  // ---------------------------------------------------------------------------
  test('EMPIRE_TC_030 — Network error shows message with Retry button', async ({ congDongPage, page }) => {
    await page.context().setOffline(true);
    await page.reload();

    await expect(congDongPage.networkErrorMessage).toBeVisible();
    await expect(congDongPage.retryButton).toBeVisible();

    await page.context().setOffline(false);
    await congDongPage.retryButton.click();
    await congDongPage.expectFeedLoaded(1);
  });
});
