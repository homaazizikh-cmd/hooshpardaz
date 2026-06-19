<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-500 pt-28 pb-20 font-sans" :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'">
    
    <div class="container mx-auto px-4 max-w-7xl">
      
      <div class="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div class="rtl:text-right ltr:text-left w-full md:w-auto">
          <h1 class="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-3">
            {{ $t('learningPage.hero.title1') }} <span class="text-blue-600 dark:text-brand-accent1">{{ $t('learningPage.hero.titleHighlight') }}</span>
          </h1>
          <p class="text-gray-500 dark:text-gray-400 font-medium" v-html="$t('learningPage.hero.desc')"></p>
        </div>
        
        <div class="relative w-full md:w-96">
          <input 
            v-model="searchQuery"
            type="text" 
            :placeholder="$t('learningPage.hero.searchPlaceholder')" 
            class="w-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-2xl rtl:pl-4 rtl:pr-12 ltr:pr-4 ltr:pl-12 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm backdrop-blur-md rtl:text-right ltr:text-left"
          >
          <div class="absolute rtl:right-4 ltr:left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>
      </div>

      <div class="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide">
        <button 
          v-for="cat in translatedCategories" 
          :key="cat.key"
          @click="activeCategory = cat.key"
          class="px-6 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all duration-300 border"
          :class="activeCategory === cat.key 
            ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500'"
        >
          {{ cat.name }}
        </button>
      </div>

      <div v-if="activeCategory === 'all' && !searchQuery" class="mb-16 bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row group cursor-pointer transition-all hover:shadow-2xl rtl:text-right ltr:text-left">
        <div class="lg:w-1/2 relative overflow-hidden h-72 lg:h-auto">
          <NuxtImg 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            :alt="$t('learningPage.featured.title')" 
            format="webp"
            preload
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute top-6 rtl:right-6 ltr:left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
            {{ $t('learningPage.featured.badge') }}
          </div>
        </div>
        
        <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
            <span class="bg-blue-50 dark:bg-gray-700 px-3 py-1 rounded-md text-blue-600 dark:text-blue-400">{{ $t('learningPage.featured.category') }}</span>
            <span>•</span>
            <span dir="ltr">{{ $t('learningPage.featured.date') }}</span>
          </div>
          
          <h2 class="text-3xl font-black text-gray-800 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-brand-accent1 transition-colors">
            {{ $t('learningPage.featured.title') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 leading-loose mb-8 rtl:text-justify ltr:text-left">
            {{ $t('learningPage.featured.desc') }}
          </p>
          
          <div class="flex items-center justify-between mt-auto">
            <div class="flex items-center gap-3">
              <NuxtImg 
                src="https://i.pravatar.cc/150?img=11" 
                alt="Author" 
                format="webp"
                loading="lazy"
                class="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-600"
              />
              <div>
                <p class="text-sm font-bold text-gray-800 dark:text-white">{{ $t('learningPage.featured.author') }}</p>
                <p class="text-xs text-gray-500">{{ $t('learningPage.featured.readTime') }}</p>
              </div>
            </div>
            <button class="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg class="w-5 h-5 rtl:rotate-180 ltr:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <div v-if="pending" class="text-center py-20 text-blue-600 font-bold">
        {{ $t('learningPage.ui.loading') }}
      </div>

      <TransitionGroup v-else name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink v-for="(post, index) in filteredPosts" :key="post.id + '-' + index" :to="localePath('/learning/' + post.id)" :title="post.title"
                  class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group hover:-translate-y-2 transition-transform duration-300 flex flex-col rtl:text-right ltr:text-left">
          
          <div class="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
            <NuxtImg 
              :src="post.image || '/images/default-blog.jpg'" 
              :alt="post.title" 
              format="webp"
              loading="lazy"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute top-4 rtl:right-4 ltr:left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white text-xs font-bold px-3 py-1.5 rounded-lg">
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
              <span class="text-gray-500 dark:text-gray-400 font-medium font-mono tracking-wider dir-ltr">{{ post.date }}</span>
              <span class="text-blue-600 dark:text-brand-accent1 font-bold flex items-center gap-1">
                {{ $t('learningPage.ui.readLabel') }} 
                <svg class="w-4 h-4 rtl:rotate-180 ltr:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              </span>
            </div>
          </div>
          
        </NuxtLink>
      </TransitionGroup>

      <div v-if="!pending && filteredPosts.length === 0" class="text-center py-16 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700">
        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{{ $t('learningPage.ui.emptyTitle') }}</h3>
        <p class="text-gray-500">{{ $t('learningPage.ui.emptyDesc') }}</p>
      </div>

      <div v-if="filteredPosts.length > 0" class="mt-16 text-center">
        <button class="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow">
          {{ $t('learningPage.ui.loadMoreBtn') }}
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const { t, locale } = useI18n();
const localePath = useLocalePath();
const supabase = useSupabaseClient();

useSeoMeta({
  title: () => t('learningPage.seo.title'),
  description: () => t('learningPage.seo.desc'),
  keywords: 'وبلاگ برنامه نویسی, مقالات هوش مصنوعی, آموزش پایتون, اخبار تکنولوژی, مقالات رباتیک, یادگیری برنامه نویسی',
  ogTitle: () => t('learningPage.seo.title'),
  ogDescription: () => t('learningPage.seo.desc'),
  ogImage: 'https://danaverse.ir/images/Banner.jpg',
  ogUrl: 'https://danaverse.ir/learning',
  ogType: 'website',
  twitterCard: 'summary_large_image'
});

const searchQuery = ref('');
const activeCategory = ref('all');

// دسته‌بندی‌های سایت به صورت داینامیک
const translatedCategories = computed(() => [
  { key: 'all', name: t('learningPage.tabs.all') },
  { key: 'ai', name: t('learningPage.tabs.ai') },
  { key: 'programming', name: t('learningPage.tabs.programming') },
  { key: 'tech', name: t('learningPage.tabs.tech') },
  { key: 'kids', name: t('learningPage.tabs.kids') },
  { key: 'design', name: t('learningPage.tabs.design') },
  { key: 'career', name: t('learningPage.tabs.career') }
]);

// نگاشت دسته‌های دیتابیس به کلیدهای بالا برای فیلتر صحیح
const categoryMap = {
  'tech': 'tech',
  'tutorial': 'programming',
  'ai': 'ai'
};

// مقالات دستی متصل به دیکشنری i18n
const manualPosts = computed(() => [
  {
    id: 1,
    title: t('learningPage.manualPosts.p1.title'),
    excerpt: t('learningPage.manualPosts.p1.excerpt'),
    categoryKey: 'kids',
    date: locale.value === 'en' ? 'May 9, 2024' : '۲۰ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: t('learningPage.manualPosts.p2.title'),
    excerpt: t('learningPage.manualPosts.p2.excerpt'),
    categoryKey: 'design',
    date: locale.value === 'en' ? 'May 4, 2024' : '۱۵ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: t('learningPage.manualPosts.p3.title'),
    excerpt: t('learningPage.manualPosts.p3.excerpt'),
    categoryKey: 'programming',
    date: locale.value === 'en' ? 'April 29, 2024' : '۱۰ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: t('learningPage.manualPosts.p4.title'),
    excerpt: t('learningPage.manualPosts.p4.excerpt'),
    categoryKey: 'ai',
    date: locale.value === 'en' ? 'April 24, 2024' : '۵ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: t('learningPage.manualPosts.p5.title'),
    excerpt: t('learningPage.manualPosts.p5.excerpt'),
    categoryKey: 'career',
    date: locale.value === 'en' ? 'April 21, 2024' : '۲ اردیبهشت ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: t('learningPage.manualPosts.p6.title'),
    excerpt: t('learningPage.manualPosts.p6.excerpt'),
    categoryKey: 'kids',
    date: locale.value === 'en' ? 'April 16, 2024' : '۲۸ فروردین ۱۴۰۳',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
]);

// دریافت مقالات از دیتابیس
const { data: dbBlogs, pending } = await useAsyncData('public-blogs', async () => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) console.error(error);
  return data || [];
});

// تلفیق مقالات دیتابیس و مقالات دستی و استخراج نام دسته‌بندی بر اساس زبان
const allPosts = computed(() => {
  const dynamicPosts = (dbBlogs.value || [])
    .filter(b => b.is_published === true || b.is_published === 'true')
    .map(b => {
      const catKey = categoryMap[b.category] || 'tech';
      return {
        id: b.id,
        // اگر مقاله در دیتابیس عنوان انگلیسی داشت آن را بخوان، وگرنه همان فارسی را نمایش بده
        title: locale.value === 'en' && b.title_en ? b.title_en : b.title,
        excerpt: locale.value === 'en' && b.content_en ? b.content_en : b.content, 
        categoryKey: catKey,
        category: t(`learningPage.tabs.${catKey}`), // نام دسته‌بندی را از i18n می‌گیرد
        date: new Date(b.created_at).toLocaleDateString(locale.value === 'en' ? 'en-US' : 'fa-IR', { year: 'numeric', month: 'short', day: 'numeric' }),
        image: b.image_url || '/images/default-blog.jpg'
      };
    });

  const manualWithNames = manualPosts.value.map(p => ({
    ...p,
    category: t(`learningPage.tabs.${p.categoryKey}`)
  }));

  return [...dynamicPosts, ...manualWithNames];
});

// فیلتر نهایی (دسته‌بندی + کادر جستجو)
const filteredPosts = computed(() => {
  let result = allPosts.value;

  if (activeCategory.value !== 'all') {
    result = result.filter(post => post.categoryKey === activeCategory.value);
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(post => 
      post.title.toLowerCase().includes(q) || 
      post.excerpt.toLowerCase().includes(q)
    );
  }

  return result;
});

// تولید کدهای سئو گوگل (Schema) - داینامیک با زبان
const schemaData = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": t('learningPage.seo.title'),
  "description": t('learningPage.seo.desc'),
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
  link: [{ rel: 'canonical', href: 'https://danaverse.ir/learning' }],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify(schemaData.value))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Danaverse", "item": "https://danaverse.ir" },
          { "@type": "ListItem", "position": 2, "name": "Learning", "item": "https://danaverse.ir/learning" }
        ]
      })
    }
  ]
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

.fade-move,
.fade-enter-active,
.fade-leave-active { transition: all 0.5s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; transform: translateY(20px) scale(0.98); }
.fade-leave-active { position: absolute; }
.dir-ltr { direction: ltr; }
</style>