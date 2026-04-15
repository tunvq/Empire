# RUSH SPEC: Quản Lý Cộng Tác Viên (CTV Management)

**Deadline:** 27/04/2026
**Status:** 🟡 In Progress
**Updated:** 14/04/2026
**Owner:** BA/QA

---

## 1. OVERVIEW

### Mục đích

Cho phép CTV (Cộng Tác Viên) tự động nhìn thấy bài viết của Giáo viên cần hỗ trợ và reply vào đó mà không cần Admin gán thủ công. Admin theo dõi & quản lý hoạt động CTV qua dashboard tập trung.

| Before | After |
|--------|-------|
| Admin gán tay CTV vào từng bài → chậm, dễ bỏ sót | CTV tự thấy bài cần reply → tự phân phối, không cần can thiệp |

---

### Scope — Tất cả build trong release này

| # | Feature | Status |
|---|---------|--------|
| 1 | CTV tự động thấy bài chưa có 2 CTV reply | 🔲 TODO |
| 2 | CTV reply comment (max 2 CTV / bài) | 🔲 TODO |
| 3 | Badge "CTV" hiển thị trên comment | 🔲 TODO |
| 4 | Admin tạo tài khoản CTV | 🔲 TODO |
| 5 | Admin duyệt bài đăng của Giáo viên (kiểm duyệt) | 🔲 TODO |
| 6 | Admin dashboard: xem, filter, sort danh sách CTV | 🔲 TODO |
| 7 | Admin deactivate / reactivate CTV | 🔲 TODO |
| 8 | In-app notification: bài mới publish → gửi CTV | 🔲 TODO |
| 9 | In-app notification: có người reply vào comment của CTV | 🔲 TODO |
| 10 | Học viên chỉ reply — không đăng bài (enforce ở API) | 🔲 TODO |
| 11 | Race condition handling: 2 CTV reply cùng lúc | 🔲 TODO |

---

### Đã xác nhận — không cần confirm lại

| # | Quyết định |
|---|-----------|
| 1 | Admin **không** tự đăng bài — chỉ duyệt bài & quản lý CTV |
| 2 | Chỉ Giáo viên / Mentor được đăng bài public |
| 3 | Học viên **không** được đăng bài — chỉ reply |
| 4 | Tất cả bài đăng phải qua Admin duyệt mới publish |
| 5 | CTV **không** thể xóa reply |
| 6 | Max 2 CTV reply / bài — hard limit |
| 7 | CTV bị deactivate: reply cũ vẫn giữ, hiển thị "CTV (Inactive)" |
| 8 | CTV không bị xóa — chỉ deactivate |
| 9 | Notification gửi cho CTV **sau khi** Admin duyệt bài, không phải lúc Giáo viên submit |

---

### Còn chờ xác nhận ❓

| # | Câu hỏi | Owner | Cần trả lời trước |
|---|---------|-------|------------------|
| 1 | Badge text: "CTV" / "Collaborator" / icon? | ___ | ___ |
| 2 | Giáo viên đồng thời là CTV → reply có tính vào giới hạn 2 không? | ___ | ___ |
| 3 | CTV có thể mute notification không? (global hay per-post?) | ___ | ___ |
| 4 | Rate limit: CTV reply tối đa bao nhiêu lần/phút? | ___ | ___ |

---

## 2. USER ACCESS

### Bảng quyền hạn theo role

| Action | Admin | Giáo viên / Mentor | CTV | Học viên |
|--------|:-----:|:-----------------:|:---:|:--------:|
| Đăng bài lên cộng đồng | ✗ | ✓ (cần duyệt) | ✗ | ✗ |
| Reply / comment vào bài | ✗ | ✓ | ✓ (max 2/bài) | ✓ |
| Xem bài chưa đủ 2 CTV reply | ✗ | ✗ | ✓ | ✗ |
| Duyệt bài trước khi publish | ✓ | ✗ | ✗ | ✗ |
| Tạo tài khoản CTV | ✓ | ✗ | ✗ | ✗ |
| Deactivate / Reactivate CTV | ✓ | ✗ | ✗ | ✗ |
| Xem Admin Dashboard (CTV list) | ✓ | ✗ | ✗ | ✗ |
| Xem CTV Dashboard (bài đã reply) | ✗ | ✗ | ✓ | ✗ |
| Edit bài gốc | ✓ | ✓ (bài của mình) | ✗ | ✗ |
| Xóa bài | ✓ | ✓ (bài của mình) | ✗ | ✗ |
| Xóa reply / comment | ✓ | ✗ | ✗ | ✗ |
| Edit reply của chính mình | — | ✓ | ✗ (Phase 2) | ✓ |
| Nhận notification bài mới publish | ✗ | ✗ | ✓ | ✗ |
| Nhận notification reply vào comment của mình | ✗ | ✓ | ✓ | ✓ |
| Pin / Unpin comment | ✓ | ✗ | ✗ | ✗ |
| Ban / Block user | ✓ | ✗ | ✗ | ✗ |

---

### Chi tiết từng role

#### Admin / Super Admin
- Không tự đăng bài — chỉ duyệt bài và quản lý CTV
- Truy cập: Admin Panel → Collaborators Management
- Có thể deactivate CTV (không xóa) và reactivate lại
- Tạo user mới với role = "CTV" từ User Management

#### Giáo viên / Mentor
- Được đăng bài lên cộng đồng — phải qua duyệt trước khi publish
- Nhận notification khi có reply mới vào bài của mình

#### CTV (Collaborator)
- Xem feed riêng: "Posts needing reply" — chỉ bài chưa đủ 2 CTV reply
- Reply comment trên bài (multi-level nested)
- Không thể xóa reply của mình (First Build)
- Badge "CTV" hiển thị trên comment
- Mất quyền truy cập khi bị deactivate; reply cũ hiển thị "CTV (Inactive)"

#### Học viên (Student)
- Chỉ reply vào bài của giáo viên — không được đăng bài
- Không có quyền quản lý, không thấy CTV dashboard

---

## 3. CORE FUNCTION

### F1 — CTV Auto-Visibility: Tự động thấy bài cần reply

**Luồng:**
1. Giáo viên submit bài → Admin duyệt → bài publish
2. System gửi notification đến tất cả CTV active
3. CTV vào feed "Posts needing reply" → thấy bài có `ctv_reply_count < 2`
4. Khi `ctv_reply_count = 2` → bài biến mất khỏi feed của mọi CTV

**Gherkin:**
```gherkin
Feature: CTV Auto-Visibility

  Scenario: CTV thấy bài chưa đủ 2 CTV reply
    Given bài post đã được Admin duyệt và publish
    And ctv_reply_count của bài = 0 hoặc 1
    When CTV active đăng nhập và vào feed
    Then bài hiển thị trong "Posts needing reply"

  Scenario: CTV không thấy bài đã đủ 2 CTV reply
    Given bài post đã có ctv_reply_count = 2
    When CTV vào feed
    Then bài KHÔNG hiển thị

  Scenario: Bài biến mất khi đạt 2 CTV reply
    Given bài đang có ctv_reply_count = 1
    When CTV thứ 2 reply thành công
    Then ctv_reply_count = 2
    And bài biến mất khỏi feed của tất cả CTV

  Scenario: CTV bị deactivate không thấy feed
    Given CTV account có status = "Inactive"
    When CTV đăng nhập
    Then không có feed "Posts needing reply"
    And không thể reply bất kỳ bài nào
```

---

### F2 — CTV Reply: Gửi comment lên bài

**Luồng:**
1. CTV click vào bài trong feed
2. Viết reply → click Submit
3. System kiểm tra `ctv_reply_count < 2` (optimistic lock)
4. Nếu pass → lưu reply, tăng `ctv_reply_count`, hiển thị badge "CTV"
5. Nếu fail (đã đủ 2) → báo lỗi, reload feed

**Gherkin:**
```gherkin
Feature: CTV Reply Comment

  Scenario: CTV reply thành công
    Given CTV đang xem bài có ctv_reply_count = 0
    When CTV gửi reply
    Then reply được lưu với badge "CTV"
    And ctv_reply_count tăng lên 1

  Scenario: Reply bị block khi đã đủ 2 CTV
    Given bài có ctv_reply_count = 2
    When CTV cố gắng gửi reply
    Then hệ thống trả về lỗi "2 CTV already replied"
    And reply không được lưu

  Scenario: Race condition — 2 CTV reply cùng lúc
    Given bài có ctv_reply_count = 1
    And CTV_A và CTV_B cùng click Submit trong vòng < 100ms
    When hệ thống xử lý 2 request đồng thời
    Then CTV nào đến trước → reply được lưu (ctv_reply_count = 2)
    And CTV đến sau → nhận lỗi "2 CTV already replied"
    And bài biến mất khỏi feed của CTV đến sau

  Scenario: Badge CTV hiển thị trên comment
    Given CTV đã reply thành công
    When bất kỳ user nào xem thread comment
    Then comment của CTV hiển thị badge "CTV"
    And style khác biệt với comment thường
```

---

### F3 — Admin Kiểm Duyệt Bài Đăng

**Luồng:**
1. Giáo viên submit bài → status = `pending_review`
2. Admin vào hàng chờ duyệt → review nội dung
3. Approve → status = `published`, trigger notification gửi CTV
4. Reject → status = `rejected`, thông báo lại Giáo viên

**Gherkin:**
```gherkin
Feature: Admin Kiểm Duyệt Bài

  Scenario: Admin duyệt bài thành công
    Given Giáo viên đã submit bài với status = "pending_review"
    When Admin click "Approve"
    Then status bài chuyển sang "published"
    And notification gửi tới tất cả CTV active
    And bài xuất hiện trong feed CTV

  Scenario: Notification chỉ gửi sau khi duyệt — không gửi khi submit
    Given Giáo viên submit bài lúc 10:00
    And Admin duyệt lúc 10:30
    When Admin click "Approve" lúc 10:30
    Then notification gửi cho CTV lúc 10:30
    And KHÔNG có notification nào lúc 10:00

  Scenario: Admin reject bài
    Given Giáo viên đã submit bài
    When Admin click "Reject"
    Then status bài = "rejected"
    And Giáo viên nhận thông báo bài bị từ chối
    And KHÔNG có notification gửi cho CTV
```

---

### F4 — Admin Tạo Tài Khoản CTV

**Luồng:**
1. Admin vào User Management → tạo user mới
2. Chọn Role = "CTV" (Collaborator)
3. System tạo account → CTV tự động có quyền xem feed

**Gherkin:**
```gherkin
Feature: Admin Tạo CTV

  Scenario: Tạo CTV mới thành công
    Given Admin ở trang User Management
    When Admin tạo user mới với role = "CTV"
    Then account được tạo với status = "Active"
    And CTV có thể đăng nhập và thấy feed "Posts needing reply"

  Scenario: CTV mới chưa reply bài nào
    Given CTV vừa được tạo
    When Admin xem CTV Dashboard
    Then CTV hiển thị trong danh sách với Total Replies = 0
```

---

### F5 — Admin Deactivate / Reactivate CTV

**Luồng:**
1. Admin vào Collaborators Management → chọn CTV
2. Click "Deactivate" → CTV mất quyền truy cập ngay
3. Reply cũ vẫn giữ, hiển thị badge "CTV (Inactive)"
4. Admin có thể Reactivate → CTV được quyền truy cập lại

**Gherkin:**
```gherkin
Feature: Admin Deactivate / Reactivate CTV

  Scenario: Deactivate CTV
    Given CTV đang ở status = "Active"
    When Admin click "Deactivate"
    Then CTV.status = "Inactive"
    And CTV không thấy feed "Posts needing reply" nữa
    And CTV không thể reply bài mới
    And reply cũ của CTV vẫn hiển thị với badge "CTV (Inactive)"

  Scenario: Reply cũ vẫn giữ sau khi deactivate
    Given CTV đã reply 5 bài trước khi bị deactivate
    When Admin deactivate CTV
    Then 5 reply cũ vẫn hiển thị trong thread
    And badge hiển thị "CTV (Inactive)"
    And reply count trên bài không thay đổi

  Scenario: Reactivate CTV
    Given CTV đang ở status = "Inactive"
    When Admin click "Reactivate"
    Then CTV.status = "Active"
    And CTV thấy lại feed "Posts needing reply"
    And CTV có thể reply bài mới
```

---

### F6 — Admin Dashboard: Quản Lý Danh Sách CTV

**Chức năng:**

| Component | Mô tả |
|-----------|-------|
| List View | Bảng tất cả CTV: Name, Status, Joined, Total Replies, Last Activity, Actions |
| Search | Tìm theo tên (real-time, debounce 300ms) |
| Filter | Status (All/Active/Inactive), Activity range, Reply count range |
| Sort | Theo: Last Activity (default), Name, Joined, Reply Count |
| Pagination | 20 CTV/trang, hiển thị "Total: X CTV" |
| View Detail | Click xem full post + comment thread của CTV đó |
| URL sync | Filters reflect vào URL params để share/bookmark |

**Gherkin:**
```gherkin
Feature: Admin CTV Dashboard

  Scenario: Dashboard load danh sách CTV
    Given Admin đăng nhập và vào "Collaborators Management"
    When page load
    Then hiển thị bảng CTV với các cột: Name, Status, Joined, Replies, Last Activity
    And mặc định sort theo Last Activity (mới nhất lên đầu)
    And load < 1 giây cho 50 CTV

  Scenario: Filter CTV theo Status
    Given Admin đang xem danh sách CTV
    When Admin chọn filter "Status: Active"
    Then chỉ hiển thị CTV có status = "Active"
    And badge filter "Status: Active" hiển thị trên UI
    And URL cập nhật: ?status=active

  Scenario: Search CTV theo tên
    Given Admin nhập "John" vào ô tìm kiếm
    When đủ 300ms debounce
    Then danh sách chỉ hiển thị CTV có tên chứa "John" (case-insensitive)
    And hiển thị "X results found"

  Scenario: Không có CTV nào trong hệ thống
    Given chưa có CTV nào được tạo
    When Admin vào Dashboard
    Then hiển thị empty state: "No Collaborators found"
    And có link "Create new CTV"
```

---

### F7 — Notification Hệ Thống

**Trigger 1:** Bài mới được Admin duyệt → gửi cho tất cả CTV active
- Content: `[New Post] {Tiêu đề bài} — Cần CTV reply`

**Trigger 2:** Có reply vào comment của CTV → gửi cho CTV đó
- Content: `[New Reply] {Tên người} đã reply vào comment của bạn`

**Gherkin:**
```gherkin
Feature: In-app Notification

  Scenario: CTV nhận notification khi bài được publish
    Given có 10 CTV đang active
    When Admin approve bài của Giáo viên
    Then 10 CTV đều nhận được in-app notification
    And content: "[New Post] {tiêu đề} — Cần CTV reply"

  Scenario: CTV nhận notification khi có reply vào comment của mình
    Given CTV_A đã reply vào bài post B
    When Học viên X reply vào comment của CTV_A
    Then CTV_A nhận notification
    And content: "[New Reply] {Học viên X} đã reply vào comment của bạn"

  Scenario: CTV bị deactivate không nhận notification
    Given CTV có status = "Inactive"
    When Admin approve bài mới
    Then CTV inactive KHÔNG nhận notification
```

---

### F8 — CTV Dashboard: Xem Lịch Sử Reply Của Mình

**Gherkin:**
```gherkin
Feature: CTV Personal Dashboard

  Scenario: CTV xem danh sách bài đã reply
    Given CTV đăng nhập
    When CTV vào dashboard của mình
    Then hiển thị danh sách bài CTV đã reply (kèm ngày reply, link đến bài)

  Scenario: CTV xem chi tiết một bài
    Given CTV đang xem danh sách bài đã reply
    When CTV click "View detail" vào 1 bài
    Then hiển thị full post + toàn bộ comment thread
    And reply của CTV được highlight
    And CTV không thấy tên CTV khác (masked as "Collaborator")
```

---

## 4. BUSINESS RULE

### BR1 — Giới hạn 2 CTV / bài (Hard Limit)

```gherkin
Rule: Tối đa 2 CTV được reply trên 1 bài post

  Example: CTV thứ 3 không thể reply
    Given bài đã có 2 CTV reply (ctv_reply_count = 2)
    When CTV_3 cố gắng reply
    Then API trả về 403/422 kèm message "2 CTV already replied on this post"
    And reply không được persist xuống DB

  Example: Counter không vượt quá 2
    Given ctv_reply_count hiện tại = 2
    When bất kỳ CTV nào gửi reply
    Then ctv_reply_count KHÔNG tăng thêm
    And DB không có bản ghi reply mới từ CTV thứ 3
```

---

### BR2 — Chỉ Giáo viên / Mentor được đăng bài

```gherkin
Rule: Role-based post creation

  Example: Học viên không thể đăng bài
    Given user có role = "Student"
    When user cố tạo bài post mới
    Then API trả về 403 Forbidden
    And không có bài nào được tạo

  Example: CTV không thể đăng bài
    Given user có role = "CTV"
    When user cố tạo bài post mới
    Then API trả về 403 Forbidden

  Example: Giáo viên đăng bài — vào hàng chờ duyệt
    Given user có role = "Teacher" hoặc "Mentor"
    When user tạo bài mới
    Then bài được tạo với status = "pending_review"
    And bài KHÔNG visible trên cộng đồng cho đến khi Admin duyệt
```

---

### BR3 — Tất cả bài phải qua Admin duyệt trước khi publish

```gherkin
Rule: Mandatory content moderation

  Example: Bài chưa duyệt không hiển thị
    Given Giáo viên submit bài lúc 10:00
    And Admin chưa duyệt
    When bất kỳ user nào xem feed
    Then bài KHÔNG hiển thị trong feed công khai
    And bài KHÔNG hiển thị trong CTV feed

  Example: Chỉ sau khi duyệt mới trigger notification
    Given Admin approve bài lúc 10:30
    Then notification gửi cho CTV lúc 10:30
    And bài xuất hiện trong CTV feed lúc 10:30
```

---

### BR4 — CTV không thể xóa reply (First Build)

```gherkin
Rule: CTV có không có nút Delete reply trong First Build

  Example: CTV không thấy nút xóa reply
    Given CTV đang xem reply của chính mình
    When CTV xem options trên comment
    Then KHÔNG có nút "Delete" hoặc "Remove"

  Example: CTV không thể xóa reply qua API
    Given CTV gửi DELETE request trực tiếp tới API
    When API xử lý request
    Then API trả về 403 Forbidden
    And reply không bị xóa
```

---

### BR5 — CTV bị deactivate: không xóa, chỉ vô hiệu hóa

```gherkin
Rule: Soft deactivation only — no hard delete for CTV

  Example: Deactivate không xóa account
    Given Admin deactivate CTV
    Then CTV.deleted_at IS NULL (không hard delete)
    And CTV.status = "Inactive"
    And CTV vẫn xuất hiện trong Admin Dashboard với badge "Inactive"

  Example: Reply cũ được giữ lại
    Given CTV bị deactivate sau khi đã reply 5 bài
    Then 5 reply vẫn hiển thị trong thread
    And badge hiển thị "CTV (Inactive)" thay vì tên

  Example: ctv_reply_count không thay đổi sau deactivate
    Given bài có ctv_reply_count = 2 (1 reply từ CTV bị deactivate)
    When Admin deactivate CTV đó
    Then ctv_reply_count vẫn = 2
    And bài vẫn không hiển thị trong feed CTV khác
```

---

### BR6 — Race Condition: First-Come-First-Served

```gherkin
Rule: Khi 2 CTV reply đồng thời — 1 người thắng, 1 người nhận lỗi

  Example: Race condition được xử lý đúng
    Given bài có ctv_reply_count = 1
    And CTV_A và CTV_B submit reply trong cùng 1 giây
    When DB xử lý 2 request đồng thời (optimistic/pessimistic lock)
    Then đúng 1 trong 2 reply được lưu
    And ctv_reply_count = 2 (không phải 3)
    And CTV thắng: nhận success response
    And CTV thua: nhận lỗi "2 CTV already replied"
    And CTV thua: feed được reload, bài biến mất

  Example: Counter không bao giờ vượt quá 2
    Given bất kỳ race condition nào xảy ra
    Then ctv_reply_count <= 2 tại mọi thời điểm
```

---

### BR7 — Notification chỉ gửi sau khi Admin duyệt

```gherkin
Rule: Notification trigger = post published (not post submitted)

  Example: Submit không trigger notification
    Given Giáo viên submit bài lúc 09:00
    Then KHÔNG có notification nào được gửi cho CTV lúc 09:00

  Example: Approve trigger notification
    Given Admin approve bài lúc 09:30
    Then notification gửi cho tất cả CTV active ngay lúc 09:30
```

---

### BR8 — Admin không đăng bài

```gherkin
Rule: Admin role = review + manage, không post content

  Example: Admin không có chức năng tạo bài
    Given user có role = "Admin" hoặc "Super Admin"
    When user cố tạo bài post
    Then API trả về 403 Forbidden
    And không có bài nào được tạo
```

---

### Edge Cases — Quan trọng cần implement

| Case | Scenario | Expected |
|------|----------|----------|
| E1 | CTV bị deactivate trong khi đang xem bài | Session hiện tại vẫn chạy, nhưng reply request sẽ bị 403 |
| E2 | Bài bị xóa sau khi CTV đã reply | Cascade delete reply, bài biến mất khỏi CTV dashboard |
| E3 | CTV đổi role (CTV → Teacher) | Mất quyền CTV ngay, reply cũ giữ lại (frozen), bị loại khỏi dashboard |
| E4 | CTV reply xong bị deactivate ngay | Reply đã lưu → giữ lại với badge "CTV (Inactive)" |
| E5 | User block CTV user | Block user ≠ block CTV role; CTV vẫn thấy bài (cần confirm) |
| E6 | CTV mới tạo chưa reply bài nào | Hiển thị trong dashboard với Total Replies = 0 |

---

*RUSH SPEC v1.0 — Tất cả feature build trong 1 phase — Deadline: 27/04/2026*
