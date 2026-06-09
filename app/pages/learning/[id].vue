<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-500 pt-28 pb-20 font-sans" dir="rtl">
    
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
        <NuxtImg 
          :src="post.image" 
          :alt="`مقاله ${post.title} در آکادمی داناورس`" 
          format="webp"
          preload
          class="w-full h-full object-cover relative z-0 transform group-hover:scale-105 transition-transform duration-1000"
        />
        
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
        
        <main class="lg:col-span-8 bg-white dark:bg-gray-800 rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          
          <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 dark:bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

          <blockquote class="relative border-r-4 border-blue-600 dark:border-brand-accent1 pr-6 py-4 mb-12 bg-gradient-to-l from-blue-50/50 to-transparent dark:from-gray-700/30 dark:to-transparent rounded-l-2xl italic font-medium text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            <span class="absolute -right-3 -top-3 text-4xl text-blue-200 dark:text-gray-600 select-none">"</span>
            {{ post.excerpt }}
          </blockquote>
          
          <div class="prose prose-lg max-w-none dark:prose-invert text-gray-600 dark:text-gray-300 leading-loose text-justify space-y-6 article-content whitespace-pre-wrap relative z-10" v-html="post.content">
          </div>

          <Transition name="fade-up">
            <div v-if="relatedCourseData" class="mt-16 mb-8 relative group rounded-3xl overflow-hidden p-[2px]">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-brand-accent1 opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div class="relative bg-white dark:bg-[#090e1a] rounded-[calc(1.5rem-2px)] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 z-10">
                <div class="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <NuxtImg :src="relatedCourseData.image" :alt="relatedCourseData.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div class="flex-1 text-center md:text-right">
                  <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-brand-accent1 text-[10px] font-black tracking-widest mb-3 border border-blue-100 dark:border-blue-800/30 uppercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand-accent1 animate-pulse"></span>
                    دوره مرتبط با این مقاله
                  </div>
                  <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-2">{{ relatedCourseData.title }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">{{ relatedCourseData.desc }}</p>
                  
                  <NuxtLink :to="`/courses/${relatedCourseData.slug || relatedCourseData.id}`" class="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-[0_5px_15px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300">
                    مشاهده دوره و ثبت‌نام
                    <svg class="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </Transition>

          <div class="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700/80 flex flex-wrap items-center gap-3 relative z-10">
            <span class="text-gray-500 dark:text-gray-400 font-bold text-sm flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              برچسب‌ها:
            </span>
            <a :href="`/learning?tag=${tag}`" v-for="tag in post.tags" :key="tag" class="bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-3.5 py-1.5 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 dark:hover:border-cyan-500 dark:hover:text-cyan-400 transition-all cursor-pointer shadow-sm">
              #{{ tag }}
            </a>
          </div>

          <div class="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 relative z-10" id="comments">
            <h3 class="text-2xl font-black text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <span class="w-3 h-8 bg-brand-accent1 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></span>
              بحث و تبادل نظر
              <span class="text-sm font-bold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 ml-auto">
                {{ comments.length }} دیدگاه
              </span>
            </h3>

            <form @submit.prevent="submitComment" class="bg-gray-50 dark:bg-[#0f172a]/50 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 md:p-8 mb-10 shadow-inner">
              <div class="mb-4">
                <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">نام شما</label>
                <input v-model="commentForm.name" type="text" required placeholder="مثال: علی احمدی" class="w-full bg-white dark:bg-[#020617] border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent1 focus:ring-1 focus:ring-brand-accent1 transition-colors" />
              </div>
              <div class="mb-6">
                <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">دیدگاه یا سوال شما</label>
                <textarea v-model="commentForm.text" required rows="4" placeholder="دیدگاه ارزشمند خود را درباره این مقاله بنویسید..." class="w-full bg-white dark:bg-[#020617] border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent1 focus:ring-1 focus:ring-brand-accent1 transition-colors resize-none"></textarea>
              </div>
              
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button type="submit" :disabled="isSubmitting" class="w-full sm:w-auto px-8 py-3 bg-brand-dark hover:bg-brand-accent1 dark:bg-brand-accent1 dark:hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <span v-else>ارسال دیدگاه</span>
                </button>
                <p v-if="feedbackMsg" :class="feedbackError ? 'text-red-500' : 'text-green-500'" class="text-sm font-bold text-center sm:text-right">{{ feedbackMsg }}</p>
              </div>
            </form>

            <div class="space-y-5">
              <div v-if="comments.length === 0" class="text-center py-10 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl">
                <p class="text-gray-500 dark:text-gray-400">هنوز دیدگاهی ثبت نشده است. شما اولین نفر باشید!</p>
              </div>
              
              <TransitionGroup name="list">
                <div v-for="comment in comments" :key="comment.id" 
                     class="p-6 rounded-2xl border transition-all duration-300"
                     :class="comment.is_admin_reply ? 'bg-blue-50/80 dark:bg-blue-900/20 border-blue-200 dark:border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'bg-white dark:bg-[#090e1a] border-gray-100 dark:border-gray-800 shadow-sm'">
                  
                  <div class="flex justify-between items-start mb-3">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg"
                           :class="comment.is_admin_reply ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'">
                        {{ comment.user_name.charAt(0) }}
                      </div>
                      <div>
                        <h4 class="font-bold flex items-center gap-2" :class="comment.is_admin_reply ? 'text-blue-700 dark:text-cyan-400' : 'text-gray-800 dark:text-white'">
                          {{ comment.user_name }}
                          <span v-if="comment.is_admin_reply" class="bg-blue-100 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-400 text-[10px] px-2 py-0.5 rounded-full border border-blue-200 dark:border-cyan-500/30 font-black uppercase tracking-wider">
                            پاسخ مدرس
                          </span>
                        </h4>
                        <span class="text-xs text-gray-500 dark:text-gray-400 font-mono">{{ formatDate(comment.created_at) }}</span>
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed pl-12 whitespace-pre-wrap">{{ comment.content }}</p>
                </div>
              </TransitionGroup>
            </div>

          </div>
        </main>

        <aside class="lg:col-span-4">
          <div class="sticky top-32 space-y-8">
            
            <div class="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
              
              <div class="relative w-28 h-28 mx-auto mb-5 mt-2">
                <div class="absolute inset-0 border-2 border-blue-400/30 dark:border-cyan-500/30 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div class="absolute -inset-2 border border-dashed border-purple-400/30 dark:border-purple-500/30 rounded-full group-hover:rotate-180 transition-transform duration-1000"></div>
                <NuxtImg 
                  :src="post.authorImg" 
                  :alt="`نویسنده مقاله: ${post.author}`" 
                  format="webp"
                  loading="lazy"
                  class="w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-lg relative z-10 object-cover bg-white"
                />
              </div>
              
              <h3 class="text-2xl font-black text-gray-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">{{ post.author }}</h3>
              <p class="text-xs font-bold text-brand-accent1 uppercase tracking-wider mb-4">{{ post.authorRole }}</p>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                علاقه‌مند به دنیای کدنویسی و آموزش مفاهیم پیچیده به زبان ساده. همراه شما در مسیر یادگیری تکنولوژی در داناورس.
              </p>
              <button class="w-full py-3.5 bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:border-blue-400 hover:text-blue-600 dark:hover:border-cyan-500 dark:hover:text-cyan-400 transition-all flex items-center justify-center gap-2 group/btn">
                درباره نویسنده
                <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </button>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h4 class="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                اشتراک‌گذاری سیگنال
              </h4>
              <div class="flex items-center gap-3">
                <button class="flex-1 py-3 bg-[#0088cc] text-white rounded-xl font-bold text-sm hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,136,204,0.4)] transition-all">تلگرام</button>
                <button class="flex-1 py-3 bg-[#0a66c2] text-white rounded-xl font-bold text-sm hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(10,102,194,0.4)] transition-all">لینکدین</button>
                <button class="w-12 h-[44px] flex items-center justify-center bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
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
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const supabase = useSupabaseClient()

