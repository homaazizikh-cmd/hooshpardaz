<template>
  <div class="max-w-4xl mx-auto pb-20">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-3xl font-black text-gray-800 dark:text-white mb-2">افزودن دوره جدید</h2>
        <p class="text-gray-500">اطلاعات کامل دوره را برای نمایش در سایت وارد کنید.</p>
      </div>
      <NuxtLink to="/admin/courses" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 transition font-bold">
        بازگشت
      </NuxtLink>
    </div>

    <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
      <form @submit.prevent="saveCourse" class="space-y-6">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">عنوان دوره *</label>
            <input v-model="form.title" type="text" required class="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="مثال: پایتون پیشرفته">
          </div>

          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">دپارتمان آموزشی *</label>
            <select v-model="form.dept" required class="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer">
              <option value="python">برنامه‌نویسی پایتون</option>
              <option value="ai">هوش مصنوعی و داده</option>
              <option value="design">هنرهای دیجیتال و گرافیک</option>
              <option value="maharat">مهارت‌های کاربردی و سخت</option>
            </select>
          </div>

          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">قیمت (تومان) *</label>
            <input v-model="form.price" type="text" required class="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="مثال: ۸,۵۰۰,۰۰۰">
          </div>

          <div>
            <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">تاریخ شروع *</label>
            <input v-model="form.startDate" type="text" required class="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="مثال: ۱۵ مرداد">
          </div>
        </div>

        <div>
          <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">زمان‌بندی کلاس *</label>
          <input v-model="form.schedule" type="text" required class="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="مثال: روزهای زوج - ساعت ۱۶ الی ۱۸">
        </div>

        <div class="p-4 border-2 border-dashed border-blue-200 dark:border-blue-900 rounded-xl bg-blue-50/50 dark:bg-blue-900/10">
          <label class="block mb-2 text-sm font-bold text-blue-800 dark:text-blue-300">تصویر شاخص دوره *</label>
          <input type="file" @change="handleFileUpload" accept="image/*" required class="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer">
        </div>

        <div>
          <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">توضیحات کوتاه (نمایش در کارت دوره) *</label>
          <textarea v-model="form.desc" rows="3" required class="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="این متن در کارت دوره به کاربر نمایش داده می‌شود..."></textarea>
        </div>

        <button type="submit" :disabled="loading" class="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl transition shadow-lg flex justify-center items-center text-lg mt-6">
          <span v-if="loading">در حال پردازش و آپلود... ⏳</span>
          <span v-else>ذخیره دوره در دیتابیس 🚀</span>
        </button>
        
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin', middleware: 'admin' });

const supabase = useSupabaseClient();
const loading = ref(false);

// مدل داده‌ها دقیقا مطابق با فیلدهایی که شما در سایت دارید
const form = ref({ 
  title: '', 
  dept: 'python', // پیش‌فرض
  price: '',
  startDate: '',
  schedule: '',
  desc: '', 
  is_published: true 
});

const imageFile = ref(null);

const handleFileUpload = (event) => {
  imageFile.value = event.target.files[0];
};

const saveCourse = async () => {
  if (!imageFile.value) return alert("لطفا یک عکس انتخاب کنید.");
  loading.value = true;
  let imageUrl = '';

  try {
    // ۱. آپلود عکس
    const file = imageFile.value;
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('courses')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    // ۲. گرفتن لینک عکس
    const { data: publicUrlData } = supabase.storage
      .from('courses')
      .getPublicUrl(fileName);
      
    imageUrl = publicUrlData.publicUrl;

    // ۳. ذخیره در دیتابیس با ستون‌های جدید
    const { error: insertError } = await supabase
      .from('courses')
      .insert([{ 
        title: form.value.title, 
        dept: form.value.dept,
        price: form.value.price,
        start_date: form.value.startDate,
        schedule: form.value.schedule,
        description: form.value.desc, // در دیتابیس اسمش description است
        is_published: form.value.is_published,
        image_url: imageUrl
      }]);

    if (insertError) throw insertError;

    alert('✅ دوره با موفقیت در سایت قرار گرفت!');
    navigateTo('/admin/courses');

  } catch (error) {
    alert('خطا: ' + error.message);
  } finally {
    loading.value = false;
  }
};
</script>