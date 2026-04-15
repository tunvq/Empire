# TEST PLAN: CTV Management System
**Project:** Empire Community — Quản Lý Cộng Tác Viên  
**Version:** 1.0  
**Author:** QA/BA  
**Created:** 14/04/2026  
**Deadline:** 27/04/2026  
**Status:** Active

---

## 1. OVERVIEW

### 1.1 Mục tiêu
Đảm bảo chất lượng toàn bộ tính năng CTV Management trước khi deliver cho client vào ngày **27/04/2026**, bao gồm:
- CTV tự động thấy bài cần reply (auto-visibility)
- Giới hạn 2 CTV unique reply / bài (hard limit)
- Admin dashboard: quản lý, theo dõi, deactivate/reactivate CTV
- In-app notification
- CTV personal dashboard

### 1.2 Bối cảnh
| Thông tin | Chi tiết |
|-----------|---------|
| **Deadline** | 27/04/2026 (còn 13 ngày từ 14/04) |
| **Team** | 1 QA/BA · 1 BE · 1 Mobile · 1 DevOps · 1 TechLead |
| **Client** | Low-tech — team tự quyết định kỹ thuật |
| **Build** | 1 phase, tất cả feature deliver cùng lúc |
| **Delivery wave** | Wave 1 (core) → Wave 2 (management) → Wave 3 (notification) |

---

## 2. SCOPE

### 2.1 In Scope — Phải test trong đợt này

| Module | Mô tả |
|--------|-------|
| M1 — Auth & Permission | RBAC theo role, deactivate session enforcement |
| M2 — CTV Feed | Auto-visibility, real-time update, feed logic |
| M3 — CTV Reply | Submit, BVA ký tự, slot counter, race condition |
| M4 — Admin Dashboard | List, search, filter, sort, view detail, deactivate/reactivate |
| M5 — Notification | Trigger, timing, persistence, history |
| M6 — CTV Personal Dashboard | Danh sách bài đã reply, view detail, data isolation |
| Edge Cases | Role change, timing edge, session expired, concurrent deactivate |

### 2.2 Out of Scope — Không test đợt này

| Feature | Lý do |
|---------|-------|
| CTV delete own reply | Phase 2 |
| CTV edit own reply | Phase 2 |
| Audit log | Phase 2 |
| Email / SMS notification | Phase 2 |
| Export CTV list CSV | Phase 2 |
| Batch deactivate | Phase 2 |
| Moderation page (kiểm duyệt bài) | Đã có sẵn, ngoài scope CTV feature |

---

## 3. TEST APPROACH

### 3.1 Chiến lược — Risk-Based Testing (RBT)

Ưu tiên test theo mức độ rủi ro:

| Priority | Module | Risk | Lý do |
|----------|--------|------|-------|
| P1 | M1 — Auth & Permission | **High** | Security — bypass quyền ảnh hưởng toàn hệ thống |
| P1 | M3.2 — Slot Counter | **High** | Core business logic, data integrity |
| P1 | M3.3 — Race Condition | **High** | Concurrent access, counter có thể corrupt |
| P2 | M2 — CTV Feed | **High** | Rule nghiệp vụ chính |
| P2 | M3.1 — Reply Submission | **High** | Luồng chính của CTV |
| P2 | M4.4 — Deactivate/Reactivate | **High** | State transition, hiệu lực tức thì |
| P3 | M4.1-4.3 — Dashboard UI | **Medium** | Management UI |
| P3 | M5 — Notification | **Medium** | Quan trọng nhưng không block core |
| P4 | M6 — CTV Personal Dashboard | **Low** | View-only, ít logic phức tạp |

### 3.2 Loại test thực hiện

