<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-black text-gray-800 dark:text-white">لیست اساتید</h2>
      <NuxtLink to="/admin/instructors/create" class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all">
        + افزودن استاد جدید
      </NuxtLink>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <table class="w-full text-right border-collapse">
        <thead class="bg-gray-50 dark:bg-gray-900/50">
          <tr>
            <th class="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400">پروفایل</th>
            <th class="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400">نام استاد</th>
            <th class="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400">دپارتمان</th>
            <th class="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400 text-center">عملیات</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
          <tr v-for="inst in instructors" :key="inst.id" class="hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors">
            <td class="px-6 py-4">
              <img :src="inst.image_url || '/images/default-avatar.png'" class="w-12 h-12 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700" />
            </td>
            <td class="px-6 py-4">
              <div class="font-bold text-gray-800 dark:text-white">{{ inst.name }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ inst.title }}</div>
            </td>
            <td class="px-6 py-4 text-sm font-bold text-blue-600 dark:text-blue-400 uppercase">
              {{ inst.dept }}
            </td>
            <td class="px-6 py-4 text-center space-x-3 space-x-reverse">
              <NuxtLink :to="`/admin/instructors/edit/${inst.id}`" class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors">
                ویرایش
              </NuxtLink>
              <button @click="deleteInstructor(inst.id)" class="text-red-600 hover:text-red-800 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors">
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="instructors.length === 0" class="text-center py-10 text-gray-500 dark:text-gray-400 font-medium">
        هیچ استادی یافت نشد. اولین استاد را اضافه کنید!
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
const supabase = useSupabaseClient()
const instructors = ref([])

const fetchInstructors = async () => {
  const { data, error } = await supabase.from('instructors').select('*').order('id', { ascending: false })
  if (!error && data) instructors.value = data
}

const deleteInstructor = async (id) => {
  if(confirm('آیا از حذف این استاد اطمینان دارید؟')) {
    const { error } = await supabase.from('instructors').delete().eq('id', id)
    if(!error) fetchInstructors()
    else alert('خطا در حذف استاد!')
  }
}

onMounted(() => {
  fetchInstructors()
})
</script>