<template>
  <header 
    :class="['fixed top-0 right-0 left-0 w-full z-40 transition-all duration-300', isScrolled ? 'py-3 bg-white/70 backdrop-blur-md shadow-sm border-b border-white/40' : 'py-6 bg-transparent']" 
    dir="rtl"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      
      <div class="z-50 relative">
        <NuxtLink to="/" class="text-2xl font-black text-slate-800">هوش پرداز</NuxtLink>
      </div>

      <nav class="hidden md:flex gap-8 items-center">
        <NuxtLink 
          v-for="link in menuLinks" 
          :key="link.path" 
          :to="link.path" 
          class="text-slate-700 hover:text-blue-600 font-medium transition-colors"
          active-class="text-blue-600 font-bold"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <button 
        @click="toggleMobileMenu" 
        class="md:hidden relative z-50 flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span :class="['w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300', isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5']"></span>
        <span :class="['w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300', isMobileMenuOpen ? 'opacity-0' : 'opacity-100']"></span>
        <span :class="['w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300', isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5']"></span>
      </button>

    </div>
  </header>

  <div 
    v-if="isMobileMenuOpen" 
    @click="toggleMobileMenu" 
    class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden transition-opacity"
  ></div>

  <aside 
    :class="['fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-xl shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24', isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full']" 
    dir="rtl"
  >
    <div class="px-6 pb-4 border-b border-slate-100 mb-4">
      <span class="font-bold text-lg text-slate-800">منوی دسترسی</span>
    </div>
    
    <nav class="flex-1 px-4 flex flex-col gap-2">
      <NuxtLink 
        v-for="link in menuLinks" 
        :key="link.path" 
        :to="link.path" 
        @click="toggleMobileMenu" 
        class="block px-4 py-3 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors"
        active-class="bg-blue-50 text-blue-700 font-bold"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // جلوگیری از اسکرول شدن صفحه وقتی منو باز است
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto' // پاکسازی هنگام خروج
})
</script>