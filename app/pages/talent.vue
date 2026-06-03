<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-slate-200 py-20 px-4 transition-colors duration-500 flex items-center justify-center relative overflow-hidden">
    
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiNmZmYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')] opacity-20"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

    <div class="w-full max-w-3xl relative z-10">
      
      <div v-if="!user" class="bg-white/90 dark:bg-[#090e1a]/90 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-10 md:p-16 rounded-[3rem] text-center shadow-2xl">
        <div class="w-24 h-24 bg-blue-50 dark:bg-[#0f172a] rounded-full flex items-center justify-center text-5xl mx-auto mb-8">🧠</div>
        <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">سیستم استعدادیابی هوشمند</h2>
        <p class="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed text-lg">برای شروع آنالیزِ ذهن و دریافت نقشه راه شغلی، نیاز به احراز هویت است.</p>
        <NuxtLink to="/login" class="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-cyan-500 text-white dark:text-black rounded-2xl font-black transition-all hover:scale-105 hover:shadow-xl dark:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          ورود به پردازش‌گر
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </NuxtLink>
      </div>

      <template v-else>
        <div v-if="!showResult && !isAnalyzing" class="bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl relative group">
          
          <div class="flex justify-between items-center mb-10">
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-widest">[ QUESTION_STEP: 0{{ currentStep + 1 }} ]</span>
            <div class="w-1/2 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-blue-500 dark:bg-cyan-500 transition-all duration-500" :style="{ width: progressPercentage + '%' }"></div>
            </div>
          </div>

          <h2 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-12 text-center leading-tight">
            {{ questions[currentStep].text }}
          </h2>

          <div class="grid gap-4">
            <button v-for="(opt, i) in options" :key="i" @click="answer(opt.score)" 
                    class="relative py-5 px-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 font-bold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-slate-900 flex items-center justify-between group/btn">
              <span>{{ opt.text }}</span>
              <span class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 group-hover/btn:border-cyan-500 flex items-center justify-center transition-colors">
                <span class="w-2 h-2 rounded-full bg-transparent group-hover/btn:bg-cyan-500"></span>
              </span>
            </button>
          </div>
        </div>

        <div v-else-if="isAnalyzing" class="text-center py-20">
          <div class="relative w-32 h-32 mx-auto mb-10">
            <div class="absolute inset-0 border-4 border-slate-200 dark:border-slate-800 rounded-full"></div>
            <div class="absolute inset-0 border-4 border-blue-600 dark:border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
            <div class="absolute inset-0 flex items-center justify-center text-5xl">⚡</div>
          </div>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white animate-pulse">در حال پردازش نقشه ذهنی...</h2>
        </div>

        <div v-else class="bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 p-10 md:p-16 rounded-[3rem] shadow-2xl text-center">
          <div class="relative w-48 h-48 mx-auto mb-10">
            <svg viewBox="0 0 100 100" class="w-full h-full animate-[spin_20s_linear_infinite]">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" class="text-slate-100 dark:text-slate-900" stroke-width="2" />
              <path :d="radarPath" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" stroke-width="2" />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center text-4xl font-black text-blue-600 dark:text-white">{{ finalScore }}%</div>
          </div>
          
          <h2 class="text-3xl font-black text-slate-900 dark:text-white mb-6">{{ finalResult.title }}</h2>
          <p class="text-slate-500 dark:text-slate-400 leading-loose mb-10 text-justify">{{ finalResult.desc }}</p>
          
          <NuxtLink to="/dashboard" class="px-10 py-4 bg-slate-900 dark:bg-cyan-500 text-white dark:text-black rounded-2xl font-black transition-all hover:scale-105">
            ورود به داشبورد شخصی
          </NuxtLink>
        </div>
      </template>

    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const currentStep = ref(0)
const isAnalyzing = ref(false)
const showResult = ref(false)
const scores = ref({ logic: 0, creative: 0, mechanical: 0 })
const finalScore = ref(0)
const finalResult = ref({})

const options = [
  { text: 'بله، کاملاً', score: 2 },
  { text: 'تا حدودی', score: 1 },
  { text: 'خیر', score: 0 }
]

const questions = [
  { text: "آیا حل مسائل پیچیده منطقی شما را هیجان‌زده می‌کند؟", cat: "logic" },
  { text: "آیا در خلق ایده‌های جدید و متفاوت پیش‌قدم هستید؟", cat: "creative" },
  { text: "آیا به باز کردن گجت‌ها و دیدن قطعات داخلی علاقه دارید؟", cat: "mechanical" },
  // ... سایر سوالات
]

const progressPercentage = computed(() => (currentStep.value / questions.length) * 100)

const answer = (score) => {
  const cat = questions[currentStep.value].cat
  scores.value[cat] += score
  if (currentStep.value < questions.length - 1) currentStep.value++
  else calculateResult()
}

const calculateResult = () => {
  isAnalyzing.value = true
  setTimeout(() => {
    // منطق نتیجه‌گیری
    finalScore.value = 85 // نمونه
    finalResult.value = { title: "مهندس سیستم‌های هوشمند", desc: "..." }
    isAnalyzing.value = false
    showResult.value = true
  }, 2500)
}
</script>