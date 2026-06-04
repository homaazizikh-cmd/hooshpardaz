/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      // تعریف رنگ‌های اختصاصی هوش‌پرداز
      colors: {
        brand: {
          dark: '#0f172a',    // سرمه‌ای عمیق (پس‌زمینه اصلی)
          accent1: '#38bdf8', // آبی الکتریک (رنگ اصلی)
          accent2: '#fb923c', // نارنجی نئونی (رنگ دکمه‌ها)
          light: '#94a3b8'    // خاکستری روشن برای متن
        }
      },
      // تعریف فونت‌های اختصاصی
      fontFamily: {
        'title': ['Dana', 'sans-serif'],        // برای تیترها
        'body': ['IRANYekan', 'sans-serif'],     // برای متن اصلی
        'blog': ['Vazirmatn', 'sans-serif'],     // برای بخش بلاگ
        
        // ۱. بازنویسی فونت پیش‌فرض sans تیلویند (چون در خط دوم کدت کلاس font-sans داری)
        'sans': ['IRANYekan', 'sans-serif'], 
      },
    },
  },
  plugins: [
    // ۲. پلاگین تزریق استایل‌های پایه برای اعمال خودکار فونت‌ها بدون دستکاری کدهای کامپوننت
    function({ addBase }) {
      addBase({
        // تمام تیترهای آکادمی هوش‌پرداز خودکار فونت دانا می‌گیرند
        'h1, h2, h3, h4, h5, h6': { 
          fontFamily: 'Dana, sans-serif' 
        },
        // تمام پاراگراف‌ها و توضیحات خودکار فونت وزیرمتن می‌گیرند
        'p': { 
          fontFamily: 'Vazirmatn, sans-serif' 
        },
      })
    }
  ],
}