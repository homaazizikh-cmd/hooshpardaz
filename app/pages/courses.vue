<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-black text-brand-dark mb-4">دپارتمان‌های آموزشی آکادمی</h2>
      <p class="text-brand-light font-medium">برای مشاهده دوره‌های اختصاصی هر حوزه، روی دپارتمان مورد نظر کلیک کنید</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
      <div v-for="dept in departments" :key="dept.id" 
           @click="activeDepartment = dept.id"
           :class="activeDepartment === dept.id ? 'ring-4 ring-brand-accent2 shadow-xl transform scale-105' : 'hover:shadow-soft hover:-translate-y-1 opacity-90 hover:opacity-100'"
           class="cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden relative group">
        
        <div class="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
          <img :src="dept.image" :alt="dept.name" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-95"></div>
        <div class="absolute bottom-0 left-0 right-0 p-4 text-center">
          <h3 class="text-white font-black text-xs sm:text-base md:text-lg leading-tight">{{ dept.name }}</h3>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center gap-3 mb-8">
        <div class="w-2 h-8 bg-brand-accent2 rounded-full"></div>
        <h3 class="text-2xl font-black text-brand-dark">دوره‌های دپارتمان {{ getDepartmentName(activeDepartment) }}</h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="course in filteredCourses" :key="course.id" class="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 flex flex-col group hover:shadow-md transition">
          <div class="w-full aspect-[3/4] overflow-hidden">
            <img :src="course.image" :alt="course.title" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h4 class="text-lg font-black text-brand-dark mb-2">{{ course.title }}</h4>
            <p class="text-sm text-brand-light mb-5 flex-grow leading-relaxed">{{ course.desc }}</p>
            <div class="border-t border-gray-50 pt-4">
              <div class="text-left font-black text-brand-accent2 mb-4">{{ course.price }} تومان</div>
              <NuxtLink :to="`/register?course=${encodeURIComponent(course.title)}`" class="block text-center w-full bg-brand-dark hover:bg-brand-light text-white py-2.5 rounded-xl text-sm font-bold transition shadow-sm">
                ثبت‌نام در این دوره
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeDepartment = ref('python');

const departments = [
  { id: 'python', name: 'برنامه‌نویسی پایتون', image: '/images/DP-python.jpg' },
  { id: 'ai', name: 'هوش مصنوعی و داده', image: '/images/DP-Ai.jpg' },
  { id: 'design', name: 'هنرهای دیجیتال و گرافیک', image: '/images/DP-Design.jpg' },
  { id: 'maharat', name: 'مهارت‌های کاربردی و سخت', image: '/images/DP-Maharat.jpg' }
];

const courses = [
  // دپارتمان مهارت‌های کاربردی و سخت
  { id: 13, title: 'مهارت‌های هفت‌گانه (ICDL)', dept: 'maharat', price: '۴,۵۰۰,۰۰۰', desc: 'یادگیری کامل نرم‌افزارهای آفیس و مبانی کامپیوتر.', image: '/images/ICDL.jpg' },
  { id: 5, title: 'رباتیک بزرگسال', dept: 'maharat', price: '۱۲,۰۰۰,۰۰۰', desc: 'طراحی، ساخت و برنامه‌نویسی میکروکنترلرها و ربات‌های هوشمند.', image: '/images/Robatic.jpg' },
  { id: 10, title: 'اسکرچ (Scratch)', dept: 'maharat', price: '۵,۰۰۰,۰۰۰', desc: 'آموزش منطق برنامه‌نویسی و تفکر الگوریتمی برای کودکان.', image: '/images/Scratch.jpg' },
  { id: 12, title: 'رباتیک دانش‌آموزی', dept: 'maharat', price: '۷,۵۰۰,۰۰۰', desc: 'آشنایی با سخت‌افزار، الکترونیک و ربات‌های حرکتی.', image: '/images/Robatoc-childern.jpg' },
  
  // دپارتمان پایتون
  { id: 1, title: 'پایتون مقدماتی', dept: 'python', price: '۸,۰۰۰,۰۰۰', desc: 'شروع قدرتمند برای ورود به دنیای برنامه‌نویسی تجاری.', image: '/images/Python-M.jpg' },
  { id: 2, title: 'پایتون پیشرفته', dept: 'python', price: '۱۰,۰۰۰,۰۰۰', desc: 'مسلط به مباحث پیشرفته پایتون و شیءگرایی برای بازار کار.', image: '/images/Python-P.jpg' },
  { id: 11, title: 'پایتون کودکان', dept: 'python', price: '۶,۵۰۰,۰۰۰', desc: 'زبان پایتون با بیانی ساده و جذاب برای نوجوانان.', image: '/images/Python-childern.jpg' },
  
  // دپارتمان هوش مصنوعی
  { id: 3, title: 'ابزارهای هوش مصنوعی', dept: 'ai', price: '۷,۰۰۰,۰۰۰', desc: 'تسلط بر ابزارهای کاربردی و مولد هوش مصنوعی برای افزایش بهره‌وری.', image: '/images/Ai-tools.jpg' },
  { id: 4, title: 'ماشین لرنینگ', dept: 'ai', price: '۱۲,۰۰۰,۰۰۰', desc: 'تحلیل داده‌ها، الگوریتم‌ها و ساخت مدل‌های هوشمند یادگیری ماشین.', image: '/images/Machine learning.jpg' },
  
  // دپارتمان دیزاین
  { id: 6, title: 'فتوشاپ (Photoshop)', dept: 'design', price: '۷,۰۰۰,۰۰۰', desc: 'خلق جهان‌های بصری و ورود به بازار کار طراحی و ادیت عکس.', image: '/images/Photoshop.jpg' },
  { id: 7, title: 'ایلاستریتور (Illustrator)', dept: 'design', price: '۷,۰۰۰,۰۰۰', desc: 'طراحی برداری، خلق کاراکترها و نشان‌های تجاری حرفه‌ای.', image: '/images/Illustrator.jpg' },
  { id: 8, title: 'ایندیزاین (InDesign)', dept: 'design', price: '۶,۵۰۰,۰۰۰', desc: 'صفحه‌آرایی حرفه‌ای مجلات، کتاب‌ها و کاتالوگ‌های فیزیکی و دیجیتال.', image: '/images/Indesign.jpg' },
  { id: 9, title: 'تصویرسازی اسکیچ', dept: 'design', price: '۶,۰۰۰,۰۰۰', desc: 'پیاده‌سازی ایده‌های خلاقانه بصری در قالب اسکیچ‌های استاندارد.', image: '/images/Sketch.jpg' }
];

const filteredCourses = computed(() => courses.filter(c => c.dept === activeDepartment.value));

const getDepartmentName = (id) => {
  const dept = departments.find(d => d.id === id);
  return dept ? dept.name : '';
};
</script>