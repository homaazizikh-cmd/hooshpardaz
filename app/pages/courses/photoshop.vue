<script setup>
// ۱. تنظیمات حرفه‌ای سئو (useSeoMeta)
useSeoMeta({
  title: 'دوره آنلاین فتوشاپ | آموزش پروژه محور فتوشاپ | هوش‌پرداز',
  description: 'در دوره آنلاین فتوشاپ هوش‌پرداز، صفر تا صد فتوشاپ را به صورت پروژه محور یاد بگیرید و وارد بازار کار شوید. با پشتیبانی اساتید و مدرک معتبر.',
  ogTitle: 'دوره آنلاین فتوشاپ - یادگیری سریع و حرفه‌ای | هوش‌پرداز',
  ogDescription: 'بهترین دوره آنلاین فتوشاپ برای ورود به بازار کار طراحی گرافیک.',
  ogImage: '/images/photoshop-course.webp',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-white mb-6">دوره آنلاین فتوشاپ</h1>
    
    <NuxtImg 
      src="/images/photoshop-course.webp" 
      alt="تصویر معرفی دوره آنلاین فتوشاپ در آکادمی هوش‌پرداز" 
      class="rounded-2xl mb-8 w-full shadow-2xl"
    />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <section class="lg:col-span-2 prose prose-invert lg:prose-xl">
        <p>
          فتوشاپ (Photoshop) قدرتمندترین ابزار برای طراحان گرافیک است. در این 
          <strong>دوره آنلاین فتوشاپ</strong>، ما از پایه تا پیشرفته، تکنیک‌های طراحی حرفه‌ای را آموزش می‌دهیم.
        </p>

        <div class="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 mt-8">
          <h3 class="text-2xl font-bold text-white mb-6">سرفصل‌های آموزشی</h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-4 text-gray-300">
              <span class="text-accent1">✓</span> آشنایی با محیط فتوشاپ و ابزارهای پایه
            </li>
            <li class="flex items-center gap-4 text-gray-300">
              <span class="text-accent1">✓</span> لایه‌بندی پیشرفته و ماسک‌گذاری (Masking)
            </li>
            <li class="flex items-center gap-4 text-gray-300">
              <span class="text-accent1">✓</span> رتوش تخصصی تصاویر و کار با پوست
            </li>
            <li class="flex items-center gap-4 text-gray-300">
              <span class="text-accent1">✓</span> هوش مصنوعی جدید فتوشاپ (Generative Fill)
            </li>
          </ul>
        </div>
      </section>

      <div class="lg:sticky lg:top-24 h-fit bg-gradient-to-br from-blue-900/40 to-transparent border border-accent1/30 rounded-3xl p-8 shadow-2xl">
        <h4 class="text-lg text-gray-400 mb-2">سرمایه‌گذاری شما</h4>
        <div class="text-4xl font-black text-white mb-6">۲,۹۰۰,۰۰۰ <span class="text-sm font-normal text-gray-400">تومان</span></div>
        
        <button class="w-full py-4 bg-accent1 hover:bg-blue-500 transition-all rounded-xl font-bold text-blue-950 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
          ثبت‌نام در دوره
        </button>
        
        <p class="mt-6 text-sm text-center text-gray-500">پشتیبانی اختصاصی اساتید + مدرک معتبر</p>
      </div>
    </div>
  </div>
</template>