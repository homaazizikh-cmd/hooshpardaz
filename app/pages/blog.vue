<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300" dir="rtl">
    
    <header class="relative bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/5 pt-28 pb-12 px-6 lg:px-12 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="text-cyan-600 dark:text-cyan-400 font-bold tracking-widest text-sm uppercase bg-cyan-50 dark:bg-cyan-900/30 px-4 py-2 rounded-full border border-cyan-100 dark:border-cyan-800/50">
            پایگاه دانش هوش‌پرداز
          </span>
          <h1 class="text-4xl md:text-5xl font-black mt-6 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 dark:from-white dark:via-blue-200 dark:to-cyan-200 bg-clip-text text-transparent">
            مجله تخصصی هوش مصنوعی
          </h1>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            تازه‌ترین اخبار، آموزش‌های یادگیری ماشین، تحلیل مدل‌های زبانی و مسیرهای شغلی دنیای AI را اینجا کشف کنید.
          </p>
        </div>

        <div class="max-w-xl mx-auto relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-45 transition duration-300"></div>
          <div class="relative bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-white/10 p-2 flex items-center shadow-lg">
            <svg class="w-6 h-6 text-slate-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="جستجو در مقالات، الگوریتم‌ها یا نویسندگان..." 
              class="w-full bg-transparent border-none outline-none pr-3 py-3 text-slate-900 dark:text-white placeholder-slate-400 text-sm md:text-base"
            />
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      
      <section class="flex items-center gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-slate-200/60 dark:border-white/5">
        <button 
          @click="selectedCategory = 'all'"
          :class="[
            'px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300',
            selectedCategory === 'all' 
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' 
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5'
          ]"
        >
          همه مقالات
        </button>
        <button 
          v-for="category in categories" 
          :key="category.slug"
          @click="selectedCategory = category.slug"
          :class="[
            'px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300',
            selectedCategory === category.slug 
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-white/5'
          ]"
        >
          {{ category.name }}
        </button>
      </section>

      <section v-if="featuredPost && searchQuery === '' && selectedCategory === 'all'" class="mb-16 group">
        <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-200/60 dark:border-white/5 shadow-xl overflow-hidden">
          
          <div class="lg:col-span-7 overflow-hidden rounded-2xl relative min-h-[300px] lg:min-h-[400px]">
            <img 
              :src="featuredPost.image" 
              :alt="featuredPost.title"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
            <span class="absolute top-4 right-4 bg-cyan-500 text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-lg">👑 مقاله ویژه روز</span>
          </div>

          <div class="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <span class="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase">{{ featuredPost.categoryName }}</span>
              <h2 class="text-2xl md:text-3xl font-extrabold mt-3 mb-4 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {{ featuredPost.title }}
              </h2>
              <p class="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                {{ featuredPost.excerpt }}
              </p>
            </div>

            <div class="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
              <div class="flex items-center gap-3">
                <img :src="featuredPost.author.avatar" class="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10" />
                <div>
                  <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200">{{ featuredPost.author.name }}</h4>
                  <span class="text-xs text-slate-400">{{ featuredPost.date }}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {{ featuredPost.readTime }} دقیقه مطالعه
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
            {{ searchQuery || selectedCategory !== 'all' ? 'نتایج جستجو و فیلتر' : 'آخرین نوشته‌های هوش مصنوعی' }}
          </h3>
          <span class="text-sm text-slate-400 font-medium">{{ filteredPosts.length }} مقاله پیدا شد</span>
        </div>

        <div v-if="filteredPosts.length === 0" class="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-white/10">
          <span class="text-4xl">🤖</span>
          <h4 class="text-lg font-bold mt-4 text-slate-700 dark:text-slate-300">مقاله‌ای یافت نشد!</h4>
          <p class="text-sm text-slate-400 mt-2">مدل جستجوی ما نتوانست چیزی پیدا کند. لطفاً کلمه دیگری را امتحان کنید.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-white/5 overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="relative overflow-hidden h-52">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                <span class="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm">
                  {{ post.categoryName }}
                </span>
              </div>

              <div class="p-6">
                <h3 class="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-3 leading-snug">
                  {{ post.title }}
                </h3>
                <p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                  {{ post.excerpt }}
                </p>
              </div>
            </div>

            <div class="p-6 pt-0">
              <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                <div class="flex items-center gap-2.5">
                  <img :src="post.author.avatar" class="w-8 h-8 rounded-full" />
                  <span class="text-xs font-bold text-slate-700 dark:text-slate-300">{{ post.author.name }}</span>
                </div>
                <span class="text-[11px] text-slate-400 font-medium">{{ post.date }}</span>
              </div>
            </div>

          </article>
        </div>
      </section>

      <section class="mt-24 relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 to-cyan-600 p-8 md:p-12 text-center text-white shadow-xl">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
        <div class="relative z-10 max-w-2xl mx-auto">
          <h3 class="text-2xl md:text-3xl font-black mb-4">به شبکه خبرنامه هوش‌پرداز متصل شوید</h3>
          <p class="text-blue-100 text-sm md:text-base mb-8 leading-relaxed">
            مهم‌ترین اخبار مدل‌های زبانی، مقالات یادگیری ماشین و کدهای تخفیف بوت‌کمپ‌ها را زودتر از بقیه در ایمیل خود دریافت کنید.
          </p>
          <form @submit.prevent class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="آدرس ایمیل شما" 
              class="w-full px-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-sm outline-none focus:border-white transition-colors"
              required
            />
            <button type="submit" class="sm:w-40 px-6 py-3.5 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 active:scale-95 transition-all text-sm shadow-lg">
              عضویت در شبکه
            </button>
          </form>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// مدیریت وضعیت فیلترها و سرچ
