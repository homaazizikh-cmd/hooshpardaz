<template>
  <div class="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
    
    <section class="relative min-h-[85vh] flex items-center justify-center py-28 overflow-hidden bg-brand-dark">
      <div class="absolute inset-0 opacity-30 dark:opacity-20 mix-blend-overlay">
        <img src="/images/Banner.jpg" class="w-full h-full object-cover">
      </div>
      
      <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse-slow"></div>
      <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-accent1/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-bold mb-8 backdrop-blur-md">
          <span class="w-2 h-2 rounded-full bg-brand-accent1 animate-ping"></span>
          پلتفرم جامع آموزش تکنولوژی
        </div>
        
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
          آکادمی تخصصی <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent1 to-blue-400 drop-shadow-lg">هوش‌پرداز</span>
        </h1>
        
        <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          آموزش مهارت‌های آینده، از پایتون تا هوش مصنوعی، با رویکرد ورود مستقیم به بازار کار و خلق پروژه‌های واقعی.
        </p>
        
        <NuxtLink to="/courses" class="inline-flex items-center gap-3 bg-brand-accent1 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-500 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(56,189,248,0.8)] hover:-translate-y-1 transition-all duration-300 text-lg">
          مشاهده مسیرهای آموزشی
          <svg class="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </NuxtLink>
      </div>
    </section>

    <section class="relative z-20 -mt-16 container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <NuxtLink v-for="item in benefits" :key="item.title" :to="item.link" 
                  class="group p-6 md:p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl dark:shadow-none border border-white/40 dark:border-gray-700 text-center hover:-translate-y-2 hover:border-brand-accent1 dark:hover:border-brand-accent1 transition-all duration-300">
          <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{{ item.icon }}</div>
          <h4 class="font-bold text-gray-800 dark:text-white">{{ item.title }}</h4>
        </NuxtLink>
      </div>
    </section>

    <section class="py-24 container mx-auto px-4">
      <div class="bg-gradient-to-r from-blue-700 via-blue-600 to-brand-accent1 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between shadow-[0_20px_50px_-15px_rgba(37,99,235,0.5)] relative overflow-hidden group">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
        <div class="absolute -left-10 top-1/2 -translate-y-1/2 text-[200px] opacity-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">🧠</div>
        
        <div class="relative z-10 mb-8 md:mb-0 text-center md:text-right">
          <div class="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full mb-4 border border-white/30">سیستم اختصاصی هوش‌پرداز</div>
          <h3 class="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">نمی‌دانید کدام مسیر برای شما مناسب‌تر است؟</h3>
          <p class="text-blue-100 text-lg max-w-xl font-medium">با پاسخ به ۱۵ سوال هدفمند و مبتنی بر روانشناسی شناختی، در کمتر از ۲ دقیقه مسیر شغلی ایده‌آل خود را پیدا کنید.</p>
        </div>
        
        <NuxtLink to="/talent-test" class="relative z-10 bg-white text-blue-600 px-8 py-5 rounded-2xl font-black shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-3 whitespace-nowrap text-lg">
          شروع استعدادیابی
          <span class="animate-pulse text-xl">✨</span>
        </NuxtLink>
      </div>
    </section>

    <section class="py-16 container mx-auto px-4">
      <div class="text-center mb-16">
        <h3 class="text-3xl md:text-4xl font-black dark:text-white mb-4">نقشه راه یادگیری <span class="text-brand-accent1">هوش‌پرداز</span></h3>
        <p class="text-gray-500 dark:text-gray-400 font-medium">مسیر شفاف و گام‌به‌گام برای رسیدن به تخصص</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <NuxtLink v-for="(path, index) in paths" :key="path.name" :to="'/roadmap/' + path.slug" 
                  class="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 hover:border-brand-accent1 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.15)] hover:-translate-y-2 group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-accent1/10 to-transparent rounded-bl-full pointer-events-none"></div>
          
          <div class="w-14 h-14 bg-blue-50 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-brand-accent1 group-hover:text-white transition-all duration-300 shadow-sm">
            {{ path.icon }}
          </div>
          
          <h4 class="text-2xl font-bold mb-3 dark:text-white group-hover:text-brand-accent1 transition-colors">{{ path.name }}</h4>
          <p class="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">{{ path.desc }}</p>
          
          <div class="inline-flex items-center gap-2 text-brand-accent1 font-bold">
            مشاهده نقشه راه 
            <svg class="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="py-16 my-10">
      <div class="container mx-auto px-4">
        <div class="bg-brand-dark rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          
          <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-x-reverse divide-gray-700/50">
            <div v-for="stat in stats" :key="stat.label" class="text-center px-4">
              <div class="text-4xl md:text-5xl font-black text-brand-accent1 mb-2 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">{{ stat.value }}</div>
              <div class="text-gray-300 font-medium text-sm md:text-base">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div class="absolute -right-40 top-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div class="order-2 lg:order-1">
          <div class="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold px-4 py-2 rounded-full mb-6">دپارتمان برنامه‌نویسی</div>
          <h3 class="text-3xl md:text-5xl font-black text-gray-800 dark:text-white mb-6 leading-tight">کدنویسی را به <span class="text-brand-accent1">زبان ماشین</span> لمس کنید</h3>
          <p class="text-gray-600 dark:text-gray-400 text-lg leading-loose mb-10 text-justify">
            در این دپارتمان، ما از همان روز اول شما را با محیط‌های واقعی توسعه (IDE) درگیر می‌کنیم. خبری از تئوری‌های خسته‌کننده نیست؛ شما الگوریتم می‌نویسید و سیستم آن را اجرا می‌کند.
          </p>
          <NuxtLink to="/roadmap/coding" class="inline-flex items-center gap-2 text-brand-accent1 font-bold text-lg hover:text-blue-600 dark:hover:text-blue-300 transition-colors group">
            مشاهده سرفصل‌های پایتون 
            <span class="group-hover:-translate-x-2 transition-transform">←</span>
          </NuxtLink>
        </div>
        
        <div class="order-1 lg:order-2 bg-[#1e1e1e] rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] border border-gray-700/50 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500" dir="ltr">
          <div class="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black/50">
            <div class="flex gap-2">
              <div class="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-inner"></div>
              <div class="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-inner"></div>
              <div class="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-inner"></div>
            </div>
            <span class="text-gray-400 text-xs font-mono">main.py — Hooshpardaz</span>
            <div class="w-10"></div> </div>
          
          <div class="p-6 md:p-8 font-mono text-sm md:text-base text-gray-300 min-h-[300px] leading-relaxed">
            <pre><code class="text-[#c678dd]">def</code> <span class="text-[#61afef]">build_future</span>():
    skills = [<span class="text-[#98c379]">'Python'</span>, <span class="text-[#98c379]">'AI'</span>, <span class="text-[#98c379]">'Robotics'</span>]
    student = Student(skills)
    
    <code class="text-[#c678dd]">if</code> student.is_ready():
        <code class="text-[#c678dd]">return</code> <span class="text-[#98c379]">"Hired in Tech Market!"</span>
        
<span class="text-[#5c6370] italic"># Console Output:</span>
<span class="text-[#e5c07b]">{{ typedCode }}</span><span class="animate-pulse bg-white text-white w-2 h-5 inline-block align-middle ml-1">_</span></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 container mx-auto px-4 text-center">
      <div class="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold px-4 py-2 rounded-full mb-6">دپارتمان طراحی دیجیتال</div>
      <h3 class="text-3xl md:text-5xl font-black mb-6 dark:text-white text-gray-800">تفاوت را با چشمان خود ببینید</h3>
      <p class="text-gray-500 dark:text-gray-400 mb-14 max-w-2xl mx-auto text-lg">خروجی خام را با جادوی هنرهای دیجیتال در دپارتمان طراحی ما مقایسه کنید. اسلایدر را به چپ و راست بکشید.</p>
      
      <div class="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800" dir="ltr">
        <img src="/images/Design-Before.jpg" class="absolute inset-0 w-full h-full object-cover" alt="طراحی خام">
        <img src="/images/Design-After.jpg" class="absolute inset-0 w-full h-full object-cover" :style="{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }" alt="طراحی نهایی">
        <input type="range" min="0" max="100" v-model="sliderValue" class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20">
        
        <div class="absolute top-0 bottom-0 w-1 bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10" :style="{ left: sliderValue + '%' }">
          <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl text-gray-800 font-black text-2xl border-4 border-brand-accent1">
            <svg class="w-6 h-6 text-brand-accent1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
          </div>
        </div>
        
        <div class="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-bold z-0">بعد (After)</div>
        <div class="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-bold z-0">قبل (Before)</div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <h3 class="text-3xl md:text-4xl font-black dark:text-white mb-2 text-gray-800">گالری پروژه‌های برتر دانشجویان</h3>
            <p class="text-gray-500 dark:text-gray-400 font-medium">ما به نتیجه کار هنرجویانمان افتخار می‌کنیم.</p>
          </div>
          <NuxtLink to="/projects" class="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl font-bold hover:border-brand-accent1 hover:text-brand-accent1 dark:text-white transition-colors">مشاهده همه پروژه‌ها</NuxtLink>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="group relative rounded-[2rem] overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 cursor-pointer">
            <div class="aspect-[4/3] w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img src="/images/Project-1.jpg" alt="پروژه برنامه‌نویسی" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 md:p-10">
              <span class="inline-block bg-brand-accent1 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-max">هوش مصنوعی</span>
              <h4 class="text-white text-2xl md:text-3xl font-black mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">طراحی سیستم تشخیص چهره</h4>
              <p class="text-gray-300 text-sm md:text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">پروژه پایانی مسیر برنامه‌نویسی با استفاده از پایتون و OpenCV.</p>
            </div>
          </div>

          <div class="group relative rounded-[2rem] overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 cursor-pointer">
            <div class="aspect-[4/3] w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img src="/images/Project-2.jpg" alt="پروژه رباتیک" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 md:p-10">
              <span class="inline-block bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-max">الکترونیک دیجیتال</span>
              <h4 class="text-white text-2xl md:text-3xl font-black mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">ساخت بازوی رباتیک هوشمند</h4>
              <p class="text-gray-300 text-sm md:text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">پیاده‌سازی صفر تا صد سخت‌افزار، بردهای آردوینو و منطق حرکتی.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-14">
        <h3 class="text-3xl md:text-4xl font-black mb-4 dark:text-white text-gray-800">سوالات پرتکرار شما</h3>
        <p class="text-gray-500 dark:text-gray-400 font-medium">پاسخ به دغدغه‌های همیشگی قبل از شروع مسیر.</p>
      </div>
      
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" 
             class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
             :class="{'shadow-md border-brand-accent1 dark:border-brand-accent1': activeFaq === index}">
          
          <button @click="toggleFaq(index)" class="w-full text-right p-6 flex justify-between items-center focus:outline-none">
            <h4 class="font-bold text-lg dark:text-white" :class="{'text-brand-accent1': activeFaq === index, 'text-gray-800': activeFaq !== index}">
              {{ faq.q }}
            </h4>
            <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                 :class="{'rotate-45 bg-brand-accent1 text-white': activeFaq === index}">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
          </button>
          
          <div v-show="activeFaq === index" class="px-6 pb-6 text-gray-600 dark:text-gray-400 font-medium leading-loose border-t border-gray-100 dark:border-gray-700 pt-4">
            <p>{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// اطلاعات بخش ویژگی‌ها
const benefits = [
  { icon: '🚀', title: 'آموزش ۱۰۰٪ پروژه‌محور', link: '/courses' },
  { icon: '👨‍🏫', title: 'منتورینگ اختصاصی', link: '/about' },
  { icon: '💼', title: 'پشتیبانی ورود به بازار کار', link: '/career-support' },
  { icon: '📜', title: 'ارائه مدرک معتبر', link: '/courses' }
];

// مسیرهای آموزشی
const paths = [
  { name: 'مسیر کودکان و نوجوانان', slug: 'teenagers', desc: 'از یادگیری اسکرچ و بلوک‌های منطقی تا طراحی بازی‌های جذاب رباتیک.', icon: '🎮' },
  { name: 'مسیر برنامه‌نویسی و AI', slug: 'coding', desc: 'از مبانی الگوریتم و پایتون تا پیاده‌سازی مدل‌های پیشرفته هوش مصنوعی.', icon: '💻' },
  { name: 'مسیر طراحی رابط کاربری', slug: 'design', desc: 'از مبانی روانشناسی رنگ‌ها و فتوشاپ تا دیزاین حرفه‌ای UI/UX در فیگما.', icon: '🎨' }
];

// آمار سایت
const stats = [
  { value: '+۵۰۰۰', label: 'هنرجوی همراه' },
  { value: '+۵۰', label: 'دوره تخصصی' },
  { value: '+۱۲۰', label: 'محتوای آموزشی' },
  { value: '٪۹۸', label: 'رضایت مخاطبان' }
];

// متغیرها و منطق آکاردئون سوالات متداول (FAQ)
const activeFaq = ref(null);
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const faqs = [
  { q: 'آیا برای شرکت در دوره‌ها نیاز به پیش‌نیاز یا دانش قبلی دارم؟', a: 'خیر، رسالت هوش‌پرداز آموزش از نقطه صفر است. تمام دوره‌های پایه ما به گونه‌ای طراحی شده‌اند که بدون هیچ پیش‌زمینه‌ای بتوانید مفاهیم را یاد بگیرید.' },
  { q: 'کلاس‌ها به چه صورت برگزار می‌شوند؟ آیا ضبط می‌شوند؟', a: 'دوره‌ها به صورت ترکیبی (ویدئوهای ضبط شده با کیفیت سینمایی + جلسات آنلاین رفع اشکال با منتور) هستند. شما همیشه به آپدیت‌های دوره دسترسی مادام‌العمر خواهید داشت.' },
  { q: 'آیا در پایان دوره‌ها مدرکی هم ارائه می‌شود؟', a: 'بله! پس از انجام موفقیت‌آمیز پروژه‌های پایانی، مدرک معتبر آکادمی هوش‌پرداز (دو زبانه) به شما تقدیم می‌شود که برای رزومه و مهاجرت کاری بسیار معتبر است.' },
  { q: 'تفاوت مسیر کودکان با بزرگسالان در چیست؟', a: 'در مسیر کودکان، زبان آموزش مبتنی بر بازی‌سازی (Gamification) و ابزارهای بصری است تا کودک خسته نشود؛ اما در بخش بزرگسالان، تمرکز روی کدهای خام، چالش‌های الگوریتمی و نیازهای بازار کار است.' }
];

// متغیر اسلایدر Design (Before/After)
const sliderValue = ref(50);

// منطق تایپ خودکار ترمینال برنامه‌نویسی
const typedCode = ref('');
const finalOutput = '> Executing logic_core.py...\n> Compiling Neural Network...\n> Success: Student is Ready for Tech Market!';
let i = 0;

onMounted(() => {
  setTimeout(() => {
    const typeInterval = setInterval(() => {
      if (i < finalOutput.length) {
        typedCode.value += finalOutput.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 40);
  }, 1500);
});

// اضافه شدن سئوی داینامیک و فوق حرفه‌ای
useSeoMeta({
  title: 'آموزش برنامه‌نویسی و هوش مصنوعی', 
  description: 'به آکادمی هوش‌پرداز خوش آمدید. برترین پلتفرم آموزش پروژه‌محور برنامه‌نویسی و هوش مصنوعی برای تمام سنین، همراه با تست استعدادیابی هوشمند.',
  
  // تنظیمات Open Graph برای شبکه‌های اجتماعی (تلگرام، واتساپ، لینکدین)
  ogTitle: 'آکادمی برنامه‌نویسی و هوش مصنوعی هوش‌پرداز',
  ogDescription: 'آینده‌ات را با هوش‌پرداز کدنویسی کن! آموزش از صفر تا ورود به بازار کار به همراه منتورینگ اختصاصی.',
  ogImage: '/images/Banner.jpg', // عکسی که در شبکه‌های اجتماعی نمایش داده می‌شود
  ogUrl: 'https://hoooshpardaz.ir',
  
  // تنظیمات برای توییتر (ایکس)
  twitterTitle: 'آکادمی هوش‌پرداز',
  twitterDescription: 'یادگیری برنامه‌نویسی و هوش مصنوعی برای کودکان و بزرگسالان.',
  twitterImage: '/images/Banner.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

input[type=range] {
  -webkit-appearance: none;
  background: transparent;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
input[type=range]:focus {
  outline: none;
}
</style>