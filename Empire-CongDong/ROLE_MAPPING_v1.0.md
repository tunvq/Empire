# 🗺️ ROLE MAPPING v1.0 - Phase 1 MVP (10 ROLES - COMPLETE)
**Based on:** DECISION_RECORD_2026-04-11.md  
**Authority Source:** PERMISSIONS_GUIDE.md  
**Status:** DRAFT - Awaiting Review

---

## 📋 10 ROLES - COMPLETE PHASE 1 DEFINITIONS

### **Role 1️⃣: GUEST** 
```
WHO: Khách vãng lai (chưa đăng nhập)
SCOPE: System-wide, Public only
PARENT: N/A

PERMISSIONS:
  ✅ View public posts
  ✅ View public courses
  ✅ Search (limited - public results only)
  ✅ View public groups
  ❌ Cannot register (must go through auth)
  ❌ Cannot post, comment, like
  ❌ Cannot access private content

RESPONSIBILITY: Khám phá nền tảng, tăng traffic
```

---

### **Role 2️⃣: NONPAID USER**
```
WHO: Thành viên miễn phí (Học sinh)
SCOPE: System-wide
PARENT: Registered user, No payment

PERMISSIONS:
  ✅ Login, view profile
  ✅ View public + group posts
  ✅ Create posts (text + images MAX 10MB × 5 images)
  ✅ Comment (nested 2 levels max)
  ✅ Like, Share posts
  ✅ Follow users
  ✅ Join public groups
  ✅ Register for free courses
  ✅ Upvote Q&A answers
  ❌ Cannot upload videos/documents
  ❌ Cannot view private content
  ❌ Cannot access premium materials
  ❌ Cannot be Collaborator/Mentor

RESPONSIBILITY: Tham gia cộng đồng, phát triển kiến thức cơ bản
```

---

### **Role 3️⃣: PAID USER**
```
WHO: Học viên / Người trả phí (Premium member)
SCOPE: System-wide
PARENT: NonPaid User + Payment subscription

PERMISSIONS:
  ✅ All NonPaid User permissions
  ✅ View private content (after admin approval)
  ✅ Create posts with advanced features
  ✅ Upload videos (50MB max)
  ✅ Upload documents (PDF, DOCX, ZIP)
  ✅ Create collections
  ✅ Ask Q&A questions
  ✅ Register for paid courses
  ✅ Advanced search features
  ✅ Access exclusive materials
  ❌ Cannot upload as system material
  ❌ Cannot moderate content
  ❌ Cannot manage users

CONSTRAINTS:
  • Must be approved by admin to see private content
  • Limited to own posts/data
  
RESPONSIBILITY: Doanh thu chính, nâng cao chất lượng nền tảng
```

---

### **Role 4️⃣: COLLABORATOR** ⭐ ACTIVE ROLE
```
WHO: Cộng tác viên (được gán per post)
SCOPE: Per-post basis (max 2 CTV per post)
PARENT: Any registered user (NonPaid or Paid)
CREATED_BY: Mentor, Group Admin, or Post Owner

PERMISSIONS:
  ✅ Reply comment on assigned post (MAX 2 CTV per post - CD06)
  ✅ View private content of assigned post
  ✅ Edit own replies (1h grace period)
  ✅ Pin important comments on post
  ✅ Moderate spam on assigned post
  ✅ View/Download post attachments
  ❌ Cannot edit original post
  ❌ Cannot delete other CTV's work
  ❌ Cannot assign other CTVs

CONSTRAINTS - 2-CTV RULE (CRITICAL):
  • Max 2 collaborators can reply per single post
  • Once 2 CTV reply → 3rd CTV gets BLOCKED
  • Mentor/Group Admin can reassign CTV anytime
  • CTV removed from post → loses reply access
  
EXAMPLE FLOW:
  Post A: Mentor assigns CTV1, CTV2 → Max reached
  CTV1 replies → ghi nhận vào reply_collaborators
  CTV2 replies → ghi nhận vào reply_collaborators (FULL)
  CTV3 tries reply → BLOCK (post already has 2 CTV)
  Mentor removes CTV1 → CTV3 can now reply

RESPONSIBILITY: Nâng cao nội dung, hỗ trợ cộng đồng, kiểm soát chất lượng
```

---

### **Role 5️⃣: MEMBER** ⭐ ACTIVE ROLE
```
WHO: Thành viên nhóm (tham gia group cụ thể)
SCOPE: Single group (context-based)
PARENT: Any registered user (assigned by Group Admin)
CREATED_BY: Group Admin approval

PERMISSIONS:
  ✅ All basic user permissions within group
  ✅ View sub-private content (member-scoped)
  ✅ Create posts in group
  ✅ Comment in group (unrestricted)
  ✅ Ask Q&A in group
  ✅ Access group materials
  ✅ Participate in group activities
  ❌ Cannot manage group
  ❌ Cannot approve members
  ❌ Cannot remove members
  ❌ Cannot edit group settings

CONSTRAINTS:
  • Must be approved as group member first
  • Only access group-scoped content
  • Sub-private visibility: member_id ∈ group_members
  
RESPONSIBILITY: Cộng tác trong nhóm, chia sẻ kiến thức với thành viên
```

---

### **Role 6️⃣: MENTOR** ⭐ ACTIVE ROLE
```
WHO: Người hướng dẫn / Giáo viên
SCOPE: System-wide (organization-wide)
PARENT: Paid User + mentor flag
CREATED_BY: Admin or Self-designation (org-specific)

PERMISSIONS:
  ✅ All Paid User permissions
  ✅ Create posts marked as "Mentor post"
  ✅ Upload educational materials
  ✅ Create mentor-specific groups
  ✅ Direct message students
  ✅ Assign Collaborators (max 2 per post)
  ✅ Approve member join requests (in own groups)
  ✅ Access student performance analytics
  ✅ Post Q&A answers
  
PHASE 1 CONFIG - SIMPLIFIED (No system.config UI):
  • Mentor can post, upload, ask by default → TRUE for Phase 1
  • Phase 2 can add: system.config flags:
    - allow_mentor_post: Can create posts?
    - allow_mentor_upload: Can upload files?
    - allow_mentor_ask: Can ask questions?
  
CONSTRAINTS:
  • Requires admin/organization designation
  • Some permissions controlled by org policy later
  
RESPONSIBILITY: Hướng dẫn học viên, duyệt nội dung, xử lý vi phạm trong nhóm
```

---

### **Role 7️⃣: MODERATOR** ⭐ ACTIVE ROLE
```
WHO: Người kiểm duyệt nội dung
SCOPE: System-wide (organization-level moderation)
PARENT: Admin-assigned role
CREATED_BY: Super Admin or Admin only

PERMISSIONS:
  ✅ View ALL content (public/private/sub-private)
  ✅ Delete inappropriate posts/comments
  ✅ Ban/suspend users for violations
  ✅ Approve/reject member join requests (system-level)
  ✅ Manage reported content
  ✅ View admin analytics & logs
  ✅ Configure moderation rules
  ✅ Process user complaints
  ✅ Access content audit trails
  ❌ Cannot modify system config
  ❌ Cannot access super admin features

CONSTRAINTS:
  • System-level moderation authority (across all groups)
  • Must follow escalation procedures
  • Requires audit logging of all actions
  
RESPONSIBILITY: Kiểm duyệt, đảm bảo nền tảng an toàn, xử lý vi phạm
```

---

### **Role 8️⃣: GROUP ADMIN**
```
WHO: Quản lý nhóm (per group)
SCOPE: Single group only
PARENT: Group member + admin promotion
CREATED_BY: Admin or Group founder

PERMISSIONS:
  ✅ Edit group info, description, rules
  ✅ Approve/reject member join requests
  ✅ Remove members from group
  ✅ Pin/unpin posts in group
  ✅ Assign Collaborators (max 2 per post)
  ✅ Assign Members to sub-private content
  ✅ View group analytics & stats
  ✅ Create group announcements
  ✅ Configure group permissions
  ❌ Cannot ban users (only remove from group)
  ❌ Cannot delete other posts (only pin/unpin)
  ❌ Cannot access system settings

CONSTRAINTS:
  • Authority limited to their specific group only
  • Cannot override organization policies
  • Cannot modify system-level features
  
RESPONSIBILITY: Quản lý nhóm, hỗ trợ thành viên, giữ gìn nhóm
```

---

