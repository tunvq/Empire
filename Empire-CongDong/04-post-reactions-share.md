# Tương tác & Chia sẻ bài viết

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| 1.0 | 2026-04-10 | Tạo tài liệu ban đầu |

## Tổng quan
Tính năng này cho phép người dùng tương tác với bài viết (thích/bỏ thích) và chia sẻ bài viết đến các nhóm khác hoặc nền tảng bên ngoài. Tương tác cung cấp phản hồi nhanh cho tác giả nội dung, trong khi chia sẻ giúp phân phối nội dung khắp nền tảng và ra bên ngoài. Cả hai tương tác đều cập nhật bộ đếm theo thời gian thực và có thể truy cập từ thanh tương tác PostCard.

## Quyền truy cập

**Vai trò & Mapping Hệ Thống (PERMISSIONS_GUIDE v1.0):**

| Tiếng Việt | System Role | Like Posts | Share Posts | Reply (Collaborator) | Notes |
|----------|------------|-----------|------------|----------------------|-------|
| Học sinh | NonPaid User | ✅ YES | ✅ YES | ❌ NO | Only as author |
| Học sinh | Paid User | ✅ YES | ✅ YES | ❌ NO | |  
| Giáo viên | Mentor | ✅ YES | ✅ YES | ✅ CAN ASSIGN | Assign max 2 CTV |
| Quản trị viên | Admin | ✅ YES | ✅ YES | ✅ SYSTEM-WIDE | Audit all |

**Điều kiện truy cập:**
- ✅ Tất cả người dùng đã xác thực: Có thể like/share public posts
- ✅ **Collaborator ⭐**: Chỉ reply nếu được assign (max 2 per post)
- ✅ Mentor/Admin: Có thể assign Collaborators
- ❌ Guest: Không có quyền

**Điểm truy cập:**
- Nút hành động "Thích" trên mọi PostCard
- Nút hành động "Chia sẻ" trên posts công khai
- Nút "Reply" chỉ xuất hiện nếu user là Collaborator được assign

## Chức năng chính

### Hệ thống tương tác
1. **Bật/tắt Thích**
    *   Người dùng nhấn nút "Thích" trên PostCard để bật/tắt lượt tương tác
    *   Nhấn lần đầu: thêm lượt "thích" của người dùng vào bài viết
    *   Nhấn lần hai: xóa lượt "thích" của người dùng khỏi bài viết
    *   Biểu tượng và văn bản cập nhật ngay lập tức (giao diện lạc quan — phản hồi trước khi phản hồi server)

