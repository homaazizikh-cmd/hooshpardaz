<template>
  <div class="max-w-4xl mx-auto" dir="rtl">
    <div class="flex items-center gap-4 mb-8">
      <NuxtLink to="/admin/instructors" class="text-gray-500 hover:text-blue-600 font-bold text-xl transition-transform hover:-translate-x-1">←</NuxtLink>
      <h2 class="text-2xl font-black text-gray-800 dark:text-white">افزودن استاد جدید</h2>
    </div>

    <form @submit.prevent="saveInstructor" class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">دپارتمان</label>
          <select v-model="form.dept" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer">
            <option value="ai">هوش مصنوعی (AI)</option>
            <option value="python">برنامه‌نویسی پایتون</option>
            <option value="design">دیزاین و گرافیک</option>
            <option value="maharat">مهارت و رباتیک</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">آدرس عکس پروفایل (URL)</label>
          <input v-model="form.image_url" type="text" dir="ltr" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono text-sm" placeholder="/images/instructors/name.jpg">
        </div>
      </div>

      <div class="border-t border-gray-100 dark:border-gray-700 pt-6">
        <h3 class="text-lg font-bold text-blue-600 mb-6 flex items-center gap-2">🇮🇷 اطلاعات فارسی</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">نام استاد (فارسی)</label>
            <input v-model="form.name" type="text" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="مثال: مهدی خزاعی">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">عنوان تخصص (فارسی)</label>
            <input v-model="form.title" type="text" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="مثال: متخصص پایتون و AI">
          </div>
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">بیوگرافی کامل (فارسی)</label>
          <textarea v-model="form.bio" rows="3" required class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"></textarea>
        </div>
      </div>

      <div class="border-t border-gray-100 dark:border-gray-700 pt-6">
        <h3 class="text-lg font-bold text-emerald-600 mb-6 flex items-center gap-2" dir="ltr">🇺🇸 English Information</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" dir="ltr">
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Instructor Name</label>
            <input v-model="form.name_en" type="text" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="e.g. Mehdi Khazaei">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Specialty Title</label>
            <input v-model="form.title_en" type="text" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="e.g. Python & AI Expert">
          </div>
        </div>
        <div dir="ltr">
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Biography</label>
          <textarea v-model="form.bio_en" rows="3" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"></textarea>
        </div>
      </div>

      <div class="border-t border-gray-100 dark:border-gray-700 pt-6">
        <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">مهارت‌ها (با ویرگول جدا کنید - انگلیسی بنویسید)</label>
        <input v-model="form.skillsStr" type="text" dir="ltr" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-mono" placeholder="Python, Machine Learning, UI/UX">
      </div>

      <div class="pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-end">
        <button type="submit" :disabled="loading" class="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 flex items-center gap-2">
          <span v-if="loading" class="animate-spin text-xl">⏳</span>
          {{ loading ? 'در حال ثبت در دیتابیس...' : 'ذخیره استاد در سیستم' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' });
const supabase = useSupabaseClient()
const router = useRouter()

const loading = ref(false)
const form = ref({
  dept: 'ai', image_url: '', skillsStr: '',
  name: '', title: '', bio: '',
  name_en: '', title_en: '', bio_en: ''
})

const saveInstructor = async () => {
  loading.value = true
  const skillsArray = form.value.skillsStr.split(',').map(s => s.trim()).filter(s => s)

  const { error } = await supabase.from('instructors').insert([{
    dept: form.value.dept,
    image_url: form.value.image_url,
    skills: skillsArray,
    name: form.value.name,
    title: form.value.title,
    bio: form.value.bio,
    name_en: form.value.name_en,
    title_en: form.value.title_en,
    bio_en: form.value.bio_en
  }])

  loading.value = false
  if (!error) {
    alert('استاد با موفقیت به سیستم اضافه شد!')
    router.push('/admin/instructors')
  } else {
    alert('خطا در ارتباط با سرور: ' + error.message)
  }
}
</script>