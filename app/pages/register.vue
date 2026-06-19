<template>
  <div :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'" class="min-h-screen bg-[#f8fafc] dark:bg-[#020617] flex items-center justify-center pt-28 pb-20 px-4 relative overflow-hidden font-sans transition-colors duration-500">
    
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    <div class="absolute top-1/4 rtl:left-1/4 ltr:right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 rtl:right-1/4 ltr:left-1/4 w-[30rem] h-[30rem] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

    <form @submit.prevent="submitForm" class="w-full max-w-2xl relative z-10">
      <div class="bg-white/70 dark:bg-white/[0.02] backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 dark:border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_0_80px_-20px_rgba(59,130,246,0.15)] relative overflow-hidden min-h-[500px] flex flex-col justify-center transition-all duration-500">
        
        <div class="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-500/50 to-transparent"></div>

        <transition mode="out-in" enter-active-class="transition duration-500 ease-out delay-100" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-300 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
          
          <div v-if="isSuccess" class="flex flex-col items-center justify-center text-center w-full py-10">
            
            <div class="relative w-28 h-28 mb-8">
              <div class="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
              <div class="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.2)] dark:shadow-[0_0_50px_rgba(16,185,129,0.3)] border border-emerald-300/50">
                <svg class="w-14 h-14 text-white animate-[bounce_1s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>

            <h3 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-3 tracking-tight">{{ $t('register.success.title') }}</h3>
            <p class="text-emerald-600 dark:text-emerald-400 font-bold text-lg md:text-xl mb-12">{{ $t('register.success.desc') }}</p>

            <div class="w-full max-w-xs space-y-3">
              <div class="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full progress-animation"></div>
              </div>
              <p class="text-slate-400 dark:text-gray-500 text-sm animate-pulse">{{ $t('register.success.redirect') }}</p>
            </div>
          </div>

          <div v-else class="w-full rtl:text-right ltr:text-left">
            <div class="text-center mb-12">
              <div class="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-50 dark:bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-slate-200 dark:border-white/10 mb-6 shadow-inner relative group">
                <div class="absolute inset-0 bg-blue-400/10 dark:bg-blue-400/20 blur-xl rounded-3xl group-hover:bg-blue-400/30 transition-colors"></div>
                <svg class="w-10 h-10 text-blue-500 dark:text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h2 class="text-3xl md:text-4xl font-black mb-3 text-slate-800 dark:text-white tracking-tight">{{ $t('register.form.title') }}</h2>
              <p class="text-slate-500 dark:text-gray-400 text-sm md:text-base font-light">{{ $t('register.form.desc') }}</p>
            </div>
            
            <div class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative group">
                  <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-2 ltr:ml-2 tracking-wider">{{ $t('register.form.nameLabel') }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <input v-model="form.name" type="text" :placeholder="$t('register.form.namePlaceholder')" class="w-full py-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-blue-500/[0.02] focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 rtl:text-right ltr:text-left" required />
                  </div>
                </div>
                <div class="relative group">
                  <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-2 ltr:ml-2 tracking-wider">{{ $t('register.form.surnameLabel') }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <input v-model="form.surname" type="text" :placeholder="$t('register.form.surnamePlaceholder')" class="w-full py-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-blue-500/[0.02] focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 rtl:text-right ltr:text-left" required />
                  </div>
                </div>
              </div>

              <div class="relative group">
                <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-2 ltr:ml-2 tracking-wider">{{ $t('register.form.phoneLabel') }}</label>
                <div class="relative">
                  <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <input v-model="form.phone" type="tel" dir="ltr" :placeholder="$t('register.form.phonePlaceholder')" class="w-full py-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-blue-500/[0.02] focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-left font-mono tracking-widest" required />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative group">
                  <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-2 ltr:ml-2 tracking-wider">{{ $t('register.form.ageLabel') }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <input v-model="form.age" type="number" :placeholder="$t('register.form.agePlaceholder')" class="w-full py-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-blue-500/[0.02] focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 rtl:text-right ltr:text-left" />
                  </div>
                </div>
                <div class="relative group">
                  <div class="flex justify-between items-center mb-2 rtl:mr-2 ltr:ml-2">
                    <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 tracking-wider">{{ $t('register.form.dateLabel') }}</label>
                    <span class="text-[10px] bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">{{ $t('register.form.dateBadge') }}</span>
                  </div>
                  <div class="relative">
                    <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-blue-500/70 dark:text-blue-400/50">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <input :value="formattedDate" type="text" readonly class="w-full py-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 rounded-2xl bg-slate-100 dark:bg-white/[0.01] border border-slate-200 dark:border-white/[0.02] text-slate-400 dark:text-gray-500 cursor-not-allowed focus:outline-none select-none font-mono rtl:text-right ltr:text-left" />
                  </div>
                </div>
              </div>

              <div class="relative group">
                <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-2 ltr:ml-2 tracking-wider">{{ $t('register.form.instLabel') }}</label>
                <div class="relative">
                  <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <input v-model="form.institution" type="text" :placeholder="$t('register.form.instPlaceholder')" class="w-full py-4 rtl:pr-12 rtl:pl-4 ltr:pl-12 ltr:pr-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-blue-500/[0.02] focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 rtl:text-right ltr:text-left" required />
                </div>
              </div>

              <div class="relative group">
                <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-2 ltr:ml-2 tracking-wider">{{ $t('register.form.courseLabel') }}</label>
                <div class="relative">
                  <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <select v-model="form.course" class="w-full py-4 rtl:pr-12 ltr:pl-12 rtl:pl-10 ltr:pr-10 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white focus:outline-none focus:bg-white dark:focus:bg-blue-500/[0.02] focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 appearance-none cursor-pointer rtl:text-right ltr:text-left" required>
                    <option value="" disabled selected class="bg-white dark:bg-[#0f172a] text-slate-400 dark:text-gray-500">{{ $t('register.form.courseDefault') }}</option>
                    <option v-for="course in coursesKeys" :key="course.key" :value="course.key" class="bg-white dark:bg-[#0f172a] text-slate-800 dark:text-white py-2">
                      {{ $t(`register.courses.${course.key}`) }}
                    </option>
                  </select>
                  <div class="absolute rtl:left-4 ltr:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-gray-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <transition enter-active-class="transition duration-500 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-300 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                <div v-if="form.course" class="relative mt-6 overflow-hidden rounded-2xl group">
                  <div class="absolute inset-0 bg-gradient-to-r rtl:from-blue-500/10 rtl:to-purple-500/10 ltr:from-purple-500/10 ltr:to-blue-500/10 dark:rtl:from-blue-600/20 dark:rtl:to-purple-600/20 dark:ltr:from-purple-600/20 dark:ltr:to-blue-600/20 group-hover:opacity-100 opacity-70 transition-opacity"></div>
                  <div class="relative flex items-center justify-between p-6 border border-blue-500/20 dark:border-blue-500/30 rounded-2xl bg-white/40 dark:bg-[#020617]/50 backdrop-blur-md">
                    <div class="flex items-center gap-3">
                      <div class="p-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                      </div>
                      <span class="text-sm md:text-base font-bold text-blue-700 dark:text-blue-300">{{ $t('register.form.investmentLabel') }}</span>
                    </div>
                    <div class="text-2xl md:text-3xl font-black text-slate-800 dark:text-transparent bg-clip-text bg-gradient-to-l dark:from-white dark:to-gray-300 tracking-wider font-mono flex items-center gap-2">
                      {{ calculatedAmount }} <span class="text-lg font-bold">{{ $t('register.form.currency') }}</span>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform -translate-y-2 opacity-0" enter-to-class="transform translate-y-0 opacity-100">
              <div v-if="message.isError" class="mt-8 p-4 rounded-xl text-sm font-bold text-center border backdrop-blur-md flex items-center justify-center gap-2 bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 1118 0z"></path></svg>
                {{ message.text }}
              </div>
            </transition>

            <button type="submit" :disabled="isLoading" class="w-full mt-10 relative group overflow-hidden rounded-2xl shadow-lg shadow-blue-500/10 dark:shadow-none">
              <div class="absolute inset-0 bg-gradient-to-r rtl:from-blue-600 rtl:via-indigo-600 rtl:to-purple-600 ltr:from-purple-600 ltr:via-indigo-600 ltr:to-blue-600 opacity-95 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div>
              <div class="relative py-5 px-6 flex items-center justify-center gap-3 font-extrabold text-lg text-white">
                <span v-if="isLoading" class="animate-spin text-2xl">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                </span>
                <span v-else class="flex items-center gap-2">
                  {{ $t('register.form.submitBtn') }}
                  <svg class="w-5 h-5 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 rtl:rotate-0 ltr:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </span>
              </div>
            </button>
          </div>
        </transition>

      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const { t, locale } = useI18n()
const localePath = useLocalePath()
const router = useRouter();
const isSuccess = ref(false);

const coursesKeys = [
  { key: 'c1', price: '6,500,000' },
  { key: 'c2', price: '12,000,000' },
  { key: 'c3', price: '7,500,000' },
  { key: 'c4', price: '5,000,000' },
  { key: 'c5', price: '6,500,000' },
  { key: 'c6', price: '8,000,000' },
  { key: 'c7', price: '10,000,000' },
  { key: 'c8', price: '7,000,000' },
  { key: 'c9', price: '12,000,000' },
  { key: 'c10', price: '7,000,000' },
  { key: 'c11', price: '7,000,000' },
  { key: 'c12', price: '6,500,000' },
  { key: 'c13', price: '6,000,000' }
];

const form = ref({
  name: '',
  surname: '',
  phone: '',
  age: '',
  course: '',
  institution: ''
});

// این قسمت باعث میشه با تغییر زبان، تاریخ هم درجا از شمسی به میلادی و برعکس تغییر کنه!
const formattedDate = computed(() => {
  const today = new Date();
  if (locale.value === 'en') {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(today);
  }
  return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(today);
});

const isLoading = ref(false);
const message = ref({ text: '', isError: false });

const calculatedAmount = computed(() => {
  if (!form.value.course) return '';
  const courseObj = coursesKeys.find(c => c.key === form.value.course);
  return courseObj ? courseObj.price : '';
});

const submitForm = async () => {
  isLoading.value = true;
  message.value.text = '';

  try {
    const courseObj = coursesKeys.find(c => c.key === form.value.course);
    // برای اینکه دیتابیس همیشه مرتب باشه، نام فارسی دوره رو می‌فرستیم
    const courseNameFa = t(`register.courses.${form.value.course}`, 1, { locale: 'fa' });

    const response = await $fetch('/api/register', {
      method: 'POST',
      body: {
        ...form.value,
        date: formattedDate.value, // گرفتن تاریخِ زبانِ فعلی برای ارسال به سرور
        course: courseNameFa, 
        price: courseObj ? courseObj.price : '0' 
      }
    });

    isSuccess.value = true;
    
    setTimeout(() => {
      router.push(localePath('/'));
    }, 3500);
    
  } catch (error) {
    message.value = { text: t('register.errors.generic'), isError: true };
  } finally {
    isLoading.value = false;
  }
};

useHead({
  title: computed(() => t('register.seo.title'))
})
</script>

<script>
export default {
  name: 'RegisterPage'
}
</script>

<style scoped>
.progress-animation {
  animation: progress 3.5s linear forwards;
}

@keyframes progress {
  0% { width: 0%; }
  100% { width: 100%; }
}
</style>