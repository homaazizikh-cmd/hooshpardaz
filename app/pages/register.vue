<template>
  <div dir="rtl" class="min-h-screen bg-[#050505] flex items-center justify-center pt-28 pb-20 px-4 relative overflow-hidden font-sans text-white">
    
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

    <form @submit.prevent="submitForm" class="w-full max-w-xl relative z-10">
      <div class="bg-[#111]/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
        
        <div class="text-center mb-10">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-inner">
            <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-black mb-3">ثبت‌نام در آکادمی هوش‌پرداز</h2>
          <p class="text-gray-400 text-sm md:text-base font-light">مسیر تخصص شما از اینجا آغاز می‌شود.</p>
        </div>
        
        <div class="space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2 mr-1">نام</label>
              <input v-model="form.name" type="text" placeholder="مثال: علی" class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2 mr-1">نام خانوادگی</label>
              <input v-model="form.surname" type="text" placeholder="مثال: محمدی" class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors" required />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2 mr-1">شماره تماس (بدون صفر اول)</label>
            <input v-model="form.phone" type="tel" dir="ltr" placeholder="912XXX" class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors text-left" required />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2 mr-1">سن</label>
              <input v-model="form.age" type="number" placeholder="مثال: 24" class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2 mr-1">تاریخ ثبت‌نام</label>
              <input v-model="form.date" type="date" class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors color-scheme-dark" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2 mr-1">نام مدرسه یا دانشگاه</label>
            <input v-model="form.institution" type="text" placeholder="محل تحصیل فعلی یا فارغ‌التحصیلی" class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors" required />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2 mr-1">دوره آموزشی مورد نظر</label>
            <div class="relative">
              <select v-model="form.course" class="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors appearance-none cursor-pointer" required>
                <option value="" disabled selected class="bg-gray-900 text-gray-500">انتخاب دوره آموزشی...</option>
                <option v-for="course in courses" :key="course" :value="course" class="bg-gray-800 text-white">{{ course }}</option>
              </select>
              <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <div v-if="form.course" class="relative mt-2 overflow-hidden rounded-2xl">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div class="relative flex items-center justify-between p-5 border border-blue-500/30 rounded-2xl bg-[#111]/50 backdrop-blur-sm">
              <span class="text-sm font-bold text-blue-400">مبلغ شهریه دوره:</span>
              <span class="text-xl md:text-2xl font-black text-white tracking-wider">{{ calculatedAmount }}</span>
            </div>
          </div>
        </div>

        <div v-if="message.text" class="mt-6 p-4 rounded-2xl text-sm font-bold text-center border" :class="message.isError ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-green-500/10 border-green-500/30 text-green-400'">
          {{ message.text }}
        </div>

        <button type="submit" :disabled="isLoading" class="w-full mt-8 relative group overflow-hidden rounded-2xl">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="relative py-4 px-6 flex items-center justify-center gap-2 font-bold text-lg text-white">
            <span v-if="isLoading" class="animate-spin text-2xl">↻</span>
            <span v-else>تکمیل ثبت‌نام و پرداخت</span>
          </div>
        </button>

      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// لیست کامل دوره‌ها
const courses = [
  'پایتون مقدماتی', 'پایتون پیشرفته', 'پایتون کودکان',
  'ابزارهای هوش مصنوعی', 'ماشین لرنینگ',
  'فتوشاپ (Photoshop)', 'ایلاستریتور (Illustrator)', 'ایندیزاین (InDesign)', 'تصویرسازی اسکیچ',
  'مهارت‌های هفت‌گانه (ICDL)', 'رباتیک بزرگسال', 'اسکرچ (Scratch)', 'رباتیک دانش‌آموزی'
];

// دیتابیس قیمت‌ها
const priceList = {
  'پایتون مقدماتی': '۸,۰۰۰,۰۰۰',
  'پایتون پیشرفته': '۱۰,۰۰۰,۰۰۰',
  'پایتون کودکان': '۶,۵۰۰,۰۰۰',
  'ابزارهای هوش مصنوعی': '۷,۰۰۰,۰۰۰',
  'ماشین لرنینگ': '۱۲,۰۰۰,۰۰۰',
  'فتوشاپ (Photoshop)': '۷,۰۰۰,۰۰۰',
  'ایلاستریتور (Illustrator)': '۷,۰۰۰,۰۰۰',
  'ایندیزاین (InDesign)': '۶,۵۰۰,۰۰۰',
  'تصویرسازی اسکیچ': '۶,۰۰۰,۰۰۰',
  'مهارت‌های هفت‌گانه (ICDL)': '۴,۵۰۰,۰۰۰',
  'رباتیک بزرگسال': '۱۲,۰۰۰,۰۰۰',
  'اسکرچ (Scratch)': '۵,۰۰۰,۰۰۰',
  'رباتیک دانش‌آموزی': '۷,۵۰۰,۰۰۰'
};

const form = ref({
  name: '',
  surname: '',
  phone: '',
  age: '',
  date: '',
  course: '',
  institution: ''
});

const isLoading = ref(false);
const message = ref({ text: '', isError: false });

// محاسبه اتوماتیک مبلغ
const calculatedAmount = computed(() => {
  return form.value.course ? `${priceList[form.value.course]} تومان` : '';
});

const submitForm = async () => {
  isLoading.value = true;
  message.value.text = '';

  try {
    // ارسال دیتای فرم به همراه قیمت محاسبه شده به بک‌اند
    const response = await $fetch('/api/register', {
      method: 'POST',
      body: {
        ...form.value,
        price: priceList[form.value.course] // قیمت هم ارسال می‌شود
      }
    });

    // در صورت موفقیت‌آمیز بودن
    message.value = { text: 'ثبت‌نام شما با موفقیت در سیستم ثبت شد. به زودی برای پرداخت با شما تماس می‌گیریم.', isError: false };
    
    // پاک کردن فرم بعد از ثبت موفق (اختیاری)
    // form.value = { name: '', surname: '', phone: '', age: '', date: '', course: '', institution: '' };
    
  } catch (error) {
    message.value = { text: 'خطایی در ارتباط با سرور رخ داد. لطفاً مجدداً تلاش کنید.', isError: true };
  } finally {
    isLoading.value = false;
  }
};

useHead({
  title: 'ثبت نام | آکادمی هوش پرداز'
})
</script>

<style scoped>
/* حل مشکل رنگ آیکون تقویم در حالت دارک مود */
.color-scheme-dark {
  color-scheme: dark;
}
</style>