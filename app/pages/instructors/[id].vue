<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-slate-200 pt-32 pb-24 overflow-hidden relative transition-colors duration-500 font-sans">
    
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    <div class="absolute top-0 rtl:left-1/4 ltr:right-1/4 w-[800px] h-[600px] bg-blue-400/10 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-20 rtl:right-1/4 ltr:left-1/4 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-6xl relative z-10">
      
      <NuxtLink :to="localePath('/instructors')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/60 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-200 dark:hover:border-cyan-500/50 font-bold mb-10 transition-all duration-300 group shadow-sm">
        <svg class="w-5 h-5 transform rtl:group-hover:translate-x-1 ltr:group-hover:-translate-x-1 ltr:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        {{ $t('instructorDetail.backBtn') }}
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
              
              <NuxtImg 
                :src="instructor.image_url || '/images/default-avatar.png'" 
                :alt="`استاد ${instructor.name}`" 
                format="webp"
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
              <div class="text-right ltr:text-left mb-4 flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                {{ $t('instructorDetail.skillsTitle') }}
              </div>
              
              <div class="flex flex-col gap-2.5 w-full">
                <div v-for="skill in (instructor.skills || [])" :key="skill" class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 group-hover:border-blue-200 dark:group-hover:border-cyan-500/30 transition-all duration-300">
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
            
            <div class="absolute rtl:-right-10 ltr:-left-10 -top-10 w-40 h-40 bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 dark:group-hover:bg-cyan-500/10 transition-colors"></div>

            <div class="flex items-center gap-3 mb-8 relative z-10">
              <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex items-center justify-center text-2xl">
                🧠
              </div>
              <div class="rtl:text-right ltr:text-left">
                <h2 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{{ $t('instructorDetail.bioTitle') }}</h2>
                <p class="text-xs font-mono text-slate-500 dark:text-slate-500 mt-1 uppercase">DATA_LOG // ABOUT_MENTOR</p>
              </div>
            </div>
            
            <p class="text-slate-600 dark:text-slate-300 leading-[2.2] rtl:text-justify ltr:text-left font-medium text-sm md:text-base relative z-10">
              {{ instructor.bio }}
            </p>
          </div>

          <div class="bg-white/80 dark:bg-[#090e1a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
            
            <div class="flex items-center justify-between mb-10 relative z-10">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-slate-800 border border-purple-100 dark:border-slate-700 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div class="rtl:text-right ltr:text-left">
                  <h2 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{{ $t('instructorDetail.coursesTitle') }}</h2>
                  <p class="text-xs font-mono text-slate-500 dark:text-slate-500 mt-1 uppercase">DETECTED_COURSES: {{ instructorCourses.length }}</p>
                </div>
              </div>
            </div>

            <div v-if="instructorCourses.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              
              <NuxtLink 
                v-for="course in instructorCourses" 
                :key="course.id" 
                :to="localePath(`/courses/${course.id}`)"
                class="flex flex-col bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-sm hover:shadow-xl dark:hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)]"
              >
                <div class="w-full h-40 overflow-hidden relative">
                  <div class="absolute top-0 inset-x-0 h-6 bg-black/60 backdrop-blur-sm z-20 flex items-center px-3 gap-1.5 ltr:flex-row-reverse">
                    <span class="w-2 h-2 rounded-full bg-red-500"></span>
                    <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span class="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <NuxtImg :src="course.image" :alt="course.title" format="webp" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                </div>
                
                <div class="p-6 flex-1 flex flex-col relative rtl:text-right ltr:text-left">
                  <h3 class="text-lg font-black text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                    {{ course.title }}
                  </h3>
                  
                  <div class="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <span class="text-[10px] font-mono text-slate-500 dark:text-slate-500">INVESTMENT_REQ:</span>
                    <span class="text-sm font-black text-blue-600 dark:text-cyan-400 dir-ltr">{{ course.price }} <span class="text-[10px] font-normal opacity-70">{{ $t('instructorDetail.currency') }}</span></span>
                  </div>
                </div>
              </NuxtLink>

            </div>
            
            <div v-else class="text-center py-16 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-200 dark:border-slate-800 border-dashed">
              <div class="text-4xl mb-4 opacity-50 grayscale">📂</div>
              <p class="text-slate-600 dark:text-slate-400 font-bold">{{ $t('instructorDetail.noCourses') }}</p>
            </div>

          </div>

        </div>

      </div>

      <div v-else class="text-center py-32 bg-white/80 dark:bg-[#090e1a]/80 backdrop-blur-xl rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl relative z-10 mt-10">
        <div class="text-7xl mb-6 opacity-50 grayscale">📡</div>
        <h2 class="text-3xl font-black text-slate-900 dark:text-white mb-4">{{ $t('instructorDetail.notFound') }}</h2>
        <p class="text-slate-500 font-mono text-sm mb-8">ERROR 404: MENTOR_DATA_NOT_FOUND</p>
        <NuxtLink :to="localePath('/instructors')" class="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/40 text-white dark:text-cyan-400 border border-transparent dark:border-cyan-500/50 rounded-xl font-bold transition-all shadow-lg dark:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          {{ $t('instructorDetail.notFoundBtn') }}
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const route = useRoute();
const supabase = useSupabaseClient();
const { t } = useI18n();
const localePath = useLocalePath();
const routeId = parseInt(route.params.id);

// 🚀 اتصال به دیتابیس (برای جلوگیری از ارور 404 اساتید جدید)
const { data: dbInstructor } = await useAsyncData(`instructor-${routeId}`, async () => {
  if (!routeId) return null;
  const { data } = await supabase
    .from('instructors')
    .select('*')
    .eq('id', routeId)
    .single();
  return data;
});

// داینامیک کردن اطلاعات ۸ استاد بر اساس زبان انتخابی (وصل شده به فایل i18n)
const manualInstructors = computed(() => [
  { id: 1, name: t('instructorData.i1.name'), dept: 'ai', title: t('instructorData.i1.title'), bio: t('instructorData.i1.bio'), skills: ['Python', 'Machine_Learning', 'Deep_Learning', 'TensorFlow'], image_url: '/images/instructors/mehdi-khazaei.jpg' },
  { id: 2, name: t('instructorData.i2.name'), dept: 'design', title: t('instructorData.i2.title'), bio: t('instructorData.i2.bio'), skills: ['UI/UX', 'Photoshop', 'Illustrator', 'Figma'], image_url: '/images/instructors/paniz-borna.jpg' },
  { id: 3, name: t('instructorData.i3.name'), dept: 'python', title: t('instructorData.i3.title'), bio: t('instructorData.i3.bio'), skills: ['Python_Kids', 'Algorithm', 'Mentoring', 'Scratch'], image_url: '/images/instructors/davood-ghobadi.jpg' },
  { id: 4, name: t('instructorData.i4.name'), dept: 'maharat', title: t('instructorData.i4.title'), bio: t('instructorData.i4.bio'), skills: ['Robotics', 'Arduino', 'C++', 'IoT'], image_url: '/images/instructors/hossein-azizi.jpg' },
  { id: 5, name: t('instructorData.i5.name'), dept: 'ai', title: t('instructorData.i5.title'), bio: t('instructorData.i5.bio'), skills: ['Data_Science', 'Big_Data', 'NLP', 'ChatGPT_API'], image_url: '/images/instructors/faranak-khazaei.jpg' },
  { id: 6, name: t('instructorData.i6.name'), dept: 'python', title: t('instructorData.i6.title'), bio: t('instructorData.i6.bio'), skills: ['Django', 'FastAPI', 'PostgreSQL', 'Docker'], image_url: '/images/instructors/majid-mehrbakhsh.jpg' },
  { id: 7, name: t('instructorData.i7.name'), dept: 'design', title: t('instructorData.i7.title'), bio: t('instructorData.i7.bio'), skills: ['Figma', 'Product_Design', 'Prototyping', 'User_Research'], image_url: '/images/instructors/niusha-khavari.jpg' },
  { id: 8, name: t('instructorData.i8.name'), dept: 'maharat', title: t('instructorData.i8.title'), bio: t('instructorData.i8.bio'), skills: ['ICDL', 'Excel_Expert', 'Windows', 'Word'], image_url: '/images/instructors/mahdieh-roshan.jpg' }
]);

