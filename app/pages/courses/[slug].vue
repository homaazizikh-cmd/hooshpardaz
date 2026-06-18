<template>
  <div class="min-h-screen bg-slate-50 dark:bg-brand-dark pt-28 pb-20 transition-colors duration-500 overflow-hidden relative font-sans">
    
    <div class="absolute top-0 rtl:left-1/2 ltr:right-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-4xl relative">
      
      <NuxtLink :to="localePath('/courses')" class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-brand-accent1 dark:hover:text-brand-accent1 font-bold mb-8 transition-colors group relative z-10">
        <svg class="w-5 h-5 transform rtl:group-hover:translate-x-1 ltr:group-hover:-translate-x-1 ltr:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        {{ $t('courseDetail.backBtn') }}
      </NuxtLink>

      <div v-if="course" class="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative z-10">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 border-b border-gray-100 dark:border-gray-700/80">
          <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-md relative group">
            <NuxtImg 
              :src="course.image" 
              :alt="course.title" 
              format="webp"
              preload
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
          </div>
          
          <div class="flex flex-col justify-center">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-brand-accent1 text-xs font-bold w-fit mb-4 border border-blue-100 dark:border-blue-800/20">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-accent1 animate-pulse"></span>
              {{ $t('courseDetail.badge') }}
            </div>
            <h1 class="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-4 leading-tight rtl:text-right ltr:text-left">
              {{ course.title }}
            </h1>
            <p class="text-gray-600 dark:text-gray-400 leading-loose rtl:text-justify ltr:text-left font-medium text-sm md:text-base">
              {{ course.desc }}
            </p>
          </div>
        </div>

        <div class="p-6 md:p-10 bg-gray-50/50 dark:bg-gray-900/20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300">
            <div class="text-2xl rtl:text-right ltr:text-left">📅</div>
            <span class="text-xs text-gray-400 dark:text-gray-500 font-bold rtl:text-right ltr:text-left">{{ $t('courseDetail.daysLabel') }}</span>
            <span class="text-sm md:text-base text-gray-800 dark:text-white font-black leading-relaxed rtl:text-right ltr:text-left">
              {{ course.schedule.days }}
            </span>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300">
            <div class="text-2xl rtl:text-right ltr:text-left">⏰</div>
            <span class="text-xs text-gray-400 dark:text-gray-500 font-bold rtl:text-right ltr:text-left">{{ $t('courseDetail.timeLabel') }}</span>
            <span class="text-sm md:text-base text-gray-800 dark:text-white font-black tracking-tight rtl:text-right ltr:text-left dir-ltr">
              {{ course.schedule.time }}
            </span>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300 sm:col-span-2 md:col-span-1">
            <div class="text-2xl rtl:text-right ltr:text-left">🚀</div>
            <span class="text-xs text-gray-400 dark:text-gray-500 font-bold rtl:text-right ltr:text-left">{{ $t('courseDetail.startDateLabel') }}</span>
            <span class="text-sm md:text-base text-brand-accent1 font-black rtl:text-right ltr:text-left">
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

              <div class="flex-1 text-center rtl:md:text-right ltr:md:text-left relative z-10">
                <div class="flex justify-between items-center w-full mb-2 text-[9px] font-mono text-slate-400 dark:text-slate-600">
                  <span class="tracking-widest flex items-center justify-center rtl:md:justify-start ltr:md:justify-start gap-1.5 ltr:flex-row-reverse">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-500 animate-pulse"></span>
                    {{ $t('courseDetail.mentorLabel') }}
                  </span>
                </div>

                <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {{ course.instructor?.name }}
                </h2>
                
                <p class="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest bg-purple-50 dark:bg-purple-500/10 inline-block px-2.5 py-1 rounded border border-purple-100 dark:border-purple-500/20 mb-4">
                  {{ course.instructor?.title }}
                </p>

                <div class="flex flex-wrap justify-center rtl:md:justify-start ltr:md:justify-start gap-1.5">
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
                  :to="localePath(`/instructors/${course.instructor?.id}`)" 
                  class="relative flex items-center justify-center w-full md:w-auto py-3.5 px-6 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-blue-400 dark:group-hover:border-cyan-500/50 text-sm font-black text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-white transition-all duration-300 overflow-hidden group/btn"
                >
                  <div class="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-purple-600 transition-all duration-500 ease-out group-hover/btn:w-full opacity-10 dark:opacity-20"></div>
                  <span class="relative z-10 flex items-center gap-1">
                    {{ $t('courseDetail.scanInstructorBtn') }}
                    <svg class="w-4 h-4 transform rtl:rotate-180 rtl:group-hover/btn:-translate-x-1.5 ltr:group-hover/btn:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </NuxtLink>
              </div>

            </div>
          </div>

        </div>
        <div class="p-6 md:p-10 border-t border-gray-100 dark:border-gray-700/80 bg-white dark:bg-gray-800 rounded-b-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div class="flex flex-col gap-1 text-center rtl:sm:text-right ltr:sm:text-left">
            <span class="text-xs text-gray-400 dark:text-gray-500 font-bold">{{ $t('courseDetail.investmentLabel') }}</span>
            <div class="flex items-center gap-1 text-blue-600 dark:text-brand-accent1 justify-center sm:justify-start rtl:flex-row ltr:flex-row-reverse">
              <span class="text-2xl md:text-3xl font-black tracking-tight dir-ltr">{{ course.price }}</span>
              <span class="text-xs font-bold opacity-80">{{ $t('courseDetail.currency') }}</span>
            </div>
          </div>

          <NuxtLink :to="localePath(`/register?course=${encodeURIComponent(course.title)}`)" 
                    class="relative overflow-hidden flex items-center justify-center w-full sm:w-auto px-10 bg-brand-dark hover:bg-brand-accent1 dark:bg-gray-700 dark:hover:bg-brand-accent1 text-white py-4 rounded-2xl text-base font-bold transition-all duration-300 shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(56,189,248,0.5)] group/btn text-center">
            <span class="relative z-10 flex items-center gap-2">
              {{ $t('courseDetail.registerBtn') }}
              <svg class="w-5 h-5 rtl:rotate-180 transform rtl:group-hover/btn:-translate-x-1 ltr:group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </NuxtLink>
        </div>

      </div>

      <div v-else class="text-center py-20 bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm relative z-10">
        <div class="text-6xl mb-4">🔍</div>
        <h2 class="text-2xl font-black text-gray-800 dark:text-white mb-2">{{ $t('courseDetail.notFound') }}</h2>
        <NuxtLink :to="localePath('/courses')" class="inline-block bg-brand-dark dark:bg-gray-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-accent1 transition-colors shadow-md">
          {{ $t('courseDetail.notFoundBtn') }}
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const route = useRoute();
const supabase = useSupabaseClient();
const { t, locale } = useI18n();
const localePath = useLocalePath();

