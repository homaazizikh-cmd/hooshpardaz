<template>
  <div class="min-h-screen bg-slate-50 dark:bg-brand-dark pt-28 pb-20 transition-colors duration-500 overflow-hidden relative">
    
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-4xl relative">
      
      <NuxtLink to="/courses" class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-brand-accent1 dark:hover:text-brand-accent1 font-bold mb-8 transition-colors group relative z-10">
        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        بازگشت به دپارتمان‌های آموزشی
      </NuxtLink>

      <div v-if="course" class="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative z-10">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 border-b border-gray-100 dark:border-gray-700/80">
          <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-md relative group">
            <NuxtImg 
              :src="course.image" 
              :alt="`دوره آنلاین ${course.title} در آکادمی هوش پرداز`" 
              format="webp"
              preload
              class="w-full h-full object-cover"
            />
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

        <div class="p-6 md:p-10 border-t border-gray-100 dark:border-gray-700/80 bg-white dark:bg-gray-800 relative z-10">
          
          <div class="relative group rounded-[2.5rem] p-[1px] bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 hover:from-blue-400 hover:to-purple-500 dark:hover:from-cyan-500 dark:hover:to-purple-600 transition-all duration-500 shadow-md hover:shadow-xl">
            
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>

            <div class="relative bg-white dark:bg-[#090e1a] rounded-[calc(2.5rem-1px)] p-6 md:p-8 overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-colors duration-500">
              
              <div class="hidden dark:block absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

              <div class="relative w-32 h-32 shrink-0 my-2">
                <div class="absolute -inset-3 border border-slate-200 dark:border-slate-800/80 rounded-full group-hover:border-blue-400/40 dark:group-hover:border-cyan-500/40 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500"></div>
                <div class="absolute -inset-1 border border-slate-200 dark:border-slate-800/80 border-dashed rounded-full group-hover:border-purple-400/40 dark:group-hover:border-purple-500/40 group-hover:animate-[spin_6s_linear_infinite_reverse] transition-all duration-500"></div>
                
                <img 
                  :src="course.instructor?.image_url" 
                  :alt="course.instructor?.name" 
                  class="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full border-4 border-white dark:border-[#090e1a] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 z-10 shadow-md bg-slate-100 dark:bg-slate-800" 
                />
              </div>

              <div class="flex-1 text-center md:text-right relative z-10">
                <div class="flex justify-between items-center w-full mb-2 text-[9px] font-mono text-slate-400 dark:text-slate-600">
                  <span class="tracking-widest flex items-center justify-center md:justify-start gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-500 animate-pulse"></span>
                    SECURE_ACCESS // MENTOR_DATA
                  </span>
                </div>

                <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {{ course.instructor?.name }}
                </h2>
                
                <p class="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest bg-purple-50 dark:bg-purple-500/10 inline-block px-2.5 py-1 rounded border border-purple-100 dark:border-purple-500/20 mb-4">
                  {{ course.instructor?.title }}
                </p>

                <div class="flex flex-wrap justify-center md:justify-start gap-1.5">
                  <span 
                    v-for="skill in course.instructor?.skills" 
                    :key="skill" 
                    class="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0f172a] text-slate-700 dark:text-cyan-500 border border-slate-200 dark:border-slate-800 font-mono"
                  >
                    > {{ skill }}
                  </span>
                </div>
              </div>

              <div class="w-full md:w-auto shrink-0 relative z-10">
                <NuxtLink 
                  :to="`/instructors/${course.instructor?.id}`" 
                  class="relative flex items-center justify-center w-full md:w-auto py-3.5 px-6 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-blue-400 dark:group-hover:border-cyan-500/50 text-sm font-black text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-white transition-all duration-300 overflow-hidden group/btn"
                >
                  <div class="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-purple-600 transition-all duration-500 ease-out group-hover/btn:w-full opacity-10 dark:opacity-20"></div>
                  <span class="relative z-10 flex items-center gap-1">
                    اسکن رزومه مدرس
                    <svg class="w-4 h-4 transform rotate-180 group-hover/btn:-translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </NuxtLink>
              </div>

            </div>
          </div>

        </div>
        <div class="p-6 md:p-10 border-t border-gray-100 dark:border-gray-700/80 bg-white dark:bg-gray-800 rounded-b-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
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
        <NuxtLink to="/courses" class="inline-block bg-brand-dark dark:bg-gray-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-accent1 transition-colors shadow-md">
          بازگشت به لیست دوره‌ها
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
const route = useRoute();

// بانک اطلاعاتی جامع ۱۳ دوره آکادمی هوش‌پرداز (کاملاً هماهنگ، داینامیک و متصل به اساتید واقعی)
const courses = [
  { 
    id: 13, 
    title: 'مهارت‌های هفت‌گانه (ICDL)', 
    dept: 'maharat', 
    price: '۴,۵۰۰,۰۰۰', 
    desc: 'یادگیری کامل نرم‌افزارهای آفیس و مبانی کامپیوتر.', 
    image: '/images/ICDL.jpg', 
    schedule: { days: 'روزهای زوج (شنبه، دوشنبه، چهارشنبه)', time: 'ساعت ۱۶:۰۰ الی ۱۸:۰۰' }, 
    startDate: '۱۵ تیر ۱۴۰۵', 
    instructor: { id: 8, name: 'مهندس رضا تهرانی', title: 'مدرس مهارت‌های نرم', skills: ['ICDL', 'Excel', 'Soft_Skills'], image_url: '/images/instructors/reza-tehrani.jpg' } 
  },
  { 
    id: 5, 
    title: 'رباتیک بزرگسال', 
    dept: 'maharat', 
    price: '۱۲,۰۰۰,۰۰۰', 
    desc: 'طراحی، ساخت و برنامه‌نویسی میکروکنترلرها و ربات‌های هوشمند.', 
    image: '/images/Robatic.jpg', 
    schedule: { days: 'پنج‌شنبه‌ها (جلسات کارگاهی فشرده)', time: 'ساعت ۱۰:۰۰ صبح الی ۱۴:۰۰' }, 
    startDate: '۲۰ تیر ۱۴۰۵', 
    instructor: { id: 4, name: 'حسین عزیزی', title: 'متخصص مکاترونیک', skills: ['Robotics', 'Arduino', 'C++'], image_url: '/images/instructors/hossein-azizi.jpg' } 
  },
  { 
    id: 10, 
    title: 'اسکرچ (Scratch)', 
    dept: 'maharat', 
    price: '۵,۰۰۰,۰۰۰', 
    desc: 'آموزش منطق برنامه‌نویسی و تفکر الگوریتمی برای کودکان.', 
    image: '/images/Scratch.jpg', 
    schedule: { days: 'یکشنبه‌ها و سه‌شنبه‌ها', time: 'ساعت ۱۷:۰۰ الی ۱۹:۰۰' }, 
    startDate: '۱۰ مرداد ۱۴۰۵', 
    instructor: { id: 3, name: 'ملینا دهقانی', title: 'منتور برنامه‌نویسی', skills: ['Scratch', 'Algorithm', 'Mentoring'], image_url: '/images/instructors/melina-dehghani.jpg' } 
  },
  { 
    id: 12, 
    title: 'رباتیک دانش‌آموزی', 
    dept: 'maharat', 
    price: '۷,۵۰۰,۰۰۰', 
    desc: 'آشنایی با سخت‌افزار، الکترونیک و ربات‌های حرکتی.', 
    image: '/images/Robatoc-childern.jpg', 
    schedule: { days: 'دوشنبه‌ها و چهارشنبه‌ها', time: 'ساعت ۱۵:۰۰ الی ۱۷:۰۰' }, 
    startDate: '۰۵ مرداد ۱۴۰۵', 
    instructor: { id: 4, name: 'حسین عزیزی', title: 'متخصص مکاترونیک', skills: ['Robotics', 'Arduino', 'C++'], image_url: '/images/instructors/hossein-azizi.jpg' } 
  },
  { 
    id: 1, 
    title: 'پایتون مقدماتی', 
    dept: 'python', 
    price: '۸,۰۰۰,۰۰۰', 
    desc: 'شروع قدرتمند برای ورود به دنیای برنامه‌نویسی تجاری.', 
    image: '/images/Python-M.jpg', 
    schedule: { days: 'روزهای فرد (یکشنبه، سه‌شنبه، پنج‌شنبه)', time: 'ساعت ۱۸:۰۰ الی ۲۰:۰۰' }, 
    startDate: '۰۱ مرداد ۱۴۰۵', 
    instructor: { id: 1, name: 'مهدی خزاعی', title: 'متخصص پایتون و AI', skills: ['Python', 'Machine_Learning', 'Deep_Learning'], image_url: '/images/instructors/mehdi-khazaei.jpg' } 
  },
  { 
    id: 2, 
    title: 'پایتون پیشرفته', 
    dept: 'python', 
    price: '۱۰,۰۰۰,۰۰۰', 
    desc: 'مسلط به مباحث پیشرفته پایتون و شیءگرایی برای بازار کار.', 
    image: '/images/Python-P.jpg', 
    schedule: { days: 'پنج‌شنبه‌ها (کلاس آنلاین تعاملی)', time: 'ساعت ۱۵:۰۰ الی ۱۹:۰۰' }, 
    startDate: '۱۲ مرداد ۱۴۰۵', 
    instructor: { id: 6, name: 'امیرحسین کیانی', title: 'توسعه‌دهنده بک‌اند', skills: ['Django', 'FastAPI', 'PostgreSQL'], image_url: '/images/instructors/amirhossein-kiani.jpg' } 
  },
  { 
    id: 11, 
    title: 'پایتون کودکان', 
    dept: 'python', 
    price: '۶,۵۰۰,۰۰۰', 
    desc: 'زبان پایتون با بیانی ساده و جذاب برای نوجوانان.', 
    image: '/images/Python-childern.jpg', 
    schedule: { days: 'شنبه‌ها و دوشنبه‌ها', time: 'ساعت ۱۶:۰۰ الی ۱۸:۰۰' }, 
    startDate: '۰۱ شهریور ۱۴۰۵', 
    instructor: { id: 3, name: 'ملینا دهقانی', title: 'منتور برنامه‌نویسی', skills: ['Python', 'Algorithm', 'Mentoring'], image_url: '/images/instructors/melina-dehghani.jpg' } 
  },
  { 
    id: 3, 
    title: 'ابزارهای هوش مصنوعی', 
    dept: 'ai', 
    price: '۷,۰۰۰,۰۰۰', 
    desc: 'تسلط بر ابزارهای کاربردی و مولد هوش مصنوعی برای افزایش بهره‌وری.', 
    image: '/images/Ai-tools.jpg', 
    schedule: { days: 'روزهای زوج (شنبه، دوشنبه، چهارشنبه)', time: 'ساعت ۱۹:۰۰ الی ۲۱:۰۰' }, 
    startDate: '۲۵ تیر ۱۴۰۵', 
    instructor: { id: 1, name: 'مهدی خزاعی', title: 'متخصص پایتون و AI', skills: ['Python', 'Machine_Learning', 'Deep_Learning'], image_url: '/images/instructors/mehdi-khazaei.jpg' } 
  },
  { 
    id: 4, 
    title: 'ماشین لرنینگ', 
    dept: 'ai', 
    price: '۱۲,۰۰۰,۰۰۰', 
    desc: 'تحلیل داده‌ها، الگوریتم‌ها و ساخت مدل‌های هوشمند یادگیری ماشین.', 
    image: '/images/Machine learning.jpg', 
    schedule: { days: 'جمعه‌ها (وبینار زنده پرسش و پاسخ)', time: 'ساعت ۰۹:۰۰ صبح الی ۱۳:۰۰' }, 
    startDate: '۳۰ تیر ۱۴۰۵', 
    instructor: { id: 1, name: 'مهدی خزاعی', title: 'متخصص پایتون و AI', skills: ['Python', 'Machine_Learning', 'Deep_Learning'], image_url: '/images/instructors/mehdi-khazaei.jpg' } 
  },
  { 
    id: 6, 
    title: 'فتوشاپ (Photoshop)', 
    dept: 'design', 
    price: '۷,۰۰۰,۰۰۰', 
    desc: 'خلق جهان‌های بصری و ورود به بازار کار طراحی و ادیت عکس.', 
    image: '/images/Photoshop.jpg', 
    schedule: { days: 'یکشنبه‌ها و سه‌شنبه‌ها', time: 'ساعت ۱۸:۰۰ الی ۲۰:۰۰' }, 
    startDate: '۱۵ مرداد ۱۴۰۵', 
    instructor: { id: 2, name: 'پانیذ برنا', title: 'مدیر هنری و گرافیک', skills: ['UI/UX', 'Photoshop', 'Illustrator'], image_url: '/images/instructors/paniz-borna.jpg' } 
  },
  { 
    id: 7, 
    title: 'ایلاستریتور (Illustrator)', 
    dept: 'design', 
    price: '۷,۰۰۰,۰۰۰', 
    desc: 'طراحی برداری، خلق کاراکترها و نشان‌های تجاری حرفه‌ای.', 
    image: '/images/Illustrator.jpg', 
    schedule: { days: 'دوشنبه‌ها و چهارشنبه‌ها', time: 'ساعت ۱۸:۰۰ الی ۲۰:۰۰' }, 
    startDate: '۲۰ مرداد ۱۴۰۵', 
    instructor: { id: 2, name: 'پانیذ برنا', title: 'مدیر هنری و گرافیک', skills: ['UI/UX', 'Photoshop', 'Illustrator'], image_url: '/images/instructors/paniz-borna.jpg' } 
  },
  { 
    id: 8, 
    title: 'ایندیزاین (InDesign)', 
    dept: 'design', 
    price: '۶,۵۰۰,۰۰۰', 
    desc: 'صفحه‌آرایی حرفه‌ای مجلات، کتاب‌ها و کاتالوگ‌های فیزیکی و دیجیتال.', 
    image: '/images/Indesign.jpg', 
    schedule: { days: 'پنج‌شنبه‌ها (کلاس زنده و رفع اشکال)', time: 'ساعت ۱۴:۰۰ الی ۱۸:۰۰' }, 
    startDate: '۰۵ شهریور ۱۴۰۵', 
    instructor: { id: 2, name: 'پانیذ برنا', title: 'مدیر هنری و گرافیک', skills: ['UI/UX', 'Photoshop', 'Illustrator'], image_url: '/images/instructors/paniz-borna.jpg' } 
  },
  { 
    id: 9, 
    title: 'تصویرسازی اسکیچ', 
    dept: 'design', 
    price: '۶,۰۰۰,۰۰۰', 
    desc: 'پیاده‌سازی ایده‌های خلاقانه بصری در قالب اسکیچ‌های استاندارد.', 
    image: '/images/Sketch.jpg', 
    schedule: { days: 'روزهای فرد (یکشنبه و سه‌شنبه)', time: 'ساعت ۱۶:۰۰ الی ۱۸:۰۰' }, 
    startDate: '۱۵ شهریور ۱۴۰۵', 
    instructor: { id: 7, name: 'نغمه شفیعی', title: 'طراح محصول', skills: ['Figma', 'Product_Design', 'Prototyping'], image_url: '/images/instructors/naghmeh-shafiei.jpg' } 
  }
];

const course = computed(() => {
  return courses.find(c => c.id === parseInt(route.params.id));
});

if (course.value) {
  const numericPrice = course.value.price
    .replace(/,/g, '')
    .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

  useSeoMeta({
    title: `ثبت‌نام دوره ${course.value.title} | آکادمی هوش‌پرداز`,
    description: course.value.desc,
    ogTitle: `دوره آنلاین ${course.value.title} در هوش‌پرداز`,
    ogDescription: course.value.desc,
    ogImage: `https://hoooshpardaz.ir${course.value.image}`, 
    twitterCard: 'summary_large_image',
  });

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": course.value.title,
          "description": course.value.desc,
          "provider": {
            "@type": "Organization",
            "name": "آکادمی هوش‌پرداز",
            "sameAs": "https://hoooshpardaz.ir"
          },
          "image": `https://hoooshpardaz.ir${course.value.image}`,
          "offers": {
            "@type": "Offer",
            "category": "Paid",
            "priceCurrency": "IRT",
            "price": numericPrice
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "startDate": course.value.startDate,
            "schedule": {
              "@type": "Schedule",
              "description": `${course.value.schedule.days} - ${course.value.schedule.time}`
            }
          }
        })
      }
    ]
  });
}
</script>