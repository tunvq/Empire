---
name: gen-automation-test
description: >
  Generate Playwright test automation from website exploration. Use this whenever the user wants to test a website, 
  explore a web page and create test cases from it, or convert user workflows into automated Playwright tests. 
  Triggers when users mention exploring a site to write tests, testing a specific URL, automating web interactions, 
  or generating test coverage for a web application. Generates test files (.spec.ts), page objects (.page.ts), 
  test plans, and screenshots documenting the exploration and test scenarios.
---
# Generate Automation Tests with Playwright CLI

🚀 **NEW:** Not sure how to prompt? Start here:
- **I'm not technical** → Read [QUICK-START.md](./QUICK-START.md) ⭐ **START HERE**
- **I know what I want** → Read [PROMPT-GUIDE.md](./PROMPT-GUIDE.md)
- **I just want to explore** → Send the URL + ask me to explore

---

Use this skill to explore websites interactively and generate comprehensive Playwright test cases automatically.
## Complete Workflow

### Before Starting the Workflow

Before generating tests, ask clarifying questions to understand the website and features you want to test. This ensures a more accurate test plan. Aim to be 95% confident about the requirements before proceeding.

### Step 1: Manual Test Case Documentation
Create a test plan documenting the manual test cases BEFORE generating code:
- **Test Name**: Descriptive name of what the test validates
- **URL**: Target page URL
- **Preconditions**: Initial state required
- **Steps**: Detailed user interaction steps
- **Expected Result**: What should happen after each interaction
- **Test Type**: Happy path / Edge case / Error scenario
**Example:**
```
Test: Verify Checkbox Toggle
URL: https://the-internet.herokuapp.com/checkboxes
Preconditions: Page loaded, checkboxes in default state
Steps:
  1. Navigate to checkboxes page
  2. Check first checkbox
  3. Verify first checkbox is checked
  4. Check second checkbox
  5. Verify second checkbox is checked
Expected Result: Both checkboxes are in checked state
```
### Before starting the step 2, make sure you have explored the website using Playwright CLI to understand the structure, elements, and interactions. This will help you create more accurate tests and page objects. DO NOT proceed to step 2 until you have a clear understanding of the website and test scenarios you want to automate.