// لیست مقالات دستی
const manualPosts = [
  { id: 1, title: 'چرا یادگیری برنامه‌نویسی برای کودکان ضروری است؟', excerpt: 'برنامه‌نویسی فقط تایپ کد نیست؛ بلکه یادگیری نحوه حل مسئله، تفکر منطقی و خلاقیت است.', category: 'کودکان و نوجوانان', date: '۲۰ اردیبهشت ۱۴۰۳', readTime: '۵ دقیقه', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', author: 'مهندس احمدی', authorRole: 'مدرس دپارتمان کودکان', authorImg: 'https://i.pravatar.cc/150?img=11', tags: ['کودکان', 'اسکرچ', 'پایتون', 'آموزش'], relatedCourseSlug: 'python-kids', content: `<h2>برنامه‌نویسی، الفبای قرن بیست و یکم</h2><p>در دنیای امروز که تکنولوژی تمام جنبه‌های زندگی ما را فرا گرفته است، یادگیری برنامه‌نویسی برای کودکان دیگر یک مزیت لوکس نیست، بلکه یک ضرورت است.</p>` },
  { id: 2, title: 'تفاوت طراح UI و UX چیست؟ راهنمای کامل', excerpt: 'بسیاری از افراد این دو مفهوم را با هم اشتباه می‌گیرند. در این مقاله به بررسی تفاوت‌ها می‌پردازیم.', category: 'طراحی و UI/UX', date: '۱۵ اردیبهشت ۱۴۰۳', readTime: '۸ دقیقه', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', author: 'سارا رضایی', authorRole: 'متخصص تجربه کاربری', authorImg: 'https://i.pravatar.cc/150?img=5', tags: ['طراحی_رابط', 'تجربه_کاربری', 'Figma'], relatedCourseSlug: 'photoshop', content: `<h2>UX در برابر UI</h2><p>احتمالاً بارها اصطلاح UI/UX به گوشتان خورده است. با اینکه این دو مخفف همیشه در کنار هم می‌آیند، اما دو تخصص کاملاً متفاوت هستند.</p>` },
];

// 🚀 سیستم پشتیبان (Fallback) دوره‌ها: اگر دیتابیس خالی بود، از اینجا می‌خواند!
const manualCoursesFallback = [
  { id: 11, slug: 'python-kids', title: 'پایتون کودکان', desc: 'زبان پایتون با بیانی ساده و جذاب برای نوجوانان.', image: '/images/Python-childern.webp' },
  { id: 6, slug: 'photoshop', title: 'فتوشاپ (Photoshop)', desc: 'خلق جهان‌های بصری و ورود به بازار کار طراحی و ادیت عکس.', image: '/images/Photoshop.webp' },
  { id: 1, slug: 'python-basics', title: 'پایتون مقدماتی', desc: 'شروع قدرتمند برای ورود به دنیای برنامه‌نویسی تجاری.', image: '/images/Python-M.webp' }
];

const categoryMap = { tech: 'اخبار تکنولوژی', tutorial: 'آموزش برنامه‌نویسی', ai: 'هوش مصنوعی' };

// 🚀 دریافت مقاله و دوره مرتبط به صورت هوشمند
const { data: postData } = await useAsyncData(`post-data-${route.params.id}`, async () => {
  let currentPost = null;
  let courseData = null;

  // ۱. جستجوی مقاله در دیتابیس یا لیست دستی
  const { data: dbPost } = await supabase.from('blogs').select('*').eq('id', route.params.id).single();
  if (dbPost) {
    currentPost = { id: dbPost.id, title: dbPost.title, content: dbPost.content, excerpt: dbPost.content.substring(0, 180) + '...', category: categoryMap[dbPost.category] || 'مقاله آموزشی', date: new Date(dbPost.created_at).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }), readTime: '۵ دقیقه', image: dbPost.image_url || '/images/default-blog.jpg', author: dbPost.author || 'تیم داناورس', authorRole: 'مدرس و کارشناس آکادمی', authorImg: dbPost.author_image_url || 'https://i.pravatar.cc/150?img=60', tags: ['داناورس', 'آموزش'], relatedCourseSlug: dbPost.related_course_slug };
  } else {
    currentPost = manualPosts.find(p => p.id == route.params.id);
  }

  // ۲. جستجوی دوره مرتبط (اول دیتابیس، بعد لیست پشتیبان)
  if (currentPost && currentPost.relatedCourseSlug) {
    const { data: course, error } = await supabase.from('courses').select('id, slug, title, description, image_url').eq('slug', currentPost.relatedCourseSlug).single();
    
    if (course) {
      // اگر در دیتابیس بود
      courseData = { id: course.id, slug: course.slug, title: course.title, desc: course.description?.substring(0, 100) + '...', image: course.image_url };
    } else {
      // اگر دیتابیس خالی بود، از لیست دستی بگیر تا بنر روشن بشه!
      const backupCourse = manualCoursesFallback.find(c => c.slug === currentPost.relatedCourseSlug);
      if (backupCourse) {
        courseData = { id: backupCourse.id, slug: backupCourse.slug, title: backupCourse.title, desc: backupCourse.desc, image: backupCourse.image };
      }
    }
  }

  return { post: currentPost, course: courseData };
});

