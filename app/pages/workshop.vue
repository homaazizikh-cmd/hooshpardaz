<template>
  <div class="min-h-screen bg-[#020617] relative overflow-hidden font-sans pt-24 pb-20 selection:bg-brand-accent1 selection:text-white flex flex-col justify-center">
    
    <div class="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-accent1/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none animate-pulse" style="animation-duration: 4s;"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none animate-pulse" style="animation-duration: 5s;"></div>
    
    <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>

    <div class="container mx-auto px-5 relative z-10">
      
      <div class="max-w-3xl mx-auto text-center mb-10 md:mb-14 pt-8">
        <div class="flex justify-center items-center gap-3 mb-6">
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            در حال ثبت‌نام
          </div>
          <div class="px-3 py-1 rounded-full bg-brand-accent1/10 border border-brand-accent1/20 text-brand-accent1 text-xs font-bold backdrop-blur-md">
            🔥 ظرفیت محدود
          </div>
        </div>

        <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.3] md:leading-tight">
          ورکشاپ آنلاین <br class="md:hidden" />
          <span class="relative inline-block mt-2 md:mt-0">
            <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent1 via-blue-400 to-purple-500">جادوی Flow</span>
            <div class="absolute bottom-1 left-0 w-full h-3 bg-brand-accent1/30 blur-md -z-10"></div>
          </span> 
          و ساخت ویدیو
        </h1>
        
        <p class="text-base md:text-lg text-slate-300 md:leading-relaxed max-w-2xl mx-auto mb-8 px-2">
          بدون نیاز به سیستم‌های سنگین! در این ورکشاپ تخصصی یاد می‌گیری چطور با Flow ویدیوهای چشم‌نواز بسازی و مخاطب رو در ۳ ثانیه اول میخکوب کنی.
        </p>

        <div class="flex flex-wrap justify-center gap-3 text-sm">
          <div class="bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-slate-200 flex items-center gap-2">
            <span>⏱</span> ۲ ساعت آموزش آنلاین
          </div>
          <div class="bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-slate-200 flex items-center gap-2">
            <span>💻</span> کاملاً پروژه‌محور
          </div>
          <div class="bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-slate-200 flex items-center gap-2">
            <span>🎁</span> دسترسی به فایل‌های تمرینی
          </div>
        </div>
      </div>

      <div class="max-w-2xl mx-auto">
        <div class="relative rounded-[2rem] p-[1px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_80px_-20px_rgba(56,189,248,0.15)] transition-all hover:shadow-[0_0_100px_-20px_rgba(56,189,248,0.25)]">
          <div class="bg-[#0f172a]/80 backdrop-blur-2xl rounded-[2rem] p-6 md:p-10">
            
            <div v-if="isSuccess" class="py-12 text-center animate-fade-in">
              <div class="w-24 h-24 mx-auto bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 class="text-3xl font-black text-white mb-4">صندلی شما رزرو شد! 🎉</h2>
              <p class="text-slate-300 mb-8 text-lg">اطلاعات شما با موفقیت ثبت شد. لینک ورود به ورکشاپ به‌زودی برای شما پیامک خواهد شد.</p>
              
              <NuxtLink to="https://instagram.com/danaverse.ir" target="_blank" class="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
                <span>📱</span> پیج داناورس را دنبال کنید
              </NuxtLink>
            </div>

            <form v-else @submit.prevent="submitWorkshopForm" class="space-y-6">
              
              <div v-if="isError" class="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl text-sm font-bold text-center animate-shake">
                {{ message }}
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-slate-300 ml-1">نام و نام خانوادگی <span class="text-red-400">*</span></label>
                  <input v-model="form.fullName" type="text" required class="w-full bg-[#1e293b]/50 border border-white/10 text-white rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent1 focus:border-transparent focus:outline-none transition-all placeholder:text-slate-500" placeholder="مثال: مهدی رحیمی">
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-slate-300 ml-1">شماره موبایل (واتساپ/تلگرام) <span class="text-red-400">*</span></label>
                  <input v-model="form.phone" type="tel" required class="w-full bg-[#1e293b]/50 border border-white/10 text-white rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent1 focus:border-transparent focus:outline-none transition-all placeholder:text-slate-500 text-left font-sans" placeholder="0912..." dir="ltr">
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-slate-300 ml-1">ایمیل معتبر <span class="text-red-400">*</span></label>
                  <input v-model="form.email" type="email" required class="w-full bg-[#1e293b]/50 border border-white/10 text-white rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent1 focus:border-transparent focus:outline-none transition-all placeholder:text-slate-500 text-left font-sans" placeholder="hello@example.com" dir="ltr">
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-slate-300 ml-1">حوزه فعالیت شما</label>
                  <select v-model="form.occupation" required class="w-full bg-[#1e293b]/50 border border-white/10 text-white rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent1 focus:border-transparent focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected class="bg-slate-800 text-slate-400">انتخاب کنید...</option>
                    <option value="تولیدکننده محتوا" class="bg-slate-800">تولیدکننده محتوا</option>
                    <option value="ادمین اینستاگرام" class="bg-slate-800">ادمین اینستاگرام</option>
                    <option value="تدوینگر" class="bg-slate-800">تدوینگر</option>
                    <option value="صاحب کسب‌وکار" class="bg-slate-800">صاحب کسب‌وکار</option>
                    <option value="علاقه‌مند" class="bg-slate-800">فقط علاقه‌مندم</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-slate-300 ml-1">سطح آشنایی با تدوین</label>
                  <select v-model="form.level" required class="w-full bg-[#1e293b]/50 border border-white/10 text-white rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent1 focus:border-transparent focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected class="bg-slate-800 text-slate-400">انتخاب کنید...</option>
                    <option value="مبتدی" class="bg-slate-800">مبتدی (تازه می‌خوام شروع کنم)</option>
                    <option value="متوسط" class="bg-slate-800">متوسط (کار با نرم‌افزارها رو بلدم)</option>
                    <option value="حرفه‌ای" class="bg-slate-800">حرفه‌ای (می‌خوام Flow یاد بگیرم)</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-slate-300 ml-1">بزرگترین چالش فعلی شما؟</label>
                  <select v-model="form.challenge" required class="w-full bg-[#1e293b]/50 border border-white/10 text-white rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent1 focus:border-transparent focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected class="bg-slate-800 text-slate-400">انتخاب کنید...</option>
                    <option value="کمبود ایده" class="bg-slate-800">کمبود ایده و خلاقیت</option>
                    <option value="سیستم ضعیف" class="bg-slate-800">کند بودن سیستم و رندر</option>
                    <option value="افکت‌های سخت" class="bg-slate-800">سخت بودن ساخت افکت‌های خفن</option>
                    <option value="کمبود وقت" class="bg-slate-800">زمان‌بر بودن پروسه تدوین</option>
                  </select>
                </div>

              </div>

              <div class="pt-4">
                <button 
                  type="submit" 
                  :disabled="isLoading"
                  class="group relative w-full flex justify-center items-center gap-3 text-white font-black text-lg py-5 rounded-2xl overflow-hidden transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
                >
                  <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-brand-accent1 to-purple-600"></div>
                  <div class="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shine"></div>
                  
                  <span class="relative z-10 flex items-center gap-2">
                    <svg v-if="isLoading" class="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span v-else>🚀 رزرو صندلی در ورکشاپ</span>
                  </span>
                </button>
                <p class="text-center text-slate-500 text-xs mt-4 flex items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  اطلاعات شما نزد داناورس کاملاً محفوظ است
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useSeoMeta({
  title: 'ورکشاپ آنلاین جادوی Flow | داناورس',
  description: 'آموزش صفر تا صد تدوین با Flow. ظرفیت محدود! همین حالا رزرو کنید.',
  ogImage: '/images/workshop-preview.jpg', 
  themeColor: '#020617'
})

