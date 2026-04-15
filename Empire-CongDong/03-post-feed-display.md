# Hiển thị bảng tin bài viết

## Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
| --- | --- | --- |
| 1.0 | 2026-04-10 | Tạo tài liệu ban đầu |

## Tổng quan
Tính năng này hiển thị bài viết ở dạng bảng tin cuộn được trong nhiều ngữ cảnh: trang cá nhân, trang nhóm và kết quả tìm kiếm. Mỗi bài viết được hiển thị dưới dạng component PostCard chứa thông tin tác giả, nội dung, phương tiện đính kèm, tệp đính kèm, số lượt tương tác, số bình luận và các nút hành động. Bảng tin hỗ trợ cuộn vô hạn để duyệt nội dung liền mạch.

## Quyền truy cập

**Vai trò & Mapping Hệ Thống (PERMISSIONS_GUIDE v1.0):**

| Tiếng Việt | System Role | View Feed | View Details | Scope |
|----------|------------|-----------|--------------|-------|
| Học sinh | NonPaid User | ✅ Public only | ✅ Public | Public Hall |
| Học sinh | Paid User | ✅ Public + approved private | ✅ Public + private | Public + Private (approved) |
| Giáo viên | Mentor | ✅ Public + group-scoped | ✅ Public + group | Public + Groups (teacher-led) |
| Quản trị viên | Admin, Super Admin | ✅ All posts | ✅ All posts | System-wide (audit) |

**Điều kiện truy cập:**
- ✅ NonPaid User và cao hơn: Xem các feed tương ứng với role
- ✅ Member ⭐ (group context): Xem group-scoped posts
- ✅ Collaborator ⭐: Xem posts assigned to them (for reply context)
- ❌ Guest: Chỉ xem public posts (Phase 2)

**Điểm truy cập:**
- Hiển thị tự động trên tab "Sách chung" trang cá nhân
- Nội dung chính trang nhóm (group feed)
- Bảng tin trang chủ (main hall)

## Chức năng chính

### Cấu trúc thẻ bài viết (PostCard)
1. **Phần đầu bài viết**
    *   Hiển thị ảnh đại diện tác giả (hình tròn, 40x40px) bên trái
    *   Bên cạnh ảnh đại diện: tên hiển thị tác giả (có thể nhấn — điều hướng đến trang cá nhân tác giả)
    *   Bên dưới tên: huy hiệu vai trò nếu có (ví dụ: "Quản trị viên") hiển thị dạng chip có màu
    *   Căn phải: dấu thời gian tương đối (ví dụ: "2 giờ trước", "Hôm qua", "15/03/2026")
    *   Biểu tượng menu ba chấm (⋯) cho tùy chọn bài viết (báo cáo, lưu, xóa nếu là chủ sở hữu)

2. **Nội dung bài viết**
    *   Nội dung văn bản hiển thị bên dưới phần đầu với đầy đủ định dạng (xuống dòng được giữ nguyên)
    *   Văn bản dài bị cắt ngắn sau 300 ký tự với liên kết "Xem thêm"
    *   Nhấn "Xem thêm" sẽ mở rộng toàn bộ văn bản ngay tại chỗ mà không điều hướng trang

3. **Hiển thị phương tiện đính kèm**
    *   **Một hình ảnh**: hiển thị toàn chiều rộng thẻ với tỷ lệ khung hình được giữ nguyên
    *   **Nhiều hình ảnh (2-4)**: hiển thị dạng lưới (2 cột)
    *   **Nhiều hình ảnh (5+)**: 4 ảnh đầu hiển thị dạng lưới, ô cuối cùng hiển thị "+N" cho biết số ảnh còn lại
    *   Nhấn vào bất kỳ hình ảnh nào sẽ mở trình xem ảnh toàn màn hình với nút điều hướng trước/sau
    *   **Video**: hiển thị dạng ảnh thu nhỏ với nút phát ở giữa; nhấn vào sẽ phát video ngay tại chỗ

4. **Hiển thị tệp tài liệu đính kèm**
    *   Mỗi tệp tài liệu hiển thị dạng thẻ bên dưới khu vực nội dung
    *   Thẻ tài liệu hiển thị: biểu tượng loại tệp (PDF/DOCX/ZIP), tên tệp gốc, dung lượng (định dạng: "2.5 MB"), và nhãn loại tệp
    *   Nhấn vào thẻ tài liệu sẽ bắt đầu tải tệp xuống
    *   Nhiều tài liệu xếp chồng theo chiều dọc

5. **Hiển thị thẻ gắn/nhãn**
    *   Nếu bài viết có thẻ gắn, chúng xuất hiện dạng huy hiệu có màu phía trên tiêu đề bài viết
    *   Thẻ "KINH NGHIỆM" hiển thị nền vàng
    *   Thẻ "TÀI LIỆU" hiển thị nền xanh dương
    *   Thẻ gắn có thể nhấn và điều hướng đến kết quả tìm kiếm được lọc theo thẻ đó

