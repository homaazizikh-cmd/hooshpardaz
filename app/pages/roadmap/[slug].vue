<template>
  <div v-if="currentPath" class="min-h-screen bg-gray-50 dark:bg-[#03050a] text-gray-900 dark:text-white transition-colors duration-1000 overflow-hidden font-sans selection:bg-brand-accent1/30 selection:text-brand-accent1">
    
    <section class="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#03050a]">
      <div class="absolute inset-0 z-0 pointer-events-none">
        <NuxtImg 
          :src="currentPath.image" 
          class="w-full h-full object-cover opacity-30 mix-blend-overlay mask-image-b" 
          :alt="currentPath.title"
          format="webp"
          preload
        />
      </div>

      <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[150px] mix-blend-screen animate-pulse-slow opacity-30" :class="currentPath.glowColor1"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] mix-blend-screen opacity-20" :class="currentPath.glowColor2"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-sm font-bold mb-8 backdrop-blur-2xl" :class="currentPath.textColor">
          {{ currentPath.badge }}
        </div>
        
        <h1 class="text-5xl md:text-7xl lg:text-[5rem] font-black text-white mb-8 tracking-tighter leading-tight">
          مسیر یادگیری <br>
          <span class="text-transparent bg-clip-text" :class="currentPath.gradientText">
            {{ currentPath.title }}
          </span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed backdrop-blur-sm bg-white/[0.02] p-6 rounded-3xl border border-white/5">
          {{ currentPath.description }}
        </p>
      </div>
    </section>

<section class="py-32 relative z-20 container mx-auto px-4 md:px-8 max-w-6xl">
      <div class="text-center mb-24 relative">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[120px] opacity-10 dark:opacity-20 pointer-events-none z-0" :class="currentPath.glowColor1"></div>
        
        <h2 class="relative z-10 text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          نقشه راه <span class="relative inline-block">
            <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-l from-gray-600 to-gray-900 dark:from-white dark:to-gray-400">تخصص شما</span>
            <svg class="absolute -bottom-2 right-0 w-full h-4 opacity-50 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" stroke-width="3" :class="currentPath.textColor"/>
            </svg>
          </span>
        </h2>
        <p class="relative z-10 text-gray-500 dark:text-gray-400 font-light text-xl md:text-2xl max-w-2xl mx-auto">
          این یک مسیر معمولی نیست؛ یک صعود مهندسی شده از نقطه صفر تا بازار کار حرفه‌ای است.
        </p>
      </div>

      <div class="relative">
        <div class="absolute right-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-200 dark:via-white/10 to-transparent z-0"></div>

        <div class="space-y-16 md:space-y-24 relative z-10">
          <div v-for="(step, index) in currentPath.steps" :key="index" 
               class="flex flex-col md:flex-row items-center justify-between w-full group relative"
               :class="{'md:flex-row-reverse': index % 2 !== 0}">
            
            <div class="absolute right-6 md:left-1/2 transform translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
              <div class="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-30" :class="currentPath.glowColor1"></span>
                <div class="w-full h-full rounded-full border-4 border-white dark:border-[#03050a] flex items-center justify-center shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110" :class="currentPath.timelineDotColor">
                  <span class="text-white font-black text-sm md:text-lg">{{ index + 1 }}</span>
                </div>
              </div>
            </div>

            <div class="w-full md:w-[45%] pr-16 md:pr-0" :class="{'md:pl-12': index % 2 === 0, 'md:pr-12': index % 2 !== 0}">
              
              <div class="relative transform transition-transform duration-700 group-hover:-translate-y-3">
                
                <div class="absolute -inset-2 md:-inset-4 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-15 dark:group-hover:opacity-25 transition-all duration-700 pointer-events-none z-0" :class="currentPath.glowColor1"></div>

                <div class="bg-white dark:bg-[#0a0c12]/90 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-700 shadow-xl dark:shadow-2xl relative overflow-hidden cursor-default z-10">
                  
                  <div class="absolute -bottom-6 -left-6 text-[180px] opacity-[0.03] dark:opacity-[0.02] transform group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.05] transition-all duration-1000 pointer-events-none grayscale group-hover:grayscale-0">
                    {{ step.icon }}
                  </div>

                  <div class="absolute top-0 right-0 w-40 h-40 rounded-bl-full blur-[60px] opacity-10 dark:opacity-20 transition-opacity duration-700 group-hover:opacity-20 dark:group-hover:opacity-40 pointer-events-none" :class="currentPath.glowColor1"></div>
                  
                  <div class="relative z-10">
                    <div class="flex items-start gap-4 mb-6">
                      <div class="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:bg-gray-100 dark:group-hover:bg-white/[0.08] transition-colors">
                        {{ step.icon }}
                      </div>
                      <div>
                        <span class="inline-block text-xs font-mono tracking-widest px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-2 uppercase text-gray-600 dark:text-gray-400">Phase 0{{ index + 1 }}</span>
                        
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-500"
                            :class="{'group-hover:text-orange-500': slug === 'teenagers', 'group-hover:text-cyan-500': slug === 'coding', 'group-hover:text-pink-500': slug === 'design'}">
                          {{ step.title }}
                        </h3>
                      </div>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-400 font-light leading-loose mb-8 text-justify text-base md:text-lg">
                      {{ step.desc }}
                    </p>
                    
                    <div class="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-white/5">
                      <span class="text-gray-500 text-xs font-bold w-full mb-1">مهارت‌های این مرحله:</span>
                      <span v-for="skill in step.skills" :key="skill" class="text-xs font-bold px-4 py-2 bg-gray-50 dark:bg-[#03050a] text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-white/5 shadow-inner hover:border-gray-300 dark:hover:border-white/20 transition-colors">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden md:block w-full md:w-[45%]"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 mb-20 container mx-auto px-4">
      <div class="bg-gradient-to-r p-12 md:p-20 rounded-[3rem] text-center border shadow-2xl relative overflow-hidden" 
           :class="[currentPath.ctaBg, currentPath.ctaBorder]">
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-black text-white mb-6">آماده‌ی شروع این مسیر هستید؟</h2>
          <p class="text-white/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">همین حالا دوره‌های مرتبط با این مسیر را مشاهده کنید یا در آزمون استعدادیابی شرکت کنید تا مطمئن شوید این بهترین انتخاب برای شماست.</p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/courses" class="px-8 py-4 bg-white text-gray-900 rounded-2xl font-black hover:scale-105 transition-transform w-full sm:w-auto shadow-xl">
              مشاهده دوره‌های این مسیر
            </NuxtLink>
            <NuxtLink to="/talent" class="px-8 py-4 bg-black/30 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold hover:bg-black/50 transition-colors w-full sm:w-auto">
              شرکت در تست استعدادیابی
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
  
  <div v-else class="min-h-screen flex items-center justify-center bg-[#03050a] text-white">
    <div class="text-center">
      <h1 class="text-6xl font-black text-brand-accent1 mb-4">404</h1>
      <p class="text-xl mb-8">مسیر یادگیری مورد نظر پیدا نشد.</p>
      <NuxtLink to="/" class="px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">بازگشت به صفحه اصلی</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

// دیتابیس مسیرهای یادگیری
const roadmapsData = {
  'teenagers': {
    title: 'کودکان و نوجوانان',
    badge: 'دپارتمان پایه و خلاقیت',
    description: 'در این مسیر، ذهن خلاق کودکان و نوجوانان از طریق بازی‌سازی و ابزارهای بصری، با منطق برنامه‌نویسی و دنیای جذاب رباتیک آشنا می‌شود.',
    image: '/images/roadmap-teen.webp',
    gradientText: 'bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500',
    textColor: 'text-orange-400',
    glowColor1: 'bg-orange-600',
    glowColor2: 'bg-pink-600',
    timelineDotColor: 'bg-orange-500',
    ctaBg: 'from-orange-600 to-pink-600',
    ctaBorder: 'border-orange-400/30',
    steps: [
      { icon: '🧩', title: 'درک منطق و الگوریتم', desc: 'استفاده از پلتفرم‌های بلوکی مثل Scratch برای درک عمیق حلقه‌ها، شرط‌ها و تفکر کامپیوتری بدون درگیری با کدهای پیچیده.', skills: ['تفکر منطقی', 'حل مسئله', 'اسکرچ'] },
      { icon: '🎮', title: 'بازی‌سازی دوبعدی', desc: 'خلق بازی‌های تعاملی و داستان‌های متحرک. هنرجو یاد می‌گیرد چگونه ایده‌های ذهنی خود را به یک خروجی قابل بازی تبدیل کند.', skills: ['طراحی بازی', 'مختصات', 'خلاقیت'] },
      { icon: '🐍', title: 'ورود به دنیای واقعی کد', desc: 'گذر نرم از کدهای بلوکی به کدهای متنی با زبان برنامه‌نویسی پایتون (مخصوص نوجوانان). نوشتن اولین اسکریپت‌های واقعی.', skills: ['مبانی پایتون', 'سینتکس', 'متغیرها'] },
      { icon: '🤖', title: 'رباتیک و الکترونیک', desc: 'آشنایی با بردهای آردوینو و سنسورها. کدهایی که نوشتند حالا در دنیای واقعی حرکت می‌کنند و چراغ‌ها را روشن می‌کنند.', skills: ['آردوینو', 'مدارات پایه', 'سخت‌افزار'] }
    ]
  },
  'coding': {
    title: 'برنامه‌نویسی و هوش مصنوعی',
    badge: 'دپارتمان مهندسی نرم‌افزار',
    description: 'جامع‌ترین مسیر برای تبدیل شدن به یک توسعه‌دهنده و مهندس هوش مصنوعی. از درک عمیق الگوریتم‌ها تا ساخت مدل‌های یادگیری ماشین.',
    image: '/images/roadmap-coding.webp',
    gradientText: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500',
    textColor: 'text-cyan-400',
    glowColor1: 'bg-blue-600',
    glowColor2: 'bg-cyan-600',
    timelineDotColor: 'bg-cyan-500',
    ctaBg: 'from-blue-700 to-indigo-900',
    ctaBorder: 'border-cyan-500/30',
    steps: [
      { icon: '💻', title: 'مبانی برنامه‌نویسی پایتون', desc: 'شروع قدرتمند با زبان پایتون. تسلط بر متغیرها، توابع، حلقه‌ها و ساختارهای داده پایه مثل لیست‌ها و دیکشنری‌ها.', skills: ['Python', 'Data Structures', 'Functions'] },
      { icon: '🏗️', title: 'برنامه‌نویسی شی‌گرا (OOP)', desc: 'یادگیری تفکر مهندسی. پیاده‌سازی کلاس‌ها، وراثت، و دیزاین پترن‌های پایه برای نوشتن کدهای تمیز و قابل توسعه.', skills: ['OOP', 'Clean Code', 'Architecture'] },
      { icon: '📊', title: 'داده‌کاوی و تحلیل داده', desc: 'کار با کتابخانه‌های قدرتمند Pandas و NumPy برای استخراج، پاکسازی و تحلیل داده‌های خام.', skills: ['Pandas', 'NumPy', 'Data Visualization'] },
      { icon: '🧠', title: 'هوش مصنوعی و یادگیری ماشین', desc: 'اوج مسیر! طراحی و آموزش مدل‌های هوش مصنوعی با Scikit-Learn و TensorFlow برای پیش‌بینی و پردازش تصویر.', skills: ['Machine Learning', 'TensorFlow', 'Deep Learning'] }
    ]
  },
  'design': {
    title: 'طراحی رابط کاربری (UI/UX)',
    badge: 'دپارتمان هنرهای دیجیتال',
    description: 'ترکیب هنر و تکنولوژی. در این مسیر یاد می‌گیرید چگونه محصولات دیجیتالی خلق کنید که علاوه بر زیبایی چشم‌نواز، تجربه کاربری بی‌نظیری داشته باشند.',
    image: '/images/roadmap-design.webp',
    gradientText: 'bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    glowColor1: 'bg-purple-600',
    glowColor2: 'bg-pink-600',
    timelineDotColor: 'bg-pink-500',
    ctaBg: 'from-purple-800 to-pink-800',
    ctaBorder: 'border-pink-500/30',
    steps: [
      { icon: '🎨', title: 'مبانی هنر و گرافیک دیجیتال', desc: 'درک روانشناسی رنگ‌ها، تایپوگرافی، فضای منفی و اصول پایه‌ای که یک طراحی معمولی را به یک شاهکار تبدیل می‌کند.', skills: ['Color Theory', 'Typography', 'Layout'] },
      { icon: '🖼️', title: 'تسلط بر ابزارهای گرافیکی', desc: 'یادگیری حرفه‌ای فتوشاپ و ایلاستریتور برای ساخت آیکون‌ها، ادیت تصاویر و خلق وکتورهای اختصاصی.', skills: ['Adobe Photoshop', 'Illustrator', 'Vector Art'] },
      { icon: '📱', title: 'طراحی رابط کاربری با Figma', desc: 'ورود به دنیای UI. طراحی صفحات وب و اپلیکیشن‌های موبایل در نرم‌افزار قدرتمند فیگما بر اساس استانداردهای جهانی.', skills: ['Figma', 'UI Design', 'Wireframing'] },
      { icon: '👥', title: 'تجربه کاربری و پروتوتایپ (UX)', desc: 'بررسی رفتار کاربر، تست کاربرپذیری، و متحرک‌سازی صفحات (Prototyping) برای ارائه پروژه نهایی به برنامه‌نویسان.', skills: ['UX Research', 'Prototyping', 'User Journey'] }
    ]
  }
}

// دریافت اطلاعات مسیر فعلی
const currentPath = computed(() => {
  return roadmapsData[slug]
})

// تنظیمات سئو پویا
if (currentPath.value) {
  useSeoMeta({
    title: `مسیر یادگیری ${currentPath.value.title} | هوش‌پرداز`,
    description: currentPath.value.description,
  })
}
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.mask-image-b {
  mask-image: linear-gradient(to top, transparent, black 30%, black 100%, transparent);
  -webkit-mask-image: linear-gradient(to top, transparent, black 30%, black 100%, transparent);
}
</style>