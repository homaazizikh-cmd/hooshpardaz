<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div class="flex justify-between items-center mb-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700">
      <div>
        <h1 class="text-2xl font-black text-slate-800 dark:text-white mb-2">ویرایش پروژه</h1>
        <p class="text-slate-500 dark:text-gray-400 text-sm">در حال ویرایش: <span class="text-blue-500 font-bold">{{ form.title }}</span></p>
      </div>
      <NuxtLink to="/admin/projects" class="text-blue-600 hover:text-blue-700 font-bold transition-all flex items-center gap-1">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        بازگشت به لیست
      </NuxtLink>
    </div>

    <div v-if="!isLoaded" class="text-center py-10 text-slate-500">در حال بارگذاری اطلاعات...</div>

    <div v-else class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8">
      <form @submit.prevent="updateProject" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="md:col-span-2">
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">عنوان پروژه</label>
          <input v-model="form.title" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">توضیحات کوتاه</label>
          <textarea v-model="form.description" rows="3" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">شناسه دسته‌بندی</label>
          <select v-model="form.category" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all">
            <option value="ai">ai (هوش مصنوعی)</option>
            <option value="web">web (طراحی وب)</option>
            <option value="robotics">robotics (رباتیک)</option>
            <option value="game">game (بازی‌سازی)</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">نام نمایشی دسته‌بندی</label>
          <input v-model="form.categoryName" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">نام هنرجو</label>
          <input v-model="form.student" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">سن هنرجو</label>
          <input v-model="form.age" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">ابزارها (با کاما جدا کنید)</label>
          <input v-model="toolsString" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" dir="ltr" />
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">لینک تصویر</label>
          <input v-model="form.image" type="url" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white text-left focus:ring-2 focus:ring-blue-500 outline-none transition-all" dir="ltr" />
        </div>

        <div class="md:col-span-2 pt-6 border-t border-slate-100 dark:border-gray-700 flex justify-end gap-4 mt-2">
          <NuxtLink to="/admin/projects" class="px-8 py-3 rounded-xl font-bold text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors">انصراف</NuxtLink>
          <button type="submit" class="px-8 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/30 transition-all">بروزرسانی پروژه</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

definePageMeta({
  layout: 'admin'
});
const route = useRoute()
const router = useRouter()
const projects = useState('admin_projects') // استیت تستی

const isLoaded = ref(false)
const toolsString = ref('')
const form = reactive({
  id: null,
  title: '',
  description: '',
  category: '',
  categoryName: '',
  student: '',
  age: '',
  tools: [],
  image: ''
})

onMounted(() => {
  // پیدا کردن پروژه بر اساس ID که در آدرس مرورگر است
  const projectId = Number(route.params.id)
  const currentProject = projects.value.find(p => p.id === projectId)

  if (currentProject) {
    Object.assign(form, currentProject)
    toolsString.value = currentProject.tools.join(', ') // تبدیل آرایه به استرینگ
    isLoaded.value = true
  } else {
    alert('پروژه پیدا نشد!')
    router.push('/admin/projects')
  }
})

const updateProject = () => {
  // تبدیل متن به آرایه
  form.tools = toolsString.value.split(',').map(tool => tool.trim()).filter(Boolean)
  
  // پیدا کردن و آپدیت کردن ایندکس پروژه در لیست
  const index = projects.value.findIndex(p => p.id === form.id)
  if (index !== -1) {
    projects.value[index] = { ...form }
    alert('پروژه با موفقیت ویرایش شد!')
    router.push('/admin/projects')
  }
}
</script>