const searchQuery = ref('');
const selectedCategory = ref('all');

// آرایه دسته‌بندی‌های کاملاً تخصصی هوش مصنوعی
const categories = ref([
  { name: 'یادگیری ماشین (ML)', slug: 'machine-learning' },
  { name: 'هوش مصنوعی مولد', slug: 'generative-ai' },
  { name: 'بینایی ماشین', slug: 'computer-vision' },
  { name: 'پردازش زبان طبیعی', slug: 'nlp' },
  { name: 'پرامپت اینجینیرینگ', slug: 'prompt-engineering' }
]);

// آرایه مقالات با موضوعات تخصصی AI
const posts = ref([
  {
    id: 1,
    title: 'تکامل مدل‌های زبانی: GPT-4o چگونه مرزهای تعامل انسان و ماشین را جابجا کرد؟',
    excerpt: 'بررسی معماری جدیدترین مدل زبانی OpenAI و قابلیت‌های چندوجهی (Multimodal) آن. آیا هوش مصنوعی بالاخره به درک واقعی از احساسات انسانی رسیده است؟',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    categorySlug: 'generative-ai',
    categoryName: 'هوش مصنوعی مولد',
    readTime: 8,
    date: '۱۶ خرداد ۱۴۰۳',
    isFeatured: true,
    author: {
      name: 'مهندس امین دانا',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 2,
    title: 'نقشه راه یادگیری ماشین (Machine Learning) در سال ۲۰۲۴',
    excerpt: 'برای تبدیل شدن به یک متخصص ML از کجا باید شروع کرد؟ بررسی مفاهیم پایه‌ای ریاضیات، کتابخانه‌های پایتون مثل Scikit-Learn و ورود به دیپ‌لرنینگ.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    categorySlug: 'machine-learning',
    categoryName: 'یادگیری ماشین (ML)',
    readTime: 12,
    date: '۱۴ خرداد ۱۴۰۳',
    isFeatured: false,
    author: {
      name: 'سارا رضایی',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 3,
    title: 'هنر نوشتن پرامپت: چگونه خروجی‌های دقیق‌تری از Midjourney بگیریم؟',
    excerpt: 'پرامپت اینجینیرینگ مهارتی است که تفاوت بین یک تصویر ساده و یک شاهکار هنری را رقم می‌زند. در این مقاله ساختار استاندارد یک پرامپت موفق را موشکافی می‌کنیم.',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80',
    categorySlug: 'prompt-engineering',
    categoryName: 'پرامپت اینجینیرینگ',
    readTime: 6,
    date: '۱۰ خرداد ۱۴۰۳',
    isFeatured: false,
    author: {
      name: 'علی کریمی',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 4,
    title: 'بینایی ماشین در پزشکی: تشخیص زودهنگام سرطان با شبکه‌های عصبی پیچشی (CNN)',
    excerpt: 'چگونه الگوریتم‌های دیپ‌لرنینگ به پزشکان در تحلیل دقیق‌تر تصاویر رادیولوژی و MRI کمک می‌کنند و خطای انسانی را به حداقل می‌رسانند.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    categorySlug: 'computer-vision',
    categoryName: 'بینایی ماشین',
    readTime: 9,
    date: '۰۸ خرداد ۱۴۰۳',
    isFeatured: false,
    author: {
      name: 'دکتر مریم علوی',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 5,
    title: 'معماری ترانسفورمرها (Transformers): موتور محرک پردازش زبان طبیعی',
    excerpt: 'نگاهی عمیق به مقاله "Attention Is All You Need" و اینکه چگونه مکانیزم توجه (Attention Mechanism) دنیای NLP را برای همیشه متحول کرد.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    categorySlug: 'nlp',
    categoryName: 'پردازش زبان طبیعی',
    readTime: 15,
    date: '۰۵ خرداد ۱۴۰۳',
    isFeatured: false,
    author: {
      name: 'مهندس امین دانا',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    }
  }
]);

// استخراج داینامیک پست ویژه روز
const featuredPost = computed(() => {
  return posts.value.find(post => post.isFeatured);
});

// موتور استنتاج فیلترینگ و سرچ قدرتمند (Reactive Engine)
const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    // شرط بررسی دسته‌بندی
    const matchesCategory = selectedCategory.value === 'all' || post.categorySlug === selectedCategory.value;
    
    // شرط بررسی سرچ متنی (در عنوان، متن خلاصه، تگ‌ها و یا نام نویسنده)
    const text = searchQuery.value.toLowerCase().trim();
    const matchesSearch = !text || 
                          post.title.toLowerCase().includes(text) || 
                          post.excerpt.toLowerCase().includes(text) || 
                          post.author.name.toLowerCase().includes(text);

    return matchesCategory && matchesSearch;
  });
});
</script>

<style scoped>
/* حذف نوار اسکرول پیش‌فرض برای دسته‌بندی‌ها در دسکتاپ و موبایل */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>