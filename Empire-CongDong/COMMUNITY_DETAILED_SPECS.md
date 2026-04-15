# 📋 COMMUNITY MODULE - DETAILED SPECIFICATIONS
## Overview | User Access | Core Functionality | Business Rules

**Document Type:** Detailed Specification Document  
**Module:** Community (Cộng Đồng) v2.0  
**Date:** April 10, 2026  
**Status:** Reference Documentation  
**Audience:** Dev Team, QA Team, Product Management

---

## 🎯 SECTION 1: OVERVIEW

### 1.1 Module Purpose & Vision

**Module Name:** Community (Cộng Đồng)  
**Tagline:** "Connect, Share, Learn Together"  
**Primary Goal:** Build an engaged learning community where users collaborate, share knowledge, and maintain daily interaction.

### 1.2 Core Value Proposition

| Aspect | Value |
|--------|-------|
| **For Learners** | Social learning environment, peer support, resource sharing |
| **For Educators** | Community engagement metrics, content recommendations, network building |
| **For Platform** | User retention, viral growth, UGC (user-generated content) |
| **For Business** | Ad platform potential, data insights, subscription upsell |

### 1.3 Module Scope (MVP Definition)

#### **IN SCOPE (Included in MVP)**
✅ Main Hall Feed (text, image posts)  
✅ Post Creation (text + media upload)  
✅ Reactions (like, comment, share)  
✅ User Profiles (avatar, bio, follower count)  
✅ User Follow/Unfollow  
✅ Groups (create, join, group-specific feed)  
✅ Group Moderation (admin controls)  
✅ Notifications (real-time for reactions)  
✅ Authentication & Authorization  

#### **OUT OF SCOPE (Phase 2+)**
❌ Reel/Video streaming (Phase 2)  
❌ Advanced Search (Phase 2)  
❌ Hashtag system (Phase 2)  
❌ Analytics dashboard (Phase 2)  
❌ Content recommendation algorithm (Phase 2)  
❌ Live streaming (Phase 3)  
❌ Direct messaging (Phase 3)  

### 1.4 Integration Points

```
┌─────────────────────────────────────────────────────┐
│                  EMPIRE PLATFORM                     │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ┌──────────┐      ┌──────────┐     ┌─────────┐    │
│  │   Auth   │──→   │Community │ ←── │Storage  │    │
│  │ Module   │      │ Module   │     │(Images) │    │
│  └──────────┘      └──────────┘     └─────────┘    │
│       ↑                  ↑                 ↑         │
│       │                  │                 │         │
│  ┌──────────┐      ┌──────────┐     ┌─────────┐    │
│  │  User    │      │ Feed     │     │Notifi-  │    │
│  │ Profile  │      │Manager   │     │cation   │    │
│  └──────────┘      └──────────┘     └─────────┘    │
└─────────────────────────────────────────────────────┘
```

### 1.5 Technology Stack (Assumed)

| Layer | Technology |
|-------|------------|
| **Frontend** | React / Vue.js (SPA) |
| **Backend** | Node.js / Java Spring / Python Django |
| **Database** | PostgreSQL / MySQL (relational) + Redis (cache) |
| **Real-time** | WebSocket / Socket.io (for live reaction sync) |
| **Storage** | AWS S3 / Google Cloud Storage (media files) |
| **Search** | Elasticsearch (optional, Phase 2) |

---

## 👥 SECTION 2: USER ACCESS & PERMISSIONS

### 2.1 User Roles & Hierarchy (10 Roles - PERMISSIONS_GUIDE v1.0)

**Updated Authority:** Per DECISION_RECORD_2026-04-11.md, all 10 roles from PERMISSIONS_GUIDE.md are implemented in MVP Phase 1.

```
ACCESS LEVEL      ROLE HIERARCHY
────────────────────────────────────────────────────────
Level 1           Super Admin (System governance)
                      ↓
Level 2           Admin (Platform operations)
                      ↓
Level 3a          Moderator (System moderation)
                      ↓
Level 3b          Group Admin (Group-level)
                      ↓
Level 4           Mentor + Member 
                      ↓
Level 5           Collaborator (max 2/post)
                      ↓
Level 6           Paid User 
                      ↓
Level 7           NonPaid User 
                      ↓
Level 8           Guest (Public access)
```

### 2.2 Role-Based Permission Matrix (10 Roles × 15 Core Permissions)

#### **ROLE 1: GUEST (Khách vãng lai)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | Public Hall only |
| Create Posts | ❌ NO | Requires login |
| Comment on Posts | ❌ NO | Requires authentication |
| Like Posts | ❌ NO | Requires account |
| Share Posts | ❌ NO | Requires account |
| Upload Images | ❌ NO | Authentication required |
| Upload Videos | ❌ NO | Authentication required |
| Follow Users | ❌ NO | Must register first |
| Join Groups | ❌ NO | Must create account |
| Edit Own Posts | ❌ NO | No posts owned |
| Delete Own Posts | ❌ NO | No posts owned |
| Delete Any Posts | ❌ NO | Not admin |
| Manage Group Members | ❌ NO | Not admin |
| Create Groups | ❌ NO | Not admin |
| Access Admin Panel | ❌ NO | Not admin |

**Use Case:** Public discovery, attract new users  
**Scope:** System-wide, public content only

---

#### **ROLE 2: NONPAID USER (Thành viên miễn phí - Học sinh)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | All public + group posts |
| Create Posts | ✅ YES | Text + images (MAX 10MB × 5 images) |
| Comment on Posts | ✅ YES | Nested 2 levels |
| Like Posts | ✅ YES | Unlimited |
| Share Posts | ✅ YES | Unlimited |
| Upload Images | ✅ YES | 10MB per image, 5 images max |
| Upload Videos | ❌ NO | Requires Paid User status |
| Follow Users | ✅ YES | Unlimited |
| Join Groups | ✅ YES | Public groups (auto-approved) |
| Edit Own Posts | ✅ YES | Within 1 hour grace period |
| Delete Own Posts | ✅ YES | Permanent hard delete |
| Delete Any Posts | ❌ NO | Not admin |
| Manage Group Members | ❌ NO | Not admin |
| Create Groups | ❌ NO | Requires special permission |
| Access Admin Panel | ❌ NO | Not admin |

**Use Case:** Regular learner, community contributor  
**Scope:** System-wide, own content + joined groups

---

