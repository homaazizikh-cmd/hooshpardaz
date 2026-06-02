<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark pt-28 pb-20 transition-colors duration-500 overflow-hidden">
    <div class="container mx-auto px-4 max-w-4xl relative">
      
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <NuxtLink to="/courses" class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-brand-accent1 dark:hover:text-brand-accent1 font-bold mb-8 transition-colors group relative z-10">
        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        بازگشت به دپارتمان‌های آموزشی
      </NuxtLink>

      <div v-if="course" class="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative z-10">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 border-b border-gray-100 dark:border-gray-700/80">
          <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-md relative group">
            <img :src="course.image" :alt="course.title" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
          </div>
          
          <div class="flex flex-col justify-center">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-brand-accent1 text-xs font-bold w-fit mb-4 border border-blue-100 dark:border-blue-800/20">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-accent1 animate-pulse"></span>
              مشخصات و برنامه زمان‌بندی آنلاین
            </div>
            <h1 class="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-4 leading-tight">
              {{ course.title }}
            </h1>
            <p class="text-gray-600 dark:text-gray-400 leading-loose text-justify font-medium text-sm md:text-base">
              {{ course.desc }}
            </p>
          </div>
        </div>

        <div class="p-6 md:p-10 bg-gray-50/50 dark:bg-gray-900/20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <div class="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300">
            <div class="text-2xl">📅</div>
            <span class="text-xs text-gray-400 dark:text-gray-500 font-bold">روزهای برگزاری:</span>
            <span class="text-sm md:text-base text-gray-800 dark:text-white font-black leading-relaxed">
              {{ course.schedule.days }}
            </span>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300">
            <div class="text-2xl">⏰</div>
            <span class="text-xs text-gray-400 dark:text-gray-500 font-bold">ساعت کلاس آنلاین:</span>
            <span class="text-sm md:text-base text-gray-800 dark:text-white font-black tracking-tight">
              {{ course.schedule.time }}
            </span>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300 sm:col-span-2 md:col-span-1">
            <div class="text-2xl">🚀</div>
            <span class="text-xs text-gray-400 dark:text-gray-500 font-bold">تاریخ شروع دوره:</span>
            <span class="text-sm md:text-base text-brand-accent1 font-black">
              {{ course.startDate }}
            </span>
          </div>

        </div>

        <div class="p-6 md:p-10 border-t border-gray-100 dark:border-gray-700/80 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white dark:bg-gray-800">
          <div class="flex flex-col gap-1 text-center sm:text-right">
            <span class="text-xs text-gray-400 dark:text-gray-500 font-bold">سرمایه‌گذاری دوره:</span>
            <div class="flex items-center gap-1 text-blue-600 dark:text-brand-accent1 justify-center sm:justify-start">
              <span class="text-2xl md:text-3xl font-black tracking-tight">{{ course.price }}</span>
              <span class="text-xs font-bold opacity-80">تومان</span>
            </div>
          </div>

          <NuxtLink :to="`/register?course=${encodeURIComponent(course.title)}`" 
                    class="relative overflow-hidden flex items-center justify-center w-full sm:w-auto px-10 bg-brand-dark hover:bg-brand-accent1 dark:bg-gray-700 dark:hover:bg-brand-accent1 text-white py-4 rounded-2xl text-base font-bold transition-all duration-300 shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(56,189,248,0.5)] group/btn text-center">
            <span class="relative z-10 flex items-center gap-2">
              رزرو و ثبت‌نام در دوره
              <svg class="w-5 h-5 rotate-180 transform group-hover/btn:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </NuxtLink>
        </div>

      </div>

      <div v-else class="text-center py-20 bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm relative z-10">
        <div class="text-6xl mb-4">🔍</div>
        <h2 class="text-2xl font-black text-gray-800 dark:text-white mb-2">دوره مورد نظر یافت نشد!</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-6 font-medium">احتمالاً این دوره در حال به‌روزرسانی اطلاعات زمان‌بندی است.</p>
        <NuxtLink to="/courses" class="inline-block bg-brand-dark dark:bg-gray-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-accent1 transition-colors shadow-md">
          بازگشت به لیست دوره‌ها
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
// کدهای بالا کاملاً پاک شدند چون Nuxt 3 خودش useRoute و computed را خودکار امپورت می‌کند

