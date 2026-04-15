# Tìm kiếm & Khám phá

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| 1.0 | 2026-04-10 | Tạo tài liệu ban đầu |

## Tổng quan
Tính năng này cho phép người dùng tìm kiếm nội dung trên toàn nền tảng bao gồm bài viết, người dùng, nhóm và tệp. Trải nghiệm tìm kiếm bao gồm thanh tìm kiếm cố định trên thanh header, gợi ý theo thời gian thực, và trang kết quả tìm kiếm chuyên dụng với các tab phân loại và tùy chọn lọc. Tìm kiếm là cơ chế khám phá chính giúp người dùng tìm nội dung giáo dục, kết nối với bạn bè và tham gia các nhóm liên quan.

## Quyền truy cập

**Vai trò & Mapping Hệ Thống (PERMISSIONS_GUIDE v1.0):**

| Tiếng Việt | System Role | Search Access | Search Scope | Results Visible |
|----------|------------|--------------|--------------|-----------------|
| Học sinh | NonPaid User | ✅ YES | Public only | Public posts + users + public groups |
| Học sinh | Paid User | ✅ YES | Public + own | Public + own private posts |
| Giáo viên | Mentor | ✅ YES | Public + groups | Public + led groups + materials |
| Quản trị viên | Admin | ✅ YES | System-wide | All content (audit search) |

**Điều kiện truy cập:**
- ✅ Tất cả người dùng đã xác thực: Có thể tìm kiếm (với giới hạn scope)
- ✅ NonPaid User: Search public content only
- ✅ Paid User: Public + own content
- ✅ Mentor: Public + group-scoped + educational materials
- ✅ Admin: Full system search

**Điểm truy cập:**
- Ô nhập tìm kiếm trên thanh header (tất cả trang)
- Gợi ý theo thời gian thực (autocomplete)
- Trang kết quả tìm kiếm chính khác

## Chức năng chính

### Ô nhập tìm kiếm
1. **Thanh tìm kiếm cố định**
    *   Ô nhập tìm kiếm với biểu tượng kính lúp cố định trên thanh header phía trên
    *   Dòng gợi ý: "Tìm kiếm bài viết, nhóm, người dùng..."
    *   Ô nhập chiếm chiều rộng cố định (400px trên desktop, toàn chiều rộng trên di động)
    *   Nhấn vào ô nhập sẽ focus và hiển thị dropdown gợi ý

2. **Gợi ý tìm kiếm (Autocomplete)**
    *   Khi người dùng gõ, hệ thống hiển thị gợi ý theo thời gian thực trong dropdown bên dưới ô nhập
    *   Gợi ý xuất hiện sau khi người dùng nhập tối thiểu 2 ký tự
    *   Dropdown hiển thị tối đa 8 gợi ý, phân nhóm theo loại:
        *   **Người dùng**: ảnh đại diện + tên (tối đa 3)
        *   **Nhóm**: ảnh đại diện nhóm + tên (tối đa 3)
        *   **Bài viết**: tiêu đề/đoạn xem trước (tối đa 2)
    *   Nhấn vào gợi ý sẽ điều hướng trực tiếp đến mục tương ứng (trang cá nhân, trang nhóm, hoặc trang bài viết)
    *   Gợi ý được debounce 300ms để tránh gọi API quá nhiều

### Trang kết quả tìm kiếm
1. **Hiển thị tổng quan**
    *   Nhấn Enter hoặc biểu tượng tìm kiếm sẽ điều hướng đến trang kết quả tìm kiếm
    *   URL: `/search?q=[từ khóa]`
    *   Trang hiển thị tiêu đề: "Kết quả tìm kiếm cho '[từ khóa]'"
    *   Tổng số kết quả hiển thị bên dưới tiêu đề

2. **Điều hướng tab kết quả**
    *   Kết quả được phân loại trong các tab: "Tất cả", "Bài viết", "Người dùng", "Nhóm", "Tệp"
    *   "Tất cả" là tab mặc định — hiển thị kết quả hỗn hợp từ tất cả loại, sắp xếp theo độ phù hợp
    *   Mỗi tab hiển thị số lượng kết quả dạng badge (ví dụ: "Bài viết (12)")
    *   Chuyển tab không tải lại toàn bộ trang — khu vực nội dung cập nhật động

3. **Hiển thị kết quả bài viết**
    *   Mỗi bài viết hiển thị dạng thẻ nổi bật: huy hiệu thẻ gắn, dấu thời gian, tiêu đề (chữ đậm), đoạn xem trước văn bản với từ khóa được tô sáng, tên tác giả, số bình luận, số lượt xem
    *   Nhấn vào thẻ sẽ điều hướng đến trang chi tiết bài viết

