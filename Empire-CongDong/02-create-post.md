# Tạo bài viết mới

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| 1.0 | 2026-04-10 | Tạo tài liệu ban đầu |

## Tổng quan
Tính năng này cho phép người dùng đã xác thực tạo và đăng bài viết mới trên nền tảng. Người dùng có thể soạn nội dung văn bản, đính kèm tệp phương tiện (hình ảnh, video) và tài liệu (PDF, DOCX, ZIP), chọn nhóm đích để đăng bài, và thiết lập quyền hiển thị. Luồng tạo bài viết được kích hoạt từ ô nhập "Bạn đang nghĩ gì?" trên bảng tin hoặc qua nút "Tạo bài viết" trên thanh điều hướng bên.

## Quyền truy cập

**Vai trò & Mapping Hệ Thống (PERMISSIONS_GUIDE v1.0):**

| Tiếng Việt | System Role | Create Post | Upload Video | Upload Docs | Notes |
|----------|------------|-------------|--------------|-------------|-------|
| Học sinh | NonPaid User | ✅ Text + images | ❌ NO | ❌ NO | |
| Học sinh | Paid User | ✅ All types | ✅ YES (50MB) | ✅ YES | Paid upgrade |
| Giáo viên | Mentor | ✅ Educational content | ✅ YES (50MB) | ✅ YES | System-wide |
| Quản trị viên | Admin | ✅ Announcements | ✅ YES (50MB) | ✅ YES | System-level |

**Điều kiện truy cập:**
- ✅ NonPaid User, Paid User, Mentor, Admin, Super Admin: Có thể tạo bài viết
- ✅ Member (trong group): Có thể tạo bài viết trong group
- ❌ Collaborator: Chỉ reply trên bài viết được assign (không tạo bài)
- ❌ Guest: Không có quyền tạo bài viết

**Điểm truy cập:**
- Nhấn vào ô nhập "Bạn đang nghĩ gì?" trên bảng tin
- Nhấn nút "Tạo bài viết" trên thanh điều hướng bên
- Nhấn "Tạo bài viết" trong trang nhóm (nếu là Member)

## Chức năng chính

### Kích hoạt hộp thoại tạo bài viết
1. **Các điểm kích hoạt**
    *   Người dùng nhấn vào ô nhập gợi ý "Bạn đang nghĩ gì?" trên bảng tin (trang cá nhân hoặc trang nhóm)
    *   Người dùng nhấn nút "Tạo bài viết" ở cuối thanh điều hướng bên
    *   Hộp thoại modal mở ra dạng overlay ở giữa màn hình với nền mờ bán trong suốt
    *   Nhấn vào nền mờ hoặc biểu tượng đóng (X) sẽ tắt hộp thoại

### Hiển thị thông tin tác giả
1. **Thông tin tác giả**
    *   Phần đầu hộp thoại hiển thị ảnh đại diện người dùng hiện tại (hình tròn, 40x40px) và tên hiển thị
    *   Bên dưới tên, dropdown quyền hiển thị cho biết cài đặt hiện tại (mặc định: "Công khai")
    *   Các tùy chọn hiển thị: "Công khai", "Riêng tư"

### Soạn nội dung
1. **Nhập văn bản**
    *   Hộp thoại hiển thị ô nhập văn bản với dòng gợi ý "Bạn đang nghĩ gì?"
    *   Ô nhập tự động mở rộng khi người dùng gõ (chiều cao tối thiểu: 120px, chiều cao tối đa: 400px với thanh cuộn)
    *   Không giới hạn ký tự bắt buộc, nhưng khuyến nghị giới hạn mềm 5.000 ký tự
    *   Văn bản hỗ trợ xuống dòng (phím Enter tạo dòng mới)

2. **Khu vực tải tệp phương tiện**
    *   Bên dưới ô nhập văn bản, khu vực tải lên có viền nét đứt hiển thị thông báo: "Hình ảnh và video bạn tải lên sẽ xuất hiện tại đây"
    *   Người dùng có thể nhấn vào khu vực tải lên hoặc sử dụng các nút đính kèm để chọn tệp
    *   Các thao tác tệp được hỗ trợ qua nút biểu tượng:
        *   Đính kèm hình ảnh (biểu tượng máy ảnh/hình ảnh)
        *   Đính kèm video (biểu tượng video)
        *   Đính kèm tài liệu (biểu tượng tệp/tài liệu)
    *   Tệp đã tải lên hiển thị dưới dạng ảnh thu nhỏ xem trước trong khu vực tải lên
    *   Mỗi tệp đã tải lên có nút xóa (X) để loại bỏ trước khi đăng

3. **Xem trước phương tiện**
    *   Hình ảnh: hiển thị dạng lưới ảnh thu nhỏ (tối đa 4 hiển thị, "+N ảnh nữa" nếu nhiều hơn 4)
    *   Video: hiển thị dạng ảnh thu nhỏ đơn với biểu tượng phát chồng lên
    *   Tài liệu: hiển thị dạng thẻ tệp với biểu tượng, tên tệp gốc, dung lượng, và nhãn loại tệp

