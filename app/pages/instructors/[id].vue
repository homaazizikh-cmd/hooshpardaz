<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-slate-200 pt-32 pb-24 overflow-hidden relative transition-colors duration-500 font-sans">
    
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    <div class="absolute top-0 left-1/4 w-[800px] h-[600px] bg-blue-400/10 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-6xl relative z-10">
      
      <NuxtLink to="/instructors" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/60 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-200 dark:hover:border-cyan-500/50 font-bold mb-10 transition-all duration-300 group shadow-sm">
        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        بازگشت به دیتابیس اساتید
      </NuxtLink>

      <div v-if="instructor" class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-4">
          <div class="sticky top-32 bg-white/80 dark:bg-[#090e1a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden group">
            
            <div class="hidden dark:block absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

            <div class="w-full flex justify-between items-center mb-8 text-[10px] font-mono text-slate-400 dark:text-slate-600 border-b border-slate-100 dark:border-slate-800/50 pb-2">
              <span class="tracking-widest">ID: 0{{ instructor.id }}</span>
              <span class="flex items-center gap-1 text-green-600 dark:text-emerald-500">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> ONLINE
              </span>
            </div>

            <div class="relative w-40 h-40 mb-8">
              <div class="absolute -inset-4 border border-slate-200 dark:border-slate-800 rounded-full group-hover:border-blue-400/50 dark:group-hover:border-cyan-500/50 animate-[spin_8s_linear_infinite] transition-colors duration-500"></div>
              <div class="absolute -inset-2 border border-slate-200 dark:border-slate-800 border-dashed rounded-full group-hover:border-purple-400/50 dark:group-hover:border-purple-500/50 animate-[spin_12s_linear_infinite_reverse] transition-colors duration-500"></div>
              
              <img 
                :src="instructor.image_url" 
                :alt="instructor.name" 
                class="w-full h-full object-cover rounded-full border-4 border-white dark:border-[#090e1a] relative z-10 shadow-lg dark:shadow-2xl bg-slate-100 dark:bg-slate-800 grayscale-0 dark:grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>

            <h1 class="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
              {{ instructor.name }}
            </h1>
            <p class="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest bg-purple-50 dark:bg-purple-500/10 inline-block px-4 py-1.5 rounded-lg border border-purple-100 dark:border-purple-500/20 mb-8">
              {{ instructor.title }}
            </p>

            <div class="w-full mt-2">
              <div class="text-right mb-4 flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                ACTIVE_MODULES
              </div>
              
              <div class="flex flex-col gap-2.5 w-full">
                <div v-for="skill in instructor.skills" :key="skill" class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 group-hover:border-blue-200 dark:group-hover:border-cyan-500/30 transition-all duration-300">
                  <div class="flex items-center gap-3">
                     <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-blue-100/50 dark:bg-[#0f172a] border border-blue-200/50 dark:border-slate-800 text-blue-600 dark:text-cyan-400 shadow-inner">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                     </div>
                     <span class="text-[11px] md:text-xs font-bold text-slate-700 dark:text-slate-200 tracking-wide">{{ skill }}</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                     <span class="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-500 animate-pulse"></span>
                     <span class="text-[9px] font-mono text-slate-400 dark:text-slate-500 tracking-widest">LOADED</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="lg:col-span-8 flex flex-col gap-8">
          
          <div class="bg-white/80 dark:bg-[#090e1a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden group">
            
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 dark:group-hover:bg-cyan-500/10 transition-colors"></div>

            <div class="flex items-center gap-3 mb-8 relative z-10">
              <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex items-center justify-center text-2xl">
                🧠
              </div>
              <div>
                <h2 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight">پروفایل و بیوگرافی</h2>
                <p class="text-xs font-mono text-slate-500 dark:text-slate-500 mt-1 uppercase">DATA_LOG // ABOUT_MENTOR</p>
              </div>
            </div>
            
            <p class="text-slate-600 dark:text-slate-300 leading-[2.2] text-justify font-medium text-sm md:text-base relative z-10">
              {{ instructor.bio }}
            </p>
          </div>

          <div class="bg-white/80 dark:bg-[#090e1a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
            
            <div class="flex items-center justify-between mb-10 relative z-10">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-slate-800 border border-purple-100 dark:border-slate-700 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div>
                  <h2 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight">دوره‌های آموزشی فعال</h2>
                  <p class="text-xs font-mono text-slate-500 dark:text-slate-500 mt-1 uppercase">DETECTED_COURSES: {{ instructorCourses.length }}</p>
                </div>
              </div>
            </div>

            <div v-if="instructorCourses.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              
              <NuxtLink 
                v-for="course in instructorCourses" 
                :key="course.id" 
                :to="`/courses/${course.id}`"
                class="flex flex-col bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-sm hover:shadow-xl dark:hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)]"
              >
                <div class="w-full h-40 overflow-hidden relative">
                  <div class="absolute top-0 inset-x-0 h-6 bg-black/60 backdrop-blur-sm z-20 flex items-center px-3 gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-red-500"></span>
                    <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span class="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <img :src="course.image" :alt="course.title" class="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                </div>
                
                <div class="p-6 flex-1 flex flex-col relative">
                  <h3 class="text-lg font-black text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                    {{ course.title }}
                  </h3>
                  
                  <div class="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <span class="text-[10px] font-mono text-slate-500 dark:text-slate-500">INVESTMENT_REQ:</span>
                    <span class="text-sm font-black text-blue-600 dark:text-cyan-400">{{ course.price }} <span class="text-[10px] font-normal opacity-70">تومان</span></span>
                  </div>
                </div>
              </NuxtLink>

            </div>
            
            <div v-else class="text-center py-16 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-200 dark:border-slate-800 border-dashed">
              <div class="text-4xl mb-4 opacity-50 grayscale">📂</div>
              <p class="text-slate-600 dark:text-slate-400 font-bold">درحال حاضر دوره‌ای در سیستم ثبت نشده است.</p>
            </div>

          </div>

        </div>

      </div>

      <div v-else class="text-center py-32 bg-white/80 dark:bg-[#090e1a]/80 backdrop-blur-xl rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl relative z-10 mt-10">
        <div class="text-7xl mb-6 opacity-50 grayscale">📡</div>
        <h2 class="text-3xl font-black text-slate-900 dark:text-white mb-4">پروفایل پیدا نشد!</h2>
        <p class="text-slate-500 font-mono text-sm mb-8">ERROR 404: MENTOR_DATA_NOT_FOUND</p>
        <NuxtLink to="/instructors" class="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/40 text-white dark:text-cyan-400 border border-transparent dark:border-cyan-500/50 rounded-xl font-bold transition-all shadow-lg dark:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          بازگشت به دیتابیس
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const route = useRoute();

const instructors = [
  { id: 1, name: 'مهدی خزاعی', dept: 'ai', title: 'متخصص پایتون و AI', bio: 'توسعه‌دهنده ارشد و پژوهشگر هوش مصنوعی. ایشان با سال‌ها تجربه در پیاده‌سازی مدل‌های یادگیری ماشین (Machine Learning) و شبکه‌های عصبی عمیق، رویکردی کاملاً پروژه‌محور در کلاس‌های خود دارند. هدف اصلی کلاس‌های ایشان، رساندن هنرجو از سطح صفر به توانایی ساخت اپلیکیشن‌های هوشمند واقعی است.', skills: ['Python', 'Machine_Learning', 'Deep_Learning', 'TensorFlow'], image_url: '/images/instructors/mehdi-khazaei.jpg' },
  { id: 2, name: 'پانیذ برنا', dept: 'design', title: 'مدیر هنری و گرافیک', bio: 'متخصص در خلق هویت بصری، رابط کاربری (UI/UX) و تصویرسازی دیجیتال با بیش از ۸ سال تجربه در پروژه‌های استارتاپی. کلاس‌های ایشان فقط آموزش نرم‌افزار نیست، بلکه آموزش "دیدن" و "خلق کردن" است. هنرجویان ایشان به راحتی جذب بازار کار طراحی محصول و گرافیک تبلیغاتی می‌شوند.', skills: ['UI/UX', 'Photoshop', 'Illustrator', 'Figma'], image_url: '/images/instructors/paniz-borna.jpg' },
  { id: 3, name: 'داود قبادی', dept: 'python', title: 'منتور برنامه‌نویسی', bio: 'کارشناس نرم‌افزار و متخصص در آموزش مفاهیم پایه برنامه‌نویسی و پایتون با رویکرد گیمیفیکیشن و استعدادیابی کودکان و نوجوانان. صبر و حوصله بی‌نظیر ایشان در کنار دانش فنی بالا، باعث می‌شود سخت‌ترین مفاهیم الگوریتمی برای رده‌های سنی پایین به یک بازی جذاب تبدیل شود.', skills: ['Python_Kids', 'Algorithm', 'Mentoring', 'Scratch'], image_url: '/images/instructors/davood-ghobadi.jpg' },
  { id: 4, name: 'حسین عزیزی', dept: 'maharat', title: 'متخصص مکاترونیک', bio: 'طراح سیستم‌های تعبیه‌شده و رباتیک. منتور ارشد تیم‌های المپیاد و مدرس دوره‌های تخصصی الکترونیک و آردوینو. در کارگاه‌های ایشان، تئوری جای خود را به ساختن ربات‌های واقعی و برنامه‌نویسی میکروکنترلرها می‌دهد.', skills: ['Robotics', 'Arduino', 'C++', 'IoT'], image_url: '/images/instructors/hossein-azizi.jpg' },
  { id: 5, name: 'فرانک خزاعی', dept: 'ai', title: 'پژوهشگر داده‌کاوی', bio: 'متخصص تحلیل داده‌های کلان و ابزارهای مولد هوش مصنوعی (Generative AI). مشاور پروژه‌های داده‌محور در سازمان‌های بزرگ و تجاری. ایشان به شما می‌آموزند چگونه از دل هزاران ردیف داده، اطلاعات ارزشمند استخراج کنید.', skills: ['Data_Science', 'Big_Data', 'NLP', 'ChatGPT_API'], image_url: '/images/instructors/faranak-khazaei.jpg' },
  { id: 6, name: 'مجید مهربخش', dept: 'python', title: 'توسعه‌دهنده بک‌اند', bio: 'برنامه‌نویس ارشد سرور با تسلط کامل بر فریم‌ورک‌های پایتونی مثل جنگو و فست‌ای‌پی‌آی. عاشق به چالش کشیدن هنرجویان با حل مشکلات پیچیده سیستمی و آماده‌سازی آن‌ها برای شرکت در مصاحبه‌های استخدامی دشوار.', skills: ['Django', 'FastAPI', 'PostgreSQL', 'Docker'], image_url: '/images/instructors/majid-mehrbakhsh.jpg' },
  { id: 7, name: 'نیوشا خاوری', dept: 'design', title: 'طراح محصول', bio: 'طراح تجربه کاربری با تمرکز بر کاربرپذیری محصولات نرم‌افزاری. مسلط به طراحی دیزاین‌سیستم‌های مقیاس‌پذیر. در دوره‌های ایشان یاد می‌گیرید چگونه محصولی طراحی کنید که کاربران عاشق استفاده از آن شوند.', skills: ['Figma', 'Product_Design', 'Prototyping', 'User_Research'], image_url: '/images/instructors/niusha-khavari.jpg' },
  { id: 8, name: 'مهدیه روشن', dept: 'maharat', title: 'مدرس مهارت‌های نرم', bio: 'متخصص آموزش مهارت‌های پایه کامپیوتر (ICDL) و ابزارهای اداری. راهنمای هنرجویان برای ورود سریع و مطمئن به بازار کار اداری و سازمانی با جدیدترین متدهای آموزشی روز.', skills: ['ICDL', 'Excel_Expert', 'Windows', 'Word'], image_url: '/images/instructors/mahdieh-roshan.jpg' }
];

const allCourses = [
  { id: 13, title: 'مهارت‌های هفت‌گانه (ICDL)', price: '۴,۵۰۰,۰۰۰', instructor_id: 8, image: '/images/ICDL.jpg' },
  { id: 5, title: 'رباتیک بزرگسال', price: '۱۲,۰۰۰,۰۰۰', instructor_id: 4, image: '/images/Robatic.jpg' },
  { id: 12, title: 'رباتیک دانش‌آموزی', price: '۷,۵۰۰,۰۰۰', instructor_id: 4, image: '/images/Robatoc-childern.jpg' },
  { id: 10, title: 'اسکرچ (Scratch)', price: '۵,۰۰۰,۰۰۰', instructor_id: 3, image: '/images/Scratch.jpg' },
  { id: 11, title: 'پایتون کودکان', price: '۶,۵۰۰,۰۰۰', instructor_id: 3, image: '/images/Python-childern.jpg' },
  { id: 1, title: 'پایتون مقدماتی', price: '۸,۰۰۰,۰۰۰', instructor_id: 1, image: '/images/Python-M.jpg' },
  { id: 2, title: 'پایتون پیشرفته', price: '۱۰,۰۰۰,۰۰۰', instructor_id: 6, image: '/images/Python-P.jpg' },
  { id: 3, title: 'ابزارهای هوش مصنوعی', price: '۷,۰۰۰,۰۰۰', instructor_id: 5, image: '/images/Ai-tools.jpg' },
  { id: 4, title: 'ماشین لرنینگ', price: '۱۲,۰۰۰,۰۰۰', instructor_id: 1, image: '/images/Machine learning.jpg' },
  { id: 6, title: 'فتوشاپ (Photoshop)', price: '۷,۰۰۰,۰۰۰', instructor_id: 2, image: '/images/Photoshop.jpg' },
  { id: 7, title: 'ایلاستریتور (Illustrator)', price: '۷,۰۰۰,۰۰۰', instructor_id: 2, image: '/images/Illustrator.jpg' },
  { id: 8, title: 'ایندیزاین (InDesign)', price: '۶,۵۰۰,۰۰۰', instructor_id: 2, image: '/images/Indesign.jpg' },
  { id: 9, title: 'تصویرسازی اسکیچ', price: '۶,۰۰۰,۰۰۰', instructor_id: 7, image: '/images/Sketch.jpg' }
];

const instructor = computed(() => {
  return instructors.find(i => i.id === parseInt(route.params.id));
});

const instructorCourses = computed(() => {
  if (!instructor.value) return [];
  return allCourses.filter(c => c.instructor_id === instructor.value.id);
});

// 🚀 سئوی فوق‌پیشرفته (Dynamic Meta Tags)
useSeoMeta({
  title: () => instructor.value ? `رزومه و دوره‌های ${instructor.value.name} | آکادمی هوش‌پرداز` : 'پروفایل استاد پیدا نشد',
  description: () => instructor.value ? instructor.value.bio.substring(0, 160) : '',
  ogTitle: () => instructor.value ? `${instructor.value.name} - ${instructor.value.title}` : '',
  ogDescription: () => instructor.value ? instructor.value.bio.substring(0, 160) : '',
  ogImage: () => instructor.value ? `https://hoooshpardaz.ir${instructor.value.image_url}` : '',
  ogType: 'profile',
  twitterCard: 'summary_large_image',
});

// 🧠 تزریق کدهای ساختاریافته گوگل (Person Schema)
useHead({
  link: [
    { 
      rel: 'canonical', 
      href: () => instructor.value ? `https://hoooshpardaz.ir/instructors/${instructor.value.id}` : 'https://hoooshpardaz.ir/instructors' 
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => {
        if (!instructor.value) return null;
        return JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": instructor.value.name,
          "jobTitle": instructor.value.title,
          "description": instructor.value.bio,
          "image": `https://hoooshpardaz.ir${instructor.value.image_url}`,
          "url": `https://hoooshpardaz.ir/instructors/${instructor.value.id}`,
          "affiliation": {
            "@type": "Organization",
            "name": "آکادمی هوش‌پرداز",
            "url": "https://hoooshpardaz.ir"
          },
          "knowsAbout": instructor.value.skills
        })
      })
    }
  ]
});
</script>