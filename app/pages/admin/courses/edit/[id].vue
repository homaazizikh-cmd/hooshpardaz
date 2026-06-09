<template>
  <div class="max-w-4xl mx-auto pb-20" dir="rtl">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-3xl font-black text-gray-800 dark:text-white mb-2">ویرایش دوره آموزشی</h2>
        <p class="text-gray-500 dark:text-gray-400">تغییرات مورد نظر را روی فیلدها اعمال کرده و ذخیره کنید.</p>
      </div>
      <NuxtLink to="/admin/courses" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-300 transition font-bold">
        بازگشت به لیست
      </NuxtLink>
    </div>

    <div v-if="fetching" class="text-center py-20 dark:text-white font-bold">
      در حال دریافت اطلاعات دوره از دیتابیس... ⏳
    </div>

    <div v-else class="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700">
      <form @submit.prevent="updateCourse" class="space-y-6">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">عنوان دوره *</label>
            <input v-model="form.title" type="text" required class="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
          </div>

          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">دپارتمان آموزشی *</label>
            <select v-model="form.dept" required class="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer">
              <option value="python">برنامه‌نویسی پایتون</option>
              <option value="ai">هوش مصنوعی و داده</option>
              <option value="design">هنرهای دیجیتال و گرافیک</option>
              <option value="maharat">مهارت‌های کاربردی و سخت</option>
            </select>
          </div>

          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">قیمت (تومان) *</label>
            <input v-model="form.price" type="text" required class="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
          </div>

          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">تاریخ شروع *</label>
            <input v-model="form.startDate" type="text" required class="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
          </div>
        </div>

        <div>
          <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">زمان‌بندی کلاس *</label>
          <input v-model="form.schedule" type="text" required class="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
        </div>

        <div class="p-5 border-2 border-dashed border-blue-200 dark:border-blue-900 rounded-xl bg-blue-50/30 dark:bg-blue-900/10">
          <label class="block mb-2 text-sm font-bold text-blue-800 dark:text-blue-300">تصویر شاخص دوره (فقط اگر قصد تغییر عکس را دارید فایل جدید انتخاب کنید)</label>
          <input type="file" @change="handleFileUpload" accept="image/*" class="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer mb-3">
          
          <div v-if="form.image_url && !imageFile" class="text-sm text-gray-500 flex items-center gap-2 mt-2">
            <img :src="form.image_url" class="w-16 h-12 rounded-lg object-cover border border-gray-200 dark:border-gray-600 shadow-sm">
            <span>تصویر در حال حاضر دوره</span>
          </div>
        </div>

        <div>
          <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">توضیحات کوتاه (نمایش در کارت دوره) *</label>
          <textarea v-model="form.desc" rows="4" required class="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
        </div>

        <button type="submit" :disabled="loading" class="w-full py-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold rounded-xl transition shadow-lg flex justify-center items-center text-lg mt-6">
          <span v-if="loading">در حال بروزرسانی اطلاعات در سرور... ⏳</span>
          <span v-else>ذخیره تغییرات نهایی ✅</span>
        </button>
        
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'admin'
});
const route = useRoute();
const supabase = useSupabaseClient();

const loading = ref(false);
const fetching = ref(true);
const imageFile = ref(null);

const form = ref({ 
  title: '', 
  dept: 'python',
  price: '',
  startDate: '',
  schedule: '',
  desc: '', 
  is_published: true,
  image_url: ''
});

// ۱. دریافت اطلاعات فعلی دوره بر اساس آیدی موجود در URL
onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', route.params.id)
      .single();

    if (error) throw error;
    
    if (data) {
      form.value = {
        title: data.title,
        dept: data.dept,
        price: data.price,
        startDate: data.start_date,
        schedule: data.schedule,
        desc: data.description,
        is_published: data.is_published,
        image_url: data.image_url
      };
    }
  } catch (error) {
    alert("خطا در بازخوانی اطلاعات دوره!");
    navigateTo('/admin/courses');
  } finally {
    fetching.value = false;
  }
});

const handleFileUpload = (event) => {
  imageFile.value = event.target.files[0];
};

// ۲. اعمال دکمه ویرایش و به روز رسانی در Supabase
const updateCourse = async () => {
  loading.value = true;
  let finalImageUrl = form.value.image_url;

  try {
    // اگر کاربر عکس جدید انتخاب کرده باشد، آپلودش میکنیم
    if (imageFile.value) {
      const file = imageFile.value;
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('courses')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from('courses')
        .getPublicUrl(fileName);
        
      finalImageUrl = publicUrlData.publicUrl;
    }

    // آپدیت ردیف در جدول دیتابیس
    const { error: updateError } = await supabase
      .from('courses')
      .update({ 
        title: form.value.title, 
        dept: form.value.dept,
        price: form.value.price,
        start_date: form.value.startDate,
        schedule: form.value.schedule,
        description: form.value.desc,
        is_published: form.value.is_published,
        image_url: finalImageUrl
      })
      .eq('id', route.params.id);

    if (updateError) throw updateError;

    alert('✅ تغییرات با موفقیت روی سایت اعمال شد!');
    navigateTo('/admin/courses');

  } catch (error) {
    alert('خطا در ذخیره‌سازی: ' + error.message);
  } finally {
    loading.value = false;
  }
};
</script>