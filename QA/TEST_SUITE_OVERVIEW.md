# TEST SUITE OVERVIEW — Empire
**Maintained by:** QA/BA  
**Last updated:** 14/04/2026  
**Status:** Active

---

## 1. Phạm vi hiện tại

Empire có nhiều module, nhưng QA hiện chỉ cover:

| Module | Trạng thái | Ghi chú |
|--------|-----------|---------|
| CTV Management | Active — đang test | Deadline 27/04/2026 |
| Cộng Đồng | In review — chưa có TC | Review code, sẽ viết TC sau |
| Các module khác | Out of scope | Chưa nhận task |

---

## 2. Cấu trúc thực tế

### 2.1 Google Drive (source of truth khi execute)

```
Google Drive — Empire/
├── testcase-detail/
│   ├── [GSheet] test_case_CTV-Management    ← 1 file, toàn bộ 58 TCs, merge từ .xlsx
│   └── [GSheet] test_case_CongDong          ← (chưa có)
│
└── sprints/
    └── sprint-01_CTV_2026-04-14/
        ├── [GSheet] Sprint01_Exec            ← copy từ test_case + cột Status/Bug/Note
        └── [GSheet] Baseline_Client          ← filtered từ Sprint01_Exec, giao client
```

### 2.2 Local (nháp markdown — dùng để viết, không phải source of truth)

```
Empire/
├── TEST_SUITE_OVERVIEW.md              ← file này
│
├── testcase-detail/
│   ├── CTV-Management/
│   │   ├── TEST_CASES_PART1~4.md       ← nháp markdown theo module
│   │   └── TEST_CASES_CTV.xlsx         ← merge tất cả parts → upload lên GSheet
│   └── CongDong/                       ← (chưa có)
│
└── sprints/
    └── sprint-01_CTV_2026-04-14/
        └── TEST_PLAN.md                ← Scope, timeline, entry/exit criteria
```

> **Lưu ý:** File `.md` local chỉ là bản nháp để viết — không execute ở đây.  
> Bug & story → ClickUp. Execution status → GSheet. Bản giao client → export GSheet `Baseline_Client`.

---

## 3. Quy tắc cốt lõi

| Quy tắc | Lý do |
|---------|-------|
| `testcase-detail/` là read-only trong quá trình test | Tránh TC bị sửa khi đang execute, giữ clean master |
| Không copy nội dung TC vào sprint — chỉ reference TC ID | DRY — khi TC update chỉ sửa 1 chỗ |
| `BASELINE_CLIENT.md` = copy ra từ sprint khi cần giao | Client nhận snapshot tại thời điểm, không link vào master |
| Mỗi sprint có đủ 3 file: Plan + Baseline + Log | Dễ audit lại sau này |

---

## 4. Workflow thực tế (solo QA/BA)

```
[Chuẩn bị TC]
    │
    ├─ 1. Viết TC dưới dạng .md local (testcase-detail/)
    │
    ├─ 2. Convert .md → .xlsx (dùng tool hoặc copy thủ công)
    │
    └─ 3. Upload .xlsx lên GSheet → tab "Master_[Module]"
           Đây là source of truth. Không sửa trực tiếp trên GSheet nếu
           chưa update .md local trước.

[Bắt đầu Sprint]
    │
    ├─ 4. Tạo sprint folder local: sprints/sprint-XX_ModuleName_YYYY-MM-DD/
    │      └─ Copy TEST_PLAN vào đây
    │
    ├─ 5. Trong GSheet: tạo tab "Sprint[N]_Exec"
    │      copy toàn bộ từ Master + thêm cột: Status | Bug_ID | Note | Tested_Date
    │
    └─ 6. Tạo task/bug trên ClickUp nếu cần track story

[Trong Sprint — daily]
    │
    ├─ 7. Execute TC → fill Status trực tiếp vào GSheet tab Sprint[N]_Exec
    │
    └─ 8. Nếu có bug → tạo bug trên ClickUp → copy ClickUp ID vào cột Bug_ID trên GSheet

[Cuối Sprint — giao client]
    │
    ├─ 9. Trong GSheet: tạo tab "Baseline_Client"
    │      filter từ Sprint[N]_Exec, chỉ giữ:
    │      TC_ID | Module | Title | Priority | Status | Bug_ID | Note
    │
    ├─ 10. Share GSheet tab Baseline_Client với client (view only)
    │       hoặc export ra .xlsx / PDF nếu cần
    │
    └─ 11. Tick sign-off checklist trong TEST_PLAN.md
```

---

## 5. Google Sheet structure

| Tab | Mục đích | Nguồn | Ai sửa |
|-----|---------|-------|--------|
| `Master_[Module]` | TC gốc — không có cột Status | Upload từ .xlsx local | QA khi có TC mới/update |
| `Sprint[N]_Exec` | Bản chạy — copy Master + cột execute | Copy từ Master tab | QA khi execute |
| `Baseline_Client` | Snapshot giao client | Filter từ Sprint tab | QA trước deliver |

**Cột trong `test_case_[feature]` tab (master — không có Status):**
```
TC_ID | Module | Title | Priority | Precondition | Steps | Expected Result
```

**Cột trong `Sprint[N]_Exec` tab (copy từ master + thêm):**
```
TC_ID | Module | Title | Priority | Precondition | Steps | Expected | Status | Bug_ID | Note | Tested_Date
```

**Cột trong `Baseline_Client` tab (giao client — bỏ steps nội bộ):**
```
TC_ID | Module | Title | Priority | Status | Bug_ID | Note
```

---

## 6. Status definitions

| Status | Nghĩa |
|--------|-------|
| `Pass` | TC chạy đúng expected |
| `Fail` | TC fail — có bug đính kèm |
| `Blocked` | Không chạy được do dependency chưa sẵn sàng |
| `Skip` | Quyết định bỏ qua trong sprint này — ghi lý do |
| `N/T` | Not Tested yet |

---

## 7. Bug ID convention

```
Bug & story quản lý trên ClickUp.
Khi log vào GSheet, dùng ClickUp task ID làm Bug_ID.

Ví dụ: CU-abc123, CU-def456
```

---

## 8. Sprint index

| Sprint | Module | Thời gian | Status | Folder |
|--------|--------|-----------|--------|--------|
| Sprint 01 | CTV Management | 14/04 – 27/04/2026 | Active | [sprints/sprint-01_CTV_2026-04-14](sprints/sprint-01_CTV_2026-04-14/) |

---

## 9. Khi thêm module mới (checklist)

```
[ ] Tạo folder: testcase-detail/[ModuleName]/
[ ] Viết TC theo template chuẩn (TC_ID format: EMP_[MOD]_XXX_TC_NNN)
[ ] Thêm tab Master_[Module] vào Google Sheet
[ ] Update bảng "Phạm vi hiện tại" ở mục 1 file này
[ ] Tạo sprint folder mới nếu module nằm trong sprint mới
```

---

*TEST_SUITE_OVERVIEW.md — Empire QA/BA — 14/04/2026*
