/* MBH mock — 4 shop stations, not the old module list.
   window.PAGE = { active, title, crumbs } then include this file. */

(function () {
  var P = window.PAGE || { active: "", title: "", crumbs: [] };

  document.write('<scr' + 'ipt src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></scr' + 'ipt>');

  var STATIONS = [
    {
      id: "counter", no: "01", name: "เคาน์เตอร์", href: "dashboard.html",
      ids: ["dashboard", "daily-loan", "daily-loan-summary"],
      tools: [
        { id: "dashboard", href: "dashboard.html", label: "คิวเก็บ" },
        { id: "daily-loan", href: "daily-loan.html", label: "ตรวจสลิป" },
        { id: "daily-loan-summary", href: "daily-loan-summary.html", label: "ปิดกะ" }
      ]
    },
    {
      id: "intake", no: "02", name: "รับเครื่อง", href: "customer-form.html",
      ids: ["customer-list", "customer-form", "loan-list"],
      tools: [
        { id: "customer-form", href: "customer-form.html", label: "ลูกค้ายืนรอ" },
        { id: "customer-list", href: "customer-list.html", label: "หาคนเก่า" },
        { id: "loan-list", href: "loan-list.html", label: "คลังสัญญา" }
      ]
    },
    {
      id: "chase", no: "03", name: "ตามยอด", href: "lock-device-list.html",
      ids: ["lock-device", "bad-customer", "chat"],
      tools: [
        { id: "lock-device", href: "lock-device-list.html", label: "เครื่องที่ล็อก" },
        { id: "bad-customer", href: "bad-customer-list.html", label: "iCloud พัง" },
        { id: "chat", href: "chat.html", label: "ข้อความเข้า" }
      ]
    },
    {
      id: "back", no: "04", name: "หลังร้าน", href: "user-list.html",
      ids: ["user-list", "user-form", "settings-model", "settings-loan", "settings-user-level", "settings-icloud", "settings-bank"],
      tools: [
        { id: "user-list", href: "user-list.html", label: "คนในร้าน" },
        { id: "user-form", href: "user-form.html", label: "เพิ่มคน" },
        { id: "settings-model", href: "settings-model-list.html", label: "รุ่นเครื่อง" },
        { id: "settings-loan", href: "settings-loan-list.html", label: "เงื่อนไขกู้" },
        { id: "settings-user-level", href: "settings-user-level-list.html", label: "เพดาน" },
        { id: "settings-icloud", href: "settings-icloud-list.html", label: "บัญชี iCloud" },
        { id: "settings-bank", href: "settings-bank-list.html", label: "บัญชีรับเงิน" }
      ]
    }
  ];

  function stationOf(id) {
    var i, s;
    for (i = 0; i < STATIONS.length; i++) {
      s = STATIONS[i];
      if (s.ids.indexOf(id) !== -1) return s;
    }
    return STATIONS[0];
  }

  var here = stationOf(P.active);

  var html = '<header class="deskbar">';
  html += '<div class="deskbar-top">';
  html += '<a class="desk-brand" href="dashboard.html"><img src="assets/logo.jpg" alt=""><span class="desk-brand-txt"><span>บ้านมือถือ</span><small>Backoffice</small></span></a>';
  html += '<nav class="stations">';
  STATIONS.forEach(function (s) {
    html += '<a class="station' + (s.id === here.id ? " on" : "") + '" href="' + s.href + '">' + s.name + "</a>";
  });
  html += "</nav>";
  html += '<div class="desk-end">';
  html += '<span class="desk-who">สุภาพร · กะเช้า</span>';
  html += '<a class="desk-leave" href="login.html">ออกจากระบบ</a>';
  html += "</div></div>";

  html += '<div class="desk-tools-bar"><div class="desk-tools">';
  here.tools.forEach(function (t) {
    html += '<a class="tool' + (P.active === t.id ? " on" : "") + '" href="' + t.href + '">' + t.label + "</a>";
  });
  html += "</div></div></header>";

  document.write(html);

  document.addEventListener("DOMContentLoaded", function () {
    if (window.lucide) lucide.createIcons();
  });
})();
