export default defineNuxtConfig({
  // ماژول‌های مورد نیاز پروژه داناورس
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxtjs/sitemap', // 👈 ماژول نقشه سایت اضافه شد
    '@nuxt/image'
  ],

  // تنظیمات دسترسی سرور به متغیرهای محیطی .env
  runtimeConfig: {
    telegramToken: process.env.NUXT_TELEGRAM_TOKEN,
    telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID,
    googleApiKey: process.env.GOOGLE_API_KEY, // دسترسی فقط در سمت سرور
  },

  // تنظیمات بهینه‌سازی تصاویر و دامنه‌های مجاز
  image: {
    format: ['webp'],
    domains: [
      'images.unsplash.com',
      'i.pravatar.cc',
      'rrelkadkixesdzydcwgt.supabase.co' // حتماً بدون https:// باشد
    ]
  },

  // آدرس جدید سایت و نام برند در نقشه سایت (Sitemap)
  site: {
    url: 'https://danaverse.ir',
    name: 'داناورس'
  },

  // 🚀 تنظیمات اختصاصی و حرفه‌ای نقشه سایت (Sitemap)
  sitemap: {
    autoI18n: false,
    strictNuxtContentPaths: true,
    exclude: [
      '/admin/**', // 🔒 صفحات پنل مدیریت نباید در گوگل ایندکس شوند!
      '/talent-test/result/**' // صفحات نتایج خصوصی کاربران نباید ایندکس شوند
    ],
    // کش کردن سایت‌مپ برای سرعت بیشتر
    cacheMaxAgeSeconds: 3600,
    sources: [
      '/api/_sitemap-urls' // 👈 این خط جادویی را اضافه کنید!
    ]
  },

  supabase: {
    redirect: false
  },

  // تنظیمات vite برای ابزارهای توسعه
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  // تنظیمات هسته سئو و بخش Head سایت داناورس
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa-IR'
      },
      titleTemplate: '%s | داناورس',
      title: '23064147',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'داناورس؛ مرجع آموزش پروژه‌محور برنامه‌نویسی و هوش مصنوعی برای کودکان، نوجوانان و بزرگسالان همراه با استعدادیابی هوشمند.' },
        { name: 'theme-color', content: '#0f172a' },
        
        // متاتگ‌های Open Graph برای نمایش کارت خفن هنگام اشتراک‌گذاری لینک
        { property: 'og:site_name', content: 'داناورس' },
        { property: 'og:title', content: 'داناورس | آکادمی برنامه‌نویسی و هوش مصنوعی' },
        { property: 'og:description', content: 'مرجع آموزش پروژه‌محور برنامه‌نویسی و هوش مصنوعی همراه با استعدادیابی هوشمند.' },
        { property: 'og:url', content: 'https://danaverse.ir' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fa_IR' },

        // کد تایید گوگل سرچ کنسول (تا زمان انتقال کامل دامنه بماند)
        { name: 'google-site-verification', content: 'GIVi970Muy1SseqLB2rZNSU17lyfoar8B6ldZKS5nzE' } 
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&display=swap' 
        },
        // فاوآیکون جدید داناورس را بعداً در پوشه public جایگزین کنید
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' }
      ]
    }
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: false,
    viewer: true,
  },

  compatibilityDate: '2024-11-01'
})