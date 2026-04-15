# 📖 WORKFLOW: Làm Sao Để Lập Document Nghiệp Vụ (Business Document)

**Hướng dẫn cho BA** - Tổ chức tư duy & process step-by-step

---

## 🎯 PHẦN 1: HIỂU RÕ LOẠI DOCUMENT

Trước khi viết, phải chọn **loại document nào** phù hợp với mục đích:

### Các Loại Document Thường Gặp

| Loại | Độ Dài | Mục Đích | Audience | Công Việc BA |
|------|--------|---------|----------|------------|
| **Executive Summary** | 1-2 trang | Tóm tắt quick overview cho decision makers | C-level, PM | 🔹 Bạn đã làm xong (COMMUNITY_BRD_EXECUTIVE_SUMMARY.md) |
| **BRD (Business Requirements)** | 5-10 trang | Detailed business case + acceptance criteria | PO, PM, Dev Lead | 🔹 Tiếp theo |
| **FRD (Functional Requirements)** | 15-30 trang | Spec từng feature, user story, test case | Dev, QA | 🔹 Sau FRD |
| **Product Specification** | 30-50 trang | Design doc + wireframes + interaction spec | Dev, Designer, QA | 🔹 Most detailed |
| **Use Case Document** | 10-20 trang | Actor + precondition + main flow + alt flow | Dev, QA | 🔹 Alternative format |

### Chọn Loại Phù Hợp
**Bạn hiện tại:**
- ✅ Đã có Executive Summary (1️⃣)
- 🔜 Nên tiếp tục với **BRD chi tiết (2️⃣)** để dev team implementsau
- 🔜 Tiếp đó là **FRD (3️⃣)** với chi tiết từng feature

---

## 🏗️ PHẦN 2: STRUCTURE CỦA BUSINESS DOCUMENT

### Cấu Trúc Chuẩn (Áp Dụng Cho BRD/FRD)

```
1. EXECUTIVE SUMMARY (1 trang)
   - What, Why, Who, Expected Impact

2. BACKGROUND & CONTEXT (½ trang)
   - Problem statement, Market analysis, Competitive landscape
   
3. REQUIREMENTS OVERVIEW (1 trang)
   - Out of scope, Success criteria, Constraints

4. DETAILED REQUIREMENTS (5-10 trang) ⭐ TRỌNG TÂM
   - 4.1 Functional Requirements (Tính năng)
   - 4.2 User Stories & Use Cases
   - 4.3 Acceptance Criteria
   - 4.4 Data Requirements
   - 4.5 Non-Functional Requirements (Performance, Security, etc.)

5. DESIGN & WORKFLOW (2-3 trang)
   - User flows / Journey maps
   - Wireframes / Mock-ups
   - Data model / API spec

6. DEPENDENCIES & ASSUMPTIONS (½ trang)
   - Internal dependencies (other modules)
   - External dependencies (third-party APIs)
   - Assumptions

7. RISKS & MITIGATIONS (½ trang)
   - Technical risks
   - Business risks
   - Timeline risks

8. TESTING STRATEGY (1 trang)
   - Test approach
   - Test cases summary
   - Acceptance test plan

9. TIMELINE & EFFORT (½ trang)
   - Sprint breakdown
   - T-shirt estimate (S, M, L, XL)
   - Critical path

10. SIGN-OFF & APPROVALS (After print)
    - Stakeholder sign-off section
    - Version history
```

---

## 📝 PHẦN 3: STEP-BY-STEP PROCESS

### Step 1️⃣: Gather Input Documents
**Collect từ team:**
- ✅ Project roadmap (Đã có - Hình 1)
- ✅ Module architecture (Đã có - Hình 2)
- ✅ User journeys (Đã có - Hình 3)
- ✅ Test cases (Đã có - Hình 5)
- ✅ Screen inventory (Đã có - Hình 6)
- ⏭️ Design mockups (Wireframes)
- ⏭️ API specification
- ⏭️ Database schema

**Tool:** Excel, Google Sheets, Confluence → Lập inventory tất cả input

---

### Step 2️⃣: Define Scope Rõ Ràng
**Phải trả lời:**
- ❓ **Scope IN:** Features gì được include?
  - Example: Feed, Post creation, Reactions, Groups
- ❓ **Scope OUT:** Features gì NOT included (Phase 2)?
  - Example: Search, Analytics, Moderation, Reel streaming
- ❓ **MVP vs Full idea:** Version nào để launch đầu tiên?
  - MVP: Feed, Post text, Reactions
  - Full: + Video, Groups, Reel, Search

**Tool:** JIRA / Feature list → Mark priority + phase

---

### Step 3️⃣: Map User Journeys → Features
**Workflow:**
```
User Journey (F1-F20)
    ↓
Per journey, list features needed
    ↓
Consolidate into feature list
    ↓
Group by module/area
```

**Example cho Community:**
```
F1: Onboarding
  → Features: Login, Register, Profile setup

F2: Feed consumption
  → Features: Feed display, pagination, sorting, filtering

F3: Content creation
  → Features: Modal, text input, media upload, draft save

F4: Social interaction
  → Features: Like button, comment system, share option

F5: Groups
  → Features: Group list, join/leave, group feed, moderation
```

**Output:** Feature list với mapping to user journeys

---

### Step 4️⃣: Write User Stories (Format: As a... I want... So that...)
**Template:**
```
User Story #[ID]: [Title]
As a [User type],
I want to [Action],
So that [Benefit/Value]

Acceptance Criteria:
  AC1. [Given] [When] [Then]
  AC2. [Given] [When] [Then]
  ...

Priority: [CRITICAL/HIGH/MEDIUM/LOW]
Effort: [XS/S/M/L/XL]
```

**Example:**
```
US001: User creates text post
As a Learner,
I want to create a post with text content up to 5000 characters,
So that I can share my thoughts with the community.

Acceptance Criteria:
  AC1. Given I'm on Main Hall, When I click "Create post" button, Then modal opens with text input
  AC2. Given I've typed 4999 characters, When I click "Post", Then post is created successfully
  AC3. Given I've typed 5001 characters, When I try to type more, Then character is rejected with message "Max 5000 chars"
  AC4. Given I've left text empty, When I click "Post", Then button is disabled with message "Content required"

Priority: CRITICAL
Effort: M (Medium)
```

**Tool:** JIRA, Notion, Google Docs → Create story bank

---

### Step 5️⃣: Define Acceptance Criteria Rõ Ràng
**Phát triển từ test cases bạn đã có:**

```
From Test Case EMPIRE_TC_044: User successfully creates text post
→ AC1. Post created successfully within 2 seconds
→ AC2. Post appears at top of feed (newest first)
→ AC3. Post shows correct user avatar, name, timestamp
→ AC4. Post content matches what user typed (no truncation)

From Test Case EMPIRE_TC_049: Text limit 5000 characters
→ AC5. Text up to 5000 chars accepted
→ AC6. Text 5001+ chars rejected or truncated
```

**Tool:** Spreadsheet → Map test cases → Acceptance Criteria

---

### Step 6️⃣: Define Non-Functional Requirements (NFR)
**Categories:**

| NFR Type | Example | Criteria |
|----------|---------|----------|
| **Performance** | Feed load time | <2 seconds for 20 posts |
| **Scalability** | Concurrent users | Support 1000 concurrent users |
| **Availability** | Uptime | 99.9% availability |
| **Security** | Authentication | JWT token with 24h expiry |
| **Compatibility** | Browser support | Chrome, Firefox, Safari latest 2 versions |
| **Accessibility** | WCAG | Level AA compliance |
| **Reliability** | Error handling | Graceful degradation on API failure |

**Tool:** NFR checklist template

---

### Step 7️⃣: Create Traceability Matrix
**Map requirement → Test case → Feature:**

| Req ID | Requirement | Feature | Test Case | Priority |
|--------|-------------|---------|-----------|----------|
| REQ-001 | User can create text post | Post Creation | TC_044 | CRITICAL |
| REQ-002 | Text limit 5000 chars | Post Creation | TC_049 | HIGH |
| REQ-003 | Like button updates counter | Reactions | TC_058 | CRITICAL |
| REQ-004 | Real-time like sync (concurrent) | Reactions | TC_059 | MEDIUM |

**Tool:** Excel → Lookup & match

---

### Step 8️⃣: Add Visual Elements
**Enhance document với:**
- 📊 **Flow diagrams:** User journey, data flow
- 📐 **Wireframes/Mock-ups:** UI layout
- 📈 **Data model:** ER diagram
- 🎨 **Prototypes:** Interactive clickable mockups

**Tool:** Excalidraw, Figma, Miro → Insert images into doc

---

