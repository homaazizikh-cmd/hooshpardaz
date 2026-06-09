<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-slate-200 pt-28 pb-24 overflow-hidden relative transition-colors duration-500 font-sans">
    
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    <div class="absolute top-0 left-1/4 w-[800px] h-[600px] bg-blue-400/10 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-1000"></div>
    <div class="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

    <section class="container mx-auto px-4 text-center mb-16 relative z-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-black tracking-[0.2em] mb-8 uppercase backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        <span class="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-ping"></span>
        SYSTEM_DEPARTMENTS
      </div>
      
      <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 relative z-10 leading-tight tracking-tight">
        دپارتمان‌های <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">آکادمی داناورس</span>
      </h1>
      <p class="text-slate-600 dark:text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        برای استخراج دوره‌های تخصصی هر حوزه، روی ماژول دپارتمان مورد نظر کلیک کنید و مسیر ارتقای خود را انتخاب کنید.
      </p>
    </section>

    <section class="container mx-auto px-4 mb-24 relative z-20">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div v-for="dept in departments" :key="dept.id" 
             @click="activeDepartment = dept.id"
             :class="activeDepartment === dept.id 
                ? 'border-blue-500 dark:border-cyan-500 shadow-lg dark:shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-105 z-10' 
                : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-600 opacity-80 hover:opacity-100'"
             class="cursor-pointer transition-all duration-500 rounded-[2rem] overflow-hidden relative group bg-white dark:bg-[#090e1a] border-2">
          
          <div class="w-full aspect-[4/5] overflow-hidden relative bg-slate-100 dark:bg-slate-900">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] z-10 mix-blend-overlay opacity-50"></div>
            
            <NuxtImg 
              :src="dept.image" 
              :alt="`دپارتمان آموزشی ${dept.name} در داناورس`" 
              format="webp"
              preload
              class="w-full h-full object-cover transition-transform duration-700"
              :class="activeDepartment === dept.id ? 'scale-110' : 'group-hover:scale-110'"
            />
            
            <div class="absolute inset-0 transition-opacity duration-300 z-10"
                 :class="activeDepartment === dept.id ? 'bg-gradient-to-t from-blue-900/90 via-slate-900/40 to-transparent' : 'bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent'"></div>
          </div>
          
          <div class="absolute bottom-0 left-0 right-0 p-5 text-center transform transition-transform duration-300 z-20"
               :class="activeDepartment === dept.id ? 'translate-y-0' : 'translate-y-2 group-hover:translate-y-0'">
            <div v-if="activeDepartment === dept.id" class="w-8 h-1 bg-blue-500 dark:bg-cyan-400 mx-auto rounded-full mb-3 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            <h3 class="text-white font-black text-sm md:text-lg leading-tight">{{ dept.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 relative z-10">
      
      <div class="flex items-center gap-4 mb-12 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div class="w-2 h-10 bg-blue-600 dark:bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        <h2 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
          دوره‌های استخراج‌شده: 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">
            {{ getDepartmentName(activeDepartment) }}
          </span>
        </h2>
      </div>

      <TransitionGroup name="fade" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
        <div v-for="(course, index) in filteredCourses" :key="course.id" 
             class="group relative flex flex-col">

          <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-600 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>

          <div class="relative h-full bg-white dark:bg-[#090e1a] rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 group-hover:border-blue-300 dark:group-hover:border-slate-700/50 flex flex-col transition-all duration-300 z-10">
            
            <div class="w-full aspect-[3/4] overflow-hidden relative bg-slate-100 dark:bg-slate-900">
              <div class="absolute top-0 inset-x-0 h-6 bg-black/50 backdrop-blur-md z-20 flex items-center px-3 gap-1.5 border-b border-white/10">
                <span class="w-2 h-2 rounded-full bg-red-500"></span>
                <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                <span class="ml-auto text-[9px] font-mono text-white/50">DATA_SET: 0{{ index + 1 }}</span>
              </div>
              <NuxtImg 
                :src="course.image || '/images/default-course.webp'" 
                :alt="`دوره آنلاین ${course.title} در آکادمی داناورس`" 
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div class="p-6 md:p-7 flex flex-col flex-grow relative bg-white dark:bg-transparent">
              
              <div class="absolute -top-8 right-6 w-14 h-14 bg-white dark:bg-[#0f172a] rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-2xl z-30 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                🎓
              </div>
              
              <div class="flex justify-between items-center w-full mt-4 mb-2 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                <span class="tracking-widest">COURSE_ID: {{ course.id }}</span>
                <span class="text-green-500 flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>ACTIVE</span>
              </div>

              <h3 class="text-xl font-black text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                {{ course.title }}
              </h3>
              
              <p class="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow leading-relaxed text-justify line-clamp-3">
                {{ course.desc }}
              </p>
              
              <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <NuxtLink :to="`/courses/${course.slug || course.id}`" 
                          class="relative overflow-hidden flex items-center justify-center w-full py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-blue-300 dark:group-hover:border-cyan-500/50 text-sm font-black text-slate-600 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-white transition-all duration-300 group/btn">
                  <div class="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-purple-600 transition-all duration-500 ease-out group-hover/btn:w-full opacity-10 dark:opacity-20"></div>
                  <span class="relative z-10 flex items-center gap-2">
                    اسکن زمان‌بندی و جزئیات
                    <svg class="w-4 h-4 transform rotate-180 group-hover/btn:-translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </NuxtLink>
              </div>

            </div>
          </div>
        </div>
      </TransitionGroup>
      
      <div v-if="filteredCourses.length === 0" class="text-center py-20 bg-white/50 dark:bg-slate-900/30 rounded-[3rem] backdrop-blur-md border border-slate-200 dark:border-slate-800 border-dashed mt-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        <div class="text-6xl mb-4 opacity-50 grayscale relative z-10">📡</div>
        <h3 class="text-2xl font-black text-slate-800 dark:text-white mb-2 relative z-10">هیچ دیتایی یافت نشد</h3>
        <p class="text-slate-500 font-mono text-sm relative z-10">UPDATING_SERVER... PLEASE_WAIT.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// سئو صفحه ارتقا یافته
