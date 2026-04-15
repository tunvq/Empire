# 🚨 ROLE ALIGNMENT REPORT - PERMISSIONS_GUIDE.md Check

**Ngày phát hiện:** 11 Tháng 4, 2026  
**Mức độ:** 🔴 **CRITICAL - Cần fix ngay lập tức**

---

## ⚠️ TÓM TẮT VẤN ĐỀ

| Tài liệu | Roles Định nghĩa | Mô tả | Trạng thái |
|----------|---|---|---|
| **PERMISSIONS_GUIDE.md** | 10 roles | Chi tiết Đầy đủ | ✅ **CANONICAL** (Nguồn gốc sự thật) |
| **COMMUNITY_DETAILED_SPECS.md** | 5 roles | Sơ sài, generic | ⚠️ **INCOMPLETE** (Thiếu roles) |
| **Empire-CongDong (9 files)** | 3 roles | Rất sơ sài | ❌ **KHÔNG MATCH** (Giáo dục focused) |

---

## 📊 SO SÁNH CHI TIẾT CÁC ROLES

### PERMISSIONS_GUIDE.md - 10 Roles (CANONICAL)

```
1. Guest (Khách vãng lai)
2. NonPaid User (Thành viên miễn phí)
3. Paid User (Học viên trả phí)
4. Collaborator (Cộng tác viên) ← Active Role
5. Member (Thành viên nhóm)
6. Mentor (Người hướng dẫn) ← Active Role
7. Moderator (Người kiểm duyệt) ← Active Role
8. Group Admin (Quản lí nhóm)
9. Admin (Quản lý hệ thống)
10. Super Admin (Quản trị viên cao cấp)
```

**Đặc điểm:** Chi tiết, có 4 "Active Roles" (Collaborator, Mentor, Moderator, Group Admin/Admin), cụ thể từm vụn

---

### COMMUNITY_DETAILED_SPECS.md - 5 Roles (INCOMPLETE)

```
1. Guest (Anonymous)
2. Free User
3. Paid User
4. Group Admin
5. Admin (Super Admin)
```

**Thiếu sót so với PERMISSIONS_GUIDE:**
- ❌ Không có `NonPaid User` (naming khác)
- ❌ Không có `Collaborator`
- ❌ Không có `Mentor`
- ❌ Không có `Moderator`
- ❌ Không có `Member`
- ✅ Group Admin có
- ✅ Admin/Super Admin có (naming sơ sài)

**Trạng thái:** ⚠️ Sơ sài, thiếu các "Active Roles"

---

### Empire-CongDong (9 files) - 3 Roles (KHÔNG MATCH)

```
Mỗi file nói:
"Vai trò: Tất cả người dùng đã xác thực 
  (Học sinh, Giáo viên, Quản trị viên)"
```

**Vấn đề:**
- ❌ Học sinh = NonPaid User (nhưng không chi tiết)
- ❌ Giáo viên = Mentor OR Paid User? (MÂUTHUẪN)
- ❌ Quản trị viên = Admin OR Group Admin? (KHÔNG RÕ)
- ❌ Không có Guest role
- ❌ Không có Collaborator
- ❌ Không có Moderator
- ❌ Không có "Active Roles" distinction

**Mapping không rõ ràng:**
```
Empire-CongDong       PERMISSIONS_GUIDE    SPECS
─────────────────────────────────────────────────
Học sinh       ←→     NonPaid User   ←→  Free User
Giáo viên      ←→     Mentor?        ←→  Paid User?
                      OR Paid User?
                      (UNCLEAR)
Quản trị viên  ←→     Admin          ←→  Admin
                      OR Group Admin?
                      (UNCLEAR)

Thiếu role:
- Collaborator (KHÔNG NHẮC ĐÓ)
- Moderator (KHÔNG NHẮC ĐÓ)
- Member (KHÔNG NHẮC ĐÓ)
- Super Admin (KHÔNG NHẮC ĐÓ)
```

---

## 🔴 DANH SÁCH CÁC KHÔNG KHỚP (Misalignments)

### #1 - Collaborator Role CHƯA được định nghĩa

**PERMISSIONS_GUIDE nói:**
- `Collaborator` = Cộng tác viên
- Hỗ trợ quản lý bài post, reply comment có giới hạn (max 2 CTV/post)
- Được tạo với role Collaborator khi tạo user
- **Active Role** (tích cực quản lý)

**SPECS nói:**
- Không nhắc đến `Collaborator` hoàn toàn ❌

**Empire-CongDong nói:**
- Không nhắc đến `Collaborator` hoàn toàn ❌

**Impact:** 🔴 **CRITICAL**
- Tính năng "Collaborator" không thể implement
- Quyền reply comment của CTV không rõ ràng
- QA không biết test

---

### #2 - Mentor Role định nghĩa MÂUTHUẪN

**PERMISSIONS_GUIDE nói:**
- `Mentor` (Người hướng dẫn)
- Hướng dẫn, duyệt bài, báo cáo
- Quyền chịu System Config (`allow_mentor_post`, `allow_mentor_upload`)
- **Active Role**

**SPECS nói:**
- Không nhắc đến `Mentor` với tư cách role riêng
- Giáo viên = Paid User (không phải Mentor role)

**Empire-CongDong nói:**
- "Giáo viên" nhưng không định nghĩa chi tiết quyền Mentor

**Impact:** 🔴 **CRITICAL**
- Quyền của "Giáo viên / Mentor" không rõ ràng
- System Config cho mentor không thể implement

---

### #3 - Moderator Role HOÀN TOÀN THIẾU

**PERMISSIONS_GUIDE nói:**
- `Moderator` (Người kiểm duyệt)
- Kiểm duyệt bài viết toàn hệ thống
- Quản lý thành viên, nội dung
- **Active Role**

**SPECS nói:**
- Không nhắc đến `Moderator` ❌

**Empire-CongDong nói:**
- Không nhắc đến `Moderator` ❌

**Impact:** 🔴 **CRITICAL**
- Tính năng moderation không được spec
- QA không biết moderator nên có quyền gì

---

### #4 - Member Role (Group) CHƯA RÕ

**PERMISSIONS_GUIDE nói:**
- `Member` (Thành viên nhóm)
- Học trong nhóm cụ thể
- Quyền trong group + Sub-private
- Context-based permissions

**SPECS nói:**
- Nhắc đến "group members" nhưng không định nghĩa role riêng

**Empire-CongDong nói:**
- Nhắc đến "thành viên nhóm" nhưng không rõ member role

**Impact:** 🟡 **MEDIUM**
- Sub-private permission logic không rõ

---

### #5 - NonPaid vs Free User (Naming mâu thuẫn)

**PERMISSIONS_GUIDE nói:**
- `NonPaid User` (Thành viên miễn phí)
- Chưa mua khóa học

**SPECS nói:**
- `Free User` (tên gọi khác)

**Empire-CongDong nói:**
- `Học sinh` (khác lại)

**Impact:** 🟡 **MEDIUM**
- Naming inconsistency
- Mô tả quyền có khác nhau không?

---

### #6 - Paid User Definition KHÁC

**PERMISSIONS_GUIDE nói:**
- `Paid User` = Học viên
- Đã mua khóa học
- View Private Content + Upload File + Create Post

**SPECS nói:**
- `Paid User` = Premium user
- Create videos, reels, private groups, pin posts

**Difference:** 🟡 **MEDIUM**
- Quyền không hoàn toàn giống nhau
- PERMISSIONS_GUIDE focus vào Course learning
- SPECS focus vào Social network premium

---

### #7 - Admin vs Group Admin CONFUSION

**PERMISSIONS_GUIDE nói:**
- `Group Admin` = Quản lý nhóm (Group-scoped)
- `Admin` = Quản lý hệ thống (System-scoped)
- `Super Admin` = Highest level (Config system)

**SPECS nói:**
- `Admin` (unclear if Group Admin or System Admin)
- Mention "Group Admin" separately

**Empire-CongDong nói:**
- "Quản trị viên" nhưng không rõ Group Admin hay System Admin

**Impact:** 🔴 **CRITICAL**
- Authorization logic để lại cơ hội lỗi

---

## 🎯 CÁC CÂU HỎI CẦN TRẢ LỜI NGAY

### **Q-PERM-1: PERMISSIONS_GUIDE.md có phải "Canonical Source of Truth" không?**

**Context:** PERMISSIONS_GUIDE chi tiết hơn hẳn, nhưng SPECS & Empire không follow

**Câu hỏi:**
- PO/Product: PERMISSIONS_GUIDE.md có phải "single source of truth" cho roles không?
- Nếu YES: SPECS & Empire phải align 100%
- Nếu NO: Tại sao? và cái nào là source of truth?

**Assumption nếu ko trả lời:**
- 🔵 ASSUME: **YES, PERMISSIONS_GUIDE.md = Single Source of Truth**
  - Reason: Chi tiết, toàn diện, có giải thích context-based
  - Action: Tất cả spec phải update to match 10 roles

---

### **Q-PERM-2: Collaborator role có trong Phase 1 MVP không?**

**Context:** PERMISSIONS_GUIDE định nghĩa Collaborator (max 2 CTV/post), nhưng SPECS/Empire không nhắc

**Câu hỏi:**
- Product: Tính năng Collaborator có trong Phase 1 MVP không?
- Implementation: CTV reply comment max 2 per post?
- Scope: Bắt buộc hay nice-to-have?

**Assumption nếu ko trả lời:**
- 🔵 ASSUME: **YES, in Phase 1**
  - Reason: PERMISSIONS_GUIDE already designed it
  - Action: Add Collaborator role to all specs

---

### **Q-PERM-3: Mentor Role - "Giáo viên" = Mentor hay Paid User?**

**Context:** PERMISSIONS_GUIDE define Mentor (Active Role), nhưng SPECS map thành Paid User

**Câu hỏi:**
- Product: "Giáo viên" trong platform là Mentor role hay Paid User role?
- Quyền: Giáo viên có đặc quyền post/upload giới hạn NHƯNG được config không?
- System Config: `allow_mentor_post`, `allow_mentor_upload` có cần implement không?

**Assumption nếu ko trả lời:**
- 🔵 ASSUME: **"Giáo viên" = Mentor Role**
  - Reason: PERMISSIONS_GUIDE is more detailed
  - Action: Map Giáo viên → Mentor + System Config controls

---

### **Q-PERM-4: Moderator role - có cần implement không?**

**Context:** PERMISSIONS_GUIDE define Moderator (system-level content moderation), nhưng SPECS/Empire không nhắc

**Câu hỏi:**
- Product: Moderator role có trong Phase 1 hay Phase 2+?
- Quyền: Moderator quyền gì? (Delete posts, ban users?)
- Scope: System-level hay Group-level only?

**Assumption nếu ko trả lời:**
- 🔵 ASSUME: **YES, in Phase 1**
  - Reason: Content moderation bắt buộc từ day 1
  - Action: Add Moderator to all specs

---

### **Q-PERM-5: Member role (Group-scoped) - sub-private logic?**

**Context:** PERMISSIONS_GUIDE define Member + Sub-private access control, nhưng SPECS nói sơ sài

**Câu hỏi:**
- Tech: Sub-private content (Member-only) có trong Phase 1 không?
- Logic: Member assigned by Group Admin to specific sub-private content?
- Difference: Member vs regular group member?

**Assumption nếu ko trả lời:**
- 🔵 ASSUME: **NO, defer to Phase 2**
  - Reason: Complexity, Phase 1 focus on basics
  - Action: Document in roadmap

---

### **Q-PERM-6: NonPaid vs Free User - naming & permissions?**

**Context:** PERMISSIONS_GUIDE use "NonPaid", SPECS use "Free", Empire use "Học sinh"

**Câu hỏi:**
- Product: Tên gọi chính thức? (NonPaid, Free, Student?)
- Permissions: Giống nhau không? (Chi tiết đầy đủ?)
- Docs: Tất cả align về naming không?

**Assumption nếu ko trả lời:**
- 🔵 ASSUME: **Use "NonPaid User" terminology**
  - Reason: PERMISSIONS_GUIDE is standard
  - Action: Update SPECS & Empire to use "NonPaid User"

---

## ✅ ACTION ITEMS

### **CẤP ĐỘ 1 - NGAY LẬP TỨC (CRITICAL)**

1. **✅ CONFIRM:** PERMISSIONS_GUIDE.md = Single Source of Truth?
   - [ ] PO confirm
   - [ ] If YES: → proceed to update all specs
   - [ ] If NO: → clarify which is source of truth

2. **✅ UPDATE COMMUNITY_DETAILED_SPECS.md:**
   - [ ] Add Collaborator role (max 2 CTV/post)
   - [ ] Clarify Mentor vs Paid User distinction
   - [ ] Add Moderator role (system-level)
   - [ ] Add Member role (group-level context)
   - [ ] Update role permission matrix (10 roles instead of 5)

3. **✅ UPDATE Empire-CongDong (all 9 files):**
   - [ ] Update "Quyền truy cập" section: Detail all 10 roles
   - [ ] Map each feature to specific roles from PERMISSIONS_GUIDE
   - [ ] Add Collaborator, Mentor, Moderator, Member context
   - [ ] Clarify Học sinh = NonPaid User, Giáo viên = Mentor, QTV = Admin

4. **✅ CREATE new file:**
   - [ ] `ROLE_ALIGNMENT_MATRIX.md`
   - [ ] Map: PERMISSIONS_GUIDE 10 roles → SPECS → Empire → Features
   - [ ] Single source document for all role references

---

### **CẤP ĐỘ 2 - TUẦN NÀY (HIGH)**

5. **✅ Collaborator Feature Spec:**
   - [ ] Document max 2 CTV/post rule
   - [ ] Specify CTV assignment UI flow
   - [ ] Specify reply permission checking logic

6. **✅ Mentor Role Spec:**
   - [ ] List mentor permissions (post, upload, ask)
   - [ ] Document system.config controls
   - [ ] Specify flow: Enable/disable mentor capabilities

7. **✅ Moderator Role Spec:**
   - [ ] List moderator permissions (delete, ban, etc.)
   - [ ] Specify audit logging
   - [ ] Specify moderator actions workflow

---

## 📊 UPDATED Q&A TABLE

**Replace Q6 in previous Q&A with:**

| Q# | Vấn đề | Priority | New Status |
|----|--------|----------|-----------|
| **Q-PERM-1** | PERMISSIONS_GUIDE = Canonical? | 🔴 CRITICAL | ⏳ **BLOCKO** - Must confirm 1st |
| **Q-PERM-2** | Collaborator in Phase 1? | 🔴 CRITICAL | ⏳ Depends on Q-PERM-1 |
| **Q-PERM-3** | Giáo viên = Mentor role? | 🔴 CRITICAL | ⏳ Depends on Q-PERM-1 |
| **Q-PERM-4** | Moderator in Phase 1? | 🔴 CRITICAL | ⏳ Depends on Q-PERM-1 |
| **Q-PERM-5** | Member + Sub-private? | 🟡 HIGH | ⏳ Phase 2 candidate |
| **Q-PERM-6** | NonPaid vs Free naming? | 🟡 HIGH | ⏳ Clarify naming |

---

## 🎯 RECOMMENDATION

**IMMEDIATE ACTION:**
1. Answer Q-PERM-1 FIRST (confirm PERMISSIONS_GUIDE = canonical)
2. Once confirmed, all other specs will align follow

**If PERMISSIONS_GUIDE = Canonical:**
- ✅ 10 roles (not 3, not 5)
- ✅ 4 Active Roles (Collaborator, Mentor, Moderator, Group Admin)
- ✅ System Config controls
- ✅ Context-based permissions (Sub-private, Group, CTV limits)

**Then Q&A becomes simpler:**
- Q1-5 → Answered (just align to PERMISSIONS_GUIDE)
- Q7-20 → Still needed (but narrower scope)

---

**Status:** 🔴 **BLOCKING - Cannot proceed with full Q&A until Q-PERM-1 answered**

