<template>
  <div class="max-w-6xl mx-auto pb-20">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-3xl font-black text-gray-800 dark:text-white mb-2">مدیریت دوره‌ها</h2>
        <p class="text-gray-500">لیست تمام دوره‌های ثبت شده در دیتابیس</p>
      </div>
      <NuxtLink to="/admin/courses/create" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center gap-2">
        <span>+</span> افزودن دوره جدید
      </NuxtLink>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      
      <div v-if="pending" class="text-center py-10">در حال دریافت لیست... ⏳</div>
      
      <table v-else class="w-full text-right">
        <thead class="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
          <tr>
            <th class="p-4 font-bold">عکس</th>
            <th class="p-4 font-bold">عنوان دوره</th>
            <th class="p-4 font-bold">دپارتمان</th>
            <th class="p-4 font-bold">وضعیت</th>
            <th class="p-4 font-bold">عملیات</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
          <tr v-for="course in courses" :key="course.id" class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <td class="p-4">
              <img :src="course.image_url || '/images/default-course.jpg'" class="w-16 h-12 object-cover rounded-lg">
            </td>
            <td class="p-4 font-bold dark:text-white">{{ course.title }}</td>
            <td class="p-4 text-blue-600 dark:text-blue-400 font-bold" dir="ltr">{{ course.dept }}</td>
            <td class="p-4">
              <span class="px-3 py-1 text-xs font-bold rounded-full" :class="course.is_published ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'">
                {{ course.is_published ? 'منتشر شده' : 'پیش‌نویس' }}
              </span>
            </td>
            <td class="p-4">
              <button @click="deleteCourse(course.id)" class="text-red-500 hover:text-red-700 font-bold">حذف ❌</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup> 
definePageMeta({
  layout: 'admin'
});

const supabase = useSupabaseClient();

const { data: courses, pending, refresh } = await useAsyncData('admin-courses-list', async () => {
  const { data } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
  return data || [];
});

const deleteCourse = async (id) => {
  if(confirm('آیا از حذف این دوره مطمئن هستید؟')) {
    await supabase.from('courses').delete().eq('id', id);
    refresh(); // رفرش کردن جدول بعد از حذف
    alert('دوره حذف شد.');
  }
}
</script>