---
title: "A3 · Ngày 0 — Chuẩn bị"
description: "Làm trước khi hàng về tới nơi. Chưa cần cắm điện — chỉ cần có đủ các thứ dưới đây trước khi bắt đầu Ngày 1."
---

Làm trước khi hàng về tới nơi. Ba ngày đầu là ba ngày hào hứng nhất; đừng để chúng trôi qua trong lúc chờ mua proxy.

> **Câu hỏi của ngày:** Tôi cần chuẩn bị sẵn những gì?
>
> Chưa cần cắm điện. Chỉ cần có đủ các mục dưới đây trước khi bắt đầu Ngày 1.

<figure><img src="/images/09-a3-tu-boxphone.jpg" alt="Tủ boxphone GenFarmer" loading="lazy" /><figcaption>Tủ boxphone thật. Đặt nơi thoáng, cách tường khoảng 10 cm, cắm ổ điện riêng.</figcaption></figure>

**Chỗ đặt box + điện riêng → Mạng dây + máy tính điều khiển → Mua sẵn tài khoản + proxy thử → Quay video mở hộp**

## Chuẩn bị

* [ ] **Chỗ đặt box** — phòng thoáng hoặc có điều hoà, cách tường khoảng 10cm cho thoáng bốn mặt. Không đặt dưới sàn, không đặt trong tủ kín, không đặt cạnh cửa sổ nắng.
* [ ] **Nguồn điện riêng** — không cắm chung ổ với điều hoà, lò nướng hay máy giặt. Nên có bộ lưu điện từ 1.000VA để hệ thống không tắt đột ngột khi mất điện. Chuẩn bị sẵn **ổ cắm 3 chấu** nếu chưa có.
* [ ] **Đường mạng có dây** — một cổng trống trên modem cho GenRouter.
* [ ] **Dây LAN** (nếu dùng mini PC) — loại Cat5 hoặc **Cat6 (ưu tiên)**.
* [ ] **Máy tính điều khiển** — **không bắt buộc có wifi**; kết nối bằng LAN vẫn dùng bình thường. Chi tiết cách nối ở bảng dưới.
* [ ] **5 tài khoản và 5 proxy để chạy thử** — mua trước, đừng đợi tới lúc cần. Chưa cần mua 20 tài khoản.
* [ ] **API key vilao.ai** — dùng cho phần bình luận tự động. Mặc định dùng model đã cài sẵn trong script; có thể đổi sang model AI khác trong phạm vi vilao nếu có nhu cầu. Phí khoảng **2% ≈ 50.000 VND**, dùng thoải mái. Đăng ký và lấy key tại [vilao.ai/console](https://vilao.ai/console) — [hướng dẫn từng bước](https://drive.google.com/file/d/1f6s_gKAHptXNBoKldlCpfNDh0cWhd4l2/view?usp=drive_link).
* [ ] **Video mở hộp** — quay lại lúc bóc, giữ nguyên tem. Đây là bằng chứng bảo hành nếu có lỗi từ nhà sản xuất.

### Cách nối máy tính điều khiển

| Bạn dùng            | Cách nối                                                                                                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GenRouter H3000** | PC có wifi thì bắt wifi để dùng. Không có thì nối LAN: **port LAN H3000 → Ethernet PC**, hoặc **LAN của boxphone → Ethernet PC** (trường hợp này nối port LAN H3000 → LAN1 hoặc LAN2 của boxphone, rồi từ LAN còn lại nối vào PC — áp dụng cho box **P30**). |
| **Mini PC**         | Nối LAN. Wifi **không áp dụng** cho mini PC. Laptop không có cổng Ethernet thì chuẩn bị cổng chuyển **USB-to-LAN** hoặc **Type-C-to-LAN**.                                                                                                                   |

:::caution
Trong HDSD (_tr. 30–39_), phần API key vẫn ghi là **"Apple Key"** / Gemini — đó là bản cũ. Hiện hệ thống dùng **API của vilao.ai**; bạn làm theo hướng dẫn ở trang này.
:::

<figure><img src="/images/10-a3-mini-pc.jpg" alt="Mini PC GenRouter" loading="lazy" /><figcaption>Mini PC GenRouter. Nếu dùng mini PC, bắt buộc nối máy tính bằng dây LAN.</figcaption></figure>

## Xong khi

:::tip
Có đủ các mục trên. Chưa cắm điện cũng không sao.
:::

## Ba lỗi hay gặp

| ✕ | Lỗi                                                                                                  | Hậu quả                                             |
| - | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 1 | Đặt box trong tủ kín hoặc dưới gầm bàn cho gọn                                                       | Nhiệt không thoát được, máy tự giảm hiệu năng       |
| 2 | Cắm chung ổ điện với thiết bị công suất lớn                                                          | Hệ thống sập giữa lúc đang chạy                     |
| 3 | Mua mini PC nhưng không chuẩn bị dây LAN, hoặc laptop không có cổng Ethernet mà không có cổng chuyển | Hàng về rồi vẫn chưa nối được máy tính vào hệ thống |

Tiếp theo: [A4 · Ngày 1 — Làm chủ phần cứng](/vi/a2-lo-trinh-mot-tuan/a4-ngay-1-phan-cung)
