<template>
  <div class="min-h-screen pt-32 pb-12 bg-slate-50 dark:bg-brand-dark transition-colors duration-500" dir="rtl">
    
    <div v-if="pending" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <div v-else-if="user" class="container mx-auto px-4 max-w-4xl">
      
      <div class="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <div class="flex items-center gap-6 z-10">
          <div class="w-20 h-20 bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-3xl font-black shadow-inner border border-blue-100 dark:border-slate-600">
            {{ userInitials }}
          </div>
          <div>
            <h1 class="text-2xl font-black text-slate-800 dark:text-white mb-1">سلام، {{ userName }} عزیز! 👋</h1>
            <p class="text-slate-500 dark:text-slate-400 text-sm">به پنل کاربری هوش‌پرداز خوش آمدید.</p>
          </div>
        </div>

        <button @click="handleLogout" class="px-6 py-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors z-10">
          خروج از حساب
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 class="text-lg font-bold text-slate-800 dark:text-white mb-4">📚 دوره‌های من</h2>
          
          <div v-if="userCourses && userCourses.length > 0" class="space-y-3">
             <div v-for="item in userCourses" :key="item.id" class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-700 dark:text-blue-300 font-bold">
               {{ item.course_name }}
             </div>
          </div>
          <div v-else class="text-slate-500 dark:text-slate-400 text-sm text-center py-10 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
            شما هنوز در دوره‌ای ثبت‌نام نکرده‌اید.
          </div>
        </div>

        <div class="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 class="text-lg font-bold text-slate-800 dark:text-white mb-4">🎯 نتایج استعدادیابی</h2>
          
          <div v-if="testResult" class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl text-purple-700 dark:text-purple-300 font-bold text-center">
             نتیجه آزمون: {{ testResult.score }} از 100
          </div>
          <div v-else class="text-slate-500 dark:text-slate-400 text-sm text-center py-10 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
            شما هنوز در آزمون شرکت نکرده‌اید.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const pending = ref(true)

// داده‌های کاربر
const userCourses = ref([])
const testResult = ref(null)

onMounted(async () => {
  if (!user.value) {
    navigateTo('/login')
    return
  }

  // ۱. دریافت دوره‌ها از دیتابیس
  const { data: courses } = await supabase
    .from('user_courses')
    .select('course_name')
    .eq('user_id', user.value.id)
  userCourses.value = courses

  // ۲. دریافت نتایج تست از دیتابیس
  const { data: result } = await supabase
    .from('test_results')
    .select('score')
    .eq('user_id', user.value.id)
    .single() // چون معمولاً یک نتیجه داریم
  testResult.value = result

  pending.value = false
})

const userName = computed(() => user.value?.user_metadata?.full_name || 'کاربر')
const userInitials = computed(() => userName.value.substring(0, 1))

const handleLogout = async () => {
  await supabase.auth.signOut()
  navigateTo('/login')
}
</script>