### Chọn nhóm đăng bài
1. **Dropdown nhóm đích**
    *   Dropdown có nhãn "Đăng vào nhóm" cho phép người dùng chọn nhóm để đăng bài
    *   Lựa chọn mặc định: "Empire Edu Community" (cộng đồng chính của nền tảng)
    *   Dropdown chỉ liệt kê các nhóm mà người dùng là thành viên đang hoạt động
    *   Mỗi tùy chọn hiển thị ảnh đại diện nhóm và tên nhóm
    *   Nếu người dùng kích hoạt hộp thoại từ trang nhóm, nhóm đó được chọn sẵn

### Gửi bài viết
1. **Nút "Đăng bài ngay"**
    *   Nút hành động chính ở cuối hộp thoại
    *   Nút bị vô hiệu hóa cho đến khi người dùng nhập nội dung văn bản HOẶC đính kèm ít nhất một tệp
    *   Nhấn nút sẽ gửi bài viết
    *   Trong quá trình gửi, nút hiển thị biểu tượng tải và bị vô hiệu hóa để ngăn gửi trùng lặp
    *   Khi thành công: hộp thoại đóng, bài viết mới xuất hiện ở đầu bảng tin tương ứng, hiển thị thông báo toast thành công
    *   Khi thất bại: hộp thoại vẫn mở, hiển thị thông báo lỗi, người dùng có thể thử lại

## Quy tắc nghiệp vụ

### Kiểm soát Quyền Hạn Theo Vai Trò (Role-Based Access Control)

**Rule 1: Tạo Bài Viết (Create Post Permission)**

| Vai Trò | Text Posts | Image Upload | Video Upload | Document Upload | Scope |
|--------|-----------|--------------|--------------|-----------------|-------|
| **NonPaid User** | ✅ YES | ✅ YES (10MB×5) | ❌ NO | ❌ NO | Public Hall |
| **Paid User** | ✅ YES | ✅ YES (10MB×5) | ✅ YES (50MB) | ✅ YES (50MB) | Public Hall |
| **Mentor** | ✅ YES | ✅ YES (10MB×5) | ✅ YES (50MB) | ✅ YES (50MB) | Public + Groups |
| **Member** ⭐ | ✅ YES | ✅ YES (10MB×5) | ✅ YES (50MB) | ✅ YES (50MB) | Group-scoped |
| **Admin** | ✅ YES | ✅ YES (10MB×5) | ✅ YES (50MB) | ✅ YES (50MB) | System-wide |
| **Collaborator** ⭐ | ❌ NO | ❌ NO | ❌ NO | ❌ NO | Reply only (no post creation) |

**Rule 2: Upload Constraints By Role**

| Constraint | NonPaid | Paid | Mentor | Member | Admin |
|-----------|---------|------|--------|--------|-------|
| **Image size** | 10MB | 10MB | 10MB | 10MB | 10MB |
| **Images max** | 5 | 5 | 5 | 5 | 5 |
| **Video size** | ❌ | 50MB | 50MB | 50MB | 50MB |
| **Video max** | ❌ | 1 | 1 | 1 | 1 |
| **Document size** | ❌ | 50MB | 50MB | 50MB | 50MB |
| **Document types** | ❌ | PDF, DOCX, ZIP | PDF, DOCX, ZIP | PDF, DOCX, ZIP | Any |

**Rule 3: Group Posting (Member vs General Users)**

- **NonPaid User / Paid User**: Post to any group they joined (if member-approved)
- **Mentor**: Post to public + mentor-specific groups + mentor-led groups
- **Member** ⭐: Post within assigned group-scoped context (only one group per member context)
- **Admin**: Post to any group (system-wide privilege)

**Rule 4: Visibility Control By Role**

| Visibility | NonPaid User | Paid User | Mentor | Member | Admin |
|-----------|-------------|-----------|--------|--------|-------|
| **Public Hall** | ✅ Post public | ✅ Post public | ✅ Post public | ❌ No | ✅ System |
| **Private (own)** | ✅ Can set | ✅ Can set | ✅ Can set | ✅ Can set | ✅ Can set |
| **Group posts** | ✅ If member | ✅ If member | ✅ If mentor | ✅ Always | ✅ All groups |

### Yêu cầu kiểm tra tệp
1. **Tệp hình ảnh**
    *   Định dạng chấp nhận: JPG, JPEG, PNG
    *   Dung lượng tối đa: 10MB mỗi ảnh
    *   Số lượng ảnh tối đa mỗi bài viết: 10
    *   Hệ thống kiểm tra MIME type ở cả phía client và server

2. **Tệp video**
    *   Định dạng chấp nhận: MP4, MOV, WebM
    *   Dung lượng tối đa: 50MB mỗi video (UPDATED: was 100MB in Phase 1)
    *   Số lượng video tối đa mỗi bài viết: 1
    *   Hệ thống kiểm tra MIME type ở cả phía client và server
    *   ⚠️ **Permission**: Chỉ Paid User, Mentor, Admin có thể tải video

