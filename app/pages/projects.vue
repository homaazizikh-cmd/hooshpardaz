<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark pt-28 pb-20 transition-colors duration-500">
    
    <!-- Hero Section -->
    <section class="container mx-auto px-4 text-center mb-16 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-accent1/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-white/10 text-brand-accent1 text-sm font-bold mb-6 border border-blue-200 dark:border-white/20 backdrop-blur-md">
        <span class="w-2 h-2 rounded-full bg-brand-accent1 animate-ping"></span>
        نمونه کارهای هنرجویان
      </div>
      <h1 class="text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-6 relative z-10 leading-tight">
        گالری <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent1 to-blue-500 drop-shadow-sm">پروژه‌های برتر</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto relative z-10 leading-relaxed">
        شاهد نتیجه‌ی تلاش و خلاقیت هنرجویان آکادمی هوش‌پرداز باشید. ما از اولین خط کد تا خلق محصولات واقعی همراه شما هستیم.
      </p>
    </section>

    <!-- Filters -->
    <section class="container mx-auto px-4 mb-16 flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="activeCategory = cat.id"
        class="px-6 py-2.5 rounded-2xl font-bold transition-all duration-300 border-2 outline-none"
        :class="activeCategory === cat.id ? 'bg-brand-accent1 border-brand-accent1 text-white shadow-[0_10px_20px_-10px_rgba(56,189,248,0.6)] -translate-y-1' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-accent1/50 dark:hover:border-brand-accent1/50'"
      >
        {{ cat.name }}
      </button>
    </section>

    <!-- Projects Grid -->
    <section class="container mx-auto px-4 relative z-10">
      <TransitionGroup name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-accent1/20 transition-all duration-500 cursor-pointer flex flex-col"
        >
          <!-- Project Image -->
          <div class="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-900">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
              {{ project.categoryName }}
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-8 flex-1 flex flex-col">
            <h3 class="text-2xl font-black text-gray-800 dark:text-white mb-3 group-hover:text-brand-accent1 transition-colors">{{ project.title }}</h3>
            <p class="text-gray-500 dark:text-gray-400 mb-8 text-sm md:text-base leading-relaxed flex-1 text-justify">{{ project.description }}</p>
            
            <div class="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700/50">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-full bg-gradient-to-tr from-brand-accent1 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md border-2 border-white dark:border-gray-800">
                  {{ project.student.charAt(0) }}
                </div>
                <div class="text-sm">
                  <div class="font-bold text-gray-800 dark:text-gray-200">{{ project.student }}</div>
                  <div class="text-gray-400 dark:text-gray-500 text-xs mt-0.5">توسعه‌دهنده</div>
                </div>
              </div>
              
              <!-- برای آینده که صفحه جزئیات ساختیم، این لینک فعال می‌شود -->
              <div class="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700/50 flex items-center justify-center text-brand-accent1 hover:bg-brand-accent1 hover:text-white transition-colors duration-300">
                <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
      
      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20 bg-white/50 dark:bg-gray-800/50 rounded-3xl backdrop-blur-sm border border-gray-100 dark:border-gray-700 mt-8">
        <div class="text-6xl mb-6 opacity-80">🔍</div>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">پروژه‌ای یافت نشد</h3>
        <p class="text-gray-500 dark:text-gray-400">در این دسته‌بندی هنوز پروژه‌ای به ثبت نرسیده است.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// سئوی صفحه گالری پروژه‌ها
useSeoMeta({
  title: 'گالری پروژه‌ها',
  description: 'گالری نمونه کارهای برنامه‌نویسی، هوش مصنوعی و رباتیک هنرجویان آکادمی هوش‌پرداز.',
  ogTitle: 'گالری پروژه‌های هنرجویان هوش‌پرداز',
  ogDescription: 'شاهد نتیجه‌ی تلاش و خلاقیت هنرجویان ما باشید. از خطوط کد تا خلق محصولات واقعی.'
})

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'همه پروژه‌ها' },
  { id: 'ai', name: 'هوش مصنوعی و پایتون' },
  { id: 'web', name: 'طراحی وب و UI/UX' },
  { id: 'robotics', name: 'رباتیک و الکترونیک' }
]

// داده‌های تستی و واقعی‌نما برای پروژه‌ها (عکس‌ها از Unsplash هستند و با کیفیت بالا لود می‌شوند)
const projects = [
  {
    id: 1,
    title: 'سیستم تشخیص چهره هوشمند',
    description: 'یک برنامه پیشرفته پایتون با استفاده از کتابخانه OpenCV که قادر است چهره افراد را به صورت زنده از طریق وب‌کم شناسایی و لاگ‌ها را ثبت کند.',
    category: 'ai',
    categoryName: 'هوش مصنوعی',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    student: 'علی رضایی'
  },
  {
    id: 2,
    title: 'طراحی اپلیکیشن فروشگاهی',
    description: 'طراحی رابط کاربری (UI) و تجربه کاربری (UX) یک فروشگاه آنلاین لباس در نرم‌افزار فیگما با رعایت اصول متریال دیزاین و روانشناسی رنگ‌ها.',
    category: 'web',
    categoryName: 'طراحی وب',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    student: 'سارا احمدی'
  },
  {
    id: 3,
    title: 'بازوی رباتیک صنعتی',
    description: 'ساخت و برنامه‌نویسی صفر تا صد یک بازوی رباتیک ۳ محوره با استفاده از برد آردوینو و موتورهای سروو برای جابجایی دقیق اجسام کوچک.',
    category: 'robotics',
    categoryName: 'رباتیک',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    student: 'محمد حسینی'
  },
  {
    id: 4,
    title: 'ربات تلگرامی هواشناسی',
    description: 'توسعه ربات هوشمند تلگرام با پایتون که با دریافت نام هر شهر، اطلاعات دقیق آب‌وهوایی را از API های جهانی دریافت کرده و نمایش می‌دهد.',
    category: 'ai',
    categoryName: 'پایتون',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    student: 'مهدی کاظمی'
  },
  {
    id: 5,
    title: 'ماشین خودران مینیاتوری',
    description: 'یک ماشین کوچک هوشمند که با استفاده از سنسورهای اولتراسونیک موانع را تشخیص داده و به صورت خودکار مسیر بدون مانع را پیدا می‌کند.',
    category: 'robotics',
    categoryName: 'رباتیک',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    student: 'امیرعلی نوری'
  },
  {
    id: 6,
    title: 'داشبورد مدیریتی مالی',
    description: 'طراحی و پیاده‌سازی یک داشبورد مدرن تحت وب برای مدیریت هزینه‌ها و درآمدها با نمودارهای تعاملی زنده و پشتیبانی از حالت تاریک.',
    category: 'web',
    categoryName: 'طراحی وب',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    student: 'نگار کریمی'
  }
]

// منطق فیلتر کردن پروژه‌ها بر اساس دسته‌بندی انتخاب شده
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
/* انیمیشن نرم برای ظاهر و محو شدن کارت‌ها هنگام فیلتر کردن */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
.fade-leave-active {
  position: absolute; /* برای جلوگیری از پرش صفحه هنگام حذف کارت */
}
</style>