<template>
  <div dir="rtl">
    <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
      <h2 class="text-2xl font-black text-gray-800 dark:text-white flex items-center gap-2">
        <span class="text-3xl">👨‍🏫</span> مدیریت اساتید
      </h2>
      <NuxtLink to="/admin/instructors/create" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1">
        + افزودن استاد جدید
      </NuxtLink>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-right border-collapse min-w-[600px]">
          <thead class="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th class="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400">پروفایل</th>
              <th class="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400">نام استاد (فارسی / EN)</th>
              <th class="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400">دپارتمان</th>
              <th class="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
            <tr v-for="inst in instructors" :key="inst.id" class="hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors">
              <td class="px-6 py-4 w-20">
                <img :src="inst.image_url || '/images/default-avatar.png'" class="w-14 h-14 rounded-2xl object-cover border-2 border-gray-200 dark:border-gray-600 shadow-sm" />
              </td>
              <td class="px-6 py-4">
                <div class="font-bold text-gray-800 dark:text-white text-base">{{ inst.name || 'نامشخص' }}</div>
                <div class="text-xs text-blue-500 mt-1 font-mono tracking-wide" dir="ltr">{{ inst.name_en || 'NO_ENGLISH_NAME' }}</div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg border border-gray-200 dark:border-gray-700 uppercase tracking-widest">
                  {{ inst.dept }}
                </span>
              </td>
              <td class="px-6 py-4 text-center space-x-2 space-x-reverse">
                <NuxtLink :to="`/admin/instructors/edit/${inst.id}`" class="inline-block text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:bg-indigo-100">
                  ویرایش
                </NuxtLink>
                <button @click="deleteInstructor(inst.id)" class="inline-block text-red-600 hover:text-red-800 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:bg-red-100">
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="instructors.length === 0" class="text-center py-16 text-gray-500 dark:text-gray-400 font-medium">
        <div class="text-4xl mb-4">📭</div>
        هیچ استادی یافت نشد. اولین استاد را اضافه کنید!
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' });
const supabase = useSupabaseClient()
const instructors = ref([])

const fetchInstructors = async () => {
  const { data, error } = await supabase.from('instructors').select('*').order('id', { ascending: false })
  if (!error && data) instructors.value = data
}

const deleteInstructor = async (id) => {
  if(confirm('🚨 آیا از حذف کامل این استاد از دیتابیس اطمینان دارید؟ این کار غیرقابل بازگشت است!')) {
    const { error } = await supabase.from('instructors').delete().eq('id', id)
    if(!error) fetchInstructors()
    else alert('خطا در حذف استاد!')
  }
}

onMounted(() => {
  fetchInstructors()
})
</script>