### Step 9️⃣: Write Risk & Mitigation
**For each risk:**
```
Risk: [Problem]
Probability: [High/Medium/Low]
Impact: [High/Medium/Low]
Mitigation: [Action to prevent/reduce]
Contingency: [Plan B if risk happens]

Example:
Risk: Real-time like counter race condition (2 users like same post simultaneously)
Probability: Medium (happens in high-traffic scenarios)
Impact: High (users see inconsistent counts)
Mitigation: Use transactional database + Redis cache, test with concurrent users
Contingency: Implement eventual consistency + reconciliation job
```

---

### 🔟 Step 10: Get Sign-Off & Publish
**Before publishing:**
- [ ] Review with dev team (feasibility check)
- [ ] Review with QA team (testability check)
- [ ] Review with product manager (alignment check)
- [ ] Review with stakeholders (scope/timeline agreement)

**Sign-off format:**
```
Name | Title | Date | Signature | Comments
-----|-------|------|-----------|----------
[PM] | Product Manager | Apr 10 | ✅ | Approved
[Lead Dev] | Tech Lead | Apr 10 | ✅ | Feasible in 10 weeks
[QA Lead] | QA Manager | Apr 10 | ✅ | 96 TCs adequate
```

**Publish:**
- 📌 Confluence / Wiki (for team)
- 📧 Email to stakeholders (notification)
- 📊 Store in version control (Git)

---

## 🛠️ PHẦN 4: TOOLS & TEMPLATES

### Tools Recommendations
| Purpose | Tool | Why |
|---------|------|-----|
| **Write** | Google Docs / Notion | Collaboration, easy sharing |
| **Diagram** | Excalidraw / Miro / Figma | Visual flowcharts, wireframes |
| **Mock-up** | Figma / Adobe XD | Interactive prototypes |
| **Track** | JIRA / Azure DevOps | Sprint planning, backlog |
| **Version** | Git / GitHub | Version control of docs |
| **Publish** | Confluence / Gitbook | Wiki for team access |

### Template Files to Use
- ✅ **BRD Template** → Already created (use as reference)
- ✅ **User Story Template** → Copy-paste the format
- ✅ **Acceptance Criteria Template** → Map from test cases
- ✅ **Traceability Matrix** → Spreadsheet format
- ⏭️ **FRD Template** → Next level detail (per feature)

---

## 📋 PHẦN 5: CHECKLIST SEBELUM PUBLISH

Document khong phải publish khi:

- [ ] **Scope jelas:** IN / OUT / MVP định rõ
- [ ] **Requirements complete:** Semua feature có user story
- [ ] **Acceptance criteria testable:** Dapat viết test case từ AC
- [ ] **Non-functional defined:** Performance, security, scaling
- [ ] **Risks identified:** Minimal 3 major risks + mitigations
- [ ] **Timeline realistic:** Reviewed by dev team (feasible?)
- [ ] **Visual aids included:** Flowcharts, wireframes (if applicable)
- [ ] **Traceability mapped:** Req ↔ Feature ↔ TC
- [ ] **Approved by team:** Dev, QA, PM sign-off
- [ ] **Version & date:** Document version number, last updated date

---

## 🚀 PHẦN 6: QUICK START PLAN (Cho Bạn)

### Week 1 Plan (Lập document toàn bộ)
```
Day 1-2: Gather input + Define scope
  Output: Scope document (IN/OUT/MVP)

Day 2-3: Map features + Write user stories
  Output: User story list (20-30 stories for Community)

Day 3-4: Define acceptance criteria + NFRs
  Output: Requirements specification (50+ requirements)

Day 4-5: Create traceability matrix + Risk mitigation
  Output: Traceability + Risk register

Day 5: Add visuals + Get sign-off
  Output: Final BRD document ready to share
```

### Effort Estimate
- **Executive Summary:** 4 hours ✅ (Done)
- **Detailed BRD:** 16 hours (this week)
- **FRD (if needed):** 32 hours (next week)
- **Total BA effort:** ~50 hours for full specification

---

## 📌 NEXT ACTION FOR YOU

1. ✅ **Done:** Executive Summary (COMMUNITY_BRD_EXECUTIVE_SUMMARY.md created)
2. 🔜 **Next:** Create detailed **BRD** (expand sections 4-9 of executive summary)
   - Break down each feature section
   - Add wireframes / mockups
   - Define acceptance criteria in detail
   - Add API specification
3. 🔜 **Then:** Create **FRD** (per feature: Post Creation, Feed, Reactions, etc.)
4. 🔜 **Finally:** Prepare for **dev handoff** (JIRA stories + task breakdown)

---

**Document Prepared By:** Senior BA  
**Date:** April 10, 2026  
**Version:** 1.0 - Workflow & Process Guide
