# Điều hướng & Bố cục

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| 1.0 | 2026-04-10 | Tạo tài liệu ban đầu |

## Tổng quan
Tính năng này định nghĩa cấu trúc điều hướng tổng thể và khung bố cục của nền tảng. Bố cục theo mẫu mạng xã hội tiêu chuẩn với thanh header cố định phía trên, thanh bên trái cố định cho điều hướng chính, khu vực nội dung chính, và thanh bên phải phụ thuộc ngữ cảnh. Hệ thống điều hướng cho phép người dùng truy cập tất cả các phần chính của nền tảng và cung cấp quyền truy cập thường trực vào trang cá nhân, thông báo và tìm kiếm.

## Quyền truy cập

**Vai trò & Mapping Hệ Thống (PERMISSIONS_GUIDE v1.0):**

| Tiếng Việt | System Role | Header Access | Sidebar Access | Search | Notifications |
|----------|------------|--------------|----------------|--------|-----------------|
| Học sinh | NonPaid User | ✅ YES | ✅ YES | ✅ Public search | ✅ Own notifications |
| Học sinh | Paid User | ✅ YES | ✅ YES| ✅ Public + own search | ✅ Own notifications |
| Giáo viên | Mentor | ✅ YES | ✅ YES (+ Mentor menu) | ✅ Group-scoped | ✅ Own + group notifications |
| Quản trị viên | Admin | ✅ YES | ✅ YES (+ Admin menu) | ✅ System-wide | ✅ All notifications (audit) |

**Điều kiện truy cập:**
- ✅ Tất cả người dùng đã xác thực: Hiển thị header + sidebar
- ✅ Menu dropdown: Role-specific options appear
- ❌ Guest: Không có access (redirect to login)

**Điểm truy cập:**
- Hiển thị trên mọi trang đã xác thực

## Chức năng chính

### Thanh header phía trên
1. **Bố cục**
    *   Cố định ở đầu khung nhìn — luôn hiển thị
    *   Chiều cao: 56px
    *   Nền: trắng (#FFFFFF) với bóng mờ nhẹ ở dưới
    *   Chia thành ba vùng: trái (logo), giữa (tìm kiếm), phải (hành động)

2. **Vùng trái — Logo**
    *   Logo nền tảng + tên "Empire" dạng liên kết
    *   Nhấn vào logo sẽ điều hướng về trang chủ/bảng tin

3. **Vùng giữa — Thanh tìm kiếm**
    *   Ô nhập tìm kiếm với biểu tượng kính lúp
    *   Dòng gợi ý: "Tìm kiếm bài viết, nhóm, người dùng..."
    *   Chiều rộng: 400px (desktop), toàn chiều rộng (di động)
    *   Xem tài liệu chi tiết tại [06 - Tìm kiếm & Khám phá](06-search-discovery.md)

4. **Vùng phải — Hành động**
    *   Biểu tượng thông báo (hình chuông) với badge đếm (số thông báo chưa đọc)
    *   Biểu tượng tin nhắn (hình bong bóng chat) với badge đếm
    *   Ảnh đại diện người dùng (hình tròn, 32x32px) — nhấn để mở dropdown menu

5. **Dropdown menu người dùng**
    *   Hiển thị khi nhấn vào ảnh đại diện trên header
    *   Các mục: "Trang cá nhân", "Cài đặt", "Trợ giúp", "Đăng xuất"
    *   Nhấn ra ngoài dropdown sẽ đóng menu

### Thanh bên trái (Thanh điều hướng)
1. **Bố cục**
    *   Cố định ở bên trái khung nhìn — luôn hiển thị trên desktop
    *   Chiều rộng: 240px (mở rộng), 64px (thu gọn)
    *   Nền: trắng (#FFFFFF) với viền phải nhạt
    *   Cuộn dọc nếu nội dung vượt quá chiều cao khung nhìn

2. **Mục điều hướng chính**
    *   Mỗi mục gồm: biểu tượng (24x24px) + nhãn văn bản
    *   Mục đang kích hoạt được đánh dấu bằng nền xanh nhạt và văn bản đậm
    *   Các mục điều hướng (theo thứ tự từ trên xuống):
        *   **Trang chủ** — biểu tượng ngôi nhà, điều hướng đến bảng tin chính
        *   **Tìm kiếm** — biểu tượng kính lúp, mở trang tìm kiếm
        *   **Reels** — biểu tượng phát video, mở trang Reels
        *   **Tin nhắn** — biểu tượng bong bóng chat, mở danh sách tin nhắn
        *   **Thông báo** — biểu tượng chuông, mở trang thông báo

3. **Phần Cộng đồng**
    *   Tiêu đề phần: "Cộng đồng"
    *   Liệt kê các nhóm mà người dùng đã tham gia
    *   Mỗi mục nhóm: ảnh đại diện nhóm (hình tròn, 24x24px) + tên nhóm
    *   Nút "+ Tạo nhóm mới" ở cuối danh sách
    *   Nếu người dùng tham gia nhiều hơn 5 nhóm: hiển thị 5 nhóm đầu + liên kết "Xem tất cả"

4. **Nút Tạo bài viết**
    *   Nút nổi bật "Tạo bài viết" ở phần dưới thanh bên
    *   Nền: màu chủ đạo (#1877F2), chữ trắng
    *   Nhấn sẽ mở hộp thoại Tạo bài viết

5. **Thông tin người dùng (Cuối thanh bên)**
    *   Ảnh đại diện người dùng + tên hiển thị
    *   Trạng thái trực tuyến (chấm xanh lá)
    *   Nhấn để điều hướng đến trang cá nhân

### Khu vực nội dung chính
1. **Bố cục**
    *   Chiếm không gian còn lại giữa thanh bên trái và thanh bên phải
    *   Đệm: 24px mỗi bên
    *   Chiều rộng tối đa nội dung: 680px (canh giữa)
    *   Cuộn dọc độc lập với thanh bên

2. **Tải nội dung**
    *   Hiển thị skeleton loading khi tải nội dung
    *   Cuộn vô hạn cho nội dung dạng bảng tin
    *   Chỉ báo loading spinner khi tải thêm

### Thanh bên phải (Phụ thuộc ngữ cảnh)
1. **Bố cục**
    *   Cố định ở bên phải khung nhìn trên desktop
    *   Chiều rộng: 300px
    *   Ẩn trên màn hình dưới 1200px
    *   Nội dung thay đổi tùy theo trang hiện tại

2. **Nội dung phụ thuộc ngữ cảnh**
    *   **Trang chủ**: hiển thị "Nhóm gợi ý", "Người dùng gợi ý", "Chủ đề xu hướng"
    *   **Trang nhóm**: hiển thị "Thông tin nhóm", "Thành viên nổi bật", "Bài viết ghim"
    *   **Trang cá nhân**: hiển thị "Ảnh", "Bạn bè", "Nhóm đã tham gia"

## Quy tắc nghiệp vụ

### Quy tắc responsive
1. **Desktop (≥1200px)**
    *   Bố cục đầy đủ: header + thanh bên trái (240px) + nội dung chính + thanh bên phải (300px)

2. **Tablet (768px - 1199px)**
    *   Thanh bên phải bị ẩn
    *   Thanh bên trái thu gọn (64px, chỉ hiển thị biểu tượng)
    *   Hover vào thanh bên trái sẽ mở rộng tạm thời (240px) dạng overlay

3. **Di động (<768px)**
    *   Header thu gọn (logo + biểu tượng tìm kiếm + ảnh đại diện)
    *   Thanh bên trái bị ẩn — thay bằng thanh điều hướng dưới cùng
    *   Thanh điều hướng dưới cùng: 5 biểu tượng (Trang chủ, Tìm kiếm, Tạo bài, Reels, Trang cá nhân)
    *   Chiều cao thanh dưới: 56px, cố định ở cuối khung nhìn
    *   Thanh bên phải bị ẩn hoàn toàn

### Quy tắc điều hướng
1. **Đánh dấu trạng thái kích hoạt**
    *   Mục điều hướng hiện tại luôn được đánh dấu dạng trực quan (nền xanh nhạt + chữ đậm)
    *   Chỉ một mục được kích hoạt tại một thời điểm
    *   Điều hướng con (ví dụ: trang nhóm cụ thể) cũng đánh dấu mục cha ("Cộng đồng")

2. **Badge thông báo**
    *   Badge đếm hiển thị dạng hình tròn đỏ + số trắng trên biểu tượng
    *   Badge cập nhật theo thời gian thực (WebSocket)
    *   Số hiển thị tối đa: "99+" nếu vượt quá 99
    *   Badge biến mất khi không còn thông báo chưa đọc

3. **Hiệu suất điều hướng**
    *   Chuyển trang sử dụng điều hướng phía client (không tải lại toàn trang)
    *   Header và thanh bên không render lại khi chuyển trang
    *   Prefetch trang khi hover vào liên kết điều hướng (200ms delay)

### Trạng thái xác thực
1. **Người dùng chưa xác thực**
    *   Hệ thống chuyển hướng đến trang đăng nhập
    *   Không hiển thị header, thanh bên hoặc bất kỳ nội dung nền tảng nào

2. **Phiên hết hạn**
    *   Khi token phiên hết hạn, hệ thống hiển thị hộp thoại: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại."
    *   Nút "Đăng nhập lại" chuyển hướng đến trang đăng nhập
    *   Sau khi đăng nhập lại, hệ thống trả người dùng về trang cuối cùng đã xem

## Luồng xử lý

### Luồng điều hướng desktop
```
Người dùng đăng nhập thành công
    → Hệ thống hiển thị bố cục đầy đủ: header + thanh bên trái + nội dung chính + thanh bên phải
    → Trang chủ/bảng tin tải làm nội dung mặc định
    → "Trang chủ" được đánh dấu kích hoạt trên thanh bên trái
    → Người dùng nhấn "Reels" trên thanh bên
    → Nội dung chính chuyển sang giao diện Reels toàn màn hình
    → "Reels" được đánh dấu kích hoạt trên thanh bên
    → Người dùng nhấn vào tên nhóm trong phần "Cộng đồng"
    → Nội dung chính tải trang nhóm
    → Thanh bên phải cập nhật hiển thị thông tin nhóm
```

### Luồng điều hướng di động
```
Người dùng đăng nhập thành công trên thiết bị di động
    → Hệ thống hiển thị bố cục di động: header thu gọn + nội dung chính + thanh dưới cùng
    → Thanh dưới cùng hiển thị 5 biểu tượng
    → Người dùng nhấn biểu tượng "Trang cá nhân" trên thanh dưới
    → Trang cá nhân tải
    → Biểu tượng "Trang cá nhân" được đánh dấu kích hoạt
    → Người dùng nhấn biểu tượng "Reels" trên thanh dưới
    → Trang Reels tải ở chế độ toàn màn hình
    → Biểu tượng "Reels" trên thanh dưới được đánh dấu kích hoạt
```

### Luồng phiên hết hạn
```
Người dùng đang sử dụng nền tảng
    → Token phiên hết hạn
    → Yêu cầu API tiếp theo trả về lỗi 401
    → Hệ thống hiển thị hộp thoại modal: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại."
    → Người dùng nhấn "Đăng nhập lại"
    → Hệ thống chuyển hướng đến trang đăng nhập, lưu URL hiện tại
    → Người dùng đăng nhập lại thành công
    → Hệ thống trả người dùng về trang đã lưu trước đó
```

Link thiết kế:
