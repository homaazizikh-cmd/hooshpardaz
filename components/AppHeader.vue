<template>
  <!-- با استفاده از کلاس داینامیک، وقتی اسکرول انجام شود کلاس scrolled-glass اضافه می‌شود -->
  <header :class="['site-header', { 'scrolled-glass': isScrolled }]">
    <div class="header-container">
      
      <!-- بخش لوگو یا نام سایت -->
      <div class="logo">
        <NuxtLink to="/">هوش پرداز</NuxtLink>
      </div>

      <!-- منوی ناوبری به ترتیبی که درخواست کردید -->
      <nav class="main-nav">
        <ul>
          <li><NuxtLink to="/">صفحه اصلی</NuxtLink></li>
          <li><NuxtLink to="/courses">دوره ها</NuxtLink></li>
          <li><NuxtLink to="/learning">یادگیری</NuxtLink></li>
          <li><NuxtLink to="/talent">استعدادیابی</NuxtLink></li>
          <li><NuxtLink to="/about">درباره ما</NuxtLink></li>
          <li><NuxtLink to="/contact">تماس با ما</NuxtLink></li>
        </ul>
      </nav>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// متغیری برای بررسی وضعیت اسکرول
const isScrolled = ref(false)

// تابعی برای تشخیص میزان اسکرول صفحه
const handleScroll = () => {
  // اگر کاربر بیشتر از 50 پیکسل به پایین اسکرول کند، هدر شیشه‌ای می‌شود
  isScrolled.value = window.scrollY > 50
}

// اضافه کردن Event Listener هنگام لود شدن کامپوننت
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// پاک کردن Event Listener برای جلوگیری از مشکلات پرفورمنس
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* استایل پایه‌ی هدر (حالت شفاف قبل از اسکرول) */
.site-header {
  position: fixed; /* ثابت ماندن در بالای صفحه */
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* قرارگیری روی تمام المان‌های صفحه */
  padding: 25px 0; /* فاصله بیشتر در حالت عادی */
  transition: all 0.4s ease-in-out; /* انیمیشن نرم برای تغییر حالت */
  background-color: transparent;
  direction: rtl; /* راست‌چین کردن استاندارد سایت فارسی */
}

/* افکت شیشه‌ای و حرفه‌ای (هنگام اسکرول) */
.site-header.scrolled-glass {
  padding: 15px 0; /* باریک‌تر شدن هدر هنگام اسکرول */
  background: rgba(255, 255, 255, 0.7); /* پس‌زمینه سفید نیمه‌شفاف */
  backdrop-filter: blur(15px); /* افکت تار شدن (شیشه‌ای) پس‌زمینه */
  -webkit-backdrop-filter: blur(15px); /* پشتیبانی از سافاری */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); /* یک سایه بسیار نرم و حرفه‌ای */
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

/* تنظیمات ساختار داخلی */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2c3e50;
  text-decoration: none;
}

.main-nav ul {
  display: flex;
  gap: 35px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav a {
  text-decoration: none;
  color: #34495e;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.main-nav a:hover,
.main-nav a.router-link-exact-active {
  color: #0056b3; /* رنگ آبی هنگام هاور شدن یا فعال بودن لینک */
}
</style>