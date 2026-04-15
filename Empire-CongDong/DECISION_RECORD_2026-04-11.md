# 📋 DECISION RECORD - Phase 1 MVP Scope
**Date:** April 11, 2026  
**Authority:** Product Owner / BA  
**Status:** ✅ FINALIZED

---

## 🎯 3 STRATEGIC DECISIONS - PHASE 1 MVP

### **Decision 1: Role Model Scope ✅ OPTION A (UPDATED TO 10 ROLES)**
```
✅ SELECTED: Full 10-role model (PERMISSIONS_GUIDE.md)
  1. Guest
  2. NonPaid User (Học sinh)
  3. Paid User
  4. Collaborator (Cộng tác viên) ← Active Role
  5. Member (Thành viên nhóm) ← Active Role
  6. Mentor (Giáo viên) ← Active Role
  7. Moderator (Quản lý nội dung) ← Active Role
  8. Group Admin (Quản lý nhóm)
  9. Admin (Quản lý hệ thống)
  10. Super Admin (Quản trị cao cấp)

Impact: 
  - Dev Team: Implement COMPLETE RBAC model per PERMISSIONS_GUIDE
  - QA: Write comprehensive test cases for all 10 roles
  - DB: Add all role flags + Active Role audit tracking
  - Timeline: +1-2 days (more complex than 7-role)
```

---

### **Decision 2: Mentor Config ✅ OPTION B**
```
✅ SELECTED: Simplified (no system.config UI in Phase 1)
  • Mentor has full permissions: post, upload, ask
  • NO system.config flags in MVP
  • Clean, fast implementation
  • Phase 2 can add advanced config if needed

Impact:
  - Dev Team: Skip config management logic
  - DB: No config table in Phase 1
  - Timeline: -1 day of work
```

---

### **Decision 3: Advanced Features ✅ OPTION A**
```
✅ SELECTED: Full advanced features
  • Collaborator max 2 people per post (enforced)
  • Sub-private content (Member-scoped visibility)
  • Full CD01-CD06 permission condition logic
  • Edit grace period (1h) for comments/posts

Impact:
  - Dev Team: Implement permission condition checks
  - DB: Add collaborator_limit, context_level fields
  - Timeline: +2 days of work
```

---

## 📊 SUMMARY

| Aspect | Decision | Effort | Timeline |
|--------|----------|--------|----------|
| **Roles** | 10-role COMPLETE | VERY HIGH | +2 days |
| **Config** | Simplified | LOW | -1 day |
| **Features** | Advanced | HIGH | +2 days |
| **TOTAL NET** | **Full MVP** | **HIGH** | **~3-4 days** |

---

## 🚀 NEXT STEPS (Phần tiếp theo)

Phần 2: Update file gì + Cách update

---

**Record By:** AI Copilot  
**Approved By:** User (Product Owner)  
**Binding Status:** ✅ AUTHORITATIVE - All specs/features must align to this