### Thanh tương tác bài viết
1. **Hiển thị lượt tương tác**
    *   Phía trái thanh tương tác hiển thị biểu tượng emoji tương tác và tổng số lượt tương tác
    *   Nhấn vào số lượt tương tác sẽ mở hộp thoại liệt kê người dùng đã tương tác

2. **Số bình luận**
    *   Hiển thị "[N] bình luận" bên cạnh khu vực tương tác
    *   Nhấn vào số đếm sẽ cuộn đến hoặc mở rộng phần bình luận

3. **Các nút hành động**
    *   Ba nút hành động hiển thị thành hàng ngang bên dưới thanh tương tác:
        *   "Thích" — bật/tắt lượt tương tác
        *   "Bình luận" — mở rộng phần bình luận và focus vào ô nhập
        *   "Chia sẻ" — mở hộp thoại Chia sẻ bài viết

4. **Số lượt xem (Tùy chọn)**
    *   Nếu được bật, hiển thị số lượt xem dạng "[N] lượt xem" trong khu vực tương tác
    *   Số lượt xem tăng khi người dùng cuộn bài viết vào vùng nhìn thấy được hơn 2 giây

### Thẻ bài viết nổi bật (Bố cục thay thế)
1. **Cấu trúc bài viết nổi bật**
    *   Sử dụng trong kết quả tìm kiếm và bảng tin được chọn lọc
    *   Bố cục: phía trái chứa nội dung văn bản, phía phải chứa ảnh thu nhỏ
    *   Hiển thị: huy hiệu thẻ gắn (trên cùng), dấu thời gian, tiêu đề bài viết (chữ đậm lớn), văn bản xem trước (mô tả cắt ngắn), tên tác giả, số bình luận, và số lượt xem
    *   Nhấn vào thẻ sẽ điều hướng đến trang chi tiết bài viết

### Hành vi bảng tin
1. **Cuộn vô hạn**
    *   Hệ thống tải 10 bài viết mỗi lần
    *   Khi người dùng cuộn đến vị trí cách cuối bảng tin 200px, hệ thống kích hoạt tải lô tiếp theo
    *   Biểu tượng tải xoay hiển thị ở cuối trong quá trình lấy dữ liệu
    *   Khi không còn bài viết, hệ thống hiển thị: "Bạn đã xem hết bài viết"

2. **Kéo để làm mới (Di động)**
    *   Trên khung nhìn di động, kéo xuống trên bảng tin sẽ kích hoạt làm mới
    *   Hệ thống lấy các bài viết mới nhất và thêm vào đầu bảng tin

## Quy tắc nghiệp vụ

### Kiểm soát Quyền Hạn Theo Vai Trò (Role-Based Access Control)

**Rule 1: Viewing Permissions by Feed Type**

| Feed Type | NonPaid User | Paid User | Mentor | Member ⭐ | Admin |
|-----------|-------------|-----------|--------|----------|-------|
| **Public Hall** | ✅ Public posts | ✅ Public posts | ✅ Public posts | ❌ NO | ✅ All |
| **Private Hall** | ❌ NO | ✅ Private posts (owner only) | ✅ Private posts (owner + groups) | ❌ NO | ✅ All |
| **Group Feed** | ✅ If member | ✅ If member | ✅ If member + leader | ✅ YES (scope) | ✅ All |
| **Sub-private** | ❌ NO | ❌ No (unless Member) | ❌ NO | ✅ YES (member-scoped) | ✅ YES |
| **Search Results** | ✅ Public only | ✅ Public + own | ✅ Public + own + group | ✅ Group-scoped | ✅ All |

**Rule 2: Post Card Details By Role**

| Detail | NonPaid | Paid | Mentor | Member | Admin |
|--------|---------|------|--------|--------|-------|
| **Author info** | ✅ Show | ✅ Show | ✅ Show | ✅ Show | ✅ Show |
| **Role badge** | ✅ All | ✅ All | ✅ Mentor badge | ✅ Member badge | ✅ All |
| **Collaborator badge** ⭐ | ❌ NO | ❌ NO | ✅ Show | ✅ Show | ✅ Show |
| **Reactions (like/comment)** | ✅ View all | ✅ View all | ✅ View all | ✅ View | ✅ View all |
| **Edit/Delete menu** | ✅ Own post only | ✅ Own post only | ✅ Own post only | ✅ Own post only | ✅ Any post |
| **Report/Flag** | ✅ Can flag | ✅ Can flag | ✅ Can flag | ✅ Can flag | ✅ Can flag |

**Rule 3: Pagination & Infinite Scroll**

- **NonPaid User**: Load 10 posts/batch (public only)
- **Paid User**: Load 10 posts/batch (public + own private)
- **Mentor**: Load 10 posts/batch (public + group-led)
- **Member** ⭐: Load 10 posts/batch (group-scoped context)
- **Admin**: Load 10 posts/batch (all, audit access)

**Rule 4: Real-time Updates**

- ✅ All authenticated users: Real-time like/comment count updates (via WebSocket)
- ✅ All users: Reaction notifications (for posts they can view)
- ✅ Admin: System-wide real-time monitoring