### Step 2: Create Test Spec File (tests/*.spec.ts)
Generate initial test file with direct Playwright assertions:
- Import `@playwright/test`
- Navigate to URL in test
- Perform user interactions
- Add assertions for each action
- Use accessibility roles (`getByRole`) for element selection
**File location:** `tests/[feature].spec.ts`
**Example:**
```typescript
import { test, expect } from '@playwright/test';
test('Checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');  
    await page.getByRole('checkbox').first().check();
    await expect(page.getByRole('checkbox').first()).toBeChecked();
    await page.getByRole('checkbox').nth(1).check();
    await expect(page.getByRole('checkbox').nth(1)).toBeChecked();
});
```
### Step 3: Create Page Object File (tests/pages/*.page.ts)
Extract page-specific logic into reusable page object:
- Define page class with constructor taking `Page` instance
- Create `goto()` method for navigation
- Create action methods for user interactions (e.g., `checkFirstCheckbox()`)
- Create verification methods that return state (e.g., `isFirstCheckboxChecked()`)
- Use `getByRole()` for accessible element selection
**File location:** `tests/pages/[PageName].page.ts`
**Example:**
```typescript
import { expect, type Locator, type Page } from '@playwright/test';
export class CheckboxesPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }
    async checkFirstCheckbox() {
        await this.page.getByRole('checkbox').first().check();
    }
    async checkSecondCheckbox() {
        await this.page.getByRole('checkbox').nth(1).check();
    }
    async isFirstCheckboxChecked() {
        return await this.page.getByRole('checkbox').first().isChecked();
    }
    async isSecondCheckboxChecked() {
        return await this.page.getByRole('checkbox').nth(1).isChecked();
    }
}
```
### Step 4: Create Fixture File (tests/fixtures/the-internet.fixture.ts)
Create custom test fixture to inject page objects:
- Import `test as base` from `@playwright/test`
- Import all page object classes
- Define fixture type with all page objects
- Extend base test with custom fixtures
- Each fixture initializes page object and provides it to tests
**File location:** `tests/fixtures/the-internet.fixture.ts`
**Example:**
```typescript
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CheckboxesPage } from '../pages/checkboxes.page';
import { TablePage } from '../pages/table.page';
import { ContextClickPage } from '../pages/contextClick.page'; 
import { DragDropPage } from '../pages/dragDrop.page';
import { DropdownPage } from '../pages/dropdown.page';
type TheInternetFixtures = {
    loginPage: LoginPage,
    checkboxesPage: CheckboxesPage,
    tablePage: TablePage,
    dropdownPage: DropdownPage,
    dragDropPage: DragDropPage, 
    contextClickPage: ContextClickPage
}
export const test = base.extend<TheInternetFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    checkboxesPage: async ({ page }, use) => {
        const checkboxesPage = new CheckboxesPage(page);
        await use(checkboxesPage);
    },
    tablePage: async ({ page }, use) => {
        const tablePage = new TablePage(page);
        await use(tablePage);
    },
    contextClickPage: async ({ page }, use) => {
        const contextClickPage = new ContextClickPage(page);
        await use(contextClickPage);
    },
    dragDropPage: async ({ page }, use) => {
        const dragDropPage = new DragDropPage(page);
        await use(dragDropPage);
    },
    dropdownPage: async ({ page }, use) => {
        const dropdownPage = new DropdownPage(page);
        await use(dropdownPage);   
    }
});
export { expect } from '@playwright/test';
```
### Step 5: Update Test Spec to Use Fixtures
Refactor test file to use custom fixtures instead of direct page manipulation:
- DO NOT create a new file, update existing `tests/[feature].spec.ts` created in Step 2
- Import `test` and `expect` from fixture file
- Use fixture-injected page objects as test parameters
- Replace direct page interactions with page object methods
- Tests become more readable and maintainable
**Updated example:**
```typescript
import { test, expect } from './fixtures/the-internet.fixture';
test('verify able to check the checkbox', async ({ checkboxesPage }) => {
    await checkboxesPage.goto();
    await checkboxesPage.checkFirstCheckbox();
    await checkboxesPage.checkSecondCheckbox();
    expect(await checkboxesPage.isFirstCheckboxChecked()).toBe(true);
    expect(await checkboxesPage.isSecondCheckboxChecked()).toBe(true);
});
```
### Step 6: Run and Fix Until Tests Pass
Execute tests and fix any issues:
- Run: `npx playwright test tests/[feature].spec.ts`
- Review test output and error messages
- Adjust selectors if elements not found
- Fix timing issues with waits
- Update page object methods if needed
- Verify all assertions pass
- Check test execution in headed mode: `npx playwright test --headed`
**Common fixes:**
- Element not found: Update selector in page object
- Timeout: Add explicit waits or adjust timeout
- State assertion fails: Verify initial page state before interactions
- Flaky tests: Add wait conditions or explicit waits

### Step 7: Verify Test Coverage and Maintainability
After tests run successfully, verify that your test suite is complete and maintainable:
- [ ] All assertions pass consistently (no flaky tests)
- [ ] Tests run against the correct URL/page
- [ ] Page objects are reusable across multiple test cases
- [ ] Fixtures properly initialize all required page objects
- [ ] Test names describe user workflows (not implementation)
- [ ] No assertions appear in page objects (only in test files)
- [ ] Tests cover both happy path and error scenarios
- [ ] Each page object has clear `goto()`, action, and verification methods

If any checks fail, return to Steps 2-5 and refactor before considering tests production-ready.

## Best Practices
1. **Use accessibility roles** when clicking/filling/selecting (e.g., `getByRole('button', { name: 'Submit' })`)
   - Prefer `getByRole()` → `getByLabel()` → `getByPlaceholder()` → `getByText()` → `locator()`
   
2. **Page Object Pattern**
   - Keep page objects focused on single page
   - Methods return page state or void
   - No assertions in page objects (only in tests)
   
3. **Fixture Pattern**
   - Centralize page object initialization
   - DRY principle - avoid duplicating page instantiation
   - Easy to add new page objects
   
4. **Test Naming**
   - Describe user intent: `'verify able to check the checkbox'`
   - Avoid implementation details: `'should click checkbox element'`
   
5. **Test Structure**
   - Arrange (setup/navigate)
   - Act (perform user interaction)
   - Assert (verify expected outcome)
   
6. **Error Handling**
   - Document flaky or skipped tests
   - Add retry logic only for legitimate timing issues
   - Use explicit waits sparingly

