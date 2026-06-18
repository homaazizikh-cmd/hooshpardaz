<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-slate-200 pt-32 pb-24 overflow-hidden relative selection:bg-blue-500 selection:text-white transition-colors duration-500">
    
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    
    <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-400/20 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse duration-1000"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-black tracking-[0.2em] mb-8 uppercase backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <span class="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-ping"></span>
          {{ $t('instructors.badge') }}
        </div>
        
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
          {{ $t('instructors.title1') }} <br class="hidden md:block">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            {{ $t('instructors.titleHighlight') }}
          </span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed" v-html="$t('instructors.subtitle')"></p>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-4 mb-20 relative z-20">
        <button 
          v-for="tab in translatedDepartments" 
          :key="tab.id"
          @click="activeDept = tab.id"
          class="relative px-6 py-2.5 rounded-full text-sm font-black transition-all duration-300 overflow-hidden group border"
          :class="activeDept === tab.id 
            ? 'border-blue-500 text-blue-700 dark:text-white shadow-md dark:shadow-[0_0_20px_rgba(59,130,246,0.3)] bg-blue-50 dark:bg-blue-950/50' 
            : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-600 bg-white/50 dark:bg-transparent'"
        >
          <div v-if="activeDept === tab.id" class="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-600/20 dark:to-purple-600/20"></div>
          <span class="relative z-10">{{ tab.name }}</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <NuxtLink 
          v-for="instructor in filteredInstructors" 
          :key="instructor.id"
          :to="localePath(`/instructors/${instructor.id}`)"
          class="group relative"
        >
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-600 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>

          <div class="relative h-full bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 group-hover:border-blue-200 dark:group-hover:border-slate-700/50 rounded-[2rem] p-8 overflow-hidden transition-all duration-300 flex flex-col shadow-sm group-hover:shadow-xl dark:shadow-none">
            
            <div class="hidden dark:block absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

            <div class="flex justify-between items-center w-full mb-8 text-[10px] font-mono text-slate-400 dark:text-slate-600">
              <span class="tracking-widest">[ SYS_ID: 0{{ instructor.id }} ]</span>
              <span class="flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-cyan-500 transition-colors">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z"/></svg>
                {{ $t('instructors.card.active') }}
              </span>
            </div>

            <div class="relative w-32 h-32 mx-auto mb-6">
              <div class="absolute -inset-3 border border-slate-200 dark:border-slate-800 rounded-full group-hover:border-blue-400/50 dark:group-hover:border-cyan-500/50 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500"></div>
              <div class="absolute -inset-1 border border-slate-200 dark:border-slate-800 border-dashed rounded-full group-hover:border-purple-400/50 dark:group-hover:border-purple-500/50 group-hover:animate-[spin_6s_linear_infinite_reverse] transition-all duration-500"></div>
              
              <NuxtImg 
                :src="instructor.image_url || '/images/default-avatar.png'" 
                :alt="instructor.name" 
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover rounded-full border-4 border-white dark:border-[#090e1a] shadow-lg dark:shadow-2xl bg-slate-100 dark:bg-slate-800 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 relative z-10" 
              />
            </div>

            <div class="text-center z-10 mb-6">
              <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {{ instructor.name }}
              </h2>
              <p class="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest bg-purple-50 dark:bg-purple-500/10 inline-block px-3 py-1.5 rounded-md border border-purple-100 dark:border-purple-500/20">
                {{ instructor.title }}
              </p>
            </div>

            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium mb-8 text-center line-clamp-3 px-2 z-10 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
              {{ instructor.bio }}
            </p>

            <div class="mt-auto flex flex-wrap justify-center gap-2 mb-8 z-10">
              <span 
                v-for="skill in (instructor.skills || []).slice(0, 3)" 
                :key="skill" 
                class="text-[10px] px-2.5 py-1 rounded bg-slate-50 dark:bg-[#0f172a] text-blue-600 dark:text-cyan-500 border border-slate-200 dark:border-slate-800 font-mono group-hover:border-blue-300 dark:group-hover:border-cyan-500/30 transition-colors"
              >
                > {{ skill }}
              </span>
              <span v-if="(instructor.skills || []).length > 3" class="text-[10px] px-2 py-1 rounded bg-slate-50 dark:bg-[#0f172a] text-slate-500 border border-slate-200 dark:border-slate-800 font-mono">
                +{{ instructor.skills.length - 3 }}
              </span>
            </div>

            <div class="w-full relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-blue-300 dark:group-hover:border-cyan-500/50 transition-colors z-10">
              <div class="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-purple-600 transition-all duration-500 ease-out group-hover:w-full opacity-10 dark:opacity-20"></div>
              <div class="relative py-3.5 flex items-center justify-center gap-2 text-sm font-black text-slate-600 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-white transition-colors">
                {{ $t('instructors.card.scanBtn') }}
                <svg class="w-4 h-4 transform rtl:rotate-180 rtl:group-hover:-translate-x-2 ltr:group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>

          </div>
        </NuxtLink>

      </div>

      <div v-if="filteredInstructors.length === 0" class="text-center py-24 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md border border-slate-300 dark:border-slate-800 border-dashed rounded-[3rem] mt-10 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        <div class="text-6xl mb-6 relative z-10 opacity-50 grayscale">📡</div>
        <h3 class="text-2xl font-black text-slate-800 dark:text-white mb-3 relative z-10">{{ $t('instructors.empty.title') }}</h3>
        <p class="text-slate-500 font-mono text-sm relative z-10">{{ $t('instructors.empty.desc') }}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const supabase = useSupabaseClient();
const { t, locale } = useI18n();
const localePath = useLocalePath();

// 🎯 داینامیک کردن متاتگ‌های سئو برای حالت دو زبانه
useSeoMeta({
  title: () => t('instructors.seo.title'),
  description: () => t('instructors.seo.desc'),
  keywords: 'اساتید برنامه نویسی, استاد هوش مصنوعی, بهترین استاد پایتون, مدرس طراحی سایت, منتور برنامه نویسی, داود قبادی, پانیذ برنا, مهدی خزاعی',
  ogTitle: () => t('instructors.seo.ogTitle'),
  ogDescription: () => t('instructors.seo.ogDesc'),
  ogImage: 'https://danaverse.ir/images/Banner.jpg', 
  twitterCard: 'summary_large_image',
});

const activeDept = ref('all');

// 🎯 داینامیک کردن تب‌های دپارتمان بر اساس زبان
const translatedDepartments = computed(() => [
  { id: 'all', name: t('instructors.tabs.all') },
  { id: 'ai', name: t('instructors.tabs.ai') },
  { id: 'python', name: t('instructors.tabs.python') },
  { id: 'design', name: t('instructors.tabs.design') },
  { id: 'maharat', name: t('instructors.tabs.maharat') }
]);

// 🚀 تبدیل به حالت Computed برای ترجمه لحظه‌ای دیتای استاتیک اساتید
const manualInstructors = computed(() => [
  { id: 1, name: t('instructorData.i1.name'), dept: 'ai', title: t('instructorData.i1.title'), bio: t('instructorData.i1.bio'), skills: ['Python', 'Machine_Learning', 'Deep_Learning'], image_url: '/images/instructors/mehdi-khazaei.jpg' },
  { id: 2, name: t('instructorData.i2.name'), dept: 'design', title: t('instructorData.i2.title'), bio: t('instructorData.i2.bio'), skills: ['UI/UX', 'Photoshop', 'Illustrator'], image_url: '/images/instructors/paniz-borna.jpg' },
  { id: 3, name: t('instructorData.i3.name'), dept: 'python', title: t('instructorData.i3.title'), bio: t('instructorData.i3.bio'), skills: ['Python', 'Algorithm', 'Mentoring'], image_url: '/images/instructors/davood-ghobadi.jpg' },
  { id: 4, name: t('instructorData.i4.name'), dept: 'maharat', title: t('instructorData.i4.title'), bio: t('instructorData.i4.bio'), skills: ['Robotics', 'Arduino', 'C++'], image_url: '/images/instructors/hossein-azizi.jpg' },
  { id: 5, name: t('instructorData.i5.name'), dept: 'ai', title: t('instructorData.i5.title'), bio: t('instructorData.i5.bio'), skills: ['Data_Science', 'Big_Data', 'NLP'], image_url: '/images/instructors/sara-mehrabi.jpg' },
  { id: 6, name: t('instructorData.i6.name'), dept: 'python', title: t('instructorData.i6.title'), bio: t('instructorData.i6.bio'), skills: ['Django', 'FastAPI', 'PostgreSQL'], image_url: '/images/instructors/majid-mehrbakhsh.jpg' },
  { id: 7, name: t('instructorData.i7.name'), dept: 'design', title: t('instructorData.i7.title'), bio: t('instructorData.i7.bio'), skills: ['Figma', 'Product_Design', 'Prototyping'], image_url: '/images/instructors/niusha-khavari.jpg' },
  { id: 8, name: t('instructorData.i8.name'), dept: 'maharat', title: t('instructorData.i8.title'), bio: t('instructorData.i8.bio'), skills: ['ICDL', 'Excel', 'Soft_Skills'], image_url: '/images/instructors/mahdieh-rishan.jpg' }
]);

const { data: dbInstructors } = await useAsyncData('instructors-dynamic-data', async () => {
  const { data, error } = await supabase
    .from('instructors')
    .select('*')
    .order('id', { ascending: true }); 
    
  if (error) {
    console.error("خطا در دریافت اساتید از دیتابیس:", error);
    return [];
  }
  return data || [];
});

const allInstructors = computed(() => {
  // مدیریت اساتید دیتابیس (در صورت تمایل می‌توانید در دیتابیس ستون‌های name_en و ... بسازید)
  const dbActive = (dbInstructors.value || []).map(i => ({
    id: i.id,
    name: locale.value === 'en' && i.name_en ? i.name_en : i.name,
    dept: i.dept,
    title: locale.value === 'en' && i.title_en ? i.title_en : i.title,
    bio: locale.value === 'en' && i.bio_en ? i.bio_en : i.bio,
    skills: Array.isArray(i.skills) ? i.skills : [],
    image_url: i.image_url
  }));
  
  return [...dbActive, ...manualInstructors.value];
});

const filteredInstructors = computed(() => {
  if (activeDept.value === 'all') return allInstructors.value;
  return allInstructors.value.filter(ins => ins.dept === activeDept.value);
});

// 🎯 سئو: اسکیمای غنی‌شده E-E-A-T
useHead({
  script: computed(() => [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": t('instructors.seo.title'),
        "description": t('instructors.seo.desc'),
        "itemListElement": allInstructors.value.map((instructor, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Person",
            "name": instructor.name,
            "jobTitle": instructor.title,
            "description": instructor.bio,
            "image": `https://danaverse.ir${instructor.image_url}`,
            "url": `https://danaverse.ir/instructors/${instructor.id}`,
            "worksFor": {
              "@type": "Organization",
              "name": "Danaverse Academy"
            },
            "knowsAbout": instructor.skills
          }
        }))
      })
    }
  ])
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>