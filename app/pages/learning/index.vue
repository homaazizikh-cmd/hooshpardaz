<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-500 pt-28 pb-20" dir="rtl">
    
    <div class="container mx-auto px-4 max-w-7xl">
      
      <div class="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 class="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-3">
            وبلاگ و مسیر <span class="text-blue-600 dark:text-brand-accent1">یادگیری</span>
          </h1>
          <p class="text-gray-500 dark:text-gray-400 font-medium">
            جدیدترین <strong>مقالات آموزش برنامه‌نویسی</strong>، <strong>هوش مصنوعی</strong> و <strong>رباتیک</strong>
          </p>
        </div>
        
        <div class="relative w-full md:w-96">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="جستجو در مقالات..." 
            class="w-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-2xl pl-4 pr-12 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm backdrop-blur-md"
          >
          <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>
      </div>

      <div class="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          class="px-6 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all duration-300 border"
          :class="activeCategory === cat 
            ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500'"
        >
          {{ cat }}
        </button>
      </div>

      <div v-if="activeCategory === 'همه' && !searchQuery" class="mb-16 bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row group cursor-pointer transition-all hover:shadow-2xl">
        <div class="lg:w-1/2 relative overflow-hidden h-72 lg:h-auto">
          <NuxtImg 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="بهترین مقالات آموزش برنامه‌نویسی و هوش مصنوعی" 
            format="webp"
            preload
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute top-6 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">پیشنهاد سردبیر</div>
        </div>
        
        <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
            <span class="bg-blue-50 dark:bg-gray-700 px-3 py-1 rounded-md text-blue-600 dark:text-blue-400">هوش مصنوعی</span>
            <span>•</span>
            <span>۲۵ اردیبهشت ۱۴۰۳</span>
          </div>
          
          <h2 class="text-3xl font-black text-gray-800 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-brand-accent1 transition-colors">
            چگونه در سال ۲۰۲۴ یک توسعه‌دهنده هوش مصنوعی شویم؟
          </h2>
          <p class="text-gray-600 dark:text-gray-300 leading-loose mb-8 text-justify">
            راهنمای جامع و قدم‌به‌قدم برای ورود به دنیای جذاب هوش مصنوعی. از یادگیری زبان پایتون تا درک مفاهیم ماشین لرنینگ و ساخت اولین شبکه عصبی...
          </p>
          
          <div class="flex items-center justify-between mt-auto">
            <div class="flex items-center gap-3">
              <NuxtImg 
                src="https://i.pravatar.cc/150?img=11" 
                alt="نویسنده مقالات داناورس" 
                format="webp"
                loading="lazy"
                class="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-600"
              />
              <div>
                <p class="text-sm font-bold text-gray-800 dark:text-white">مهندس احمدی</p>
                <p class="text-xs text-gray-500">۱۰ دقیقه مطالعه</p>
              </div>
            </div>
            <button class="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <div v-if="pending" class="text-center py-20 text-blue-600 font-bold">
        در حال دریافت جدیدترین مقالات... ⏳
      </div>

      <TransitionGroup v-else name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink v-for="(post, index) in filteredPosts" :key="post.id + '-' + index" :to="'/learning/' + post.id" :title="post.title"
                  class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          
          <div class="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
            <NuxtImg 
              :src="post.image || '/images/default-blog.jpg'" 
              :alt="`مقاله ${post.title} در آکادمی داناورس`" 
              format="webp"
              loading="lazy"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white text-xs font-bold px-3 py-1.5 rounded-lg">
              {{ post.category }}
            </div>
          </div>
          
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-brand-accent1 transition-colors line-clamp-2">
              {{ post.title }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
              {{ post.excerpt }}
            </p>
            
            <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 text-sm">
              <span class="text-gray-500 dark:text-gray-400 font-medium">{{ post.date }}</span>
              <span class="text-blue-600 dark:text-brand-accent1 font-bold flex items-center gap-1">
                مطالعه 
                <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              </span>
            </div>
          </div>
          
        </NuxtLink>
      </TransitionGroup>

      <div v-if="!pending && filteredPosts.length === 0" class="text-center py-16 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700">
        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">مقاله‌ای یافت نشد!</h3>
        <p class="text-gray-500">جستجوی خود را تغییر دهید یا تب دیگری را انتخاب کنید.</p>
      </div>

      <div v-if="filteredPosts.length > 0" class="mt-16 text-center">
        <button class="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow">
          مشاهده مقالات بیشتر
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const supabase = useSupabaseClient();

// 💡 سئو: ارتقای چشم‌گیر متاتگ‌ها برای صفحه لیست مقالات
useSeoMeta({
  title: 'وبلاگ و مقالات آموزش برنامه‌نویسی، هوش مصنوعی و رباتیک | داناورس',
  description: 'مجله تخصصی داناورس؛ مطالعه جدیدترین مقالات آموزش برنامه‌نویسی، پایتون، هوش مصنوعی، رباتیک و بررسی مسیرهای شغلی دنیای تکنولوژی.',
  keywords: 'وبلاگ برنامه نویسی, مقالات هوش مصنوعی, آموزش پایتون, اخبار تکنولوژی, مقالات رباتیک, یادگیری برنامه نویسی',
  ogTitle: 'وبلاگ آکادمی داناورس | جدیدترین مقالات تکنولوژی',
  ogDescription: 'مطالعه رایگان صدها مقاله آموزشی در زمینه برنامه‌نویسی، هوش مصنوعی و طراحی رابط کاربری.',
  ogImage: 'https://danaverse.ir/images/Banner.jpg',
  ogUrl: 'https://danaverse.ir/learning',
  ogType: 'website',
  twitterCard: 'summary_large_image'
});

const searchQuery = ref('');
const activeCategory = ref('همه');

// دسته‌بندی‌های سایت
const categories = ['همه', 'هوش مصنوعی', 'برنامه‌نویسی', 'اخبار تکنولوژی', 'کودکان و نوجوانان', 'طراحی و UI/UX', 'بازار کار'];

// مترجم دسته‌بندی‌های دیتابیس به فارسی (برای همگام‌سازی با تب‌ها)
const categoryMap = {
  'tech': 'اخبار تکنولوژی',
  'tutorial': 'برنامه‌نویسی',
  'ai': 'هوش مصنوعی'
};

// مقالات اختصاصی خودتان (دست‌نخورده باقی ماندند)
const manualPosts = [
  {
    id: 1,
    title: 'چرا یادگیری برنامه‌نویسی برای کودکان ضروری است؟',
    excerpt: 'برنامه‌نویسی فقط تایپ کد نیست؛ بلکه یادگیری نحوه حل مسئله، تفکر منطقی و خلاقیت است که در سنین پایین به شدت موثر است.',
    category: 'کودکان و نوجوانان',
    date: '۲۰ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'تفاوت طراح UI و UX چیست؟ راهنمای کامل',
    excerpt: 'بسیاری از افراد این دو مفهوم را با هم اشتباه می‌گیرند. در این مقاله به بررسی تفاوت‌ها، مهارت‌ها و بازار کار هر کدام می‌پردازیم.',
    category: 'طراحی و UI/UX',
    date: '۱۵ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'معرفی بهترین فریم‌ورک‌های پایتون در سال جاری',
    excerpt: 'از جنگو تا فلسک و فست‌ای‌پی‌آی. بررسی جامع فریم‌ورک‌هایی که هر توسعه‌دهنده پایتون باید برای تسلط بر بازار کار بشناسد.',
    category: 'برنامه‌نویسی',
    date: '۱۰ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'هوش مصنوعی چگونه آینده مشاغل را تغییر می‌دهد؟',
    excerpt: 'آیا ربات‌ها جای ما را می‌گیرند؟ بررسی تاثیرات عمیق AI بر مشاغل مختلف و مهارت‌هایی که برای بقا نیاز داریم.',
    category: 'هوش مصنوعی',
    date: '۵ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'چگونه یک رزومه برنامه‌نویسی حرفه‌ای بنویسیم؟',
    excerpt: 'نکات کلیدی برای نوشتن رزومه‌ای که مدیران فنی شرکت‌های بزرگ نتوانند آن را نادیده بگیرند.',
    category: 'بازار کار',
    date: '۲ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'ساخت اولین بازی با اسکرچ (مخصوص نوجوانان)',
    excerpt: 'در این آموزش تصویری یاد می‌گیریم چگونه بدون نیاز به نوشتن حتی یک خط کد سخت، یک بازی جذاب با اسکرچ بسازیم.',
    category: 'کودکان و نوجوانان',
    date: '۲۸ فروردین ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

// دریافت مقالات از دیتابیس
const { data: dbBlogs, pending } = await useAsyncData('public-blogs', async () => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) console.error(error);
  return data || [];
});

// تلفیق مقالات دیتابیس و مقالات دستی
const allPosts = computed(() => {
  const dynamicPosts = (dbBlogs.value || [])
    .filter(b => b.is_published === true || b.is_published === 'true')
    .map(b => ({
      id: b.id,
      title: b.title,
      excerpt: b.content, // متن کوتاه شده به صورت خودکار توسط CSS اعمال میشود
      category: categoryMap[b.category] || 'مقاله آموزشی',
      date: new Date(b.created_at).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }),
      image: b.image_url || '/images/default-blog.jpg'
    }));

  return [...dynamicPosts, ...manualPosts];
});

// فیلتر نهایی (دسته‌بندی + کادر جستجو)
const filteredPosts = computed(() => {
  let result = allPosts.value;

  // فیلتر تب‌ها
  if (activeCategory.value !== 'همه') {
    result = result.filter(post => post.category === activeCategory.value);
  }

  // فیلتر سرچ زنده
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(post => 
      post.title.toLowerCase().includes(q) || 
      post.excerpt.toLowerCase().includes(q)
    );
  }

  return result;
});

// تولید کدهای سئو گوگل (Schema)
const schemaData = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "وبلاگ و مسیر یادگیری داناورس",
  "description": "جدیدترین مقالات، آموزش‌ها و اخبار دنیای تکنولوژی، برنامه‌نویسی و هوش مصنوعی",
  "url": "https://danaverse.ir/learning",
  "blogPost": allPosts.value.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "url": `https://danaverse.ir/learning/${post.id}`
  }))
}));

useHead({
  // سئو: تگ کانونیکال برای جلوگیری از تشخیص محتوای تکراری توسط ربات‌های گوگل
  link: [
    {
      rel: 'canonical',
      href: 'https://danaverse.ir/learning'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify(schemaData.value))
    },
    // سئو: اضافه کردن BreadcrumbList برای نمایش مسیر زیبا (خانه > یادگیری) در سرچ گوگل
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "خانه",
            "item": "https://danaverse.ir"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "مسیر یادگیری و وبلاگ",
            "item": "https://danaverse.ir/learning"
          }
        ]
      })
    }
  ]
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
.fade-leave-active {
  position: absolute;
}
</style>