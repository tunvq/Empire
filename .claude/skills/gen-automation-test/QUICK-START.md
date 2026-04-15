# QUICK REFERENCE: Prompting gen-automation-test

## 🎯 Choose Your Path

### **Path 1: I Don't Know What to Say (Easiest)** ⭐
```
Explore [URL] and create tests for [feature].
```

Example:
```
Explore https://example.com/login and create tests for login.
```

**That's it!** The skill will explore and ask you clarifying questions.

---

### **Path 2: I Can Describe What I See (Simple)**
```
Test [feature] on [URL].

What you do:
1. [Action 1]
2. [Action 2]
3. [What should happen]

What you see on the page:
- [Describe button like: "A blue button that says 'Send'"]
- [Describe input like: "A text box where you type email"]
- [Describe checkbox like: "A checkbox that says 'Remember Me'"]

To test:
- Happy path (everything works)
- Edge cases (fill field with very long text, etc.)
- Errors (wrong info, empty fields, etc.)
```

Example:
```
Test login on https://example.com/login.

What you do:
1. Type email address
2. Type password
3. Click login button
4. Should go to dashboard

What I see:
- A text box for email
- A text box for password (hidden)
- A "Sign In" button
- A "Forgot Password?" link

To test:
- Login works with correct email/password
- Error message when password is wrong
- Error when email doesn't exist
- Error when fields are empty
```

---

### **Path 3: I Know Exactly What I Want (Full Control)**
See PROMPT-GUIDE.md for the detailed template.

---

## 📝 How to Describe Things (Simple Language)

| What You See | Don't Say This | Just Say This |
|---|---|---|
| Button | `role='button', id='submit'` | The "Submit" button OR A blue button that says Submit |
| Text Input | `type='text', aria-label='email'` | A box where you type your email OR The email field |
| Password | `type='password'` | A box where you type your password (text is hidden) |
| Checkbox | `role='checkbox', checked='false'` | A checkbox next to "Remember Me" |
| Dropdown | `<select>` | A dropdown where you pick shipping speed |
| Link | `<a href='...'` | A "Forgot Password?" link |

---

## ✅ Copy & Paste Templates

### **Fastest - Just Explore**
```
Explore [URL] and create tests.
```

### **Easy - Describe What You See**
```
Test [feature] on [URL].

What happens:
1. [User action 1]
2. [User action 2]
3. [Expected result]

What I see:
- [Thing 1] (e.g., "A blue Submit button")
- [Thing 2]
- [Thing 3]

Things to test:
- Does it work normally?
- What if I type wrong info?
- What if I don't fill required fields?
```

### **Detailed - Full Control**
See PROMPT-GUIDE.md for detailed template.

---

## 💡 Real Examples (Copy & Fill In)

### **Example: Contact Form**
```
Test the contact form on https://example.com/contact.

What happens:
1. Type your name in the name box
2. Type your email in the email box
3. Type a message
4. Click Send button
5. Should see "Thank you!" message

What I see:
- Name text box
- Email text box
- Message area (big text box)
- A green Send button

To test:
- Does it send when filled correctly?
- What if I don't enter a name?
- What if I use a bad email like "notanemail"?
```

### **Example: Login**
```
Test login on https://app.example.com/login.

What happens:
1. Type email
2. Type password
3. Click Login
4. Should see the dashboard page

What I see:
- Email text box
- Password text box
- Login button
- Remember Me checkbox
- Forgot Password link

To test:
- Login with correct email and password
- Wrong password (should show error)
- Email doesn't exist (should show error)
- Empty email field
- Empty password field
```

### **Example: Shopping**
```
Test shopping on https://shop.example.com.

What happens:
1. Find a product
2. Click it to see details
3. Click Add to Cart
4. Go to cart page
5. Click Checkout
6. Fill in address
7. Click Place Order
8. See order confirmation

What I see:
- Product pictures with names and prices
- Add to Cart button on each product
- Cart icon in header
- On checkout: Address boxes, dropdown for shipping type
- Place Order button

To test:
- Add one product and checkout
- Add multiple products
- Remove a product
- Invalid address (wrong zip code)
- Missing address field
```

---

## 🎓 When Stuck

**If you don't know what to do:**
```
Just send the URL and ask me to explore it first.

Example:
"Explore https://example.com/login and tell me what to test."
```

**The skill will:**
1. Find all buttons, forms, links
2. Show you what it found
3. Ask what scenarios to test
4. You just say Yes or No
5. Done! Tests are generated

---

## 📞 Support

- **Need help with prompts?** See PROMPT-GUIDE.md (full guide)
- **Need element selectors?** Don't! Just describe what you see in plain English
- **Confused about workflow?** Send URL first and ask skill to explore

**Remember:** You don't need to be technical. The skill can figure out the hard parts!