### Quy tắc hiển thị nội dung
1. **Định dạng dấu thời gian**
    *   < 1 phút: "Vừa xong"
    *   1-59 phút: "[N] phút trước"
    *   1-23 giờ: "[N] giờ trước"
    *   1-6 ngày: "[N] ngày trước"
    *   7+ ngày: Định dạng đầy đủ "DD/MM/YYYY"
    *   Dấu thời gian cập nhật tự động mỗi 60 giây mà không cần tải lại trang

2. **Cắt ngắn văn bản**
    *   Bài viết vượt quá 300 ký tự bị cắt ngắn với "... Xem thêm"
    *   "Xem thêm" mở rộng ngay tại chỗ; sau khi mở rộng, hiển thị liên kết "Thu gọn"
    *   Cắt ngắn giữ nguyên ranh giới từ — hệ thống không cắt giữa từ

3. **Tải tệp xuống**
    *   Tài liệu được tải xuống qua URL có chữ ký với thời hạn 15 phút
    *   Tên tệp tải xuống khớp với tên tệp gốc đã tải lên
    *   Hệ thống theo dõi số lượt tải xuống mỗi tệp

### Quy tắc sắp xếp bảng tin
1. **Bảng tin trang cá nhân (Personal Profile Feed)**
    - NonPaid/Paid User: Sắp xếp theo ngày tạo giảm dần (mới nhất trước), chỉ các bài viết công khai
    - Mentor: Sắp xếp theo ngày tạo giảm dần, bao họm bài viết nhóm
    - Own profile: Hiển thị cả nhân với + riêng tư

2. **Bảng tin nhóm (Group Feed)**
    - Tất cả members: Sắp xếp theo ngày tạo giảm dần (mới nhất trước)
    - Group Admin/Mentor: Có thể pin posts quan trọng lên đầu
    - Moderator/Admin: Có thể ẩn/xóa posts vi phạm

3. **Kết quả tìm kiếm (Search Results)**
    - Mặc định: Sắp xếp theo điểm phù hợp (relevance score)
    - Tùy chọn: Người dùng có thể chọn sắp xếp theo ngày
    - Lọc role-based: NonPaid sees public only; Paid/Mentor/Admin see more

### Kiểm soát quyền hiển thị
1. **Bài viết công khai** (Public visibility)
    *   Hiển thị cho: NonPaid User, Paid User, Mentor, Admin (all authenticated)
    *   Xuất hiện trong: Public Hall feed, search results, group feed, profile feed
    *   Visible to: Tất cả người dùng đã xác thực

2. **Bài viết riêng tư** (Private visibility)
    *   Hiển thị cho: Chỉ tác giả (trên trang cá nhân của họ), Admin/Super Admin (audit)
    *   Không xuất hiện trong: Public Hall, group feed, search results
    *   Visible to: Owner + Admin only

3. **Bài viết nhóm** (Group-scoped visibility)
    *   Hiển thị cho: Thành viên nhóm, Mentor (if group leader), Admin
    *   Visible to: Group members + Admin (audit)
    *   **Member** ⭐ **ACTIVE ROLE**: Chỉ thấy posts trong group scope được assign (context-based)
    *   Không xuất hiện trong: Public Hall (unless group is public)

4. **Bài viết Sub-private** (Member-scoped context)
    *   Hiển thị cho: Chỉ Member được assign (group-scoped), Admin
    *   Visible to: Assigned members + Admin (audit)
    *   Logic: `member_id ∈ sub_private_members` (assigned by Group Admin/Mentor)
    *   Phức tạp: Require context-based access control (Phase 1: simplified)

## Luồng xử lý

### Luồng tải bảng tin
```
Người dùng điều hướng đến trang có bảng tin
    → Hệ thống xác định ngữ cảnh bảng tin (trang cá nhân, nhóm, hoặc trang chủ)
    → Hệ thống lấy lô đầu tiên gồm 10 bài viết với thông tin tác giả, phương tiện, và số lượt tương tác
    → Bài viết hiển thị dưới dạng component PostCard trong khu vực bảng tin
    → Người dùng cuộn xuống
    → Khi vị trí cuộn đạt cách cuối 200px
        → Hệ thống lấy lô tiếp theo gồm 10 bài viết
        → Biểu tượng tải hiển thị trong quá trình lấy dữ liệu
        → Bài viết mới được thêm vào bảng tin
    → Khi không còn bài viết
        → Hiển thị thông báo "Bạn đã xem hết bài viết"
```

### Luồng tương tác bài viết
```
Người dùng thấy bài viết trên bảng tin
    → Người dùng nhấn "Thích" → lượt tương tác bật/tắt, số đếm cập nhật ngay lập tức (giao diện lạc quan)
    → Người dùng nhấn "Bình luận" → phần bình luận mở rộng, ô nhập được focus
    → Người dùng nhấn "Chia sẻ" → hộp thoại Chia sẻ bài viết mở ra
    → Người dùng nhấn vào tệp tài liệu đính kèm → bắt đầu tải tệp xuống
    → Người dùng nhấn vào hình ảnh → trình xem ảnh toàn màn hình mở ra
```

Link thiết kế:
