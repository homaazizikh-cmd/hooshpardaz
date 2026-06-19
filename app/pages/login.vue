<template>
  <div :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'" class="min-h-screen bg-[#f8fafc] dark:bg-[#020617] flex items-center justify-center pt-28 pb-20 px-4 relative overflow-hidden font-sans transition-colors duration-500">
    
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    <div class="absolute top-1/4 rtl:left-1/4 ltr:right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 rtl:right-1/4 ltr:left-1/4 w-[30rem] h-[30rem] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

    <div class="w-full max-w-md relative z-10">
      <div class="bg-white/70 dark:bg-white/[0.02] backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] border border-slate-200/50 dark:border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_0_80px_-20px_rgba(59,130,246,0.15)] relative overflow-hidden flex flex-col justify-center transition-all duration-500">
        
        <div class="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-500/50 to-transparent"></div>

        <div class="text-center mb-8">
          <NuxtLink :to="localePath('/')" class="text-3xl font-black text-slate-800 dark:text-white inline-block mb-3 tracking-tight hover:scale-105 transition-transform">
            DANA<span class="text-transparent bg-clip-text bg-gradient-to-r rtl:from-blue-500 rtl:to-indigo-500 ltr:from-indigo-500 ltr:to-blue-500">VERSE</span>
          </NuxtLink>
          <p class="text-sm text-slate-500 dark:text-gray-400 font-light">
            {{ isLogin ? $t('loginPage.welcomeBack') : $t('loginPage.joinUs') }}
          </p>
        </div>

        <div class="flex p-1 mb-8 bg-slate-100/50 dark:bg-[#0f172a]/50 rounded-2xl border border-slate-200/50 dark:border-white/5 backdrop-blur-sm relative">
          <div class="absolute inset-y-1 w-[calc(50%-4px)] bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-white/10 transition-transform duration-300 ease-out" :class="isLogin ? 'rtl:translate-x-0 ltr:translate-x-0 rtl:right-1 ltr:left-1' : 'rtl:-translate-x-full ltr:translate-x-full rtl:right-1 ltr:left-1'"></div>
          
          <button @click="isLogin = true" class="relative z-10 flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300" :class="isLogin ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'">
            {{ $t('loginPage.tabLogin') }}
          </button>
          <button @click="isLogin = false" class="relative z-10 flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300" :class="!isLogin ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'">
            {{ $t('loginPage.tabRegister') }}
          </button>
        </div>

        <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform -translate-y-2 opacity-0" enter-to-class="transform translate-y-0 opacity-100">
          <div v-if="authMessage" :class="['p-4 mb-6 text-sm font-bold rounded-xl text-center border backdrop-blur-md flex items-center justify-center gap-2', authError ? 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400']">
            <svg v-if="authError" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 1118 0z"></path></svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            {{ authMessage }}
          </div>
        </transition>

        <form @submit.prevent="handleSubmit" class="flex flex-col gap-5 rtl:text-right ltr:text-left">
          
          <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in absolute w-full" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
            <div v-if="!isLogin" class="relative group">
              <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-2 ltr:ml-2 tracking-wider">{{ $t('loginPage.nameLabel') }}</label>
              <div class="relative">
                <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input v-model="form.name" type="text" :placeholder="$t('loginPage.namePlaceholder')" class="w-full py-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-blue-500/[0.02] focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm rtl:text-right ltr:text-left" :required="!isLogin">
              </div>
            </div>
          </transition>

          <div class="relative group">
            <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-2 ltr:ml-2 tracking-wider">{{ $t('loginPage.emailLabel') }}</label>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <input v-model="form.email" type="email" required :placeholder="$t('loginPage.emailPlaceholder')" dir="ltr" class="w-full py-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-blue-500/[0.02] focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm text-left font-mono tracking-wider">
            </div>
          </div>

          <div class="relative group">
            <div class="flex justify-between items-center mb-2 rtl:mr-2 ltr:ml-2">
              <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 tracking-wider">{{ $t('loginPage.passwordLabel') }}</label>
              <a v-if="isLogin" href="#" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">{{ $t('loginPage.forgotPassword') }}</a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <input v-model="form.password" type="password" required :placeholder="$t('loginPage.passwordPlaceholder')" dir="ltr" class="w-full py-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-blue-500/[0.02] focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm text-left font-mono tracking-widest">
            </div>
          </div>

          <button type="submit" :disabled="isLoading" class="w-full mt-6 relative group overflow-hidden rounded-2xl shadow-lg shadow-blue-500/10 dark:shadow-none">
            <div class="absolute inset-0 bg-gradient-to-r rtl:from-blue-600 rtl:via-indigo-600 rtl:to-purple-600 ltr:from-purple-600 ltr:via-indigo-600 ltr:to-blue-600 opacity-95 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 disabled:opacity-50"></div>
            <div class="relative py-4 px-6 flex items-center justify-center gap-3 font-extrabold text-white">
              <span v-if="isLoading" class="animate-spin text-xl">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              </span>
              <span v-else class="flex items-center gap-2">
                {{ isLogin ? $t('loginPage.btnLogin') : $t('loginPage.btnRegister') }}
                <svg class="w-5 h-5 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 rtl:rotate-0 ltr:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              </span>
            </div>
          </button>
        </form>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const { t } = useI18n()
const localePath = useLocalePath()
const supabase = useSupabaseClient()
const router = useRouter() 

useHead({ title: computed(() => t('loginPage.seo.title')) })

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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      })

      if (error) throw error

      authMessage.value = t('loginPage.msgLoginSuccess')
      
      setTimeout(() => {
        router.push(localePath('/dashboard'))
      }, 1000)

    } else {
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

      authMessage.value = t('loginPage.msgRegisterSuccess')
      isLogin.value = true 
      form.password = '' 
    }
  } catch (error) {
    authError.value = true
    if (error.message.includes('Invalid login credentials')) {
      authMessage.value = t('loginPage.errInvalidCreds')
    } else if (error.message.includes('User already registered')) {
      authMessage.value = t('loginPage.errUserExists')
    } else {
      authMessage.value = t('loginPage.errGeneric') + error.message
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>