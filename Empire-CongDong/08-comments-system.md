# Hệ thống bình luận

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| 1.0 | 2026-04-10 | Tạo tài liệu ban đầu |

## Tổng quan
Tính năng này cung cấp hệ thống bình luận theo luồng (threaded) cho bài viết và reels trên toàn nền tảng. Người dùng có thể thêm bình luận văn bản, trả lời bình luận hiện có (luồng lồng nhau), tương tác với bình luận và xóa bình luận của chính mình. Hệ thống bình luận xuất hiện dạng inline bên dưới bài viết trong bảng tin và dạng bottom sheet phủ lên trên reels, đóng vai trò là phương tiện thảo luận và tương tác chính trên nền tảng.

## Quyền truy cập

**Vai trò & Mapping Hệ Thống (PERMISSIONS_GUIDE v1.0):**

| Tiếng Việt | System Role | Comment | Reply | Edit (1h) | Delete | CTV Assign |
|----------|------------|---------|-------|-----------|--------|-----------|
| Học sinh | NonPaid User | ✅ YES | ✅ YES (2 levels) | ✅ Own | ✅ Own | ❌ NO |
| Học sinh | Paid User | ✅ YES | ✅ YES (2 levels) | ✅ Own | ✅ Own | ❌ NO |
| Giáo viên | Mentor | ✅ YES | ✅ YES (2 levels) | ✅ Own | ✅ Own | ✅ Can assign |
| Collaborator | ⭐ ACTIVE | ✅ LIMITED | ✅ MAX 2/post | ✅ Own | ✅ Own | N/A |
| Quản trị viên | Admin | ✅ YES | ✅ YES | ✅ Any | ✅ Any | ✅ YES | 

**Điều kiện truy cập:**
- ✅ NonPaid/Paid User: Comment normally (unlimited for author/assigned users)
- ✅ **Collaborator ⭐**: Reply ONLY IF ASSIGNED (max 2 CTV per post) - **CD06 CHECK**
- ✅ Mentor: Create + Reply + Assign CTVs (in own groups)
- ✅ Admin: Full management

**Điểm truy cập:**
- Nút "Bình luận" trên mỗi PostCard
- Biểu tượng bình luận trên Reels (bottom sheet)

## Chức năng chính

### Hiển thị bình luận
1. **Bố cục phần bình luận (Bài viết)**
    *   Phần bình luận xuất hiện bên dưới thanh tương tác PostCard
    *   Mặc định: hiển thị 3 bình luận đầu tiên
    *   Nếu có nhiều hơn 3 bình luận: liên kết "Xem tất cả [N] bình luận" để mở rộng
    *   Nhấn "Xem tất cả" sẽ tải và hiển thị danh sách bình luận đầy đủ với cuộn vô hạn

2. **Bố cục phần bình luận (Reels)**
    *   Bình luận hiển thị dạng bottom sheet trượt lên từ cuối màn hình
    *   Bottom sheet chiếm 60% chiều cao màn hình
    *   Tiêu đề: "Bình luận ([N])" ở đầu bảng
    *   Danh sách bình luận cuộn vô hạn trong bảng
    *   Ô nhập bình luận cố định ở cuối bảng

3. **Cấu trúc mục bình luận**
    *   Mỗi bình luận hiển thị: ảnh đại diện người bình luận (hình tròn, 32x32px), tên hiển thị (chữ đậm), dấu thời gian tương đối ("2 giờ trước", "3 ngày trước"), nội dung bình luận (văn bản), nút "Thích" với số đếm, nút "Trả lời", và menu ba chấm (cho bình luận của chính mình)

### Tạo bình luận
1. **Ô nhập bình luận**
    *   Ô nhập văn bản cố định ở cuối phần bình luận (bài viết) hoặc cuối bottom sheet (reels)
    *   Dòng gợi ý: "Viết bình luận..."
    *   Ảnh đại diện người dùng hiện tại hiển thị bên trái ô nhập
    *   Nút gửi (biểu tượng mũi tên) ở bên phải — bị vô hiệu hóa khi ô nhập trống

2. **Gửi bình luận**
    *   Người dùng nhập văn bản và nhấn nút gửi hoặc phím Enter
    *   Bình luận mới xuất hiện ngay lập tức ở đầu danh sách (giao diện lạc quan)
    *   Số đếm bình luận trên PostCard/Reel tăng lên
    *   Ô nhập được xóa và sẵn sàng cho bình luận tiếp theo

### Trả lời bình luận (Luồng lồng nhau)
1. **Kích hoạt trả lời**
    *   Nhấn "Trả lời" trên bình luận sẽ focus ô nhập với thẻ ngữ cảnh "Đang trả lời [tên người dùng]"
    *   Thẻ ngữ cảnh có nút "x" để hủy chế độ trả lời
    *   Tên người dùng được tag (@mention) tự động được thêm vào đầu nội dung bình luận

2. **Hiển thị luồng lồng nhau**
    *   Bình luận trả lời hiển thị dạng thụt lề bên dưới bình luận cha
    *   Mức lồng tối đa: 2 cấp (bình luận cha → trả lời → trả lời trả lời)
    *   Trả lời vượt quá mức lồng tối đa sẽ hiển thị ở cấp 2 với tag @mention
    *   Nếu bình luận cha có nhiều hơn 3 trả lời: hiển thị "Xem thêm [N] trả lời" để mở rộng

### Tương tác bình luận
1. **Thích bình luận**
    *   Nút "Thích" nhỏ trên mỗi bình luận
    *   Nhấn để bật/tắt thích — biểu tượng chuyển xanh khi đã thích
    *   Số đếm lượt thích hiển thị bên cạnh nút
    *   Xử lý giao diện lạc quan (tương tự tương tác bài viết)

2. **Menu hành động bình luận**
    *   Menu ba chấm "..." trên mỗi bình luận
    *   **Bình luận của mình**: hiển thị "Xóa bình luận"
    *   **Bình luận của người khác**: hiển thị "Báo cáo bình luận"

### Xóa bình luận
1. **Luồng xóa**
    *   Nhấn "Xóa bình luận" từ menu ba chấm
    *   Hệ thống hiển thị hộp thoại xác nhận: "Bạn có chắc muốn xóa bình luận này?"
    *   Hai nút: "Hủy" và "Xóa"
    *   Khi xác nhận xóa: bình luận và tất cả trả lời lồng nhau bị xóa
    *   Số đếm bình luận trên PostCard/Reel giảm tương ứng

## Quy tắc nghiệp vụ

### Kiểm soát Quyền Hạn Theo Vai Trò (Role-Based Access Control)

**Rule 1: Comment Access (Base Level)**

| Vai Trò | Comment Level | Nesting | Edit Grace | Delete Own |
|--------|---------------|---------|-----------|-----------|
| **NonPaid User** | Unlimited | 2 levels | 1h window | ✅ YES |
| **Paid User** | Unlimited | 2 levels | 1h window | ✅ YES |
| **Mentor** | Unlimited | 2 levels | 1h window | ✅ YES + group |
| **Member** ⭐ | Unlimited (in group) | 2 levels | 1h window | ✅ YES |
| **Admin** | Unlimited | 2 levels | Unlimited | ✅ YES |

**Rule 2: COLLABORATOR REPLY LIMIT (CRITICAL - CD06)**

```
COLLABORATOR MAX 2 PER POST RULE:

1. ASSIGNMENT:
   - Mentor/Group Admin assigns Collaborators per post (explicit)
   - Each post can have max 2 CTV assigned
   - CTV assignment is per-post basis (not user-wide)

2. REPLY FLOW:
   Post A: Mentor assigns CTV1, CTV2 (now at LIMIT 2)
     ✅ CTV1 replies → Recorded in reply_collaborators
     ✅ CTV2 replies → Recorded in reply_collaborators (NOW FULL: 2/2)
     ❌ CTV3 tries reply → BLOCKED: "Post already has 2 CTV replies"
     ✅ IF Mentor removes CTV1 → CTV3 can now reply

3. SYSTEM ENFORCEMENT (CD06 Check):
   Before processing CTV reply:
     Query: COUNT(collaborators_reply) WHERE post_id = X
     If COUNT >= 2 AND user.role = Collaborator → BLOCK
     Display: "Post已达到最大CTV回复数(2/2)"

4. EXCEPTIONS (Always Can Reply):
   - Post Author (no CTV limit)
   - Mentor/Admin (system-wide access)
   - Group Admin (in group context)

5. AUDIT:
   - Log all CTV assignments/removals
   - Track reply attempts (including blocks)
   - Admin can view CTV assignment history per post
```

**Rule 3: Edit & Delete Comments**

| Action | NonPaid | Paid | Mentor | Member | Admin |
|--------|---------|------|--------|--------|-------|
| **Edit Own (1h)** | ✅ YES | ✅ YES | ✅ YES | ✅ YES | ✅ YES |
| **Delete Own** | ✅ YES | ✅ YES | ✅ YES | ✅ YES | ✅ YES |
| **Delete Others (group)** | ❌ NO | ❌ NO | ✅ In group | ❌ NO | ✅ YES |
| **Delete Others (system)** | ❌ NO | ❌ NO | ❌ NO | ❌ NO | ✅ YES |

### Quy tắc bình luận
1. **Độ dài bình luận**
    *   Độ dài tối thiểu: 1 ký tự
    *   Độ dài tối đa: 2000 ký tự
    *   Hệ thống hiển thị bộ đếm ký tự khi bình luận vượt quá 1800 ký tự
    *   Nút gửi bị vô hiệu hóa khi vượt quá giới hạn tối đa

2. **Bình luận trống**
    *   Hệ thống ngăn gửi bình luận trống hoặc chỉ có khoảng trắng
    *   Nút gửi bị vô hiệu hóa khi ô nhập trống hoặc chỉ chứa khoảng trắng

3. **Tần suất bình luận**
    *   Cơ chế giới hạn tốc độ: tối đa 10 bình luận mỗi phút trên mỗi người dùng
    *   Nếu vượt quá giới hạn: hiển thị thông báo "Bạn đang bình luận quá nhanh. Vui lòng thử lại sau."

### Quy tắc xóa
1. **Quyền xóa**
    *   Người dùng chỉ có thể xóa bình luận của chính mình
    *   Quản trị viên có thể xóa bất kỳ bình luận nào (kiểm duyệt)
    *   Tác giả bài viết có thể xóa bất kỳ bình luận nào trên bài viết của mình

2. **Xóa lan truyền**
    *   Xóa bình luận cha sẽ xóa tất cả trả lời lồng nhau
    *   Số đếm bình luận giảm bằng tổng số bình luận bị xóa (cha + tất cả trả lời)

### Thông báo
1. **Thông báo bình luận mới**
    *   Hệ thống tạo thông báo cho tác giả bài viết khi nhận bình luận mới
    *   Thông báo không được tạo khi người dùng tự bình luận bài viết của mình
    *   Nội dung: "[Tên] đã bình luận bài viết của bạn: '[xem trước bình luận]'"

2. **Thông báo trả lời**
    *   Hệ thống tạo thông báo cho tác giả bình luận cha khi có trả lời mới
    *   Nội dung: "[Tên] đã trả lời bình luận của bạn: '[xem trước]'"

3. **Thông báo tag (@mention)**
    *   Khi người dùng được tag trong bình luận, hệ thống tạo thông báo
    *   Nội dung: "[Tên] đã nhắc đến bạn trong một bình luận"

## Luồng xử lý

### Luồng thêm bình luận
```
Người dùng nhấn "Bình luận" trên PostCard
    → Phần bình luận mở rộng/hiển thị
    → Ô nhập bình luận được focus
    → Người dùng nhập nội dung bình luận
    → Người dùng nhấn nút gửi
    → Bình luận xuất hiện ngay lập tức ở đầu danh sách
    → Số đếm bình luận trên PostCard tăng
    → Tác giả bài viết nhận thông báo
```

### Luồng trả lời bình luận
```
Người dùng nhấn "Trả lời" trên bình luận hiện có
    → Ô nhập được focus với thẻ ngữ cảnh "Đang trả lời [tên người dùng]"
    → Người dùng nhập nội dung trả lời
    → Người dùng nhấn nút gửi
    → Trả lời xuất hiện dạng lồng bên dưới bình luận cha
    → Số đếm trả lời của bình luận cha tăng
```

### Luồng xóa bình luận
```
Người dùng nhấn "..." trên bình luận của chính mình
    → Dropdown hiển thị "Xóa bình luận"
    → Người dùng nhấn "Xóa bình luận"
    → Hộp thoại xác nhận: "Bạn có chắc muốn xóa bình luận này?"
    → Người dùng nhấn "Xóa"
    → Bình luận và tất cả trả lời lồng nhau bị xóa
    → Số đếm bình luận giảm
```

Link thiết kế:
