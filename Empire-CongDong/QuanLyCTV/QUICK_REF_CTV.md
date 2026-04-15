# QUICK REF: CTV Management — Empire Community

**Deadline:** 27/04/2026 | **Build:** 1 phase, tất cả feature | **Updated:** 14/04/2026

---

## WHO CAN DO WHAT

| | Admin | Giáo viên | CTV | Học viên |
|---|:---:|:---:|:---:|:---:|
| Đăng bài | ✗ | ✓ (cần duyệt) | ✗ | ✗ |
| Reply comment | ✗ | ✓ | ✓ max 2/bài | ✓ |
| Xóa reply | ✓ | — | ✗ | — |
| Duyệt bài | ✓ | ✗ | ✗ | ✗ |
| Tạo / Deactivate CTV | ✓ | ✗ | ✗ | ✗ |
| Xem Admin Dashboard | ✓ | ✗ | ✗ | ✗ |
| Xem CTV feed (bài cần reply) | ✗ | ✗ | ✓ | ✗ |

---

## CORE RULES (không đổi)

| # | Rule |
|---|------|
| 1 | Tối đa **2 CTV** reply trên 1 bài — hard limit |
| 2 | Bài phải qua **Admin duyệt** trước khi publish |
| 3 | Notification gửi **sau khi duyệt** — không phải khi submit |
| 4 | CTV **không thể xóa** reply của mình (First Build) |
| 5 | CTV bị deactivate: reply cũ giữ → badge "CTV (Inactive)" |
| 6 | 2 CTV reply cùng lúc: first-come-first-served, người sau nhận lỗi |
| 7 | CTV chỉ bị deactivate — không bao giờ hard delete |
| 8 | Admin không đăng bài |
| 9 | Học viên không đăng bài |

---

## WORKFLOW CHÍNH

```
[Giáo viên] Soạn bài → Submit (status: pending_review)
       ↓
[Admin] Duyệt → Approve (status: published)
       ↓
[System] Gửi notification → tất cả CTV active
       ↓
[CTV] Vào feed "Posts needing reply" → reply comment
       ↓ (khi đủ 2 CTV reply)
[System] Bài biến mất khỏi feed CTV
```

---

## ADMIN DASHBOARD — CHỨC NĂNG

| Feature | Mô tả |
|---------|-------|
| List CTV | Bảng: Name, Status, Joined, Replies, Last Activity |
| Search | Tìm theo tên — real-time (debounce 300ms) |
| Filter | Status / Activity range / Reply count |
| Sort | Last Activity (default), Name, Joined, Replies |
| Deactivate/Reactivate | Tắt/mở quyền CTV |
| View Detail | Xem full post + thread comment của CTV |

---

## OPEN QUESTIONS — CẦN CONFIRM

| # | Câu hỏi | Owner | Deadline |
|---|---------|-------|----------|
| 1 | Badge text: "CTV" / "Collaborator" / icon? | ___ | ___ |
| 2 | Giáo viên cũng là CTV → tính vào limit 2 không? | ___ | ___ |
| 3 | CTV có thể mute notification không? | ___ | ___ |
| 4 | Rate limit: CTV reply tối đa bao nhiêu lần/phút? | ___ | ___ |

---

## FILE LIÊN QUAN

| File | Nội dung |
|------|----------|
| `RUSH_SPEC_CTV.md` | Full spec: Overview + User Access + Core Function + Business Rule + Gherkin |
| `ctv_usecase_diagram.excalidraw` | Use Case Diagram (mở bằng excalidraw.com) |

---

*Quick Ref v1.0 — Empire CTV Management — 14/04/2026*