const route = useRoute();

// بانک اطلاعاتی جامع ۱۳ دوره آکادمی هوش‌پردار همراه با زمان‌بندی کلاس‌های آنلاین، ساعت و تاریخ دقیق شروع
const courses = [
  { 
    id: 13, 
    title: 'مهارت‌های هفت‌گانه (ICDL)', 
    dept: 'maharat', 
    price: '۴,۵۰۰,۰۰۰', 
    desc: 'یادگیری کامل نرم‌افزارهای آفیس و مبانی کامپیوتر.', 
    image: '/images/ICDL.jpg',
    schedule: { days: 'روزهای زوج (شنبه، دوشنبه، چهارشنبه)', time: 'ساعت ۱۶:۰۰ الی ۱۸:۰۰' },
    startDate: '۱۵ تیر ۱۴۰۵'
  },
  { 
    id: 5, 
    title: 'رباتیک بزرگسال', 
    dept: 'maharat', 
    price: '۱۲,۰۰۰,۰۰۰', 
    desc: 'طراحی، ساخت و برنامه‌نویسی میکروکنترلرها و ربات‌های هوشمند.', 
    image: '/images/Robatic.jpg',
    schedule: { days: 'پنج‌شنبه‌ها (جلسات کارگاهی فشرده)', time: 'ساعت ۱۰:۰۰ صبح الی ۱۴:۰۰' },
    startDate: '۲۰ تیر ۱۴۰۵'
  },
  { 
    id: 10, 
    title: 'اسکرچ (Scratch)', 
    dept: 'maharat', 
    price: '۵,۰۰۰,۰۰۰', 
    desc: 'آموزش منطق برنامه‌نویسی و تفکر الگوریتمی برای کودکان.', 
    image: '/images/Scratch.jpg',
    schedule: { days: 'یکشنبه‌ها و سه‌شنبه‌ها', time: 'ساعت ۱۷:۰۰ الی ۱۹:۰۰' },
    startDate: '۱۰ مرداد ۱۴۰۵'
  },
  { 
    id: 12, 
    title: 'رباتیک دانش‌آموزی', 
    dept: 'maharat', 
    price: '۷,۵۰۰,۰۰۰', 
    desc: 'آشنایی با سخت‌افزار، الکترونیک و ربات‌های حرکتی.', 
    image: '/images/Robatoc-childern.jpg',
    schedule: { days: 'دوشنبه‌ها و چهارشنبه‌ها', time: 'ساعت ۱۵:۰۰ الی ۱۷:۰۰' },
    startDate: '۰۵ مرداد ۱۴۰۵'
  },
  { 
    id: 1, 
    title: 'پایتون مقدماتی', 
    dept: 'python', 
    price: '۸,۰۰۰,۰۰۰', 
    desc: 'شروع قدرتمند برای ورود به دنیای برنامه‌نویسی تجاری.', 
    image: '/images/Python-M.jpg',
    schedule: { days: 'روزهای فرد (یکشنبه، سه‌شنبه، پنج‌شنبه)', time: 'ساعت ۱۸:۰۰ الی ۲۰:۰۰' },
    startDate: '۰۱ مرداد ۱۴۰۵'
  },
  { 
    id: 2, 
    title: 'پایتون پیشرفته', 
    dept: 'python', 
    price: '۱۰,۰۰۰,۰۰۰', 
    desc: 'مسلط به مباحث پیشرفته پایتون و شیءگرایی برای بازار کار.', 
    image: '/images/Python-P.jpg',
    schedule: { days: 'پنج‌شنبه‌ها (کلاس آنلاین تعاملی)', time: 'ساعت ۱۵:۰۰ الی ۱۹:۰۰' },
    startDate: '۱۲ مرداد ۱۴۰۵'
  },
  { 
    id: 11, 
    title: 'پایتون کودکان', 
    dept: 'python', 
    price: '۶,۵۰۰,۰۰۰', 
    desc: 'زبان پایتون با بیانی ساده و جذاب برای نوجوانان.', 
    image: '/images/Python-childern.jpg',
    schedule: { days: 'شنبه‌ها و دوشنبه‌ها', time: 'ساعت ۱۶:۰۰ الی ۱۸:۰۰' },
    startDate: '۰۱ شهریور ۱۴۰۵'
  },
  { 
    id: 3, 
    title: 'ابزارهای هوش مصنوعی', 
    dept: 'ai', 
    price: '۷,۰۰۰,۰۰۰', 
    desc: 'تسلط بر ابزارهای کاربردی و مولد هوش مصنوعی برای افزایش بهره‌وری.', 
    image: '/images/Ai-tools.jpg',
    schedule: { days: 'روزهای زوج (شنبه، دوشنبه، چهارشنبه)', time: 'ساعت ۱۹:۰۰ الی ۲۱:۰۰' },
    startDate: '۲۵ تیر ۱۴۰۵'
  },
  { 
    id: 4, 
    title: 'ماشین لرنینگ', 
    dept: 'ai', 
    price: '۱۲,۰۰۰,۰۰۰', 
    desc: 'تحلیل داده‌ها، الگوریتم‌ها و ساخت مدل‌های هوشمند یادگیری ماشین.', 
    image: '/images/Machine learning.jpg',
    schedule: { days: 'جمعه‌ها (وبینار زنده پرسش و پاسخ)', time: 'ساعت ۰۹:۰۰ صبح الی ۱۳:۰۰' },
    startDate: '۳۰ تیر ۱۴۰۵'
  },
  { 
    id: 6, 
    title: 'فتوشاپ (Photoshop)', 
    dept: 'design', 
    price: '۷,۰۰۰,۰۰۰', 
    desc: 'خلق جهان‌های بصری و ورود به بازار کار طراحی و ادیت عکس.', 
    image: '/images/Photoshop.jpg',
    schedule: { days: 'یکشنبه‌ها و سه‌شنبه‌ها', time: 'ساعت ۱۸:۰۰ الی ۲۰:۰۰' },
    startDate: '۱۵ مرداد ۱۴۰۵'
  },
  { 
    id: 7, 
    title: 'ایلاستریتور (Illustrator)', 
    dept: 'design', 
    price: '۷,۰۰۰,۰۰۰', 
    desc: 'طراحی برداری، خلق کاراکترها و نشان‌های تجاری حرفه‌ای.', 
    image: '/images/Illustrator.jpg',
    schedule: { days: 'دوشنبه‌ها و چهارشنبه‌ها', time: 'ساعت ۱۸:۰۰ الی ۲۰:۰۰' },
    startDate: '۲۰ مرداد ۱۴۰۵'
  },
  { 
    id: 8, 
    title: 'ایندیزاین (InDesign)', 
    dept: 'design', 
    price: '۶,۵۰۰,۰۰۰', 
    desc: 'صفحه‌آرایی حرفه‌ای مجلات، کتاب‌ها و کاتالوگ‌های فیزیکی و دیجیتال.', 
    image: '/images/Indesign.jpg',
    schedule: { days: 'پنج‌شنبه‌ها (کلاس زنده و رفع اشکال)', time: 'ساعت ۱۴:۰۰ الی ۱۸:۰۰' },
    startDate: '۰۵ شهریور ۱۴۰۵'
  },
  { 
    id: 9, 
    title: 'تصویرسازی اسکیچ', 
    dept: 'design', 
    price: '۶,۰۰۰,۰۰۰', 
    desc: 'پیاده‌سازی ایده‌های خلاقانه بصری در قالب اسکیچ‌های استاندارد.', 
    image: '/images/Sketch.jpg',
    schedule: { days: 'روزهای فرد (یکشنبه و سه‌شنبه)', time: 'ساعت ۱۶:۰۰ الی ۱۸:۰۰' },
    startDate: '۱۵ شهریور ۱۴۰۵'
  }
];

// پیدا کردن دوره معتبر بر اساس پارامتر آیدی پویا از آدرس URL
const course = computed(() => {
  return courses.find(c => c.id === parseInt(route.params.id));
});

// اعمال خودکار متاتگ‌های سئوی پویا بر اساس عنوان دوره فعال
if (course.value) {
  useSeoMeta({
    title: `زمان‌بندی دوره ${course.value.title} - آکادمی هوش‌پرداز`,
    description: course.value.desc,
    ogTitle: `دوره آنلاین ${course.value.title}`,
    ogImage: course.value.image
  });
}
</script>

