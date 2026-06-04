<template>
  <div class="max-w-3xl mx-auto">
    <div class="flex items-center gap-4 mb-8">
      <NuxtLink to="/admin/instructors" class="text-gray-500 hover:text-blue-600 font-bold text-xl">←</NuxtLink>
      <h2 class="text-2xl font-black text-gray-800 dark:text-white">افزودن استاد جدید</h2>
    </div>

    <form @submit.prevent="saveInstructor" class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">نام استاد</label>
          <input v-model="form.name" type="text" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors" placeholder="مثال: مهدی خزاعی">
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
        <input v-model="form.title" type="text" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors" placeholder="مثال: متخصص پایتون و AI">
      </div>

      <div>
        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">مهارت‌ها (با ویرگول جدا کنید)</label>
        <input v-model="form.skillsStr" type="text" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors" placeholder="Python, AI, Machine Learning">
      </div>

      <div>
        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">آدرس عکس (URL)</label>
        <input v-model="form.image_url" type="text" dir="ltr" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors" placeholder="/images/instructors/name.jpg">
      </div>

      <div>
        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">بیوگرافی کامل</label>
        <textarea v-model="form.bio" rows="4" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 transition-colors"></textarea>
      </div>

      <div class="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
        <button type="submit" :disabled="loading" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all disabled:opacity-50">
          {{ loading ? 'در حال ذخیره...' : 'ذخیره استاد' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })
const supabase = useSupabaseClient()
const router = useRouter()

const loading = ref(false)
const form = ref({
  name: '', dept: 'ai', title: '', skillsStr: '', image_url: '', bio: ''
})

const saveInstructor = async () => {
  loading.value = true
  // تبدیل رشته با ویرگول به آرایه برای دیتابیس
  const skillsArray = form.value.skillsStr.split(',').map(s => s.trim()).filter(s => s)

  const { error } = await supabase.from('instructors').insert([{
    name: form.value.name,
    dept: form.value.dept,
    title: form.value.title,
    bio: form.value.bio,
    skills: skillsArray,
    image_url: form.value.image_url
  }])

  loading.value = false
  if (!error) {
    alert('استاد با موفقیت اضافه شد!')
    router.push('/admin/instructors')
  } else {
    alert('خطا در ثبت اطلاعات!')
  }
}
</script>