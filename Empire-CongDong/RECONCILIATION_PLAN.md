# 🛠️ RECONCILIATION PLAN & ACTION ITEMS

**Ngày tạo:** 11 Tháng 4, 2026  
**Mục tiêu:** Hợp nhất Empire-CongDong + SPECS thành một Unified Spec  
**Timeline:** 2 tuần  

---

## 🎯 PHASE 1: RESOLUTION (Tuần 1)

### Task 1.1: Resolve All Contradictions

#### **1.1.1 - Video File Size Decision** ⚡
**Vấn đề:** Empire-CongDong = 100MB vs SPECS = 50MB

**Phân tích:**
| Tiêu chí | 100MB | 50MB |
|----------|-------|------|
| Download time (4G) | ~40s | ~20s | ✅
| Storage cost | Cao | Bình thường | ✅
| UX (upload) | Chậm | Nhanh | ✅
| Mobile friendly | Khó | Tốt | ✅
| Video quality | Tốt, cao bitrate | Tạm được |
| Comparable services | TikTok: 72MB, Reels: unlimited | - |

**🎯 QUYẾT ĐỊNH:** **50MB** cho mỗi video
- **Lý do:** Mobile-first platform, user retention, load faster
- **Ngoại lệ:** Instructors (Paid User) có thể tăng lên 100MB (Phase 2)

**Action:**
- [ ] Update Empire-CongDong: 100MB → 50MB
- [ ] Update SPECS reels spec: Confirm 50MB

---

#### **1.1.2 - Image File Size Decision** ⚡
**Vấn đề:** Empire-CongDong = 10MB vs SPECS = 5MB

**Phân tích:**
- 5MB = ~1080px high-quality JPG ✅ Enough
- 10MB = ~2K raw photo
- Average screenshot = 1-2MB
- Average phone photo = 2-4MB

**🎯 QUYẾT ĐỊNH:** **5MB per image**
- **Lý do:** Better performance, CDN optimization, storage cost
- **Mitigation:** System auto-compresses if needed

**Action:**
- [ ] Update Empire-CongDong: 10MB → 5MB
- [ ] Add image compression rule to SPECS

---

#### **1.1.3 - Max Images Per Post Decision** ⚡
**Vấn đề:** Empire-CongDong = 10 images vs SPECS = 4 images

**Phân tích:**
| Số ảnh | UX | Performance | Bandwidth |
|--------|----|-----------  |-----------|
| 4 | ✅ Rõ ràng | ✅ Nhanh | ✅ OK |
| 10 | ⚠️ Quá tải | ⚠️ Chậm | ⚠️ Cao |
| Benchmark: Instagram | 10 | TikTok (videos) | 1 video |

**🎯 QUYẾT ĐỊNH:** **4 images maximum**
- **Reason:** Better mobile UX, grid layout (2x2), DOM optimization
- **Exception:** Carousel/gallery mode (Phase 2)

**Action:**
- [ ] Update Empire-CongDong: 10 → 4 images
- [ ] Confirm grid layout: 2x2 for 4 images

---

#### **1.1.4 - Infinite Scroll Batch Size** ⚡
**Vấn đề:** Empire-CongDong = 10 posts vs SPECS = 20 posts

**Phân tích:**
- 10 posts: More API calls, better perceived speed
- 20 posts: Fewer API calls, more data cached
- Network latency trade-off: 200-500ms vs 200-500ms
- **Recommendation:** 10 posts first load, then 20 on scroll

**🎯 QUYẾT ĐỊNH:** **10-20 hybrid approach**
```
Initial feed load:   10 posts (faster first render)
On infinite scroll:  20 posts (batch transfer)
Caches:              Redis, 1 hour TTL
```

**Action:**
- [ ] Update both specs: clarify 10 initial, 20 on scroll
- [ ] Add caching strategy to SPECS

---

#### **1.1.5 - Video Format Support** ⚡
**Vấn đề:** Empire-CongDong = MP4/MOV/WebM vs SPECS = MP4 only

**Phân tích:**
- MP4: Universal, supported everywhere, H.264 codec ✅
- MOV: Mac format, can transcode to MP4
- WebM: Open source, Google's format, ~30% browsers
- Best practice: Accept MP4, transcode others

**🎯 QUYẾT ĐỊNH:** **Accept MP4, MOV | Store as MP4**
```
Input formats:  MP4, MOV (accept)
Output format:  MP4 (H.264 codec)
WebM: Optional (Phase 2 for better compression)
Backend:        Use FFmpeg to transcode
```

**Action:**
- [ ] Update SPECS: Support MP4 + MOV input
- [ ] Add FFmpeg transcoding to backend spec
- [ ] Update Empire-CongDong: Clarify output is MP4

---

#### **1.1.6 - Image Formats** ⚡
**Vấn đề:** Empire-CongDong = JPG/PNG vs SPECS = JPG/PNG/WebP

**Phân t析析:**
- JPG: Smallest, universal, lossy
- PNG: Lossless, larger, good for graphics
- WebP: Modern, ~30% smaller, not 100% supported

**🎯 QUYẾT ĐỊNH:** **Accept JPG/PNG/WebP input | Store WebP**
```
Accepted formats: JPG, PNG, WebP
Storage format:   WebP (30% smaller)
Legacy fallback:  JPG if needed
Optimization:     Responsive images (srcset)
```

**Action:**
- [ ] Update SPECS: Add WebP to storage strategy
- [ ] Update Empire-CongDong: Accept JPG/PNG/WebP
- [ ] Add image CDN optimization rules

---

### Task 1.2: Reconcile Role Model 👥

#### **1.2.1 - User Role Hierarchy** ⚡
**Vấn đề:** Empire-CongDong (Học sinh/Giáo viên/QTV) vs SPECS (Guest/Free/Paid/Admin)

**Decision Matrix:**

```
PROPOSED ROLES (Unified):

┌─────────────────────────────────────┐
│     ROLE HIERARCHY (UNIFIED)        │
├─────────────────────────────────────┤
│                                     │
│  ADMIN (Platform)                   │ ← CMS, moderation, analytics
│    ↓                                │
│  ┌─────────────────────┐           │
│  │  PAID USER (Educator)│           │ ← Create groups, reels
│  │  (or "Teacher")     │           │
│  └────┬────────────────┘           │
│       │                             │
│  ┌────┴──────────────┐             │
│  │  GROUP ADMIN      │             │ ← Moderate specific group
│  │  (only in groups) │             │
│  └────┬──────────────┘             │
│       │                             │
│  ┌────┴──────────────┐             │
│  │   FREE USER       │             │ ← Individual learner
│  │   (or "Student")  │             │
│  └───────────────────┘             │
│                                     │
│  GUEST (not logged in)  [Read-only]│
│                                     │
└─────────────────────────────────────┘
```

**Mapping:**
```
Empire-CongDong          SPECS              UNIFIED
──────────────────────────────────────────────────
Học sinh          ←→     Free User          ✅ FREE USER
Giáo viên         ←→     Paid User          ✅ PAID USER (Educator)
Quản trị viên      ←→     Admin              ✅ ADMIN
(không có)        ←→     Group Admin        ✅ GROUP ADMIN (nested in Paid)
(không có)        ←→     Guest              ✅ GUEST
```

**🎯 RECOMMENDED UNIFIED ROLES:**
```
1. GUEST                      - Anonymous user, view-only
2. FREE USER (Học sinh)       - Authenticated, limited features
3. PAID USER / EDUCATOR       - Create content, moderate groups (Giáo viên)
4. GROUP ADMIN                - Role within group, moderate members
5. ADMIN / SUPER ADMIN        - Platform control (Quản trị viên)
```

**Permissions by Role:**
```
┌─────────────────────┬───────┬──────────┬────────┬────────┬──────┐
│ Feature             │ Guest │ Free     │ Paid   │ G-Admin│ Admin│
├─────────────────────┼───────┼──────────┼────────┼────────┼──────┤
│ View public posts   │ ✅    │ ✅       │ ✅     │ ✅     │ ✅  │
│ Create posts        │ ❌    │ ✅       │ ✅     │ ✅     │ ✅  │
│ Upload video        │ ❌    │ ❌       │ ✅     │ ✅     │ ✅  │
│ Create groups       │ ❌    │ ❌       │ ✅     │ ✅     │ ✅  │
│ Moderate content    │ ❌    │ ❌       │ ❌     │ ✅     │ ✅  │
│ Ban/remove users    │ ❌    │ ❌       │ ❌     │ ✅(group) │ ✅ │
│ View all analytics  │ ❌    │ ❌       │ ⚠️(own)│ ⚠️(group) │ ✅ │
│ Create reels        │ ❌    │ ❌       │ ✅     │ ✅     │ ✅  │
│ Private groups      │ ❌    │ ❌       │ ✅     │ ✅     │ ✅  │
│ Pin posts           │ ❌    │ ❌       │ ✅     │ ✅     │ ✅  │
│ Monetization        │ ❌    │ ❌       │ ✅     │ ✅     │ ✅  │
└─────────────────────┴───────┴──────────┴────────┴────────┴──────┘
```

**Action:**
- [ ] CONFIRM: Freemium model or pure free?
- [ ] CONFIRM: Which features require Paid?
- [ ] UPDATE both specs with UNIFIED roles
- [ ] Create role permission matrix (above table)

---

### Task 1.3: Missing Features Inventory 🔍

#### **1.3.1 - Features in Empire-CongDong but NOT in SPECS**
```
✅ MUST ADD to SPECS:
   1. Documents attachment (PDF, DOCX, ZIP)
   2. Tags/Hashtag system (EXPERIENCE, DOCUMENTATION tags)
   3. Multiple tabs on User Profile (Reels, Groups, Notifications)
   4. Edit post functionality (not mentioned in SPECS Flow)
   5. User profile editing (avatar, cover image, bio)
   6. Search results with file filtering
   7. Reels bottom sheet comment design
   8. Notification badge on sidebar
   9. Group creation modal UI
   10. Share to group feature details

ACTION PLAN - Add to SPECS:
   [ ] Create new section: "3.1.7 DOCUMENTS SYSTEM"
   [ ] Create new section: "3.1.8 TAGS & HASHTAGS"  
   [ ] Update "3.1.5" with missing UI tabs
   [ ] Create new section: "3.1.3E - EDIT POST"
```

---

#### **1.3.2 - Features in SPECS but NOT in Empire-CongDong**
```
✅ MUST ADD to Empire-CongDong:
   1. Edit comment feature (1 hour window)
   2. Edit post feature with version history
   3. Rate limiting rules (posts, comments, follows)
   4. Soft delete vs hard delete logic
   5. Share throttling (prevent spam)
   6. Notification deduplication
   7. Real-time sync protocol (WebSocket details)
   8. XSS prevention & sanitization
   9. Performance targets (< 2s load times)
   10. Caching strategy (Redis TTL)
   11. Gamification roadmap (badges, points)
   12. Draft auto-save & recovery
   13. Account deletion flow

ACTION PLAN - Add to Empire-CongDong:
   [ ] Create new file: "10-edit-post.md"
   [ ] Create new file: "11-rate-limiting.md"
   [ ] Create new file: "12-soft-delete-recovery.md"
   [ ] Expand comments file: Add edit comment feature
   [ ] Create new file: "13-security-privacy.md"
   [ ] Create new file: "14-performance-optimization.md"
```

---

## 📋 PHASE 2: CREATION (Tuần 2)

### Task 2.1: Create Unified Master Specification 📊

**File name:** `FINAL_UNIFIED_SPEC.md` (or `EMPIRE_COMMUNITY_v2.0_SPEC.md`)

**Structure:**
```
PART 1: OVERVIEW
  - Module purpose & scope
  - Unified role hierarchy (with matrix)
  - Technology stack
  - Implementation phases

PART 2: USER ROLES & PERMISSIONS (from SPECS)
  - Guest, Free User, Paid User roles
  - Group Admin, Admin roles
  - Permission matrix (all features)
  - Rate limits per role

PART 3: CORE FEATURES (from Empire-CongDong + SPECS)
  ✅ 3.1 User Profiles & Editing
  ✅ 3.2 Feed Management & Display
  ✅ 3.3 Post Creation (with doc attachments)
  ✅ 3.4 Content Reactions (like, comment, share)
  ✅ 3.5 Comments System (with threading)
  ✅ 3.6 Edit Post & Comment
  ✅ 3.7 Group Management
  ✅ 3.8 Search & Discovery
  ✅ 3.9 Reels (Video Short Form)
  ✅ 3.10 Tags & Hashtags System
  ✅ 3.11 Documents Attachment
  ✅ 3.12 Navigation & Layout

PART 4: BUSINESS RULES (from SPECS)
  ✅ 4.1 Content Rules (constraints)
  ✅ 4.2 Reaction Rules
  ✅ 4.3 Follow/Unfollow Rules
  ✅ 4.4 Group Rules  
  ✅ 4.5 Notification Rules
  ✅ 4.6 Rate Limiting & Throttling
  ✅ 4.7 Soft Delete & Data Retention
  ✅ 4.8 Real-time Sync
  ✅ 4.9 Performance Rules (NFRs)
  ✅ 4.10 Security Rules  
  ✅ 4.11 Gamification (Phase 2+)

PART 5: TECHNICAL DETAILS (from SPECS)
  ✅ 5.1 Database Schema
  ✅ 5.2 API Endpoints
  ✅ 5.3 Architecture & Integration Points

PART 6: IMPLEMENTATION ROADMAP
  ✅ Phase 1: MVP (Week 1-4)
  ✅ Phase 2: Enhanced (Week 5-12)
  ✅ Phase 3: Advanced (Week 13+)
```

**Action:**
- [ ] Create new file: `FINAL_UNIFIED_SPEC.md`
- [ ] Copy structure from above
- [ ] Merge content from both sources
- [ ] Apply all decisions (video size, roles, etc.)
- [ ] Add missing features
- [ ] Resolve contradictions

---

### Task 2.2: Create Supplementary Specification Documents 📚

#### **2.2.1 - API Documentation**
**File:** `API_SPEC.md`
```
Content:
  - All endpoints (from SPECS mục 3.2)
  - Request/Response format (JSON)
  - Error codes (400, 401, 403, 404, 429, etc.)
  - Examples for each endpoint
  - Authentication & headers
  - Rate limiting per endpoint
```

#### **2.2.2 - Database Schema Diagram**
**File:** `DATABASE_SCHEMA.md`
```
Content:
  - ER diagram (ASCII or Mermaid)
  - All tables with full definitions
  - PRIMARY/FOREIGN keys
  - UNIQUE constraints
  - Indexes
  - Relationships (1:many, many:many)
  - New tables (for documents, tags, etc.)
```

#### **2.2.3 - Component Library**
**File:** `COMPONENT_SPEC.md`
```
Content:
  - PostCard component (props, states, behavior)
  - CommentThread component
  - ReelPlayer component
  - GroupCard component
  - UserCard component
  - SearchResult component
  - Notification component
  - Modal components (CreatePost, EditProfile, etc.)
  - Bottom sheet components
```

#### **2.2.4 - Security & Privacy Spec**
**File:** `SECURITY_SPEC.md`
```
Content:
  - XSS prevention rules
  - CSRF protection
  - Rate limiting strategy
  - Data encryption
  - PII protection
  - Audit logging
  - Admin access control
```

#### **2.2.5 - Performance Optimization**
**File:** `PERFORMANCE_SPEC.md`
```
Content:
  - Load time targets (< 2s)
  - Caching strategy (Redis, CDN)
  - Database indexing
  - Image optimization (WebP, responsive)
  - Lazy loading strategy
  - Database connection pooling
  - API response compression
```

**Action:**
- [ ] Create API_SPEC.md
- [ ] Create DATABASE_SCHEMA.md (Mermaid diagram)
- [ ] Create COMPONENT_SPEC.md
- [ ] Create SECURITY_SPEC.md
- [ ] Create PERFORMANCE_SPEC.md

---

### Task 2.3: Update Existing Documents 🔄

