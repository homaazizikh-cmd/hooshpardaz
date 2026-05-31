<template>
  <div class="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-500">
    
    <!-- هدر سایت با کلاس‌های داینامیک برای تغییر حالت هنگام اسکرول -->
    <nav 
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/80 dark:bg-brand-dark/80 backdrop-blur-lg border-gray-200 dark:border-white/10 shadow-sm py-2' 
          : 'bg-transparent border-transparent py-5'
      ]"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <!-- لوگو -->
        <NuxtLink to="/" class="text-2xl font-black text-brand-dark dark:text-white transition-transform hover:scale-105">
          هوش<span class="text-brand-accent1">پرداز</span>
        </NuxtLink>
        
        <!-- منوی ناوبری -->
        <div class="hidden md:flex gap-6 font-bold text-sm dark:text-gray-300">
          <NuxtLink to="/" active-class="text-brand-accent1" class="hover:text-brand-accent1 transition">صفحه اصلی</NuxtLink>
          <NuxtLink to="/courses" active-class="text-brand-accent1" class="hover:text-brand-accent1 transition">دوره ها</NuxtLink>
          <NuxtLink to="/learning" active-class="text-brand-accent1" class="hover:text-brand-accent1 transition">یادگیری</NuxtLink>
          <NuxtLink to="/talent-test" active-class="text-brand-accent1" class="hover:text-brand-accent1 transition">استعدادیابی</NuxtLink>
          <NuxtLink to="/about" active-class="text-brand-accent1" class="hover:text-brand-accent1 transition">درباره ما</NuxtLink>
          <NuxtLink to="/contact" active-class="text-brand-accent1" class="hover:text-brand-accent1 transition">تماس با ما</NuxtLink>
        </div>

        <!-- دکمه تغییر تم -->
        <button 
          @click="toggleDark" 
          class="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl transition hover:bg-gray-200 dark:hover:bg-gray-700"
          title="تغییر تم (تاریک/روشن)"
        >
          🌙
        </button>
      </div>
    </nav>

    <!-- محتوای اصلی سایت -->
    <!-- از pt-24 استفاده شده تا محتوا زیر هدرِ Fixed گیر نکند -->
    <main class="pt-24">
      <slot />
    </main>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// متغیر برای مدیریت وضعیت اسکرول
const isScrolled = ref(false)

// بررسی میزان اسکرول صفحه
const handleScroll = () => {
  // اگر بیشتر از 20 پیکسل اسکرول شد، حالت شیشه‌ای فعال می‌شود
  isScrolled.value = window.scrollY > 20
}

// فعال‌سازی تشخیص اسکرول هنگام لود صفحه
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// پاک کردن حافظه مرورگر از Event Listener هنگام خروج از صفحه
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// تابع تغییر حالت تاریک و روشن
const toggleDark = () => document.documentElement.classList.toggle('dark')
</script>