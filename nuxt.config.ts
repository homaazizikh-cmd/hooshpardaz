export default defineNuxtConfig({
  // ماژول‌های مورد نیاز
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],

  // تنظیمات سوپابیس
  supabase: {
    redirect: false
  },

  // تنظیمات اصلی اپلیکیشن
  app: {
    head: {
      // تنظیم جهت متن به راست و زبان فارسی برای کل سایت
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa'
      },
      // فونت وزیرمتن برای ظاهر حرفه‌ای فارسی
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&display=swap' 
        }
      ]
    }
  },

  // تنظیمات Tailwind
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: false,
    viewer: true,
  },

  compatibilityDate: '2024-11-01'
})