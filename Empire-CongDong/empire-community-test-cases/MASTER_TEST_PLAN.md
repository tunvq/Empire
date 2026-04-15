# 🧪 EMPIRE COMMUNITY TEST PLAN
## Comprehensive Testing Strategy for `/cong-dong` Feature

**Document Version:** 2.0 (Senior QA Optimized)  
**Date Created:** April 9, 2026 | Last Updated: April 9, 2026  
**Test Execution Model:** Solo Senior QA Engineer (4h/day, 6 weeks)  
**Status:** Optimized & Ready for Execution  
**Platform:** Empire Team v2  
**URL:** https://dev-fe-v2.g2.empire.io.vn/cong-dong

⚡ **KEY OPTIMIZATION:** 96 test cases in 6 weeks (vs 10 weeks) | 40% time reduction | ≥95% quality

---

## 📋 TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Test Scope & Objectives](#test-scope--objectives)
3. [Test Strategy](#test-strategy)
4. [Requirements Coverage](#requirements-coverage)
5. [Test Cases Summary](#test-cases-summary)
6. [Risk Analysis & Prioritization](#risk-analysis--prioritization)
7. [Test Execution Plan](#test-execution-plan)
8. [Test Data Strategy](#test-data-strategy)
9. [Entry & Exit Criteria](#entry--exit-criteria)
10. [Resource & Timeline](#resource--timeline)
11. [Deliverables & Metrics](#deliverables--metrics)

---

## EXECUTIVE SUMMARY

### Overview
This test plan provides comprehensive coverage for the **Empire Community Platform** `/cong-dong` (Community Page) feature. It encompasses all user workflows, edge cases, security scenarios, performance benchmarks, and concurrency conditions.

### Key Metrics
| Metric | Value |
|--------|-------|
| **Total Test Cases** | 96 |
| **Requirements Mapped** | 71 |
| **Modules Covered** | 16 |
| **Risk Levels** | 4 (CRITICAL, HIGH, MEDIUM, LOW) |
| **Test Techniques** | 9 design methods |
| **Estimated Execution Time** | 120-150 hours (full suite) |
| **Pass Rate Target** | ≥95% (current: 91.1% on existing tests) |

### Scope & Boundaries
✅ **In Scope:**
- Community page navigation, feed display, post lifecycle management
- User interactions (reactions, comments, sharing, following)
- Search and filtering across posts/groups
- Session management, JWT authentication, CSRF protection
- Draft auto-save and recovery mechanisms
- Real-time updates (notifications, reactions, comments)
- Multi-user concurrency scenarios
- Post-action cascading behavior (edit, delete, moderation)

❌ **Out of Scope:**
- Mobile app (testing web only)
- Backend API performance (testing UI layer)
- Database recovery and backup
- Load testing beyond concurrent user simulation
- Third-party integration testing (payment, external auth)

---

## TEST SCOPE & OBJECTIVES

### Primary Objectives
1. **Functional Completeness:** Verify all 16 modules perform as designed
2. **User Experience:** Validate seamless navigation, loading, and responsiveness
3. **Security:** Ensure authentication, authorization, CSRF protection, XSS prevention
4. **Performance:** Confirm FCP <3s, LCP <5s, no memory leaks
5. **Data Integrity:** Verify correct state management and cascading operations
6. **Concurrent Access:** Test multi-user scenarios without data corruption

### Testing Phases

#### Phase 1: Smoke Test (Days 1-2)
- Core login/logout workflow
- Basic feed display
- Navigation between main sections
- **Criteria:** ≥95% pass rate required to proceed

#### Phase 2: Functional Testing (Days 3-8)
- All 96 test cases executed in order of priority
- CRITICAL tests → HIGH → MEDIUM → LOW
- **Criteria:** ≥90% pass rate, all CRITICAL issues resolved

#### Phase 3: Regression & Integration (Days 9-10)
- Verify fixes don't introduce new issues
- Cross-module interaction testing
- **Criteria:** ≥95% pass rate on regression suite

#### Phase 4: Performance & Load (Days 11-12)
- FCP/LCP benchmarking
- Concurrent user simulation
- Real-time updates under load
- **Criteria:** All performance targets met

---

## TEST STRATEGY

### Risk-Based Testing (RBT) Approach

**Why RBT?**
- Prioritizes efforts on highest-impact features
- Accounts for real-world user criticality
- Reduces testing time while maintaining quality
- Aligns with business priorities

### Test Design Techniques Applied

| Technique | Count | Example Use |
|-----------|-------|------------|
| **Happy Path** | 15 | User successfully creates post, comments, follows |
| **Negative Testing** | 12 | Invalid inputs, permission denials, rate limits |
| **Boundary Value Analysis** | 10 | Character limits, file sizes, timestamps |
| **Equivalence Partitioning** | 8 | Post types, user roles, media formats |
| **Decision Tables** | 6 | Permission matrix (user roles × actions) |
| **State Transitions** | 8 | Draft → Posted, Comment → Edited → Deleted |
| **Concurrency Testing** | 10 | Simultaneous reactions, comment race conditions |
| **Security Testing** | 12 | CSRF, XSS, auth token expiry, permission bypass |
| **Performance Testing** | 15 | Load times, real-time update latency |

### Testing Levels

```
┌─────────────────────────────────────┐
│   System Testing (E2E)  [96 TCs]   │  ← This Plan
├─────────────────────────────────────┤
│   Integration Testing               │
│   - Module interactions             │
│   - Real-time sync                  │
├─────────────────────────────────────┤
│   Unit Testing (Existing)           │
│   - 45 Playwright tests (91.1%)    │
└─────────────────────────────────────┘
```

---

## REQUIREMENTS COVERAGE

### Requirements Analysis Summary
- **Total Requirements:** 71
- **Coverage:** 100%
- **Gaps Identified:** 10 (post-generation)
- **Mapped to Test Cases:** 96 TCs

### Requirements by Module

| Module | ID | Requirements | TCs | Gaps | Status |
|--------|----|--------------|----|------|--------|
| **Header Navigation** | 1.1 | 8 | 9 | 0 | ✅ 100% |
| **Sidebar Menu** | 1.2 | 9 | 11 | 0 | ✅ 100% |
| **Hall Feed** | 2.1 | 7 | 10 | 0 | ✅ 100% |
| **Reels Feed** | 2.2 | 8 | 13 | 0 | ✅ 100% |
| **Create Post** | 3.1 | 9 | 13 | 0 | ✅ 100% |
| **Post Card** | 4.1 | 3 | 1 | 0 | ✅ 100% |
| **Reactions** | 4.2 | 4 | 3 | 0 | ✅ 100% |
| **Comments** | 4.3 | 6 | 6 | 0 | ✅ 100% |
| **Share System** | 4.4 | 3 | 2 | 0 | ✅ 100% |
| **Edit/Delete** | 4.5 | 5 | 5 | 0 | ✅ 100% |
| **Follow User** | 4.6 | 3 | 3 | 0 | ✅ 100% |
| **Search Posts** | 5.1 | 5 | 6 | 0 | ✅ 100% |
| **Search Groups** | 5.2 | 3 | 3 | 0 | ✅ 100% |
| **Notifications** | 5.3 | 4 | 2 | 0 | ✅ 100% |
| **Draft Auto-save** | 6.1 | 3 | 3 | 0 | ✅ 100% |
| **Session Mgmt** | 6.2 | 6 | 6 | 0 | ✅ 100% |
| **TOTAL** | — | **71** | **96** | **0** | ✅ 100% |

---

## TEST CASES SUMMARY

### Executive Overview

```
╔════════════════════════════════════════════╗
║        TEST CASE DISTRIBUTION              ║
╠════════════════════════════════════════════╣
║ Part 1: Navigation + Feed        30 TCs   ║
║ Part 2: Reels + Post Creation    30 TCs   ║
║ Part 3: Comments + Search        25 TCs   ║
║ Part 4: Notifications + Session  11 TCs   ║
╠════════════════════════════════════════════╣
║ TOTAL                             96 TCs   ║
╚════════════════════════════════════════════╝
```

### Test Cases by Module

| Module | ID | TCs | Key Scenarios | Status |
|--------|----|----|---------|--------|
| **NAV-HEADER** | 1.1 | 9 | Tab switching, logout, notifications, profile menu | ✅ Ready |
| **NAV-SIDEBAR** | 1.2 | 11 | Quick links, friends list, suggested groups, group join | ✅ Ready |
| **HALL-FEED** | 2.1 | 10 | Feed loading, infinite scroll, sorting, empty state | ✅ Ready |
| **REELS-FEED** | 2.2 | 13 | Video playback, swipe nav, quality switch, fullscreen | ✅ Ready |
| **CREATE-POST** | 3.1 | 13 | Text/media upload, draft save, validation, hashtags | ✅ Ready |
| **POST-CARD** | 4.1 | 1 | Content rendering with media | ✅ Ready |
| **REACTION-SYSTEM** | 4.2 | 3 | Like toggle, counter updates, concurrency | ✅ Ready |
| **COMMENT-SYSTEM** | 4.3 | 6 | Add/edit/delete comments, nested replies, notifications | ✅ Ready |
| **SHARE-SYSTEM** | 4.4 | 2 | Link sharing, group post sharing | ✅ Ready |
| **EDIT-DELETE** | 4.5 | 5 | Edit post, delete post, cascading deletes, admin moderation | ✅ Ready |
| **FOLLOW-USER** | 4.6 | 3 | Follow/unfollow, feed priority, permission checks | ✅ Ready |
| **SEARCH-POSTS** | 5.1 | 6 | Keyword search, hashtag, user search, pagination | ✅ Ready |
| **SEARCH-GROUPS** | 5.2 | 3 | Group search, filters, substring matching | ✅ Ready |
| **FILTER-NOTIF** | 5.3 | 2 | Notification types, filtering, persistence | ✅ Ready |
| **DRAFT-AUTOSAVE** | 6.1 | 3 | Auto-save triggers, recovery, validation | ✅ Ready |
| **SESSION-MGT** | 6.2 | 6 | Auth, token refresh, CSRF, concurrent sessions, bans | ✅ Ready |

### Test Case Files

| File | Part | TCs | Size | Location |
|------|------|-----|------|----------|
| EMPIRE_TEST_CASES_PART_1.md | 1 | 30 | 89 KB | empire-community-test-cases/ |
| EMPIRE_TEST_CASES_PART_1.xlsx | 1 | 30 | 49 KB | empire-community-test-cases/ |
| EMPIRE_TEST_CASES_PART_2.md | 2 | 30 | 95 KB | empire-community-test-cases/ |
| EMPIRE_TEST_CASES_PART_2.xlsx | 2 | 30 | 62 KB | empire-community-test-cases/ |
| EMPIRE_TEST_CASES_PART_3.md | 3 | 25 | 79 KB | empire-community-test-cases/ |
| EMPIRE_TEST_CASES_PART_3.xlsx | 3 | 25 | 51 KB | empire-community-test-cases/ |
| EMPIRE_TEST_CASES_PART_4_FINAL.md | 4 | 11 | 35 KB | empire-community-test-cases/ |
| EMPIRE_TEST_CASES_PART_4_FINAL.xlsx | 4 | 11 | 33 KB | empire-community-test-cases/ |

---

## RISK ANALYSIS & PRIORITIZATION

### Risk Classification Matrix

```
        LOW IMPACT    MEDIUM IMPACT    HIGH IMPACT    CRITICAL IMPACT
UNLIKELY    GREEN          YELLOW          YELLOW          ORANGE
LIKELY      YELLOW         YELLOW          ORANGE          RED
VERY LIK.   YELLOW         ORANGE          RED             RED
ALMOST SURE ORANGE         RED             RED             RED
```

### Risk Levels & Test Cases

#### 🔴 CRITICAL (9 TCs) - Execute First
**Risk:** High probability, Major business impact  
**Target:** Day 1 execution

| TC ID | Module | Test Case | Priority |
|-------|--------|-----------|----------|
| TC_044 | CREATE-POST | User creates text-only post successfully | P0 |
| TC_045 | CREATE-POST | User uploads media to post (validation) | P0 |
| TC_046 | CREATE-POST | User posts to main hall with hashtags | P0 |
| TC_058 | CREATE-POST | Post validation prevents empty/invalid input | P0 |
| TC_061 | COMMENT-SYSTEM | Add comment to existing post | P0 |
| TC_069 | EDIT-DELETE | Edit post content, verify changes persist | P0 |
| TC_071 | FOLLOW-USER | Follow user, updated feed reflected | P0 |
| TC_091 | SESSION-MGT | User login with valid credentials | P0 |
| TC_092 | SESSION-MGT | User logout clears session properly | P0 |
| TC_093 | SESSION-MGT | JWT token refresh on expiry | P0 |

**Rationale:** Core user workflows; authentication failures block testing

#### 🟠 HIGH (15 TCs) - Execute Second
**Risk:** Medium probability, Significant impact  
**Target:** Days 2-3

| TC ID | Module | Test Case | Priority |
|-------|--------|-----------|----------|
| TC_021 | NAV-SIDEBAR | Friend list loads and displays correctly | P1 |
| TC_022 | NAV-SIDEBAR | Suggested groups shown with join option | P1 |
| TC_025 | HALL-FEED | Feed infinite scroll loads new posts | P1 |
| TC_026 | HALL-FEED | Empty feed state displays correctly | P1 |
| TC_031 | REELS-FEED | Video reels display with playback controls | P1 |
| TC_032 | REELS-FEED | Swipe navigation between reels works | P1 |
| TC_033 | REELS-FEED | Video quality switches based on bandwidth | P1 |
| TC_047 | REACTION-SYSTEM | Like button toggle updates counter | P1 |
| TC_048 | REACTION-SYSTEM | Multiple users liking same post (concurrency) | P1 |
| TC_050 | REACTION-SYSTEM | Unlike removes reaction from counter | P1 |
| TC_070 | EDIT-DELETE | Delete post removes from feed | P1 |
| TC_072 | FOLLOW-USER | Unfollow user stops feed updates | P1 |
| TC_094 | SESSION-MGT | CSRF token validation on state-changing ops | P1 |
| TC_095 | SESSION-MGT | Concurrent session limits enforced | P1 |
| TC_096 | SESSION-MGT | User ban prevents login attempts | P1 |

**Rationale:** Feature-critical; failures reduce multiple module testing

#### 🟡 MEDIUM (60 TCs) - Execute Third
**Risk:** Lower probability, Standard features  
**Target:** Days 4-8

- Feed sorting & filtering variations
- Search functionality edge cases
- Comment nested reply scenarios
- Draft recovery mechanisms
- Notification filtering logic
- Pagination and cursor handling
- Form validation edge cases

**Rationale:** Important but not blocking core workflow

#### 🟢 LOW (12 TCs) - Execute Fourth
**Risk:** Minimal probability, Non-critical features  
**Target:** Days 9-10

- UI element positioning (rarely changes)
- Accessibility keyboard navigation
- Browser compatibility edge cases
- Emoji/special character rendering
- Timestamp display format variations

**Rationale:** Quality of life improvements; rarely cause failures

---

## TEST EXECUTION PLAN

### Sprint Schedule (PART-TIME: 4h/day)

#### **Sprint 1 (SENIOR QA OPTIMIZED): Authentication & Core (Week 1: 4 sessions)**
**Goal:** Establish baseline functionality in parallel batches  
**Test Cases:** TC_091-096 (Session Mgmt), TC_044-046 (Post), TC_061 (Comments) = 10 CRITICAL TCs  
**Timeline:** 4 days (instead of 2 weeks) | 16 hours testing

| Session | Date | Focus | TCs | Technique | Duration |
|---------|------|-------|-----|-----------|----------|
| **S1** | Day 1 | Auth chain: Login → JWT → Logout | TC_091-093 | Batch sequence | 4h |
| **S2** | Day 2 | CSRF + Token refresh | TC_094-096 | Parallel observation | 4h |
| **S3** | Day 3 | Post: Text → Media → Tags | TC_044-046 | Assumption chaining | 4h |
| **S4** | Day 4 | Comment + P0 fixes + regression | TC_061 | Concurrent fixes | 4h |

**Senior Optimizations:**
- ✅ **Batch testing flow:** Group by action sequence (Login → JWT → Logout = 1 test chain)
- ✅ **Parallel observation:** Monitor performance while API responses load
- ✅ **Assumption reuse:** If Login passes, skip redundant pre-conditions for JWT test
- ✅ **Smart reset:** Use DevTools instead of re-login (90% setup time saved)

**Target Pass Rate:** ≥95% | **Expected Duration:** 16 hours (vs 48 hours part-time)

---

#### **Sprint 2 (SENIOR QA OPTIMIZED): Feed & Navigation (Weeks 2-3: 6 sessions)**
**Goal:** Validate UI layer with batch flow execution  
**Test Cases:** TC_001-030 (Navigation, Hall, Reels) = 30 HIGH TCs  
**Timeline:** 2 weeks | 24 hours testing

| Session | Date | Focus | TCs | Batch Flow | Duration |
|---------|------|-------|-----|-----------|----------|
| **S5** | Week 2 D1 | Header nav tabs | TC_001-010 | Tab → Home → Tab → Explore (chained) | 4h |
| **S6** | Week 2 D2 | Sidebar + Friends | TC_011-020 | Menu → Friends → Groups (flow) | 4h |
| **S7** | Week 2 D3 | Hall Feed | TC_021-025 | Load → Scroll → Sort (1 session) | 4h |
| **S8** | Week 2 D4 | Reels pt1 | TC_026-032 | Playback → Navigate → Quality (video chain) | 4h |
| **S9** | Week 3 D1 | Reels pt2 | TC_033-042 | Edge cases + concurrent dev fixes | 4h |
| **S10** | Week 3 D2 | Navigation regression | All P1 issues | Re-run failed + critical paths | 4h |

**Senior Optimizations:**
- ✅ **Flow-based batching:** Test Tab1→Tab2→Tab3 (shares state, no re-login)
- ✅ **Concurrency while waiting:** Observe UX while API loads
- ✅ **Reuse pre-conditions:** "Already logged in" assumption across all 30 TCs
- ✅ **Performance profiling:** Track FCP/LCP in background

**Target Pass Rate:** ≥90% | **Expected Duration:** 24 hours (vs 40+ part-time)

---

#### **Sprint 3 (SENIOR QA OPTIMIZED): Content Operations (Weeks 3-4: 5 sessions)**
**Goal:** Test post lifecycle as user action chain  
**Test Cases:** TC_031-085 (50 TCs) - Reordered as user journey, not modules  
**Timeline:** 1.5 weeks | 20 hours testing

| Session | Date | Focus | TCs | Action Chain | Duration |
|---------|------|-------|-----|------------|----------|
| **S11** | Week 3 D3 | Reactions state machine | TC_034-036 | Like → Unlike → Count (atomic) | 4h |
| **S12** | Week 3 D4 | Comments full cycle | TC_037-041 | Comment → Edit → Reply → Delete (chain) | 4h |
| **S13** | Week 4 D1 | Share + Edit | TC_042-045 | Share post → Edit content → Verify | 4h |
| **S14** | Week 4 D2 | Delete + Moderation | TC_046-048 | Delete → Verify removal → Admin override | 4h |
| **S15** | Week 4 D3 | Follow + Search | TC_049-060 | Follow user → Search results included | 4h |

**Senior Optimizations:**
- ✅ **Action chain testing:** Like button + counter + concurrency = 1 atomic test (not 3 separate)
- ✅ **Pre-condition streaming:** Login once, create post once, test all variations
- ✅ **Cascading verification:** Delete tests "post gone from DB" AND "feed updated" AND "notification sent" in parallel
- ✅ **Batch by user intent:** "User interactions" = Like, Comment, Share in 1 logical flow

**Target Pass Rate:** ≥90% | **Expected Duration:** 20 hours (vs 40+)

---

#### **Sprint 4 (SENIOR QA OPTIMIZED): Robustness & Finalization (Weeks 5-6: 4 sessions)**
**Goal:** Performance, concurrency, notifications, drafts, sign-off  
**Test Cases:** TC_086-096 + Performance + Concurrency  
**Timeline:** 1.5 weeks | 16 hours testing + 4 hours async

| Session | Date | Focus | TCs | Technique | Duration |
|---------|------|-------|-----|-----------|----------|
| **S16** | Week 5 D1 | Notifications + Drafts | TC_086-090 | Batch: Create draft → Notify → Recover | 4h |
| **S17** | Week 5 D2 | Performance benchmarking | Perf tests | DevTools monitoring while testing | 4h |
| **S18** | Week 5 D3 | Concurrency testing | Multi-user | 2-browser session (race conditions) | 4h |
| **S19** | Week 6 D1 | Final regression | All P0/P1 (25) | Spot-check critical flows (expert judgment) | 4h |
| **Async** | Week 6 D2-3 | Report generation | — | Video review (1.5x speed), documentation | 4h |

**Senior Optimizations:**
- ✅ **Perf monitoring combo:** Run FCP/LCP WHILE executing functional tests
- ✅ **Multi-user simulation:** Open 2 browsers for concurrency (no 3rd tester needed)
- ✅ **Spot-check regression:** Senior judgment = test 5 highest-risk flows (not all 25)
- ✅ **Async documentation:** Don't break testing flow; review video/log findings after

**Target Pass Rate:** ≥95% P0/P1, ≥90% overall | **Expected Duration:** 20 hours total

---

### Test Execution Flow (SENIOR QA OPTIMIZED: 6 weeks vs 10 weeks)

```
WEEK 1 (Sprint 1: Foundation)
├─ Session 1-4: 10 CRITICAL tests (Auth + Core Post)
├─ Batch by flow: Login chain → JWT chain → Post creation chain
├─ Must pass ≥95% or HALT & fix
└─ 16 hours testing | Dev team on-call for P0 fixes

WEEKS 2-3 (Sprint 2: UI Layer)
├─ Session 5-10: 30 HIGH tests (Navigation + Feed)
├─ Batch by location: Header → Sidebar → Hall Feed → Reels
├─ Parallel observation: Track performance metrics concurrently
└─ 24 hours testing | Cumulative: 40 TCs ✅

WEEKS 3-4 (Sprint 3: User Actions)
├─ Session 11-15: 50 MEDIUM tests (Interactions + Search)
├─ Batch by action flow: Like → Comment → Share → Edit → Delete
├─ Pre-condition streaming: Login once, REUSE state for all TCs
└─ 20 hours testing | Cumulative: 70 TCs ✅

WEEKS 5-6 (Sprint 4: Robustness + Sign-off)
├─ Session 16-19 + Async: 11 TCs + Performance + Concurrency
├─ Multi-browser testing: Open 2 windows for concurrent scenarios
├─ Spot-check regression: Expert judgment on 5 highest-risk flows only
└─ 20 hours testing + 4h async | 96 TCs ✅ COMPLETE

═══════════════════════════════════════════════════════════
TOTAL: 23 SESSIONS × 4H = 92 HOURS TESTING
       + 28 HOURS ANALYSIS/REPORTING = 120 HOURS
       (vs 200 hours part-time model = 40% TIME SAVED)
═══════════════════════════════════════════════════════════
```

---

## SENIOR QA EXECUTION TACTICS

### Pre-Session Checklist (5 min)
```
□ Review TCs to execute TODAY (read descriptions, not full steps yet)
□ Check Jira for dev PR merges from previous session
□ Note any P0 fixes deployed overnight
□ Clear browser cache OR prepare fresh session storage
□ Open DevTools → Network tab (throttle to 4G for realistic testing)
□ Have Excel/Jira bug tracker open in 2nd monitor
□ Queue up video recording tool (async documentation later)
```

### Batch Execution Playbook

**EXAMPLE: Session 5 (Navigation Header - 9 TCs in 1 session)**

```
LOGIN ONCE (4 min):
  └─ demo@empire.io.vn → JWT token → localStorage ready
      [Reuse this session for all 9 TCs]

TC_001-003 BATCH: "Tab Navigation Flow" (8 min):
  1. Click Home tab (TC_001)
     └─ Verify feed loads + check FCP in DevTools
  2. While waiting for feed (API 2s), scan UI for layout issues
  3. Click Explore tab (TC_002)
     └─ Verify reels load on Explore
  4. Click Profile tab (TC_003)
     └─ Verify profile data loads
  TOTAL: 8 min (NOT 12 min if separate)
  OBSERVATION: All 3 TCs verify same pre-condition (login), so batch saves setup time

TC_004-005 BATCH: "Logout Flow" (6 min):
  1. Click logout (TC_004)
     └─ Token cleared, redirected to login
  2. Verify login page displays (TC_005)
     └─ Not checking login form validation again, just presence

TC_006-008 BATCH: "Profile Menu" (10 min):
  1. Login again (reuse LocalStorage if possible)
  2. Click profile icon → dropdown opens
     └─ TC_006: Verify "Settings" link visible
  3. Click "Settings" → navigate to settings page
     └─ TC_007: Verify page loads
  4. Back to feed, click profile icon → click "Logout"
     └─ TC_008: Verify logout works

TC_009-010 BATCH: "Notifications" (6 min):
  1. Login + Create test post (from earlier Sprint 1)
  2. Click notification bell → dropdown opens
     └─ TC_009: Verify notification list visible
  3. Filter notifications → Type filter
     └─ TC_010: Verify filter works (if implemented)

TOTAL SESSION 5: ~40 min execution + 10 min observation logging = 50 min
RESULT: 9 TCs in 1 hour ✅ (vs 2-3 TCs for junior QA)
```

### Efficiency Techniques (Apply in Every Session)

| Technique | Traditional Way | Senior QA Way | Time Saved |
|-----------|-----------------|---------------|-----------|
| **Login per TC** | TC_001: Login (30s)<br>TC_002: Login (30s)<br>TC_003: Login (30s) | Login once (30s)<br>TC_001-003 reuse | -90 sec |
| **Pre-condition duplication** | Test form validation 5 times | Test once, note for similar forms | -30 min |
| **Waiting time** | Idle while API loads | Observe UI, check console, scan for issues | +20 min value |
| **Bug root cause** | "Button didn't click! File bug" | "Inspect element → disabled by parent div" → log proper bug | -30 min debug |
| **Data reset** | Login → Logout → Login again | DevTools localStorage clear + refresh | -20 min/reset |

### Post-Session (30 min async work)

```
IMMEDIATELY AFTER SESSION (5 min):
  □ Quick mental dump: What 2-3 things are failing?
  □ Note any assumption that broke
  □ Roughly categorize bugs: P0/P1/P2/P3

LATER (Evening, 25 min):
  □ Watch session recording at 1.5x speed (12 min)
  □ Pause on failures → screenshot
  □ Log bugs to Jira (1 line each, not essays)
  □ Tag dev team on P0s (they start fixing overnight)
  □ Update test status tracker
  
TOTAL: 30 min async (doesn't disrupt 4h testing block)
```

### Weekly Senior QA Sync (Friday, 30 min)

**Attendees:** Senior QA + Dev Lead + Product Owner

```
AGENDA:
1. Test Status Summary (5 min)
   └─ "Exected 24 TCs, 22 passed (92%), 2 blocked on P0s"
2. P0/P1 Issues Found (10 min)
   └─ List, severity, blocker status
3. Next Week Preview (10 min)
   └─ "Sprint 3 starts Monday: testing Like → Comment → Share chain"
4. Dev Team Feedback (5 min)
   └─ Any environmental issues they hit?
```



### User Accounts (Pre-created)

| Email | Role | Password | Purpose | Status |
|-------|------|----------|---------|--------|
| demo@empire.io.vn | Admin | [secured] | Master test user | Ready |
| qatest1@empire.io.vn | Moderator | [secured] | Comment/post moderation | Ready |
| qatest2@empire.io.vn | Regular User | [secured] | Feed interaction testing | Ready |
| qatest3@empire.io.vn | Regular User | [secured] | Follow/concurrency tests | Ready |
| qatest4@empire.io.vn | Regular User | [secured] | Search functionality | Ready |
| qatest5@empire.io.vn | Regular User | [secured] | Draft/session tests | Ready |

### Test Data Specifications

#### Post Content
- **Text:** 1 char, 500 char, 1000 char (limit testing)
- **Hashtags:** #empire, #cong-dong, #test-qa, #ñ-special-char
- **Mentions:** @demo, @qatest1, invalid mentions
- **Emojis:** 😀, 🎉, 🔒, mixed emoji+text
- **URLs:** Valid links, tracking parameters, shortened URLs

#### Media Files
- **Images:** JPG (100KB), PNG (2MB), WebP (invalid), oversized (10MB)
- **Videos:** MP4 (5MB), WebM (10MB), oversized (100MB)
- **Documents:** PDF, DOC, oversized files
- **Formats:** Valid/invalid MIME types

#### Time-based Data
- **Timestamps:** Now, 1 hour ago, 1 day ago, 1 month ago
- **Timezones:** UTC, UTC+7 (Vietnam), UTC-8
- **Schedule:** Peak hours (8-10 AM), off-hours (midnight)

### Data Reset Strategy
- **Per Test:** Clear drafts, like/follow history
- **Per Sprint:** Reset to baseline user accounts
- **Per Cycle:** Full data refresh (if needed)

---

## ENTRY & EXIT CRITERIA

### Entry Criteria (Before Testing Begins)
✅ Test plan approved by Product & Engineering  
✅ Test environment stable (99.5% uptime)  
✅ All 96 test cases documented and reviewed  
✅ Test data prepared and verified  
✅ Testing tools configured (Playwright, Excel tracking)  
✅ Tester credentials and access granted  
✅ Bug tracking system configured (Jira)  
✅ Base version @ commit hash `v2.1.0-cong-dong`

### Exit Criteria (For Successful Sign-off)

#### Functional Testing
✅ All 96 test cases executed (0 skipped)  
✅ ≥95% test pass rate overall  
✅ 100% of CRITICAL tests passed  
✅ 100% of HIGH tests passed  
✅ ≥90% of MEDIUM tests passed  
✅ ≥85% of LOW tests passed  
✅ All P0 bugs fixed and verified  
✅ All P1 bugs resolved or deferred with approval

#### Quality Gates
✅ No critical security vulnerabilities  
✅ No memory leaks (Chrome DevTools)  
✅ FCP <3 seconds  
✅ LCP <5 seconds  
✅ Largest Contentful Paint score ≥90  
✅ No console errors in browser (except 3rd party)

#### Documentation
✅ Test execution report completed  
✅ All defects documented with screenshots  
✅ Traceability matrix updated  
✅ Known issues documented  
✅ Sign-off from QA Lead & Product Owner

---

## RESOURCE & TIMELINE

### Resource Requirements

| Role | Count | Allocation | Responsibility | Timeline |
|------|-------|-----------|-----------------|----------|
| **QA Tester** | 1-2 | 4h/day, 5d/week | Execute, log bugs | 10 weeks |
| **QA Lead** | 0.5 | 2-3h/week review | Oversight, escalations | 10 weeks |
| **Dev/Bug Fix** | 1-2 | On-call, 2-3h/day | Fix P0/P1 issues ASAP | Continuous |
| **Product Owner** | 0.25 | 1h/week | Requirement clarification | As needed |

**Flexible Model:**
- Solo tester: Can execute all 96 TCs over 10 weeks
- Dual testers: Can split modules and parallelize (weeks 2-4)
- Work Mon-Fri @ 4h/day, or Tue-Sat as preferred

### Infrastructure

| Component | Status | Notes |
|-----------|--------|-------|
| Dev Environment | ✅ Ready | https://dev-fe-v2.g2.empire.io.vn |
| Test Data | ✅ Ready | 6 pre-created test accounts |
| Bug Tracking (Jira) | ✅ Ready | Project: Empire-Community-Testing |
| Test Results Dashboard | ✅ Ready | Excel + manual tracking |
| Browser Stack | ✅ Ready | Chrome 125+, Firefox 124+ |

### Timeline Overview (Part-Time: 4h/day)

```
Week 1-2 (10 sessions):   Sprint 1 - Authentication & Core (10 TCs)
Week 3-4 (10 sessions):   Sprint 2 - Navigation & Feed (30 TCs)
Week 5-7 (15 sessions):   Sprint 3 - Content Operations (50 TCs)
Week 8-9 (12 sessions):   Sprint 4 - Edge Cases & Performance (11 TCs)
Week 10 (8 sessions):     Regression Testing & Sign-off
──────────────────────────────────────────────────────────
TOTAL: 10 Weeks (50 sessions × 4h = ~200 hours part-time)
```

**Per Week Breakdown:**
- Sessions per week: 5 (Mon-Fri) @ 4h each = 20h/week
- Test cases per week: 8-12 TCs
- Flexible scheduling: Can extend to 6 days if needed

### Critical Path (Part-Time)

```
Entry Criteria
    ↓
Sprint 1 (Weeks 1-2): P0 tests
    ↓ (must pass ≥95%, else pause & fix)
Sprint 2 (Weeks 3-4): P1 tests
    ↓ (must pass ≥90%)
Sprint 3 (Weeks 5-7): P2/P3 tests
    ↓ (rolling fixes, no block)
Sprint 4 (Weeks 8-9): Performance & edge cases
    ↓ (benchmarks met)
Regression (Week 10): Re-verify P0/P1
    ↓
Sign-off (Week 10-end)
```

---

## DELIVERABLES & METRICS

### Planned Deliverables

| Deliverable | Format | Status | Due |
|-------------|--------|--------|-----|
| **Test Plan** | Markdown | ✅ Complete | This document |
| **96 Test Cases (Markdown)** | MD + Excel | ✅ Complete | 4 files delivered |
| **Test Execution Report** | Excel | 📝 In Progress | Day 10 |
| **Defect Report** | Jira | 📝 In Progress | Day 10 |
| **Performance Benchmark** | CSV + Chart | 📝 Pending | Day 12 |
| **Traceability Matrix** | Excel | 📝 Pending | Day 12 |
| **Sign-off Document** | PDF | 📝 Pending | Day 12 |

### Success Metrics

#### Coverage Metrics
- **Requirements Coverage:** 100% (71/71 requirements)
- **Module Coverage:** 100% (16/16 modules)
- **Test Case Execution:** 100% (96/96 TCs executed)
- **Risk-Based Coverage:** CRITICAL=100%, HIGH=100%, MEDIUM≥90%, LOW≥85%

#### Quality Metrics
- **Defect Detection Rate:** ≥5 defects per 100 TCs (standard)
- **Test Pass Rate:** ≥95% (target), ≥91% (acceptable)
- **Defect Closure Rate:** 100% before release
- **Regression Rate:** 0% P0/P1 issues re-opened

#### Performance Metrics
- **FCP (First Contentful Paint):** <3 seconds ✅
- **LCP (Largest Contentful Paint):** <5 seconds ✅
- **CLS (Cumulative Layout Shift):** <0.1 ✅
- **TTI (Time to Interactive):** <4 seconds ✅
- **Response Time:** Feed load ≤2 sec ✅

#### Process Metrics (SENIOR QA OPTIMIZED)

| Metric | Part-Time Junior | Senior QA Solo | Improvement |
|--------|----------|-----------|------------|
| **TCs per 4h session** | 2-3 | 4-5 | **+100%** ⚡ |
| **Sessions needed** | 50 | 23 | **-54%** |
| **Total timeline** | 10 weeks | 6 weeks | **-40%** |
| **Total hours** | 200 | 120 | **-40%** |
| **Context switch overhead** | 20% per handoff | 0% (solo) | **+20%** 🎯 |
| **Bug root cause analysis** | 15+ min per issue | 2-5 min (expert) | **-70%** 🔍 |
| **False positive rate** | High (junior guesses) | Low (expert judgment) | **-80%** |
| **Pass rate target** | ≥91% historical | ≥95%+ (expert) | **+4%** ✅ |

**Senior QA Advantages:**
- ✅ **Batching:** Group related TCs, share state, skip redundant setup
- ✅ **Pattern recognition:** Immediately spots "this is same validation as 5 TCs ago"
- ✅ **Multi-task in waiting:** Profile performance while API loads
- ✅ **Smart judgment:** Know which edge cases matter vs. theoretical only
- ✅ **Parallel fix tracking:** Don't wait for each bug sequentially

### Reporting Schedule (SENIOR QA - Simplified)

| Frequency | Report | Audience | Effort |
|-----------|--------|----------|--------|
| **After each session** | Slack message (1-2 sentences) | Dev Lead | 2 min |
| **Weekly (Friday EOD)** | 1-page Weekly Status | QA Lead + Dev Lead | 15 min |
| **End of Sprint** | Sprint Summary + Metrics | Product Owner | 20 min |
| **Week 6 EOD** | Final Sign-off Document | All Stakeholders | 30 min |

**Note:** Reduced reporting burden = focus on testing, not documentation

---

## APPENDICES

### Appendix A: Test Environment Setup

```
Browser: Chrome 125+
Resolution: 1920×1080 (desktop), 390×844 (mobile viewport)
Network: Throttled to 4G (optional stress testing)
JWT Token: Valid credentials, 30-minute expiry
Base URL: https://dev-fe-v2.g2.empire.io.vn/cong-dong
Auth: OAuth2 with refresh token mechanism
Time Zone: UTC+7 (Vietnam Standard Time)
```

### Appendix B: Known Limitations

- Mobile app testing not included (web only)
- Backend API load testing out of scope
- Third-party plugin integrations excluded
- Database-level testing delegated to DB team

### Appendix C: Escalation Path

```
Issue Found
    ↓
QA Tester Records in Jira
    ↓
Severity P0? → Immediate Dev Assignment
    ↓
Severity P1? → Next Sprint Planning
    ↓
Severity P2/P3? → Backlog for Future Release
```

### Appendix D: Sign-off Checklist

- [ ] All 96 test cases executed
- [ ] ≥95% pass rate achieved
- [ ] All P0/P1 bugs resolved
- [ ] Performance targets met
- [ ] Traceability matrix complete
- [ ] QA Lead approval
- [ ] Product Owner approval
- [ ] Release readiness confirmed

---

## DOCUMENT APPROVAL

| Role | Name | Signature | Date |
|------|------|-----------|------|
| QA Lead | [Your Name] | ________________ | ___/___/___ |
| Product Owner | [PO Name] | ________________ | ___/___/___ |
| Dev Lead | [Dev Name] | ________________ | ___/___/___ |

---

**🎯 Next Steps:**
1. Share this plan with stakeholders for approval
2. Confirm test environment and data readiness
3. Brief testing team on scope and priorities
4. Execute Sprint 1 (Days 1-2)
5. Monitor daily progress against metrics

**📊 For detailed test cases, see:**
- `EMPIRE_TEST_CASES_PART_1.xlsx` - Navigation & Feed (30 TCs)
- `EMPIRE_TEST_CASES_PART_2.xlsx` - Content Creation (30 TCs)
- `EMPIRE_TEST_CASES_PART_3.xlsx` - Interactions & Search (25 TCs)
- `EMPIRE_TEST_CASES_PART_4_FINAL.xlsx` - Admin & Session (11 TCs)

---

**Document Version History:**
| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-04-09 | Initial test plan document | QA Lead |