#### **2.3.1 - Update Empire-CongDong Files**
- [ ] 01-user-profile.md: Add edit profile modal spec, 99+ badge clarification
- [ ] 02-create-post.md: **Change** 100MB→50MB, 10→5MB, 10 images→4
- [ ] 03-post-feed-display.md: **Change** 10→10-20 batch size hybrid
- [ ] 04-post-reactions-share.md: Add share throttling (5+/1h), XSS prevention
- [ ] 05-group-page.md: Clarify Edit Post in group context, documents tab
- [ ] 06-search-discovery.md: Add debounce timing clarification, XSS on search
- [ ] 07-reels-video.md: **Change** 100MB→50MB video limit, add analytics
- [ ] 08-comments-system.md: Add edit comment feature (1h window), mention @username
- [ ] 09-navigation-layout.md: Clarify badge management, notification websocket
- [ ] Create 10-edit-post.md: New feature for post editing
- [ ] Create 11-rate-limiting.md: Rate limit rules across platform
- [ ] Create 12-security-privacy.md: XSS, sanitization, PII protection

#### **2.3.2 - Update COMMUNITY_DETAILED_SPECS.md**
- [ ] Add role permission matrix (comprehensive table)
- [ ] Expand 3.1 with UI/UX details from Empire-CongDong
- [ ] Add 3.1.7: Documents System (PDF, DOCX, ZIP)
- [ ] Add 3.1.8: Tags & Hashtags System
- [ ] Add 3.1.9: Edit Post feature
- [ ] Clarify video format (MP4+MOV→MP4 conversion)
- [ ] Add image optimization strategy (WebP, responsive)
- [ ] Expand 4.6 with Share throttling
- [ ] Add section on Search optimization
- [ ] Add Notification badge UI specs
- [ ] Clarify Infinite scroll batch sizes (10-20)

**Action:**
- [ ] Update all 12 Empire-CongDong files
- [ ] Update COMMUNITY_DETAILED_SPECS.md
- [ ] Update COMPARISON_REPORT.md with new findings
- [ ] Add version numbers & changelogs

---

## 🚀 IMPLEMENTATION TIMELINE

### Week 1 (Apr 11-17)
```
Day 1: Resolve contradictions ✅ (THIS WORK)
Day 2-3: Create unified spec  
Day 4-5: Create supplementary docs
Day 6-7: Review & finalize all docs
```

### Week 2 (Apr 18-24)
```
Day 1-2: Dev estimation from specs
Day 3-4: Create technical architecture doc
Day 5-6: Create user journey maps
Day 7: Final review meeting
```

---

## ✅ SUCCESS CRITERIA

**Phase 1 (Tuần 1):**
- ✅ All contradictions documented & resolved
- ✅ Role model unified & approved
- ✅ FINAL_UNIFIED_SPEC.md created
- ✅ Development team can start coding

**Phase 2 (Tuần 2):**
- ✅ All supplementary docs (API, DB, Components, Security)
- ✅ All existing docs updated
- ✅ No conflicting requirements remain
- ✅ QA team can create test cases

**Overall:**
- ✅ Single source of truth (Master Spec)
- ✅ 95%+ spec completeness
- ✅ Zero contradictions
- ✅ Dev + QA + Product aligned

---

## 📞 STAKEHOLDER SIGN-OFF

**Before starting implementation, need approval from:**

- [ ] Product Manager: Role model & freemium decision
- [ ] Tech Lead: Architecture & API design  
- [ ] QA Lead: Test matrix & coverage
- [ ] Dev Team: Feasibility of Phase 1 MVP
- [ ] Design Lead: UI/UX component library

---

## 📝 NOTES & DECISIONS LOG

**[Record decisions here as you make them]**

- **Decision 1:** Video size = 50MB (decided Apr 11)
- **Decision 2:** Image size = 5MB, max 4 per post (decided Apr 11)
- **Decision 3:** Infinite scroll = 10 initial, 20 batch
- **Decision 4:** Roles = Guest/Free/Paid/GroupAdmin/Admin
- **Decision 5:** Accept MP4+MOV, store MP4
- **Decision 6:** Accept JPG/PNG/WebP, store WebP
- ...

---

**Status:** 🟢 **READY TO EXECUTE** ✅  
**Created:** 11 April 2026  
**Next Review:** Weekly sync meetings on Mondays  
**Approval Status:** ⏳ **PENDING STAKEHOLDER SIGN-OFF**
