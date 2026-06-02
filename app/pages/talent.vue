<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-500 py-12 px-4 relative overflow-hidden flex items-center justify-center" dir="rtl">
    
    <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

    <div class="w-full max-w-4xl relative z-10">
      
      <div v-if="!user" class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-white/40 dark:border-gray-700 w-full max-w-2xl mx-auto text-center mt-10">
        <div class="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">🔒</div>
        <h2 class="text-2xl md:text-3xl font-black mb-4 text-gray-800 dark:text-white">ورود برای شروع استعدادیابی</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-medium">
          برای اینکه بتوانیم نقشه شناختی ذهن شما را تحلیل کرده و نتیجه را برای همیشه در پروفایل اختصاصی شما ذخیره کنیم، لطفاً ابتدا وارد حساب کاربری خود شوید.
        </p>
        <NuxtLink to="/login" class="inline-flex px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold transition-all shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] transform hover:-translate-y-1">
          ورود / ثبت‌نام در سایت
        </NuxtLink>
      </div>

      <template v-else>
        
        <div class="mb-10 text-center transition-all duration-500" v-if="!showResult && !isAnalyzing">
          <h1 class="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-3">استعدادیاب <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">هوشمند</span></h1>
          <p class="text-gray-500 dark:text-gray-400 font-medium mb-8">به غریزه خود اعتماد کنید و سریع پاسخ دهید.</p>
          
          <div class="max-w-xl mx-auto">
            <div class="flex justify-between text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 px-2">
              <span>سوال {{ currentStep + 1 }} از {{ questions.length }}</span>
              <span>{{ Math.round(progressPercentage) }}%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden shadow-inner">
              <div class="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 ease-out" :style="{ width: progressPercentage + '%' }"></div>
            </div>
          </div>
        </div>

        <div class="relative min-h-[400px] flex items-center justify-center">
          <Transition name="slide-fade" mode="out-in">
            
            <div v-if="!showResult && !isAnalyzing" :key="currentStep" class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-white/40 dark:border-gray-700 w-full max-w-3xl mx-auto">
              
              <h2 class="text-2xl md:text-3xl font-bold leading-relaxed mb-10 text-gray-800 dark:text-white text-center h-20 flex items-center justify-center">
                {{ questions[currentStep].text }}
              </h2>
              
              <div class="space-y-4">
                <button @click="answer(2)" class="group w-full py-5 px-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-200 font-bold text-lg transition-all duration-300 transform active:scale-[0.98] flex items-center justify-between">
                  <span>بله، کاملاً</span>
                  <span class="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-blue-500 group-hover:bg-blue-500 flex items-center justify-center transition-colors">
                    <svg class="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                </button>
                
                <button @click="answer(1)" class="group w-full py-5 px-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-gray-700 dark:text-gray-200 font-bold text-lg transition-all duration-300 transform active:scale-[0.98] flex items-center justify-between">
                  <span>تا حدودی</span>
                  <span class="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-indigo-400 group-hover:bg-indigo-400 transition-colors"></span>
                </button>
                
                <button @click="answer(0)" class="group w-full py-5 px-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold text-lg transition-all duration-300 transform active:scale-[0.98] flex items-center justify-between">
                  <span>خیر</span>
                  <span class="w-4 h-4 font-bold text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
                </button>
              </div>
            </div>

            <div v-else-if="isAnalyzing" key="analyzing" class="w-full flex flex-col items-center justify-center text-center py-20">
               <div class="relative w-28 h-28 mb-8">
                <div class="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
                <div class="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                <div class="absolute inset-0 flex items-center justify-center text-4xl">🧠</div>
              </div>
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2 animate-pulse">در حال تحلیل و ثبت نتیجه در پنل...</h2>
              <p class="text-gray-500 dark:text-gray-400 font-medium">لطفاً چند لحظه منتظر بمانید</p>
            </div>

            <div v-else key="result" class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 w-full animate-fade-in">
              <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl font-black mb-3 text-gray-800 dark:text-white">نقشه شناختی ذهن شما</h2>
                <p class="text-gray-500 dark:text-gray-400 font-medium">بر اساس تحلیل تخصصی پاسخ‌های شما، نیمرخ استعدادی زیر به دست آمد:</p>
              </div>
              
              <div class="grid lg:grid-cols-2 gap-12 items-center mb-6">
                
                <div class="relative w-full max-w-[320px] mx-auto aspect-square drop-shadow-2xl bg-gray-50 dark:bg-gray-900/50 rounded-full p-4 border border-gray-100 dark:border-gray-700/50">
                  <svg viewBox="0 0 300 300" class="w-full h-full">
                    <polygon points="150,50 236.6,200 63.4,200" fill="none" stroke="currentColor" stroke-width="1" class="text-gray-200 dark:text-gray-600" />
                    <polygon points="150,83.3 207.7,183.3 92.3,183.3" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" class="text-gray-300 dark:text-gray-500" />
                    <polygon points="150,116.6 178.8,166.6 121.2,166.6" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2" class="text-gray-300 dark:text-gray-500" />
                    
                    <line x1="150" y1="150" x2="150" y2="50" stroke="currentColor" class="text-gray-200 dark:text-gray-600" />
                    <line x1="150" y1="150" x2="236.6" y2="200" stroke="currentColor" class="text-gray-200 dark:text-gray-600" />
                    <line x1="150" y1="150" x2="63.4" y2="200" stroke="currentColor" class="text-gray-200 dark:text-gray-600" />
                    
                    <polygon :points="radarPoints" fill="rgba(56,189,248,0.4)" stroke="#3b82f6" stroke-width="3" class="transition-all duration-1000 ease-out shadow-glow" />
                    
                    <circle :cx="logicPoint.x" :cy="logicPoint.y" r="5" fill="#3b82f6" class="shadow-glow" />
                    <circle :cx="creativePoint.x" :cy="creativePoint.y" r="5" fill="#a855f7" class="shadow-glow" />
                    <circle :cx="mechanicalPoint.x" :cy="mechanicalPoint.y" r="5" fill="#f97316" class="shadow-glow" />
                    
                    <text x="150" y="35" text-anchor="middle" class="text-xs md:text-sm font-black fill-blue-600 dark:fill-blue-400">منطق و کدنویسی</text>
                    <text x="260" y="225" text-anchor="middle" class="text-xs md:text-sm font-black fill-purple-600 dark:fill-purple-400">هنر و خلاقیت</text>
                    <text x="40" y="225" text-anchor="middle" class="text-xs md:text-sm font-black fill-orange-600 dark:fill-orange-400">سیستم و رباتیک</text>
                  </svg>
                </div>

                <div class="text-right">
                  <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm mb-6 border border-blue-100 dark:border-blue-800">
                    <span class="animate-pulse">✨</span> تیپ شخصیتی شما:
                  </div>
                  
                  <h3 class="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-4 leading-tight">{{ finalResult.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-6 leading-loose text-justify font-medium">
                    {{ finalResult.desc }}
                  </p>
                  
                  <div v-if="saveMessage" class="mb-8 p-4 rounded-xl border flex items-center gap-3 transition-colors"
                       :class="isSuccessDb ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400'">
                     <span class="text-xl">{{ isSuccessDb ? '✅' : '❌' }}</span>
                     <span class="font-bold text-sm">{{ saveMessage }}</span>
                  </div>
                  
                  <div class="flex flex-col sm:flex-row items-center gap-4">
                    <NuxtLink to="/dashboard" class="w-full sm:w-auto inline-flex justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)]">
                      مشاهده نتیجه در پنل من
                    </NuxtLink>
                    <button @click="resetTest" class="w-full sm:w-auto text-gray-500 hover:text-gray-800 dark:hover:text-white font-bold text-sm px-6 py-4 rounded-2xl border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all">
                      تکرار مجدد آزمون
                    </button>
                  </div>
                </div>
              </div>
              
            </div>

          </Transition>
        </div>
      </template>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

useHead({ title: 'آزمون استعدادیابی هوشمند | هوش‌پرداز' })

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const currentStep = ref(0);
const isAnalyzing = ref(false);
const showResult = ref(false);
const saveMessage = ref('');
const isSuccessDb = ref(false); // متغیر جدید برای تشخیص رنگ باکس پیام

const scores = ref({
  logic: 0,
  creative: 0,
  mechanical: 0
});

const questions = [
  { text: "آیا از حل معماهای پیچیده و مسائل منطقی لذت می‌برید؟", cat: "logic" },
  { text: "آیا در انتخاب رنگ لباس یا چیدمان اتاق دقت زیادی دارید؟", cat: "creative" },
  { text: "آیا کنجکاو هستید که بدانید وسایل الکترونیکی چگونه کار می‌کنند؟", cat: "mechanical" },
  { text: "آیا پیدا کردن الگوها و نظم در اطلاعات برای شما جذاب است؟", cat: "logic" },
  { text: "آیا به ظاهر و گرافیک اپلیکیشن‌ها بیشتر از کارکردشان دقت می‌کنید؟", cat: "creative" },
  { text: "آیا از ساختن کاردستی‌های متحرک یا کار با ابزارآلات لذت می‌برید؟", cat: "mechanical" },
  { text: "آیا یادگیری قوانین یک زبان جدید برای شما شیرین است؟", cat: "logic" },
  { text: "آیا به عکاسی و ویرایش خلاقانه تصاویر علاقه دارید؟", cat: "creative" },
  { text: "آیا تماشای ویدیوهای سرهم کردن موتورها و گجت‌ها را دوست دارید؟", cat: "mechanical" },
  { text: "آیا برای کارهای روزانه خود برنامه‌ریزی مرحله‌به‌مرحله می‌کنید؟", cat: "logic" },
  { text: "آیا به طراحی کاراکترها یا خلق داستان‌های جدید فکر می‌کنید؟", cat: "creative" },
  { text: "آیا از سرهم کردن پازل‌های سه‌بعدی یا لگوهای پیچیده لذت می‌برید؟", cat: "mechanical" }, // غلط املایی اینجا برطرف شد
  { text: "آیا در بازی‌های کامپیوتری، بازی‌های استراتژیک را ترجیح می‌دهید؟", cat: "logic" },
  { text: "آیا انتخاب فونت مناسب برای ارائه‌های درسی برایتان مهم است؟", cat: "creative" },
  { text: "آیا تا به حال سعی کرده‌اید یک وسیله خراب را خودتان تعمیر کنید؟", cat: "mechanical" }
];

const progressPercentage = computed(() => {
  return (currentStep.value / questions.length) * 100;
});

const logicPoint = computed(() => {
  const r = Math.max(scores.value.logic * 10, 5);
  return { x: 150, y: 150 - r };
});

const creativePoint = computed(() => {
  const r = Math.max(scores.value.creative * 10, 5);
  return { x: 150 + r * 0.866, y: 150 + r * 0.5 };
});

const mechanicalPoint = computed(() => {
  const r = Math.max(scores.value.mechanical * 10, 5);
  return { x: 150 - r * 0.866, y: 150 + r * 0.5 };
});

const radarPoints = computed(() => {
  return `${logicPoint.value.x},${logicPoint.value.y} ${creativePoint.value.x},${creativePoint.value.y} ${mechanicalPoint.value.x},${mechanicalPoint.value.y}`;
});

const answer = (points) => {
  const currentCat = questions[currentStep.value].cat || 'mechanical';
  scores.value[currentCat] += points;
  
  if (currentStep.value < questions.length - 1) {
    setTimeout(() => {
      currentStep.value++;
    }, 150);
  } else {
    setTimeout(() => {
      // فقط متغیر لودینگ را فعال کن و بقیه کار را به تابع بسپار
      isAnalyzing.value = true;
      calculateAndSaveResult();
    }, 150);
  }
};

const finalResult = ref({});

const calculateAndSaveResult = async () => {
  const maxScore = Math.max(scores.value.logic, scores.value.creative, scores.value.mechanical);
  
  if (maxScore === scores.value.logic) {
    finalResult.value = {
      title: "تحلیل‌گر و معمار سیستم (برنامه‌نویس)",
      desc: "پاسخ‌های شما نشان می‌دهد ذهن شما به شدت ساختاریافته، تحلیلی و منطقی است. شما از کشف الگوها در میان اطلاعات پیچیده لذت می‌برید. دنیای برنامه‌نویسی و هوش مصنوعی دقیقاً جایی است که می‌توانید در آن بدرخشید."
    };
  } else if (maxScore === scores.value.creative) {
    finalResult.value = {
      title: "خالق بصری و دیزاینر (UI/UX)",
      desc: "شما دنیا را از دریچه زیبایی، فرم و کاربردپذیری می‌بینید. نیمکره راست ذهن شما به شدت فعال است. طراحی رابط و تجربه کاربری مسیری است که ترکیب هنر و تکنولوژی را برای شما به ارمغان می‌آورد."
    };
  } else {
    finalResult.value = {
      title: "مهندس عمل‌گرا و خالق سیستم‌ها",
      desc: "شما یک مهندس ذاتی هستید! کنجکاوی شما برای درک «نحوه کارکرد اشیاء» و علاقه به خلق چیزهای ملموس، نقطه قوت شماست. ترکیب کد با سخت‌افزار، IoT و رباتیک شما را به وجد خواهد آورد."
    };
  }

  // ایجاد مکث نمایشی ۲ ثانیه‌ای برای دیدن انیمیشن چرخشی (UX بهتر)
  await new Promise(resolve => setTimeout(resolve, 2000));

  try {
    const totalScoreRaw = scores.value.logic + scores.value.creative + scores.value.mechanical;
    const finalScorePercentage = Math.round((totalScoreRaw / 30) * 100);

    // ارسال قطعی به سوپابیس
    const { error } = await supabase
      .from('test_results')
      .insert([
        { 
          user_id: user.value.id, 
          score: finalScorePercentage || 0 
        }
      ]);

    if (error) throw error;
    
    // اگر موفقیت آمیز بود
    isSuccessDb.value = true;
    saveMessage.value = "نتیجه آزمون و نمودار شما با موفقیت در داشبورد ثبت شد.";
    
  } catch (err) {
    // اگر خطا داشت
    console.error('خطا در ذخیره‌سازی:', err);
    isSuccessDb.value = false;
    saveMessage.value = "آزمون تمام شد، اما اجازه ذخیره نتیجه در دیتابیس داده نشد.";
  } finally {
    // فقط وقتی که تکلیف دیتابیس (موفق یا ناموفق) مشخص شد، صفحه نتایج را نشان بده
    isAnalyzing.value = false;
    showResult.value = true;
  }
};

const resetTest = () => {
  showResult.value = false;
  isAnalyzing.value = false;
  currentStep.value = 0;
  saveMessage.value = '';
  scores.value = { logic: 0, creative: 0, mechanical: 0 };
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.shadow-glow {
  filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
}
</style>