<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark pt-28 pb-20 transition-colors duration-500 overflow-hidden">
    
    <section class="container mx-auto px-4 text-center mb-16 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 text-brand-accent1 text-sm font-bold mb-6 border border-gray-200 dark:border-white/20 backdrop-blur-md shadow-sm">
        <span class="w-2 h-2 rounded-full bg-brand-accent1 animate-ping"></span>
        مسیرهای آموزشی تخصصی
      </div>
      
      <h1 class="text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-6 relative z-10 leading-tight">
        دپارتمان‌های <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent1 to-blue-600 drop-shadow-sm">آکادمی هوش‌پرداز</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
        برای مشاهده دوره‌های اختصاصی هر حوزه، روی دپارتمان مورد نظر کلیک کنید و مسیر آینده شغلی خود را انتخاب کنید.
      </p>
    </section>

    <section class="container mx-auto px-4 mb-20 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div v-for="dept in departments" :key="dept.id" 
             @click="activeDepartment = dept.id"
             :class="activeDepartment === dept.id 
                ? 'ring-4 ring-brand-accent1 shadow-[0_15px_30px_-10px_rgba(56,189,248,0.5)] scale-105 z-10' 
                : 'border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 opacity-80 hover:opacity-100'"
             class="cursor-pointer transition-all duration-500 rounded-[2rem] overflow-hidden relative group bg-white dark:bg-gray-800">
          
          <div class="w-full aspect-[4/5] bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
            <img :src="dept.image" :alt="dept.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent transition-opacity duration-300"
                 :class="activeDepartment === dept.id ? 'opacity-90' : 'opacity-70 group-hover:opacity-90'"></div>
          </div>
          
          <div class="absolute bottom-0 left-0 right-0 p-5 text-center transform transition-transform duration-300"
               :class="activeDepartment === dept.id ? 'translate-y-0' : 'translate-y-2 group-hover:translate-y-0'">
            <div v-if="activeDepartment === dept.id" class="w-8 h-1 bg-brand-accent1 mx-auto rounded-full mb-3 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
            <h3 class="text-white font-black text-sm md:text-lg leading-tight">{{ dept.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 relative z-10">
      <div class="flex items-center gap-4 mb-10 border-b border-gray-200 dark:border-gray-800 pb-4">
        <div class="w-3 h-10 bg-brand-accent1 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
        <h3 class="text-2xl md:text-3xl font-black text-gray-800 dark:text-white">
          دوره‌های دپارتمان <span class="text-brand-accent1">{{ getDepartmentName(activeDepartment) }}</span>
        </h3>
      </div>

      <div v-if="pending" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent1"></div>
        <p class="mt-4 text-gray-500">در حال دریافت دوره‌ها از دیتابیس...</p>
      </div>

      <TransitionGroup v-else name="fade" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
        <div v-for="course in filteredCourses" :key="course.id" 
             class="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col group hover:shadow-2xl hover:shadow-brand-accent1/10 hover:-translate-y-3 transition-all duration-500 relative">

          <div class="w-full aspect-[3/4] overflow-hidden relative bg-gray-200 dark:bg-gray-700">
            <img :src="course.image || '/images/default-course.jpg'" :alt="course.title" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          <div class="p-6 md:p-7 flex flex-col flex-grow relative">
            <div class="absolute -top-6 right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-2xl z-10 transform group-hover:rotate-12 transition-transform duration-300">
              🎓
            </div>
            
            <h4 class="text-xl font-black text-gray-800 dark:text-white mb-3 mt-2 group-hover:text-brand-accent1 transition-colors">{{ course.title }}</h4>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow leading-loose text-justify line-clamp-3">{{ course.desc }}</p>
            
            <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/80 flex flex-col gap-4">
              
              <NuxtLink :to="`/courses/${course.id}`" 
                        class="relative overflow-hidden flex items-center justify-center w-full bg-brand-dark hover:bg-brand-accent1 dark:bg-gray-700 dark:hover:bg-brand-accent1 text-white py-4 rounded-2xl text-sm md:text-base font-bold transition-all duration-300 shadow-md hover:shadow-[0_10px_20px_-10px_rgba(56,189,248,0.6)] group/btn">
                <span class="relative z-10 flex items-center gap-2">
                  مشاهده زمان‌بندی و جزئیات
                  <svg class="w-5 h-5 rotate-180 transform group-hover/btn:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </NuxtLink>
            </div>

          </div>
        </div>
      </TransitionGroup>
      
      <div v-if="!pending && filteredCourses.length === 0" class="text-center py-16 bg-white/50 dark:bg-gray-800/50 rounded-3xl backdrop-blur-sm border border-gray-100 dark:border-gray-700 mt-8">
        <div class="text-5xl mb-4 opacity-50">⏳</div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">دوره‌ای یافت نشد</h3>
        <p class="text-gray-500 dark:text-gray-400">دوره‌های این دپارتمان در حال به‌روزرسانی هستند.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

useSeoMeta({
  title: 'دوره‌های آموزشی',
  description: 'لیست کامل دوره‌های آموزش برنامه‌نویسی، هوش مصنوعی، رباتیک و هنرهای دیجیتال در آکادمی هوش‌پرداز برای تمامی سنین.',
  ogTitle: 'دوره‌های تخصصی آکادمی هوش‌پرداز',
  ogImage: '/images/Banner.jpg'
});

const supabase = useSupabaseClient();
const activeDepartment = ref('python');

// دپارتمان‌ها را به صورت دستی نگه می‌داریم چون ثابت هستند
const departments = [
  { id: 'python', name: 'برنامه‌نویسی پایتون', image: '/images/DP-python.jpg' },
  { id: 'ai', name: 'هوش مصنوعی و داده', image: '/images/DP-Ai.jpg' },
  { id: 'design', name: 'هنرهای دیجیتال و گرافیک', image: '/images/DP-Design.jpg' },
  { id: 'maharat', name: 'مهارت‌های کاربردی و سخت', image: '/images/DP-Maharat.jpg' }
];

// 🚀 خواندن تمام دوره‌های منتشر شده از دیتابیس
const { data: dbCourses, pending } = await useAsyncData('courses', async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('is_published', true) // فقط دوره‌هایی که تیک انتشار دارند را بیاور
    .order('created_at', { ascending: false }); // جدیدترین‌ها در ابتدا
    
  if (error) console.error("Error fetching courses:", error);
  return data || [];
});

// مپ کردن اطلاعات دیتابیس به قالبی که شما طراحی کردید + فیلتر بر اساس دپارتمان
const filteredCourses = computed(() => {
  if (!dbCourses.value) return [];
  
  return dbCourses.value
    .filter(c => c.dept === activeDepartment.value)
    .map(c => ({
      id: c.id,
      title: c.title,
      dept: c.dept,
      price: c.price,
      desc: c.description, // در دیتابیس description بود، در قالب شما desc
      image: c.image_url,  // در دیتابیس image_url بود، در قالب شما image
      schedule: c.schedule,
      startDate: c.start_date
    }));
});

const getDepartmentName = (id) => {
  const dept = departments.find(d => d.id === id);
  return dept ? dept.name : '';
};

// --- تولید کدهای هوشمند اسکیما (داینامیک شده با دیتابیس) ---
const schemaData = computed(() => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": (dbCourses.value || []).map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Course",
      "name": course.title,
      "description": course.description,
      "provider": {
        "@type": "Organization",
        "name": "آکادمی هوش‌پرداز",
        "sameAs": "https://hoooshpardaz.ir"
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
</style>