<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#03050a] transition-colors duration-500 py-20 px-4 md:px-8">
    <div class="container mx-auto max-w-6xl">
      
      <div class="mb-20 text-center">
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">چرا <span class="text-brand-accent1">هوش‌پرداز؟</span></h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">ما استانداردهای آموزش فنی را تغییر داده‌ایم تا شما سریع‌تر به بازار کار برسید.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        
        <section id="mentoring" class="lg:col-span-2 bg-white dark:bg-[#0a0c10] border border-gray-200 dark:border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-brand-accent1/30 transition-all shadow-xl dark:shadow-none">
          <div class="text-5xl mb-6">👨‍🏫</div>
          <h2 class="text-3xl font-black text-gray-900 dark:text-white mb-4">منتورینگ اختصاصی</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">اساتید ارشد ما در جلسات ۱به‌۱، کدهای شما را بررسی، نقاط ضعف‌تان را شناسایی و به عنوان یک راهنمای واقعی در تمام مسیر کنار شما خواهند بود.</p>
        </section>

        <section id="projects" class="lg:row-span-2 bg-gradient-to-b from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
          <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div class="text-5xl mb-8">🚀</div>
          <h2 class="text-3xl font-black mb-6">۱۰۰٪ پروژه‌محور</h2>
          <p class="text-blue-100 text-lg leading-relaxed">یادگیری بدونِ تجربه، وقت تلف کردن است. شما در طول مسیر، با ساخت ۳ پروژه کاملاً تجاری، رزومه خود را برای دنیای واقعی آماده می‌کنید.</p>
        </section>

        <section id="career" class="bg-white dark:bg-[#0a0c10] border border-gray-200 dark:border-white/5 p-8 rounded-[2.5rem] hover:border-brand-accent1/30 transition-all shadow-xl dark:shadow-none">
          <div class="text-4xl mb-6">💼</div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">پشتیبانی بازار کار</h2>
          <p class="text-gray-600 dark:text-gray-400 text-sm">از رزومه‌نویسی تا شبیه‌سازی مصاحبه‌های استخدامی؛ ما تا لحظه استخدامِ شما در شرکت‌های برتر، همراه و پشتیبان شما هستیم.</p>
        </section>

        <section id="certificate" class="lg:col-span-2 bg-white dark:bg-[#0a0c10] border border-gray-200 dark:border-white/5 p-10 rounded-[2.5rem] flex items-center justify-between hover:border-brand-accent1/30 transition-all shadow-xl dark:shadow-none">
          <div>
            <h2 class="text-3xl font-black text-gray-900 dark:text-white mb-4">گواهی معتبر</h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg max-w-sm">مدرک دوزبانه هوش‌پرداز، مهر تاییدی بر تخصص و مهارت‌های شماست که در رزومه و فرآیندهای مهاجرتی بسیار معتبر است.</p>
          </div>
          <div class="text-7xl">📜</div>
        </section>

        <div class="bg-gray-900 dark:bg-white rounded-[2.5rem] p-10 flex items-center justify-center text-center">
            <NuxtLink to="/courses" class="text-xl font-bold text-white dark:text-gray-900 hover:scale-105 transition-transform">شروع یادگیری →</NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'ویژگی‌های آکادمی هوش‌پرداز',
  description: 'چرا هوش‌پرداز بهترین انتخاب برای یادگیری برنامه‌نویسی است؟'
})
</script>