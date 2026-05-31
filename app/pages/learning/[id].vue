<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-500 pt-28 pb-20 font-sans">
    
    <article class="container mx-auto px-4 max-w-6xl" v-if="post">
      
      <nav class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium">
        <NuxtLink to="/" class="hover:text-blue-600 dark:hover:text-brand-accent1 transition-colors">خانه</NuxtLink>
        <span>/</span>
        <NuxtLink to="/learning" class="hover:text-blue-600 dark:hover:text-brand-accent1 transition-colors">مسیر یادگیری</NuxtLink>
        <span>/</span>
        <span class="text-gray-800 dark:text-gray-200 truncate max-w-[200px]">{{ post.title }}</span>
      </nav>

      <header class="relative w-full aspect-[21/9] md:aspect-[21/8] rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 group">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-10"></div>
        <img :src="post.image" :alt="post.title" class="w-full h-full object-cover relative z-0 transform group-hover:scale-105 transition-transform duration-1000">
        
        <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-200 mb-5 font-bold">
            <span class="bg-brand-accent1 text-white px-4 py-1.5 rounded-full shadow-lg">{{ post.category }}</span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              {{ post.date }}
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {{ post.readTime }} مطالعه
            </span>
          </div>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg max-w-4xl">
            {{ post.title }}
          </h1>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <main class="lg:col-span-8 bg-white dark:bg-gray-800 rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          
          <blockquote class="border-r-4 border-blue-600 dark:border-brand-accent1 pr-6 py-3 mb-12 bg-blue-50/50 dark:bg-gray-700/30 rounded-l-2xl italic font-medium text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            {{ post.excerpt }}
          </blockquote>
          
          <div class="prose prose-lg max-w-none dark:prose-invert text-gray-600 dark:text-gray-300 leading-loose text-justify space-y-6 article-content" v-html="post.content">
          </div>

          <div class="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700 flex flex-wrap items-center gap-3">
            <span class="text-gray-500 dark:text-gray-400 font-bold text-sm">برچسب‌ها:</span>
            <span v-for="tag in post.tags" :key="tag" class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-lg text-sm font-medium hover:bg-brand-accent1 hover:text-white transition-colors cursor-pointer">
              #{{ tag }}
            </span>
          </div>
        </main>

        <aside class="lg:col-span-4">
          <div class="sticky top-32 space-y-8">
            
            <div class="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-600 to-brand-accent1 opacity-20"></div>
              <img :src="post.authorImg" :alt="post.author" class="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-lg mx-auto relative z-10 object-cover">
              <h3 class="text-xl font-black text-gray-800 dark:text-white mt-4 mb-1">{{ post.author }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">{{ post.authorRole }}</p>
              <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                علاقه‌مند به دنیای کدنویسی و آموزش مفاهیم پیچیده به زبان ساده. همراه شما در مسیر یادگیری تکنولوژی.
              </p>
              <button class="w-full py-3 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-brand-accent1 font-bold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-brand-accent1 dark:hover:text-white transition-colors">
                مشاهده دوره‌های مدرس
              </button>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h4 class="text-lg font-black text-gray-800 dark:text-white mb-4">اشتراک‌گذاری مقاله</h4>
              <div class="flex items-center gap-3">
                <button class="flex-1 py-2.5 bg-blue-500 text-white rounded-xl font-bold text-sm hover:-translate-y-1 transition-transform shadow-md">تلگرام</button>
                <button class="flex-1 py-2.5 bg-blue-700 text-white rounded-xl font-bold text-sm hover:-translate-y-1 transition-transform shadow-md">لینکدین</button>
                <button class="w-12 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:-translate-y-1 transition-transform shadow-sm">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                </button>
              </div>
            </div>

          </div>
        </aside>

      </div>
    </article>
    
    <div v-else class="container mx-auto px-4 text-center py-32 flex flex-col items-center justify-center min-h-[60vh]">
      <div class="text-[120px] mb-6 drop-shadow-xl opacity-80 animate-pulse">🛸</div>
      <h1 class="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-6">مقاله‌ای در فضا گم شد!</h1>
      <p class="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-md">ممکن است این مقاله حذف شده باشد یا آدرس را اشتباه وارد کرده باشید. بیایید به زمین برگردیم.</p>
      <NuxtLink to="/learning" class="px-8 py-4 bg-brand-accent1 text-white font-black rounded-2xl shadow-[0_10px_20px_-10px_rgba(56,189,248,0.6)] hover:-translate-y-1 transition-all">
        بازگشت به مقالات
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)

