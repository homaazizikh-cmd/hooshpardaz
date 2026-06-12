<template>
  <div class="p-6 md:p-10 max-w-6xl mx-auto font-sans" dir="rtl">
    
    <div class="flex items-center justify-between mb-10">
      <div>
        <h1 class="text-3xl font-black text-slate-800 dark:text-white mb-2">نگارش مقاله جدید</h1>
        <p class="text-slate-500 dark:text-slate-400 text-sm">محتوای جدید برای مجله آموزشی داناورس بسازید و سئوی آن را تنظیم کنید.</p>
      </div>
      <NuxtLink to="/admin/blogs" class="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-bold text-sm">
        بازگشت به لیست
      </NuxtLink>
    </div>

    <form @submit.prevent="saveBlog" class="grid grid-cols-1 xl:grid-cols-3 gap-8">
      
      <div class="xl:col-span-2 space-y-8">
        
        <div class="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
          <h2 class="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
            <span class="w-1.5 h-6 bg-blue-500 rounded-full"></span> اطلاعات اصلی
          </h2>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">عنوان مقاله (H1)</label>
              <input v-model="form.title" type="text" required placeholder="مثال: نقشه راه یادگیری پایتون در سال ۲۰۲۶" class="w-full bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
            </div>

            <div>
              <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">آدرس انگلیسی (Slug)</label>
              <input v-model="form.slug" type="text" required placeholder="مثال: python-roadmap-2026" class="w-full bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors dir-ltr text-left" />
            </div>

            <div>
              <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">محتوای مقاله (HTML پشتیبانی می‌شود)</label>
              <AdminEditor v-model="form.content" />
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-cyan-900/30 rounded-3xl p-8 shadow-[0_0_20px_rgba(59,130,246,0.05)]">
          <h2 class="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
            <span class="w-1.5 h-6 bg-cyan-500 rounded-full"></span> تنظیمات سئو (SEO)
          </h2>
          
          <div class="space-y-6">
            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="block text-sm font-bold text-slate-700 dark:text-slate-300">عنوان سئو (SEO Title)</label>
                <span class="text-xs font-mono" :class="form.seo_title.length > 60 ? 'text-red-500' : 'text-slate-400'">{{ form.seo_title.length }} / 60</span>
              </div>
              <input v-model="form.seo_title" type="text" placeholder="اگر خالی بماند، از عنوان اصلی استفاده می‌شود..." class="w-full bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" />
            </div>

            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="block text-sm font-bold text-slate-700 dark:text-slate-300">توضیحات متا (SEO Description)</label>
                <span class="text-xs font-mono" :class="form.seo_description.length > 160 ? 'text-red-500' : 'text-slate-400'">{{ form.seo_description.length }} / 160</span>
              </div>
              <textarea v-model="form.seo_description" rows="3" placeholder="توضیحات جذاب برای گوگل (حداکثر ۱۶۰ کاراکتر)..." class="w-full bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"></textarea>
            </div>
            
            <div>
              <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">برچسب‌ها (Tags)</label>
              <input v-model="form.tags" type="text" placeholder="با کاما (,) جدا کنید. مثال: هوش مصنوعی, پایتون, آموزش" class="w-full bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" />
            </div>
          </div>
        </div>

      </div>

      <div class="space-y-8">
        
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800/50 rounded-3xl p-8 shadow-sm">
          <h2 class="text-lg font-black text-blue-800 dark:text-cyan-400 mb-6 flex items-center gap-2">
            🚀 تبلیغات درون‌مقاله‌ای
          </h2>
          
          <div class="space-y-2">
            <label class="block text-sm font-bold text-slate-700 dark:text-slate-300">دوره مرتبط (برای نمایش بنر وسط مقاله)</label>
            <select v-model="form.related_course_slug" class="w-full bg-white dark:bg-[#020617] border border-blue-200 dark:border-blue-800/50 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
              <option value="">بدون تبلیغ (غیرفعال)</option>
              <option v-for="course in coursesList" :key="course.slug" :value="course.slug">
                {{ course.title }}
              </option>
            </select>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">بنر ثبت‌نام این دوره به صورت خودکار در مقاله نمایش داده می‌شود.</p>
          </div>
        </div>

        <div class="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-6">
          
          <div>
            <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">دسته‌بندی</label>
            <select v-model="form.category" class="w-full bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 transition-colors">
              <option value="tech">اخبار تکنولوژی</option>
              <option value="tutorial">آموزش برنامه‌نویسی</option>
              <option value="ai">هوش مصنوعی</option>
              <option value="design">گرافیک و دیزاین</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">نام نویسنده</label>
            <input v-model="form.author" type="text" placeholder="مثال: مهدی خزاعی" class="w-full bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
          </div>

          <div class="border-t border-slate-100 dark:border-slate-800 pt-6">
            <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">عکس کاور مقاله <span class="text-red-500">*</span></label>
            <input type="file" @change="handleCoverUpload" accept="image/*" class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900/30 dark:file:text-cyan-400" />
          </div>

          <div>
            <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">عکس پروفایل نویسنده (اختیاری)</label>
            <input type="file" @change="handleAuthorPhotoUpload" accept="image/*" class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 dark:file:bg-purple-900/30 dark:file:text-purple-400" />
          </div>

        </div>

        <div class="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
          <label class="flex items-center gap-3 cursor-pointer mb-6">
            <div class="relative">
              <input type="checkbox" v-model="form.is_published" class="sr-only" />
              <div class="block bg-slate-200 dark:bg-slate-700 w-14 h-8 rounded-full transition-colors" :class="{'bg-green-500 dark:bg-emerald-500': form.is_published}"></div>
              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform" :class="{'transform translate-x-6': form.is_published}"></div>
            </div>
            <span class="font-bold text-slate-700 dark:text-slate-300">وضعیت: {{ form.is_published ? 'منتشر شود' : 'پیش‌نویس (مخفی)' }}</span>
          </label>

          <button type="submit" :disabled="loading" class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-[0_5px_15px_rgba(37,99,235,0.3)] transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg v-if="loading" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <span>{{ loading ? 'در حال آپلود و ذخیره...' : 'انتشار نهایی مقاله' }}</span>
          </button>
        </div>

      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'admin'
});