2. **Trạng thái hiển thị nút Thích**
    *   **Chưa thích**: biểu tượng viền, văn bản "Thích" màu xám
    *   **Đã thích**: biểu tượng đặc, văn bản "Thích" màu xanh dương (#1877F2)
    *   Chuyển đổi giữa hai trạng thái kèm hiệu ứng chuyển tiếp nhẹ

3. **Hiển thị số lượt tương tác**
    *   Tổng số lượt tương tác hiển thị trong thanh tương tác dạng "[N] lượt thích"
    *   Số đếm cập nhật ngay lập tức khi người dùng bật/tắt (tăng/giảm 1)
    *   Nhấn vào số lượt tương tác sẽ mở hộp thoại liệt kê người dùng đã tương tác (ảnh đại diện + tên)
    *   Hộp thoại danh sách hỗ trợ cuộn vô hạn nếu số lượt tương tác lớn

### Chức năng chia sẻ
1. **Hộp thoại chia sẻ**
    *   Nhấn nút "Chia sẻ" trên PostCard sẽ mở hộp thoại modal chia sẻ
    *   Hộp thoại hiển thị: xem trước bài viết gốc (ảnh thu nhỏ + tiêu đề), dropdown chọn nhóm đích, ô nhập lời nhắn kèm theo (tùy chọn), và nút "Chia sẻ ngay"

2. **Chia sẻ vào nhóm**
    *   Dropdown nhóm đích liệt kê tất cả nhóm mà người dùng là thành viên
    *   Mỗi tùy chọn nhóm hiển thị: ảnh đại diện nhóm và tên nhóm
    *   Người dùng chọn nhóm đích, tùy chọn thêm lời nhắn, và nhấn "Chia sẻ ngay"
    *   Hệ thống tạo bài viết chia sẻ trong nhóm đích chứa nội dung nhúng bài viết gốc
    *   Khi thành công: hộp thoại đóng, hiển thị thông báo toast "Chia sẻ thành công"

3. **Sao chép liên kết**
    *   Nút "Sao chép liên kết" trong hộp thoại chia sẻ cho phép sao chép URL bài viết vào clipboard
    *   Khi nhấn: liên kết được sao chép, hiển thị thông báo toast "Đã sao chép liên kết"
    *   URL theo định dạng: `https://[domain]/posts/[post-id]`

## Quy tắc nghiệp vụ

### Kiểm soát Quyền Hạn Theo Vai Trò (Role-Based Access Control)

**Rule 1: Like/React Permission**

| Vai Trò | Like Own | Like Others | Like Public | Like Private | Like Group |
|--------|----------|-------------|-------------|--------------|------------|
| **NonPaid User** | ✅ YES | ✅ YES | ✅ YES | ❌ NO | ✅ YES (if member) |
| **Paid User** | ✅ YES | ✅ YES | ✅ YES | ✅ YES | ✅ YES (if member) |
| **Mentor** | ✅ YES | ✅ YES | ✅ YES | ✅ YES | ✅ YES (all) |
| **Member** ⭐ | ✅ YES | ✅ YES | N/A | N/A | ✅ YES (scope) |
| **Collaborator** ⭐ | ✅ YES | ✅ YES | ✅ YES | ❌ NO | ✅ YES (scope) |
| **Admin** | ✅ YES | ✅ YES | ✅ YES | ✅ YES | ✅ YES (all) |

**Rule 2: Share Permission**

| Vai Trò | Share Public | Share Private | Share Group | Notes |
|--------|-------------|---------------|-------------|-------|
| **NonPaid User** | ✅ YES | ❌ NO | ✅ YES (if member) | |
| **Paid User** | ✅ YES | ❌ NO | ✅ YES (if member) | |
| **Mentor** | ✅ YES | ✅ YES | ✅ YES (all) | Mentor posts marked |
| **Admin** | ✅ YES | ✅ YES | ✅ YES (all) | System-wide |
| **Collaborator** ⭐ | ❌ NO | ❌ NO | ❌ NO | Reply only, no share |

**Rule 3: Collaborator Reply Limit (CRITICAL - CD06)**

- **2-CTV MAX per post** (strict limit)
- Mentor/Group Admin assigns CTVs to specific posts
- When CTV replies → counted in reply_collaborators
- Once 2 CTV reply → other CTVs get BLOCKED (can't reply)
- Mentor can remove CTV anytime to free slot
- CTV can reply unlimited times once assigned
- Non-CTV users cannot reply if post is CTV-assigned

### Quy tắc tương tác
1. **Giới hạn một lượt tương tác**
    *   Mỗi người dùng chỉ có thể thích một bài viết tối đa một lần
    *   Nhấn "Thích" khi đã thích rồi sẽ xóa lượt tương tác (bỏ thích)
    *   Hệ thống ngăn chặn lượt tương tác trùng lặp ở cấp độ cơ sở dữ liệu (ràng buộc unique trên user_id + post_id)

2. **Xử lý giao diện lạc quan**
    *   Giao diện cập nhật ngay lập tức khi nhấn mà không đợi phản hồi server
    *   Nếu yêu cầu API thất bại, giao diện hoàn nguyên về trạng thái trước đó
    *   Trong quá trình hoàn nguyên, hiển thị thông báo lỗi thoáng qua
    *   Cơ chế debounce ngăn nhấn liên tục nhanh (cooldown 500ms)

3. **Tương tác trên bài viết của chính mình**
    *   Người dùng có thể thích bài viết của chính mình
    *   Số đếm tương tác bao gồm cả lượt thích của tác giả

### Quy tắc chia sẻ
1. **Ràng buộc chia sẻ nhóm**
    *   Người dùng chỉ có thể chia sẻ bài viết vào nhóm mà họ có tư cách thành viên đang hoạt động
    *   Người dùng không thể chia sẻ bài viết vào nhóm gốc mà bài viết đó đã được đăng
    *   Bài viết riêng tư không thể được chia sẻ — nút "Chia sẻ" bị ẩn trên bài viết riêng tư

2. **Hiển thị bài viết chia sẻ**
    *   Bài viết chia sẻ hiển thị thẻ nhúng tham chiếu bài viết gốc
    *   Nếu bài viết gốc bị xóa, thẻ nhúng hiển thị: "Bài viết gốc đã bị xóa"
    *   Lời nhắn kèm theo hiển thị phía trên thẻ nhúng bài viết gốc

### Thông báo
1. **Thông báo tương tác**
    *   Hệ thống tạo thông báo cho tác giả bài viết khi nhận được lượt thích mới
    *   Thông báo không được tạo khi người dùng tự thích bài viết của mình
    *   Nhiều lượt thích được gom nhóm: "Nguyễn Văn A và 5 người khác đã thích bài viết của bạn"

2. **Thông báo chia sẻ**
    *   Hệ thống tạo thông báo cho tác giả bài viết khi bài viết của họ được chia sẻ
    *   Nội dung thông báo: "[Tên người dùng] đã chia sẻ bài viết của bạn vào nhóm [Tên nhóm]"

## Luồng xử lý

### Luồng Thích bài viết
```
Người dùng nhấn "Thích" trên PostCard (trạng thái chưa thích)
    → Giao diện cập nhật ngay lập tức: biểu tượng đặc, văn bản chuyển xanh, số đếm tăng
    → Hệ thống gửi POST /api/posts/{id}/reactions
    → Khi thành công: không thay đổi giao diện thêm
    → Khi thất bại: giao diện hoàn nguyên về trạng thái chưa thích
```

### Luồng Bỏ thích bài viết
```
Người dùng nhấn "Thích" trên PostCard (trạng thái đã thích)
    → Giao diện cập nhật ngay lập tức: biểu tượng viền, văn bản chuyển xám, số đếm giảm
    → Hệ thống gửi DELETE /api/posts/{id}/reactions
    → Khi thành công: không thay đổi giao diện thêm
    → Khi thất bại: giao diện hoàn nguyên về trạng thái đã thích
```

### Luồng Chia sẻ vào nhóm
```
Người dùng nhấn "Chia sẻ" trên PostCard
    → Hộp thoại chia sẻ mở ra
    → Người dùng chọn nhóm đích từ dropdown
    → Người dùng tùy chọn nhập lời nhắn kèm theo
    → Người dùng nhấn "Chia sẻ ngay"
    → Hệ thống tạo bài viết chia sẻ trong nhóm đích
    → Hộp thoại đóng
    → Thông báo toast: "Chia sẻ thành công"
    → Bài viết chia sẻ xuất hiện trong bảng tin nhóm đích
```

Link thiết kế:
