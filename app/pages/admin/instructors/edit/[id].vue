<template>
  <div class="max-w-3xl mx-auto">
    <div class="flex items-center gap-4 mb-8">
      <NuxtLink to="/admin/instructors" class="text-gray-500 hover:text-blue-600 font-bold text-xl">←</NuxtLink>
      <h2 class="text-2xl font-black text-gray-800 dark:text-white">ویرایش استاد</h2>
    </div>

    <form @submit.prevent="updateInstructor" class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">نام استاد</label>
          <input v-model="form.name" type="text" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors">
        </div>
        
        <div>
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">دپارتمان</label>
          <select v-model="form.dept" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors">
            <option value="ai">هوش مصنوعی</option>
            <option value="python">برنامه‌نویسی پایتون</option>
            <option value="design">دیزاین و گرافیک</option>
            <option value="maharat">مهارت و رباتیک</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">عنوان تخصص</label>
        <input v-model="form.title" type="text" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors">
      </div>

      <div>
        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">مهارت‌ها (با ویرگول جدا کنید)</label>
        <input v-model="form.skillsStr" type="text" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors">
      </div>

      <div>
        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">آدرس عکس (URL)</label>
        <input v-model="form.image_url" type="text" dir="ltr" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors">
      </div>

      <div>
        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">بیوگرافی کامل</label>
        <textarea v-model="form.bio" rows="4" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors"></textarea>
      </div>

      <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
        <button type="submit" :disabled="loading" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all disabled:opacity-50">
          {{ loading ? 'در حال به‌روزرسانی...' : 'به‌روزرسانی استاد' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
const supabase = useSupabaseClient()
const route = useRoute()
const router = useRouter()

const loading = ref(false)
const form = ref({
  name: '', dept: 'ai', title: '', skillsStr: '', image_url: '', bio: ''
})

onMounted(async () => {
  const { data, error } = await supabase.from('instructors').select('*').eq('id', route.params.id).single()
  if (data) {
    form.value.name = data.name
    form.value.dept = data.dept
    form.value.title = data.title
    form.value.bio = data.bio
    form.value.image_url = data.image_url
    // تبدیل آرایه به رشته با ویرگول برای نمایش در اینپوت
    form.value.skillsStr = Array.isArray(data.skills) ? data.skills.join(', ') : ''
  }
})

const updateInstructor = async () => {
  loading.value = true
  const skillsArray = form.value.skillsStr.split(',').map(s => s.trim()).filter(s => s)

  const { error } = await supabase.from('instructors').update({
    name: form.value.name,
    dept: form.value.dept,
    title: form.value.title,
    bio: form.value.bio,
    skills: skillsArray,
    image_url: form.value.image_url
  }).eq('id', route.params.id)

  loading.value = false
  if (!error) {
    alert('اطلاعات با موفقیت به‌روز شد!')
    router.push('/admin/instructors')
  } else {
    alert('خطا در به‌روزرسانی اطلاعات!')
  }
}
</script>