// داده‌های بسیار جامع و غنی برای مقالات (شامل تگ‌های HTML برای رندر در صفحه)
const posts = [
  { 
    id: 1, 
    title: 'چرا یادگیری برنامه‌نویسی برای کودکان ضروری است؟', 
    excerpt: 'برنامه‌نویسی فقط تایپ کد نیست؛ بلکه یادگیری نحوه حل مسئله، تفکر منطقی و خلاقیت است که در سنین پایین به شدت موثر است.', 
    category: 'کودکان و نوجوانان', 
    date: '۲۰ اردیبهشت ۱۴۰۳', 
    readTime: '۵ دقیقه',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'مهندس احمدی',
    authorRole: 'مدرس دپارتمان کودکان',
    authorImg: 'https://i.pravatar.cc/150?img=11',
    tags: ['کودکان', 'اسکرچ', 'پایتون', 'آموزش'],
    content: `
      <h2>برنامه‌نویسی، الفبای قرن بیست و یکم</h2>
      <p>در دنیای امروز که تکنولوژی تمام جنبه‌های زندگی ما را فرا گرفته است، یادگیری برنامه‌نویسی برای کودکان دیگر یک مزیت لوکس نیست، بلکه یک ضرورت است. همانطور که خواندن و نوشتن پایه‌های ارتباطی ما را تشکیل می‌دهند، درک منطق کامپیوتر نیز زبان ارتباطی آینده است.</p>
      <p>کودکانی که از سنین پایین با مفاهیم الگوریتمی آشنا می‌شوند، در واقع در حال تمرین ورزش ذهنی هستند. آن‌ها یاد می‌گیرند که چگونه یک مشکل بزرگ و پیچیده را به قطعات کوچک‌تر و قابل حل تقسیم کنند (Decomposition).</p>
      
      <h3>فواید پنهان کدنویسی برای ذهن کودک</h3>
      <ul>
        <li><strong>تقویت تفکر منطقی:</strong> کدنویسی به کودکان می‌آموزد که اتفاقات تصادفی نیستند و هر خروجی، نتیجه یک ورودی دقیق است.</li>
        <li><strong>تاب‌آوری در برابر شکست:</strong> در برنامه‌نویسی، مواجه شدن با باگ‌ها (خطاها) یک امر طبیعی است. کودکان یاد می‌گیرند که از اشتباه کردن نترسند و برای رفع آن تلاش کنند.</li>
        <li><strong>شکوفایی خلاقیت:</strong> با استفاده از ابزارهایی مانند Scratch، کودکان می‌توانند داستان‌ها و بازی‌های ذهنی خود را به واقعیت تبدیل کنند.</li>
      </ul>
      
      <h2>از کجا باید شروع کنیم؟</h2>
      <p>بهترین نقطه شروع، استفاده از زبان‌های بصری (Visual Programming) است. در آکادمی هوش‌پرداز، ما مسیر یادگیری کودکان را با زبان‌های بلوکی آغاز می‌کنیم و پس از تقویت پایه منطقی، آن‌ها را با دنیای جذاب پایتون (Python) آشنا می‌سازیم.</p>
    `
  },
  { 
    id: 2, 
    title: 'تفاوت طراح UI و UX چیست؟ راهنمای کامل', 
    excerpt: 'بسیاری از افراد این دو مفهوم را با هم اشتباه می‌گیرند. در این مقاله به بررسی تفاوت‌ها، مهارت‌ها و بازار کار هر کدام می‌پردازیم.', 
    category: 'طراحی و UI/UX', 
    date: '۱۵ اردیبهشت ۱۴۰۳', 
    readTime: '۸ دقیقه',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'سارا رضایی',
    authorRole: 'متخصص تجربه کاربری',
    authorImg: 'https://i.pravatar.cc/150?img=5',
    tags: ['طراحی_رابط', 'تجربه_کاربری', 'Figma'],
    content: `
      <h2>UX (تجربه کاربری) در برابر UI (رابط کاربری)</h2>
      <p>احتمالاً بارها اصطلاح UI/UX به گوشتان خورده است. با اینکه این دو مخفف همیشه در کنار هم می‌آیند، اما دو تخصص کاملاً متفاوت (و البته مکمل) در طراحی محصولات دیجیتال هستند.</p>
      <p>اگر یک محصول را به بدن انسان تشبیه کنیم، کدهای برنامه‌نویسی استخوان‌بندی آن، UX اندام‌های حیاتی و نحوه عملکرد آن‌ها، و UI ظاهر زیبای آن فرد (پوست، لباس و ظاهر) است.</p>
      
      <h3>طراح UX چه می‌کند؟</h3>
      <p>طراح تجربه کاربری (User Experience) بیشتر با روانشناسی، تحقیق و منطق سر و کار دارد. هدف او این است که سفر کاربر در سایت یا اپلیکیشن به روان‌ترین و بی‌دردسرترین شکل ممکن انجام شود. آن‌ها معمولاً خروجی‌هایی به شکل وایرفریم (Wireframe) خاکستری و نقشه‌های سفر کاربر تولید می‌کنند.</p>
      
      <h3>طراح UI چه می‌کند؟</h3>
      <p>طراح رابط کاربری (User Interface) پس از دریافت وایرفریم‌ها از طراح UX، به آن‌ها رنگ، روح و زیبایی می‌بخشد. انتخاب تایپوگرافی، پالت رنگی، طراحی آیکون‌ها و ایجاد حس بصری لذت‌بخش در تخصص طراح UI است.</p>
      
      <h2>بازار کار کدام بهتر است؟</h2>
      <p>در شرکت‌های بزرگ، این دو نقش از هم تفکیک شده‌اند؛ اما در اکثر استارتاپ‌ها و شرکت‌های متوسط، به فردی نیاز است که هر دو مهارت را داشته باشد (Product Designer). یادگیری ابزاری مانند <strong>فیگما (Figma)</strong> دروازه ورود به هر دو این تخصص‌هاست.</p>
    `
  },
  { 
    id: 3, 
    title: 'معرفی بهترین فریم‌ورک‌های پایتون در سال جاری', 
    excerpt: 'از جنگو تا فلسک و فست‌ای‌پی‌آی. بررسی جامع فریم‌ورک‌هایی که هر توسعه‌دهنده پایتون باید برای تسلط بر بازار کار بشناسد.', 
    category: 'برنامه‌نویسی', 
    date: '۱۰ اردیبهشت ۱۴۰۳', 
    readTime: '۱۰ دقیقه',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'علی کاظمی',
    authorRole: 'توسعه‌دهنده ارشد بک‌اند',
    authorImg: 'https://i.pravatar.cc/150?img=12',
    tags: ['پایتون', 'Django', 'بک‌اند'],
    content: `
      <h2>چرا پایتون به فریم‌ورک نیاز دارد؟</h2>
      <p>پایتون به تنهایی یک زبان قدرتمند است، اما اگر بخواهید یک سایت پیچیده مانند اینستاگرام یا پینترست بسازید، نوشتن کدهای تکراری برای امنیت، دیتابیس و مسیریابی (Routing) دیوانه‌کننده خواهد بود. اینجاست که فریم‌ورک‌ها وارد میدان می‌شوند.</p>
      
      <h3>۱. فریم‌ورک Django (جنگو): پادشاه بلامنازع</h3>
      <p>جنگو با شعار "فریم‌ورکی برای کمال‌گرایان عجول" شناخته می‌شود. این فریم‌ورک به صورت پیش‌فرض پنل ادمین، سیستم احراز هویت و اتصال امن به دیتابیس (ORM) را در اختیار شما می‌گذارد. اگر پروژه شما بزرگ است، جنگو بهترین انتخاب است.</p>
      
      <h3>۲. فریم‌ورک Flask (فلسک): سبک و سریع</h3>
      <p>برخلاف جنگو، فلسک یک "میکرو فریم‌ورک" است. در فلسک هیچ چیز به شما تحمیل نمی‌شود؛ شما فقط هسته اصلی را دارید و هر ابزاری (مثل دیتابیس) که نیاز داشتید را به صورت دستی اضافه می‌کنید. این ابزار برای ساخت API های کوچک فوق‌العاده است.</p>
      
      <h3>۳. فریم‌ورک FastAPI: ستاره نوظهور</h3>
      <p>جدیدترین و شاید هیجان‌انگیزترین عضو خانواده پایتون! FastAPI همانطور که از نامش پیداست، روی <strong>سرعت</strong> تمرکز دارد. عملکرد این فریم‌ورک به لطف پشتیبانی از کدهای غیرهمزمان (Asynchronous) با زبان‌هایی مثل NodeJS و Go رقابت می‌کند.</p>
    `
  },
  { 
    id: 4, 
    title: 'هوش مصنوعی چگونه آینده مشاغل را تغییر می‌دهد؟', 
    excerpt: 'آیا ربات‌ها جای ما را می‌گیرند؟ بررسی تاثیرات عمیق AI بر مشاغل مختلف و مهارت‌هایی که برای بقا نیاز داریم.', 
    category: 'هوش مصنوعی', 
    date: '۵ اردیبهشت ۱۴۰۳', 
    readTime: '۶ دقیقه',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'دکتر کریمی',
    authorRole: 'پژوهشگر هوش مصنوعی',
    authorImg: 'https://i.pravatar.cc/150?img=33',
    tags: ['هوش_مصنوعی', 'ChatGPT', 'آینده_شغلی'],
    content: `
      <h2>انقلاب هوش مصنوعی مولد</h2>
      <p>با معرفی مدل‌های زبانی بزرگ مانند ChatGPT و ابزارهای تولید تصویر مثل Midjourney، موجی از شگفتی و البته ترس بازار کار جهانی را فرا گرفت. سوال اصلی این است: آیا تکنولوژی جدید آمده تا جایگزین انسان شود؟</p>
      <p>تاریخ نشان داده است که هر انقلاب صنعتی، مشاغل تکراری را از بین برده اما مشاغل جدیدی خلق کرده است. هوش مصنوعی قرار نیست برنامه‌نویس‌ها، نویسندگان یا طراحان را بیکار کند؛ بلکه <strong>"فردی که از هوش مصنوعی استفاده می‌کند، جایگزین فردی خواهد شد که از آن استفاده نمی‌کند!"</strong></p>
      
      <h3>کدام مهارت‌ها در آینده حیاتی هستند؟</h3>
      <ul>
        <li><strong>مهندسی پرامپت (Prompt Engineering):</strong> هنر صحبت کردن با ماشین! اینکه بدانید چگونه دقیق‌ترین دستور را به هوش مصنوعی بدهید تا بهترین خروجی را بگیرید.</li>
        <li><strong>تفکر نقادانه:</strong> هوش مصنوعی ممکن است اطلاعات غلط تولید کند (Hallucination). توانایی ارزیابی خروجی ماشین، ارزش بالایی پیدا کرده است.</li>
        <li><strong>هوش هیجانی و همدلی:</strong> کارهایی که نیاز به درک عمیق احساسات انسانی، مشاوره و رهبری تیم‌ها دارند، هرگز توسط کدهای کامپیوتری قابل کپی نیستند.</li>
      </ul>
    `
  },
  { 
    id: 5, 
    title: 'چگونه یک رزومه برنامه‌نویسی حرفه‌ای بنویسیم؟', 
    excerpt: 'نکات کلیدی برای نوشتن رزومه‌ای که مدیران فنی شرکت‌های بزرگ نتوانند آن را نادیده بگیرند.', 
    category: 'بازار کار', 
    date: '۲ اردیبهشت ۱۴۰۳', 
    readTime: '۷ دقیقه',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'مریم حسینی',
    authorRole: 'مدیر منابع انسانی (HR)',
    authorImg: 'https://i.pravatar.cc/150?img=20',
    tags: ['رزومه_نویسی', 'استخدام', 'مصاحبه'],
    content: `
      <h2>عبور از فیلتر اولیه (ATS)</h2>
      <p>بسیاری از رزومه‌های برنامه‌نویسان تازه‌کار هرگز توسط یک انسان خوانده نمی‌شوند! شرکت‌های بزرگ از سیستم‌های نرم‌افزاری به نام ATS برای اسکن اولیه کلمات کلیدی رزومه‌ها استفاده می‌کنند. بنابراین اولین قدم، استفاده از یک قالب استاندارد، متنی و بدون گرافیک‌های گیج‌کننده است.</p>
      
      <h3>سه بخش طلایی یک رزومه فنی</h3>
      <ul>
        <li><strong>خلاصه حرفه‌ای:</strong> در ۳ خط بنویسید چه کسی هستید، با چه تکنولوژی‌هایی کار می‌کنید و به دنبال چه ارزشی هستید.</li>
        <li><strong>بخش پروژه‌ها (مهم‌ترین بخش):</strong> اگر سابقه کار شرکتی ندارید، پروژه‌های شخصی خود را بنویسید. حتماً لینک گیت‌هاب (GitHub) و لینک دموی زنده پروژه را قرار دهید.</li>
        <li><strong>مهارت‌های نرم (Soft Skills):</strong> مهارت‌های فنی شما را استخدام می‌کنند، اما مهارت‌های نرم (کار تیمی، حل مسئله، مدیریت زمان) باعث پیشرفت شما در سازمان می‌شوند.</li>
      </ul>
      
      <h2>اشتباهات مهلک در رزومه نویسی</h2>
      <p>دادن درصد به مهارت‌ها (مثلاً Python 90%) یک اشتباه بزرگ است. هیچ معیاری برای سنجش این ۹۰ درصد وجود ندارد! به جای آن بنویسید: "تجربه ساخت ۳ پروژه تجاری با فریم‌ورک جنگو و اتصال به درگاه بانکی". این جمله قدرت واقعی شما را نشان می‌دهد.</p>
    `
  },
  { 
    id: 6, 
    title: 'ساخت اولین بازی با اسکرچ (مخصوص نوجوانان)', 
    excerpt: 'در این آموزش تصویری یاد می‌گیریم چگونه بدون نیاز به نوشتن حتی یک خط کد سخت، یک بازی جذاب با اسکرچ بسازیم.', 
    category: 'کودکان و نوجوانان', 
    date: '۲۸ فروردین ۱۴۰۳', 
    readTime: '۴ دقیقه',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'مهندس احمدی',
    authorRole: 'مدرس دپارتمان کودکان',
    authorImg: 'https://i.pravatar.cc/150?img=11',
    tags: ['بازی_سازی', 'Scratch', 'خلاقیت'],
    content: `
      <h2>اسکرچ (Scratch) چیست؟</h2>
      <p>اسکرچ یک محیط برنامه‌نویسی گرافیکی است که توسط دانشگاه MIT طراحی شده است. در اینجا خبری از تایپ کدهای پیچیده و خطاهای گیج‌کننده (Syntax Error) نیست. شما برنامه‌ها را با کشیدن و رها کردن (Drag & Drop) بلوک‌های رنگی می‌سازید.</p>
      
      <h3>مراحل ساخت یک بازی ساده</h3>
      <p>فرض کنید می‌خواهیم بازی کلاسیک گرفتن سیب توسط یک کاراکتر را بسازیم:</p>
      <ul>
        <li><strong>گام اول (شخصیت‌ها):</strong> ابتدا یک کاراکتر اصلی (مثلاً یک گربه) و یک شیء (مثلاً یک سیب) را از منوی اسپریت‌ها (Sprites) انتخاب کنید.</li>
        <li><strong>گام دوم (حرکت):</strong> به بخش کدهای گربه بروید و با استفاده از بلوک‌های "Event" تعیین کنید که وقتی کلیدهای فلش کیبورد فشرده شدند، کاراکتر روی محور X جابجا شود.</li>
        <li><strong>گام سوم (منطق بازی):</strong> کدی بنویسید که سیب به صورت تصادفی از بالای صفحه به پایین بیاید. سپس با یک بلوک "If" (شرطی) بررسی کنید که اگر سیب به گربه برخورد کرد، یک امتیاز به متغیر Score اضافه شود!</li>
      </ul>
      <p>شما موفق شدید! با همین مفاهیم ساده، درک عمیقی از حلقه‌ها، متغیرها و دستورات شرطی در ذهن کودک شکل می‌گیرد.</p>
    `
  }
]

onMounted(() => {
  const articleId = Number(route.params.id)
  post.value = posts.find(p => p.id === articleId)

  // اعمال سئوی دینامیک برای هر مقاله (SEO & Schema) پس از پیدا شدن مقاله
  if (post.value) {
    useSeoMeta({
      title: `${post.value.title} | وبلاگ هوش‌پرداز`,
      description: post.value.excerpt,
      ogTitle: post.value.title,
      ogDescription: post.value.excerpt,
      ogImage: post.value.image,
      articleAuthor: post.value.author,
      articlePublishedTime: post.value.date
    })

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.value.title,
      "image": post.value.image,
      "datePublished": post.value.date,
      "author": {
        "@type": "Person",
        "name": post.value.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "آکادمی هوش‌پرداز",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hoooshpardaz.ir/favicon.ico"
        }
      },
      "description": post.value.excerpt
    }

    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(schemaData)
        }
      ]
    })
  }
})
</script>

<style>
/* استایل‌های اختصاصی برای رندر محتوای داخل v-html تا ظاهر حرفه‌ای مقاله حفظ شود */
.article-content h2 {
  font-size: 1.75rem;
  font-weight: 900;
  color: #1f2937; /* gray-800 */
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}
.dark .article-content h2 {
  color: #f9fafb; /* gray-50 */
}

.article-content h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #374151; /* gray-700 */
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.article-content h3::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #38bdf8; /* brand-accent1 */
  border-radius: 50%;
}
.dark .article-content h3 {
  color: #d1d5db; /* gray-300 */
}

.article-content p {
  margin-bottom: 1.5rem;
}

.article-content ul {
  list-style-type: none;
  padding-right: 1rem;
  margin-bottom: 2rem;
}

.article-content li {
  position: relative;
  margin-bottom: 0.75rem;
  padding-right: 1.5rem;
}
.article-content li::before {
  content: '✓';
  position: absolute;
  right: 0;
  color: #2563eb; /* blue-600 */
  font-weight: bold;
}
.dark .article-content li::before {
  color: #38bdf8;
}

.article-content strong {
  font-weight: 800;
  color: #111827;
}
.dark .article-content strong {
  color: #fff;
}
</style>