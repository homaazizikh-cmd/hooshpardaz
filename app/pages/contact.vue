<template>
  <div class="min-h-screen bg-[#f8fafc] dark:bg-[#020617] pt-28 pb-20 transition-colors duration-500 relative overflow-hidden font-sans">
    
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

    <div class="absolute top-1/4 rtl:left-1/4 ltr:right-1/4 w-[35rem] h-[35rem] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[130px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 rtl:right-1/3 ltr:left-1/3 w-[35rem] h-[35rem] bg-indigo-500/10 dark:bg-purple-600/10 rounded-full blur-[130px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

    <div class="relative z-10 text-center mb-16 w-full px-4 mt-8">
      <div class="absolute inset-0 flex items-center justify-center -z-10 select-none overflow-hidden">
        <h1 class="text-[4.5rem] md:text-[8.5rem] font-black text-slate-200/40 dark:text-white/[0.02] tracking-[0.3em] uppercase font-mono">
          {{ $t('contact.hero.bgText') }}
        </h1>
      </div>
      
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4 border border-blue-100 dark:border-blue-500/20 shadow-sm">
        {{ $t('contact.hero.badge') }}
      </div>
      <h2 class="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 tracking-tight">
        {{ $t('contact.hero.title1') }} <span class="text-transparent bg-clip-text bg-gradient-to-l rtl:from-blue-600 rtl:to-cyan-400 ltr:from-cyan-400 ltr:to-blue-600">{{ $t('contact.hero.titleHighlight') }}</span>
      </h2>
      <p class="text-slate-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
        {{ $t('contact.hero.desc') }}
      </p>
    </div>

    <div class="relative z-10 w-full max-w-5xl px-4 mx-auto">
      <div class="flex flex-col md:flex-row bg-white/80 dark:bg-[#111827]/40 rounded-[2.5rem] border border-slate-200/80 dark:border-white/5 overflow-hidden backdrop-blur-3xl shadow-[0_30px_70px_-20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_80px_-20px_rgba(59,130,246,0.1)] transition-all duration-500">
        
        <div class="w-full md:w-2/5 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 rtl:right-0 ltr:left-0 w-64 h-64 bg-white/[0.08] rounded-full blur-3xl -translate-y-1/2 rtl:translate-x-1/3 ltr:-translate-x-1/3"></div>
          <div class="absolute bottom-0 rtl:left-0 ltr:right-0 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl translate-y-1/2 rtl:-translate-x-1/3 ltr:translate-x-1/3"></div>

          <div class="relative z-10 rtl:text-right ltr:text-left">
            <h3 class="text-2xl md:text-3xl font-black mb-2 tracking-tight">{{ $t('contact.sidebar.title') }}</h3>
            <p class="text-blue-100/80 text-xs md:text-sm mb-12 font-light">{{ $t('contact.sidebar.desc') }}</p>

            <div class="space-y-6">
              <a href="mailto:info@danaverse.ir" class="flex items-center gap-5 group p-3 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div class="w-12 h-12 flex-shrink-0 bg-white/10 group-hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10 shadow-inner">
                  <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p class="text-[11px] text-blue-200 uppercase tracking-wider font-bold">{{ $t('contact.sidebar.email') }}</p>
                  <p class="font-extrabold text-sm md:text-base tracking-wide font-mono mt-0.5 dir-ltr">info@danaverse.ir</p>
                </div>
              </a>

              <a href="https://t.me/dana_verse" target="_blank" class="flex items-center gap-5 group p-3 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div class="w-12 h-12 flex-shrink-0 bg-white/10 group-hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10 shadow-inner">
                  <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </div>
                <div>
                  <p class="text-[11px] text-blue-200 uppercase tracking-wider font-bold">{{ $t('contact.sidebar.telegram') }}</p>
                  <p class="font-extrabold text-sm md:text-base tracking-wide font-mono mt-0.5 dir-ltr">@dana_verse</p>
                </div>
              </a>
            </div>
          </div>

          <div class="relative z-10 mt-16 pt-6 border-t border-white/10 rtl:text-right ltr:text-left">
            <p class="text-xs text-blue-200 mb-4 font-bold tracking-wide">{{ $t('contact.sidebar.social') }}</p>
            <div class="flex gap-3 rtl:justify-start ltr:justify-start">
              <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/5 font-mono font-bold text-sm">in</a>
              <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center relative rtl:text-right ltr:text-left">
          
          <h3 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2 tracking-tight">{{ $t('contact.form.title') }}</h3>
          <p class="text-slate-400 dark:text-gray-400 text-xs md:text-sm mb-8 font-light">{{ $t('contact.form.desc') }}</p>

          <form @submit.prevent="submitForm" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="relative group">
                <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-1 ltr:ml-1 tracking-wider">{{ $t('contact.form.nameLabel') }}</label>
                <div class="relative">
                  <input v-model="form.name" type="text" required class="w-full bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white rounded-2xl px-4 py-3.5 outline-none focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm rtl:text-right ltr:text-left" :placeholder="$t('contact.form.namePlaceholder')">
                </div>
              </div>
              <div class="relative group">
                <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-1 ltr:ml-1 tracking-wider">{{ $t('contact.form.phoneLabel') }}</label>
                <div class="relative">
                  <input v-model="form.phone" type="tel" required dir="ltr" class="w-full bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white rounded-2xl px-4 py-3.5 outline-none focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-sm text-left font-mono" :placeholder="$t('contact.form.phonePlaceholder')">
                </div>
              </div>
            </div>
            
            <div class="relative group">
              <label class="block text-xs font-bold text-slate-500 dark:text-gray-400 mb-2 rtl:mr-1 ltr:ml-1 tracking-wider">{{ $t('contact.form.messageLabel') }}</label>
              <textarea v-model="form.message" required rows="4" class="w-full bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] text-slate-800 dark:text-white rounded-2xl px-4 py-3.5 outline-none focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none text-sm leading-relaxed rtl:text-right ltr:text-left" :placeholder="$t('contact.form.messagePlaceholder')"></textarea>
            </div>

            <div class="flex rtl:justify-end ltr:justify-end pt-2">
              <button :disabled="loading" type="submit" class="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold py-4 px-10 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-md shadow-blue-500/10 dark:shadow-none hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer group">
                <span>{{ loading ? $t('contact.form.loadingBtn') : $t('contact.form.submitBtn') }}</span>
                <svg v-if="!loading" class="w-4 h-4 rtl:-scale-x-100 transform rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </form>

          <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform translate-y-2 opacity-0" enter-to-class="transform translate-y-0 opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100" leave-to-class="transform translate-y-2 opacity-0">
            <div v-if="notification.text" class="absolute bottom-6 inset-x-6 p-4 rounded-xl text-xs md:text-sm font-bold border text-center backdrop-blur-md" :class="notification.isError ? 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'">
              {{ notification.text }}
            </div>
          </transition>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const { t } = useI18n();

const form = ref({
  name: '',
  phone: '',
  message: ''
});

const loading = ref(false);
const notification = ref({ text: '', isError: false });

const submitForm = async () => {
  if (!form.value.name || !form.value.phone || !form.value.message) {
    notification.value = { text: t('contact.notifications.emptyFields'), isError: true };
    autoClearNotification();
    return;
  }

  loading.value = true;
  notification.value.text = '';

  try {
    const res = await $fetch('/api/send-message', {
      method: 'POST',
      body: form.value
    });
    
    notification.value = { text: t('contact.notifications.success'), isError: false };
    form.value = { name: '', phone: '', message: '' }; 
  } catch (err) {
    notification.value = { text: t('contact.notifications.serverError'), isError: true };
  } finally {
    loading.value = false;
    autoClearNotification();
  }
};

const autoClearNotification = () => {
  setTimeout(() => {
    notification.value = { text: '', isError: false };
  }, 4000);
};

// سئوی متصل به i18n
useHead({
  title: computed(() => t('contact.seo.title'))
});
</script>