3. **Tệp tài liệu**
    *   Định dạng chấp nhận: PDF, DOCX, ZIP
    *   Dung lượng tối đa: 50MB mỗi tài liệu
    *   Số lượng tài liệu tối đa mỗi bài viết: 5
    *   Hệ thống kiểm tra MIME type ở cả phía client và server

4. **Lỗi tải tệp**
    *   Nếu tệp vượt quá dung lượng cho phép, hệ thống hiển thị: "File [tên tệp] vượt quá dung lượng cho phép ([giới hạn]MB)"
    *   Nếu tệp có định dạng không được hỗ trợ, hệ thống hiển thị: "Định dạng file [tên tệp] không được hỗ trợ"
    *   Tệp không hợp lệ bị từ chối ngay lập tức và không được thêm vào khu vực tải lên
    *   Thanh tiến trình được hiển thị cho mỗi tệp trong quá trình tải lên

### Yêu cầu nội dung bài viết
1. **Quy tắc nội dung tối thiểu**
    *   Bài viết phải chứa ít nhất một trong: nội dung văn bản (không rỗng sau khi loại bỏ khoảng trắng) HOẶC ít nhất một tệp đính kèm (hình ảnh, video, hoặc tài liệu)
    *   Nút "Đăng bài ngay" vẫn bị vô hiệu hóa cho đến khi điều kiện này được đáp ứng

2. **Quyền đăng bài trong nhóm**
    *   NonPaid User / Paid User: Chỉ có thể đăng bài vào nhóm mà họ có tư cách **thành viên đang hoạt động** (auto-approved cho public groups)
    *   Mentor: Có thể đăng bài vào nhóm họ tham gia + nhóm họ **lãnh đạo** (mentor-specific groups)
    *   Member ⭐ **ACTIVE ROLE**: Chỉ có thể đăng bài **trong group scope mà họ được assign** (context-based)
    *   Admin: Có thể đăng bài đến **tất cả nhóm** (system-wide)
    *   Nếu tư cách thành viên bị thu hồi giữa lúc mở hộp thoại và đăng bài, hệ thống trả về lỗi: "Bạn không còn là thành viên của nhóm này"

### Quy tắc hiển thị
1. **Bài viết công khai** (NonPaid User / Paid User / Mentor / Admin)
    *   Hiển thị cho tất cả người dùng đã xác thực trên nền tảng
    *   Xuất hiện trong kết quả tìm kiếm, bảng tin nhóm, bảng tin cá nhân

2. **Bài viết nhóm** (Member context, Group-scoped posts)
    *   Chỉ hiển thị cho thành viên nhóm (scoped to group members)
    *   Admin/Moderator có thể view tất cả (audit access)
    *   Không xuất hiện trong bảng tin chính (Public Hall)

3. **Bài viết riêng tư**
    *   Chỉ hiển thị cho tác giả bài viết trên trang cá nhân của họ
    *   Không xuất hiện trong bảng tin nhóm hoặc kết quả tìm kiếm
    *   Admin/Super Admin có thể view (audit capability)

## Luồng xử lý

### Luồng tạo bài viết thông thường
```
Người dùng nhấn "Bạn đang nghĩ gì?" hoặc "Tạo bài viết"
    → Hộp thoại modal mở ra với ảnh đại diện, tên, và quyền hiển thị "Công khai"
    → Người dùng gõ nội dung văn bản vào ô nhập
    → Người dùng tùy chọn đính kèm tệp qua khu vực tải lên hoặc nút đính kèm
        → Hệ thống kiểm tra mỗi tệp (định dạng, dung lượng)
        → Tệp hợp lệ hiển thị xem trước trong khu vực tải lên
        → Tệp không hợp lệ bị từ chối với thông báo lỗi
    → Người dùng tùy chọn chọn nhóm đích từ dropdown
    → Người dùng tùy chọn thay đổi cài đặt hiển thị
    → Người dùng nhấn "Đăng bài ngay"
    → Hệ thống kiểm tra: nội dung không rỗng HOẶC có tệp đính kèm
    → Hệ thống tải tệp lên bộ lưu trữ
    → Hệ thống tạo bản ghi bài viết với nội dung, tệp, nhóm, quyền hiển thị
    → Hộp thoại đóng
    → Bài viết mới xuất hiện ở đầu bảng tin
    → Thông báo toast: "Đăng bài thành công"
```

### Luồng tạo bài viết có lỗi kiểm tra
```
Người dùng cố gửi bài mà không có nội dung và không có tệp đính kèm
    → Nút "Đăng bài ngay" bị vô hiệu hóa — không có hành động nào xảy ra

Người dùng tải lên tệp vượt quá dung lượng
    → Hệ thống từ chối tệp ngay lập tức
    → Thông báo lỗi hiển thị: "File [tên] vượt quá dung lượng cho phép"
    → Các tệp hợp lệ khác vẫn nằm trong khu vực tải lên
```

Link thiết kế:
