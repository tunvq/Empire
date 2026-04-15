# Trang Nhóm (Cộng đồng)

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| 1.0 | 2026-04-10 | Tạo tài liệu ban đầu |

## Tổng quan
Tính năng này cung cấp trang nhóm dành riêng cho các cộng đồng giáo dục (ví dụ: "Cộng đồng Luyện thi HSA"). Nhóm đóng vai trò là không gian tập trung theo chủ đề, nơi thành viên có thể chia sẻ bài viết, tài nguyên và thảo luận. Trang nhóm hiển thị thông tin nhóm, thông tin thành viên và bảng tin bài viết riêng biệt. Người dùng có thể duyệt, tham gia và tương tác trong nhóm như một tính năng xã hội cốt lõi của nền tảng.

## Quyền truy cập

**Vai trò & Mapping Hệ Thống (PERMISSIONS_GUIDE v1.0):**

| Tiếng Việt | System Role | View Public | View Private | Edit Group | Manage Members | Notes |
|----------|------------|------------|--------------|-----------|----------------|-------|
| Học sinh | NonPaid User | ✅ YES | ❌ NO | ❌ NO | ❌ NO | |
| Học sinh | Paid User | ✅ YES | ✅ If Member | ❌ NO | ❌ NO | |
| Giáo viên | Mentor | ✅ YES | ✅ All led groups | ✅ Own groups | ✅ Own groups | |
| Quản trị viên | Admin | ✅ YES | ✅ YES | ✅ Any | ✅ Any | Audit |

**Điều kiện truy cập:**
- ✅ NonPaid/Paid User: View groups, join public, request private
- ✅ **Member** ⭐ (group-scoped): Access group posts + sub-private content
- ✅ Mentor: Manage groups they lead + assign Members
- ✅ Group Admin: Manage specific assigned groups
- ✅ Admin: System-wide management