7. **Authentication & Session Handling**
   - Create a dedicated `LoginPage` page object for login workflows
   - Store authentication tokens in fixtures if tests need pre-authenticated sessions
   - **Example:**
   ```typescript
   export class LoginPage {
       readonly page: Page;
       constructor(page: Page) { this.page = page; }

       async goto() {
           await this.page.goto('https://example.com/login');
       }

       async login(username: string, password: string) {
           await this.page.getByLabel('Email').fill(username);
           await this.page.getByLabel('Password').fill(password);
           await this.page.getByRole('button', { name: 'Sign In' }).click();
           await this.page.waitForURL('**/dashboard');
       }

       async isLoggedIn() {
           return await this.page.getByRole('button', { name: 'Logout' }).isVisible();
       }
   }
   ```
   - Use fixtures to handle login once before tests run (avoid repeating login in every test)
   - For API-based authentication, store token in fixture context and pass to page initialization

## About Playwright CLI vs Playwright Test

This skill uses **two complementary tools**:

1. **Playwright CLI** - For interactive website exploration
   - Explore pages manually and capture element references
   - Run JavaScript to verify page state
   - Take screenshots to document workflows
   - Generate visual reference of website structure

2. **Playwright Test Framework** - For automated test generation
   - Generates `.spec.ts` files with structured tests
   - Uses page objects and fixtures for maintainability
   - Integrates with CI/CD pipelines
   - Provides detailed test reports

**Workflow:** Use Playwright CLI first to explore and understand the website, then generate `.spec.ts` tests based on your discoveries.

## Commands Reference
### Test Execution
```bash
npx playwright test tests/[feature].spec.ts                    # Run specific test
npx playwright test --headed                                   # Run in headed mode (see browser)
npx playwright test --debug                                    # Debug mode with Inspector
npx playwright test --grep "test name pattern"                # Run tests matching pattern
```

### Website Exploration (using Playwright CLI)
Use Playwright CLI to explore the website BEFORE generating tests:
```bash
playwright-cli open https://example.com                       # Start interactive exploration
playwright-cli snapshot                                       # Capture element references and accessibility tree
playwright-cli eval "document.querySelectorAll('button')"     # Run JavaScript to inspect elements
playwright-cli screenshot                                     # Take screenshot of current page state
playwright-cli navigate https://example.com/page2            # Navigate to different pages
playwright-cli close                                          # Close browser
```
**Example workflow:**
1. `playwright-cli open https://example.com/login` - Open site
2. `playwright-cli snapshot` - See available elements
3. `playwright-cli eval "document.title"` - Check page title
4. `playwright-cli screenshot` - Document login form
5. Note down element selectors and interactions
6. Use findings to create `.spec.ts` tests

### Element Inspection (using playwright-cli)
## File Structure
```
tests/[domain]
├── [feature].spec.ts              # Main test file using fixtures
├── pages/
│   ├── [PageName].page.ts         # Page object for single page
│   ├── [AnotherPage].page.ts
│   └── [ThirdPage].page.ts
└── fixtures/
    └── [domain].fixture.ts        # Custom test fixture with multiple page objects
```

## Advanced Example: Multi-Page Workflow (E-Commerce)

This example demonstrates testing a complete shopping workflow: Browse Products → Add to Cart → Checkout → Order Confirmation.

### Page Objects

**ProductPage.page.ts**
```typescript
export class ProductPage {
    readonly page: Page;
    constructor(page: Page) { this.page = page; }

    async goto() {
        await this.page.goto('https://example-shop.com/products');
        await this.page.waitForLoadState('networkidle');
    }

    async selectProduct(productName: string) {
        await this.page.getByRole('link', { name: productName }).click();
    }

    async getProductPrice(productName: string) {
        const product = this.page.locator(`text=${productName}`).locator('..');
        return await product.locator('.price').textContent();
    }

    async addToCart() {
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
        await this.page.waitForURL('**/cart');
    }
}
```

**CartPage.page.ts**
```typescript
export class CartPage {
    readonly page: Page;
    constructor(page: Page) { this.page = page; }

    async goto() {
        await this.page.goto('https://example-shop.com/cart');
    }

    async getCartItemCount() {
        return parseInt(await this.page.locator('[data-testid="cart-count"]').textContent() || '0');
    }

    async removeItem(productName: string) {
        const item = this.page.locator(`text=${productName}`).locator('..');
        await item.locator('button:has-text("Remove")').click();
    }

    async proceedToCheckout() {
        await this.page.getByRole('button', { name: 'Proceed to Checkout' }).click();
        await this.page.waitForURL('**/checkout');
    }

    async getTotal() {
        return await this.page.locator('[data-testid="total-price"]').textContent();
    }
}
```

**CheckoutPage.page.ts**
```typescript
export class CheckoutPage {
    readonly page: Page;
    constructor(page: Page) { this.page = page; }

    async goto() {
        await this.page.goto('https://example-shop.com/checkout');
    }

    async fillShippingInfo(address: string, city: string, zipcode: string) {
        await this.page.getByLabel('Address').fill(address);
        await this.page.getByLabel('City').fill(city);
        await this.page.getByLabel('Zipcode').fill(zipcode);
    }

    async selectShippingMethod(method: string) {
        await this.page.getByLabel(method).click();
    }

    async placeOrder() {
        await this.page.getByRole('button', { name: 'Place Order' }).click();
        await this.page.waitForURL('**/confirmation');
    }
}
```

**ConfirmationPage.page.ts**
```typescript
export class ConfirmationPage {
    readonly page: Page;
    constructor(page: Page) { this.page = page; }

    async getOrderNumber() {
        return await this.page.locator('[data-testid="order-number"]').textContent();
    }

    async getOrderStatus() {
        return await this.page.locator('[data-testid="order-status"]').textContent();
    }

    async isSuccessMessageVisible() {
        return await this.page.getByText('Your order has been confirmed').isVisible();
    }
}
```

### Fixture File

**ecommerce.fixture.ts**
```typescript
import { test as base } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage.page';
import { CartPage } from '../pages/CartPage.page';
import { CheckoutPage } from '../pages/CheckoutPage.page';
import { ConfirmationPage } from '../pages/ConfirmationPage.page';

type EcommerceFixtures = {
    productPage: ProductPage,
    cartPage: CartPage,
    checkoutPage: CheckoutPage,
    confirmationPage: ConfirmationPage
};

export const test = base.extend<EcommerceFixtures>({
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },
    confirmationPage: async ({ page }, use) => {
        const confirmationPage = new ConfirmationPage(page);
        await use(confirmationPage);
    }
});

export { expect } from '@playwright/test';
```

### Test File

**ecommerce.spec.ts**
```typescript
import { test, expect } from '../fixtures/ecommerce.fixture';

test.describe('E-Commerce Shopping Flow', () => {
    test('should complete purchase successfully', async ({ productPage, cartPage, checkoutPage, confirmationPage }) => {
        // Navigate to products
        await productPage.goto();
        
        // Select and add product to cart
        await productPage.selectProduct('Wireless Headphones');
        const price = await productPage.getProductPrice('Wireless Headphones');
        await productPage.addToCart();
        
        // Verify item in cart
        expect(await cartPage.getCartItemCount()).toBe(1);
        const total = await cartPage.getTotal();
        expect(total).toContain('$');
        
        // Proceed to checkout
        await cartPage.proceedToCheckout();
        
        // Fill shipping information
        await checkoutPage.fillShippingInfo('123 Main St', 'San Francisco', '94102');
        await checkoutPage.selectShippingMethod('Standard');
        await checkoutPage.placeOrder();
        
        // Verify order confirmation
        expect(await confirmationPage.isSuccessMessageVisible()).toBe(true);
        const orderNumber = await confirmationPage.getOrderNumber();
        expect(orderNumber).toBeTruthy();
    });

    test('should allow removing items from cart', async ({ productPage, cartPage }) => {
        await productPage.goto();
        await productPage.selectProduct('USB Cable');
        await productPage.addToCart();
        
        expect(await cartPage.getCartItemCount()).toBe(1);
        
        await cartPage.removeItem('USB Cable');
        expect(await cartPage.getCartItemCount()).toBe(0);
    });
});
```

**Key Patterns in this example:**
- ✅ Multiple page objects coordinate to test a workflow
- ✅ Each page object handles only its own page
- ✅ Test file orchestrates the workflow using all page objects
- ✅ Page methods return data or void (no assertions in page objects)
- ✅ Fixtures inject all page objects at once
- ✅ Tests are readable and describe user intent

## File Structure
## Troubleshooting
**Test fails with "element not found"**
- Verify URL is correct
- Check element selector in page object
- Run in debug mode: `npx playwright test --debug`
- Use snapshot to verify element references
**Test times out**
- Increase timeout: `test.setTimeout(60000)` (60 seconds)
- Verify page navigation completed
- Add explicit wait if needed: `await page.waitForLoadState()`
**Flaky tests**
- Add explicit waits for state changes
- Avoid short sleep waits (`sleep(1000)`)
- Verify test doesn't have race conditions

## References
- [Playwright page object model](https://playwright.dev/docs/pom)
- [Playwright Test Fixtures](https://playwright.dev/docs/test-fixtures) 
- [Playwright locator strategies](https://playwright.dev/docs/locators)