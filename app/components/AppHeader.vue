<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled 
        ? 'bg-white/80 dark:bg-brand-dark/80 backdrop-blur-lg border-gray-200 dark:border-white/10 shadow-sm py-2' 
        : 'bg-transparent border-transparent py-5'
    ]"
    dir="rtl"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      
      <!-- بخش لوگو (بروزرسانی شده) -->
      <div class="flex justify-start z-50 w-auto md:w-1/4">
        <NuxtLink to="/" class="transition-transform hover:scale-105 shrink-0 flex items-center">
          <!-- لوگوی تیره برای پس‌زمینه روشن (حالت روز) -->
          <img src="/images/logo-light.png" alt="هوش پرداز" class="h-10 md:h-12 w-auto block dark:hidden" />
          
          <!-- لوگوی روشن (نئونی/سفید) برای پس‌زمینه تیره (حالت شب) -->
          <img src="/images/logo-dark.png" alt="هوش پرداز" class="h-10 md:h-12 w-auto hidden dark:block" />
        </NuxtLink>
      </div>
      
      <!-- منوی دسکتاپ -->
      <nav class="hidden md:flex flex-1 justify-center items-center gap-4 lg:gap-7 font-bold text-sm dark:text-gray-300">
        <NuxtLink v-for="link in menuLinks" :key="link.path" :to="link.path" active-class="text-brand-accent1" class="hover:text-brand-accent1 transition whitespace-nowrap">
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- بخش دکمه‌ها و پروفایل -->
      <div class="flex justify-end items-center gap-3 z-50 w-auto md:w-1/4">
        
        <NuxtLink v-if="!user" to="/login" class="hidden md:flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap transform hover:-translate-y-0.5">
          ورود / ثبت‌نام
        </NuxtLink>

        <NuxtLink v-else to="/dashboard" class="hidden md:flex items-center justify-center px-5 py-2.5 text-sm font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-400 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 rounded-xl transition-all whitespace-nowrap">
          پنل کاربری
        </NuxtLink>

        <button @click="toggleDark" class="bg-gray-100 dark:bg-gray-800 p-2.5 rounded-xl transition hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-700 text-lg flex items-center justify-center shrink-0">
          🌙
        </button>
        
        <button @click="toggleMobileMenu" class="md:hidden text-brand-dark dark:text-white focus:outline-none p-1 shrink-0">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

      </div>
    </div>
  </header>

  <!-- پس‌زمینه تیره برای منوی موبایل -->
  <div v-if="isMobileMenuOpen" @click="toggleMobileMenu" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity"></div>

  <!-- منوی موبایل -->
  <aside :class="['fixed top-0 right-0 h-full w-64 bg-white dark:bg-brand-dark shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 border-l border-gray-200 dark:border-gray-800', isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full']" dir="rtl">
    
    <div class="px-4 pb-4 border-b border-gray-100 dark:border-gray-800 mb-2">
      <NuxtLink v-if="!user" to="/login" @click="toggleMobileMenu" class="flex items-center justify-center w-full py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-md shadow-blue-600/20">
        ورود / ثبت‌نام
      </NuxtLink>
      <div v-else class="flex flex-col gap-2">
        <NuxtLink to="/dashboard" @click="toggleMobileMenu" class="flex items-center justify-center w-full py-3 text-sm font-bold text-blue-700 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30 rounded-xl transition">
          پنل کاربری
        </NuxtLink>
        <button @click="handleLogout" class="flex items-center justify-center w-full py-3 text-sm font-bold text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20 rounded-xl transition">
          خروج از حساب
        </button>
      </div>
    </div>

    <nav class="flex-1 px-4 flex flex-col gap-2">
      <NuxtLink v-for="link in menuLinks" :key="link.path" :to="link.path" @click="toggleMobileMenu" active-class="text-brand-accent1 bg-gray-50 dark:bg-gray-800/80 font-black" class="block px-4 py-3 text-brand-dark dark:text-gray-300 rounded-xl font-bold hover:text-brand-accent1 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
        {{ link.name }}
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuLinks = [
  { name: 'صفحه اصلی', path: '/' },
  { name: 'دوره ها', path: '/courses' },
  { name: 'یادگیری', path: '/learning' },
  { name: 'استعدادیابی', path: '/talent' },
  { name: 'درباره ما', path: '/about' },
  { name: 'تماس با ما', path: '/contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : 'auto'
}

const toggleDark = () => {
  document.documentElement.classList.toggle('dark')
}

const handleLogout = async () => {
  await supabase.auth.signOut()
  isMobileMenuOpen.value = false
  navigateTo('/login')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto'
})
</script>