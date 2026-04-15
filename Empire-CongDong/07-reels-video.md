# Reels - Trình phát video ngắn

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| 1.0 | 2026-04-10 | Tạo tài liệu ban đầu |

## Tổng quan
Tính năng này cung cấp trải nghiệm xem video ngắn dọc toàn màn hình tương tự TikTok/Instagram Reels. Người dùng có thể duyệt nội dung video ngắn mang tính giáo dục bằng cách vuốt dọc giữa các video. Mỗi reel hiển thị thông tin người tạo, mô tả, nút tương tác (thích, bình luận, chia sẻ), và thông tin âm thanh/nhạc nền. Reels đóng vai trò như định dạng hấp dẫn cho nội dung giáo dục ngắn gọn trên nền tảng.

## Quyền truy cập

**Vai trò & Mapping Hệ Thống (PERMISSIONS_GUIDE v1.0):**

| Tiếng Việt | System Role | View Reels | Create Reels | Video Size | Notes |
|----------|------------|-----------|--------------|-----------|-------|
| Học sinh | NonPaid User | ✅ YES (public) | ❌ NO | N/A | View only |
| Học sinh | Paid User | ✅ YES (public) | ✅ YES | 50MB max | Can create |
| Giáo viên | Mentor | ✅ YES (all) | ✅ YES | 50MB max | Educational reels |
| Quản trị viên | Admin | ✅ YES (all) | ✅ YES | 50MB max | System-wide |

**Điều kiện truy cập:**
- ✅ Guest: Đang thử, chưa open Phase 1
- ✅ NonPaid User: View only
- ✅ Paid User: View + Create (50MB video limit)
- ✅ Mentor: View + Create (educational content)
- ✅ Admin: View + Create (system-wide)

**Điểm truy cập:**
- Mục "Reels" trên thanh bên trái
- Tab "Reels" trên trang cá nhân (if user has create permission)

## Chức năng chính

### Giao diện trình phát Reels
1. **Bố cục dọc toàn màn hình**
    *   Reels chiếm toàn bộ chiều cao khung nhìn (100vh) với nền đen
    *   Video được canh giữa theo chiều ngang, vừa chiều rộng khung nhìn trên di động
    *   Trên desktop: video hiển thị dạng cột dọc ở giữa (tỉ lệ 9:16) với hai bên đệm đen
    *   Chỉ một reel hiển thị tại một thời điểm — cuộn theo từng mục

2. **Phát video**
    *   Video tự động phát khi xuất hiện trên khung nhìn (tự động phát, có tiếng)
    *   Nhấn vào vùng video để bật/tắt tạm dừng
    *   Khi tạm dừng: biểu tượng phát lớn hiển thị ở giữa video
    *   Video lặp lại vô tận khi kết thúc
    *   Thanh tiến trình hiển thị ở cuối video (thanh mảnh)

3. **Điều hướng vuốt**
    *   Vuốt lên: chuyển đến reel tiếp theo (hoạt ảnh trượt lên)
    *   Vuốt xuống: quay lại reel trước đó (hoạt ảnh trượt xuống)
    *   Trên desktop: cuộn chuột lên/xuống thay thế vuốt
    *   Nút lên/xuống trên bàn phím cũng hỗ trợ điều hướng
    *   Hệ thống tải trước 2 reel tiếp theo để chuyển mượt mà

### Lớp thông tin Reel
1. **Thông tin người tạo (Góc dưới trái)**
    *   Ảnh đại diện người tạo (hình tròn, 40x40px)
    *   Tên hiển thị người tạo (chữ đậm, trắng)
    *   Nút "Theo dõi" bên cạnh tên (hiển thị nếu chưa theo dõi)
    *   Nếu đã theo dõi: hiển thị "Đang theo dõi" thay vì "Theo dõi"

2. **Mô tả (Góc dưới trái, bên dưới thông tin người tạo)**
    *   Văn bản mô tả reel, hiển thị tối đa 2 dòng
    *   Nếu mô tả dài hơn 2 dòng: hiển thị nút "...xem thêm" để mở rộng
    *   Hashtag trong mô tả được liên kết và có thể nhấn (điều hướng đến trang tìm kiếm)

3. **Thông tin âm thanh (Cuối màn hình)**
    *   Biểu tượng nốt nhạc + tên bài nhạc/âm thanh (chữ chạy nếu quá dài)
    *   Nhấn vào tên bài nhạc mở trang hiển thị các reel khác sử dụng cùng âm thanh

### Thanh tương tác (Cạnh phải)
1. **Nút Thích**
    *   Biểu tượng trái tim + số lượt thích
    *   Nhấn để bật/tắt thích (biểu tượng chuyển đỏ khi đã thích)
    *   Nhấn đúp vào vùng video cũng kích hoạt thích (hiệu ứng trái tim bay lên)

2. **Nút Bình luận**
    *   Biểu tượng bong bóng chat + số bình luận
    *   Nhấn để mở bảng bình luận dạng bottom sheet

