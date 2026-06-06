<template>
  <div class="max-w-5xl mx-auto pb-20" dir="rtl">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-3xl font-black text-gray-800 dark:text-white mb-2">نوشتن مقاله جدید</h2>
        <p class="text-gray-500">محتوای آموزشی خود را خلق کنید.</p>
      </div>
      <NuxtLink to="/admin/blogs" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-300 transition font-bold">
        بازگشت به لیست
      </NuxtLink>
    </div>

    <div class="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700">
      <form @submit.prevent="saveBlog" class="space-y-6">
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-2">
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">عنوان مقاله *</label>
            <input v-model="form.title" type="text" required class="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none">
          </div>

          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">دسته‌بندی *</label>
            <select v-model="form.category" required class="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none cursor-pointer">
              <option value="tech">اخبار تکنولوژی</option>
              <option value="tutorial">آموزش برنامه‌نویسی</option>
              <option value="ai">هوش مصنوعی</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">نام نویسنده</label>
            <input v-model="form.author" type="text" class="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none" placeholder="اگر خالی بماند: تیم داناورس">
          </div>
          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">عکس نویسنده (اختیاری)</label>
            <input type="file" @change="handleAuthorPhotoUpload" accept="image/*" class="w-full text-sm file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-1 border dark:border-gray-700">
          </div>
        </div>

        <div class="p-5 border-2 border-dashed border-purple-200 dark:border-purple-900 rounded-xl bg-purple-50/30 dark:bg-purple-900/10">
          <label class="block mb-2 text-sm font-bold text-purple-800 dark:text-purple-300">کاور مقاله (عکس اصلی) *</label>
          <input type="file" @change="handleCoverUpload" accept="image/*" required class="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer">
        </div>

        <div>
          <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">متن اصلی مقاله *</label>
          <textarea v-model="form.content" rows="12" required class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none leading-loose resize-y"></textarea>
        </div>

        <div class="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
          <input type="checkbox" v-model="form.is_published" id="publish" class="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 cursor-pointer">
          <label for="publish" class="font-bold text-gray-700 dark:text-gray-300 cursor-pointer select-none">انتشار فوری در سایت</label>
        </div>

        <button type="submit" :disabled="loading" class="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold rounded-xl transition shadow-lg flex justify-center items-center text-lg mt-6">
          <span v-if="loading">در حال آپلود عکس‌ها و ذخیره مقاله... ⏳</span>
          <span v-else>ذخیره و ثبت مقاله 🚀</span>
        </button>
        
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
definePageMeta({ layout: 'admin', middleware: 'admin' });

const supabase = useSupabaseClient();
const loading = ref(false);

const form = ref({ 
  title: '', 
  category: 'tech',
  author: '', 
  content: '', 
  is_published: true 
});

const coverFile = ref(null);
const authorFile = ref(null);

const handleCoverUpload = (event) => {
  coverFile.value = event.target.files[0];
};

const handleAuthorPhotoUpload = (event) => {
  authorFile.value = event.target.files[0];
};

const saveBlog = async () => {
  if (!coverFile.value) return alert("لطفاً کاور مقاله را انتخاب کنید.");
  loading.value = true;
  let imageUrl = '';
  let authorImageUrl = null;

  try {
    // ۱. آپلود کاور مقاله (اجباری)
    const fileCover = coverFile.value;
    const fileExtCover = fileCover.name.split('.').pop();
    const fileNameCover = `cover-${Date.now()}.${fileExtCover}`;
    const { error: uploadErrorCover } = await supabase.storage.from('blogs').upload(fileNameCover, fileCover);
    if (uploadErrorCover) throw uploadErrorCover;
    const { data: publicUrlDataCover } = supabase.storage.from('blogs').getPublicUrl(fileNameCover);
    imageUrl = publicUrlDataCover.publicUrl;

    // ۲. آپلود عکس نویسنده (اختیاری)
    if (authorFile.value) {
      const fileAuthor = authorFile.value;
      const fileExtAuthor = fileAuthor.name.split('.').pop();
      const fileNameAuthor = `author-${Date.now()}.${fileExtAuthor}`;
      const { error: uploadErrorAuthor } = await supabase.storage.from('blogs').upload(fileNameAuthor, fileAuthor);
      if (uploadErrorAuthor) throw uploadErrorAuthor;
      const { data: publicUrlDataAuthor } = supabase.storage.from('blogs').getPublicUrl(fileNameAuthor);
      authorImageUrl = publicUrlDataAuthor.publicUrl;
    }

    // ۳. ذخیره در دیتابیس
    const { error: insertError } = await supabase.from('blogs').insert([{ 
      title: form.value.title, 
      category: form.value.category,
      author: form.value.author || 'تیم تولید محتوای داناورس',
      content: form.value.content,
      is_published: form.value.is_published,
      image_url: imageUrl,
      author_image_url: authorImageUrl // ستون جدید
    }]);

    if (insertError) throw insertError;

    alert('✅ مقاله با موفقیت ذخیره شد!');
    navigateTo('/admin/blogs');

  } catch (error) {
    alert('خطا: ' + error.message);
  } finally {
    loading.value = false;
  }
};
</script>