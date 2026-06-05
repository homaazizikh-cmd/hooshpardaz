<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#03050a] text-gray-900 dark:text-white transition-colors duration-1000 overflow-hidden font-sans selection:bg-brand-accent1/30 selection:text-brand-accent1">
    
    <section class="relative pt-40 pb-20 overflow-hidden">
      <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] bg-blue-600/10 dark:bg-brand-accent1/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-sm font-bold mb-8 shadow-sm">
          تفاوت هوش‌پرداز چیست؟
        </div>
        <h1 class="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">
          فراتر از یک آموزشگاه، <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
            مسیر میان‌بر به بازار کار
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          ما تئوری‌های خسته‌کننده دانشگاهی را دور ریخته‌ایم. در هوش‌پرداز، شما از روز اول مثل یک مهندس ارشد کار می‌کنید.
        </p>
      </div>
    </section>

    <div class="container mx-auto px-4 md:px-8 max-w-6xl pb-32 space-y-32">
      
      <section id="projects" class="scroll-mt-32 relative flex flex-col md:flex-row items-center gap-12 group">
        <div class="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
        <div class="w-full md:w-1/2 relative z-10">
          <div class="w-16 h-16 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]">🚀</div>
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">۱۰۰٪ <span class="text-cyan-600 dark:text-cyan-400">پروژه‌محور</span></h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 font-light leading-loose mb-6 text-justify">
            خداحافظی با کدهای بی‌معنی روی تخته سیاه! تمام مسیرهای آموزشی ما بر اساس پروژه‌های واقعی استارتاپی طراحی شده‌اند. از ساخت سیستم‌های هوش مصنوعی تا طراحی رابط کاربری یک اپلیکیشن واقعی؛ شما رزومه‌تان را حین یادگیری می‌سازید.
          </p>
          <ul class="space-y-4 font-bold text-gray-700 dark:text-gray-300">
            <li class="flex items-center gap-3"><svg class="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> شبیه‌سازی محیط کار واقعی (Agile/Scrum)</li>
            <li class="flex items-center gap-3"><svg class="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> خروجی قابل ارائه در گیت‌هاب و پورتفولیو</li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 relative z-10">
          <div class="relative rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_40px_rgba(6,182,212,0.15)] group-hover:-translate-y-3 transition-transform duration-700">
            <NuxtImg src="/images/benefit-project.webp" alt="آموزش پروژه محور" class="w-full h-full object-cover aspect-[4/3] filter dark:brightness-90" format="webp" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="mentoring" class="scroll-mt-32 relative flex flex-col md:flex-row-reverse items-center gap-12 group">
        <div class="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700"></div>
        <div class="w-full md:w-1/2 relative z-10">
          <div class="w-16 h-16 bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)]">👨‍🏫</div>
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">منتورینگ <span class="text-purple-600 dark:text-purple-400">اختصاصی</span></h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 font-light leading-loose mb-6 text-justify">
            یادگیری مهارت‌های پیچیده نیازمند یک راهنمای دلسوز است. اساتید ما صرفاً ویدیو ضبط نکرده‌اند؛ آن‌ها به صورت هفتگی کدهای شما را بررسی (Code Review) می‌کنند، باگ‌هایتان را رفع کرده و نقشه راه اختصاصی شما را تنظیم می‌کنند.
          </p>
          <ul class="space-y-4 font-bold text-gray-700 dark:text-gray-300">
            <li class="flex items-center gap-3"><svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> جلسات آنلاین رفع اشکال هفتگی</li>
            <li class="flex items-center gap-3"><svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> ارتباط مستقیم با مدرسین ارشد</li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 relative z-10">
          <div class="relative rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_40px_rgba(168,85,247,0.15)] group-hover:-translate-y-3 transition-transform duration-700">
            <NuxtImg src="/images/benefit-mentor.webp" alt="منتورینگ هوش پرداز" class="w-full h-full object-cover aspect-[4/3] filter dark:brightness-90" format="webp" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="career" class="scroll-mt-32 relative flex flex-col md:flex-row items-center gap-12 group">
        <div class="absolute top-1/2 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
        <div class="w-full md:w-1/2 relative z-10">
          <div class="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">💼</div>
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">پشتیبانی <span class="text-emerald-600 dark:text-emerald-400">بازار کار</span></h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 font-light leading-loose mb-6 text-justify">
            هدف ما فقط آموزش نیست؛ هدف ما استخدام شماست! هنرجویان برترِ دوره‌های ما مستقیماً به شرکت‌های دانش‌بنیان، استارتاپ‌ها و پروژه‌های فریلنسری معرفی می‌شوند. ما در نوشتن رزومه و مصاحبه‌های شغلی کنار شما هستیم.
          </p>
          <ul class="space-y-4 font-bold text-gray-700 dark:text-gray-300">
            <li class="flex items-center gap-3"><svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> ساخت رزومه بین‌المللی و لینکدین</li>
            <li class="flex items-center gap-3"><svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> معرفی مستقیم به شبکه‌های کاریابی شریک</li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 relative z-10">
          <div class="relative rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_40px_rgba(16,185,129,0.15)] group-hover:-translate-y-3 transition-transform duration-700">
            <NuxtImg src="/images/benefit-career.webp" alt="پشتیبانی بازار کار" class="w-full h-full object-cover aspect-[4/3] filter dark:brightness-90" format="webp" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="certificate" class="scroll-mt-32 relative flex flex-col md:flex-row-reverse items-center gap-12 group">
        <div class="absolute top-1/2 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-orange-500/20 transition-colors duration-700"></div>
        <div class="w-full md:w-1/2 relative z-10">
          <div class="w-16 h-16 bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-[0_0_30px_rgba(249,115,22,0.3)]">📜</div>
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">ارائه مدرک <span class="text-orange-600 dark:text-orange-400">معتبر</span></h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 font-light leading-loose mb-6 text-justify">
            پایان دوره شما، آغاز مسیر حرفه‌ای است. با انجام موفقیت‌آمیز پروژه‌های پایانی، مدرک معتبر آکادمی هوش‌پرداز (با کد رهگیری اختصاصی) به شما اعطا می‌شود که برای ارائه اعتبار بالایی دارد.
          </p>
          <ul class="space-y-4 font-bold text-gray-700 dark:text-gray-300">
            <li class="flex items-center gap-3"><svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> گواهینامه دوزبانه (فارسی و انگلیسی)</li>
            <li class="flex items-center gap-3"><svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> دارای کد پیگیری آنلاین در سایت</li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 relative z-10">
          <div class="relative rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_40px_rgba(249,115,22,0.15)] group-hover:-translate-y-3 transition-transform duration-700">
            <NuxtImg src="/images/benefit-certificate.webp" alt="مدرک معتبر هوش پرداز" class="w-full h-full object-cover aspect-[4/3] filter dark:brightness-90" format="webp" loading="lazy" />
          </div>
        </div>
      </section>

    </div>
    
    <section class="py-20 mb-20 container mx-auto px-4 border-t border-gray-200 dark:border-white/5">
      <div class="bg-gray-100 dark:bg-white/[0.02] p-12 md:p-20 rounded-[3rem] text-center border border-gray-200 dark:border-white/5 shadow-xl dark:shadow-none relative overflow-hidden">
        <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">به جامعه حرفه‌ای‌ها بپیوندید</h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">همین حالا می‌توانید یکی از مسیرهای یادگیری ما را انتخاب کنید و روی آینده خود سرمایه‌گذاری مطمئنی انجام دهید.</p>
        <NuxtLink to="/courses" class="inline-block px-10 py-5 bg-brand-accent1 text-white rounded-2xl font-black text-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-105 transition-all duration-500">
          مشاهده دوره‌های آموزشی
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'چرا هوش‌پرداز؟ | تفاوت‌ها و مزایای آکادمی',
  description: 'در هوش‌پرداز با آموزش ۱۰۰٪ پروژه‌محور، منتورینگ اختصاصی و پشتیبانی ورود به بازار کار، در کمترین زمان به یک متخصص تبدیل شوید.',
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>