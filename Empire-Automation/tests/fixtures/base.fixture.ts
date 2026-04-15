/**
 * base.fixture.ts
 * Extends Playwright's base test với shared page object instances.
 * Import { test, expect } từ file này trong tất cả spec files.
 */

import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { CongDongPage } from '../../pages/cong-dong.page';
import { NavHeaderPage } from '../../pages/nav-header.page';
import { NavSidebarPage } from '../../pages/nav-sidebar.page';

type EmpireFixtures = {
  loginPage: LoginPage;
  congDongPage: CongDongPage;
  navHeaderPage: NavHeaderPage;
  navSidebarPage: NavSidebarPage;
};

export const test = base.extend<EmpireFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  congDongPage: async ({ page }, use) => {
    await use(new CongDongPage(page));
  },
  navHeaderPage: async ({ page }, use) => {
    await use(new NavHeaderPage(page));
  },
  navSidebarPage: async ({ page }, use) => {
    await use(new NavSidebarPage(page));
  },
});

export { expect };
