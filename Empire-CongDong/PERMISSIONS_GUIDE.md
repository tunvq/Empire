# Hướng Dẫn Quyền Hạn (Permissions Guide)

## Mục Lục
1. [Tổng Quan](#tổng-quan)
2. [Bảng Quyền Hạn Chi Tiết](#bảng-quyền-hạn-chi-tiết)
3. [Giải Thích Khóa Logic](#giải-thích-khóa-logic)
4. [Bảng Vai Trò (Role)](#bảng-vai-trò-role)
5. [Điều Kiện & Hành Động](#điều-kiện--hành-động)

---

## Tổng Quan

Hệ thống quản lý quyền hạn là nền tảng điều chỉnh những gì mỗi vai trò (role) có thể làm trên nền tảng. Hệ thống được tổ chức thành các nhóm chức năng chính:

- **Auth** (Xác thực): Đăng ký, đăng nhập
- **Access** (Truy cập): Xem public, private, sub-private
- **Content** (Nội dung): Tạo bài viết, bình luận, tải file
- **Interaction** (Tương tác): Like, share, upvote
- **Group** (Nhóm): Tạo nhóm, tham gia, duyệt thành viên
- **Q&A** (Hỏi & Đáp): Đặt câu hỏi, trả lời, upvote
- **Material** (Tài liệu): Tải tài liệu, xem tài liệu
- **Reel** (Video ngắn): Xem video, tạo video
- **Course** (Khóa học): Xem khóa học, đăng ký khóa học
- **Notification** (Thông báo): Nhận thông báo
- **Admin** (Quản lý): Quản lý người dùng, nội dung
- **System** (Hệ thống): Cấu hình hệ thống

### Vai Trò (Roles)

Có **10 vai trò** chính trong hệ thống, từ cơ bản đến cao cấp:
1. **Guest** - Khách vãng lai (chưa đăng nhập)
2. **NonPaid User** - Người dùng miễn phí
3. **Paid User** - Người dùng thanh toán
4. **Collaborator** - Cộng tác viên
5. **Member** - Thành viên nhóm
6. **Mentor** - Người hướng dẫn
7. **Moderator** - Người kiểm duyệt
8. **Group Admin** - Quản lý nhóm
9. **Admin** - Quản lý hệ thống
10. **Super Admin** - Quản trị viên cao cấp

### Quy Tắc Chung

- Quyền được **kế thừa từ trên xuống**: Admin > Moderator > Mentor > Collaborator > Paid User > NonPaid User > Guest
- Một số quyền được **kiểm soát bởi config hệ thống** (System Config)
- Một số quyền được **phân quyền theo tình cảnh** (Context-based): Group, Sub-private, Collaborator per post, etc.
- Mentor, Moderator và Collaborator là các **vai trò hoạt động** (Active Roles) với nhiều trách nhiệm

---

## Bảng Quyền Hạn Chi Tiết

| Nhóm Quyền | Permission | Guest | NonPaid User | Paid User | Collaborator | Member | Mentor | Moderator | Group Admin | Admin | Super Admin | GIẢI NGHĨA |
|-----------|-----------|-------|-------------|-----------|---------|--------|--------|-----------|-----------|-------|-----------|-----------|
| **Auth** | Register | TRUE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | Khỉ check quyền, system đi theo thứ tự |
| Auth | Login | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | Check quyền (check quản lý user) |
| **Access** | View Public | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | C001 |
| Access | View Private | FALSE | FALSE | FALSE | C002 | C002 | C002 | C062 | C062 | TRUE | TRUE | C002 |
| Access | Create Post | FALSE | TRUE | TRUE | FALSE | FALSE | C003 | C062 | C062 | TRUE | TRUE | C003 |
| Access | View Sub-private | FALSE | FALSE | FALSE | FALSE | C002 | C002 | C062 | C062 | TRUE | TRUE | C005 |
| **Content** | Create Post | FALSE | TRUE | TRUE | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | C003 |
| Content | Comment | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| Content | Reply Comment | FALSE | TRUE | TRUE | C006 | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | C006 |
| Content | Upload File | FALSE | FALSE | TRUE | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | C004 |
| **Interaction** | Like | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| Interaction | Share | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| **Group** | Create Group | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | - |
| Group | Join Group | FALSE | TRUE | TRUE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | - |
| Group | Approve Member | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | TRUE | TRUE | - |
| Group | Remove Member | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | TRUE | TRUE | - |
| Group | Assign Sub-private | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | TRUE | TRUE | - |
| **Q&A** | Ask Question | FALSE | TRUE | TRUE | TRUE | TRUE | C005 | TRUE | TRUE | TRUE | TRUE | - |
| Q&A | Answer | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| Q&A | Upvote | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| **Material** | Upload Material | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | - |
| Material | View Material | FALSE | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| **Reel** | View Reel | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| Reel | Create Reel | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | - |
| **Course** | View Course | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| Course | Register Course | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| **Notification** | Receive Notification | FALSE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | TRUE | - |
| **Admin** | Manage User | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | - |
| Admin | Manage Content | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | TRUE | TRUE | TRUE | - |
| **System** | Config System | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE | - |

---

## Giải Thích Khóa Logic Quyền Hạn

Hệ thống quản lý quyền hạn tuân theo quy trình kiểm tra thứ tự (Sequential Check Process):

### Quy Trình Kiểm Tra Quyền (Permission Check Workflow)

Khi người dùng yêu cầu truy cập, hệ thống kiểm tra theo thứ tự sau:

| Thứ Tự | Kiểm Tra | Mã | Điều Kiện | Hành Động | Ghi Chú |
|-------|---------|-----|---------|---------|--------|
| Khi check quyền, system đi theo thứ tự | - | **CD01** | **View Private** | Người dùng = Paid + Trạng thái được Admin chấp nhận | Allow | Kiểm tra trạng thái người dùng |
| 1 | Check login (Guest hay User) | **CD02** | **View Sub-private** | member_id ∈ sub_private_members | Allow | Không phủ thuộc Paid, chỉ phụ thuộc Admin assign |
| 2 | Check Paid status | **CD03** | **Create Post** | system.config.allow_mentor_post = true | Allow | Có thể bất hạn limit size |
| 3 | Check Admin approval | **CD04** | **Upload File** | system.config.allow_mentor_upload = true | Allow | Nên kèm limit size |
| 4 | Check Group membership | **CD05** | **Ask Question** | system.config.allow_mentor_ask = true | Allow | Recommend: luôn bật |
| 5 | Check Sub-private membership | - | - | - | - | - |

### Các Khóa Logic Chính

1. **Private Access (Truy cập riêng tư)**
   - `Paid User + Admin Approval → View Private`
   - Người dùng phải đã thanh toán VÀ được admin chấp nhận

2. **Sub-private Access (Truy cập bán riêng)**
   - `Member_id ∈ Sub_private_members → View Sub-private`
   - Chỉ phụ thuộc vào Admin assign, không liên quan Paid status
   - Được gán bởi Group Admin hoặc Mentor

3. **Group Membership (Thành viên nhóm)**
   - `User ∈ Group Members and Status = Approved → Group Permissions`
   - Người dùng phải là thành viên đã được duyệt trong nhóm

4. **Mentor/Moderator Actions (Hành động nâng cao)**
   - Mentor, Moderator, Group Admin có thể thực hiện các hành động quản lý
   - Được phân biệt qua role và context (group hoặc system-level)

---

## Bảng Vai Trò (Role)

| Role | Tên Đầy Đủ | Thành Viên | Chức Năng Chính | Đối Tượng | Phạm Vi Quyền | Trách Nhiệm |
|------|-----------|---------|--------|--------|-----------|--------|
| **Guest** | Khách vãng lai | Người xem (chưa đăng nhập) | Xem nội dung công khai | Người chưa có tài khoản | Chỉ xem Public content | Tăng traffic, khám phá nền tảng |
| **NonPaid User** | Thành viên miễn phí | Người dùng tự do | Xem nội dung free, khôi động tương tác | Đã đăng ký nhưng chưa mua khóa học | View Public + Comment + Like + Share | Tham gia cộng đồng, phát triển kiến thức |
| **Paid User** | Học viên | Người học trả phí | Học khóa học, truy cập nội dung riêng | Đã đăng ký + mua khóa học | View Private + Upload File + Create Post | Doanh thu chính, nâng cao chất lượng |
| **Collaborator** | Cộng tác viên | Người cộng tác nội dung | Hỗ trợ quản lý bài post, reply comment có giới hạn | Được tạo với role Collaborator khi tạo user | Reply Comment (tối đa 2 CTV/post) + View Private | Nâng cao nội dung, hỗ trợ cộng đồng (Active Role) |
| **Member** | Thành viên nhóm | Người học trong group | Học trong nhóm cụ thể | Người có chuyên môn hoặc tham gia group | Quyền trong group + Sub-private | Gìn giữ nhóm, hỗ trợ thành viên |
| **Mentor** | Người hướng dẫn | Người hướng dẫn học viên | Hướng dẫn, duyệt bài, báo cáo | Người được gán làm Mentor | Xóa thành viên sai, duyệt member, xử lý report | Người hành động (Active Role) |
| **Moderator** | Người kiểm duyệt | Người quản lý nội dung | Kiểm duyệt bài viết, quản lý thành viên | Người quản lý hệ thống | Quản lý member, content, xử lý config | Người quản lý (Active Role) |
| **Group Admin** | Quản lý nhóm | Người quản lý group | Quản lý thành viên & nội dung nhóm | Người quản lý hệ thống | Quản lý member nhóm, nội dung nhóm | Quản lý nhóm (Active Role) |
| **Admin** | Quản lý hệ thống | Team vận hành (Admin) | Quản lý toàn bộ hệ thống | Quản lý hệ thống | Quản lý hầu hết, ngoại trừ config hệ thống | Team vận hành quản lý |
| **Super Admin** | Quản trị viên cao cấp | Team vận hành cấp cao | Vận hành toàn bộ và cấu hình hệ thống | Quản trị cao nhất | Toàn quyền hệ thống + Config System | Vận hành tồn bộ platform |

---

## Điều Kiện & Hành Động

### Mã Điều Kiện (Condition Codes)

#### Mã Kiểm Tra Workflow (CD - Check Dispatch)

| Mã | Tên | Mô Tả | Công Thức / Điều Kiện |
|---|---|---|---|
| **CD01** | View Private | Kiểm tra quyền view nội dung riêng tư | `user.paid = true AND user.status = 'accepted_by_admin'` |
| **CD02** | View Sub-private | Kiểm tra quyền view sub-private | `user_id ∈ sub_private_members` |
| **CD03** | Create Post | Kiểm tra quyền tạo bài viết | `system.config.allow_mentor_post = true` (nếu Mentor) |
| **CD04** | Upload File | Kiểm tra quyền tải file | `system.config.allow_mentor_upload = true` (nếu Mentor) |
| **CD05** | Ask Question | Kiểm tra quyền đặt câu hỏi | `system.config.allow_mentor_ask = true` (nếu Mentor) |
| **CD06** | CTV Reply Comment Limit | Kiểm tra giới hạn CTV reply comment | `COUNT(collaborators_reply_on_post) < 2 AND user.role = 'Collaborator'` |

#### Mã Quyền Sử Dụng (C - Content/Context)

| Mã | Tên | Mô Tả | Áp Dụng Cho |
|---|---|---|---|
| **C001** | View Public | Xem công khai | Tất cả người dùng |
| **C002** | Member/Mentor/Collaborator Check | Kiểm tra theo Member, Mentor hoặc Collaborator | Member, Mentor, Collaborator |
| **C003** | Create Post by Mentor | Tạo bài viết (Mentor) | Mentor có config cho phép |
| **C004** | Upload File by Mentor | Tải file (Mentor) | Mentor có config cho phép |
| **C005** | Ask Question by Mentor | Đặt câu hỏi (Mentor) | Mentor có config cho phép |
| **C006** | CTV Comment Reply Limit | Reply comment với giới hạn 2 CTV/post | Collaborator có quyền reply limited |
| **C062** | Moderator/Group Admin | Quyền Moderator hoặc Group Admin | Moderator, Group Admin |

### Hành Động (Action)

| Action | Mô Tả |
|---|---|
| Allow | Cho phép thực hiện hành động |
| Block | Chặn hành động |
| Recommend | Đề xuất (nên làm) |

---

## Ghi Chú Quan Trọng

### Quy Tắc Kế Thừa Quyền

- **Paid User**: Người dùng đã thanh toán có quyền truy cập mở rộng, bao gồm View Private Content
- **Collaborator**: Người dùng được tạo với role Collaborator, có quyền reply comment trên bài post với giới hạn 2 CTV/post (Mentor/Group Admin quyết định CTV nào được gán reply trên bài nào)
- **Member (Group)**: Thành viên trong nhóm cụ thể có quyền nhất định được xác định bởi Group Admin
- **Mentor**: Người hướng dẫn có quyền xem, duyệt bài viết và báo cáo vi phạm. Một số quyền được kiểm soát qua System Config
- **Moderator**: Người kiểm duyệt nội dung toàn hệ thống, có thể xóa bài sai và duyệt thành viên
- **Admin**: Có toàn quyền ngoại trừ cấu hình hệ thống (Config System)
- **Super Admin**: Có quyền cao nhất, có thể quản lý toàn bộ hệ thống bao gồm cấu hình hệ thống

### Các Vai Trò "Active" (Hoạt Động)

Bốn vai trò sau có trách nhiệm **quản lý tích cực** trong hệ thống:
- **Collaborator**: Hỗ trợ quản lý bài post, reply comment có giới hạn (max 2 CTV/post), nâng cao quality của nội dung
- **Mentor**: Hướng dẫn học viên, duyệt bài viết, xử lý vi phạm trong nhóm
- **Moderator**: Kiểm duyệt nội dung, quản lý thành viên toàn hệ thống
- **Group Admin**: Quản lý thành viên và nội dung trong nhóm cụ thể

### Context-Based Permissions (Quyền được phân quyền theo ngữ cảnh)

- **Sub-private Content**: Chỉ được gán bởi Admin/Group Admin, không liên quan đến Paid status
- **Group Permissions**: Phụ thuộc vào việc user được duyệt tư cách thành viên nhóm
- **Collaborator Permissions**: 
  - Role Collaborator được tạo khi tạo user với role = "Collaborator"
  - Mentor hoặc Group Admin **gán** Collaborator nào được reply comment trên bài post nào (max 2 CTV/post)
  - Collaborator được gán có quyền view private content của post đó để reply hiệu quả
  - Khi CTV reply, hệ thống ghi nhận trong danh sách reply_collaborators của post
  - Nếu đã có 2 CTV reply → CTV khác không thể reply (Block) cho tới khi có CTV được gỡ khỏi post
- **Mentor Permissions**: Một số quyền được kiểm soát bởi System Config (allow_mentor_post, allow_mentor_upload, etc.)

### System Config Controls (Kiểm soát qua cấu hình hệ thống)

Những quyền sau được kiểm soát bởi cấu hình hệ thống và có thể được bật/tắt:
- `system.config.allow_mentor_post` - Cho phép Mentor tạo bài viết
- `system.config.allow_mentor_upload` - Cho phép Mentor tải file
- `system.config.allow_mentor_ask` - Cho phép Mentor đặt câu hỏi

### Quy Tắc Collaborator (Cộng Tác Viên)

**Giới Hạn Reply Comment trên Bài Post (2-CTV Rule)**

1. **Tạo Role Collaborator**: Admin tạo user với role = "Collaborator" khi khởi tạo tài khoản
2. **Gán CTV cho Post**: Mentor hoặc Group Admin **gán** 1 hoặc nhiều CTV để reply comment trên bài post cụ thể
3. **Kiểm Tra Giới Hạn**: 
   - Nếu **< 2 CTV** đã reply comment trên post → Cho phép CTV reply (Allow)
   - Nếu **= 2 CTV** đã reply comment trên post → Chặn CTV khác reply (Block)
4. **Quyền Truy Cập**: Collaborator (được gán trên post) được view Private content của post để reply hiệu quả
5. **Quản Lý**: Group Admin hoặc Mentor có thể thay đổi danh sách CTV được gán trên post bất kỳ lúc nào
6. **Thực Hiện**: Khi CTV reply, hệ thống ghi nhận CTV đó trong danh sách reply_collaborators của post, không cho phép CTV thứ 3 reply nếu đã có 2 CTV

**Ví Dụ**:
- Post A: Mentor gán CTV1 và CTV2 để reply (max 2)
- CTV1 reply comment → Ghi nhận vào danh sách reply_collaborators
- CTV2 reply comment → Ghi nhận vào danh sách reply_collaborators (đầy 2 CTV)
- CTV3 cố reply comment → System Block, vì Post A đã có 2 CTV reply
- Nếu Mentor gỡ CTV1 khỏi post → CTV1 không còn quyền reply, CTV3 có thể reply

---

**Cập nhật lần cuối**: 2026-04-11
