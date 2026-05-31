<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-brand-dark transition-colors duration-500 pt-20" dir="rtl">
    
    <div class="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-pulse"></div>
    <div class="absolute bottom-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-pulse" style="animation-delay: 2s;"></div>

    <div class="relative w-full max-w-md px-8 py-10 bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-white/50 dark:border-slate-700 shadow-2xl rounded-3xl z-10 mx-4">
      
      <div class="text-center mb-8">
        <NuxtLink to="/" class="text-3xl font-black text-slate-800 dark:text-white inline-block mb-2">
          هوش<span class="text-blue-600">پرداز</span>
        </NuxtLink>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          {{ isLogin ? 'خوش برگشتید! برای ورود اطلاعات خود را وارد کنید.' : 'به جمع ما بپیوندید و مسیر یادگیری را شروع کنید.' }}
        </p>
      </div>

      <div class="flex p-1 mb-6 bg-slate-200/50 dark:bg-slate-900/50 rounded-xl">
        <button @click="isLogin = true" :class="['flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300', isLogin ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white']">ورود</button>
        <button @click="isLogin = false" :class="['flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300', !isLogin ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white']">ثبت‌نام</button>
      </div>

      <div v-if="authMessage" :class="['p-4 mb-4 text-sm font-bold rounded-xl text-center', authError ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400']">
        {{ authMessage }}
      </div>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
        
        <div v-if="!isLogin" class="flex flex-col gap-1 transition-all duration-300">
          <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">نام و نام خانوادگی</label>
          <input v-model="form.name" type="text" placeholder="مثال: علی رضایی" class="px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white placeholder-slate-400 transition-all">
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">ایمیل</label>
          <input v-model="form.email" type="email" required placeholder="example@email.com" dir="ltr" class="px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white placeholder-slate-400 transition-all text-left">
        </div>

        <div class="flex flex-col gap-1">
          <div class="flex justify-between items-center">
            <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">رمز عبور</label>
            <a v-if="isLogin" href="#" class="text-xs font-medium text-blue-600 hover:underline">فراموشی رمز؟</a>
          </div>
          <input v-model="form.password" type="password" required placeholder="••••••••" dir="ltr" class="px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white placeholder-slate-400 transition-all text-left">
        </div>

        <button type="submit" :disabled="isLoading" class="mt-4 w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 flex justify-center items-center">
          <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span v-else>{{ isLogin ? 'ورود به پنل' : 'ساخت حساب کاربری' }}</span>
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

useHead({ title: 'ورود / ثبت‌نام | هوش‌پرداز' })

const supabase = useSupabaseClient()
const router = useRouter() // 🌟 این خط برای مدیریت حرفه‌ای انتقال صفحات اضافه شد

const isLogin = ref(true)
const isLoading = ref(false)
const authMessage = ref('')
const authError = ref(false)

const form = reactive({
  name: '',
  email: '',
  password: ''
})

const handleSubmit = async () => {
  isLoading.value = true
  authMessage.value = ''
  authError.value = false

  try {
    if (isLogin.value) {
      // منطق ورود
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      })

      if (error) throw error

      authMessage.value = 'ورود موفقیت‌آمیز بود! در حال انتقال...'
      
      // 🌟 استفاده از router.push به جای navigateTo برای جلوگیری از گم شدن مسیر
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)

    } else {
      // منطق ثبت‌نام
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.name
          }
        }
      })

      if (error) throw error

      authMessage.value = 'ثبت‌نام با موفقیت انجام شد! حالا می‌توانید وارد شوید.'
      isLogin.value = true 
      form.password = '' 
    }
  } catch (error) {
    authError.value = true
    if (error.message.includes('Invalid login credentials')) {
      authMessage.value = 'ایمیل یا رمز عبور اشتباه است.'
    } else if (error.message.includes('User already registered')) {
      authMessage.value = 'این ایمیل قبلاً ثبت‌نام کرده است.'
    } else {
      authMessage.value = 'خطایی رخ داد: ' + error.message
    }
  } finally {
    isLoading.value = false
  }
}
</script>