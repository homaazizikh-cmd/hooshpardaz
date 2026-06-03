export default defineNuxtConfig({
  // ماژول‌های مورد نیاز
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxtjs/sitemap',
    '@nuxt/image' // 👈 ماژول بهینه‌سازی تصاویر (سئو و سرعت) اضافه شد
  ],

  // 👈 تنظیمات حرفه‌ای Nuxt Image اضافه شد
  image: {
    format: ['webp'], // تبدیل خودکار تصاویر به WebP برای سرعت بیشتر
    domains: [
      'images.unsplash.com', // اجازه بهینه‌سازی برای عکس‌های آنسپلاش
      'i.pravatar.cc',       // اجازه بهینه‌سازی برای عکس‌های تستی پروفایل
      'https://rrelkadkixesdzydcwgt.supabase.co' // 🔴 مهم: آدرس پروژه Supabase خود را اینجا جایگزین کنید (بدون https://)
    ]
  },

  site: {
    url: 'https://hoooshpardaz.ir',
    name: 'آکادمی هوش‌پرداز'
  },

  supabase: {
    redirect: false
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa-IR'
      },
      titleTemplate: '%s | هوش‌پرداز',
      title: 'آکادمی برنامه‌نویسی و هوش مصنوعی',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'آکادمی هوش‌پرداز؛ مرجع آموزش پروژه‌محور برنامه‌نویسی و هوش مصنوعی برای کودکان، نوجوانان و بزرگسالان همراه با استعدادیابی هوشمند.' },
        { name: 'theme-color', content: '#0f172a' },
        
        { property: 'og:site_name', content: 'هوش‌پرداز' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fa_IR' },

        // کد تایید گوگل سرچ کنسول
        { name: 'google-site-verification', content: 'JKvx7He1sUiY8wx3iK8va6ZD-8sE--rGTwSDpYAKEW8' }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&display=swap' 
        },
        // 👇 کدهای فاوآیکون برای گوگل و دستگاه‌های هوشمند 👇
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