const form = ref({
  fullName: '',
  phone: '',
  email: '',
  level: '',
  occupation: '',
  challenge: '',
  referral: 'لینک مستقیم'
})

const isLoading = ref(false)
const isSuccess = ref(false) 
const message = ref('')
const isError = ref(false)

const submitWorkshopForm = async () => {
  isLoading.value = true
  message.value = ''
  isError.value = false

  // 🔴 شروع فیلترها و اعتبارسنجی (Validation)
  // ۱. بررسی شماره موبایل (باید با 09 شروع شود و ۱۱ رقم باشد)
  const phoneRegex = /^09[0-9]{9}$/
  if (!phoneRegex.test(form.value.phone)) {
    isError.value = true
    message.value = '❌ شماره موبایل نامعتبر است! لطفاً ۱۱ رقم همراه با صفر وارد کنید (مثال: 09123456789).'
    isLoading.value = false
    return // توقف عملیات، فرم ارسال نمی‌شود
  }

  // ۲. بررسی صحت فرمت ایمیل
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(form.value.email)) {
    isError.value = true
    message.value = '❌ فرمت ایمیل نامعتبر است! لطفاً یک ایمیل صحیح وارد کنید.'
    isLoading.value = false
    return // توقف عملیات، فرم ارسال نمی‌شود
  }
  // 🟢 پایان اعتبارسنجی

  try {
    const persianDate = new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit'
    }).format(new Date())

    await $fetch('/api/workshop-register', {
      method: 'POST',
      body: {
        ...form.value,
        registration_date: persianDate
      }
    })

    isSuccess.value = true 
    
    form.value = { 
      fullName: '', phone: '', email: '', 
      level: '', occupation: '', challenge: '', referral: '' 
    }
    
  } catch (err) {
    console.error(err)
    isError.value = true
    
    // نمایش ارور دریافتی از سمت سرور
    if(err.data && err.data.statusMessage) {
      message.value = err.data.statusMessage
    } else {
      message.value = 'ارتباط با سرور برقرار نشد. لطفاً اینترنت خود را بررسی کنید.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@keyframes shine { 100% { left: 200%; } }
.animate-shine { animation: shine 1.5s ease-in-out infinite; }
@keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } }
.animate-shake { animation: shake 0.4s ease-in-out; }
</style>