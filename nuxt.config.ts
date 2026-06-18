export default defineNuxtConfig({
  // ماژول‌های مورد نیاز پروژه داناورس
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],

  // 🚀 تنظیمات استاندارد و ضد باگ Nuxt 4 برای i18n
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'fa',
    detectBrowserLanguage: false,
    locales: [
      { code: 'fa', language: 'fa-IR', name: 'فارسی', dir: 'rtl' },
      { code: 'en', language: 'en-US', name: 'English', dir: 'ltr' }
    ],
    // 👈 این نقطه و اسلش در ساختار جدید یعنی: برو داخل پوشه i18n بگرد!
    vueI18n: './i18n.config.ts' 
  },

  // تنظیمات دسترسی سرور به متغیرهای محیطی .env
  runtimeConfig: {
    telegramToken: process.env.NUXT_TELEGRAM_TOKEN,
    telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID,
    googleApiKey: process.env.GOOGLE_API_KEY, 
  },

  // تنظیمات بهینه‌سازی تصاویر و دامنه‌های مجاز
  image: {
    format: ['webp'],
    domains: [
      'images.unsplash.com',
      'i.pravatar.cc',
      'rrelkadkixesdzydcwgt.supabase.co' 
    ]
  },

  // آدرس جدید سایت و نام برند در نقشه سایت (Sitemap)
  site: {
    url: 'https://danaverse.ir',
    name: 'داناورس'
  },

  // تنظیمات اختصاصی و حرفه‌ای نقشه سایت (Sitemap)
  sitemap: {
    autoI18n: true, 
    strictNuxtContentPaths: true,
    exclude: [
      '/admin/**', 
      '/talent-test/result/**' 
    ],
    cacheMaxAgeSeconds: 3600,
    sources: [
      '/api/_sitemap-urls' 
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
      titleTemplate: '%s | داناورس',
      title: 'داناورس | آکادمی برنامه‌نویسی و هوش مصنوعی',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'داناورس؛ مرجع آموزش پروژه‌محور برنامه‌نویسی و هوش مصنوعی برای کودکان، نوجوانان و بزرگسالان همراه با استعدادیابی هوشمند.' },
        { name: 'theme-color', content: '#0f172a' },
        { property: 'og:site_name', content: 'داناورس' },
        { property: 'og:title', content: 'داناورس | آکادمی برنامه‌نویسی و هوش مصنوعی' },
        { property: 'og:description', content: 'مرجع آموزش پروژه‌محور برنامه‌نویسی و هوش مصنوعی همراه با استعدادیابی هوشمند.' },
        { property: 'og:url', content: 'https://danaverse.ir' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fa_IR' },
        { name: 'google-site-verification', content: 'GIVi970Muy1SseqLB2rZNSU17lyfoar8B6ldZKS5nzE' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&display=swap' },
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