const routeParam = route.params.slug || route.params.id; 

const { data: dbData } = await useAsyncData(`course-db-${routeParam}`, async () => {
  const { data } = await supabase
    .from('courses')
    .select('*')
    .or(`slug.eq.${routeParam},id.eq.${parseInt(routeParam) || 0}`)
    .single();
  
  return data;
});

// استفاده از computed برای داینامیک شدن ترجمه‌ها با تغییر زبان
const manualCourses = computed(() => [
  { id: 13, slug: 'icdl', title: t('courseData.c1.title'), dept: 'maharat', price: '6,500,000', desc: t('courseData.c1.desc'), image: '/images/ICDL.webp', schedule: { days: t('courseData.c1.schedule'), time: '16:00 - 18:00' }, startDate: locale.value === 'en' ? 'July 6, 2026' : '۱۵ تیر ۱۴۰۵', instructor: { id: 8, name: t('instructorData.i8.name'), title: t('instructorData.i8.title'), skills: ['ICDL', 'Excel', 'Soft_Skills'], image_url: '/images/instructors/mahdieh-roshan.jpg' } },
  { id: 5, slug: 'robotics-adults', title: t('courseData.c2.title'), dept: 'maharat', price: '12,000,000', desc: t('courseData.c2.desc'), image: '/images/Robatic.webp', schedule: { days: t('courseData.c2.schedule'), time: '10:00 - 14:00' }, startDate: locale.value === 'en' ? 'July 11, 2026' : '۲۰ تیر ۱۴۰۵', instructor: { id: 4, name: t('instructorData.i4.name'), title: t('instructorData.i4.title'), skills: ['Robotics', 'Arduino', 'C++'], image_url: '/images/instructors/hossein-azizi.jpg' } },
  { id: 10, slug: 'scratch', title: t('courseData.c4.title'), dept: 'maharat', price: '5,000,000', desc: t('courseData.c4.desc'), image: '/images/Scratch.webp', schedule: { days: t('courseData.c4.schedule'), time: '17:00 - 19:00' }, startDate: locale.value === 'en' ? 'August 1, 2026' : '۱۰ مرداد ۱۴۰۵', instructor: { id: 3, name: t('instructorData.i3.name'), title: t('instructorData.i3.title'), skills: ['Scratch', 'Algorithm', 'Mentoring'], image_url: '/images/instructors/davood-ghobadi.jpg' } },
  { id: 12, slug: 'robotics-kids', title: t('courseData.c3.title'), dept: 'maharat', price: '7,500,000', desc: t('courseData.c3.desc'), image: '/images/Robatoc-childern.webp', schedule: { days: t('courseData.c3.schedule'), time: '15:00 - 17:00' }, startDate: locale.value === 'en' ? 'July 27, 2026' : '۰۵ مرداد ۱۴۰۵', instructor: { id: 4, name: t('instructorData.i4.name'), title: t('instructorData.i4.title'), skills: ['Robotics', 'Arduino', 'C++'], image_url: '/images/instructors/hossein-azizi.jpg' } },
  { id: 1, slug: 'python-basics', title: t('courseData.c6.title'), dept: 'python', price: '8,000,000', desc: t('courseData.c6.desc'), image: '/images/Python-M.webp', schedule: { days: t('courseData.c6.schedule'), time: '18:00 - 20:00' }, startDate: locale.value === 'en' ? 'July 23, 2026' : '۰۱ مرداد ۱۴۰۵', instructor: { id: 1, name: t('instructorData.i1.name'), title: t('instructorData.i1.title'), skills: ['Python', 'Machine_Learning', 'Deep_Learning'], image_url: '/images/instructors/mehdi-khazaei.jpg' } },
  { id: 2, slug: 'python-advanced', title: t('courseData.c7.title'), dept: 'python', price: '10,000,000', desc: t('courseData.c7.desc'), image: '/images/Python-P.webp', schedule: { days: t('courseData.c7.schedule'), time: '15:00 - 19:00' }, startDate: locale.value === 'en' ? 'August 3, 2026' : '۱۲ مرداد ۱۴۰۵', instructor: { id: 1, name: t('instructorData.i1.name'), title: t('instructorData.i1.title'), skills: ['Python', 'Machine_Learning', 'Deep_Learning'], image_url: '/images/instructors/mehdi-khazaei.jpg' } },
  { id: 11, slug: 'python-kids', title: t('courseData.c5.title'), dept: 'python', price: '6,500,000', desc: t('courseData.c5.desc'), image: '/images/Python-childern.webp', schedule: { days: t('courseData.c5.schedule'), time: '16:00 - 18:00' }, startDate: locale.value === 'en' ? 'August 23, 2026' : '۰۱ شهریور ۱۴۰۵', instructor: { id: 3, name: t('instructorData.i3.name'), title: t('instructorData.i3.title'), skills: ['Python', 'Algorithm', 'Mentoring'], image_url: '/images/instructors/davood-ghobadi.jpg' } },
  { id: 3, slug: 'ai-tools', title: t('courseData.c8.title'), dept: 'ai', price: '7,000,000', desc: t('courseData.c8.desc'), image: '/images/Ai-tools.webp', schedule: { days: t('courseData.c8.schedule'), time: '19:00 - 21:00' }, startDate: locale.value === 'en' ? 'July 16, 2026' : '۲۵ تیر ۱۴۰۵', instructor: { id: 1, name: t('instructorData.i1.name'), title: t('instructorData.i1.title'), skills: ['Python', 'Machine_Learning', 'Deep_Learning'], image_url: '/images/instructors/mehdi-khazaei.jpg' } },
  { id: 4, slug: 'machine-learning', title: t('courseData.c9.title'), dept: 'ai', price: '12,000,000', desc: t('courseData.c9.desc'), image: '/images/Machine learning.webp', schedule: { days: t('courseData.c9.schedule'), time: '09:00 - 13:00' }, startDate: locale.value === 'en' ? 'July 21, 2026' : '۳۰ تیر ۱۴۰۵', instructor: { id: 1, name: t('instructorData.i1.name'), title: t('instructorData.i1.title'), skills: ['Python', 'Machine_Learning', 'Deep_Learning'], image_url: '/images/instructors/mehdi-khazaei.jpg' } },
  { id: 6, slug: 'photoshop', title: t('courseData.c10.title'), dept: 'design', price: '7,000,000', desc: t('courseData.c10.desc'), image: '/images/Photoshop.webp', schedule: { days: t('courseData.c10.schedule'), time: '18:00 - 20:00' }, startDate: locale.value === 'en' ? 'August 6, 2026' : '۱۵ مرداد ۱۴۰۵', instructor: { id: 2, name: t('instructorData.i2.name'), title: t('instructorData.i2.title'), skills: ['UI/UX', 'Photoshop', 'Illustrator'], image_url: '/images/instructors/paniz-borna.jpg' } },
  { id: 7, slug: 'illustrator', title: t('courseData.c11.title'), dept: 'design', price: '7,000,000', desc: t('courseData.c11.desc'), image: '/images/Illustrator.webp', schedule: { days: t('courseData.c11.schedule'), time: '18:00 - 20:00' }, startDate: locale.value === 'en' ? 'August 11, 2026' : '۲۰ مرداد ۱۴۰۵', instructor: { id: 2, name: t('instructorData.i2.name'), title: t('instructorData.i2.title'), skills: ['UI/UX', 'Photoshop', 'Illustrator'], image_url: '/images/instructors/paniz-borna.jpg' } },
  { id: 8, slug: 'indesign', title: t('courseData.c12.title'), dept: 'design', price: '6,500,000', desc: t('courseData.c12.desc'), image: '/images/Indesign.webp', schedule: { days: t('courseData.c12.schedule'), time: '14:00 - 18:00' }, startDate: locale.value === 'en' ? 'August 27, 2026' : '۰۵ شهریور ۱۴۰۵', instructor: { id: 2, name: t('instructorData.i2.name'), title: t('instructorData.i2.title'), skills: ['UI/UX', 'Photoshop', 'Illustrator'], image_url: '/images/instructors/paniz-borna.jpg' } },
  { id: 9, slug: 'sketch', title: t('courseData.c13.title'), dept: 'design', price: '6,000,000', desc: t('courseData.c13.desc'), image: '/images/Sketch.webp', schedule: { days: t('courseData.c13.schedule'), time: '16:00 - 18:00' }, startDate: locale.value === 'en' ? 'September 6, 2026' : '۱۵ شهریور ۱۴۰۵', instructor: { id: 7, name: t('instructorData.i7.name'), title: t('instructorData.i7.title'), skills: ['Figma', 'Product_Design', 'Prototyping'], image_url: '/images/instructors/niusha-khavari.jpg' } }
]);

const course = computed(() => {
  let found = manualCourses.value.find(c => c.slug === routeParam || c.id === parseInt(routeParam));

  if (!found && dbData.value) {
    found = {
      id: dbData.value.id,
      slug: dbData.value.slug,
      title: locale.value === 'en' && dbData.value.title_en ? dbData.value.title_en : dbData.value.title,
      desc: locale.value === 'en' && dbData.value.description_en ? dbData.value.description_en : (dbData.value.description || t('courseDetail.defaultDesc')),
      price: dbData.value.price || t('courseDetail.defaultPrice'),
      image: dbData.value.image_url || '/images/Banner.jpg', 
      startDate: dbData.value.start_date || t('courseDetail.defaultStartDate'),
      schedule: {
        days: dbData.value.schedule || t('courseDetail.defaultScheduleDays'),
        time: ''
      },
      instructor: {
        name: dbData.value.instructor_name || 'اساتید مجرب داناورس',
        title: 'مدرس تخصصی',
        skills: ['آموزش عملی'],
        image_url: '/images/logo-light.png'
      }
    };
  }

  if (found && dbData.value) {
    found.seo_title = dbData.value.seo_title;
    found.seo_description = dbData.value.seo_description;
    found.schema_data = dbData.value.schema_data;
  }

  return found;
});

// 🚀 سئوی پیشرفته و متصل به i18n
useSeoMeta({
  title: () => course.value?.seo_title || t('courseDetail.seo.title', { title: course.value?.title }),
  description: () => course.value?.seo_description || course.value?.desc,
  ogTitle: () => course.value?.seo_title || course.value?.title,
  ogDescription: () => course.value?.seo_description || course.value?.desc,
  ogImage: () => course.value ? `https://danaverse.ir${course.value.image}` : '', 
  twitterCard: 'summary_large_image',
});

// Schema Markup متصل به کامپیوتد برای آپدیت زنده
useHead(() => {
  if (!course.value) return {};
  let finalSchema = {};

  if (course.value.schema_data) {
    try {
      finalSchema = typeof course.value.schema_data === 'string' 
        ? JSON.parse(course.value.schema_data) 
        : course.value.schema_data;
    } catch(e) {}
  } 
  
  if (Object.keys(finalSchema).length === 0) {
    const numericPrice = String(course.value.price).replace(/,/g, '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    finalSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": course.value.title,
      "description": course.value.seo_description || course.value.desc,
      "provider": {
        "@type": "Organization",
        "name": "Danaverse Academy",
        "sameAs": "https://danaverse.ir"
      },
      "image": `https://danaverse.ir${course.value.image}`,
      "offers": {
        "@type": "Offer",
        "category": "Paid",
        "priceCurrency": "IRT",
        "price": numericPrice || 0
      }
    };
  }

  return {
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(finalSchema)
      }
    ]
  };
});
</script>