#### **ROLE 3: PAID USER (Học viên / Người trả phí)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | All public + private (if approved) |
| Create Posts | ✅ YES | All types, advanced features |
| Comment on Posts | ✅ YES | Nested 2 levels, unlimited |
| Like Posts | ✅ YES | Unlimited |
| Share Posts | ✅ YES | Unlimited |
| Upload Images | ✅ YES | 10MB per image, 5 images max |
| Upload Videos | ✅ YES | 50MB max per video |
| Follow Users | ✅ YES | Unlimited |
| Join Groups | ✅ YES | Any public or private (pending approval) |
| Edit Own Posts | ✅ YES | Within 1 hour grace period |
| Delete Own Posts | ✅ YES | Permanent hard delete |
| Delete Any Posts | ❌ NO | Admin privilege only |
| Manage Group Members | ❌ NO | Group Admin privilege only |
| Create Groups | ✅ YES | Private groups (pending approval) |
| Access Admin Panel | ❌ NO | Admin role required |

**Use Case:** Premium educator, content creator  
**Scope:** System-wide, private content access (after approval)

---

#### **ROLE 4: COLLABORATOR ⭐ (Cộng tác viên - ACTIVE ROLE)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | All public posts |
| Create Posts | ❌ NO | Per-post basis only (assigned) |
| Comment on Posts | ✅ YES | **MAX 2 CTV per post (CD06)** |
| Like Posts | ✅ YES | Unlimited |
| Share Posts | ✅ YES | Unlimited |
| Upload Images | ✅ YES | On assigned posts |
| Upload Videos | ✅ YES | On assigned posts (50MB) |
| Follow Users | ✅ YES | Unlimited |
| Join Groups | ✅ YES | Public groups (auto-approved) |
| Edit Own Posts | ❌ NO | No post ownership |
| Delete Own Posts | ❌ NO | No post ownership |
| Delete Any Posts | ❌ NO | Not system admin |
| Manage Group Members | ❌ NO | Group Admin role only |
| Create Groups | ❌ NO | Group Admin role only |
| Access Admin Panel | ❌ NO | Admin role only |

**Use Case:** Post content support, reply moderation ⭐ ACTIVE ROLE  
**Scope:** Per-post assignment (max 2 collaborators per post - strict limit)

---

#### **ROLE 5: MEMBER ⭐ (Thành viên nhóm - ACTIVE ROLE)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | Public + member-scoped posts |
| Create Posts | ✅ YES | In member groups only |
| Comment on Posts | ✅ YES | Unlimited in member groups |
| Like Posts | ✅ YES | Unlimited |
| Share Posts | ✅ YES | Group + public |
| Upload Images | ✅ YES | In member groups |
| Upload Videos | ✅ YES | In member groups (50MB) |
| Follow Users | ✅ YES | Unlimited |
| Join Groups | ✅ YES | Approved member only |
| Edit Own Posts | ✅ YES | In member groups (1h) |
| Delete Own Posts | ✅ YES | In member groups |
| Delete Any Posts | ❌ NO | Not admin |
| Manage Group Members | ❌ NO | Group Admin role only |
| Create Groups | ❌ NO | Admin role only |
| Access Admin Panel | ❌ NO | Admin role only |

**Use Case:** Group-scoped contributor, context-aware access ⭐ ACTIVE ROLE  
**Scope:** Single group (member-scoped context)

---

#### **ROLE 6: MENTOR ⭐ (Người hướng dẫn - ACTIVE ROLE)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | All public + educational content |
| Create Posts | ✅ YES | Mentor-marked posts, all types |
| Comment on Posts | ✅ YES | Unlimited, guided discussions |
| Like Posts | ✅ YES | Unlimited |
| Share Posts | ✅ YES | Unlimited |
| Upload Images | ✅ YES | Educational materials |
| Upload Videos | ✅ YES | Training/teaching content (50MB) |
| Follow Users | ✅ YES | Can follow students |
| Join Groups | ✅ YES | Create/join mentor groups |
| Edit Own Posts | ✅ YES | Educational posts (1h) |
| Delete Own Posts | ✅ YES | Educational content |
| Delete Any Posts | ✅ YES | **In own mentor groups only** |
| Manage Group Members | ✅ YES | **In own mentor groups** |
| Create Groups | ✅ YES | Mentor-specific groups |
| Access Admin Panel | ❌ NO | System Admin role only |

**Use Case:** Teaching, student guidance, group leadership ⭐ ACTIVE ROLE  
**Scope:** System-wide (education-focused), leadership in own groups  
**Phase 1 Config:** Simplified (Mentor has full permissions by default; Phase 2 adds system.config controls)

---

#### **ROLE 7: MODERATOR ⭐ (Người kiểm duyệt - ACTIVE ROLE)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | All public + private + flagged |
| Create Posts | ✅ YES | System announcements, guidelines |
| Comment on Posts | ✅ YES | Official moderation comments |
| Like Posts | ✅ YES | N/A for moderation |
| Share Posts | ✅ YES | Escalation/awareness sharing |
| Upload Images | ✅ YES | Guidelines, policies |
| Upload Videos | ✅ YES | Training materials (50MB) |
| Follow Users | ✅ YES | Monitoring accounts |
| Join Groups | ✅ YES | All groups (audit purpose) |
| Edit Own Posts | ✅ YES | Moderation notices (1h) |
| Delete Own Posts | ✅ YES | Moderation records |
| Delete Any Posts | ✅ YES | **System-wide (policy violations)** |
| Manage Group Members | ✅ YES | **System-level member actions** |
| Create Groups | ✅ YES | **System/moderation groups only** |
| Access Admin Panel | ✅ YES | **Moderation Dashboard access** |

**Use Case:** Content moderation, community safety, policy enforcement ⭐ ACTIVE ROLE  
**Scope:** System-wide moderation authority  
**Constraints:** Cannot modify system.config or user roles

---

#### **ROLE 8: GROUP ADMIN (Quản lý nhóm)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | All group + public posts |
| Create Posts | ✅ YES | Group announcements |
| Comment on Posts | ✅ YES | Unlimited in group |
| Like Posts | ✅ YES | Unlimited |
| Share Posts | ✅ YES | Group + public |
| Upload Images | ✅ YES | Group resources |
| Upload Videos | ✅ YES | Group training (50MB) |
| Follow Users | ✅ YES | Unlimited |
| Join Groups | ✅ YES | Owner of specific group(s) |
| Edit Own Posts | ✅ YES | Group posts (1h) |
| Delete Own Posts | ✅ YES | Group posts |
| Delete Any Posts | ✅ YES | **In own group(s) only** |
| Manage Group Members | ✅ YES | **Approve/remove/assign roles** |
| Create Groups | ✅ YES | Manage only own created groups |
| Access Admin Panel | ❌ NO | System Admin role only |

**Use Case:** Group leadership, member management, community governance  
**Scope:** Single or multiple assigned groups only

---

#### **ROLE 9: ADMIN (Quản lý hệ thống)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | All content system-wide |
| Create Posts | ✅ YES | System announcements |
| Comment on Posts | ✅ YES | System-wide comments |
| Like Posts | ✅ YES | Unlimited |
| Share Posts | ✅ YES | Unlimited |
| Upload Images | ✅ YES | System resources |
| Upload Videos | ✅ YES | System training (50MB) |
| Follow Users | ✅ YES | Monitoring capability |
| Join Groups | ✅ YES | Any group (audit access) |
| Edit Own Posts | ✅ YES | All system posts (1h) |
| Delete Own Posts | ✅ YES | All system content |
| Delete Any Posts | ✅ YES | **Remove any post (system-wide)** |
| Manage Group Members | ✅ YES | **All groups** |
| Create Groups | ✅ YES | **Any group** |
| Access Admin Panel | ✅ YES | **Full admin dashboard** |

**Use Case:** Platform operations, system administration  
**Scope:** System-wide authority  
**Constraint:** Cannot modify system.config (Super Admin only)

---

#### **ROLE 10: SUPER ADMIN (Quản trị viên cao cấp)**

| Permission | Status | Notes |
|-----------|--------|-------|
| View Public Posts | ✅ YES | All content + system logs |
| Create Posts | ✅ YES | System announcements |
| Comment on Posts | ✅ YES | System-wide |
| Like Posts | ✅ YES | Unlimited |
| Share Posts | ✅ YES | Unlimited |
| Upload Images | ✅ YES | System resources |
| Upload Videos | ✅ YES | System training (50MB) |
| Follow Users | ✅ YES | Full monitoring |
| Join Groups | ✅ YES | Any group (owner-level) |
| Edit Own Posts | ✅ YES | All system posts (1h) |
| Delete Own Posts | ✅ YES | All system content |
| Delete Any Posts | ✅ YES | **Remove any content globally** |
| Manage Group Members | ✅ YES | **System-wide management** |
| Create Groups | ✅ YES | **Any group at any level** |
| Access Admin Panel | ✅ YES | **Full admin + Super Admin panel** |

**Use Case:** Platform governance, system configuration  
**Scope:** System-wide + configuration control  
**Authority:** **VIP access (usually 1-3 people max)**  
**Special:** Can modify system.config, manage other admins, organization policies

---

### 2.5 Active Roles Explanation ⭐ CRITICAL

**Definition:** Four roles require active management and have amplified responsibilities:

#### **2.5.1 COLLABORATOR (Cộng Tác Viên) - Per-Post Assignment**

**Responsibility:** Support post author in content moderation and reply management.

**Key Features:**
- **Max 2 CTV per post** (CD06 - Strict limit)
- Assigned per-post (not organization-wide)
- Can be any user (NonPaid or Paid)
- Author + Mentor + Group Admin can assign

**Workflow Example:**
```
Author creates Post A → Assigns CTV1, CTV2
  CTV1 replies (comment) → Ghi nhận in reply_collaborators
  CTV2 replies (comment) → Ghi nhận in reply_collaborators (NOW FULL)
  CTV3 tries to reply → BLOCK (post has max 2 CTV)
  
If Author removes CTV1 → CTV3 can now reply
```

**Audit Trail:** System logs when CTV is assigned/removed

---

#### **2.5.2 MEMBER (Thành viên nhóm) - Group-Scoped Context**

**Responsibility:** Participate in group-specific learning/collaboration.

**Key Features:**
- Role within a specific group (group-local)
- Enables **sub-private content access** (member-scoped visibility)
- Can be promoted/demoted by Group Admin
- Different permission set within group context

**Context Logic:**
```
User = Member of Group A
  ✅ Can view Sub-private posts in Group A
  ✅ Can reply in Group A discussions
  ❌ Cannot access Group B's sub-private content (not member)
```

**Audit Trail:** Group Admin changes tracked

---

#### **2.5.3 MENTOR (Giáo viên) - System-Wide Education Role**

**Responsibility:** Lead educational initiatives, guide students, manage mentor-specific groups.

**Key Features:**
- **Active Role** - Special designation, audit-required
- System-wide scope (not group-limited)
- Can assign Collaborators in own groups
- Can create/manage mentor groups
- Educational content authority

**Phase 1 Simplified Model:**
```
Mentor has full permissions (post, upload, ask) by default
Phase 2: Add system.config controls:
  - allow_mentor_post (can create posts?)
  - allow_mentor_upload (can upload materials?)
  - allow_mentor_ask (can ask questions?)
```

**Audit Trail:** All mentor actions logged

---

#### **2.5.4 MODERATOR (Người Kiểm Duyệt) - System-Level Governance**

**Responsibility:** Maintain platform safety, enforce policies, manage violations.

**Key Features:**
- **Active Role** - System-level authority
- Can delete any post (global)
- Can manage violations across all groups
- Moderation Dashboard access
- Cannot modify system.config (Super Admin only)

**Moderation Workflow:**
```
Reported Post → Moderator Review → Action:
  - Delete (high severity)
  - Warn User (medium)
  - Archive (low/educational)
  - Escalate to Admin (severe/legal)
```

**Audit Trail:** All moderation actions with reason logged

---

### 2.5.5 Role Assignment & Escalation Path

**How Roles are Assigned:**

| Role | Assigned By | Method | Audit |
|------|-------------|--------|-------|
| Guest | System | Auto (new user) | N/A |
| NonPaid User | System | Auto (account creation) | Yes |
| Paid User | System | Auto (payment verified) | Yes |
| Collaborator | Author/Mentor/Group Admin | Per-post assignment | Yes |
| Member | Group Admin | Group join approval | Yes |
| **Mentor** | Admin/Super Admin | Designated role | **Yes - Audit** |
| **Moderator** | Super Admin | Designated role | **Yes - Audit** |
| Group Admin | Admin/Super Admin | Group delegation | Yes |
| Admin | Super Admin | System delegation | **Yes - Audit** |
| Super Admin | System init | Organization founder | **Yes - Audit** |

---

### 2.5.6 When Active Roles Are Modified - Escalation

**If Active Role (Mentor/Moderator) is:**