useSeoMeta({
  title: 'لیست دوره‌های برنامه‌نویسی و هوش مصنوعی',
  description: 'لیست کامل دوره‌های آموزش برنامه‌نویسی، هوش مصنوعی، رباتیک و هنرهای دیجیتال در آکادمی داناورس برای تمامی سنین با ارائه مدرک.',
  ogTitle: 'دوره‌های تخصصی آکادمی داناورس',
  ogImage: '/images/Banner.jpg'
});

const supabase = useSupabaseClient();
const activeDepartment = ref('python');

const departments = [
  { id: 'python', name: 'برنامه‌نویسی پایتون', image: '/images/DP-python.webp' },
  { id: 'ai', name: 'هوش مصنوعی و داده', image: '/images/DP-Ai.webp' },
  { id: 'design', name: 'هنرهای دیجیتال و گرافیک', image: '/images/DP-Design.webp' },
  { id: 'maharat', name: 'مهارت‌های کاربردی و سخت', image: '/images/DP-Maharat.webp' }
];

// 💡 لیست دوره‌های دستی با اضافه شدن اسلاگ‌های سئوشده
const manualCourses = [
  { 
    id: 13, 
    slug: 'icdl',
    title: 'مهارت‌های هفت‌گانه (ICDL)', 
    dept: 'maharat', 
    price: '۴,۵۰۰,۰۰۰', 
    desc: 'یادگیری کامل نرم‌افزارهای آفیس و مبانی کامپیوتر.', 
    image: '/images/ICDL.webp',
    schedule: 'روزهای زوج - ساعت ۱۶ الی ۱۸', 
    startDate: '۱۵ تیر' 
  },
  { 
    id: 5, 
    slug: 'robotics-adults',
    title: 'رباتیک بزرگسال', 
    dept: 'maharat', 
    price: '۱۲,۰۰۰,۰۰۰', 
    desc: 'طراحی، ساخت و برنامه‌نویسی میکروکنترلرها و ربات‌های هوشمند.', 
    image: '/images/Robatic.webp',
    schedule: 'پنج‌شنبه‌ها - ساعت ۱۰ الی ۱۴', 
    startDate: '۲۰ تیر' 
  },
  { 
    id: 10, 
    slug: 'scratch',
    title: 'اسکرچ (Scratch)', 
    dept: 'maharat', 
    price: '۵,۰۰۰,۰۰۰', 
    desc: 'آموزش منطق برنامه‌نویسی و تفکر الگوریتمی برای کودکان.', 
    image: '/images/Scratch.webp',
    schedule: 'یکشنبه و سه‌شنبه - ساعت ۱۷ الی ۱۹', 
    startDate: '۱۰ مرداد' 
  },
  { 
    id: 12, 
    slug: 'robotics-kids',
    title: 'رباتیک دانش‌آموزی', 
    dept: 'maharat', 
    price: '۷,۵۰۰,۰۰۰', 
    desc: 'آشنایی با سخت‌افزار، الکترونیک و ربات‌های حرکتی.', 
    image: '/images/Robatoc-childern.webp',
    schedule: 'دوشنبه و چهارشنبه - ساعت ۱۵ الی ۱۷', 
    startDate: '۵ مرداد' 
  },
  { 
    id: 1, 
    slug: 'python-basics',
    title: 'پایتون مقدماتی', 
    dept: 'python', 
    price: '۸,۰۰۰,۰۰۰', 
    desc: 'شروع قدرتمند برای ورود به دنیای برنامه‌نویسی تجاری.', 
    image: '/images/Python-M.webp',
    schedule: 'روزهای فرد - ساعت ۱۸ الی ۲۰', 
    startDate: '۱ مرداد' 
  },
  { 
    id: 2, 
    slug: 'python-advanced',
    title: 'پایتون پیشرفته', 
    dept: 'python', 
    price: '۱۰,۰۰۰,۰۰۰', 
    desc: 'مسلط به مباحث پیشرفته پایتون و شیءگرایی برای بازار کار.', 
    image: '/images/Python-P.webp',
    schedule: 'پنج‌شنبه‌ها - ساعت ۱۵ الی ۱۹', 
    startDate: '۱۲ مرداد' 
  },
  { 
    id: 11, 
    slug: 'python-kids',
    title: 'پایتون کودکان', 
    dept: 'python', 
    price: '۶,۵۰۰,۰۰۰', 
    desc: 'زبان پایتون با بیانی ساده و جذاب برای نوجوانان.', 
    image: '/images/Python-childern.webp',
    schedule: 'شنبه و دوشنبه - ساعت ۱۶ الی ۱۸', 
    startDate: '۱ شهریور' 
  },
  { 
    id: 3, 
    slug: 'ai-tools',
    title: 'ابزارهای هوش مصنوعی', 
    dept: 'ai', 
    price: '۷,۰۰۰,۰۰۰', 
    desc: 'تسلط بر ابزارهای کاربردی و مولد هوش مصنوعی برای افزایش بهره‌وری.', 
    image: '/images/Ai-tools.webp',
    schedule: 'روزهای زوج - ساعت ۱۹ الی ۲۱', 
    startDate: '۲۵ تیر' 
  },
  { 
    id: 4, 
    slug: 'machine-learning',
    title: 'ماشین لرنینگ', 
    dept: 'ai', 
    price: '۱۲,۰۰۰,۰۰۰', 
    desc: 'تحلیل داده‌ها، الگوریتم‌ها و ساخت مدل‌های هوشمند یادگیری ماشین.', 
    image: '/images/Machine learning.webp',
    schedule: 'جمعه‌ها - ساعت ۹ صبح الی ۱۳', 
    startDate: '۳۰ تیر' 
  },
  { 
    id: 6, 
    slug: 'photoshop',
    title: 'فتوشاپ (Photoshop)', 
    dept: 'design', 
    price: '۷,۰۰۰,۰۰۰', 
    desc: 'خلق جهان‌های بصری و ورود به بازار کار طراحی و ادیت عکس.', 
    image: '/images/Photoshop.webp',
    schedule: 'یکشنبه و سه‌شنبه - ساعت ۱۸ الی ۲۰', 
    startDate: '۱۵ مرداد' 
  },
  { 
    id: 7, 
    slug: 'illustrator',
    title: 'ایلاستریتور (Illustrator)', 
    dept: 'design', 
    price: '۷,۰۰۰,۰۰۰', 
    desc: 'طراحی برداری، خلق کاراکترها و نشان‌های تجاری حرفه‌ای.', 
    image: '/images/Illustrator.webp',
    schedule: 'دوشنبه و چهارشنبه - ساعت ۱۸ الی ۲۰', 
    startDate: '۲۰ مرداد' 
  },
  { 
    id: 8, 
    slug: 'indesign',
    title: 'ایندیزاین (InDesign)', 
    dept: 'design', 
    price: '۶,۵۰۰,۰۰۰', 
    desc: 'صفحه‌آرایی حرفه‌ای مجلات، کتاب‌ها و کاتالوگ‌های فیزیکی و دیجیتال.', 
    image: '/images/Indesign.webp',
    schedule: 'پنج‌شنبه‌ها - ساعت ۱۴ الی ۱۸', 
    startDate: '۵ شهریور' 
  },
  { 
    id: 9, 
    slug: 'sketch',
    title: 'تصویرسازی اسکیچ', 
    dept: 'design', 
    price: '۶,۰۰۰,۰۰۰', 
    desc: 'پیاده‌سازی ایده‌های خلاقانه بصری در قالب اسکیچ‌های استاندارد.', 
    image: '/images/Sketch.webp',
    schedule: 'روزهای فرد - ساعت ۱۶ الی ۱۸', 
    startDate: '۱۵ شهریور' 
  }
];

