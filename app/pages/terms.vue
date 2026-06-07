<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300" dir="rtl">
    
    <!-- هدر صفحه (Hero Section) -->
    <header class="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 pt-24 pb-16 px-6 lg:px-12">
      <!-- افکت‌های نوری پس‌زمینه (تم بنفش/نیلی برای قوانین) -->
      <div class="absolute top-0 left-1/3 w-96 h-96 bg-violet-500/10 dark:bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="max-w-6xl mx-auto relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-semibold mb-6 border border-violet-100 dark:border-violet-800/50">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
          شفافیت در ارائه خدمات
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-500 bg-clip-text text-transparent">
          شرایط و قوانین استفاده
        </h1>
        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          لطفاً پیش از ثبت‌نام و استفاده از آموزش‌ها و خدمات پلتفرم هوش‌پرداز، قوانین زیر را با دقت مطالعه نمایید. استفاده از سایت به منزله پذیرش این شرایط است.
        </p>
        <div class="mt-8 text-sm text-slate-500 dark:text-slate-500">
          آخرین به‌روزرسانی: <span class="font-medium text-slate-700 dark:text-slate-300">{{ lastUpdated }}</span>
        </div>
      </div>
    </header>

    <!-- بدنه اصلی -->
    <main class="max-w-6xl mx-auto px-6 lg:px-12 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
        
        <!-- منوی کناری چسبان (Sidebar Navigation) -->
        <aside class="hidden lg:block lg:col-span-1">
          <div class="sticky top-28 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
            <h3 class="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">فهرست قوانین</h3>
            <nav class="space-y-1">
              <button 
                v-for="section in sections" 
                :key="section.id"
                @click="scrollToSection(section.id)"
                :class="[
                  'w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 text-right',
                  activeSection === section.id 
                    ? 'bg-violet-50 dark:bg-violet-600/10 text-violet-600 dark:text-violet-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                ]"
              >
                <span v-html="section.icon" class="w-5 h-5 flex-shrink-0"></span>
                {{ section.title }}
              </button>
            </nav>
          </div>
        </aside>

        <!-- محتوای شرایط استفاده -->
        <div class="lg:col-span-3 space-y-16 pb-20">
          <section 
            v-for="section in sections" 
            :key="section.id" 
            :id="section.id"
            class="scroll-mt-32 group"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/40 dark:to-indigo-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300">
                <span v-html="section.icon" class="w-6 h-6"></span>
              </div>
              <h2 class="text-2xl font-bold text-slate-800 dark:text-white">{{ section.title }}</h2>
            </div>
            
            <div class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] text-slate-600 dark:text-slate-300 leading-loose">
              <div v-for="(paragraph, index) in section.content" :key="index" class="mb-6 last:mb-0">
                <!-- اگر پاراگراف از نوع لیست باشد -->
                <ul v-if="paragraph.type === 'list'" class="list-none space-y-3 mt-4">
                  <li v-for="(item, i) in paragraph.items" :key="i" class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-violet-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span v-html="item"></span>
                  </li>
                </ul>
                <!-- متن عادی -->
                <p v-else v-html="paragraph.text"></p>
              </div>
            </div>
          </section>
        </div>
        
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const lastUpdated = ref('۲۰ خرداد ۱۴۰۳');
const activeSection = ref('general');

// داده‌های بخش‌های مختلف صفحه شرایط استفاده
const sections = ref([
  {
    id: 'general',
    title: 'قوانین و مقررات عمومی',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
    content: [
      { type: 'text', text: 'وب‌سایت هوش‌پرداز تحت قوانین جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف‌کننده فعالیت می‌کند. کاربرانی که در این وب‌سایت ثبت‌نام می‌کنند، موظف به رعایت قوانین مرتبط با کاربر هستند.' },
      { type: 'text', text: 'ما حق داریم در هر زمان، بخش‌هایی از این قوانین را تغییر داده یا به‌روزرسانی کنیم. ادامه استفاده شما از خدمات سایت، به معنای پذیرش این تغییرات است.' }
    ]
  },
  {
    id: 'account',
    title: 'حساب کاربری و ثبت‌نام',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>',
    content: [
      { type: 'text', text: 'برای استفاده از دوره‌های آموزشی، ایجاد حساب کاربری الزامی است. کاربران موظف‌اند اطلاعات هویتی خود را به‌صورت دقیق و واقعی وارد نمایند.' },
      { type: 'list', items: [
        '<strong class="text-slate-800 dark:text-white">حفظ امنیت:</strong> مسئولیت حفظ امنیت نام کاربری و رمز عبور تماماً بر عهده کاربر است.',
        '<strong class="text-slate-800 dark:text-white">دوره‌های کودکان:</strong> ثبت‌نام افراد زیر ۱۵ سال در دوره‌های مخصوص کودکان (مانند اسکرچ)، باید تحت نظارت و با رضایت والدین یا سرپرست قانونی انجام شود.',
        '<strong class="text-slate-800 dark:text-white">اشتراک حساب:</strong> استفاده اشتراکی از یک حساب کاربری توسط چند نفر ممنوع بوده و در صورت مشاهده، حساب کاربری مسدود خواهد شد.'
      ]}
    ]
  },
  {
    id: 'intellectual-property',
    title: 'مالکیت فکری و کپی‌رایت',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    content: [
      { type: 'text', text: 'تمامی محتواهای متنی، ویدیویی، کدهای نمونه و پروژه‌های ارائه شده در دوره‌های آموزشی، در انحصار پلتفرم هوش‌پرداز می‌باشد.' },
      { type: 'list', items: [
        'دانلود، کپی‌برداری، ضبط از صفحه نمایش و بازنشر ویدیوهای آموزشی در سایر پلتفرم‌ها، کانال‌های تلگرامی یا سایت‌ها مطلقاً ممنوع است.',
        'در صورت مشاهده هرگونه تخلف و انتشار غیرقانونی محتوا، حساب کاربر خاطی بدون اخطار قبلی مسدود شده و موضوع از طریق مراجع قضایی (پلیس فتا) پیگیری خواهد شد.',
        'استفاده از کدهای آموزشی دوره‌ها (مانند پایتون و هوش مصنوعی) در پروژه‌های شخصی و کاری شما کاملاً آزاد و بلامانع است.'
      ]}
    ]
  },
  {
    id: 'payments',
    title: 'خرید، پرداخت و استرداد وجه',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>',
    content: [
      { type: 'text', text: 'ثبت‌نام در دوره‌های ویژه و بوت‌کمپ‌ها نیازمند پرداخت هزینه از طریق درگاه‌های امن بانکی موجود در سایت است.' },
      { type: 'list', items: [
        '<strong class="text-slate-800 dark:text-white">تضمین کیفیت و عودت وجه:</strong> ما به کیفیت آموزش‌های خود اطمینان داریم. در صورت عدم رضایت از دوره‌های آموزشی، تا <strong class="text-blue-600 dark:text-blue-400">۷ روز</strong> پس از خرید (مشروط بر اینکه بیش از ۳۰٪ محتوای دوره را مشاهده نکرده باشید)، کل مبلغ پرداختی با کمال میل عودت داده می‌شود.',
        '<strong class="text-slate-800 dark:text-white">کدهای تخفیف:</strong> کدهای تخفیف دارای محدودیت زمانی و ظرفیت هستند و پس از انقضا قابل تمدید یا استفاده مجدد نمی‌باشند.'
      ]}
    ]
  },
  {
    id: 'user-conduct',
    title: 'نظرات و رفتار کاربران',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>',
    content: [
      { type: 'text', text: 'بخش پرسش و پاسخ و نظرات دوره‌ها، فضایی برای یادگیری گروهی و رفع اشکال است. از کاربران تقاضا می‌شود در این فضا احترام متقابل را حفظ کنند.' },
      { type: 'list', items: [
        'ارسال محتوای توهین‌آمیز، سیاسی، نژادپرستانه و خلاف عرف جامعه در بخش نظرات ممنوع است.',
        'قرار دادن لینک‌های تبلیغاتی سایر وب‌سایت‌ها یا کانال‌ها در بخش پرسش و پاسخ مجاز نمی‌باشد.',
        'پشتیبان‌ها و مدرسین دوره متعهد هستند در سریع‌ترین زمان ممکن (حداکثر ۲۴ تا ۴۸ ساعت کاری) به سوالات فنی شما پاسخ دهند.'
      ]}
    ]
  }
]);

// تابع اسکرول نرم به بخش‌ها
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = id;
  }
};

// سیستم تشخیص اسکرول (Intersection Observer)
let observer;
onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  sections.value.forEach(section => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.dark ::-webkit-scrollbar-thumb {
  background: #334155;
}
</style>