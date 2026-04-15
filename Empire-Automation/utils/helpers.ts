/**
 * helpers.ts
 * Utility functions dùng chung trong test suite.
 */

import { Page } from '@playwright/test';

/**
 * Scroll trang theo từng bước nhỏ để trigger lazy loading / infinite scroll.
 */
export async function smoothScrollDown(page: Page, steps: number = 5, stepPx: number = 300) {
  for (let i = 0; i < steps; i++) {
    await page.evaluate((px) => window.scrollBy(0, px), stepPx);
    await page.waitForTimeout(100);
  }
}

/**
 * Check if an image element has loaded (naturalWidth > 0).
 */
export async function isImageLoaded(page: Page, selector: string): Promise<boolean> {
  return page.evaluate((sel) => {
    const img = document.querySelector(sel) as HTMLImageElement | null;
    return img ? img.naturalWidth > 0 : false;
  }, selector);
}

/**
 * Get the computed CSS position of an element (for sticky/fixed checks).
 */
export async function getCssPosition(page: Page, selector: string): Promise<string> {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    return el ? window.getComputedStyle(el).position : '';
  }, selector);
}

/**
 * Clear localStorage and sessionStorage (use in afterEach if needed).
 */
export async function clearBrowserStorage(page: Page) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}