const post = computed(() => postData.value?.post);
const relatedCourseData = computed(() => postData.value?.course);

// سیستم نظرات...
const { data: comments, refresh: refreshComments } = await useAsyncData(`comments-${route.params.id}`, async () => {
  const { data } = await supabase.from('comments').select('id, user_name, content, created_at, is_admin_reply').eq('post_id', route.params.id).eq('is_approved', true).order('created_at', { ascending: true });
  return data || [];
});

const commentForm = ref({ name: '', text: '' });
const isSubmitting = ref(false);
const feedbackMsg = ref('');
const feedbackError = ref(false);

const submitComment = async () => {
  if (!commentForm.value.name.trim() || !commentForm.value.text.trim()) return;
  isSubmitting.value = true;
  feedbackMsg.value = '';
  const { error } = await supabase.from('comments').insert({ post_id: route.params.id, user_name: commentForm.value.name.trim(), content: commentForm.value.text.trim() });
  isSubmitting.value = false;
  if (error) { feedbackError.value = true; feedbackMsg.value = 'خطایی رخ داد. لطفاً دوباره تلاش کنید.'; } 
  else { feedbackError.value = false; feedbackMsg.value = '✅ دیدگاه شما با موفقیت ثبت شد.'; commentForm.value.name = ''; commentForm.value.text = ''; }
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(dateString));
};

// سئو
useSeoMeta({
  title: computed(() => post.value ? `${post.value.title} | وبلاگ داناورس` : 'خواندن مقاله'),
  description: computed(() => post.value ? post.value.excerpt : 'مقالات آموزشی داناورس'),
});
</script>