// داینامیک کردن اسامی دوره‌ها
const allCourses = computed(() => [
  { id: 1, title: t('courseNames.c1'), price: '4,500,000', instructor_id: 8, image: '/images/ICDL.webp' },
  { id: 5, title: t('courseNames.c2'), price: '12,000,000', instructor_id: 4, image: '/images/Robatic.webp' },
  { id: 12, title: t('courseNames.c3'), price: '7,500,000', instructor_id: 4, image: '/images/Robatoc-childern.webp' },
  { id: 10, title: t('courseNames.c4'), price: '5,000,000', instructor_id: 3, image: '/images/Scratch.webp' },
  { id: 11, title: t('courseNames.c5'), price: '6,500,000', instructor_id: 3, image: '/images/Python-childern.webp' },
  { id: 1, title: t('courseNames.c6'), price: '8,000,000', instructor_id: 1, image: '/images/Python-M.webp' },
  { id: 2, title: t('courseNames.c7'), price: '10,000,000', instructor_id: 6, image: '/images/Python-P.webp' },
  { id: 3, title: t('courseNames.c8'), price: '7,000,000', instructor_id: 5, image: '/images/Ai-tools.webp' },
  { id: 4, title: t('courseNames.c9'), price: '12,000,000', instructor_id: 1, image: '/images/Machine learning.webp' },
  { id: 6, title: t('courseNames.c10'), price: '7,000,000', instructor_id: 2, image: '/images/Photoshop.webp' },
  { id: 7, title: t('courseNames.c11'), price: '7,000,000', instructor_id: 2, image: '/images/Illustrator.webp' },
  { id: 8, title: t('courseNames.c12'), price: '6,500,000', instructor_id: 2, image: '/images/Indesign.webp' },
  { id: 9, title: t('courseNames.c13'), price: '6,000,000', instructor_id: 7, image: '/images/Sketch.webp' }
]);

// تلفیق هوشمندانه دیتای ثابت با دیتابیس
const instructor = computed(() => {
  let found = manualInstructors.value.find(i => i.id === routeId);
  if (!found && dbInstructor.value) {
    // 👈 برای اطلاعات دیتابیس، در آینده باید ترجمه آن از دیتابیس خوانده شود
    // اما فعلاً ساختار اصلی حفظ شده است.
    found = {
      id: dbInstructor.value.id,
      name: dbInstructor.value.name,
      dept: dbInstructor.value.dept,
      title: dbInstructor.value.title,
      bio: dbInstructor.value.bio || t('instructorDetail.noCourses'),
      skills: Array.isArray(dbInstructor.value.skills) ? dbInstructor.value.skills : [],
      image_url: dbInstructor.value.image_url || '/images/default-avatar.png'
    };
  }
  return found;
});

const instructorCourses = computed(() => {
  if (!instructor.value) return [];
  return allCourses.value.filter(c => c.instructor_id === instructor.value.id);
});

// 🚀 سئوی فوق‌پیشرفته (اتصال به i18n برای ترجمه زنده متاتگ‌های گوگل)
useSeoMeta({
  title: () => instructor.value ? t('instructorDetail.seo.title', { name: instructor.value.name, title: instructor.value.title }) : t('instructorDetail.seo.notFound'),
  description: () => instructor.value ? t('instructorDetail.seo.desc', { name: instructor.value.name, title: instructor.value.title }) : '',
  keywords: () => instructor.value ? t('instructorDetail.seo.keywords', { name: instructor.value.name, title: instructor.value.title }) : '',
  ogTitle: () => instructor.value ? t('instructorDetail.seo.ogTitle', { name: instructor.value.name }) : '',
  ogDescription: () => instructor.value ? instructor.value.bio.substring(0, 160) + '...' : '',
  ogImage: () => instructor.value ? `https://danaverse.ir${instructor.value.image_url}` : '',
  ogType: 'profile',
  twitterCard: 'summary_large_image',
});

// 🧠 تزریق کدهای ساختاریافته گوگل با رفع باگ Hydration
useHead(() => {
  if (!instructor.value) return {};

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": instructor.value.name,
    "jobTitle": instructor.value.title,
    "description": instructor.value.bio,
    "image": `https://danaverse.ir${instructor.value.image_url}`,
    "url": `https://danaverse.ir/instructors/${instructor.value.id}`,
    "affiliation": {
      "@type": "Organization",
      "name": "Danaverse Academy",
      "url": "https://danaverse.ir"
    },
    "knowsAbout": instructor.value.skills
  };

  return {
    link: [
      { 
        rel: 'canonical', 
        href: `https://danaverse.ir/instructors/${instructor.value.id}` 
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schemaJson)
      }
    ]
  };
});
</script>