| Loại test | Thực hiện | Công cụ |
|-----------|-----------|---------|
| Functional Testing | ✓ | Manual |
| API Testing | ✓ | Postman / curl |
| Permission Testing | ✓ | Manual + API |
| Boundary Value Analysis | ✓ | Manual |
| Race Condition Testing | ✓ | Script (concurrent requests) |
| Regression Testing | ✓ | Manual (after each fix) |
| Performance Testing | ✓ (basic) | Manual — đo load time dashboard |
| Security Testing | ✓ (basic) | Manual — URL manipulation, direct API call |
| UAT | Client low-tech — QA thay thế | Manual |

### 3.3 Không thực hiện

- Automated UI testing (không đủ thời gian setup)
- Load testing / stress test quy mô lớn
- Penetration testing chuyên sâu

---

## 4. ENTRY & EXIT CRITERIA

### 4.1 Entry Criteria — Điều kiện bắt đầu test

| # | Điều kiện |
|---|-----------|
| 1 | Môi trường test đã được setup và accessible |
| 2 | Test data (accounts, posts) đã được chuẩn bị đủ |
| 3 | API endpoints của Wave đó đã được deploy lên test env |
| 4 | BE confirm: race condition locking đã được implement |
| 5 | Smoke test cơ bản pass (đăng nhập, load trang) |

### 4.2 Exit Criteria — Điều kiện kết thúc test

| # | Điều kiện |
|---|-----------|
| 1 | 100% P1 test cases đã pass |
| 2 | ≥ 95% P2 test cases đã pass |
| 3 | ≥ 85% P3-P4 test cases đã pass |
| 4 | 0 bug Critical/High còn open |
| 5 | Tất cả bug Medium đã có workaround hoặc fix plan |
| 6 | `ctv_reply_count` không bao giờ vượt quá 2 trong mọi scenario đã test |

---

## 5. TEST ENVIRONMENT

### 5.1 Môi trường

| Item | Yêu cầu |
|------|---------|
| **Env** | Staging / Test environment — tách biệt production |
| **DB** | DB riêng cho test, có thể reset data |
| **API Base URL** | `https://staging.empire.vn/api` (hoặc tương đương) |
| **Mobile** | iOS + Android build từ test branch |
| **Browser** | Chrome (latest), Safari (mobile) |

### 5.2 Test Accounts cần chuẩn bị

| Role | Account | Số lượng | Mục đích |
|------|---------|----------|---------|
| Admin | `admin_01@empire.vn` / `Admin@5678` | 1 | Quản lý CTV, duyệt bài |
| Giáo viên | `giaovien_an@empire.vn` / `Pass@1234` | 2 | Submit bài để test |
| CTV Active | `ctv_01` → `ctv_10 @empire.vn` / `Pass@1234` | 10 | Test feed, reply, race condition |
| CTV Inactive | `ctv_d@empire.vn` / `Pass@1234` | 2 | Test deactivate flow |
| Học viên | `student_01` → `student_03 @empire.vn` / `Pass@1234` | 3 | Test permission, reply comment |
| Edge Case | `ctv_race1`, `ctv_race2`, `ctv_x`, `ctv_y`, `ctv_z @empire.vn` | 5 | Edge case scenarios |

### 5.3 Test Data — Bài post cần chuẩn bị

| Loại | Số lượng | Mô tả |
|------|----------|-------|
| Published, count=0 | 5 | Bài mới, chưa có CTV reply |
| Published, count=1 | 3 | Bài đã có 1 CTV reply |
| Published, count=2 | 3 | Bài đã đủ 2 CTV reply |
| Pending review | 2 | Bài chờ duyệt |
| Deleted | 1 | Bài đã xóa (cho edge case) |

---

## 6. TIMELINE & EXECUTION PLAN

### 6.1 Lịch test theo Wave

