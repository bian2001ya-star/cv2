// ===== 1) الوضع الليلي (ويتذكر اختيارك) =====
const btn = document.getElementById("themeBtn");

function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  btn.textContent = dark ? "☀️" : "🌙";
}

let saved = false;
try { saved = localStorage.getItem("dark") === "1"; } catch (e) {}
applyTheme(saved);

btn.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  applyTheme(dark);
  try { localStorage.setItem("dark", dark ? "1" : "0"); } catch (e) {}
});

// ===== 2) ظهور الأقسام تدريجياً أثناء النزول =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".section").forEach((s) => observer.observe(s));