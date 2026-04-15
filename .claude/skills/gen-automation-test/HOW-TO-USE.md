# Your Simplified Prompting Options ✨

I've created **3 ways** for you to use the gen-automation-test skill, from easiest to most detailed:

---

## 🎯 Option 1: I'm Not Technical (EASIEST) ⭐

**Read:** [QUICK-START.md](./QUICK-START.md)

**How to use:**
```
Explore https://example.com/login and create tests for the login form.
```

**That's it!** The skill will:
- ✅ Find all buttons, forms, inputs
- ✅ Show you what it found
- ✅ Ask you what to test
- ✅ You just say "yes" or "no"
- ✅ Tests are generated!

**No technical knowledge needed!**

---

## 📱 Option 2: I Can Describe What I See (SIMPLE)

**Read:** [QUICK-START.md](./QUICK-START.md) - **Path 2**

**How to use:**
```
Test login on https://example.com/login.

What happens:
1. Type email
2. Type password  
3. Click "Sign In"
4. See dashboard page

What I see:
- A text box for email
- A text box for password (hidden)
- A "Sign In" button
- "Forgot Password" link
- "Remember Me" checkbox

To test:
- Works with correct info
- Error with wrong password
- Error with empty fields
```

**Keys:**
- Use simple words (no tech jargon!)
- Describe buttons like: "A blue button that says..."
- Describe inputs like: "A text box where you type..."
- List what to test (happy path, errors, edge cases)

---

## 💼 Option 3: I Know Exactly What I Want (FULL CONTROL)

**Read:** [PROMPT-GUIDE.md](./PROMPT-GUIDE.md)

Use the detailed template if you want maximum control over:
- Multiple pages
- Complex workflows
- Specific test scenarios
- Performance requirements

---

## 🚀 Quick Decision Tree

**START HERE:**

```
Do you know what UI elements to describe?
├─ NO → Use Option 1 (Just send URL, I'll explore)
├─ UNSURE → Use Option 2 (Describe in plain English)
└─ YES → Use Option 3 (Use full template)
```

---

## 📋 Cheat Sheet: How to Describe UI Without Technical Terms

| Element | Instead of... | Just say... |
|---------|---------------|-----------|
| Button | `role="button", id="submit"` | "A blue button that says 'Submit'" |
| Text input | `type="text", maxlength="50"` | "A box where you type your name" |
| Password | `type="password"` | "A password box (text is hidden)" |
| Checkbox | `role="checkbox"` | "A checkbox next to 'Remember Me'" |
| Dropdown | `<select>` | "A dropdown to pick shipping speed" |
| Link | `<a href="/reset">` | "A 'Forgot Password?' link" |

---

## 📚 File Guide

| File | Best For | Read If |
|------|----------|---------|
| **QUICK-START.md** | Getting started (copy/paste templates) | You're new or non-technical |
| **PROMPT-GUIDE.md** | Detailed examples and strategies | You want full control |
| **SKILL.md** | How the skill works (workflow explanation) | You want to understand the process |

---

## ✅ Real Examples You Can Copy

### Example 1: Simplest Possible
```
Explore https://example.com and create tests.
```

### Example 2: Simple (Plain English)
```
Test the login at https://app.example.com/login.

What happens:
1. Type email
2. Type password
3. I click Login
4. I see my dashboard

What I see on the page:
- An email box
- A password box (text hidden)
- A green Login button

What to test:
- Does login work with correct email/password?
- What happens if I use wrong password?
- What if I don't fill a field?
```

### Example 3: Shopping (Plain English)
```
Test shopping on https://shop.example.com.

What happens:
1. Click product to see details
2. Click "Add to Cart" button
3. Go to cart page
4. Click "Checkout"
5. Type address
6. Click "Place Order"
7. See confirmation

What I see:
- Product cards with pictures
- "Add to Cart" button on each item
- Cart icon in the top showing count
- On checkout: address boxes and shipping dropdown
- "Place Order" button

To test:
- Buy one product completely
- Buy multiple products
- Remove product from cart
- Try checkout with bad zip code
- Leave address blank and try checkout
```

---

## ⚡ Decision Matrix

| Situation | Use This | Example |
|-----------|----------|---------|
| You have a URL and nothing else | Option 1 | "Explore [URL] and create tests" |
| You can describe what you see | Option 2 | Use plain English (button, box, link) |
| You know all details | Option 3 | Use full PROMPT-GUIDE template |
| You want quick templates | QUICK-START.md | Copy/paste examples |
| You want detailed help | PROMPT-GUIDE.md | Read full guide with strategies |

---

## 🎁 Bonus: You Don't Need to Know...

✅ UI element selectors or identifiers  
✅ Technical terms like "role", "aria-label", "id"  
✅ CSS or XPath  
✅ Website technical architecture  
✅ Whether something uses React, Vue, vanilla JS  

You just need to:
✅ Describe what you see in plain English  
✅ Say what users do (step by step)  
✅ List what scenarios to test  

**Everything else? The skill figures it out!**

---

## 🎯 Next Steps

1. **Pick your option** above (most people choose Option 1 or 2)
2. **Copy a template** from QUICK-START.md
3. **Send your prompt**
4. **Answer the skill's questions** (it will ask for clarification)
5. **Get your tests!** ✅

---

## ❓ Common Questions

**Q: I don't know what to test. Should I ask the skill?**  
A: Yes! Send the URL and ask the skill to explore and suggest tests.

**Q: Do I need to know CSS selectors?**  
A: No! Just describe what you see (e.g., "the blue Submit button").

**Q: Can I change my mind after sending a prompt?**  
A: Yes! You can refine, add, or remove test scenarios in follow-up messages.

**Q: What if I'm very confused?**  
A: Just send: "Explore [URL] and tell me what to test" - skill will handle it!

---

## 🚀 Ready? Start With This:

```
Explore [YOUR-URL-HERE] and create tests for [YOUR-FEATURE-HERE].
```

**That's it! You've got this! ⭐**

