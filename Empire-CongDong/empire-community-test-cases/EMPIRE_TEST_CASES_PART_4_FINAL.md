# EMPIRE COMMUNITY - TEST CASE STANDARDIZED FORMAT
## Part 4 (FINAL): Module 5.3, 6.1, 6.2 (TC_086-096)

| TC ID | Module | Risk Level | Test Title | Pre-Condition | Test Steps | Expected Result | Priority | Test Data |
|-------|--------|------------|-----------|---------------|-----------|-----------------|----------|-----------|
| EMPIRE_TC_086 | FILTER-NOTIF (5.3) | MEDIUM | User can filter notifications by type (likes, comments, follows, shares) | 1. User on Notifications page<br>2. User has 20+ notifications of mixed types<br>3. Filter button or tabs visible | 1. Observe notification list (mixed types)<br>2. Look for filter options:<br>   - "Tất cả" (All)<br>   - "Thích" (Likes)<br>   - "Bình luận" (Comments)<br>   - "Theo dõi" (Follows)<br>   - "Chia sẻ" (Shares)<br>3. Click "Thích" tab<br>4. Verify feed shows only like notifications (12 total)<br>5. Click "Bình luận"<br>6. Verify feed shows only comment notifications (5 total)<br>7. Click "Tất cả"<br>8. Verify feed returns to showing all 20+ notifications | 1. Filter tabs present & clickable ✓<br>2. Filter state persists while on page ✓<br>3. Filtered view accurate (only matching type shown) ✓<br>4. Each filter shows correct count ✓<br>5. Switching filters updates view instantly ✓<br>6. No duplicate notifications ✓<br>7. No console errors ✓ | MEDIUM | Total notifications: 25<br>- Likes: 12<br>- Comments: 5<br>- Follows: 5<br>- Shares: 3 |
| EMPIRE_TC_087 | FILTER-NOTIF (5.3) | MEDIUM | Notification filter selection persists across page refresh (saved in localStorage) | 1. User on Notifications page<br>2. Notification filters available<br>3. DevTools open (to check localStorage) | 1. Click "Thích" filter tab<br>2. Verify feed shows only like notifications<br>3. Open DevTools → Application → LocalStorage<br>4. Check localStorage key: "notif_filter" or similar<br>5. Value should be "likes"<br>6. Refresh browser page (F5)<br>7. Verify notification page loads with "Thích" filter still active<br>8. Verify localStorage key unchanged | 1. Filter preference stored in localStorage ✓<br>2. localStorage key: "notif_filter" or similar ✓<br>3. After refresh, same filter remains active ✓<br>4. Filtered view persists (shows only likes) ✓<br>5. No console errors ✓<br>6. Works across different sessions (if re-login) ✓ | MEDIUM | Filter key: "notif_filter"<br>Filter value: "likes"<br>Expected behavior: Persist across refresh |
| EMPIRE_TC_088 | DRAFT-AUTOSAVE (6.1) | MEDIUM | Post draft auto-saves to localStorage every 10s of inactivity | 1. Create post modal open<br>2. Text typed in input<br>3. DevTools Application tab open<br>4. No typing for 10+ seconds | 1. Type draft text: "Hôm nay mình học..."<br>2. Stop typing (wait 10 seconds)<br>3. Check DevTools localStorage<br>4. Find key "post_draft"<br>5. Verify value contains the typed text<br>6. Verify timestamp on draft (date/time saved)<br>7. Make another edit: add "...và nó rất hay"<br>8. Wait another 10s<br>9. Verify localStorage updated with new text + new timestamp | 1. localStorage key "post_draft" exists ✓<br>2. Value matches typed text ✓<br>3. Draft timestamp shows save time ✓<br>4. After edit + 10s idle, draft updates ✓<br>5. Multiple drafts handled correctly ✓ | MEDIUM | Draft text 1: "Hôm nay mình học Python decorator"<br>Auto-save interval: 10 seconds<br>Draft text 2: "Hôm nay mình học Python decorator...và nó rất hay" |
| EMPIRE_TC_089 | DRAFT-AUTOSAVE (6.1) | MEDIUM | On page refresh, user prompted to restore unsaved draft (recovery flow) | 1. Draft saved in localStorage<br>2. User navigates away or refreshes page<br>3. Draft is < 7 days old | 1. Create post with text: "Bài viết nháp"<br>2. Wait 10s for auto-save<br>3. Verify localStorage contains draft<br>4. Refresh page (F5) OR close browser tab + reopen<br>5. Observe recovery prompt: "Bạn có bài viết nháp. Khôi phục?"<br>6. Buttons: ["Khôi phục", "Xóa"]<br>7. Click "Khôi phục"<br>8. Modal opens with drafted text pre-filled<br>9. User can continue editing + submit | 1. Recovery prompt appears on page load ✓<br>2. Prompt text clear ✓<br>3. "Khôi phục" button clickable ✓<br>4. Draft text pre-fills in modal ✓<br>5. User can continue editing restored draft ✓<br>6. Can submit restored draft ✓<br>7. "Xóa" button discards draft ✓ | MEDIUM | Draft text: "Bài viết nháp: hôm nay tôi học decorator"<br>Recovery prompt: "Bạn có bài viết nháp. Khôi phục?" |
| EMPIRE_TC_090 | DRAFT-AUTOSAVE (6.1) | MEDIUM | Draft with media attachment recovers correctly (image/video file reference preserved) | 1. Draft with attached media<br>2. File reference stored in localStorage<br>3. Original file still accessible | 1. Create post with text + attach image: landscape.jpg<br>2. Verify in localStorage that draft includes file reference<br>3. Close browser / refresh<br>4. Recovery prompt appears<br>5. Click "Khôi phục"<br>6. Modal opens with text pre-filled<br>7. Verify image preview still visible<br>8. Image thumbnail shows correct file<br>9. User can remove/replace image or submit as-is | 1. Draft with media stored correctly ✓<br>2. File reference preserved in localStorage ✓<br>3. On recovery, text + media preview both appear ✓<br>4. Image thumbnail correct ✓<br>5. User can modify/remove media and resubmit ✓<br>6. Media upload retried if needed ✓ | MEDIUM | Attached media: landscape.jpg (2MB)<br>Draft text: "Đây là view từ sân bay"<br>Expected: Both text + image thumbnail visible after recovery |
| EMPIRE_TC_091 | SESSION-MGT (6.2) | CRITICAL | User successfully logs in with valid credentials; JWT token created and stored | 1. User not logged in<br>2. Valid credentials: demo@empire.io.vn / Test@123 | 1. Navigate to login page<br>2. Enter email: demo@empire.io.vn<br>3. Enter password: Test@123<br>4. Click "Đăng nhập" (Login)<br>5. Wait for redirect to /cong-dong<br>6. DevTools → Applications → Cookies/Storage → Check for JWT token<br>7. Verify token present<br>8. Decode JWT (use JWT.io if needed)<br>9. Verify token contains user ID + role + expiry | 1. Login form submits ✓<br>2. Loading indicator shows ✓<br>3. HTTP 200 response from /login endpoint ✓<br>4. JWT token stored in cookie or localStorage ✓<br>5. Cookie has secure flag (if HTTPS) ✓<br>6. Token valid (not expired) ✓<br>7. Redirect to /cong-dong ✓<br>8. User can access protected pages ✓ | CRITICAL | Email: demo@empire.io.vn<br>Password: Test@123<br>Expected token: JWT format with claims {user_id, role, exp, iat} |
| EMPIRE_TC_092 | SESSION-MGT (6.2) | CRITICAL | Invalid credentials rejected; error message shown; no token created | 1. User not logged in | 1. Navigate to login<br>2. Enter email: demo@empire.io.vn<br>3. Enter wrong password: WrongPassword123<br>4. Click "Đăng nhập"<br>5. Observe response<br>6. Verify error message: "Sai email hoặc mật khẩu"<br>7. Check DevTools - NO JWT token created<br>8. User remains on login page (NOT redirected) | 1. Login attempt fails ✓<br>2. HTTP 401 Unauthorized returned ✓<br>3. Error message displays in Vietnamese ✓<br>4. NO token created ✓<br>5. User NOT redirected ✓<br>6. Input fields remain visible (can retry) ✓<br>7. No sensitive error details leaked in console ✓ | CRITICAL | Email: demo@empire.io.vn<br>Password: WrongPassword123<br>Expected error: "Sai email hoặc mật khẩu" |
| EMPIRE_TC_093 | SESSION-MGT (6.2) | CRITICAL | JWT token expires after 24 hours; automatic refresh or re-login required | 1. User logged in with valid JWT<br>2. Token expiry set to < 1 minute (for testing)<br>3. Can simulate token expiration | 1. User logged in<br>2. DevTools → check token expiry time (exp claim)<br>3. Simulate passage of time: DevTools manipulate system clock + 25 hours<br>4. Try to perform action (e.g., create post)<br>5. Backend should reject old token (401)<br>6. Observe behavior:<br>   - Option A: Token auto-refreshes (if refresh token available)<br>   - Option B: User redirected to login<br>   - Option C: Error: "Session expired"<br>7. User re-logs in OR uses refresh token | 1. Token expires correctly after 24h ✓<br>2. API returns 401 Unauthorized when expired ✓<br>3. System attempts refresh (if available) ✓<br>4. If refresh fails, redirect to login ✓<br>5. Error message clear: "Phiên hết hạn, vui lòng đăng nhập lại" ✓<br>6. No data corruption ✓ | CRITICAL | Token expiry: 24 hours<br>Simulated time: +25 hours<br>Expected behavior: Token expired, re-login or refresh |
| EMPIRE_TC_094 | SESSION-MGT (6.2) | HIGH | CSRF token generated on login; protected endpoints require valid CSRF token | 1. User logged in<br>2. CSRF protection enabled | 1. User posts create request<br>2. DevTools → Network → POST /api/posts<br>3. Check request headers for "X-CSRF-Token"<br>4. Verify CSRF token present<br>5. Make unauthorized request (remove CSRF header)<br>6. Backend should reject with 403 Forbidden<br>7. Restore CSRF header<br>8. Request succeeds | 1. CSRF token generated on login ✓<br>2. CSRF token included in request headers ✓<br>3. Request without CSRF token rejected (403) ✓<br>4. Error: "Invalid CSRF token" ✓<br>5. Request with valid CSRF succeeds (200) ✓<br>6. CSRF token rotates after each request (optional) ✓ | HIGH | CSRF header: "X-CSRF-Token"<br>Expected on login: CSRF token generated<br>Expected on POST: CSRF token required |
| EMPIRE_TC_095 | SESSION-MGT (6.2) | HIGH | Concurrent login attempts handled correctly; only one valid session per user | 1. User demo@empire.io.vn<br>2. Can open 2 browser windows | 1. Browser A: Login as demo@empire.io.vn<br>2. Browser A: Token stored, navigate to /cong-dong<br>3. Browser B: Login as demo@empire.io.vn (same user, different browser)<br>4. Browser B: Token stored, navigate to /cong-dong<br>5. Check backend session table: only 1 active session OR both allowed?<br>6. (Depending on policy)<br>7. If 1-session policy: Browser A token should be invalidated<br>8. Browser A: Refresh page<br>9. Should be redirected to login (session expired)<br>10. Browser B: Still logged in | 1. Multiple login attempts allowed (concurrent) ✓<br>2. Both clients receive valid tokens ✓<br>3. If single-session policy: Old session invalidated ✓<br>4. Browser A redirected to login on next action ✓<br>5. Browser B remains logged in ✓<br>6. OR if multi-session allowed: Both stay logged in ✓<br>7. Behavior logged for audit ✓ | HIGH | User: demo@empire.io.vn<br>Login policy: Single session per user OR Multi-session |
| EMPIRE_TC_096 | SESSION-MGT (6.2) | HIGH | User banned/suspended account cannot login; error message explains status | 1. User account banned in backend<br>2. User attempts to login | 1. User banned_user@example.com tries to login<br>2. Enter email + valid password<br>3. Click "Đăng nhập"<br>4. Backend detects account is banned<br>5. Returns error response (403 Forbidden)<br>6. Error message: "Tài khoản của bạn đã bị khóa. Liên hệ quản trị viên để biết thêm."<br>7. No token created<br>8. User remains on login page<br>9. (Optional) Link to "Contact admin" provided | 1. Login attempt fails ✓<br>2. HTTP 403 Forbidden returned ✓<br>3. Error message displayed in Vietnamese ✓<br>4. Message explains account is banned ✓<br>5. NO token created ✓<br>6. User NOT redirected ✓<br>7. Contact info or appeal link provided (if supported) ✓<br>8. No console errors ✓ | HIGH | User: banned_user@example.com<br>Account status: Banned / Suspended<br>Expected error: "Tài khoản của bạn đã bị khóa" |

