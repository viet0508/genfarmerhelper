---
title: "A4 · Ngày 1 — Làm chủ phần cứng"
description: "Lớp 1. Sử dụng cơ bản GenFarmer Software để cảm nhận cách phần mềm hoạt động. Xong khi 20/20 máy hiện lên và bấm đèn pin thì máy phản hồi."
---

**Lớp 1 · Boxphone**

> **Câu hỏi của ngày:** Máy có nghe lời tôi không?
>
> Ngày 1: sử dụng cơ bản app GenFarmer Software để cảm nhận cách hoạt động của phần mềm.

**Tải phần mềm → Set up box + router → Sử dụng software thủ công cơ bản**

## Các bước

### Tải phần mềm

Tải phần mềm GenFarmer tại [genfarmer.com/download](https://genfarmer.com/download/), cài đặt. _HDSD tr. 1_

### Đăng nhập

Bấm biểu tượng ảnh đại diện, chọn **Login**. Chưa có tài khoản thì đăng ký trước. _HDSD tr. 2–3_

### Chọn cách kết nối theo thiết bị bạn đang có

Đây là chỗ nhiều người hay kẹt nhất, nên đọc kỹ.

| Bạn có                               | Chế độ        | Lý do                                                     |
| ------------------------------------ | ------------- | --------------------------------------------------------- |
| **1 box + GenRouter H3000**          | **USB**       | H3000 chỉ tải được **1 box**; thực tế không kéo nổi 2 box |
| **Mini PC** (kể cả chỉ 1–2 box)      | **OTG**       | Máy dùng mạng của mini PC nên mặc định phải OTG           |
| **Không có mini PC, không có H3000** | OTG hoặc wifi | Linh động tuỳ nhu cầu                                     |

**Chế độ USB — H3000**

Cắm là tự nhận. _HDSD tr. 8_

**Chế độ OTG — mini PC**

1. Thêm hai dải địa chỉ `192.168.4.1–255` và `192.168.5.1–255`.
2. Bấm **Active**.
3. Bấm **Scan**. _HDSD tr. 4–7_

:::note
Ở chế độ OTG, **máy đã tự có mạng** qua mini PC.
:::

**Cắm OTG mà phone vẫn không lên mạng — kiểm tra theo thứ tự:**

1. **Proxy** — proxy có hoạt động không.
2. Proxy ổn thì kiểm tra **giờ trên phone** — sai giờ thì chỉnh lại, có thể chỉnh theo đúng giờ trên PC của bạn.

:::note
HDSD có ba sơ đồ đấu nối nằm liền nhau. Chọn sơ đồ theo bảng ở trên, không cần làm cả ba.
:::

### Sử dụng GenFarmer Software cơ bản thủ công

Mục **Control Center**. _HDSD tr. 4–7_

### Bật wifi tự động cho cả 20 máy

:::note
Xem thao tác trong [playlist video hướng dẫn GenFarmer](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). Hướng dẫn riêng cho bước này sẽ được bổ sung; cần ngay thì [liên hệ hỗ trợ](/vi/lien-he-ho-tro).
:::

### Đổi thời gian hệ thống trên máy

Cho khớp với múi giờ đang dùng — có thể chỉnh theo đúng giờ trên PC của bạn.

:::note
Xem thao tác trong [playlist video hướng dẫn GenFarmer](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). Hướng dẫn riêng cho bước này sẽ được bổ sung; cần ngay thì [liên hệ hỗ trợ](/vi/lien-he-ho-tro).
:::

### Bật tắt đèn pin trên một máy bất kỳ

Đây là bài kiểm tra nhỏ nhất mà rõ ràng nhất: máy phản hồi trong vài giây nghĩa là đường điều khiển đã thông.

:::note
Xem thao tác trong [playlist video hướng dẫn GenFarmer](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). Hướng dẫn riêng cho bước này sẽ được bổ sung; cần ngay thì [liên hệ hỗ trợ](/vi/lien-he-ho-tro).
:::

### Thử đồng bộ thao tác

Bấm trên một máy và xem cả 20 máy cùng làm theo.

:::note
Xem thao tác trong [playlist video hướng dẫn GenFarmer](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). Hướng dẫn riêng cho bước này sẽ được bổ sung; cần ngay thì [liên hệ hỗ trợ](/vi/lien-he-ho-tro).
:::

### Dành 15 phút bấm tay lên vài máy cho quen tay

Bước này trông như phí thời gian nhưng không phải — [Ngày 3](/vi/a2-lo-trinh-mot-tuan/a6-ngay-3-tu-dong) sẽ dựa hoàn toàn vào cảm giác này.

### Tuỳ chọn: thử vài lệnh adb

Nếu bạn có nền kỹ thuật. Không thử cũng không ảnh hưởng gì.

## Xong khi

:::tip
**20 trên 20 máy** hiện trên màn hình, tất cả đều bắt được wifi, và bấm đèn pin thì máy phản hồi.
:::

:::danger
Chưa đạt thì dừng ở đây, **đừng sang Ngày 2**. [Liên hệ hỗ trợ](/vi/lien-he-ho-tro) kèm thông tin: đang dùng mấy box, chế độ USB hay OTG, bấm Scan ra bao nhiêu máy.
:::

## Ba lỗi hay gặp

| ✕ | Lỗi                             | Nguyên nhân / cách xử lý                                                            |
| - | ------------------------------- | ----------------------------------------------------------------------------------- |
| 1 | Bấm Scan không ra máy nào       | Hầu hết là do chưa thêm đủ hai dải địa chỉ, hoặc thêm rồi nhưng quên bấm **Active** |
| 2 | Cắm OTG mà phone không lên mạng | Kiểm tra proxy trước; proxy ổn thì kiểm tra giờ trên phone                          |
| 3 | Dùng H3000 cho 2 box            | H3000 chỉ tải được 1 box. Từ 2 box trở lên cần mini PC và đi đường OTG              |

:::note
Máy tính điều khiển **không bắt buộc phải có wifi** — có thể tắt wifi, nối LAN vẫn dùng bình thường (cả trường hợp H3000 lẫn mini PC). Wifi không áp dụng cho mini PC.
:::

Tiếp theo: [A5 · Ngày 2 — Làm chủ danh tính](/vi/a2-lo-trinh-mot-tuan/a5-ngay-2-danh-tinh)
