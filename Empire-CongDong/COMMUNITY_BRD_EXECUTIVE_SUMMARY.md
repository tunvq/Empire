# 📋 BUSINESS REQUIREMENTS DOCUMENT (BRD)
## Empire Community Module - Executive Summary

**Document Type:** Business Requirements Document (Internal)  
**Module:** Community (Cộng Đồng) v2.0  
**Prepared By:** Senior BA / Product Team  
**Date:** April 10, 2026  
**Status:** Draft for Team Alignment  

---

## 1️⃣ EXECUTIVE SUMMARY (Tóm Tắt 30 giây)

### Mục Đích
Build a **social community platform** để giáo dục viên + học viên **hợp tác, chia sẻ, và học hỏi lẫn nhau** thông qua:
- Social feed (post text/image/video)
- Group-based discussions
- Real-time reactions (like, comment, share)
- Video content (Reels format)

### Problem Statement
- ❌ Hiện tại: Learners học lẻ loi, không có nền tảng trao đổi
- ✅ Giải pháp: Community platform tạo đối thoại, engagement, viral growth

### Expected Impact
| Metric | Target |
|--------|--------|
| Monthly Active Users (MAU) | +500% growth in 3 months |
| Daily Active Users (DAU) | +60% of MAU |
| Engagement Rate (Reactions) | >40% users like/comment daily |
| Content Creators | +300+ creators per month |

---

## 2️⃣ MODULE OVERVIEW

### What is Community?
A **social networking platform** integrated into Empire, enabling:
- **Content Creation:** Users publish text/image/video posts
- **Social Interactions:** Like, comment, share, follow users
- **Groups:** Curated spaces around learning topics (HSA Group, Python Group, etc.)
- **Feed Management:** Personalized feed based on follow + group membership
- **Real-time Engagement:** Live reaction counts, notifications

### Who Are the Users?
| User Type | Needs | Expected Volume |
|-----------|-------|-----------------|
| **Learner (Student)** | Learn from peers, ask Q&A, share resources | 80% of user base |
| **Educator** | Create courses, moderate discussions | 15% |
| **Admin** | Manage users, content moderation, analytics | 5% |

### Why Now?
1. **Competitive:** Competitors (Facebook, Discord) dominate community space
2. **User Retention:** Community = highest engagement driver for edtech platforms
3. **Cost-effective:** Learners create 80% of content (not company) → UGC model
4. **Viral Loop:** Reels + Follow = potential viral growth

---

## 3️⃣ CORE FEATURES & USER JOURNEYS

### Main User Journeys (From Project)

#### Journey 1: Feed Discovery & Consumption (F1-F2)
```
User Login → Browse Hall Feed → Discover Content → Follow Creator → Repeat
```
**Key Features:**
- Infinite scroll feed with newest/trending sorting
- Post card display (avatar, content, engagement metrics)
- User profiles with follower count
- **Success Metric:** >60% DAU consume feed daily

---

#### Journey 2: Social Interaction (F3-F4)
```
User Views Post → Like/Comment/Share → See Counter Update → Notification
```
**Key Features:**
- Like button with real-time counter increment
- Comment system (nested replies)
- Share to specific groups
- Notifications on engagement
- **Success Metric:** >40% of feed viewers react to posts

---

#### Journey 3: Content Creation (F5)
```
User Opens Modal → Type/Add Media → Select Destination (Hall/Group) → Publish
```
**Key Features:**
- Rich text editor (5000 char limit)
- Media upload (JPG/PNG/WebP images, MP4 video)
- Draft auto-save & recovery
- Group routing dropdown
- **Success Metric:** >8% MAU create content weekly

---

#### Journey 4: Group Participation (F6-F7)
```
Browse Groups → Join → View Group Feed → Participate → Leave (optional)
```
**Key Features:**
- Group discovery & join flow
- Group-specific feed (separate from main hall)
- Group moderation (admin controls)
- Permission-based visibility (public/private groups)
- **Success Metric:** >5 groups per user on average

---

#### Journey 5: Video Engagement (F12-F13)
```
View Reel → Auto-play Video → Reactions (Like/Comment) → Swipe to Next
```
**Key Features:**
- Full-screen video player
- Adaptive bitrate streaming (3G/4G/5G)
- Vertical video format (mobile-optimized)
- Creator info + follow button on reel
- **Success Metric:** >15 min average watch time per session