| Change | Trigger | Escalation | Audit |
|--------|---------|-----------|-------|
| **Assigned (new)** | Admin request | 🔔 Notify user + audit | Full log |
| **Modified** | Role permission change | 🔔 Notify + review | Full log |
| **Revoked** | User violation/exit | 🔔 Archive + transition | Full log |
| **Suspended** | Escalation | 🔴 Alert Super Admin | Full log |

---

---

### 2.3 Access Control Rules (ACL)

**Rule 1: Public vs Private Content**
```
IF post.visibility = "PUBLIC"
  THEN any logged-in user can view, react, comment
ELSE IF post.visibility = "PRIVATE" 
  THEN only group members can view/react
ELSE IF post.visibility = "FRIEND_ONLY"
  THEN only followers of creator can view
```

**Rule 2: Edit/Delete Rights**
```
IF (user == post.creator) OR (user.role == admin)
  THEN allow edit/delete
ELSE 
  THEN deny (403 Forbidden)
```

**Rule 3: Group Posting Rights**
```
IF group.visibility = "PUBLIC"
  THEN any member can post
ELSE IF group.visibility = "PRIVATE"
  THEN only approved members + admin can post
ELSE IF group.visibility = "INVITATION_ONLY"
  THEN admin assigns posting privilege per member
```

**Rule 4: Real-time Sync Permission**
```
IF user has permission to view post
  THEN user receives live like/comment count updates
ELSE
  THEN no real-time sync for that user
```

### 2.4 Authentication & Session Management

| Aspect | Specification |
|--------|---|
| **Auth Method** | Email + Password (OAuth optional Phase 2) |
| **Token Type** | JWT (JSON Web Token) |
| **Token Expiry** | 24 hours (auto-refresh) |
| **Session Duration** | 30 days (remember me) or 1 day (default) |
| **2FA (Two-Factor Auth)** | Optional (encourage for admins) |
| **Password Policy** | Min 8 chars, 1 uppercase, 1 number, 1 special |
| **Login Attempts** | Max 5 attempts → 15 min lockout |
| **Cookie Secure Setting** | HTTPS only, httpOnly flag |

---

## 🔧 SECTION 3: CORE FUNCTIONALITY

### 3.1 Feature Breakdown by Sub-Module

#### **3.1.1 FEED MANAGEMENT**

**Feature:** Display personalized social feed

**Functionality:**
```
What:   Display chronological list of posts from followed users + joined groups
How:    Query database for posts where:
        - (creator.id in user.following) OR (post.group_id in user.groups)
        - post.visibility != "deleted"
        - post.created_at <= current_time
Where:  Main Hall (/cong-dong), Group Feed (/groups/[id])
When:   On page load, infinite scroll on bottom scroll
```

**Flow Diagram:**
```
User opens Hall
    ↓
Frontend: GET /api/feed?offset=0&limit=20
    ↓
Backend: Query posts from following + groups
    ↓
Apply sorting: newest | trending | oldest
    ↓
Paginate: Return 20 posts + pagination_token
    ↓
Frontend: Render posts with images, timestamps
    ↓
On scroll to bottom:
    ↓
GET /api/feed?offset=20&limit=20 (infinite scroll)
```

**Data Returned:**
```json
{
  "posts": [
    {
      "id": "post_12345",
      "creator": {
        "id": "user_001",
        "avatar": "url",
        "name": "Nguyễn Minh Anh"
      },
      "content": "Hôm nay tôi học được...",
      "media": [{ "type": "image", "url": "..." }],
      "group": { "id": "group_hsa", "name": "Group HSA" },
      "likes": 42,
      "comments": 5,
      "shares": 2,
      "created_at": "2024-04-10T10:30:00Z",
      "user_liked": true
    }
  ],
  "pagination": {
    "next_token": "abc123...",
    "has_more": true
  }
}
```

**Acceptance Criteria:**
- AC1: Feed loads within 2 seconds for 20 posts
- AC2: Posts display in newest-first order by default
- AC3: Infinite scroll loads next 20 posts when scrolled to bottom
- AC4: Post from unfollowed user NOT in feed
- AC5: Post from joined group appears in feed

---

#### **3.1.2 POST CREATION**

**Feature:** Users create and publish content

**User Story:**
```
As a Learner,
I want to create a post with text + optional image/video,
So that I can share knowledge and get feedback from community.
```

**Functionality:**
```
Step 1: User clicks "Create Post" button
Step 2: Modal opens with:
  - Text input area (5000 char limit)
  - "Add Image" button
  - "Add Video" button
  - "Select Group" dropdown (default: Main Hall)
  - "Post" button (disabled until content added)
  
Step 3: User types content or adds media
Step 4: Form validates:
  - Content not empty
  - Image < 5MB & valid format (JPG/PNG/WebP)
  - Video < 50MB & valid format (MP4)
  
Step 5: User clicks "Post"
Step 6: Frontend sends:
  POST /api/posts
  {
    "content": "Text content",
    "media": ["image_id", "video_id"],
    "group_id": "group_hsa"
  }
  
Step 7: Backend:
  - Create post record
  - Parse @mentions, #hashtags
  - Notify tagged users
  - Return post_id
  
Step 8: Frontend:
  - Close modal
  - Add post to top of feed (optimistic update)
  - Show success toast
```

**Media Upload Sub-Flow:**
```
User clicks "Add Image"
    ↓
File browser dialog opens
    ↓
User selects image file (.jpg, .png, .webp)
    ↓
Frontend validates:
  - File size: <5MB
  - File format: whitelist
  ↓
Upload to backend:
  POST /api/media/upload
  ContentType: multipart/form-data
  ↓
Backend:
  - Save to storage (AWS S3)
  - Generate thumbnail
  - Return media_id & url
  ↓
Frontend:
  - Display image preview in modal
  - Show "2 MB" size indicator
```

**Acceptance Criteria:**
- AC1: Modal opens in <300ms
- AC2: Text limit is enforced at 5000 chars
- AC3: User can add 1-4 images per post
- AC4: User can add 1 video per post
- AC5: Post created without media succeeds
- AC6: Image <5MB uploads successfully
- AC7: Image >5MB rejected with error "File too large"
- AC8: Unsupported format (.bmp, .txt) rejected
- AC9: Post appears at top of feed immediately
- AC10: Post persists after page refresh

---

#### **3.1.3 REACTION SYSTEM (Like, Comment, Share)**

**Feature 3A: Like Button**

**Functionality:**
```
Frontend:
  Click like button (❤️)
    ↓
  Optimistic UI update: ❤️ filled, counter += 1
    ↓
  Send: POST /api/posts/{post_id}/like
  
Backend:
  Check: Is user already liked?
    - If yes: Unlike (delete record)
    - If no: Create like record
  ↓
  Update like count in cache (Redis)
  ↓
  Return { "liked": true, "like_count": 43 }
  
Frontend (on response):
  If response error: Revert optimistic update (undo like)
  If success: Keep UI as-is (already updated)
  Broadcast via WebSocket: Notify other clients on same post
  
Other Clients:
  Receive WebSocket event: like_count_updated (post_id, count=43)
  Update UI: Show like_count = 43
```

**Real-time Sync (Concurrent Users):**
```
User A views post with 20 likes
User B views same post with 20 likes
    ↓
User A clicks like (optimistic: 21 in UI)
User B clicks like (optimistic: 21 in UI)
    ↓ (submit to backend)
Backend receives both requests
  - Process A: like_count = 21
  - Process B: like_count = 22
  ↓
Backend broadcasts via WebSocket:
  all_clients: like_count = 22
  ↓
User A UI updates: 21 → 22
User B UI updates: 21 → 22 (already there)
```

**Acceptance Criteria:**
- AC1: Like counter increments immediately on click
- AC2: Like button icon fills with color
- AC3: Unlike works (counter decrements)
- AC4: Like count persists on page refresh
- AC5: Concurrent likes from 2 users reconcile correctly
- AC6: Database like count matches UI count after refresh

---

**Feature 3B: Comment System**

**Functionality:**
```
User clicks comment button (💬)
    ↓
Comment input modal/drawer appears
    ↓
User types comment: "This is helpful! 👍"
    ↓
Frontend validates:
  - Comment not empty
  - Comment < 2000 chars
    ↓
User clicks "Send Comment"
    ↓
Frontend:
  POST /api/posts/{post_id}/comments
  { "text": "This is helpful! 👍" }
    ↓
Backend:
  - Create comment record
  - Increment post comment_count
  - Notify post creator
  - Return comment_id, created_at
    ↓
Frontend:
  - Add comment to comment list
  - Increment comment counter (3 → 4)
  - Show success toast
```

**Nested Replies (Phase 1+):**
```
Comment 1: "Great tutorial!"
  ↓
  Reply 1.1: "Thanks! More videos coming"
    (By post creator)
  ↓
  Reply 1.2: "Can you cover [X]?" 
    (By commenter)
    ↓
    Reply 1.2.1: "Sure, I'll add it"
      (By post creator)
```

**Acceptance Criteria:**
- AC1: Comments load lazily (first 3, then "Load more")
- AC2: Comment counter updates in real-time
- AC3: Comment edit available for 1 hour post-comment
- AC4: Only comment author or admin can delete
- AC5: Nested replies up to 2 levels supported
- AC6: Comment mentions (@username) notify user

---

**Feature 3C: Share Button**

**Functionality:**
```
User clicks share button (📤)
    ↓
Share menu appears:
  - "Copy Link" (copy post URL to clipboard)
  - "Share to Group" (select group to share)
  - "Share to Message" (send DM to friend) [Phase 2]
    ↓
User clicks "Share to Group"
    ↓
Available groups modal appears:
  (Groups user is member of)
    ↓
User selects "Group Python"
    ↓
Frontend:
  POST /api/posts/{post_id}/share
  { "group_id": "group_python" }
    ↓
Backend:
  - Create share record
  - Create new post in target group with link to original
  - Increment share counter
    ↓
Frontend:
  - Show toast "Shared to Group Python"
  - Update share counter (2 → 3)
```

**Acceptance Criteria:**
- AC1: Share menu appears on button click
- AC2: "Copy Link" copies post URL to clipboard
- AC3: "Share to Group" shows list of user's groups
- AC4: Shared post appears in target group feed
- AC5: Share counter increments
- AC6: Original post creator notified of share

---

#### **3.1.4 GROUP MANAGEMENT**

**Feature:** Create, join, and manage community groups

**User Story:**
```
As an Educator,
I want to create a learning group for my course,
So that students can discuss course-related topics.
```

**Functionality:**

**Group Creation Flow:**
```
User clicks "Create Group"
    ↓
Group creation form opens:
  - Group name (required)
  - Description (optional)
  - Avatar (optional upload)
  - Visibility: Public | Private | Invitation-only
  - Category: Learning | Social | Professional
    ↓
User fills form, clicks "Create"
    ↓
Frontend validates + sends:
  POST /api/groups
  {
    "name": "Python Masters",
    "description": "Learn Python together",
    "visibility": "public",
    "category": "learning"
  }
    ↓
Backend:
  - Create group record
  - Set creator as admin
  - Return group_id
    ↓
Frontend:
  - Redirect to group page
  - Show success "Group created!"
```

**Join Group Flow:**
```
User browses groups
    ↓
Sees group card: "Python Masters"
    ↓
Clicks "Join" button
    ↓
IF public group:
  - Auto-approve, add user to members
  - Redirect to group feed
ELSE IF private group:
  - Send join request to admin
  - Show "Request sent, pending approval"

Admin receives notification:
  - Approve join request
  - Notify user: "Welcome to Python Masters!"
```

**Group Feed (Isolated):**
```
Post created in Group Python
    ↓
NOT visible in Main Hall
    ↓
ONLY visible to group members
    ↓
When group member views "Python" tab:
  - See only posts from that group
  - Can react/comment normally
```

**Group Moderation:**
```
Admin can:
  - Edit group name/description
  - Change visibility settings
  - Remove spam posts
  - Mute/ban members
  - Assign sub-admins
  - View member list
  - View group analytics
```

**Acceptance Criteria:**
- AC1: New group created and visible immediately
- AC2: User can join public group without approval
- AC3: Private group requires admin approval
- AC4: Group feed isolated from main hall
- AC5: Only group members see group posts
- AC6: Admin can remove members
- AC7: Group member count updates in real-time

---

#### **3.1.5 USER PROFILES & FOLLOW SYSTEM**

**Feature:** User profiles with follow functionality

**Functionality:**

**View Profile:**
```
Click on creator avatar/name
    ↓
Profile page opens showing:
  - Avatar, name, bio
  - Follower/following counts
  - Recent posts by user
  - "Follow" / "Unfollow" button
  - "Message" button [if friend] [Phase 2]
  - "Report" button
```

**Follow/Unfollow:**
```
User clicks "Follow" button
    ↓
POST /api/users/{user_id}/follow
    ↓
Backend:
  - Create follow record
  - Increment user follower count
  - Add to follower's feed (future posts from this user)
    ↓
Frontend:
  - Button changes to "Following"
  - Follower count increments
  - Show toast "Followed!"
    ↓
Unfollow:
  - Click "Following" button
  - DELETE /api/users/{user_id}/follow
  - Reverse all steps above
```