4. **Hiển thị kết quả người dùng**
    *   Mỗi người dùng hiển thị dạng thẻ: ảnh đại diện, tên hiển thị, huy hiệu vai trò, số bạn chung (nếu có)
    *   Nhấn vào thẻ sẽ điều hướng đến trang cá nhân người dùng

5. **Hiển thị kết quả nhóm**
    *   Mỗi nhóm hiển thị dạng thẻ: ảnh đại diện nhóm, tên nhóm, mô tả ngắn, số thành viên, loại nhóm (Công khai/Riêng tư)
    *   Nút "Tham gia" cho nhóm chưa tham gia
    *   Nhấn vào thẻ sẽ điều hướng đến trang nhóm

6. **Hiển thị kết quả tệp**
    *   Mỗi tệp hiển thị: biểu tượng loại tệp, tên tệp, dung lượng, người tải lên, nhóm nguồn
    *   Nhấn sẽ bắt đầu tải tệp xuống

### Bộ lọc và sắp xếp
1. **Tùy chọn sắp xếp**
    *   Dropdown sắp xếp với các tùy chọn: "Phù hợp nhất" (mặc định), "Mới nhất", "Nhiều tương tác nhất"
    *   Tùy chọn sắp xếp áp dụng cho tab đang kích hoạt

2. **Bộ lọc nâng cao (Tương lai)**
    *   Lọc theo khoảng thời gian: "Hôm nay", "Tuần này", "Tháng này", "Tất cả"
    *   Lọc theo nhóm cụ thể
    *   Lọc theo loại tệp

## Quy tắc nghiệp vụ

### Quy tắc tìm kiếm
1. **Giới hạn từ khóa**
    *   Độ dài từ khóa tối thiểu: 2 ký tự
    *   Độ dài từ khóa tối đa: 100 ký tự
    *   Từ khóa được cắt khoảng trắng thừa trước khi xử lý

2. **Phạm vi tìm kiếm**
    *   Tìm kiếm bao gồm: tiêu đề và nội dung bài viết, tên người dùng, tên và mô tả nhóm, tên tệp
    *   Tìm kiếm không bao gồm: bình luận, nội dung bài viết riêng tư, nội dung nhóm riêng tư (trừ khi người dùng là thành viên)

3. **Xếp hạng kết quả**
    *   Điểm phù hợp dựa trên: vị trí khớp từ khóa (tiêu đề có trọng số cao hơn nội dung), độ mới của nội dung, mức độ tương tác (lượt thích, bình luận, lượt xem)
    *   Kết quả trùng lặp chính xác bị loại bỏ

### Hiệu suất
1. **Debounce gợi ý**: 300ms sau lần nhấn phím cuối cùng
2. **Phân trang kết quả**: 10 kết quả mỗi trang, cuộn vô hạn
3. **Cache**: kết quả tìm kiếm được cache 5 phút phía client để tránh gọi API trùng lặp

### Trường hợp không có kết quả
1. **Hiển thị không có kết quả**
    *   Khi không tìm thấy kết quả, hiển thị: "Không tìm thấy kết quả nào cho '[từ khóa]'"
    *   Gợi ý: "Thử tìm với từ khóa khác"
    *   Hiển thị danh sách tìm kiếm phổ biến/xu hướng dạng liên kết có thể nhấn

## Luồng xử lý

### Luồng tìm kiếm thông thường
```
Người dùng nhấn vào ô tìm kiếm trên thanh header
    → Ô nhập được focus, con trỏ nhấp nháy
    → Người dùng bắt đầu gõ từ khóa
    → Sau 2 ký tự, dropdown gợi ý xuất hiện (debounce 300ms)
    → Gợi ý hiển thị theo nhóm (người dùng, nhóm, bài viết)
    → Người dùng nhấn Enter hoặc biểu tượng tìm kiếm
    → Hệ thống điều hướng đến /search?q=[từ khóa]
    → Trang kết quả tải với tab "Tất cả" đang kích hoạt
    → Kết quả hỗn hợp hiển thị theo độ phù hợp
    → Người dùng chuyển tab để lọc theo loại
    → Người dùng áp dụng tùy chọn sắp xếp/lọc khi cần
    → Cuộn vô hạn tải thêm kết quả khi người dùng cuộn
```

### Luồng không có kết quả
```
Người dùng gửi từ khóa tìm kiếm
    → Hệ thống không tìm thấy kết quả phù hợp
    → Trang kết quả hiển thị: "Không tìm thấy kết quả nào cho '[từ khóa]'"
    → Hệ thống hiển thị gợi ý: "Thử tìm với từ khóa khác"
    → Hệ thống hiển thị danh sách tìm kiếm xu hướng/phổ biến dạng liên kết có thể nhấn
```

Link thiết kế:
