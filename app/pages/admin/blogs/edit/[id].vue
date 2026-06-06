<template>
  <div class="max-w-5xl mx-auto pb-20" dir="rtl">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-3xl font-black text-gray-800 dark:text-white mb-2">ویرایش مقاله</h2>
        <p class="text-gray-500">تغییرات مورد نظر را اعمال کرده و ذخیره کنید.</p>
      </div>
      <NuxtLink to="/admin/blogs" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-300 transition font-bold">
        بازگشت به لیست
      </NuxtLink>
    </div>

    <div v-if="fetching" class="text-center py-20 dark:text-white font-bold">
      در حال دریافت اطلاعات مقاله... ⏳
    </div>

    <div v-else class="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700">
      <form @submit.prevent="updateBlog" class="space-y-6">
        
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
            <input v-model="form.author" type="text" class="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none">
          </div>
          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">تغییر عکس نویسنده (فایل جدید انتخاب کنید)</label>
            <input type="file" @change="handleAuthorPhotoUpload" accept="image/*" class="w-full text-sm file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-1 border dark:border-gray-700">
            <div v-if="form.author_image_url && !authorFile" class="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <img :src="form.author_image_url" class="w-8 h-8 rounded-full object-cover border bg-white">
              عکس فعلی نویسنده
            </div>
          </div>
        </div>

        <div class="p-5 border-2 border-dashed border-purple-200 dark:border-purple-900 rounded-xl bg-purple-50/30 dark:bg-purple-900/10">
          <label class="block mb-2 text-sm font-bold text-purple-800 dark:text-purple-300">کاور مقاله (فقط در صورت نیاز به تغییر، فایل جدید انتخاب کنید)</label>
          <input type="file" @change="handleCoverUpload" accept="image/*" class="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer mb-3">
          <div v-if="form.image_url && !coverFile" class="text-sm text-gray-500 flex items-center gap-2 mt-2">
            <img :src="form.image_url" class="w-16 h-12 rounded-lg object-cover border">
            <span>کاور فعلی مقاله</span>
          </div>
        </div>

        <div>
          <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">متن اصلی مقاله *</label>
          <textarea v-model="form.content" rows="12" required class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none leading-loose resize-y"></textarea>
        </div>

        <div class="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
          <input type="checkbox" v-model="form.is_published" id="publishEdit" class="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 cursor-pointer">
          <label for="publishEdit" class="font-bold text-gray-700 dark:text-gray-300 cursor-pointer select-none">وضعیت انتشار (تیک دار = منتشر شده)</label>
        </div>

        <button type="submit" :disabled="loading" class="w-full py-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold rounded-xl transition shadow-lg flex justify-center items-center text-lg mt-6">
          <span v-if="loading">در حال آپلود و بروزرسانی... ⏳</span>
          <span v-else>ذخیره تغییرات نهایی ✅</span>
        </button>
        
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
definePageMeta({ layout: 'admin', middleware: 'admin' });

const route = useRoute();
const supabase = useSupabaseClient();

const loading = ref(false);
const fetching = ref(true);
const coverFile = ref(null);
const authorFile = ref(null);

const form = ref({ 
  title: '', 
  category: 'tech',
  author: '',
  content: '', 
  is_published: true,
  image_url: '',
  author_image_url: '' // اضافه شد
});

onMounted(async () => {
  try {
    const { data, error } = await supabase.from('blogs').select('*').eq('id', route.params.id).single();
    if (error) throw error;
    if (data) {
      form.value = {
        title: data.title,
        category: data.category,
        author: data.author,
        content: data.content,
        is_published: data.is_published,
        image_url: data.image_url,
        author_image_url: data.author_image_url // اضافه شد
      };
    }
  } catch (error) {
    alert("خطا در بازخوانی اطلاعات!");
    navigateTo('/admin/blogs');
  } finally {
    fetching.value = false;
  }
});

const handleCoverUpload = (event) => {
  coverFile.value = event.target.files[0];
};

const handleAuthorPhotoUpload = (event) => {
  authorFile.value = event.target.files[0];
};

const updateBlog = async () => {
  loading.value = true;
  let finalImageUrl = form.value.image_url;
  let finalAuthorImageUrl = form.value.author_image_url;

  try {
    // ۱. اگر کاور جدید آپلود شده
    if (coverFile.value) {
      const file = coverFile.value;
      const fileExt = file.name.split('.').pop();
      const fileName = `cover-${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage.from('blogs').upload(fileName, file);
      if (uploadError) throw uploadError;
      const { data: publicUrlData } = supabase.storage.from('blogs').getPublicUrl(fileName);
      finalImageUrl = publicUrlData.publicUrl;
    }

    // ۲. اگر عکس نویسنده جدید آپلود شده
    if (authorFile.value) {
      const file = authorFile.value;
      const fileExt = file.name.split('.').pop();
      const fileName = `author-${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage.from('blogs').upload(fileName, file);
      if (uploadError) throw uploadError;
      const { data: publicUrlData } = supabase.storage.from('blogs').getPublicUrl(fileName);
      finalAuthorImageUrl = publicUrlData.publicUrl;
    }

    // ۳. آپدیت در دیتابیس
    const { error: updateError } = await supabase.from('blogs').update({ 
      title: form.value.title, 
      category: form.value.category,
      author: form.value.author || 'تیم تولید محتوای داناورس',
      content: form.value.content,
      is_published: form.value.is_published,
      image_url: finalImageUrl,
      author_image_url: finalAuthorImageUrl // ستون جدید
    }).eq('id', route.params.id);

    if (updateError) throw updateError;
    alert('✅ تغییرات مقاله با موفقیت ذخیره شد!');
    navigateTo('/admin/blogs');

  } catch (error) {
    alert('خطا در ذخیره‌سازی: ' + error.message);
  } finally {
    loading.value = false;
  }
};
</script>