**Acceptance Criteria:**
- AC1: Profile loads with all user info
- AC2: Follow button changes to "Following" state
- AC3: Followed user's posts appear in feed
- AC4: Unfollow removes future posts from feed
- AC5: Follower/following counts accurate

---

#### **3.1.6 NOTIFICATIONS**

**Feature:** Real-time notifications for user actions

**Types of Notifications:**
```
1. Someone liked your post
2. Someone commented on your post
3. Someone replied to your comment
4. Someone followed you
5. Someone shared your post
6. Group admin approved your join request
7. Someone mentioned you (@username)
8. Admin notification: Your post was removed
```

**Notification Flow:**
```
User A likes User B's post
    ↓
Backend:
  - Create notification record
  - Push via WebSocket to User B
    ↓
User B:
  - Hears notification sound (optional)
  - Sees notification bell badge (+1)
  - Opens notification panel
  - Sees: "[User A] liked your post"
  - Clicking notification → redirect to post
```

**Acceptance Criteria:**
- AC1: Notification received within 1s of action
- AC2: Notification badge appears immediately
- AC3: Clicking notification scrolls to relevant post
- AC4: Mark as read removes badge
- AC5: Old notifications archived after 7 days

---

### 3.2 Technical Implementation Details

#### **Database Schema (Simplified)**

```sql
-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  username VARCHAR UNIQUE,
  avatar_url VARCHAR,
  bio TEXT,
  role ENUM ('guest', 'free_user', 'paid_user', 'admin'),
  follower_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Posts Table
CREATE TABLE posts (
  id UUID PRIMARY KEY,
  creator_id UUID REFERENCES users(id),
  group_id UUID REFERENCES groups(id) [NULL = main hall],
  content TEXT NOT NULL,
  visibility ENUM ('public', 'private', 'friends_only') DEFAULT 'public',
  like_count INT DEFAULT 0,
  comment_count INT DEFAULT 0,
  share_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP [soft delete]
);

-- Likes Table
CREATE TABLE likes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  post_id UUID REFERENCES posts(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, post_id) [prevent duplicate likes]
);

-- Comments Table
CREATE TABLE comments (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id),
  parent_comment_id UUID REFERENCES comments(id) [for nested replies],
  creator_id UUID REFERENCES users(id),
  text VARCHAR(2000) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP [soft delete]
);

-- Follows Table
CREATE TABLE follows (
  id UUID PRIMARY KEY,
  follower_id UUID REFERENCES users(id),
  following_id UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(follower_id, following_id) [prevent duplicate follows]
);

-- Groups Table
CREATE TABLE groups (
  id UUID PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT,
  avatar_url VARCHAR,
  admin_id UUID REFERENCES users(id),
  visibility ENUM ('public', 'private', 'invitation_only'),
  member_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Group Members Table
CREATE TABLE group_members (
  id UUID PRIMARY KEY,
  group_id UUID REFERENCES groups(id),
  user_id UUID REFERENCES users(id),
  role ENUM ('member', 'moderator', 'admin'),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(group_id, user_id) [one membership per user per group]
);
```

#### **API Endpoints (REST)**

| HTTP Method | Endpoint | Purpose | Auth |
|---|---|---|---|
| **GET** | `/api/feed` | Show user's personalized feed | 🔐 Required |
| **GET** | `/api/feed/{group_id}` | Show group-specific feed | 🔐 Required |
| **POST** | `/api/posts` | Create new post | 🔐 Required (Paid+) |
| **GET** | `/api/posts/{post_id}` | Get post details | 🔓 Public |
| **PUT** | `/api/posts/{post_id}` | Edit own post | 🔐 Required |
| **DELETE** | `/api/posts/{post_id}` | Delete post | 🔐 Required (Owner \| Admin) |
| **POST** | `/api/posts/{post_id}/like` | Like a post | 🔐 Required |
| **DELETE** | `/api/posts/{post_id}/like` | Unlike a post | 🔐 Required |
| **POST** | `/api/posts/{post_id}/comments` | Add comment | 🔐 Required |
| **POST** | `/api/posts/{post_id}/share` | Share post to group | 🔐 Required |
| **GET** | `/api/users/{user_id}` | Get user profile | 🔓 Public (private fields hidden) |
| **POST** | `/api/users/{user_id}/follow` | Follow user | 🔐 Required |
| **DELETE** | `/api/users/{user_id}/follow` | Unfollow user | 🔐 Required |
| **GET** | `/api/groups` | List all groups | 🔓 Public |
| **POST** | `/api/groups` | Create new group | 🔐 Required (Paid+) |
| **POST** | `/api/groups/{group_id}/join` | Join group | 🔐 Required |
| **GET** | `/api/notifications` | Fetch user notifications | 🔐 Required |
| **PUT** | `/api/notifications/{notif_id}/read` | Mark notification as read | 🔐 Required |

---

## 📏 SECTION 4: BUSINESS RULES

### 4.1 Content Rules

#### **Rule 4.1.1: Text Content Limits**
```
GIVEN user creates post
WHEN text entered
THEN system enforces:
  - Minimum: 1 character (after trim)
  - Maximum: 5000 characters (Unicode)
  - Empty posts rejected with error: "Content required"
  - Character counter shows real-time: "1542 / 5000"
```

#### **Rule 4.1.2: Media Upload Constraints**
```
IMAGES:
  - Supported formats: JPG, PNG, WebP only
  - Max file size: 5MB per image
  - Per post: 1-4 images maximum
  - Resolution: Recommended 1920x1080 (will auto-compress if needed)
  - Validation: Content-type header check + magic bytes validation

VIDEOS:
  - Supported format: MP4 only (H.264 codec)
  - Max file size: 50MB per video
  - Per post: 1 video maximum
  - Duration: Max 10 minutes
  - Resolution: Recommended 1280x720 or higher

REJECTION: If file doesn't meet criteria
  Error message: "File [filename] is too large (6MB > 5MB limit)"
  User can: Retry with different file immediately
```

#### **Rule 4.1.3: Content Visibility After Posting**
```
MAIN HALL POST:
  - Visible to: All logged-in users
  - Visible to followers: Yes
  - Visible to general public (not logged in): No
  - Searchable: Yes (Phase 2)

GROUP POST:
  - Visible to: Group members only
  - Visible to public: No
  - Visible in main hall: No
  - Visible to non-members: No (even with direct link)

PRIVATE POST (if feature exists):
  - Visible to: Only chosen users
  - Visible to followers: No (unless chosen)
```