// 🚀 دریافت دوره‌های جدید از دیتابیس به صورت داینامیک
const { data: dbCourses } = await useAsyncData('public-courses-list', async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error("خطا در دریافت دوره‌ها:", error);
    return [];
  }
  return data || [];
});

// 🤝 تلفیق: چسباندن دوره‌های دیتابیس به دوره‌های دستی شما
const allCourses = computed(() => {
  const dbActive = (dbCourses.value || [])
    .filter(c => c.is_published === true || c.is_published === 'true')
    .map(c => ({
      id: c.id,
      slug: c.slug, // فیلد جدید اسلاگ برای دیتابیس
      title: c.title,
      dept: c.dept,
      price: c.price,
      desc: c.description, 
      image: c.image_url, 
      schedule: c.schedule,
      startDate: c.start_date
    }));
    
  // اول دوره‌های جدید دیتابیس، بعد دوره‌های قدیمیِ دستی شما قرار می‌گیرد
  return [...dbActive, ...manualCourses];
});

// فیلتر نهایی بر اساس تبِ انتخاب شده
const filteredCourses = computed(() => {
  return allCourses.value.filter(c => c.dept === activeDepartment.value);
});

const getDepartmentName = (id) => {
  const dept = departments.find(d => d.id === id);
  return dept ? dept.name : '';
};

// --- تولید کدهای هوشمند اسکیما ---
const schemaData = computed(() => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": allCourses.value.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Course",
      "name": course.title,
      "description": course.desc,
      "provider": {
        "@type": "Organization",
        "name": "آکادمی داناورس",
        "sameAs": "https://danaverse.ir"
      }
    }
  }))
}));

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify(schemaData.value))
    }
  ]
});
</script>

<style scoped>
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
  position: absolute;
}
/* اعمال محدودیت ۳ خطی برای توضیحات که ظاهر کارت‌ها به هم نریزد */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>