---

## 🎉 **ALL 96 TEST CASES COMPLETED!**

### Summary by Module:

| Module | TC Range | Count | Risk Distribution |
|--------|----------|-------|-------------------|
| **1.1 NAV-HEADER** | TC_001-009 | 9 | MEDIUM(1), LOW(8) |
| **1.2 NAV-SIDEBAR** | TC_010-020 | 11 | MEDIUM(1), LOW(10) |
| **2.1 HALL-FEED** | TC_021-030 | 10 | HIGH(3), MEDIUM(7) |
| **2.2 REELS-FEED** | TC_031-043 | 13 | HIGH(3), MEDIUM(8), LOW(2) |
| **3.1 CREATE-POST** | TC_044-056 | 13 | CRITICAL(3), HIGH(3), MEDIUM(7) |
| **4.1 POST-CARD** | TC_057 | 1 | MEDIUM(1) |
| **4.2 REACTION-SYSTEM** | TC_058-060 | 3 | CRITICAL(1), MEDIUM(1), LOW(1) |
| **4.3 COMMENT-SYSTEM** | TC_061-066 | 6 | CRITICAL(1), MEDIUM(5) |
| **4.4 SHARE-SYSTEM** | TC_067-068 | 2 | MEDIUM(2) |
| **4.5 EDIT-DELETE** | TC_069-073 | 5 | CRITICAL(2), HIGH(2), MEDIUM(1) |
| **4.6 FOLLOW-USER** | TC_074-076 | 3 | MEDIUM(3) |
| **5.1 SEARCH-POSTS** | TC_077-082 | 6 | MEDIUM(5), LOW(1) |
| **5.2 SEARCH-GROUPS** | TC_083-085 | 3 | MEDIUM(2), LOW(1) |
| **5.3 FILTER-NOTIF** | TC_086-087 | 2 | MEDIUM(2) |
| **6.1 DRAFT-AUTOSAVE** | TC_088-090 | 3 | MEDIUM(3) |
| **6.2 SESSION-MGT** | TC_091-096 | 6 | CRITICAL(3), HIGH(3) |
| **TOTAL** | **TC_001-096** | **96** | CRITICAL(9), HIGH(11), MEDIUM(60), LOW(16) |