---

### 4.2 Reaction Rules

#### **Rule 4.2.1: Like Idempotency**
```
GIVEN user clicks like on post
WHEN first time liking
THEN: Create like record, like_count += 1, button fills

WHEN clicking like again (already liked)
THEN: System treats as UNLIKE request
  - Delete like record
  - like_count -= 1
  - Button becomes unfilled

IDEMPOTENCY: Clicking like 3x in short time
  - Scenario: User clicks like 3 times rapidly (network delay)
  - Expected: 1 like record created (not 3)
  - Implementation: Database UNIQUE constraint on (user_id, post_id)
```

#### **Rule 4.2.2: Comment Moderation**
```
ALLOWED:
  - Comments with text (up to 2000 chars)
  - Comments with @mentions
  - Comments with emojis
  - Nested replies (indent max 2 levels)

MODERATION:
  - Admin can delete spam/off-topic comments
  - Post creator can delete comments on own posts
  - Comment author can edit within 1 hour of creation
  - After 1 hour: Edit disabled, delete only
  - Hard delete: Comments disappear, comment count decrements

NO AUTO-CENSORING: Comments not auto-deleted (Manual review needed)
```

#### **Rule 4.2.3: Share Throttling (Prevent Spam)**
```
GIVEN user shares content repetitively
WHEN same user shares same post 5+ times in 1 hour
THEN: Block with message "Slow down, you're sharing too frequently"
  - Throttle duration: 1 hour
  - After 1 hour: Can share again
  - Goal: Prevent spam sharing
```

---

### 4.3 Follow/Unfollow Rules

#### **Rule 4.3.1: Follow Relationship**
```
WHEN User A follows User B
THEN:
  1. User B's future posts appear in User A's feed
  2. User B.follower_count += 1
  3. User A.following_count += 1
  4. User B receives notification: "[User A] started following you"
  5. Relationship persists until unfollow

UNFOLLOW:
  - Immediate effect: B's posts disappear from A's feed
  - Counts decrement
  - Can be re-followed anytime
```

#### **Rule 4.3.2: Follow Privacy (If Private Accounts Exist)**
```
IF User B has private account
THEN User A's follow request requires B's approval

IF User B rejects follow request
THEN is blocked from following for 7 days

IF User B later makes account public
THEN previous follow requests auto-approved
```

---

### 4.4 Group Rules

#### **Rule 4.4.1: Group Membership**
```
PUBLIC GROUP:
  - Any logged-in user can join (auto-approved)
  - Member can leave anytime
  - Member count includes all who joined

PRIVATE GROUP:
  - Join requires admin approval
  - Approval takes up to 24 hours
  - Admin can deny request (user not notified why)

INVITATION-ONLY GROUP:
  - Admin must invite specific users via link/email
  - Outsiders cannot see group or request join
  - Invitation expires in 7 days
```

#### **Rule 4.4.2: Group Moderation Rules**
```
ADMIN ACTIONS:
  - Delete any post in group (with reason)
  - Remove member from group (with reason)
  - Mute member (24h, 7d, 30d, permanent options)
  - Ban member (permanent removal)
  - Pin important posts (max 3 pins)
  - Edit group description/settings
  - Assign co-admin (delegate moderation)

WHEN admin removes post:
  - Post hard-deleted (not recoverable)
  - Post not visible in any feed
  - Author receives notification: "Your post was removed by moderator. Reason: [reason]"

WHEN admin removes member:
  - Member loses access to group immediately
  - Can rejoin if group is public (will need approval if private)
```

#### **Rule 4.4.3: Post Isolation Between Groups**
```
Post created and shared to Group A
  ↓
Post NOT visible in Main Hall
Post NOT visible in Group B (even if member of both)
Post ONLY visible to Group A members

IF user shares Group A post to Group B:
  - New post created in Group B (link to original)
  - Original post still only in Group A
  - Two separate posts, cross-linked
```

---

### 4.5 Notification Rules

#### **Rule 4.5.1: Notification Delivery**
```
WHEN action triggers notification
  1. Create notification record in database
  2. Send WebSocket message to recipient (if online)
  3. If recipient offline: Mark as "pending" in DB
  4. When recipient logs in: Show pending notifications
  5. If 7+ days old: Archive (move to history)

NOTIFICATION PREFERENCES: (Phase 2)
  - User can disable types: Like notifications, Comment notifications
  - User can disable sounds
  - User can choose: Instant, Digest (hourly), Digest (daily)
```

#### **Rule 4.5.2: Notification Deduplication**
```
SCENARIO: 50 users like same post within 1 minute
  
WITHOUT deduplication:
  - User receives 50 notifications (notification hell)
  
WITH deduplication (Phase 2):
  - User receives 1 notification: "[50 people] liked your post"
  - Click to see dropdown with all 50 users
```

---

### 4.6 Data Retention & Cleanup Rules

#### **Rule 4.6.1: Deleted Content**
```
POST DELETION:
  - User deletes post within 1 hour: Immediate hard delete
  - User deletes post after 1 hour: Soft delete (show "[Deleted]" placeholder)
  - Admin delete: Immediate hard delete
  - Reason: Allows comment threads to persist, shows "post deleted"

COMMENT DELETION:
  - Show "[Comment deleted by author]" placeholder
  - Nested replies preserved if parent deleted
  - Replies show: "In reply to deleted comment"

ACCOUNT DELETION:
  - User requests account deletion
  - 30-day grace period (can cancel)
  - After 30 days: Hard delete all user data
  - Posts show: "Post by [Deleted User]"
```

#### **Rule 4.6.2: Draft Auto-Save & Recovery**
```
DRAFT AUTO-SAVE:
  - Triggered when user stops typing for 2 seconds
  - Saved to browser localStorage + server
  - Max 5 drafts stored per user
  - Drafts auto-expire after 30 days

DRAFT RECOVERY:
  - User refreshes page with unsaved draft
  - Show banner: "You have unsaved draft. Recover?"
  - Options: [Recover] [Discard]
  - Clicking Recover: Restore text + media to modal
```

---

### 4.7 Real-time Sync Rules

#### **Rule 4.7.1: Like Count Consistency**
```
SCENARIO: User A && User B like same post at same time

Backend sequence:
  1. Process A's like: like_count = 21
  2. Process B's like: like_count = 22
  
Frontend Sync (WebSocket):
  Both clients receive: like_count = 22 (eventual consistency achieved)

IF User C viewing same post:
  - Sees like_count update: 20 → 21 → 22 (real-time)
  - No delay (via WebSocket broadcast)
```

