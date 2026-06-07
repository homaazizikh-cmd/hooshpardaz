<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300" dir="rtl">
    
    <!-- هدر صفحه (Hero Section) -->
    <header class="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 pt-24 pb-16 px-6 lg:px-12">
      <!-- افکت‌های نوری پس‌زمینه -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="max-w-6xl mx-auto relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 border border-blue-100 dark:border-blue-800/50">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          تعهد ما به امنیت شما
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
          حریم خصوصی و امنیت داده‌ها
        </h1>
        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          شفافیت، اصل اول ما در هوش‌پرداز است. ما به حریم شخصی شما احترام می‌گذاریم و از داده‌های شما با بالاترین استانداردهای امنیتی محافظت می‌کنیم.
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
            <h3 class="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">فهرست مطالب</h3>
            <nav class="space-y-1">
              <button 
                v-for="section in sections" 
                :key="section.id"
                @click="scrollToSection(section.id)"
                :class="[
                  'w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 text-right',
                  activeSection === section.id 
                    ? 'bg-blue-50 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                ]"
              >
                <span v-html="section.icon" class="w-5 h-5 flex-shrink-0"></span>
                {{ section.title }}
              </button>
            </nav>
          </div>
        </aside>

        <!-- محتوای حریم خصوصی -->
        <div class="lg:col-span-3 space-y-16 pb-20">
          <section 
            v-for="section in sections" 
            :key="section.id" 
            :id="section.id"
            class="scroll-mt-32 group"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <span v-html="section.icon" class="w-6 h-6"></span>
              </div>
              <h2 class="text-2xl font-bold text-slate-800 dark:text-white">{{ section.title }}</h2>
            </div>
            
            <div class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] text-slate-600 dark:text-slate-300 leading-loose">
              <div v-for="(paragraph, index) in section.content" :key="index" class="mb-6 last:mb-0">
                <!-- اگر پاراگراف از نوع لیست باشد -->
                <ul v-if="paragraph.type === 'list'" class="list-none space-y-3 mt-4">
                  <li v-for="(item, i) in paragraph.items" :key="i" class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    <span>{{ item }}</span>
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

const lastUpdated = ref('۱۵ خرداد ۱۴۰۳');
const activeSection = ref('data-collection');

// داده‌های بخش‌های مختلف صفحه (کاملاً قابل ویرایش)
const sections = ref([
  {
    id: 'data-collection',
    title: 'اطلاعاتی که جمع‌آوری می‌کنیم',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>',
    content: [
      { type: 'text', text: 'هنگامی که از وب‌سایت هوش‌پرداز استفاده می‌کنید یا در دوره‌های ما ثبت‌نام می‌نمایید، ما اطلاعات خاصی را برای ارائه خدمات بهتر جمع‌آوری می‌کنیم. این اطلاعات شامل موارد زیر است:' },
      { type: 'list', items: [
        'اطلاعات هویتی مانند نام، نام خانوادگی و آدرس ایمیل هنگام ثبت‌نام.',
        'اطلاعات فنی مانند آدرس IP، نوع مرورگر و سیستم‌عامل شما جهت بهینه‌سازی سایت.',
        'سوابق آموزشی و پیشرفت شما در دوره‌ها جهت صدور مدرک و ارائه پشتیبانی.'
      ]}
    ]
  },
  {
    id: 'data-usage',
    title: 'نحوه استفاده از اطلاعات',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
    content: [
      { type: 'text', text: 'ما از اطلاعات جمع‌آوری شده منحصراً برای اهداف زیر استفاده می‌کنیم:' },
      { type: 'list', items: [
        'ایجاد و مدیریت حساب کاربری شما در پلتفرم آموزشی.',
        'ارسال اطلاع‌رسانی‌های مهم درباره آپدیت دوره‌ها، وبینارها و کدهای تخفیف.',
        'تحلیل رفتار کاربران برای بهبود رابط کاربری و کیفیت محتواهای آموزشی.',
        'جلوگیری از تقلب و حفظ امنیت حساب کاربری کاربران.'
      ]},
      { type: 'text', text: '<strong class="text-slate-800 dark:text-white">تضمین ما:</strong> اطلاعات شما تحت هیچ شرایطی به شرکت‌های تبلیغاتی شخص ثالث فروخته یا اجاره داده نمی‌شود.' }
    ]
  },
  {
    id: 'cookies',
    title: 'کوکی‌ها و ردیابی',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h.01M15 10a1 1 0 011-1h.01M12 15a1 1 0 011-1h.01" /></svg>',
    content: [
      { type: 'text', text: 'کوکی‌ها فایل‌های متنی کوچکی هستند که روی دستگاه شما ذخیره می‌شوند. ما از کوکی‌ها برای به خاطر سپردن ورود شما (Keep Login)، ذخیره تنظیمات (مانند حالت تاریک/روشن) و تحلیل ترافیک سایت استفاده می‌کنیم.' },
      { type: 'text', text: 'شما می‌توانید از طریق تنظیمات مرورگر خود، پذیرش کوکی‌ها را مسدود کنید، اما در این صورت ممکن است برخی از امکانات سایت مانند سبد خرید یا پنل کاربری به درستی کار نکنند.' }
    ]
  },
  {
    id: 'security',
    title: 'امنیت و محافظت',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>',
    content: [
      { type: 'text', text: 'تمامی اطلاعات حساس شما، از جمله رمزهای عبور، با استفاده از الگوریتم‌های پیشرفته (نظیر bcrypt) رمزنگاری می‌شوند. همچنین تمامی ارتباطات بین مرورگر شما و سرورهای ما بر بستر امن HTTPS و با استفاده از گواهینامه‌های SSL رمزگذاری می‌گردد.' },
      { type: 'text', text: 'با وجود رعایت بالاترین استانداردهای امنیتی، باید توجه داشته باشید که هیچ سیستمی در فضای اینترنت ۱۰۰٪ غیرقابل نفوذ نیست. مسئولیت حفظ امنیت رمز عبور بر عهده خود کاربر است.' }
    ]
  },
  {
    id: 'user-rights',
    title: 'حقوق شما بر داده‌ها',
    icon: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>',
    content: [
      { type: 'text', text: 'بر اساس قوانین حفظ حریم خصوصی، شما حقوق زیر را در قبال داده‌های خود دارید:' },
      { type: 'list', items: [
        'حق دسترسی: می‌توانید درخواستی برای دریافت کپی تمامی اطلاعاتی که از شما داریم ثبت کنید.',
        'حق اصلاح: می‌توانید اطلاعات ناقص یا نادرست خود را از طریق پنل کاربری ویرایش کنید.',
        'حق فراموشی (حذف): می‌توانید درخواست حذف کامل حساب کاربری و تمامی سوابق خود را به پشتیبانی ارسال کنید.'
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

// سیستم تشخیص اسکرول (Intersection Observer) برای منوی چسبان
let observer;
onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // تنظیم محدوده تشخیص
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  // متصل کردن ناظر به تمام بخش‌ها
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
/* اضافه کردن قابلیت اسکرول نرم به کل صفحه */
html {
  scroll-behavior: smooth;
}

/* در صورت نیاز به سفارشی سازی اسکرول بار (اختیاری - اگر در کامپوننت مادر تعریف نشده باشد) */
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