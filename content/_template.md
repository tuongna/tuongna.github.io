---
title: "Tiêu đề bài viết"
date: 2026-01-01
displayDate: "Tháng 1, 2026"
description: "Mô tả ngắn gọn cho SEO (~150 ký tự)."
---

*Đoạn mở đầu — hook để người đọc muốn đọc tiếp.*

---

## 01 · Phần 1

Nội dung viết bằng Markdown thông thường.

### Sử dụng Data Card (thống kê)

<div class="data-card">
<div class="stat"><span class="stat-number">-78%</span><span class="stat-label">Mô tả<br>số liệu</span></div>
<div class="stat"><span class="stat-number">+42%</span><span class="stat-label">Mô tả<br>số liệu</span></div>
</div>

### Sử dụng Pullquote (trích dẫn nổi bật)

<div class="pullquote"><p>Câu trích dẫn nổi bật — dùng cho insight quan trọng.</p></div>

### Sử dụng Insight Box (hộp thông tin)

<div class="insight-box">
<p class="insight-label">Điều này có nghĩa gì?</p>
<p>Giải thích ý nghĩa của dữ liệu hoặc luận điểm ở trên.</p>
</div>

### Sử dụng Disclaimer Box (lưu ý)

<div class="disclaimer-box">
<div class="disclaimer-label">Nói thẳng</div>

- Điểm 1 cần lưu ý
- Điểm 2 cần lưu ý
</div>

### Sử dụng Checklist (hành động)

<div class="checklist">Hành động cụ thể cho người đọc</div>

### Sử dụng Timeline (dòng thời gian)

<div class="timeline">
<div class="timeline-item"><div class="timeline-year">2026</div><div class="timeline-text">Sự kiện hoặc dự báo.</div></div>
<div class="timeline-item"><div class="timeline-year">2027-2028</div><div class="timeline-text">Sự kiện tiếp theo.</div></div>
</div>

---

## Nguồn tham khảo

<div class="footnotes">

1. <span id="fn1"></span>Nguồn — Mô tả ngắn. [Link text](https://example.com)

</div>

<!--
=== CHECKLIST TẠO BÀI MỚI ===

1. Tạo file trong 3 thư mục:
   - content/vi/blog/ten-bai-viet.md
   - content/en/blog/ten-bai-viet.md
   - content/ko/blog/ten-bai-viet.md

2. Thêm vào locale files (i18n/locales/vi.json, en.json, ko.json):
   blog.posts[] thêm object:
   { "date": "Tháng X, 2026", "title": "Tiêu đề\nbài viết", "slug": "ten-bai-viet" }

3. Kiểm tra:
   - npm run dev → mở /blog/ten-bai-viet
   - Đổi ngôn ngữ → bài hiển thị đúng
   - SEO: kiểm tra meta tags
-->