const supabase = useSupabaseClient();
const loading = ref(false);

const form = ref({ 
  title: '', 
  slug: '',
  category: 'tech',
  author: '', 
  content: '', 
  is_published: true,
  related_course_slug: '',
  seo_title: '',
  seo_description: '',
  tags: ''
});

// آرایه برای نگهداری لیست دوره‌ها
const coursesList = ref([]);

// 💡 لیست دوره‌های ثابت سایت شما (برای اینکه در منوی تبلیغات نمایش داده شوند)
const manualCourses = [
  { slug: 'icdl', title: 'مهارت‌های هفت‌گانه (ICDL)' },
  { slug: 'robotics-adults', title: 'رباتیک بزرگسال' },
  { slug: 'scratch', title: 'اسکرچ (Scratch)' },
  { slug: 'robotics-kids', title: 'رباتیک دانش‌آموزی' },
  { slug: 'python-basics', title: 'پایتون مقدماتی' },
  { slug: 'python-advanced', title: 'پایتون پیشرفته' },
  { slug: 'python-kids', title: 'پایتون کودکان' },
  { slug: 'ai-tools', title: 'ابزارهای هوش مصنوعی' },
  { slug: 'machine-learning', title: 'ماشین لرنینگ' },
  { slug: 'photoshop', title: 'فتوشاپ (Photoshop)' },
  { slug: 'illustrator', title: 'ایلاستریتور (Illustrator)' },
  { slug: 'indesign', title: 'ایندیزاین (InDesign)' },
  { slug: 'sketch', title: 'تصویرسازی اسکیچ' }
];

const coverFile = ref(null);
const authorFile = ref(null);

// 🚀 دریافت دوره‌ها به محض لود شدن صفحه
onMounted(async () => {
  // ۱. دوره‌های جدید را از دیتابیس می‌گیریم
  const { data, error } = await supabase
    .from('courses')
    .select('slug, title')
    .order('created_at', { ascending: false });
    
  let dbCourses = [];
  if (!error && data) {
    dbCourses = data;
  }

  // ۲. دوره‌های دیتابیس را با دوره‌های ثابت (دستی) شما ترکیب می‌کنیم
  // حالا منوی کشویی هم دوره‌های قدیمی و هم دوره‌های جدید را نشان می‌دهد!
  coursesList.value = [...dbCourses, ...manualCourses];
});

const handleCoverUpload = (event) => {
  coverFile.value = event.target.files[0];
};

const handleAuthorPhotoUpload = (event) => {
  authorFile.value = event.target.files[0];
};

const saveBlog = async () => {
  if (!coverFile.value) return alert("لطفاً کاور مقاله را انتخاب کنید.");
  
  const finalSlug = form.value.slug.trim().replace(/\s+/g, '-').toLowerCase();
  if(!finalSlug) return alert("لطفاً آدرس انگلیسی (Slug) را وارد کنید.");

  loading.value = true;
  let imageUrl = '';
  let authorImageUrl = null;

  try {
    const fileCover = coverFile.value;
    const fileExtCover = fileCover.name.split('.').pop();
    const fileNameCover = `cover-${Date.now()}.${fileExtCover}`;
    const { error: uploadErrorCover } = await supabase.storage.from('blogs').upload(fileNameCover, fileCover);
    if (uploadErrorCover) throw uploadErrorCover;
    const { data: publicUrlDataCover } = supabase.storage.from('blogs').getPublicUrl(fileNameCover);
    imageUrl = publicUrlDataCover.publicUrl;

    if (authorFile.value) {
      const fileAuthor = authorFile.value;
      const fileExtAuthor = fileAuthor.name.split('.').pop();
      const fileNameAuthor = `author-${Date.now()}.${fileExtAuthor}`;
      const { error: uploadErrorAuthor } = await supabase.storage.from('blogs').upload(fileNameAuthor, fileAuthor);
      if (uploadErrorAuthor) throw uploadErrorAuthor;
      const { data: publicUrlDataAuthor } = supabase.storage.from('blogs').getPublicUrl(fileNameAuthor);
      authorImageUrl = publicUrlDataAuthor.publicUrl;
    }

    let formattedTags = [];
    if (form.value.tags.trim()) {
      formattedTags = form.value.tags.split(',').map(tag => tag.trim());
    }

    const { error: insertError } = await supabase.from('blogs').insert([{ 
      title: form.value.title, 
      slug: finalSlug, 
      category: form.value.category,
      author: form.value.author || 'تیم تولید محتوای داناورس',
      content: form.value.content,
      is_published: form.value.is_published,
      image_url: imageUrl,
      author_image_url: authorImageUrl,
      related_course_slug: form.value.related_course_slug.trim() || null,
      seo_title: form.value.seo_title.trim() || null,
      seo_description: form.value.seo_description.trim() || null,
      tags: formattedTags
    }]);

    if (insertError) throw insertError;

    alert('✅ مقاله با موفقیت به همراه تنظیمات سئو و تبلیغات ذخیره شد!');
    navigateTo('/admin/blogs');

  } catch (error) {
    alert('خطا در ذخیره‌سازی: ' + error.message);
  } finally {
    loading.value = false;
  }
};
</script>