### **Role 9️⃣: ADMIN**
```
WHO: Quản lý hệ thống
SCOPE: System-wide (entire platform)
PARENT: Assigned by Super Admin
CREATED_BY: Super Admin only

PERMISSIONS:
  ✅ ALL permissions (except system.config - see Super Admin)
  ✅ Manage all users (create, edit, ban, suspend)
  ✅ Manage all content (delete, approve, archive)
  ✅ Create organization groups
  ✅ Assign other roles (Mentor, Moderator, Group Admin)
  ✅ View all analytics & reports
  ✅ Access audit logs
  ✅ Manage billing & subscriptions
  ✅ Create system templates
  ❌ Cannot modify system.config settings
  ❌ Cannot create Super Admin accounts

CONSTRAINTS:
  • Must follow escalation procedures
  • Limited by organizational policies set by Super Admin
  • Audit logging required for all actions
  
RESPONSIBILITY: Quản lý toàn hệ thống, vận hành nền tảng
```

---

### **Role 🔟: SUPER ADMIN**
```
WHO: Quản trị viên cao cấp
SCOPE: System-wide governance (entire platform + config)
PARENT: Organization founder/CTO
CREATED_BY: System initialization only

PERMISSIONS:
  ✅ ALL permissions across entire system
  ✅ Manage system.config settings:
    - Platform policies
    - Feature toggles (allow_mentor_post, etc.)
    - Tier/pricing configuration
    - Integration settings
  ✅ Create/manage Super Admin accounts
  ✅ Create/manage Admin accounts
  ✅ Override any organizational decisions
  ✅ Access complete audit logs
  ✅ Configure system integrations
  ✅ Manage API keys & webhooks
  ✅ Emergency access/recovery functions

CONSTRAINTS:
  • VIP access - usually 1-3 people max
  • Requires authentication (2FA recommended)
  • All actions require audit logging
  
RESPONSIBILITY: Vận hành tồn bộ platform, cấu hình hệ thống, chiến lược tổ chức
```

---

## 🔀 ROLE HIERARCHY & INHERITANCE

```
Access Level     Role Hierarchy
────────────────────────────────
Level 1         Super Admin (全能)
                    ↓
Level 2         Admin (所有, except config)
                    ↓
Level 3a        Moderator (全系統内容管理)
                    ↓
Level 3b        Group Admin (グループ単位管理)
                    ↓
Level 4         Mentor (教育指導) + Member (グループ限定)
                    ↓
Level 5         Collaborator (ポスト単位編集)
                    ↓
Level 6         Paid User (プレミアム)
                    ↓
Level 7         NonPaid User (基本)
                    ↓
Level 8         Guest (Public Access)
```

---

## 📊 QUICK REFERENCE - WHO CAN DO WHAT?

| Feature | Guest | NonPaid | Paid | CTV | Member | Mentor | Moderator | G-Admin | Admin | S-Admin |
|---------|-------|---------|------|-----|--------|--------|-----------|---------|-------|---------|
| View Public | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Post | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Upload Video | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| CTV Reply (max 2) | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Group | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Moderate Content | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ |
| System Config | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## ✅ VALIDATION CHECKLIST

- [ ] All 10 roles clearly defined with purpose
- [ ] Permissions unambiguous (✅ = CAN, ❌ = CANNOT)
- [ ] Active Roles marked (Collaborator, Member, Mentor, Moderator)
- [ ] Collaborator 2-person limit explicit with examples
- [ ] Mentor simplified (no system.config UI in Phase 1)
- [ ] Advanced features included (Sub-private, CTV limits, Context-based)
- [ ] Role hierarchy clear
- [ ] Ready for dev team handoff

---

## 👉 **REVIEW THIS:**

1. **Tất cả 10 roles xác định rõ chưa?**
2. **4 Active Roles (CTV, Member, Mentor, Moderator) hiểu rõ trách nhiệm chưa?**
3. **Collaborator "max 2 CTV per post" rõ chưa?**
4. **Member "sub-private context" rõ chưa?**
5. **Có lỗi hay chỗ nào cần sửa không?**

---

**Status:** ⏳ Awaiting User Review  
**Next:** Confirm this mapping, then update COMMUNITY_DETAILED_SPECS.md Section 2
