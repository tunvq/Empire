# 🎯 OPTIMIZED TEST PLAN - SOLO SENIOR QA
## Comprehensive Testing Strategy for `/cong-dong` | Single Expert Tester

**Document Version:** 2.0 (Senior QA Optimized)  
**Date Created:** April 9, 2026  
**Test Lead:** Senior QA Engineer (Solo)  
**Status:** Optimized for Expert Execution  
**Platform:** Empire Team v2  
**URL:** https://dev-fe-v2.g2.empire.io.vn/cong-dong

---

## 📊 TIMELINE COMPARISON

### Full-Time Model vs Part-Time Models

| Model | Duration | Hours/Week | TCs/Week | Total Hours | Notes |
|-------|----------|-----------|----------|------------|-------|
| **Full-Time (2 Testers)** | 10-12 days | 80h | 40+ | 160h | Original plan |
| **Part-Time (1-2 Testers @ 4h/d)** | 10 weeks | 20h | 10-12 | 200h | Current adjustment |
| **Senior QA Solo (4h/d, Optimized)** | **6 weeks** | 20h | 16-18 | **120h** | ✨ **RECOMMENDED** |
| **Senior QA Solo (Full 8h/d)** | **3.5 weeks** | 40h | 35+ | 140h | Aggressive option |

---

## 🚀 SENIOR QA OPTIMIZATION STRATEGY

### Why Senior QA Executes Faster

| Factor | Improvement | Impact |
|--------|------------|--------|
| **TC Execution Speed** | +50-70% faster | 4-5 TCs/4h vs 2-3 for junior |
| **Bug Analysis** | Immediate root cause | Skip debugging steps |
| **Test Optimization** | Batch similar scenarios | Combine pre-conditions |
| **Risk Assessment** | Expert judgment | Selective LOW-priority focus |
| **Issue Prioritization** | Parallel fix tracking | Don't wait for each fix consecutively |

### Optimizations Applied

✅ **Batch Related Tests:** Combine Navigation tests (TC_001-020) → execute in flow instead of isolation  
✅ **Skip Redundant Checks:** Validations tested once, reused for similar modules  
✅ **Parallel Observation:** Log observations while testing (not post-analysis)  
✅ **Risk-Based Ruthlessness:** Focus 80% effort on 20% HIGH/CRITICAL tests  
✅ **Concurrent Execution:** While waiting for API responses, test UI elements  
✅ **Smart Data Reset:** Use browser DevTools to clear state instead of re-login  
✅ **Shared Context:** One person maintains mental model across all modules (no handoff loss)

---

## 📅 OPTIMIZED TIMELINE: 6 WEEKS (4h/day)

### Week 1: Foundation Setup + CRITICAL Tests (4 sessions)

| Session | Date | Focus | TCs | Duration | Notes |
|---------|------|-------|-----|----------|-------|
| **Session 1** | Week 1 Day 1 | Environment setup + TC_091-092 (Login/Logout) | 2 | 4h | Baseline |
| **Session 2** | Week 1 Day 2 | TC_093-096 (JWT, CSRF, Session) | 4 | 4h | Core security |
| **Session 3** | Week 1 Day 3 | TC_044-046 (Post creation variants) | 3 | 4h | Core workflow |
| **Session 4** | Week 1 Day 4 | TC_061 + Regression + Fix P0 issues | 1-2 | 4h | Validation |

**Sprint 1 Total:** 10 CRITICAL TCs in 4 days  
**Target Pass Rate:** ≥95% (requirement for proceeding)  
**Daily Progress:** Week 1 ends with fully working auth + post creation ✅

---

### Week 2-3: Navigation & Feed Module (6 sessions)

**Strategy:** Batch by location (Header → Sidebar → Hall → Reels)

| Session | Date | Module | TCs | Focus | Duration |
|---------|------|--------|-----|-------|----------|
| **Session 5** | Week 2 Day 1 | NAV-HEADER (TC_001-010) | 9 | Tabs, logout, profile | 4h |
| **Session 6** | Week 2 Day 2 | NAV-SIDEBAR (TC_011-020) | 10 | Menu, friends, groups | 4h |
| **Session 7** | Week 2 Day 3 | HALL-FEED (TC_021-025) | 5 | Feed load, scroll, sort | 4h |
| **Session 8** | Week 2 Day 4 | HALL-FEED continued (TC_026-030) | 5 | Empty states, edge cases | 4h |
| **Session 9** | Week 3 Day 1 | REELS-FEED (TC_031-042) | 12 | Video playback, nav, quality | 4h |
| **Session 10** | Week 3 Day 2 | REELS-FEED finish + P1 fixes | 2-3 | Edge cases + fix P1 issues | 4h |

**Sprint 2 Total:** 30 HIGH TCs + Navigation tests in 2.5 weeks  
**Cumulative:** 40 TCs passed ✅  
**Issue Tracking:** Running list of P1 bugs for parallel dev team fix

---

### Week 3-4: Interactions & Content Operations (5 sessions)

**Strategy:** Chain by user action flow (Like → Comment → Share → Edit)

| Session | Date | Modules | TCs | Focus | Duration |
|---------|------|---------|-----|-------|----------|
| **Session 11** | Week 3 Day 3 | REACTION-SYSTEM (TC_034-036) | 3 | Likes, counters, concurrency | 4h |
| **Session 12** | Week 3 Day 4 | COMMENT-SYSTEM (TC_037-042) | 6 | Comments, edit, delete, nested | 4h |
| **Session 13** | Week 4 Day 1 | SHARE-SYSTEM + EDIT-DELETE (TC_043-048) | 6 | Share, edit, delete, moderation | 4h |
| **Session 14** | Week 4 Day 2 | FOLLOW-USER (TC_049-051) | 3 | Follow, unfollow, feed priority | 4h |
| **Session 15** | Week 4 Day 3 | Rest + P1 regression | — | Testing & fixing day | 4h |

**Sprint 3 Total:** 18 MEDIUM TCs in 2 weeks  
**Cumulative:** 58 TCs passed ✅  
**Pattern**: Finish Session 14, dedicate Session 15 to fixes from dev team

---

### Week 4-5: Search, Notifications, Drafts (4 sessions)

**Strategy:** Utility features (high value, quick execution)

| Session | Date | Modules | TCs | Focus | Duration |
|---------|------|---------|-----|-------|----------|
| **Session 16** | Week 4 Day 4 | SEARCH-POSTS (TC_052-057) | 6 | Keyword, hashtag, user, pagination | 4h |
| **Session 17** | Week 5 Day 1 | SEARCH-GROUPS (TC_058-060) | 3 | Group search, filters | 4h |
| **Session 18** | Week 5 Day 2 | FILTER-NOTIF + DRAFT-AUTOSAVE (TC_061-065) | 5 | Notifications, drafts, recovery | 4h |
| **Session 19** | Week 5 Day 3 | Edge cases + Browser concurrency tests | 2-3 | Multi-tab, simultaneous actions | 4h |

**Sprint 4 Total:** 16 TCs + edge cases in 1.75 weeks  
**Cumulative:** 74 TCs passed ✅  

---

### Week 5-6: Performance, Concurrency & Sign-off (3 sessions)

| Session | Date | Focus | Criteria | Duration |
|---------|------|-------|----------|----------|
| **Session 20** | Week 5 Day 4 | Performance Benchmarking | FCP <3s, LCP <5s, CLS <0.1 | 4h |
| **Session 21** | Week 6 Day 1 | Concurrency Testing (Multi-user scenarios) | Race conditions, data consistency | 4h |
| **Session 22** | Week 6 Day 2 | Final Regression (All P0/P1 + sample P2) | ≥95% pass on CRITICAL+HIGH | 4h |
| **Session 23** | Week 6 Day 3 | Report generation + Sign-off prep | Documentation complete | 4h |

**Final Sprint Total:** All remaining scenarios + robustness  
**Cumulative:** 96 TCs executed ✅  
**Sign-off:** Ready by Week 6 EOW

---

## 📍 SIDE-BY-SIDE TIMELINE COMPARISON

```
PART-TIME MODEL (1-2 Testers @ 4h/d):
├─ Sprint 1 (Weeks 1-2):   10 CRITICAL      → 10 sessions
├─ Sprint 2 (Weeks 3-4):   30 HIGH           → 10 sessions
├─ Sprint 3 (Weeks 5-7):   50 MEDIUM/LOW     → 15 sessions
├─ Sprint 4 (Weeks 8-9):   11 TCs + Perf     → 12 sessions
└─ Regression (Week 10):   Final checks      → 8 sessions
   TOTAL: 10 WEEKS, 50 sessions, 200 hours

SENIOR QA OPTIMIZED (Solo @ 4h/d):
├─ Week 1 (4 sessions):     10 CRITICAL
├─ Weeks 2-3 (6 sessions):  30 HIGH + NAV
├─ Weeks 3-4 (5 sessions):  18 MEDIUM + INTERACTIONS
├─ Weeks 4-5 (4 sessions):  16 MEDIUM + SEARCH/NOTIF
└─ Weeks 5-6 (4 sessions):  22 PERF/CONCURRENCY/SIGNOFF
   TOTAL: 6 WEEKS, 23 sessions, 92 hours TESTING
           + 28 hours ANALYSIS/REPORTING = 120 hours
```

**TIME SAVED:** 80 hours (40% reduction) ⏱️ → From 10 weeks to 6 weeks

---

## 🎯 SENIOR QA EXECUTION PLAYBOOK

### Pre-Session Checklist (5 min)
```
□ Review TCs to execute this session (read descriptions only)
□ Check Jira for dev fixes from previous session
□ Clear browser cache/cookies (or use session recording)
□ Open DevTools to monitor performance metrics
□ Have Excel bug tracker ready
```

### During Session: Batch Execution
```
EXAMPLE: Session 5 (Navigation Header - TC_001-010)

1. Login once (4 min)
2. TC_001-003 (Tab navigation) - 8 min grouped
   └─ Batch: click Home → check feed loads → click Explore → verify reels
   └─ Check performance metrics concurrently
3. TC_004-005 (Logout flow) - 6 min
   └─ Test 2 scenarios in 1 flow
4. TC_006-008 (Profile menu) - 10 min
   └─ Open menu → check all options → verify sub-actions
5. TC_009-010 (Notifications) - 6 min
   └─ Click notification badge, verify filtering, check real-time updates
6. Observation & logging (20 min)
   └─ Document findings, screenshots, videos (async)

TOTAL: ~54 min execution + 6 min buffer = 60 min per session
  ✓ 9 TCs in 1 hour instead of 2-3 TCs traditional way
```

### Post-Session Checklist (10 min)
```
□ Log all findings to Excel/Jira with screenshots
□ Identify pattern issues (e.g., "performance slow on Images")
□ Tag P0/P1 issues for immediate dev attention
□ Note any assumptions/comments for dev team
□ Update test coverage tracker
```

### Weekly Review (Friday, 30 min)
```
□ Generate weekly test status report
□ Summary: TCs passed/failed/blocked
□ P0/P1 issue list + estimated fix time
□ Next week preview (modules to test)
□ Sync with dev lead on P0 blockers
```

---

## 📊 EXECUTION METRICS (SENIOR QA OPTIMIZED)

### Efficiency Gains

| Metric | Part-Time Junior | Senior QA Solo | Improvement |
|--------|----------|-----------|-------------|
| **TCs per hour** | 1.5-2 | 3-4 | **+100%** |
| **Sessions needed** | 50 | 23 | **-54%** |
| **Total weeks** | 10 | 6 | **-40%** |
| **Total hours** | 200 | 120 | **-40%** |
| **Context switch loss** | 20% per handoff | 0% (solo) | **+20%** |
| **Bug analysis time** | -50% (immediate root cause) | | **✅** |

### Quality Assurance
- **Pass Rate Target:** ≥95% (same)
- **Coverage:** 100% (96/96 TCs executed)
- **Regression Rate:** 0% P0/P1 re-opens (senior catches patterns faster)
- **False Positive Rate:** -70% (expert knows what's real vs noise)

### Risk Prioritization (Senior Judgment)
- **P0 Tests:** 100% execution (10 TCs) - NEVER skip
- **P1 Tests:** 100% execution (but batch execution saves time)
- **P2 Tests:** 90% execution (senior can intelligently skip 1-2 redundant edge cases)
- **P3 Tests:** 85% execution (LOW priority items - sample spot check)

---

## 🔄 OPTIMIZED SPRINT STRUCTURE

### Sprint 1: Foundation (Week 1)
**Objective:** Build foundation, establish baseline pass rate  
**Focus:** Authentication, JWT, CSRF, Core Post Creation  
**Output:** 10 CRITICAL TCs all passing ✅  
**Gate:** Must be ≥95% before proceeding

### Sprint 2: User Interface Layer (Weeks 2-3)
**Objective:** Validate all user-facing navigation and feed display  
**Focus:** Header/Sidebar (Navigation) + Feed Display (Hall/Reels)  
**Output:** 30 HIGH TCs passing ≥90%  
**Parallel:** Dev team fixing P1 issues while you execute Sprint 3

### Sprint 3: User Interactions (Weeks 3-4)
**Objective:** Test content lifecycle (Like → Comment → Edit → Delete)  
**Focus:** Reactions, Comments, Share, Edit/Delete, Follow  
**Output:** 18 MEDIUM TCs passing ≥90%  
**Key:** Batch by user action flow (not module boundaries)

### Sprint 4: Utility Features (Weeks 4-5)
**Objective:** Search, filtering, notifications, draft recovery  
**Focus:** Search Posts/Groups, Notifications, Draft Auto-save  
**Output:** 16 MEDIUM TCs passing ≥90%  
**Efficiency:** Quick execution (less complex than interaction layer)

### Sprint 5: Robustness & Sign-off (Weeks 5-6)
**Objective:** Performance, concurrency, final verification  
**Focus:** Performance benchmarking, concurrency race conditions, regression  
**Output:** 22 TCs + Performance report + Sign-off ready  
**Timeline:** Buffer for P1 issue resolution

---

## ⚡ ACCELERATION STRATEGIES

### Strategy 1: Module Grouping
Instead of `TC_001, TC_002, TC_003` (separate context):
```
GROUP: "Header Navigation Flow"
├─ TC_001: Click Home (4 min)
├─ TC_002: Click Explore (2 min - reuse state)
├─ TC_003: Click Profile (2 min - same pattern)
└─ TOTAL: 8 min instead of 12 min
```

### Strategy 2: Assumption Chaining
Instead of `Test TC_034 (Like +1), TC_035 (Like +1), TC_036 (Like -1)`:
```
CHAIN: "Like Button State Machine"
├─ Like post (assumes counter increments) → check (1.5 min)
├─ Like again (should already be liked) → check (1.5 min)
├─ Unlike → check counter (1.5 min)
└─ TOTAL: 4.5 min instead of 9 min
```

### Strategy 3: Parallel Observation
While waiting for API response (2s):
```
WAIT TIME: API call in flight
├─ Scan UI for obvious issues (Layout, typos, missing icons)
├─ Check console for errors
├─ Note any loading/skeleton states
└─ Ready to proceed immediately when response arrives
```

### Strategy 4: Smart Data Reset
Instead of `Logout → Login` (30s) for each test:
```
SESSION STORAGE TRICK:
├─ Clear LocalStorage via DevTools (2s)
├─ Refresh page (1s)
├─ Reuse same session (no re-login)
└─ TOTAL: 3s instead of 30s per TC
```

### Strategy 5: Video Recording + Async Analysis
Instead of `Document everything during test` (50% overhead):
```
DURING TEST (4h session):
├─ Quick pass/fail, screenshot of failures only
└─ Total observation time: 30 min

AFTER SESSION (async):
├─ Review video at 1.5x speed (30 min)
├─ Shallow log issues (1 line each)
└─ Total: 1 hour async work
   = saves 2 hours in-session focus time
```

---

## 📋 WEEKLY SCHEDULE (SENIOR QA SOLO)

### Monday-Friday @ 4h/day Pattern

```
MON (4h)    TUE (4h)    WED (4h)    THU (4h)    FRI (4h + admin)
────────────────────────────────────────────────────────────────

WEEK 1:
TC_091-92   TC_093-96   TC_044-46   TC_061+P0   Weekly report
(Login)     (JWT/CSRF)  (Post)      (Fixes)     + Planning

WEEK 2:
TC_001-10   TC_011-20   TC_021-25   TC_026-30   Weekly report
(Header)    (Sidebar)   (Hall Feed) (Hall Feed) + Issue prioritization

WEEK 3:
TC_031-34   TC_035-39   TC_040-42   TC_001-10   Weekly report
(Reels p1)  (Reels p2)  (Reels p3)  (P1 fix)    + Sprint 2 summary

WEEK 4:
TC_034-36   TC_037-41   TC_042-45   TC_046-48   Weekly report
(Reactions) (Comments1) (Comments2) (Share/Edit)

WEEK 5:
TC_049-51   TC_052-54   TC_055-57   TC_058-62   Weekly report
(Follow)    (Search p1) (Search p2) (Notif/Draft)

WEEK 6:
TC_063-65   Performance TC_066-70   Final       Sign-off
(Edge cases) (FCP/LCP)   (Multi-user) Regression
            Concurrency
```

---

## 👤 SOLO SENIOR QA PROFILE REQUIREMENTS

### Must-Haves
✅ 8+ years QA experience  
✅ Playwright automation knowledge (test structure understanding)  
✅ Expert-level debugging (identify root cause in 2-5 min)  
✅ Parallel thinking (test multiple scenarios simultaneously in mind)  
✅ Self-documenting (log issues clearly without supervision)  
✅ Risk judgment (know when to stop testing an edge case)

### Nice-to-Haves
✅ Empire platform knowledge (can skip learning curve)  
✅ React/Frontend debugging (understand browser DevTools deeply)  
✅ Performance profiling (FCP/LCP analysis without tools)  
✅ Database knowledge (understand data consistency issues)  
✅ Leadership presence (can de-prioritize tasks independently)

### Anti-Patterns (Avoid)
❌ Perfectionist who tests every possible combination (will overrun)  
❌ Junior QA trying to "level up" with this (will get overwhelmed)  
❌ QA who relies on manual testing only (needs framework understanding)  
❌ QA without bug-filing discipline (dev team won't know what's broken)

---

## 📊 FINAL COMPARISON: 10 WEEKS vs 6 WEEKS

| Aspect | Part-Time 10W | Senior 6W | Winner |
|--------|--------------|----------|--------|
| **Total Time** | 200 hours | 120 hours | ✅ Senior -40% |
| **Calendar Days** | 70 days | 42 days | ✅ Senior -40% |
| **Risk** | Lower (dual team) | Medium (solo) | Team-dependent |
| **Communication** | Handoff overhead | Direct/clear | ✅ Senior +20% |
| **Cost** | £2000 (2 mid-level) | £1200 (1 senior) | ✅ Senior -40% |
| **Quality** | ~91% (current avg) | ~95% (expert eyes) | ✅ Senior +4% |
| **Parallel Execution** | Week 3+ possible | Week 1 only | Team-dependent |

---

## 🎯 RECOMMENDATION

### When to Use 6-Week Senior Model
✅ **Budget-conscious:** Save 40% on QA resource hours  
✅ **Time-critical:** Need results faster (6 weeks vs 10)  
✅ **Quality-focused:** Senior QA catches more issues early  
✅ **Solo availability:** One trusted expert available consistently  
✅ **Simpler communication:** Direct feedback, fewer handoffs

### When to Use 10-Week Part-Time Model
✅ **Risk-averse:** Want redundancy (2 sets of eyes)  
✅ **Knowledge transfer:** Training junior QA in parallel  
✅ **Flexibility:** Can pause/resume without losing momentum  
✅ **Resource constraints:** Can't commit 1 senior, easier to get 2x juniors  
✅ **Load distribution:** Avoid burnout risk to single tester

---

## 🚀 ACTION PLAN

**If you choose 6-week SENIOR MODEL:**

```
Week 0 (Before Start):
  □ Confirm 1 Senior QA available exclusively 4h/day
  □ Prepare test environment (all 6 accounts ready)
  □ Senior QA reviews Test Plan in 2h deep-dive
  □ Brief weekly sync (30 min) scheduled every Friday

Week 1:
  □ Execute Sessions 1-4 (10 CRITICAL TCs)
  □ Target: ≥95% pass
  □ Daily: 4h test execution + 30 min async logging
  □ Friday: Status report to dev team

Weeks 2-6:
  □ Follow sequential sprint structure
  □ Dev team fixes P0/P1 issues in parallel
  □ Weekly sync-ups (30 min Fridays)
  □ Senior QA maintains momentum

Week 6 EOW:
  □ Final sign-off document
  □ 96 TCs ✅ executed
  □ Performance targets ✅ met
  □ Ready for release decision
```

---

## ✨ BOTTOM LINE

| Question | Answer |
|----------|--------|
| **Can 1 senior reduce time?** | **YES - from 10 weeks to 6 weeks** |
| **% reduction?** | **40% faster (80 hours saved)** |
| **Quality impact?** | **Better - 95% vs 91% (expert eyes)** |
| **Cost impact?** | **Lower - 1 senior vs 2 juniors** |
| **Best for what?** | **Fast, high-quality, leader-led testing** |

✅ **Recommended:** Deploy 1 Senior QA → **6-week timeline, 120 hours, ≥95% quality**

