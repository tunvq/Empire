# Empire Automation — Hướng dẫn cho Claude

## Mục đích workspace này

Playwright TypeScript automation suite cho dự án Empire.
Mỗi manual test case trong `../empire-community-test-cases/` có một test script tương ứng tại đây.

---

## Cấu trúc thư mục

```
Empire-Automation/
├── playwright.config.ts          # Config chính — base URL, viewport, reporters
├── .env.example                  # Template env vars — copy sang .env và điền credentials
├── tests/
│   ├── fixtures/
│   │   ├── auth.setup.ts         # Login một lần, lưu storage state
│   │   ├── base.fixture.ts       # Extend test với page object instances
│   │   └── .auth/                # Auto-generated — KHÔNG commit vào git
│   ├── pages/                    # Page Object Model
│   │   ├── base.page.ts          # Base class — navigate, viewport helpers
│   │   ├── login.page.ts         # /login
│   │   ├── nav-header.page.ts    # NAV-HEADER module (TC_001-009)
│   │   ├── nav-sidebar.page.ts   # NAV-SIDEBAR module (TC_010-020)
│   │   └── cong-dong.page.ts     # HALL-FEED module (TC_021-030)
│   ├── specs/                    # Test files — 1 file per module
│   │   ├── nav-header/
│   │   │   └── nav-header.spec.ts
│   │   └── hall-feed/
│   │       └── hall-feed.spec.ts
│   └── utils/
│       └── helpers.ts            # Scroll helpers, image checks...
└── test-data/
    └── users.ts                  # Non-sensitive test data
```

---

## Workflow: Transform Manual TC → Playwright Test Script

Khi tui đưa cho mày một hoặc nhiều manual test cases, hãy làm theo đúng các bước sau:

### Bước 1 — Xác định module và file đích

| Module trong TC | Page Object | Spec file |
|----------------|-------------|-----------|
| NAV-HEADER (1.1) | `tests/pages/nav-header.page.ts` | `tests/specs/nav-header/nav-header.spec.ts` |
| NAV-SIDEBAR (1.2) | `tests/pages/nav-sidebar.page.ts` | `tests/specs/nav-sidebar/nav-sidebar.spec.ts` |
| HALL-FEED (2.1) | `tests/pages/cong-dong.page.ts` | `tests/specs/hall-feed/hall-feed.spec.ts` |
| Module mới | Tạo `tests/pages/[module].page.ts` mới | Tạo `tests/specs/[module]/[module].spec.ts` mới |

### Bước 2 — Map cấu trúc TC sang test block

```
TC_ID         → tên test: 'EMPIRE_TC_XXX — [Test Title]'
Module        → test.describe('[Module Name]')
Pre-Condition → test.beforeEach() hoặc comment trong test
Test Steps    → Các action trong test body (click, fill, goto)
Expected      → expect() assertions
Priority HIGH → Ưu tiên viết trước; Priority LOW → có thể skip/stub
Test Data     → Lấy từ test-data/ hoặc khai báo inline trong test
```

### Bước 3 — Quy tắc bắt buộc khi viết test

1. **Locator priority** (theo thứ tự):
   - `getByRole()` → `getByLabel()` → `getByPlaceholder()` → `getByText()` → `getByTestId()` → css fallback
   - TUYỆT ĐỐI KHÔNG dùng XPath hoặc CSS fragile (positional, auto-generated class)

2. **Wait strategy**:
   - Dùng `expect(locator).toBeVisible()` — KHÔNG dùng `waitForTimeout()`
   - Dùng `expect(page).toHaveURL()` để chờ navigation

3. **Viewport**:
   - Default: 1920x1080 (đã set trong config)
   - Responsive test: tag `@mobile` → sẽ chạy với `mobile-chrome` project

4. **Import**:
   ```typescript
   import { test, expect } from '../../fixtures/base.fixture';
   ```

5. **Một TC = Một test block** — KHÔNG gộp nhiều TC vào 1 test

### Bước 4 — Nếu cần locator mới trong Page Object

Khi TC yêu cầu tương tác với element chưa có trong page object:
1. Thêm locator getter vào đúng `tests/pages/[module].page.ts`
2. Thêm action method nếu sequence phức tạp
3. Thêm assertion method nếu expect() lặp lại nhiều test

### Bước 5 — Thêm module mới (chưa có page object)

```
[ ] Tạo tests/pages/[module].page.ts — extend BasePage
[ ] Tạo tests/specs/[module]/[module].spec.ts
[ ] Update base.fixture.ts — thêm fixture cho page object mới
[ ] Update bảng module ở trên
```

---

## Setup lần đầu

```bash
cd Empire-Automation

# 1. Install dependencies
npm install

# 2. Install browsers
npx playwright install chromium

# 3. Copy env và điền credentials
cp .env.example .env
# → edit .env: BASE_URL, TEST_USER_EMAIL, TEST_USER_PASSWORD

# 4. Chạy auth setup (tạo storage state)
npx playwright test --project=setup

# 5. Chạy toàn bộ tests
npm test

# 6. Xem report
npm run test:report
```

---

## Chạy test theo module

```bash
# Chỉ chạy NAV-HEADER
npx playwright test nav-header

# Chỉ chạy HALL-FEED
npx playwright test hall-feed

# Chạy với tag
npx playwright test --grep "@mobile"

# Headed mode (xem browser)
npm run test:headed

# Debug một test cụ thể
npx playwright test nav-header.spec.ts --debug
```

---

## Quy ước đặt tên

| Loại | Convention | Ví dụ |
|------|-----------|-------|
| Spec file | `[module-code].spec.ts` | `nav-header.spec.ts` |
| Page Object | `[module-code].page.ts` | `nav-header.page.ts` |
| Test name | `EMPIRE_TC_XXX — [title]` | `EMPIRE_TC_001 — User can switch tabs` |
| describe block | `[Module] ([code])` | `NAV-HEADER (1.1)` |
| Mobile test | Thêm tag `@mobile` vào tên | `... @mobile` |

---

## Locators chưa verify (cần update sau khi chạy thực tế)

Các locator sau được viết dựa trên expected DOM — cần verify lại với app thực:

- `nav-header.page.ts` → `profileIcon`: tên button có thể khác
- `nav-header.page.ts` → `notificationBadge`: selector `[data-testid="notification-badge"]` cần confirm
- `cong-dong.page.ts` → `feedPosts`: selector `[data-testid="post-item"]` cần confirm
- `nav-sidebar.page.ts` → tất cả `data-testid` selectors

Sau khi chạy headed lần đầu, dùng `npx playwright codegen [BASE_URL]/cong-dong` để capture locators thực tế.