### Risk Prioritization:

- **CRITICAL (9 TCs):** TC_044, TC_045, TC_046, TC_058, TC_061, TC_069, TC_071, TC_091, TC_092, TC_093
- **HIGH (11 TCs):** TC_021, TC_022, TC_025, TC_026, TC_031, TC_032, TC_033, TC_047, TC_048, TC_050, TC_070, TC_072, TC_094, TC_095, TC_096
- **MEDIUM (60 TCs):** Navigation, Feed operations, Post interactions, Search, Notifications, Drafts
- **LOW (16 TCs):** UI validations, edge cases, boundary conditions

### Test Design Techniques Applied:

✅ Happy Path + Negative Path Testing
✅ Boundary Value Analysis (BVA)
✅ Equivalence Partitioning
✅ Decision Table Testing
✅ State Transition Testing
✅ Real-time/Concurrency Testing
✅ Permission/Security Validation
✅ Performance & Load Testing
✅ Error Handling & Edge Cases

---

## 📋 **Export Instructions for QA Team:**

### Option 1: Copy to Excel
1. Open Excel file
2. Create 4 sheets: "Part1", "Part2", "Part3", "Part4"
3. Copy each Markdown table directly into corresponding sheet
4. Adjust column widths for readability
5. Optional: Add filters (Data → AutoFilter)

### Option 2: Import to Jira/TestRail/Xray
1. Export each Part markdown table
2. Use tool's "Import" feature (if available)
3. Or copy/paste into test management tool
4. Map columns: TC ID → Key, Test Title → Summary, etc.

### Option 3: Google Sheets
1. Create 4 sheets or 1 consolidated sheet
2. Paste table data into sheets
3. Use Google Sheets' "Split text to columns" if needed
4. Share link with QA team for collaborative testing

---

**✅ Bước 6 (Template Mapping) HOÀN THÀNH!**

Tất cả 96 test cases đã được chuẩn hóa vào format Markdown, sẵn sàng để export sang Excel, Jira, TestRail hoặc công cụ quản lý test case khác.

**Các file nằm ở:** `e:\Olama\code\Empire\empire-community-test-cases\`
- EMPIRE_TEST_CASES_PART_1.md
- EMPIRE_TEST_CASES_PART_2.md
- EMPIRE_TEST_CASES_PART_3.md
- EMPIRE_TEST_CASES_PART_4_FINAL.md
