<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-500 overflow-hidden" :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'">
    
    <section class="relative pt-32 pb-40 px-4 bg-slate-900 overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem]">
      <div class="absolute top-0 rtl:right-0 ltr:left-0 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div class="absolute bottom-0 rtl:left-20 ltr:right-20 w-80 h-80 bg-indigo-500 opacity-20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>

      <div class="container mx-auto max-w-7xl relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          
          <div class="w-full lg:w-1/2 rtl:text-right ltr:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-md">
              <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              {{ $t('about.hero.badge') }}
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {{ $t('about.hero.title1') }} <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">{{ $t('about.hero.titleHighlight') }}</span> {{ $t('about.hero.title2') }}
            </h1>
            
            <p class="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl" v-html="$t('about.hero.desc')"></p>

            <div class="flex flex-wrap gap-6 mb-10 rtl:justify-start ltr:justify-start">
              <div class="flex items-center gap-3 text-gray-300">
                <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shadow-inner">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="font-medium">{{ $t('home.benefits.b1') }}</span>
              </div>
              <div class="flex items-center gap-3 text-gray-300">
                <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="font-medium">{{ $t('home.benefits.b2') }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4">
              <NuxtLink :to="localePath('/courses')" class="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1">
                {{ $t('about.hero.btn1') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/contact')" class="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                {{ $t('about.hero.btn2') }} <span class="rtl:mr-2 ltr:ml-2 rtl:rotate-0 ltr:rotate-180 inline-block transition-transform">→</span>
              </NuxtLink>
            </div>
          </div>

          <div class="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center mt-10 lg:mt-0">
            <div class="absolute w-[80%] h-[80%] bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[4rem] rotate-6 opacity-30 blur-3xl"></div>
            <NuxtImg 
              src="/images/about-banner.png" 
              alt="Danaverse Academy" 
              format="webp"
              fetchpriority="high"
              preload
              class="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-700" 
            />
          </div>

        </div>
      </div>
    </section>

    <div class="container mx-auto max-w-6xl px-4 relative z-20 -mt-20">
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-none dark:border dark:border-gray-700 p-8 md:p-12 backdrop-blur-xl transition-colors duration-500">
        <h2 class="text-center text-slate-800 dark:text-gray-200 font-bold mb-8 text-lg">
          {{ $t('about.stats.title') }} <span class="text-blue-600 dark:text-blue-400">{{ $t('about.stats.titleHighlight') }}</span> {{ $t('about.stats.title2') }}
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 rtl:divide-x rtl:divide-x-reverse ltr:divide-x divide-gray-100 dark:divide-gray-700">
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-black text-blue-600 dark:text-blue-400 mb-2" dir="ltr">{{ $t('about.stats.s1Num') }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">{{ $t('about.stats.s1Text') }}</p>
          </div>
          <div class="text-center rtl:border-s-0 ltr:border-l-0">
            <p class="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-2" dir="ltr">{{ $t('about.stats.s2Num') }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">{{ $t('about.stats.s2Text') }}</p>
          </div>
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-2" dir="ltr">{{ $t('about.stats.s3Num') }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">{{ $t('about.stats.s3Text') }}</p>
          </div>
          <div class="text-center">
            <p class="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-2" dir="ltr">{{ $t('about.stats.s4Num') }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">{{ $t('about.stats.s4Text') }}</p>
          </div>
        </div>
      </div>
    </div>

    <section class="py-24 container mx-auto max-w-7xl px-4">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <div class="md:col-span-7 bg-white dark:bg-gray-800 rounded-[2.5rem] p-10 md:p-14 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 rtl:text-right ltr:text-left">
          <div class="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8">
            <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          </div>
          <h2 class="text-3xl font-extrabold text-gray-800 dark:text-white mb-6">
            {{ $t('about.story.title1') }} <span class="text-blue-600 dark:text-blue-400">{{ $t('about.story.titleHighlight') }}</span>
          </h2>
          <div class="space-y-4 text-gray-600 dark:text-gray-300 leading-loose text-lg font-medium rtl:text-justify ltr:text-left">
            <p>{{ $t('about.story.p1') }}</p>
            <p>{{ $t('about.story.p2') }}</p>
          </div>
        </div>

        <div class="md:col-span-5 relative bg-gray-900 rounded-[2.5rem] overflow-hidden group cursor-pointer min-h-[400px]">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-50 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <svg class="w-8 h-8 text-white rtl:ml-2 ltr:mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">{{ $t('about.story.videoTitle') }}</h3>
            <p class="text-gray-300 text-sm">{{ $t('about.story.videoDesc') }}</p>
          </div>
        </div>

      </div>
    </section>

    <section class="py-16 bg-blue-50/50 dark:bg-gray-800/20 border-y border-gray-100 dark:border-gray-800">
      <div class="container mx-auto max-w-7xl px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white">
            {{ $t('about.roadmap.title1') }} <span class="text-blue-600 dark:text-blue-400">{{ $t('about.roadmap.titleHighlight') }}</span> {{ $t('about.roadmap.title2') }}
          </h2>
          <p class="text-gray-500 dark:text-gray-400 mt-4 font-medium">{{ $t('about.roadmap.desc') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, index) in translatedSteps" :key="index" class="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 relative group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300 rtl:text-right ltr:text-left">
            
            <div class="absolute top-6 rtl:left-6 ltr:right-6 w-12 h-12 bg-blue-50 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 font-black text-xl border border-blue-100 dark:border-gray-600 group-hover:scale-110 transition-transform font-mono" dir="ltr">
              {{ step.number }}
            </div>

            <h3 class="text-xl font-bold text-gray-800 dark:text-white mt-12 mb-4">{{ step.title }}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{{ step.desc }}</p>
            
            <div class="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 container mx-auto max-w-7xl px-4 text-center">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-12">{{ $t('about.partners') }}</h2>
      
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 dark:opacity-40">
        <div class="text-xl font-black tracking-widest grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer text-gray-800 dark:text-white">VALENTURA</div>
        <div class="text-xl font-black tracking-widest grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer text-gray-800 dark:text-white">NAVVIGO</div>
        <div class="text-xl font-black tracking-widest grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer text-gray-800 dark:text-white">EDISR</div>
        <div class="text-xl font-black tracking-widest grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer text-gray-800 dark:text-white">TECHHUB</div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()

// تولید آرایه گام‌های آموزشی به صورت کاملاً واکنشی متناسب با کش و زبان مرورگر
const translatedSteps = computed(() => [
  { number: locale.value === 'en' ? '01' : '۰۱', title: t('about.roadmap.steps.s1.title'), desc: t('about.roadmap.steps.s1.desc') },
  { number: locale.value === 'en' ? '02' : '۰۲', title: t('about.roadmap.steps.s2.title'), desc: t('about.roadmap.steps.s2.desc') },
  { number: locale.value === 'en' ? '03' : '۰۳', title: t('about.roadmap.steps.s3.title'), desc: t('about.roadmap.steps.s3.desc') },
  { number: locale.value === 'en' ? '04' : '۰۴', title: t('about.roadmap.steps.s4.title'), desc: t('about.roadmap.steps.s4.desc') }
])

// تنظیم داینامیک تمام متاتگ‌های سئو داخلی و اجتماعی بر اساس زبان انتخابی
useSeoMeta({
  title: () => t('about.seo.title'),
  description: () => t('about.seo.desc'),
  keywords: 'درباره داناورس, آموزش هوش مصنوعی, آموزش برنامه نویسی, آکادمی برنامه نویسی, منتورینگ برنامه نویسی',
  ogTitle: () => t('about.seo.title'),
  ogDescription: () => t('about.seo.desc'),
  ogImage: 'https://danaverse.ir/images/about-banner.png',
  ogUrl: 'https://danaverse.ir/about',
  twitterCard: 'summary_large_image'
})

// تزریق تگ کانالیکال رسمی و اسکیمای ساختاریافته EducationalOrganization و AboutPage به تگ head گوگل
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://danaverse.ir/about'
    }
  ],
  script: computed(() => [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "AboutPage",
            "name": t('about.seo.title'),
            "url": "https://danaverse.ir/about",
            "description": t('about.seo.desc')
          },
          {
            "@type": "EducationalOrganization",
            "name": "Danaverse Academy",
            "alternateName": "Hooshpardaz Academy",
            "url": "https://danaverse.ir",
            "logo": "https://danaverse.ir/logo.png",
            "description": t('about.seo.desc'),
            "foundingDate": "2019",
            "founder": {
              "@type": "Person",
              "name": "Mehdi Khazaei"
            },
            "sameAs": [
              "https://instagram.com/hooshpardaz",
              "https://t.me/hoooshpardaz"
            ]
          }
        ]
      })
    }
  ])
})
</script>