#### **Rule 4.7.2: Conflict Resolution**
```
CONFLICT: User A unlikely to both like AND unlike same post

BUT IF network lag causes race condition:
  Request 1: User A like (client optimistic: button filled)
  Request 2: User A unlike (client optimistic: button unfilled)
  
Backend processes in order:
  1. Like: like_count = 21
  2. Unlike: like_count = 20
  
Final state = 20 (correct)
Client UI = unfilled (correct)

Resolution: Last-write-wins + idempotency constraint
```

---

### 4.8 Performance Rules (NFRs)

#### **Rule 4.8.1: Load Time Targets**
```
Main Hall Feed Load:  < 2 seconds (first 20 posts)
Post Creation Modal:  < 500ms (open time)
Image Upload:         < 10 seconds (5MB file on 4G)
Video Upload:         < 60 seconds (50MB file on 4G, else shows error)
Like Button Click:    < 100ms (UI response time)
Comment Submit:       < 500ms (appear in UI)
Real-time Sync:       < 500ms (like count update to other users)
```

#### **Rule 4.8.2: Caching Strategy**
```
Feed posts:
  - Cache in Redis: 1 hour TTL
  - On new post: Invalidate cache
  
User profile:
  - Cache: 24 hours TTL
  - On profile update: Invalidate immediately
  
Like/Comment counts:
  - Cache: Real-time (in-memory counter)
  - Sync to DB: Every 5 minutes (batch write)
  
User follow relationships:
  - Cache: 24 hours
  - On follow: Invalidate user-specific cache
```

---

### 4.9 Security Rules

#### **Rule 4.9.1: Content Validation**
```
ALL TEXT INPUTS: Sanitize against XSS
  - Remove <script> tags
  - Escape HTML special characters
  - Allow safe HTML: <b>, <i>, <u>, <a>
  
MEDIA UPLOAD: Validate file integrity
  - Check MIME type header
  - Scan for viruses (ClamAV, VirusTotal API)
  - Reject if suspicious
  
USER INPUT: Rate limiting
  - Max 10 posts per hour per user
  - Max 100 comments per hour per user
  - Max 5 groups join per hour per user
  - Prevents spam/abuse
```

#### **Rule 4.9.2: Authorization Checks**
```
EVERY REQUEST: Check user permission
  
Example: Edit post endpoint
  IF request.user_id == post.creator_id 
    OR request.user.role == 'admin'
    THEN allow PUT /api/posts/{post_id}
  ELSE
    RETURN 403 Forbidden
    
Example: Delete group post
  IF request.user.role == 'admin'
    OR (request.user_id == group.admin_id)
    OR (request.user_id == post.creator_id AND user in group)
    THEN allow
  ELSE
    RETURN 403 Forbidden
```

#### **Rule 4.9.3: Data Privacy**
```
USER PII (Personally Identifiable Info):
  - Email: Never shown to other users
  - Password: Never shown (hashed, salted)
  - Phone: Not collected (optional, Phase 2)
  
PROFILE VISIBILITY:
  - Public profile: Name, avatar, bio, follower count, public posts
  - Private profile: Only if following (future)
  - Admin view: All data (including email, IP)
```

---

### 4.10 Incentive / Gamification Rules (Phase 2)

#### **Rule 4.10.1: Points & Badges (Future)**
```
USER EARNS POINTS FOR:
  - Create post: +1 point
  - Get like on post: +1 point (max 100 points/post)
  - Comment: +0.5 points
  - You comment gets likes: +1 point
  - Join group: +2 points (one-time)
  
BADGES (Achievements):
  - "First Post": 1 post created
  - "Popular": 50+ likes on single post
  - "Influencer": 1000+ followers
  - "Moderator": Become group admin
  - "Community Builder": 10+ groups joined
```

#### **Rule 4.10.2: Leaderboards (Future)**
```
MONTHLY LEADERBOARD:
  - Rank users by points accumulated in current month
  - Top 10 shown publicly
  - Resets first day of month
  
ENGAGEMENT LEADERBOARD:
  - Rank by: Most posts, most comments, most likes received
  - Filter by: Overall, This month, This week
  - Affects: Feature recommendation, feed ranking
```

---

## 🎯 SUMMARY TABLE: All Rules by Category

| Category | Rule | Enforcement | Impact |
|----------|------|-------------|--------|
| **Content** | Max 5000 chars text | Frontend char count + Backend validation | User cannot exceed limit |
| **Content** | Max 5MB image, 50MB video | Frontend file size check + Backend validation | Reject oversized files |
| **Reaction** | Like is toggle (like/unlike) | Backend UNIQUE constraint, DELETE before INSERT | Prevents duplicate likes |
| **Reaction** | Comments editable for 1h | Timestamp check on edit request | Prevents modification of old comments |
| **Follow** | Follow is 1-directional | Separate followers/following tables | A→B != B→A |
| **Group** | Posts in groups isolated | Query filter by group_id | Posts don't leak between groups |
| **Group** | Only members post in private group | Check membership before POST | Non-members cannot create posts |
| **Notification** | Expire after 7 days | Cleanup job runs daily | Old notifications archived |
| **Security** | No XSS in text | Sanitize on server-side | Malicious scripts removed |
| **Performance** | Feed cache 1h TTL | Redis TTL + invalidation | Reduces database load |
| **Data** | Deleted posts soft-deleted | deleted_at timestamp | Can recover if needed later |
| **Throttle** | Max 10 posts/hour | Rate limiter middleware | Prevents spam |

---

## 📌 IMPLEMENTATION PRIORITY

### **Phase 1 (MVP - Critical)**
- ✅ Feed display
- ✅ Post creation (text only)
- ✅ Reactions (like, comment)
- ✅ User profiles & follow
- ✅ Authentication
- ✅ Basic groups (public only)

### **Phase 2 (Enhanced - High)**
- 🟡 Video upload & streaming
- 🟡 Private groups + moderation
- 🟡 Notifications system
- 🟡 Advanced search
- 🟡 Reel video format

### **Phase 3 (Nice-to-have - Optional)**
- 🔵 Gamification & leaderboards
- 🔵 Direct messaging
- 🔵 Live streaming
- 🔵 Analytics dashboard
- 🔵 AI recommendations

---

**Document Version:** 1.0  
**Last Updated:** April 10, 2026  
**Next Review:** After dev estimation (Apr 12, 2026)
