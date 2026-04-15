# Trang cá nhân & Hồ sơ người dùng

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| 1.0 | 2026-04-10 | Tạo tài liệu ban đầu |

## Tổng quan
Tính năng này cung cấp cho mỗi người dùng một trang cá nhân hiển thị danh tính, hoạt động và nội dung của họ. Trang cá nhân đóng vai trò như "ngôi nhà" của người dùng trên nền tảng, nơi trưng bày bài viết, nhóm, reels và thông báo. Trang cá nhân có thể được truy cập bởi cả chủ trang lẫn các người dùng đã xác thực khác, hỗ trợ khám phá xã hội và duyệt nội dung.

## Quyền truy cập

**Vai trò & Mapping Hệ Thống (PERMISSIONS_GUIDE v1.0):**

| Tiếng Việt | System Role | Access Level |
|----------|------------|--------------|
| Học sinh | NonPaid User, Paid User | View own/others' public profiles |
| Giáo viên | Mentor | View full, edit own profile |
| Quản trị viên | Admin, Super Admin | View all, admin edit capability |

**Điều kiện truy cập:**
- ✅ Người dùng đã xác thực (NonPaid User, Paid User, Mentor, Admin, Super Admin)
- ❌ Guest: Chỉ xem public profile nếu được bật (Phase 2)

**Điểm truy cập:**
- Nhấn vào ảnh đại diện hoặc tên người dùng ở bất kỳ đâu trên nền tảng
- Chọn "Trang cá nhân" từ thanh điều hướng bên trái
- Nhấn vào hồ sơ từ kết quả tìm kiếm, bình luận, hoặc danh sách thành viên nhóm

## Chức năng chính

### Phần đầu trang cá nhân
1. **Ảnh bìa & Ảnh đại diện**
    *   Hệ thống hiển thị ảnh bìa của người dùng dạng banner toàn chiều rộng ở đầu trang
    *   Hệ thống hiển thị ảnh đại diện dạng hình tròn, chồng lên cạnh dưới của ảnh bìa
    *   Nếu chưa đặt ảnh bìa, hệ thống hiển thị nền gradient mặc định
    *   Nếu chưa đặt ảnh đại diện, hệ thống hiển thị placeholder mặc định với chữ cái đầu của tên người dùng

2. **Thông tin danh tính người dùng**
    *   Hệ thống hiển thị họ tên đầy đủ bên dưới ảnh đại diện
    *   Hệ thống hiển thị huy hiệu vai trò nếu có (ví dụ: "Quản trị viên", "Giáo viên")
    *   Đối với chủ trang, nút "Chỉnh sửa trang cá nhân" được hiển thị bên cạnh tên

### Các tab nội dung trang cá nhân
1. **Điều hướng tab**
    *   Trang cá nhân hiển thị bốn tab: "Sách chung" (Bảng tin), "Reels", "Nhóm", "Thông báo"
    *   "Sách chung" là tab mặc định được kích hoạt khi trang tải
    *   Tab đang kích hoạt được đánh dấu bằng màu chủ đạo
    *   Chuyển tab không tải lại toàn bộ trang — khu vực nội dung cập nhật động

2. **Tab Sách chung (Mặc định)**
    *   Hiển thị ô nhập "Tạo bài viết" ở trên cùng với dòng gợi ý "Bạn đang nghĩ gì?"
    *   Bên dưới ô nhập, hiển thị các bài viết của người dùng theo thứ tự thời gian ngược (mới nhất trước)
    *   Mỗi bài viết hiển thị dưới dạng component PostCard với đầy đủ khả năng tương tác
    *   Bảng tin hỗ trợ cuộn vô hạn — hệ thống tải thêm bài viết khi người dùng cuộn gần đến cuối

3. **Tab Reels**
    *   Hiển thị lưới ảnh thu nhỏ video reels của người dùng
    *   Mỗi ảnh thu nhỏ hiển thị biểu tượng phát và số lượt xem
    *   Nhấn vào ảnh thu nhỏ sẽ mở Trình phát Reels toàn màn hình

4. **Tab Nhóm**
    *   Hiển thị danh sách các nhóm mà người dùng đã tham gia
    *   Mỗi mục nhóm hiển thị: ảnh đại diện nhóm, tên nhóm, số thành viên, loại nhóm (Công khai/Riêng tư)
    *   Nhấn vào mục nhóm sẽ điều hướng đến Trang nhóm

