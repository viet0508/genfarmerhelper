---
title: "Thuật ngữ"
description: "Các từ xuất hiện trong giáo trình và HDSD, giải thích ngắn theo đúng cách hệ thống GenFarmer dùng."
---

Gặp từ nào chưa rõ trong lúc đọc, tra ở đây rồi quay lại trang đang đọc. Xếp theo bốn lớp của hệ thống — xem [A1 · Bốn lớp hệ thống](/vi/a1-bon-lop-he-thong).

## Lớp 1 · Máy

| Thuật ngữ              | Nghĩa                                                                                                                              | Gặp ở  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Box / Boxphone**     | Thùng phần cứng chứa nhiều điện thoại (thường 20 máy) mua từ GenFarmer.                                                            | A1, A4 |
| **GenFarmer Software** | Phần mềm cài trên máy tính để điều khiển toàn bộ máy trong box. Tải tại [genfarmer.com/download](https://genfarmer.com/download/). | A4     |
| **Control Center**     | Màn hình điều khiển thủ công trong phần mềm: bấm, gõ, thao tác trên từng máy hoặc nhiều máy cùng lúc.                              | A4     |
| **Chế độ USB**         | Cách kết nối khi dùng 1 box với GenRouter H3000. Cắm là tự nhận.                                                                   | A4     |
| **Chế độ OTG**         | Cách kết nối khi dùng mini PC. Cần thêm hai dải địa chỉ, bấm Active rồi Scan. Ở chế độ này máy đã tự có mạng qua mini PC.          | A4     |
| **Dải địa chỉ**        | Hai khoảng địa chỉ mạng `192.168.4.1–255` và `192.168.5.1–255` phải khai báo ở chế độ OTG để phần mềm tìm được máy.                | A4     |
| **Active / Scan**      | Active: kích hoạt dải địa chỉ đã thêm. Scan: quét để tìm máy. Quên Active là lý do phổ biến nhất khiến Scan không ra máy.          | A4     |
| **Device ID**          | Mã định danh của từng máy, hiện ở màn hình chính; dùng để gán máy cho tài khoản trong Account Manager.                             | A5     |
| **APK**                | File cài đặt ứng dụng Android (TikTok, Facebook…). Cài hàng loạt bằng nút Install APK.                                             | A5     |
| **adb**                | Công cụ dòng lệnh của Android để gửi lệnh trực tiếp tới máy. Tuỳ chọn, chỉ dành cho người có nền kỹ thuật.                         | A4     |

## Lớp 2 · Mạng

| Thuật ngữ             | Nghĩa                                                                                                                                          | Gặp ở      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **GenRouter (H3000)** | Router của GenFarmer, cấp cho mỗi máy một đường ra internet riêng. H3000 dùng cho 1 box. Bảng điều khiển tại `192.168.5.1:9000`.               | A1, A4, A5 |
| **Mini PC**           | Máy tính nhỏ dùng thay H3000 khi có từ 2 box trở lên; máy trong box dùng mạng của mini PC (chế độ OTG). Cần dây LAN Cat5/Cat6.                 | A3, A4     |
| **Proxy**             | "Địa chỉ nhà" của một tài khoản trên internet. Mỗi máy / mỗi tài khoản cần một proxy riêng; dùng chung là nguyên nhân tài khoản chết theo cụm. | A5         |
| **Isolate Mode**      | Chế độ trên GenRouter: nếu proxy của một máy chết, cắt mạng máy đó ngay để không lộ địa chỉ thật.                                              | A5         |

## Lớp 3 · Danh tính

| Thuật ngữ                   | Nghĩa                                                                                                                                                 | Gặp ở      |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Tài khoản (account)**     | Tài khoản trên nền tảng (TikTok, Facebook…). Trong hệ thống, tài khoản là một danh tính; proxy là địa chỉ nhà của danh tính đó.                       | A5         |
| **UID \| Password \| 2FA**  | Định dạng mặc định khi nhập tài khoản vào bảng: mã tài khoản, mật khẩu, mã xác thực hai lớp, cách nhau bằng dấu gạch đứng. Đổi được trong mục Custom. | A5         |
| **Account Manager**         | Màn hình quản lý tài khoản: nơi nhập bảng tài khoản, gán Device ID, và (từ Ngày 3) chọn tài khoản nào chạy kịch bản nào.                              | A5, A6     |
| **Xác minh (verification)** | Nền tảng yêu cầu chứng minh tài khoản (mã OTP, ảnh, video…). Bị hỏi xác minh nhiều hơn bình thường là dấu hiệu cần dừng lại.                          | A5, A7     |
| **Nuôi / ngâm tài khoản**   | Giai đoạn 2–4 tuần để tài khoản có thói quen như người thật trước khi dùng cho mục đích chính. Số liệu tăng chậm trong giai đoạn này là bình thường.  | A5, A6, A7 |

## Lớp 4 · Tự động

| Thuật ngữ                         | Nghĩa                                                                                                     | Gặp ở  |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------ |
| **Kịch bản (script)**             | Chuỗi thao tác được ghi lại để máy tự làm, chạy đồng thời trên nhiều máy. Không cần viết mã.              | A6     |
| **Gói tự động (package) / Store** | Bộ kịch bản làm sẵn cho từng nền tảng, tải trong mục Store của phần mềm.                                  | A1, A6 |
| **Auto Login**                    | Công cụ đăng nhập / đăng xuất hàng loạt.                                                                  | A6     |
| **Trust**                         | Công cụ nuôi tài khoản: máy xem, lướt, thích, theo dõi như người thật có sở thích rõ ràng. Chạy 2–4 tuần. | A6     |
| **Boost**                         | Công cụ đẩy tương tác vào một bài đăng cụ thể. Chỉ dùng sau khi đã nuôi đủ.                               | A6     |
| **API key vilao.ai**              | Khoá dùng cho phần bình luận tự động (AI viết bình luận). Chuẩn bị từ Ngày 0.                             | A3, A6 |
| **Lĩnh vực nội dung**             | Chủ đề mà tài khoản được nuôi theo. Chọn sai thì bài đăng không tới đúng người.                           | A7     |

## Chung

| Thuật ngữ         | Nghĩa                                                                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HDSD**          | Hướng dẫn sử dụng GenFarmer bản đầy đủ (141 trang). Giáo trình này chỉ đúng số trang cần mở. Xem thêm [video hướng dẫn sử dụng](https://youtu.be/dWUFV9oCnL0). |
| **Phần A**        | Tên gọi của giáo trình này (trang A1–A7), đánh số riêng để không lệch số trang HDSD.                                                                           |
| **Xong khi**      | Tiêu chí hoàn thành mỗi ngày. Chưa đạt thì ở lại ngày đó.                                                                                                      |
| **Đang cập nhật** | Phần hướng dẫn chi tiết đang được viết thêm. Cần ngay thì [liên hệ hỗ trợ](/vi/lien-he-ho-tro).                                                                    |
