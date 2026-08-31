# MBH Backoffice — HTML Mockup Spec (สำหรับ agent ทุกตัว)

เป้าหมาย: redesign UI backoffice "บ้านมือถือ MOBILE HOME (MBH)" เป็น **static HTML mockup ล้วน** เพื่อ confirm design กับลูกค้า **ห้ามเขียน/เรียก API เด็ดขาด** ใช้ mock data ภาษาไทยสมจริง

## Theme v4 (ปัจจุบัน) — Light ops console
พื้นเทา `#EFEFEA`, การ์ดขาวขอบบาง, แถบ chrome เข้ม `#1F1E1B` + แถบแท็บขาว, ปุ่ม primary ทอง `#B8954A`, badge เป็น pill สีสถานะ, มุม 6px
- โฟลว์ยังเป็น 4 สถานีบน ไม่ใช่ sidebar โมดูลเดิม
- inline style ห้าม hardcode สีครีม/ทองเป็นพื้นหลัง container — ใช้ var(--white) / var(--gold-50)
- border-radius inline ไม่เกิน 8px

## กติกาเหล็ก
1. ไฟล์ HTML แบนราบใน `/Users/sutthiphong/Documents/infinity/new-design-bo/` (ไม่มี subfolder ยกเว้น `assets/`)
2. ทุกหน้า (ยกเว้น login) ใช้ skeleton นี้เป๊ะ ๆ:

```html
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ชื่อหน้า — บ้านมือถือ MBH</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/theme.css">
</head>
<body>
<div class="app">
<script>window.PAGE = { active: "<page-id>", title: "<ชื่อหน้า>", crumbs: ["<กลุ่ม>", "<ชื่อหน้า>"] };</script>
<script src="assets/layout.js"></script>
<div class="main">
<div class="content">
  <!-- เนื้อหาหน้า -->
</div>
</div>
</div>
</body>
</html>
```

3. `assets/theme.css` มี class พร้อมใช้ครบ: `.page-head .page-title .page-desc .page-actions`, `.btn .btn-primary .btn-outline .btn-ghost .btn-danger .btn-sm`, `.card .card-head .card-title .card-pad`, `.toolbar .search .select`, `.table-wrap .tbl .num .row-actions`, `.badge badge-success|warning|danger|info|muted`, `.pagination .page-info .pages .page-btn`, `.form-grid .field .full .form-section-title .form-footer`, `.upload-box`, `.tabs .tab`, `.stats .stat`, `.grid-2 .grid-3 .mt-20 .mb-20`, `.alert alert-success|warning|danger|info`, `.progress .progress-bar`, `.switch`, `.chip`, `.timeline`, `.dropdown .dropdown-menu .dropdown-item`, `.tbl-zebra .tbl-clickable`, `[data-tip]` tooltip, `.avatar-sm .avatar-lg .avatar-group`, `.skeleton`, `.divider .divider-text` — **อ่าน theme.css ก่อนเขียน ห้ามเขียน CSS ใหม่ นอกจาก inline เล็กน้อยที่จำเป็น**
4. `<page-id>` ต้องตรงกับ id ใน `assets/layout.js` (อ่านไฟล์นี้ดู) เพื่อให้ sidebar highlight ถูกเมนู
5. ดู `dashboard.html` เป็นคิวงานวันนี้ (ไม่ใช่ KPI dashboard แบบตัวเดิม) — list หน้าอื่นยังใช้ toolbar + table
6. ข้อมูล mock: ชื่อคนไทย, เบอร์ 08x-xxx-xxxx, เลขสัญญา LN-2568-xxxx, ราคาบาท ฿xx,xxx, รุ่นมือถือจริง (iPhone 13/14/15, Samsung S24 ฯลฯ), วันที่ พ.ศ.
7. อ้างอิง field/column จริง: อ่าน source เดิมที่ `/Users/sutthiphong/Documents/infinity/ims-realtime-backoffice/src/app/(frontend)/(app)/...` ประกอบ (page.tsx ของแต่ละหน้า) แต่จัด layout ใหม่ให้สวย ไม่ต้องลอกโครงเดิม
8. UX ที่ต้องมี:
   - หน้า list: page-head + ปุ่ม action หลัก, toolbar (search + filter select), table ใน card, badge สถานะสี, คอลัมน์ตัวเลขชิดขวา `.num`, row-actions (ดู/แก้ไข/ลบ เป็น .btn-ghost .btn-sm), pagination ล่าง card
   - หน้า form: แบ่ง section ด้วย `.form-section-title`, ใช้ `.form-grid` 2 คอลัมน์, ช่อง required ใส่ `<span class="req">*</span>`, `.hint` ช่วยอธิบาย, `.form-footer` มีปุ่ม ยกเลิก (btn-outline) + บันทึก (btn-primary), upload รูปใช้ `.upload-box`
9. ลิงก์ระหว่างหน้าใช้ชื่อไฟล์ตรง ๆ เช่น `href="customer-form.html"`
10. **Icons: ใช้ Lucide เท่านั้น ห้ามใช้ emoji** — เขียน `<i data-lucide="ชื่อไอคอน"></i>` (เช่น search, plus, download, lock, user, wallet) layout.js โหลด lucide CDN + เรียก `lucide.createIcons()` ให้อัตโนมัติแล้ว
11. ห้ามใส่ JS logic ใด ๆ นอกจาก layout.js (static mock เท่านั้น ปุ่มไม่ต้องทำงานจริง ยกเว้นลิงก์เปลี่ยนหน้า)

## รายชื่อไฟล์ทั้งหมด + เจ้าของ

| ไฟล์ | page-id | เจ้าของ |
|---|---|---|
| login.html | - | claude (เสร็จแล้ว) |
| dashboard.html | dashboard | claude (เสร็จแล้ว) |
| chat.html | chat | claude |
| lock-device-list.html | lock-device | claude |
| bad-customer-list.html | bad-customer | claude |
| index.html | - | claude |
| customer-list.html | customer-list | cursor |
| customer-form.html | customer-form | cursor |
| customer-detail.html | customer-list | cursor |
| user-list.html | user-list | cursor |
| user-form.html | user-form | cursor |
| loan-list.html | loan-list | grok |
| loan-detail.html | loan-list | grok |
| daily-loan.html | daily-loan | grok |
| daily-loan-summary.html | daily-loan-summary | grok |
| settings-model-list.html | settings-model | codex |
| settings-model-form.html | settings-model | codex |
| settings-loan-list.html | settings-loan | codex |
| settings-loan-form.html | settings-loan | codex |
| settings-user-level-list.html | settings-user-level | codex |
| settings-user-level-form.html | settings-user-level | codex |
| settings-icloud-list.html | settings-icloud | codex |
| settings-icloud-form.html | settings-icloud | codex |
| settings-bank-list.html | settings-bank | codex |

เสร็จแล้วให้ตอบสรุปรายชื่อไฟล์ที่สร้าง ไม่ต้องรัน server