5. **Tab Thông báo**
    *   Hiển thị danh sách thông báo theo thứ tự thời gian cho chủ trang
    *   Mỗi thông báo hiển thị: ảnh đại diện người thực hiện, mô tả hành động, thời gian, trạng thái đã đọc/chưa đọc
    *   Thông báo chưa đọc được phân biệt bằng nền sáng hơn

### Chỉnh sửa trang cá nhân
1. **Hộp thoại chỉnh sửa**
    *   Nhấn "Chỉnh sửa trang cá nhân" sẽ mở hộp thoại modal
    *   Người dùng có thể cập nhật: tên hiển thị, ảnh đại diện (tải ảnh mới), ảnh bìa (tải ảnh mới)
    *   Nút "Lưu" áp dụng thay đổi; nút "Hủy" đóng hộp thoại mà không lưu
    *   Hệ thống kiểm tra định dạng ảnh (JPG, PNG) và dung lượng (tối đa 5MB cho ảnh đại diện, tối đa 10MB cho ảnh bìa)
    *   Khi lưu thành công, trang cá nhân tự động làm mới để hiển thị thông tin đã cập nhật

### Huy hiệu thông báo
1. **Huy hiệu trên thanh bên**
    *   Thanh điều hướng bên hiển thị huy hiệu số bên cạnh "Thông báo" cho biết số thông báo chưa đọc
    *   Huy hiệu cập nhật theo thời gian thực qua WebSocket hoặc polling
    *   Huy hiệu biến mất khi tất cả thông báo được đánh dấu đã đọc
    *   Huy hiệu hiển thị "99+" nếu số chưa đọc vượt quá 99

## Quy tắc nghiệp vụ

### Kiểm soát Quyền Hạn Theo Vai Trò (Role-Based Access Control)

**Rule 1: Xem Trang Cá Nhân (View Permission)**

| Vai Trò | Xem trang của mình | Xem trang khác | Phạm vi |
|--------|------------------|----------------|---------|
| **Guest** | ❌ NO | 🟡 Limited public only | N/A |
| **NonPaid User** | ✅ YES (full) | ✅ Public posts only | Public content |
| **Paid User** | ✅ YES (full) | ✅ Public posts + approved private | Public + owner-approved |
| **Mentor** | ✅ YES (full) | ✅ Public posts + group-scoped | Public + group context |
| **Admin / Super Admin** | ✅ YES (full) | ✅ All content (audit) | Full access |

**Rule 2: Chỉnh Sửa Trang Cá Nhân (Edit Permission)**

| Vai Trò | Edit Chính Mình | Edit Người Khác | Notes |
|--------|----------------|-----------------|-------|
| **NonPaid User** | ✅ YES (own only) | ❌ NO | Avatar, banner, bio |
| **Paid User** | ✅ YES (own only) | ❌ NO | Same as NonPaid |
| **Mentor** | ✅ YES (own only) | ❌ NO | Same as NonPaid |
| **Admin** | ✅ YES (own) | ⚠️ Admin Panel only | Via admin dashboard, not UI |
| **Super Admin** | ✅ YES (own) | ⚠️ Admin Panel only | Full edit capability in admin |

**Rule 3: Xem Tab Nội Dung (Content Tabs)**

| Tab | NonPaid User | Paid User | Mentor | Admin |
|-----|-------------|-----------|--------|-------|
| **Sách chung (Public posts)** | ✅ Own + public others | ✅ Own + public others | ✅ Own + public others | ✅ All |
| **Reels** | ✅ Own + public | ✅ Own + public | ✅ Own + public | ✅ All |
| **Nhóm** | ✅ Own groups | ✅ Own groups | ✅ Own groups + mentor groups | ✅ All |
| **Thông báo** | ✅ Own only | ✅ Own only | ✅ Own only | ✅ System-wide |

**Rule 4: Xem Huy Hiệu Vai Trò (Badge Display)**

- ✅ NonPaid User: ❌ No badge (default)
- ✅ Paid User: 🏆 "Paid" badge (optional, Phase 2)
- ✅ Mentor: 🎓 "Mentor" badge (visible, system-wide)
- ✅ **Collaborator** ⭐: 👥 "Collaborator" badge (only on posts where assigned)
- ✅ **Member** ⭐ (group-scoped): 👫 "Member" badge (in group context)
- ✅ Moderator: 🛡️ "Moderator" badge (visible, audit role)
- ✅ Admin: ⚙️ "Admin" badge (visible, system-wide)
- ✅ Super Admin: 👑 "Super Admin" badge (visible, governance)

