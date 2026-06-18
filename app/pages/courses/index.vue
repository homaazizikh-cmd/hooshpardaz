<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-slate-200 pt-28 pb-24 overflow-hidden relative transition-colors duration-500 font-sans">
    
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    <div class="absolute top-0 left-1/4 w-[800px] h-[600px] bg-blue-400/10 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-1000"></div>
    <div class="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

    <section class="container mx-auto px-4 text-center mb-16 relative z-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-black tracking-[0.2em] mb-8 uppercase backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        <span class="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-ping"></span>
        {{ $t('courses.badge') }}
      </div>
      
      <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 relative z-10 leading-tight tracking-tight">
        {{ $t('courses.title1') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">{{ $t('courses.titleHighlight') }}</span>
      </h1>
      <p class="text-slate-600 dark:text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        {{ $t('courses.subtitle') }}
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
              :alt="dept.name" 
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
          {{ $t('courses.extractedTitle') }} 
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
                <span class="ml-auto text-[9px] font-mono text-white/50">{{ $t('courses.dataset') }} 0{{ index + 1 }}</span>
              </div>
              <NuxtImg 
                :src="course.image || '/images/default-course.webp'" 
                :alt="course.title" 
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
                <span class="tracking-widest">{{ $t('courses.courseId') }} {{ course.id }}</span>
                <span class="text-green-500 flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>{{ $t('courses.active') }}</span>
              </div>

              <h3 class="text-xl font-black text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                {{ course.title }}
              </h3>
              
              <p class="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow leading-relaxed text-justify line-clamp-3">
                {{ course.desc }}
              </p>
              
              <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <NuxtLink :to="localePath(`/courses/${course.slug || course.id}`)" 
                          class="relative overflow-hidden flex items-center justify-center w-full py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-blue-300 dark:group-hover:border-cyan-500/50 text-sm font-black text-slate-600 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-white transition-all duration-300 group/btn">
                  <div class="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-purple-600 transition-all duration-500 ease-out group-hover/btn:w-full opacity-10 dark:opacity-20"></div>
                  <span class="relative z-10 flex items-center gap-2">
                    {{ $t('courses.scanBtn') }}
                    <svg class="w-4 h-4 transform rtl:rotate-180 ltr:rotate-0 rtl:group-hover/btn:-translate-x-1.5 ltr:group-hover/btn:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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
        <h3 class="text-2xl font-black text-slate-800 dark:text-white mb-2 relative z-10">{{ $t('courses.empty.title') }}</h3>
        <p class="text-slate-500 font-mono text-sm relative z-10">{{ $t('courses.empty.desc') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const localePath = useLocalePath();
const supabase = useSupabaseClient();
const activeDepartment = ref('python');

useSeoMeta({
  title: () => t('courses.seo.title'),
  description: () => t('courses.seo.desc'),
  ogTitle: () => t('courses.seo.ogTitle'),
  ogImage: '/images/Banner.jpg'
});

const departments = computed(() => [
  { id: 'python', name: t('courses.depts.python'), image: '/images/DP-python.webp' },
  { id: 'ai', name: t('courses.depts.ai'), image: '/images/DP-Ai.webp' },
  { id: 'design', name: t('courses.depts.design'), image: '/images/DP-Design.webp' },
  { id: 'maharat', name: t('courses.depts.maharat'), image: '/images/DP-Maharat.webp' }
]);

const manualCourses = computed(() => [
  { id: 13, slug: 'icdl', dept: 'maharat', image: '/images/ICDL.webp', price: '۴,۵۰۰,۰۰۰', startDate: '۱۵ تیر', 
    title: t('courseData.c1.title'), desc: t('courseData.c1.desc'), schedule: t('courseData.c1.schedule') },
  { id: 5, slug: 'robotics-adults', dept: 'maharat', image: '/images/Robatic.webp', price: '۱۲,۰۰۰,۰۰۰', startDate: '۲۰ تیر', 
    title: t('courseData.c2.title'), desc: t('courseData.c2.desc'), schedule: t('courseData.c2.schedule') },
  { id: 12, slug: 'robotics-kids', dept: 'maharat', image: '/images/Robatoc-childern.webp', price: '۷,۵۰۰,۰۰۰', startDate: '۵ مرداد', 
    title: t('courseData.c3.title'), desc: t('courseData.c3.desc'), schedule: t('courseData.c3.schedule') },
  { id: 10, slug: 'scratch', dept: 'maharat', image: '/images/Scratch.webp', price: '۵,۰۰۰,۰۰۰', startDate: '۱۰ مرداد', 
    title: t('courseData.c4.title'), desc: t('courseData.c4.desc'), schedule: t('courseData.c4.schedule') },
  { id: 11, slug: 'python-kids', dept: 'python', image: '/images/Python-childern.webp', price: '۶,۵۰۰,۰۰۰', startDate: '۱ شهریور', 
    title: t('courseData.c5.title'), desc: t('courseData.c5.desc'), schedule: t('courseData.c5.schedule') },
  { id: 1, slug: 'python-basics', dept: 'python', image: '/images/Python-M.webp', price: '۸,۰۰۰,۰۰۰', startDate: '۱ مرداد', 
    title: t('courseData.c6.title'), desc: t('courseData.c6.desc'), schedule: t('courseData.c6.schedule') },
  { id: 2, slug: 'python-advanced', dept: 'python', image: '/images/Python-P.webp', price: '۱۰,۰۰۰,۰۰۰', startDate: '۱۲ مرداد', 
    title: t('courseData.c7.title'), desc: t('courseData.c7.desc'), schedule: t('courseData.c7.schedule') },
  { id: 3, slug: 'ai-tools', dept: 'ai', image: '/images/Ai-tools.webp', price: '۷,۰۰۰,۰۰۰', startDate: '۲۵ تیر', 
    title: t('courseData.c8.title'), desc: t('courseData.c8.desc'), schedule: t('courseData.c8.schedule') },
  { id: 4, slug: 'machine-learning', dept: 'ai', image: '/images/Machine learning.webp', price: '۱۲,۰۰۰,۰۰۰', startDate: '۳۰ تیر', 
    title: t('courseData.c9.title'), desc: t('courseData.c9.desc'), schedule: t('courseData.c9.schedule') },
  { id: 6, slug: 'photoshop', dept: 'design', image: '/images/Photoshop.webp', price: '۷,۰۰۰,۰۰۰', startDate: '۱۵ مرداد', 
    title: t('courseData.c10.title'), desc: t('courseData.c10.desc'), schedule: t('courseData.c10.schedule') },
  { id: 7, slug: 'illustrator', dept: 'design', image: '/images/Illustrator.webp', price: '۷,۰۰۰,۰۰۰', startDate: '۲۰ مرداد', 
    title: t('courseData.c11.title'), desc: t('courseData.c11.desc'), schedule: t('courseData.c11.schedule') },
  { id: 8, slug: 'indesign', dept: 'design', image: '/images/Indesign.webp', price: '۶,۵۰۰,۰۰۰', startDate: '۵ شهریور', 
    title: t('courseData.c12.title'), desc: t('courseData.c12.desc'), schedule: t('courseData.c12.schedule') },
  { id: 9, slug: 'sketch', dept: 'design', image: '/images/Sketch.webp', price: '۶,۰۰۰,۰۰۰', startDate: '۱۵ شهریور', 
    title: t('courseData.c13.title'), desc: t('courseData.c13.desc'), schedule: t('courseData.c13.schedule') }
]);

const { data: dbCourses } = await useAsyncData(`public-courses-list-${locale.value}`, async () => {
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

const allCourses = computed(() => {
  const dbActive = (dbCourses.value || [])
    .filter(c => c.is_published === true || c.is_published === 'true')
    .map(c => ({
      id: c.id,
      slug: c.slug,
      title: locale.value === 'en' && c.title_en ? c.title_en : c.title,
      dept: c.dept,
      price: c.price,
      desc: locale.value === 'en' && c.description_en ? c.description_en : c.description,
      image: c.image_url, 
      schedule: c.schedule,
      startDate: c.start_date
    }));
    
  return [...dbActive, ...manualCourses.value];
});

const filteredCourses = computed(() => {
  return allCourses.value.filter(c => c.dept === activeDepartment.value);
});

const getDepartmentName = (id) => {
  const dept = departments.value.find(d => d.id === id);
  return dept ? dept.name : '';
};

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
        "name": t('courses.titleHighlight'),
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
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>