**Điểm truy cập:**
- Mục "Cộng đồng" trên thanh bên (list public groups)
- Tab "Nhóm" trên trang cá nhân (user's groups)
- Kết quả tìm kiếm (search discovered groups)

## Chức năng chính

### Phần đầu nhóm
1. **Ảnh bìa và thông tin nhóm**
    *   Hệ thống hiển thị ảnh bìa nhóm dạng banner toàn chiều rộng ở đầu trang
    *   Bên dưới ảnh bìa: biểu tượng/ảnh đại diện nhóm (hình tròn, 64x64px)
    *   Tên nhóm hiển thị cỡ lớn, đậm (ví dụ: "Cộng đồng Luyện thi HSA")
    *   Mô tả nhóm hiển thị bên dưới tên (ví dụ: "Cộng đồng dành cho các bạn luyện thi HSA")
    *   Thông tin metadata: "[N] thành viên" và loại nhóm ("Nhóm công khai" hoặc "Nhóm riêng tư")

2. **Nút hành động nhóm**
    *   **Đối với thành viên**: nút "Đã tham gia" (có thể nhấn để rời nhóm)
    *   **Đối với người chưa tham gia (nhóm công khai)**: nút "Tham gia nhóm"
    *   **Đối với người chưa tham gia (nhóm riêng tư)**: nút "Yêu cầu tham gia"
    *   Nút bổ sung: "Mời thành viên", "Chia sẻ" (sao chép liên kết nhóm)

### Điều hướng tab nhóm
1. **Cấu trúc tab**
    *   Trang nhóm hiển thị ba tab: "Thảo luận", "Tài liệu", "Thành viên"
    *   "Thảo luận" là tab mặc định được kích hoạt khi trang tải
    *   Tab đang kích hoạt được đánh dấu bằng đường viền dưới màu chủ đạo

2. **Tab Thảo luận (Mặc định)**
    *   Hiển thị ô nhập "Viết bài đăng trong nhóm..." ở trên cùng
    *   Nhấn vào ô nhập sẽ mở hộp thoại Tạo bài viết với nhóm hiện tại được chọn sẵn
    *   Bên dưới ô nhập: bảng tin bài viết nhóm (chỉ bài viết trong nhóm này)
    *   Bài viết sắp xếp theo ngày tạo giảm dần với cuộn vô hạn

3. **Tab Tài liệu**
    *   Hiển thị tất cả tệp tài liệu (PDF, DOCX, ZIP) đã được chia sẻ trong nhóm
    *   Mỗi tài liệu hiển thị: biểu tượng loại tệp, tên tệp, người tải lên, ngày tải lên, dung lượng
    *   Tài liệu có thể sắp xếp theo: ngày (mới nhất trước) hoặc tên (A-Z)
    *   Nhấn vào tài liệu sẽ bắt đầu tải xuống

4. **Tab Thành viên**
    *   Hiển thị danh sách tất cả thành viên nhóm
    *   Mỗi mục thành viên hiển thị: ảnh đại diện, tên, vai trò trong nhóm (Quản trị viên/Thành viên), ngày tham gia
    *   Hỗ trợ thanh tìm kiếm để lọc thành viên theo tên
    *   Quản trị viên nhóm được hiển thị ở đầu danh sách với huy hiệu "Quản trị viên"

### Tạo bài viết trong nhóm
1. **Ô nhập nhanh**
    *   Ô nhập "Viết bài đăng trong nhóm..." xuất hiện ở đầu tab "Thảo luận"
    *   Nhấn vào ô nhập sẽ mở hộp thoại Tạo bài viết
    *   Nhóm hiện tại được tự động chọn trong dropdown nhóm đích và không thể thay đổi trong ngữ cảnh này

### Quản lý thành viên
1. **Chức năng dành cho Quản trị viên nhóm**
    *   Quản trị viên nhóm có thể: phê duyệt/từ chối yêu cầu tham gia (nhóm riêng tư), xóa thành viên, thăng cấp thành viên lên Quản trị viên, chỉnh sửa thông tin nhóm (tên, mô tả, ảnh bìa)
    *   Các hành động quản trị có thể truy cập từ menu ba chấm trên mỗi mục thành viên

## Quy tắc nghiệp vụ

### Kiểm soát Quyền Hạn Theo Vai Trò (Role-Based Access Control)

**Rule 1: Group Access Permission**

| Group Type | NonPaid | Paid | Mentor | Member ⭐ | Admin |
|-----------|---------|------|--------|----------|-------|  
| **Public Group** | ✅ View + Join | ✅ View + Join | ✅ View + Join + Lead | ✅ View (scope) | ✅ All |
| **Private Group** | ❌ Hidden | ✅ Request Join | ✅ View + Lead | ✅ View (scope) | ✅ All |
| **Group Admin** | ❌ NO | ❌ NO | ✅ Can become | ✅ NO | ✅ Can assign |

**Rule 2: Member Role (ACTIVE ROLE - Context-based)**

- **Assigned by**: Group Admin / Mentor
- **Scope**: Single group (group-scoped context)
- **Permissions**: Create posts, Reply comments (in group), View sub-private content (member-scoped)
- **Constraint**: Max permissions within assigned group context only
- **Benefit**: Access to member-exclusive content (sub-private visibility)

**Rule 3: Edit/Delete in Group**

| Action | NonPaid | Paid | Mentor | Member | Group Admin | Admin |
|--------|---------|------|--------|--------|------------|-------|
| **Edit Group Info** | ❌ NO | ❌ NO | ✅ Own | ❌ NO | ✅ YES | ✅ YES |
| **Delete Posts** | ❌ Own only | ❌ Own only | ✅ In own groups | ✅ Own | ✅ ANY | ✅ ANY |
| **Manage Members** | ❌ NO | ❌ NO | ✅ Own groups | ❌ NO | ✅ YES | ✅ YES |
| **Assign Sub-private** | ❌ NO | ❌ NO | ✅ Own groups | ❌ NO | ✅ YES | ✅ YES |

### Quy tắc tư cách thành viên
1. **Tham gia nhóm công khai**
    *   Bất kỳ người dùng đã xác thực nào đều có thể tham gia nhóm công khai ngay lập tức
    *   Nhấn "Tham gia nhóm" sẽ thêm người dùng làm thành viên ngay lập tức
    *   Nút chuyển thành "Đã tham gia" sau khi tham gia thành công

2. **Tham gia nhóm riêng tư**
    *   Nhóm riêng tư yêu cầu phê duyệt của quản trị viên
    *   Nhấn "Yêu cầu tham gia" sẽ gửi yêu cầu đến quản trị viên nhóm
    *   Nút chuyển thành "Đã gửi yêu cầu" (bị vô hiệu hóa) trong khi chờ duyệt
    *   Quản trị viên nhận thông báo về yêu cầu tham gia mới

3. **Rời nhóm**
    *   Thành viên có thể rời nhóm bất cứ lúc nào bằng cách nhấn "Đã tham gia" → "Rời nhóm"
    *   Hệ thống hiển thị hộp thoại xác nhận: "Bạn có chắc muốn rời nhóm [Tên nhóm]?"
    *   Sau khi rời, người dùng không thể xem nội dung nhóm riêng tư nữa
    *   Quản trị viên nhóm cuối cùng không thể rời nhóm — phải chuyển quyền quản trị trước

### Quy tắc hiển thị nội dung
1. **Nhóm công khai**
    *   Bất kỳ ai cũng có thể xem bảng tin nhóm và danh sách thành viên
    *   Chỉ thành viên mới có thể đăng bài và bình luận

2. **Nhóm riêng tư**
    *   Chỉ thành viên mới có thể xem bảng tin nhóm, tài liệu và danh sách thành viên
    *   Người không phải thành viên chỉ thấy phần đầu nhóm (ảnh bìa, tên, mô tả, số thành viên) và nút "Yêu cầu tham gia"

### Giới hạn nhóm
1. **Tối đa thành viên**: không giới hạn (phần mềm)
2. **Tối đa nhóm mỗi người dùng**: 50 nhóm
3. **Tối đa quản trị viên mỗi nhóm**: 10

## Luồng xử lý

### Luồng tham gia nhóm công khai
```
Người dùng điều hướng đến trang nhóm công khai (chưa phải thành viên)
    → Phần đầu nhóm hiển thị với nút "Tham gia nhóm"
    → Bảng tin chỉ cho phép đọc (không có ô nhập bài viết)
    → Người dùng nhấn "Tham gia nhóm"
    → Hệ thống thêm người dùng làm thành viên ngay lập tức
    → Nút chuyển thành "Đã tham gia"
    → Ô nhập "Viết bài đăng trong nhóm..." xuất hiện
    → Người dùng giờ có thể đăng bài và bình luận
```

### Luồng yêu cầu tham gia nhóm riêng tư
```
Người dùng điều hướng đến trang nhóm riêng tư (chưa phải thành viên)
    → Phần đầu nhóm hiển thị với nút "Yêu cầu tham gia"
    → Nội dung nhóm bị ẩn
    → Người dùng nhấn "Yêu cầu tham gia"
    → Hệ thống tạo yêu cầu tư cách thành viên
    → Nút chuyển thành "Đã gửi yêu cầu" (bị vô hiệu hóa)
    → Quản trị viên nhóm nhận thông báo
    → Quản trị viên phê duyệt/từ chối yêu cầu
    → Nếu được phê duyệt: người dùng có toàn quyền thành viên, gửi thông báo
    → Nếu bị từ chối: yêu cầu bị xóa, gửi thông báo
```

### Luồng tạo bài viết trong nhóm
```
Người dùng nhấn "Viết bài đăng trong nhóm..."
    → Hộp thoại Tạo bài viết mở ra với nhóm hiện tại được chọn sẵn
    → Người dùng soạn bài viết (văn bản, phương tiện, tài liệu)
    → Người dùng nhấn "Đăng bài ngay"
    → Bài viết xuất hiện ở đầu bảng tin tab "Thảo luận"
```

Link thiết kế:
