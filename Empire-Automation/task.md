# task.md — Empire Automation Progress Tracker

> File này track tiến độ 6 bước workflow theo `plans/automation/` trong `antigravity-testing-kit`.  
> Update checklist khi hoàn thành từng bước.

---

## Thông tin dự án

| | |
|---|---|
| **Project** | Empire — Cộng Đồng module |
| **Framework** | Playwright TypeScript |
| **Test Runner** | @playwright/test |
| **Reporter** | HTML (reports/) + JSON (temp_reports/) |
| **Base URL** | TBD — chờ dev deploy |
| **Test Account** | demo@empire.io.vn (set trong .env) |

---

## Checklist 6 bước

### ✅ Bước 0 — Project Architecture
- [x] Folder structure tạo theo spec (`pages/`, `utils/`, `tests/`, `test_data/`, `temp/`, `temp_reports/`, `reports/`)
- [x] `playwright.config.ts` — viewport 1920x1080, headed local, headless CI
- [x] `tsconfig.json` — strict TypeScript + path aliases
- [x] `.env.example` — template credentials
- [x] `.gitignore` — bảo vệ `.env` và auth state
- [x] `node_modules` installed (`npm install`)
- [x] Playwright MCP configured trong `.mcp.json`

### ✅ Bước 1 — Context & Role-play
- [x] Framework: Playwright TypeScript
- [x] Pattern: Page Object Model
- [x] Locator priority: getByRole > getByLabel > getByPlaceholder > getByTestId > CSS
- [x] Wait strategy: auto-waiting + expect assertions (no waitForTimeout)
- [x] Base Page Objects tạo sẵn cho các modules đã biết

### ⏳ Bước 2 — Analysis & UI Recon (BLOCKED — chờ app deploy)
- [ ] App URL available
- [ ] Playwright MCP mở browser → navigate đến `/login`
- [ ] Thu thập locators thật từ DOM (Accessibility Tree)
- [ ] Fill locators vào page objects (replace placeholder)
- [ ] User review bảng locators → confirm

**Modules cần recon:**
| Module | Page Object | Status |
|--------|-------------|--------|
| NAV-HEADER (1.1) | `pages/nav-header.page.ts` | ⏳ Placeholder |
| NAV-SIDEBAR (1.2) | `pages/nav-sidebar.page.ts` | ⏳ Placeholder |
| HALL-FEED (2.1) | `pages/cong-dong.page.ts` | ⏳ Placeholder |
| Login | `pages/login.page.ts` | ⏳ Placeholder |

### ⏳ Bước 3 — POM Design (BLOCKED — chờ Bước 2)
- [ ] Verify POM classes sau khi có locators thật
- [ ] Thêm methods còn thiếu theo TC steps
- [ ] User review POM architecture

### ✅ Bước 4 — Test Data Strategy
- [x] `utils/data-generator.ts` — DataGenerator class
  - [x] `email(testName)` — unique traceable email
  - [x] `username(testName)` — unique traceable username
  - [x] `password()` — strong password
  - [x] `phoneVN()` — VN phone format
  - [x] `postContent(topic)` — unique post text
  - [x] `userProfile(testName)` — full profile object
- [x] `test_data/users.ts` — static reference data

### ⏳ Bước 5 — Script Generation (BLOCKED — chờ Bước 2 + 3)
- [ ] `tests/nav-header/nav-header.spec.ts` — TC_001–009 (stubs ready, locators TBD)
- [ ] `tests/hall-feed/hall-feed.spec.ts` — TC_021–030 (stubs ready, locators TBD)
- [ ] `tests/nav-sidebar/nav-sidebar.spec.ts` — TC_010–020 (chưa tạo)
- [ ] Tất cả tests PASS trên headed mode
- [ ] Self-fix loop complete

### ⏳ Bước 6 — Review & Refactoring (BLOCKED — chờ Bước 5)
- [ ] Xóa debug artifacts (console.log, comments thừa)
- [ ] Code quality check
- [ ] CI/CD readiness check
- [ ] Final clean code

---

## Commands nhanh

```bash
# Install + setup
npm install
npx playwright install chromium
cp .env.example .env        # → điền BASE_URL + credentials

# Auth setup (chạy 1 lần sau khi có app URL)
npx playwright test --project=setup

# Chạy tất cả
npm test

# Chạy theo module
npx playwright test nav-header
npx playwright test hall-feed

# Headed debug
npm run test:headed

# Xem report
npm run test:report         # → mở reports/index.html
```

---

## Ghi chú

| Ngày | Ghi chú |
|------|---------|
| 2026-04-15 | Khởi tạo project structure, hoàn thành Bước 0, 1, 4 |
| TBD | Bước 2 — sau khi app deploy |
