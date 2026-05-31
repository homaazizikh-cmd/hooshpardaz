<template>
  <div class="min-h-screen flex flex-col items-center pt-10 pb-20 relative overflow-hidden transition-colors duration-500">
    
    <!-- پس‌زمینه شبکه‌ای (Grid) برای زیبایی بیشتر مشابه عکس -->
    <div class="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none" 
         style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 50px 50px;">
    </div>

    <!-- هدر صفحه تماس با ما -->
    <div class="relative z-10 text-center mb-16 w-full px-4 mt-8">
      <!-- کلمه پس‌زمینه بزرگ (واترمارک) -->
      <div class="absolute inset-0 flex items-center justify-center -z-10 select-none overflow-hidden">
        <h1 class="text-[5rem] md:text-[9rem] font-black text-blue-50 dark:text-white/5 tracking-[0.5em] uppercase">Contact Us</h1>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
        تماس با <span class="text-blue-600 dark:text-brand-accent1">هوش‌پرداز</span>
      </h2>
      <p class="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto font-medium">
        ما همیشه آماده شنیدن صدای شما هستیم. برای مشاوره، همکاری یا هر سوالی، از راه‌های زیر با ما در ارتباط باشید.
      </p>
    </div>

    <!-- باکس اصلی تماس با ما -->
    <div class="relative z-10 w-full max-w-5xl px-4">
      <div class="flex flex-col md:flex-row bg-white dark:bg-gray-800/80 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-none dark:border dark:border-gray-700 overflow-hidden backdrop-blur-xl">
        
        <!-- بخش اطلاعات تماس (سمت راست - آبی رنگ) -->
        <!-- در سایت‌های راست‌چین (RTL)، اولین المان flex در سمت راست قرار می‌گیرد -->
        <div class="w-full md:w-2/5 bg-gradient-to-br from-blue-500 to-blue-700 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          
          <!-- افکت‌های نوری در پس‌زمینه بخش آبی -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-3">ارتباط با ما</h3>
            <p class="text-blue-100 text-sm mb-12 font-medium">سریع‌ترین راه ارتباطی را انتخاب کنید.</p>

            <div class="space-y-8">
              <!-- ایمیل -->
              <div class="flex items-center gap-5 group cursor-pointer">
                <div class="w-14 h-14 flex-shrink-0 bg-white/10 group-hover:bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-300 shadow-inner">
                  <!-- آیکون ایمیل -->
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p class="text-sm text-blue-100 mb-1 font-medium">ایمیل</p>
                  <p class="font-bold text-lg tracking-wider" dir="ltr">contact@hooshpardaz.com</p>
                </div>
              </div>

              <!-- تلگرام -->
              <div class="flex items-center gap-5 group cursor-pointer">
                <div class="w-14 h-14 flex-shrink-0 bg-white/10 group-hover:bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-300 shadow-inner">
                  <!-- آیکون تلگرام -->
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </div>
                <div>
                  <p class="text-sm text-blue-100 mb-1 font-medium">پشتیبانی تلگرام</p>
                  <p class="font-bold text-lg tracking-wider" dir="ltr">@hooshpardaz_sup</p>
                </div>
              </div>
            </div>
          </div>

          <!-- شبکه‌های اجتماعی -->
          <div class="relative z-10 mt-16 pt-8 border-t border-white/10">
            <p class="text-sm text-blue-100 mb-5 font-medium">ما را در شبکه‌های اجتماعی دنبال کنید:</p>
            <div class="flex gap-4">
              <a href="#" class="w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <span class="font-bold text-lg">in</span>
              </a>
              <a href="#" class="w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <!-- آیکون اینستاگرام -->
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" class="w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <!-- آیکون ارسال -->
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- بخش فرم ارسال پیام (سمت چپ - سفید/تاریک) -->
        <div class="w-full md:w-3/5 p-8 md:p-14">
          <h3 class="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">ارسال پیام مستقیم</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm mb-10 font-medium">پیام تو بنویس؛ در اسرع وقت منتورهای هوش‌پرداز باهات تماس می‌گیرن.</p>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- فیلد نام -->
              <div>
                <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">نام و نام خانوادگی</label>
                <input 
                  type="text" 
                  placeholder="مثال: علی محمدی" 
                  class="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
              </div>
              
              <!-- فیلد شماره تماس -->
              <div>
                <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">شماره تماس</label>
                <input 
                  type="text" 
                  dir="ltr"
                  placeholder="0912XXXXXXX" 
                  class="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder:text-right font-sans"
                >
              </div>
            </div>

            <!-- فیلد متن پیام -->
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">متن پیام</label>
              <textarea 
                rows="4" 
                placeholder="در چه موردی به راهنمایی نیاز دارید؟" 
                class="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <!-- دکمه ارسال -->
            <div class="flex justify-end pt-4">
              <button 
                type="submit" 
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:translate-y-0"
              >
                <span>ارسال</span>
                <!-- آیکون فلش ارسال (چرخیده برای فارسی) -->
                <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// تابع ارسال فرم
const submitForm = () => {
  // در اینجا می‌توانید کد اتصال به بک‌اند را بنویسید
  alert('پیام شما با موفقیت دریافت شد! به زودی با شما تماس می‌گیریم.')
}

// تنظیم عنوان صفحه
useHead({
  title: 'تماس با ما | هوش پرداز'
})
</script>