3. **Nút Chia sẻ**
    *   Biểu tượng chia sẻ + số lượt chia sẻ
    *   Nhấn để mở hộp thoại chia sẻ (tương tự chia sẻ bài viết)

4. **Nút Âm thanh**
    *   Biểu tượng loa để bật/tắt tiếng
    *   Mặc định: có tiếng khi mở Reels

### Bảng bình luận Reel
1. **Bottom Sheet**
    *   Bảng bình luận trượt lên từ cuối màn hình dạng bottom sheet
    *   Chiếm 60% chiều cao màn hình
    *   Video tiếp tục phát phía sau bảng
    *   Vuốt xuống trên bảng để đóng

2. **Nội dung bình luận**
    *   Hiển thị danh sách bình luận (cuộn vô hạn)
    *   Mỗi bình luận: ảnh đại diện, tên, nội dung, thời gian, nút thích, nút trả lời
    *   Ô nhập bình luận cố định ở cuối bảng

### Loại bảng tin Reels
1. **"Dành cho bạn" (Mặc định)**
    *   Bảng tin được cá nhân hóa dựa trên sở thích và lịch sử xem của người dùng
    *   Thuật toán ưu tiên: nội dung có tương tác cao, nội dung từ lĩnh vực giáo dục liên quan, nội dung từ người dùng được theo dõi

2. **"Đang theo dõi"**
    *   Chỉ hiển thị reels từ những người dùng mà người dùng hiện tại đang theo dõi
    *   Sắp xếp theo thứ tự thời gian (mới nhất trước)

3. **Chuyển đổi bảng tin**
    *   Hai tab ở đầu màn hình Reels: "Dành cho bạn" | "Đang theo dõi"
    *   Nhấn tab để chuyển đổi giữa hai bảng tin
    *   Mỗi bảng tin duy trì vị trí cuộn riêng biệt

## Quy tắc nghiệp vụ

### Quy tắc phát video
1. **Tự động phát**
    *   Chỉ reel đang hiển thị trên khung nhìn mới phát — các reel khác tạm dừng
    *   Khi rời khỏi trang Reels, video hiện tại tạm dừng
    *   Quay lại trang Reels sẽ tiếp tục phát video tại vị trí dừng

2. **Tải trước**
    *   Hệ thống tải trước 2 reel tiếp theo và 1 reel trước đó
    *   Chất lượng video tự động điều chỉnh theo tốc độ mạng (ABR - Adaptive Bitrate)

### Quy tắc tương tác
1. **Thích qua nhấn đúp**
    *   Nhấn đúp vào vùng video chỉ thêm lượt thích (không bỏ thích)
    *   Bỏ thích chỉ thực hiện qua nút trái tim trên thanh tương tác
    *   Hiệu ứng trái tim bay lên hiển thị trong 1 giây rồi biến mất

2. **Theo dõi người tạo**
    *   Nhấn "Theo dõi" sẽ theo dõi người tạo ngay lập tức
    *   Nút chuyển thành "Đang theo dõi"
    *   Reels từ người tạo này sẽ xuất hiện trong bảng tin "Đang theo dõi"

### Giới hạn nội dung
1. **Độ dài video**: tối thiểu 3 giây, tối đa 60 giây
2. **Dung lượng tệp**: tối đa 100MB
3. **Định dạng hỗ trợ**: MP4, MOV, WebM
4. **Tỉ lệ khung hình**: 9:16 (dọc) được khuyến nghị

## Luồng xử lý

### Luồng xem Reels
```
Người dùng nhấn "Reels" trên thanh điều hướng bên trái
    → Giao diện chuyển sang chế độ toàn màn hình
    → Reel đầu tiên trong bảng tin "Dành cho bạn" tự động phát
    → Thanh tương tác hiển thị ở cạnh phải
    → Thông tin người tạo và mô tả hiển thị ở góc dưới trái
    → Người dùng vuốt lên để xem reel tiếp theo
    → Reel hiện tại trượt lên, reel mới trượt vào và tự động phát
    → Người dùng nhấn vào video để tạm dừng/tiếp tục
```

### Luồng bình luận trên Reel
```
Người dùng nhấn biểu tượng bình luận trên thanh tương tác
    → Bottom sheet bình luận trượt lên
    → Video tiếp tục phát phía sau bảng
    → Người dùng đọc bình luận hiện có (cuộn vô hạn)
    → Người dùng nhập bình luận trong ô nhập
    → Người dùng nhấn gửi
    → Bình luận xuất hiện ở đầu danh sách, số đếm tăng
    → Người dùng vuốt xuống trên bảng để đóng
```

### Luồng theo dõi người tạo từ Reel
```
Người dùng xem reel từ người tạo chưa theo dõi
    → Nút "Theo dõi" hiển thị bên cạnh tên người tạo
    → Người dùng nhấn "Theo dõi"
    → Nút chuyển thành "Đang theo dõi"
    → Người tạo xuất hiện trong danh sách đang theo dõi
    → Bảng tin "Đang theo dõi" giờ bao gồm reels từ người tạo này
```

Link thiết kế:
