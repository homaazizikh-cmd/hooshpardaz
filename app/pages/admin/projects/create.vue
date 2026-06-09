<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div class="flex justify-between items-center mb-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700">
      <div>
        <h1 class="text-2xl font-black text-slate-800 dark:text-white mb-2">افزودن پروژه جدید</h1>
        <p class="text-slate-500 dark:text-gray-400 text-sm">اطلاعات دستاورد جدید هنرجو را وارد کنید.</p>
      </div>
      <NuxtLink to="/admin/projects" class="text-blue-600 hover:text-blue-700 font-bold transition-all flex items-center gap-1">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        بازگشت به لیست
      </NuxtLink>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 p-6 md:p-8">
      <form @submit.prevent="saveProject" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="md:col-span-2">
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">عنوان پروژه</label>
          <input v-model="form.title" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="مثلا: دستیار صوتی هوشمند" />
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
          <input v-model="form.categoryName" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="مثلا: پایتون پیشرفته" />
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">نام هنرجو</label>
          <input v-model="form.student" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="مثلا: علی رضایی" />
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">سن هنرجو</label>
          <input v-model="form.age" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="مثلا: هنرجوی ۱۶ ساله" />
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">ابزارها (با کاما جدا کنید)</label>
          <input v-model="toolsString" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="مثلاً: Python, OpenAI, Vue.js" dir="ltr" />
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-bold text-slate-700 dark:text-gray-300 mb-2">لینک تصویر</label>
          <input v-model="form.image" type="url" required class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 dark:text-white text-left focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="https://..." dir="ltr" />
        </div>

        <div class="md:col-span-2 pt-6 border-t border-slate-100 dark:border-gray-700 flex justify-end gap-4 mt-2">
          <NuxtLink to="/admin/projects" class="px-8 py-3 rounded-xl font-bold text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors">انصراف</NuxtLink>
          <button type="submit" class="px-8 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all">ذخیره پروژه</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

definePageMeta({
  layout: 'admin'
});
const router = useRouter()
const projects = useState('admin_projects') // فراخوانی استیت مرکزی برای تست

const toolsString = ref('')
const form = reactive({
  title: '',
  description: '',
  category: 'ai',
  categoryName: '',
  student: '',
  age: '',
  tools: [],
  image: ''
})

const saveProject = () => {
  // تبدیل متن به آرایه
  form.tools = toolsString.value.split(',').map(tool => tool.trim()).filter(Boolean)
  
  // تولید یک ID موقت
  const newId = projects.value.length ? Math.max(...projects.value.map(p => p.id)) + 1 : 1
  
  projects.value.push({ ...form, id: newId }) // اضافه به لیست
  
  alert('پروژه با موفقیت اضافه شد!')
  router.push('/admin/projects') // بازگشت به صفحه اصلی پروژه‌ها
}
</script>