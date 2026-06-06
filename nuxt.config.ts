export default defineNuxtConfig({
  // ماژول‌های مورد نیاز پروژه داناورس
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxtjs/sitemap',
    '@nuxt/image'
  ],

  // تنظیمات دسترسی سرور به متغیرهای محیطی .env
  runtimeConfig: {
    telegramToken: process.env.NUXT_TELEGRAM_TOKEN,
    telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID,
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
      title: 'داناورس | آکادمی برنامه‌نویسی و هوش مصنوعی',
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
        { name: 'google-site-verification', content: 'JKvx7He1sUiY8wx3iK8va6ZD-8sE--rGTwSDpYAKEW8' }
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