---

### Feature Breakdown by Module

| Feature | Description | Priority | Effort |
|---------|-------------|----------|---------|
| **Feed Display** | List posts with pagination | CRITICAL | M |
| **Post Creation** | Modal with text, media, group select | CRITICAL | L |
| **Like System** | Count + state toggle + real-time sync | HIGH | M |
| **Comment System** | Nested replies, edit, delete | HIGH | L |
| **Group Management** | Create, join, leave, visibility | HIGH | L |
| **User Profiles** | Avatar, bio, follower count, posts | HIGH | M |
| **Notifications** | Real-time alerts for reactions | MEDIUM | M |
| **Reel Video** | Upload, playback, swipe nav | MEDIUM | L |
| **Search** | Find posts, users, groups | MEDIUM | M |
| **Moderation** | Report spam, admin controls | MEDIUM | M |

---

## 4️⃣ PERMISSION MODEL (Role-Based Access)

### 3 Main User Roles

#### Guest (Can read, cannot write)
- ✅ View public posts
- ✅ View public profiles
- ❌ Cannot create post
- ❌ Cannot like/comment
- ❌ Cannot join group

#### Paid User (Full access to create/interact)
- ✅ Create posts (text, image, video)
- ✅ Like, comment, share
- ✅ Join any public group
- ✅ Follow other users
- ✅ Upload media

#### Admin/Moderator (Moderation access)
- ✅ All Paid User permissions
- ✅ Delete inappropriate posts
- ✅ Manage group members
- ✅ View analytics
- ✅ Send announcements

### Critical Permission Rules
1. **Post Creation**: Requires Paid status
2. **Group Private Posts**: Visible only to group members
3. **Edit/Delete**: Only by post owner + admin
4. **Nested Comments**: Requires group membership (if group post)
5. **Moderation Actions**: Admin-only (mute, ban)

---

## 5️⃣ SUCCESS CRITERIA & KPIs

### Business KPIs
| KPI | Current | Month 1 | Month 3 | Target |
|-----|---------|---------|---------|--------|
| MAU | 0 | 500 | 3000 | 5000 |
| DAU | 0 | 200 | 1200 | 2500 |
| Daily Reactions | 0 | 800 | 8000 | 15000 |
| Content Created | 0 | 100 posts | 800 posts | 1500+ |
| Avg Session Time | - | 8 min | 15 min | 20 min |

### Quality KPIs
| KPI | Target |
|-----|--------|
| Test Pass Rate | ≥95% |
| Critical Bug Resolution | <24h |
| Page Load Time | <2s (Hall feed) |
| Video Playback Latency | <1s (start) |
| Real-time Sync Delay | <500ms (like count) |

---

## 6️⃣ DEPENDENCIES & INTEGRATION

### Internal Dependencies
```
Core Auth Module
    ↓
    User Profile Data
    ↓
Community Module (Feed, Posts, Groups, Reactions)
    ↓
Notification System (Real-time alerts)
    ↓
Storage/CDN (Media upload & streaming)
```

### External Dependencies
- **Cloud Storage:** AWS S3 / GCS for media files
- **CDN:** For video delivery (Cloudflare, Akamai)
- **Real-time Database:** Firebase/Supabase for live sync (optional MVP)
- **Search Engine:** Elasticsearch for post/user search (Phase 2)

### Sequencing
1. **MVP (Week 1-4):** Core feed, post creation, basic reactions
2. **Phase 2 (Week 5-8):** Groups, notifications, Reels
3. **Phase 3 (Week 9-12):** Search, analytics, moderation

---

## 7️⃣ RISKS & MITIGATIONS

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **Real-time sync race conditions** (2 users like same post) | Data inconsistency | Use transactional DB, test with concurrent users |
| **Media upload failures** (slow network, large files) | User frustration | Implement retry logic, chunked upload, progress UI |
| **Spam/inappropriate content** | Community quality | Pre-moderation for high-risk users, community reporting |
| **Cold start** (no content initially) | Low engagement | Seed 50-100 posts from team before launch |
| **Mobile UX issues** (swipe, video quality) | Mobile DAU loss | Priority mobile testing, adaptive streaming |

---

## 8️⃣ TESTING STRATEGY

### Test Coverage
- **Total Test Cases:** 96+ TCs
- **Distribution:** Navigation (20), Feed (10), Post (13), Reactions (10), Security (6)
- **Priority:** 55 cases are HIGH/CRITICAL (57% of total)

### Testing Phases
| Phase | Duration | Focus | Tester |
|-------|----------|-------|--------|
| **Unit + Integration** | Week 5-6 | Component testing, API mocking | Dev + QA |
| **System Testing** | Week 7-8 | End-to-end flows, database | Senior QA |
| **UAT (User Acceptance)** | Week 9 | Real user testing, feedback | Beta users |
| **Performance** | Week 10 | Load testing, stress testing | QA + DevOps |
| **Security** | Week 11 | Penetration testing, OWASP | Security eng |

### Critical Test Scenarios
1. **Post creation with large image** (5MB) → Verify upload success
2. **Concurrent 100 users liking same post** → Verify count consistency
3. **Slow 3G network** → Verify video doesn't stall
4. **Permission boundary** (guest → view public, cannot create) → Security test
5. **Draft recovery after page refresh** → UX test

---

## 9️⃣ TIMELINE & EFFORT ESTIMATION

### Phase Breakdown
| Phase | Weeks | Effort | Team Size | Deliverable |
|-------|-------|--------|-----------|-------------|
| **Define (BRD + Design)** | 1-2 | 40h | BA (1), Designer (1) | Requirements doc, Wireframes |
| **Develop (MVP)** | 3-6 | 200h | Dev (3), DevOps (1) | API, Frontend, Infrastructure |
| **QA (System)** | 7-8 | 120h | Senior QA (1) | 96 TCs executed, bug reports |
| **UAT + Launch** | 9-10 | 60h | PM (1), QA (1), Marketing (1) | Go-live, monitoring |

### Critical Path
```
Requirements (W1-2)
    ↓
Design (W2)
    ↓
Dev Sprint 1 (W3-4) → Auth + Core Feed
    ↓
Dev Sprint 2 (W5-6) → Post Creation + Reactions
    ↓
QA System Test (W7-8) → 96 TCs
    ↓
UAT + Go-live (W9-10)
```

**Total Timeline:** 10 weeks to production

---

## 🔟 SUCCESS DEFINITION & SIGN-OFF

### Definition of Done (DoD)
✅ All 96 test cases passing (≥95% pass rate)  
✅ Critical bugs resolved (P0/P1 < 5 issues)  
✅ Performance benchmarks met (page load <2s, sync <500ms)  
✅ Security audit passed (OWASP Top 10 checked)  
✅ Mobile responsiveness verified (iOS + Android)  
✅ UAT feedback incorporated  
✅ Production monitoring in place  

### Launch Gate (Must Have Before Go-live)
- [ ] Executive stakeholder sign-off
- [ ] User documentation ready
- [ ] Support team trained
- [ ] Rollback plan documented
- [ ] Monitoring & alerting configured

---

## 📌 NEXT STEPS (ACTION ITEMS)

| # | Task | Owner | Due Date | Status |
|---|------|-------|----------|--------|
| 1 | Get stakeholder sign-off on this BRD | PM | Apr 11 | 🟡 Pending |
| 2 | Create detailed wireframes per feature | Designer | Apr 12-15 | 🟡 Pending |
| 3 | Break down into 3 dev sprints | Tech Lead | Apr 16 | 🟡 Pending |
| 4 | Prepare test data & environments | QA | Apr 15-17 | 🟡 Pending |
| 5 | Kick-off dev sprint 1 | Tech Lead | Apr 18 | 🟡 Pending |

---

## 📎 APPENDIX: Reference Documents

| Document | Link | Purpose |
|----------|------|---------|
| Project Roadmap | `PROJECT_ROADMAP.xlsx` | Master timeline across all modules |
| User Journeys (20 flows) | `USER_JOURNEYS.xlsx` | End-to-end user paths |
| Test Cases (96 TCs) | `EMPIRE_TEST_CASES_*.md` | QA execution plan |
| Screen Inventory (50+ screens) | `SCREEN_INVENTORY.xlsx` | UI blueprint |
| Role Permissions Matrix | `PERMISSION_MATRIX.xlsx` | Access control rules |

---

**Document Version:** 1.0 - Executive Summary  
**Last Updated:** April 10, 2026  
**Next Review:** After stakeholder feedback (Apr 11-12)