### Quyền hiển thị trang cá nhân
1. **Truy cập trang cá nhân công khai**
    *   Bất kỳ người dùng đã xác thực (NonPaid User, Paid User, Mentor, Admin) đều có thể xem trang cá nhân của người khác
    *   Tab "Sách chung" chỉ hiển thị bài viết công khai khi được xem bởi người dùng khác
    *   Bài viết riêng tư chỉ hiển thị cho chủ trang (trừ khi chủ trang là Mentor/Admin/Super Admin → có thể view all)
    *   Tab "Thông báo" chỉ hiển thị cho chủ trang (riêng tư 100%)

2. **Quyền chỉnh sửa (Edit Permission)**
    *   Chỉ chủ trang mới có thể chỉnh sửa thông tin cá nhân của mình (avatar, banner, bio)
    *   Nút "Chỉnh sửa trang cá nhân" bị ẩn khi xem trang của người khác
    *   Admin/Super Admin có thể chỉnh sửa trang cá nhân của bất kỳ người dùng nào **thông qua bảng quản trị** (không phải qua trang cá nhân UI)
    *   Mọi hành động chỉnh sửa được ghi lại trong audit log

### Quy tắc hiển thị nội dung
1. **Phân trang bảng tin**
    *   Hệ thống tải 10 bài viết mỗi lần khi tải ban đầu và khi kích hoạt cuộn vô hạn
    *   Bài viết được sắp xếp theo ngày tạo giảm dần (mới nhất trước)

2. **Xử lý hình ảnh**
    *   Ảnh đại diện hiển thị kích thước 80x80px trên trang cá nhân
    *   Ảnh bìa hiển thị toàn chiều rộng container với chiều cao cố định 200px, sử dụng `object-fit: cover`
    *   Hệ thống tạo và cache ảnh thu nhỏ để tối ưu hiệu suất

### Quy tắc thông báo
1. **Tạo thông báo**
    *   Hệ thống tạo thông báo khi: có bình luận mới trên bài viết, có lượt thích trên bài viết, được duyệt tham gia nhóm, được đề cập trong bài viết hoặc bình luận
    *   Thông báo không được tạo cho các hành động của chính người dùng

2. **Lưu trữ huy hiệu**
    *   Số đếm huy hiệu thông báo được duy trì khi điều hướng giữa các trang trong cùng phiên
    *   Số đếm chỉ được đặt lại khi người dùng chủ động xem tab thông báo

## Luồng xử lý

### Luồng xem trang cá nhân
```
Người dùng nhấn vào ảnh đại diện/tên trong thanh bên
    → Hệ thống tải trang cá nhân với tab "Sách chung" đang kích hoạt
    → Hệ thống lấy thông tin người dùng + lô bài viết đầu tiên
    → Phần đầu trang hiển thị (ảnh bìa, ảnh đại diện, tên, vai trò)
    → Bảng tin hiển thị với các component PostCard
    → Nút "Chỉnh sửa trang cá nhân" hiển thị
```

### Luồng xem trang cá nhân người khác
```
Người dùng nhấn vào ảnh đại diện/tên của người khác (từ bài viết, bình luận, nhóm, v.v.)
    → Hệ thống tải trang cá nhân của người dùng đích
    → Chỉ hiển thị nội dung công khai
    → Nút "Chỉnh sửa trang cá nhân" bị ẩn
    → Các nút tương tác (theo dõi, nhắn tin) có thể được hiển thị (tính năng tương lai)
```

### Luồng chỉnh sửa trang cá nhân
```
Người dùng nhấn "Chỉnh sửa trang cá nhân"
    → Hộp thoại modal mở ra với dữ liệu hiện tại được điền sẵn
    → Người dùng chỉnh sửa các trường và/hoặc tải ảnh mới
    → Người dùng nhấn "Lưu"
    → Hệ thống kiểm tra đầu vào (độ dài tên, định dạng/dung lượng ảnh)
    → Nếu hợp lệ: hệ thống cập nhật trang cá nhân, đóng modal, làm mới hiển thị
    → Nếu không hợp lệ: hệ thống hiển thị lỗi xác thực inline, modal vẫn mở
```

Link thiết kế:
