# How to Prompt gen-automation-test Skill for Best Results

This guide explains how to structure your prompts to get the most out of the `gen-automation-test` skill.

---

## 🚀 QUICK START OPTIONS (Pick One)

### **Option 1: I'm Not Technical - Simple Mode** ⭐
If you don't know technical terms or UI selectors, use this:

```
Test the [feature name] on [URL].

What should happen:
1. [User does something]
2. [Another action]
3. [What the user sees as success]

Can you explore the page first and tell me what buttons/forms you find?
Then I'll describe them in simple terms.
```

**That's it!** The skill will:
- Explore the page for you
- Show you what it found (buttons, forms, etc.)
- Ask you to describe them simply
- Generate tests automatically

---

### **Option 2: I Want Maximum Control - Full Form** 
Use the structured form later in this guide if you want detailed control.

---

### **Option 3: Fastest - Just Send URL & Feature**
```
Please explore https://example.com/login and create tests for the login process.
```

That's all! The skill will:
- Discover elements automatically
- Ask clarifying questions
- Build tests based on your answers

---

## 📱 How to Describe UI Elements (NON-TECHNICAL)

**You DON'T need to know technical terms!** Just describe what you see:

### **Buttons** (Just describe what it says)
❌ **Tech way:** "Button: role='button', name='Sign In', primary button"  
✅ **Simple way:** "A blue button that says 'Sign In'"  
✅ **Even simpler:** "The Sign In button"  

### **Text Input Fields** (Just say what text goes there)
❌ **Tech way:** "Input field with aria-label='Email', type='email'"  
✅ **Simple way:** "Where you type your email address"  
✅ **Even simpler:** "The email box"  

### **Checkboxes** (Just describe the label)
❌ **Tech way:** "Checkbox: role='checkbox', aria-checked='false'"  
✅ **Simple way:** "A checkbox that says 'Remember Me'"  
✅ **Even simpler:** "Remember Me checkbox"  

### **Dropdown/Select** (What does it control?)
❌ **Tech way:** "Select element with options: ['Standard', 'Express', 'Overnight']"  
✅ **Simple way:** "A dropdown where you pick shipping speed"  
✅ **Even simpler:** "The shipping method dropdown"  

### **Links** (Where does it go?)
❌ **Tech way:** "Link: href='/reset-password', role='link'"  
✅ **Simple way:** "A link that says 'Forgot password?' (takes you to reset page)"  
✅ **Even simpler:** "The 'Forgot password?' link"  

---

### **Real Example: How to Describe Forms Simply**

**Website:** Contact form at https://example.com/contact

**You don't need to say:**
```
- Input field (type="text", id="name", placeholder="Full Name")
- Input field (type="email", id="email", aria-label="Email Address")
- Textarea (id="message", rows="5")
- Button (type="submit", role="button", text="Send")
```

**Just say:**
```
Elements on the page:
- A box where you type your name
- A box where you type your email  
- A big text area where you write your message
- A "Send" button at the bottom
```

**That's it!** The skill will figure out the technical details.

---

## 🎯 Core Principles for Effective Prompting

### **1. Be Specific About What You Want to Test**
❌ **Bad:** "Test my website"  
✅ **Good:** "I want to test the user login workflow on https://example.com including valid credentials, invalid password, and empty field validation"

### **2. Provide Clear Context About the Website**
Include:
- **URL** — Exact page you want to test
- **User workflows** — Step-by-step actions users take
- **Key elements** — Buttons, forms, dropdowns involved
- **Expected outcomes** — What should happen at each step

### **3. Specify the Scope (Happy Path vs Edge Cases)**
❌ **Bad:** "Test the checkout process"  
✅ **Good:** "Test the happy path: add item → checkout → enter shipping → confirm order. Also test edge cases: removing items, invalid zip codes, changing shipping methods"

### **4. Mention Dependencies Early**
Tell the skill about:
- Authentication requirements (login needed?)
- Multiple pages involved (single page or multi-page flow?)
- External APIs or payments involved
- Dynamic content or waits needed

---

## 📝 Prompt Templates

### **SIMPLE Template (For Non-Technical Users)** ⭐ Recommended

Use this if you're not sure about technical details:

```
I want to create tests for [FEATURE] on [URL].

**What happens:**
1. [User does this]
2. [Then the user does this]
3. [What should happen if it works]

**Elements I see:**
- [What it looks like - example: "A text box for email", "A blue Submit button", "A checkbox that says Remember Me"]
- [Another element]

**Things to test:**
- Does it work with correct info?
- What happens with wrong info?
- What if you skip filling something?

**Important:**
- Do you need to be logged in first? [Yes/No]
- Does this go to another page? [Yes/No]
- Does anything take a long time to load? [Yes/No]
```

### **FULL Template (For More Control)**

Use this if you know more details:

```
I want to create automated Playwright tests for [FEATURE/WORKFLOW].

**Website Details:**
- URL: [exact URL]
- Feature: [what is being tested]

**User Workflow:**
1. [First action user takes]
2. [Second action]
3. [Expected result]

**Key Elements Involved:**
- [Element type]: [description] (e.g., "Button: 'Submit' button", "Input: Email field")
- [Element type]: [description]

**Testing Scope:**
- Happy Path: [describe success scenario]
- Edge Cases: [list edge cases to test]
- Error Scenarios: [describe error handling tests]

**Special Requirements:**
- Authentication: [Yes/No - if yes, provide login details or method]
- Multiple Pages: [Yes/No - if yes, list pages]
- Dynamic Content: [Yes/No - if yes, describe what's dynamic]
- External Dependencies: [API calls, payments, etc.]

**Expected Output:**
- [Number of] page objects
- [Number of] test cases
- Fixtures combining all pages
```

---

## 🔍 Example Prompts (Simple Language)

### **Example 1: Contact Form (Non-Technical)**
```
I want to test the contact form on https://example.com/contact.

What should happen:
1. I type my name in the "Name" box
2. I type my email in the "Email" box
3. I type a message
4. I click the "Send" button
5. I should see a "Thank you!" message

Elements I see:
- A text box for Name
- A text box for Email
- A big area for typing the message
- A green "Send" button
- A "Back to home" link at the bottom

To test:
- Does it send when everything is filled correctly?
- What happens if I don't type a name?
- What happens if I use a bad email like "notanemail"?
- What's the longest message I can send?

Details:
- No login needed
- Just one page
- Nothing takes forever to load
```

### **Example 2: Login (Non-Technical)**
```
Test login on https://app.example.com/login.

What should happen:
1. Type username/email
2. Type password
3. Click "Login"
4. Should go to the main dashboard page

What I see:
- A text box for username or email
- A text box for password (text is hidden)
- A checkbox that says "Remember me"
- A blue "Login" button
- Text that says "Forgot your password?"

Test these:
- Login with correct username and password
- Try wrong password (should show error)
- Try username that doesn't exist (should show error)
- Click "Forgot your password?" (should go to reset page)
- Leave username empty and try to login
- Leave password empty and try to login

Details:
- No prior login needed
- After login, goes from /login to /dashboard
- Nothing special
```

### **Example 3: Shopping Cart (Non-Technical)**
```
Test shopping on https://shop.example.com.

What should happen:
1. Click on a product to see details
2. Click "Add to Cart" button
3. Go to Cart page
4. See the product listed
5. Click "Checkout"
6. Fill in address information
7. Click "Place Order"
8. See order confirmation

What I see:
- Product cards with pictures, names, prices
- An "Add to Cart" button on each product
- A shopping cart icon in the top (shows count of items)
- On cart page: list of items, total price, "Checkout" button
- On checkout page: boxes for street address, city, state, zip code
- A dropdown for shipping type (Normal, Fast, etc.)
- A "Place Order" button

Test these:
- Add one product and checkout
- Add multiple products
- Remove a product from cart
- Try checkout with wrong zip code
- Leave address field empty and try to checkout
- Change shipping method

Details:
- Must be logged in first
- Goes through multiple pages
- Prices and stock might change
```

### **Example 4: Just Explore** (Easiest!)
```
Please explore https://example.com/login and create tests.

Tell me:
1. What buttons and boxes did you find?
2. What should I test?
3. Then generate the tests for me.
```


---

## ✅ Best Practices for Prompting

### **DO:**
✅ Provide the exact URL to test  
✅ List UI elements with their labels/text  
✅ Describe user workflows step-by-step  
✅ Specify which scenarios to test (happy path, edge cases, errors)  
✅ Mention if pages involve navigation/redirects  
✅ Ask for clarification if you're unsure about behavior  
✅ Reference element identifiers if you know them (data-testid, role attributes)  

### **DON'T:**
❌ Say "test everything" — be specific  
❌ Assume the skill knows your website — describe it  
❌ Mix multiple unrelated workflows in one prompt  
❌ Forget to mention authentication requirements  
❌ Leave out error scenarios and edge cases  
❌ Use vague terms like "button on the page" — specify which button  
❌ Skip multi-page complexity — always mention page transitions  

---

## ⚡ QUICK EXPLORE MODE (Easiest for Non-Technical Users)

**Don't know what UI elements to describe?** Let the skill explore for you!

### **Step 1: Send Just the URL and Feature**
```
Explore https://example.com/login and create tests for login.
```

Or more detailed:
```
I need tests for the shopping cart on https://shop.example.com.

The user should:
1. Click on a product
2. Click "Add to Cart"
3. Go to cart and click "Checkout"
4. Fill in address and order

Can you explore the page first?
```

### **Step 2: The Skill Will Respond With:**
- ✅ Screenshots of what it found
- ✅ List of buttons, forms, inputs it discovered
- ✅ Questions about what to test
- ✅ Suggested test scenarios

**Example:** The skill might respond:
```
I found on this page:
- An email text box (for logging in)
- A password box (hidden text)
- A blue button that says "Sign In"
- A "Forgot password?" link
- A "Remember me" checkbox

Should I test:
1. Valid login with email+password?
2. Error when password is wrong?
3. Error when email doesn't exist?
4. What happens when you don't fill in required fields?
5. Does "Forgot password" navigate correctly?
```

### **Step 3: You Just Say Yes/No**
```
Yes to all of those tests. Also test:
- Very long email address
- Password with special characters
- If I can see the user is logged in after signing in
```

### **Step 4: Skill Generates Tests**
That's it! No tech knowledge needed.

---

## 🚀 Progressive Prompting Strategy

If you're unsure, use this approach:

### **Phase 1: Initial Exploration**
```
I want to test [feature] on [URL]. 
Can you first explore the page and describe what elements and workflows you see?
```
*Skill will analyze the website and suggest test scenarios*

### **Phase 2: Plan Definition**
```
Based on your exploration, create a test plan for:
- User logging in with valid credentials
- Error handling for invalid password
- Remember me checkbox functionality

Focus on these UI elements: [list elements]. Should I add more test cases?
```
*Skill will provide test plan for confirmation*

### **Phase 3: Test Generation**
```
Now generate Playwright tests based on the plan we discussed.
Include page objects, fixtures, and complete test file.
Use TypeScript with accessibility roles (getByRole, getByLabel).
```
*Skill generates full test suite*

### **Phase 4: Refinement**
```
The tests are good, but I need to add:
- API authentication with JWT token
- Test data setup with fixtures
- Retry logic for flaky waits

Can you update the tests to include these?
```
*Skill refines based on feedback*

---

## 💡 Tips for Common Scenarios

### **Scenario: Complex Multi-Step Form**
Tell the skill:
- Each form section separately
- Validation rules for each field
- What success looks like
- Where errors are displayed

### **Scenario: Shopping Cart / Transactions**
Tell the skill:
- Product selection process
- Address entry requirements
- Payment method options
- Confirmation details to verify

### **Scenario: Login / Authentication**
Tell the skill:
- Username/email field behavior
- Password requirements
- Session persistence
- Logout workflow

### **Scenario: Dashboard / Data Tables**
Tell the skill:
- Sorting/filtering options
- Pagination behavior
- Row selection methods
- Action buttons per row

---

## 🎓 Sample Session: Complete Example

**Your Initial Prompt:**
```
I want to test a TODO app at https://todomvc.example.com. Users can:
1. Add new todos by typing and pressing Enter
2. Mark todos as complete by clicking checkbox
3. Delete todos by clicking X button
4. Filter todos (All, Active, Completed)

Can you help me create tests?
```

**Skill's Follow-up Questions (that it should ask):**
1. What are the exact element selectors? (or role attributes?)
2. Should I test edge cases like empty input, very long todo text?
3. Do todos persist on page refresh?
4. Should I test keyboard shortcuts (Escape to cancel, etc.)?

**Your Response:**
```
- Elements use role attributes: button for all buttons, textbox for input
- Yes, test empty input and 200-char todo
- Todos persist via localStorage
- Skip keyboard shortcuts for now, focus on mouse clicks
- Test all filter states and ensure correct todos display
```

**Skill Generates:**
- TodoPage page object
- 6+ test cases covering all scenarios
- Fixture for todo app
- Complete TypeScript spec file

---

## ⚡ Quick Reference: What to Include

| Aspect | Include? | Why |
|--------|----------|-----|
| **URL** | ✅ Always | Skill needs exact page to understand |
| **User workflows** | ✅ Always | Step-by-step actions |
| **UI elements** | ✅ Always | What to interact with |
| **Test scenarios** | ✅ Always | Happy path + edge cases + errors |
| **Expected outcomes** | ✅ Always | What success looks like |
| **Authentication** | ✅ If needed | Affects test setup |
| **Multiple pages** | ✅ If relevant | Guides page object structure |
| **Dynamic content** | ✅ If present | Affects wait strategies |
| **API calls** | ⚠️ Mention if | May need mocking |
| **Keyboard shortcuts** | ⚠️ Optional | Only if critical |
| **Mobile responsiveness** | ⚠️ Optional | Usually desktop first |

---

## 🎯 Final Checklist Before Prompting

Before you send a prompt, verify:
- [ ] I've included the exact URL
- [ ] I've described the user workflow step-by-step
- [ ] I've listed key UI elements (buttons, forms, etc.)
- [ ] I've specified test scenarios (happy path, edge cases, errors)
- [ ] I've mentioned authentication if needed
- [ ] I've clarified if multiple pages are involved
- [ ] I've described what "success" looks like for each test
- [ ] I'm not asking for unrelated features in one prompt
- [ ] I'm specific enough that someone else could understand my request

If all checked ✅, your prompt is ready!