```
14/04 - 16/04 | SETUP
├── Chuẩn bị test environment
├── Tạo test accounts & test data
└── Confirm API contract với BE

17/04 - 19/04 | WAVE 1 TEST (Core — P1)
├── M1: Auth & Permission (6 TCs)
├── M3.2: Slot Counter (2 TCs)
├── M3.3: Race Condition (2 TCs)
└── Bug report + retest

20/04 - 22/04 | WAVE 2 TEST (Management — P2)
├── M2: CTV Feed (7 TCs)
├── M3.1: Reply Submission (6 TCs — BVA)
├── M3.4: Badge (2 TCs)
├── M4: Admin Dashboard (13 TCs)
├── Edge Cases EC-01 đến EC-08 (8 TCs)
└── Bug report + retest

23/04 - 24/04 | WAVE 3 TEST (Notification + Dashboard cá nhân — P3-P4)
├── M5: Notification (6 TCs)
├── M6: CTV Personal Dashboard (5 TCs)
└── Bug report + retest

25/04 - 26/04 | REGRESSION & FINAL
├── Regression toàn bộ P1 TCs
├── Retest tất cả bug đã fix
├── Final sign-off checklist
└── Báo cáo kết quả

27/04 | DELIVER
```

### 6.2 Phân bổ effort (ước tính)

| Hoạt động | Effort |
|-----------|--------|
| Setup môi trường + data | 0.5 ngày |
| Thực hiện 58 TCs | 4 ngày |
| Bug reporting + communication | 1 ngày |
| Retest sau fix | 1.5 ngày |
| Regression | 1 ngày |
| Edge case testing (script race condition) | 0.5 ngày |
| Báo cáo + sign-off | 0.5 ngày |
| **Tổng** | **9 ngày** (trong 13 ngày còn lại) |

---

## 7. TEST CASE SUMMARY

| Module | Part | Số TC | Risk |
|--------|------|-------|------|
| M1 — Auth & Permission | Part 1 | 6 | High |
| M2 — CTV Feed | Part 1 | 7 | High |
| M3 — CTV Reply | Part 2 | 13 | High |
| M4 — Admin Dashboard | Part 2 | 13 | Medium |
| M5 — Notification | Part 3 | 6 | Medium |
| M6 — CTV Personal Dashboard | Part 3 | 5 | Low |
| Edge Cases | Part 4 | 8 | High |
| **Tổng** | | **58 TCs** | |

**File test cases:**
- [TEST_CASES_CTV_PART1.md](TEST_CASES_CTV_PART1.md) — M1 + M2
- [TEST_CASES_CTV_PART2.md](TEST_CASES_CTV_PART2.md) — M3 + M4
- [TEST_CASES_CTV_PART3.md](TEST_CASES_CTV_PART3.md) — M5 + M6
- [TEST_CASES_CTV_PART4.md](TEST_CASES_CTV_PART4.md) — Edge Cases
- [TEST_CASES_CTV.xlsx](TEST_CASES_CTV.xlsx) — All 58 TCs (Excel)

---

## 8. RISK & MITIGATION

| # | Rủi ro | Khả năng | Tác động | Mitigation |
|---|--------|----------|---------|------------|
| R1 | BE chưa implement locking cho race condition khi QA bắt đầu test | Medium | **Critical** — counter corrupt | Confirm với BE trước khi test Wave 1. Block test nếu chưa có |
| R2 | Notification infrastructure chưa sẵn sàng | Medium | High — delay Wave 3 | Test M5 cuối cùng, nếu chưa xong → defer và ghi nhận known issue |
| R3 | Test environment không ổn định | Low | Medium — delay toàn bộ | DevOps setup staging trước 16/04 |
| R4 | Bug Critical phát sinh cuối cycle (24-25/04) | Low | High — không đủ thời gian fix | Ưu tiên P1 test sớm, buffer 2 ngày cuối |
| R5 | Open questions chưa được confirm (badge text, rate limit) | Low | Low — QA tự quyết theo assumption | Đã ghi assumption trong từng TC liên quan |
| R6 | Edge case EC-04 (CTV xem bài mình đã reply trong feed) chưa có rule rõ ràng | Medium | Medium — behavior không xác định | Escalate ngay khi test, log là known ambiguity |

---

## 9. BUG MANAGEMENT

### 9.1 Severity Definition

| Severity | Định nghĩa | Ví dụ |
|----------|-----------|-------|
| **Critical** | Chặn hoàn toàn luồng chính, data corruption | `ctv_reply_count` > 2, không đăng nhập được |
| **High** | Feature không hoạt động đúng nghiệp vụ | Badge sai, CTV thứ 3 reply được |
| **Medium** | Feature hoạt động nhưng UX tệ | Empty state không có message, sort sai |
| **Low** | Cosmetic, không ảnh hưởng nghiệp vụ | Sai font, màu badge hơi lệch |

### 9.2 SLA Fix

| Severity | SLA Fix | SLA Retest |
|----------|---------|------------|
| Critical | Trong ngày | 2 giờ sau fix |
| High | 24 giờ | Ngày hôm sau |
| Medium | 48 giờ | Trong cycle hiện tại |
| Low | Before deliver (nếu có thời gian) | Cuối cycle |

### 9.3 Bug Report Format

```
Title: [Module] Mô tả ngắn gọn
Severity: Critical / High / Medium / Low
TC ID: EMP_CTV_XXX_TC_XXX (nếu có)

Steps to Reproduce:
1. ...
2. ...

Expected: ...
Actual: ...

Evidence: screenshot / log / DB query result
Environment: Staging | API version: xxx | Date: dd/mm/yyyy
```

---

## 10. DELIVERABLES

| Deliverable | Owner | Deadline |
|-------------|-------|---------|
| Test Plan (file này) | QA/BA | 14/04/2026 ✓ |
| Test Cases (58 TCs) | QA/BA | 14/04/2026 ✓ |
| Test Execution Report (Wave 1) | QA/BA | 19/04/2026 |
| Test Execution Report (Wave 2) | QA/BA | 22/04/2026 |
| Test Execution Report (Wave 3) | QA/BA | 24/04/2026 |
| Bug Report Log | QA/BA | Liên tục |
| Final Test Summary Report | QA/BA | 26/04/2026 |
| Sign-off Confirmation | TechLead | 26/04/2026 |

---

## 11. SIGN-OFF CHECKLIST (Trước khi Deliver)

```
[ ] 100% P1 TCs passed
[ ] 0 Critical bug open
[ ] 0 High bug open (hoặc có approved workaround)
[ ] ctv_reply_count không bao giờ > 2 trong mọi test
[ ] Race condition test passed (2 CTVs + 10 CTVs concurrent)
[ ] Deactivate CTV: block ngay lập tức confirmed
[ ] Notification: đúng timing (sau approve, không phải sau submit)
[ ] CTV badge "CTV" và "CTV (Inactive)" hiển thị đúng
[ ] Admin Dashboard load < 1 giây / 50 CTV
[ ] Permission: tất cả role không vượt quyền qua API call
[ ] TechLead reviewed & approved
```

---

## 12. ASSUMPTIONS & DEPENDENCIES

| # | Nội dung |
|---|---------|
| A1 | BE sẽ implement atomic update hoặc pessimistic lock cho `ctv_reply_count` |
| A2 | Badge text dùng `"CTV"` — team tự quyết, không chờ client confirm |
| A3 | Rate limit tạm thời: 10 reply/phút/CTV — có thể điều chỉnh sau |
| A4 | CTV đã reply 1 slot trên bài → bài vẫn hiển thị trong feed (count < 2) |
| A5 | Notification dùng in-app polling hoặc WebSocket — DevOps/BE quyết định |
| A6 | Staging environment phải sẵn sàng trước 16/04/2026 |
| A7 | Test data có thể reset giữa các test run nếu cần |

---

*Test Plan v1.0 — Empire CTV Management — QA/BA — 14/04/2026*
