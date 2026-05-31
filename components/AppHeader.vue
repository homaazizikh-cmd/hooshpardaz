<template>
  <header :class="['site-header', { 'scrolled-glass': isScrolled }]">
    <div class="header-container">
      
      <div class="logo">
        <NuxtLink to="/">هوش پرداز</NuxtLink>
      </div>

      <nav class="main-nav desktop-nav">
        <ul>
          <li v-for="link in menuLinks" :key="link.path">
            <NuxtLink :to="link.path" @click="closeMobileMenu">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <button class="hamburger-btn" @click="toggleMobileMenu" aria-label="Menu">
        <span :class="['line', { 'open': isMobileMenuOpen }]"></span>
        <span :class="['line', { 'open': isMobileMenuOpen }]"></span>
        <span :class="['line', { 'open': isMobileMenuOpen }]"></span>
      </button>

    </div>
  </header>

  <div 
    class="mobile-overlay" 
    :class="{ 'show': isMobileMenuOpen }" 
    @click="closeMobileMenu"
  ></div>

  <aside class="mobile-dashboard" :class="{ 'open': isMobileMenuOpen }">
    <div class="dashboard-header">
      <span class="dashboard-title">منوی دسترسی</span>
      <button class="close-btn" @click="closeMobileMenu">✕</button>
    </div>
    
    <nav class="dashboard-nav">
      <ul>
        <li v-for="link in menuLinks" :key="link.path">
          <NuxtLink :to="link.path" @click="closeMobileMenu">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// متغیرها
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// آرایه لینک‌ها برای جلوگیری از تکرار کد و مدیریت راحت‌تر
const menuLinks = [
  { name: 'صفحه اصلی', path: '/' },
  { name: 'دوره ها', path: '/courses' },
  { name: 'یادگیری', path: '/learning' },
  { name: 'استعدادیابی', path: '/talent' },
  { name: 'درباره ما', path: '/about' },
  { name: 'تماس با ما', path: '/contact' }
]

// توابع مدیریت اسکرول
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// توابع مدیریت منوی موبایل
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// مدیریت Event Listener ها
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ==================== استایل‌های پایه هدر ==================== */
.site-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 25px 0;
  transition: all 0.4s ease-in-out;
  background-color: transparent;
  direction: rtl;
}

.site-header.scrolled-glass {
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

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
  color: #0056b3;
}

/* مخفی کردن دکمه همبرگری در دسکتاپ */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger-btn .line {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #2c3e50;
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* ==================== استایل‌های داشبورد موبایل ==================== */

/* لایه تاریک پس‌زمینه */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-overlay.show {
  opacity: 1;
  visibility: visible;
}

/* سایدبار کشویی */
.mobile-dashboard {
  position: fixed;
  top: 0;
  right: -300px; /* مخفی در بیرون از صفحه */
  width: 280px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: -5px 0 25px rgba(0,0,0,0.1);
  z-index: 1002;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  direction: rtl;
}

.mobile-dashboard.open {
  right: 0; /* کشیده شدن به داخل صفحه */
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.dashboard-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
}

.close-btn {
  background: #f1f5f9;
  border: none;
  font-size: 1.2rem;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.close-btn:hover {
  background: #e2e8f0;
  color: #0f172a;
}

.dashboard-nav {
  padding: 20px;
}

.dashboard-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.dashboard-nav a {
  display: block;
  text-decoration: none;
  color: #475569;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 12px 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.dashboard-nav a:hover,
.dashboard-nav a.router-link-exact-active {
  background: #f1f5f9;
  color: #0056b3;
  font-weight: 700;
}

/* ==================== واکنش‌گرایی (Media Queries) ==================== */
@media (max-width: 768px) {
  .desktop-nav {
    display: none; /* مخفی کردن منوی افقی در موبایل */
  }

  .hamburger-btn {
    display: flex; /* نمایش دکمه همبرگری در موبایل */
  }
  
  /* تغییر رنگ دکمه همبرگری هنگام اسکرول اگر لازم بود */
  .site-header.scrolled-glass .hamburger-btn .line {
    background-color: #0056b3;
  }
}
</style>