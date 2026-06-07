<template>
  <div class="font-sans" dir="rtl">
    <div class="fixed bottom-6 right-6 z-[9999]">
      <button 
        @click="toggleChat" 
        class="w-16 h-16 bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/20 relative group overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <svg v-if="!isOpen" class="w-8 h-8 text-white relative z-10 animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <svg v-else class="w-7 h-7 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <Transition name="window-fade">
      <div 
        v-if="isOpen" 
        :class="isMatrixMode ? 'matrix-theme' : 'bg-white/95 dark:bg-slate-950/90 border-slate-200/80 dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]'"
        class="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 w-auto sm:w-[400px] h-[calc(100vh-130px)] sm:h-[580px] max-h-[650px] backdrop-blur-xl border rounded-3xl flex flex-col overflow-hidden z-[9999] transition-all duration-500"
      >
        
        <div class="p-4 bg-gradient-to-b from-slate-50 to-transparent dark:from-white/5 dark:to-transparent border-b border-slate-100 dark:border-white/10 flex items-center justify-between transition-colors">
          <div class="flex items-center gap-3">
            <div class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <div>
              <h3 class="text-slate-800 dark:text-white font-bold text-sm tracking-wide theme-text">دانا | دستیار هوشمند</h3>
              <p class="text-[10px] text-cyan-600 dark:text-cyan-400 font-medium theme-subtext">آنلاین و آماده پاسخگویی</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button @click="toggleVoiceOutput" :class="isVoiceOutputEnabled ? 'text-blue-500' : 'text-slate-400'" class="p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors">
              <svg v-if="isVoiceOutputEnabled" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5 10v4a2 2 0 002 2h2.586l3.707 3.707A1 1 0 0015 19V5a1 1 0 00-1.707-.707L9.586 10H7a2 2 0 00-2 2z" /></svg>
              <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
            </button>
            <button @click="isOpen = false" class="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar scroll-smooth flex flex-col">
          <div class="space-y-4">
            <div v-for="(msg, index) in messages" :key="index" :class="msg.role === 'user' ? 'flex justify-end' : 'flex justify-start animate-fade-in'">
              
              <div v-if="msg.type === 'text'"
                :class="msg.role === 'user' 
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl rounded-tr-none shadow-md' 
                  : 'bg-slate-100 dark:bg-slate-900/90 border border-slate-200/60 dark:border-white/5 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-none theme-bot-msg'"
                class="px-4 py-3 text-sm max-w-[85%] leading-relaxed tracking-wide shadow-sm"
              >
                {{ msg.text }}
              </div>

              <div v-else-if="msg.type === 'widget'" 
                   :class="msg.widgetData.bgClass || 'bg-gradient-to-br from-cyan-500 to-blue-600'"
                   class="w-[85%] rounded-2xl rounded-tl-none p-4 text-white shadow-lg relative overflow-hidden group">
                <div class="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-2xl">{{ msg.widgetData.icon }}</span>
                  <h4 class="font-bold text-base">{{ msg.widgetData.title }}</h4>
                </div>
                <p class="text-xs text-white/90 mb-4 leading-relaxed">{{ msg.widgetData.desc }}</p>
                <a :href="msg.widgetData.link" 
                   :class="msg.widgetData.btnTextClass || 'text-blue-600'"
                   class="block text-center bg-white font-bold py-2 px-4 rounded-xl text-sm hover:scale-[1.02] active:scale-95 transition-transform shadow-md">
                  {{ msg.widgetData.btnText }}
                </a>
              </div>
            </div>
            
            <div v-if="isTyping" class="flex justify-start animate-fade-in">
              <div class="bg-slate-100 dark:bg-slate-900/90 border border-slate-200/60 dark:border-white/5 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 theme-bot-msg">
                <span class="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s] theme-dot"></span>
                <span class="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s] theme-dot"></span>
                <span class="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-bounce theme-dot"></span>
              </div>
            </div>
          </div>

          <div v-show="!isTyping" class="flex flex-wrap gap-2 pt-2 pb-1 animate-fade-in mt-auto">
            <button 
              v-for="chip in quickChips" 
              :key="chip"
              @click="handleQuickReply(chip)"
              class="text-[11px] sm:text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-blue-600/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer shadow-sm text-right leading-relaxed flex-grow-0 theme-chip"
            >
              {{ chip }}
            </button>
          </div>
        </div>

        <div class="p-4 bg-slate-50 dark:bg-transparent border-t border-slate-100 dark:border-white/5 theme-footer">
          <div class="relative flex items-center bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl focus-within:border-blue-500/50 transition-all duration-300 shadow-sm theme-input-box">
            
            <button v-if="speechSupported" @click="toggleVoiceInput" :class="isListening ? 'text-red-500 animate-pulse' : 'text-slate-400 hover:text-blue-500'" class="absolute right-2.5 p-2 rounded-xl transition-colors z-10 cursor-pointer">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>

            <input 
              v-model="userInput" 
              @keyup.enter="sendMessage" 
              :placeholder="isListening ? 'دانا در حال گوش دادن...' : 'سوالی دارید؟ بپرسید...'" 
              class="w-full bg-transparent text-slate-800 dark:text-white py-3.5 pl-14 pr-12 text-sm outline-none placeholder-slate-400 dark:placeholder-slate-500 theme-input"
            >
            <button 
              @click="sendMessage" 
              class="absolute left-2 bg-gradient-to-tr from-blue-600 to-cyan-500 text-white p-2 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              <svg class="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>

      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const isOpen = ref(false);
const userInput = ref('');
const isTyping = ref(false);
const chatContainer = ref(null);
const messages = ref([]);

// منوی سریع گسترده‌تر و حرفه‌ای‌تر
const quickChips = ref([
  '🎯 آزمون استعدادیابی', 
  '🐍 مسترکلاس پایتون', 
  '🤖 بوت‌کمپ AI', 
  '🎮 دنیای کودکان', 
  '🎓 مدرک بین‌المللی', 
  '🎁 دریافت تخفیف',
  '💡 یک دانستنی بگو'
]);

const isMatrixMode = ref(false);
const userName = ref('');
const isVoiceOutputEnabled = ref(false);
const isListening = ref(false);
const speechSupported = ref(false);
let recognition = null;

onMounted(() => {
  const savedName = localStorage.getItem('dana_username');
  if (savedName) userName.value = savedName;

  // هوشمندی در زمان: سلام بر اساس ساعت روز
  const hour = new Date().getHours();
  let timeGreeting = hour < 12 ? 'صبح بخیر' : hour < 18 ? 'عصر بخیر' : 'شب بخیر';
  
  const currentUrl = window.location.href.toLowerCase();
  let greetingMsg = `${timeGreeting}${userName.value ? ' ' + userName.value + ' عزیز' : ''}! من «دانا» هستم. چطور می‌تونم در مسیر یادگیری بهت کمک کنم؟`;
  
  if (currentUrl.includes('python') || currentUrl.includes('ai')) {
    greetingMsg = `${timeGreeting}! در بخش پایتون و هوش مصنوعی هستی. دوره‌های ما کاملاً پروژه‌محوره و تو رو برای بازار کار آماده می‌کنه.`;
  } else if (currentUrl.includes('kids') || currentUrl.includes('scratch')) {
    greetingMsg = `${timeGreeting}! به دنیای شگفت‌انگیز برنامه‌نویسی کودکان خوش اومدی. از کجا شروع کنیم؟`;
  }

  messages.value.push({ role: 'bot', type: 'text', text: greetingMsg });

  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    speechSupported.value = true;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'fa-IR';
    recognition.interimResults = false;
    
    recognition.onresult = (event) => {
      userInput.value = event.results[0][0].transcript;
      isListening.value = false;
      sendMessage();
    };
    recognition.onerror = () => { isListening.value = false; };
    recognition.onend = () => { isListening.value = false; };
  }
});

const toggleChat = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) scrollToBottom();
};

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const toggleVoiceInput = () => {
  if (isListening.value) { recognition.stop(); } 
  else { recognition.start(); isListening.value = true; }
};

const toggleVoiceOutput = () => {
  isVoiceOutputEnabled.value = !isVoiceOutputEnabled.value;
};

const speakText = (text) => {
  if (!isVoiceOutputEnabled.value || !window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fa-IR';
  window.speechSynthesis.speak(utterance);
};

// --- موتور استنتاج پیشرفته (ارتقا یافته به Rich Widgets + مکالمات روزمره) ---
const processBotLogic = (userText) => {
  const t = userText.toLowerCase().trim();

  // ۱. کدهای مخفی (Easter Egg)
  if (t === 'matrix' || t === 'ماتریکس') {
    isMatrixMode.value = !isMatrixMode.value;
    return { type: 'text', text: isMatrixMode.value ? 'پروتکل امنیتی لغو شد. به سیستم مرکزی خوش آمدید!' : 'حالت ماتریکس غیرفعال شد.' };
  }

  if (t.includes('دانستنی') || t.includes('حقیقت')) {
    const facts = [
      'اولین برنامه‌نویس تاریخ یک خانم به نام "آدا لاولیس" بود که در سال ۱۸۴۳ الگوریتمی برای ماشین تحلیلی نوشت!',
      'پایتون اسم خودش رو از مار پایتون نگرفته! بلکه از گروه کمدی بریتانیایی Monty Python الهام گرفته شده.',
      'هوش مصنوعی در واقع از دهه ۱۹۵۰ میلادی وجود داشته و مفهوم جدیدی نیست!'
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    return { type: 'widget', widgetData: { title: 'آیا می‌دانستید؟', desc: randomFact, btnText: 'شروع یادگیری', link: '/learning', icon: '💡', bgClass: 'bg-gradient-to-br from-violet-500 to-fuchsia-600', btnTextClass: 'text-violet-600' } };
  }

  // ۲. حافظه اسمی
  const nameMatch = t.match(/اسم من (.*) (است|هست)/);
  if (nameMatch && nameMatch[1]) {
    const name = nameMatch[1].trim();
    userName.value = name;
    localStorage.setItem('dana_username', name);
    return { type: 'text', text: `باعث افتخارمه ${name} عزیز! اسمت رو به خاطر سپردم. حالا چطور می‌تونم کمکت کنم؟` };
  }

  // ۳. مکالمات روزمره و احوال‌پرسی (اضافه شده)
  const greetings = ['سلام', 'درود', 'وقت بخیر', 'hello', 'hi', 'خسته نباشید'];
  if (greetings.some(word => t.includes(word))) {
    return { type: 'text', text: `سلام! ${userName.value ? userName.value + ' عزیز، ' : ''}خیلی خوش اومدی. چطور می‌تونم امروز راهنماییت کنم؟` };
  }

  const howAreYou = ['خوبی', 'چطوری', 'چه خبر', 'حالت چطوره'];
  if (howAreYou.some(word => t.includes(word))) {
    return { type: 'text', text: 'ممنون! من یک دستیار هوشمندم و همیشه پرانرژی آماده‌ام تا بهت کمک کنم. از کدوم بخش سایت برات بگم؟' };
  }

  const thanks = ['مرسی', 'ممنون', 'تشکر', 'عالی', 'دمت گرم'];
  if (thanks.some(word => t.includes(word))) {
    return { type: 'text', text: 'خواهش می‌کنم! باعث افتخارمه که تونستم کمکت کنم. بازم اگر سوالی داشتی من اینجام.' };
  }

  const help = ['کمک', 'راهنمایی', 'چیکار میتونی بکنی', 'چه کار میکنی'];
  if (help.some(word => t.includes(word))) {
    return { type: 'text', text: 'من می‌تونم درباره دوره‌ها (مثل پایتون، هوش مصنوعی، کودکان)، تست استعدادیابی یا حتی دریافت کد تخفیف راهنماییت کنم. کافیه کلمه‌اش رو برام بنویسی!' };
  }

  // ۴. ویجت‌های تخصصی (دوره‌ها و امکانات)
  if (t.includes('تخفیف')) {
    return { type: 'widget', widgetData: { title: 'هدیه ویژه شما!', desc: 'کد تخفیف ۱۰٪ برای اولین ثبت‌نام شما فعال شد: DANA-10', btnText: 'ورود به دوره‌ها', link: '/courses', icon: '🎁', bgClass: 'bg-gradient-to-br from-pink-500 to-rose-600', btnTextClass: 'text-rose-600' } };
  }

  if (t.includes('استعدادیابی') || t.includes('تست')) {
    return { type: 'widget', widgetData: { title: 'آزمون مسیر شغلی', desc: 'در کمتر از ۲ دقیقه با پاسخ به چند سوال، مسیر تکنولوژی ایده‌آل خودت رو پیدا کن.', btnText: 'شروع آزمون استعدادیابی', link: '/talent', icon: '🎯', bgClass: 'bg-gradient-to-br from-cyan-500 to-blue-600', btnTextClass: 'text-blue-600' } };
  }

  if (t.includes('پایتون')) {
    return { type: 'widget', widgetData: { title: 'مسترکلاس پایتون', desc: 'جامع‌ترین دوره پایتون از صفر تا ورود به بازار کار همراه با انجام مینی‌پروژه‌های واقعی.', btnText: 'مشاهده سرفصل‌های پایتون', link: '/python-course', icon: '🐍', bgClass: 'bg-gradient-to-br from-emerald-500 to-teal-600', btnTextClass: 'text-teal-700' } };
  }

  if (t.includes('هوش مصنوعی') || t.includes('ai') || t.includes('بوت کمپ')) {
    return { type: 'widget', widgetData: { title: 'بوت‌کمپ هوش مصنوعی', desc: 'آموزش عملی ماشین‌لرنینگ. مهارت‌های پولساز آینده رو از امروز یاد بگیر.', btnText: 'ورود به دنیای AI', link: '/ai-course', icon: '🤖', bgClass: 'bg-gradient-to-br from-purple-600 to-indigo-700', btnTextClass: 'text-indigo-700' } };
  }

  if (t.includes('کودک') || t.includes('اسکرچ') || t.includes('بازی')) {
    return { type: 'widget', widgetData: { title: 'برنامه‌نویسی کودکان', desc: 'آموزش تفکر الگوریتمی از طریق ساخت بازی و انیمیشن‌های تعاملی.', btnText: 'دوره ویژه کودکان', link: '/kids-course', icon: '🎮', bgClass: 'bg-gradient-to-br from-orange-400 to-red-500', btnTextClass: 'text-red-600' } };
  }

  if (t.includes('مدرک') || t.includes('مهاجرت') || t.includes('رزومه')) {
    return { type: 'widget', widgetData: { title: 'مدرک و رزومه‌سازی', desc: 'در پایان دوره‌ها، یک گواهینامه معتبر دوزبانه دریافت می‌کنید که تاثیر مستقیمی روی استخدام دارد.', btnText: 'جزئیات گواهینامه‌ها', link: '/certification', icon: '🎓', bgClass: 'bg-gradient-to-br from-amber-500 to-orange-600', btnTextClass: 'text-amber-700' } };
  }

  // ۵. پاسخ پیش‌فرض (Fallback) ارتقا یافته
  return { 
    type: 'text', 
    text: "راستش متوجه منظورت نشدم 😅. می‌تونی از دکمه‌های بالا استفاده کنی یا اسم دوره‌ای که دنبالشی رو برام بنویسی (مثلا: پایتون، هوش مصنوعی یا استعدادیابی)." 
  };
};

const streamBotResponse = (responseObj) => {
  isTyping.value = false;
  
  if (responseObj.type === 'widget') {
    messages.value.push(responseObj);
    scrollToBottom();
    if (isVoiceOutputEnabled.value) speakText(responseObj.widgetData.desc);
    return;
  }

  const newBotMessage = { role: 'bot', type: 'text', text: '' };
  messages.value.push(newBotMessage);
  const fullText = responseObj.text;

  let index = 0;
  const interval = setInterval(() => {
    if (index < fullText.length) {
      messages.value[messages.value.length - 1].text += fullText.charAt(index);
      index++;
      scrollToBottom();
    } else {
      clearInterval(interval);
      setTimeout(scrollToBottom, 50);
      speakText(fullText);
    }
  }, 20);
};

const sendMessage = async () => {
  if (!userInput.value.trim()) return;

  const userText = userInput.value;
  messages.value.push({ role: 'user', type: 'text', text: userText });
  userInput.value = '';
  isTyping.value = true;
  scrollToBottom();

  setTimeout(() => {
    const responseObj = processBotLogic(userText);
    streamBotResponse(responseObj);
  }, 800);
};

const handleQuickReply = (chipText) => {
  userInput.value = chipText.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, '').trim();
  sendMessage();
};
</script>

<style scoped>
/* اسکرول‌بار داینامیک */
.custom-scrollbar::-webkit-scrollbar { width: 5px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.1); border-radius: 99px; }
:global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); }

/* انیمیشن‌ها */
.window-fade-enter-active, .window-fade-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.window-fade-enter-from, .window-fade-leave-to { opacity: 0; transform: translateY(20px) scale(0.97); filter: blur(4px); }
.animate-fade-in { animation: fadeIn 0.4s forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.animate-pulse-slow { animation: pulse 3s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .6; } }

/* =========================================
   کدهای اختصاصی حالت هکری (Matrix Easter Egg) 
   ========================================= */
.matrix-theme {
  background-color: #050505 !important;
  border-color: #0f0 !important;
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.2) !important;
  font-family: monospace !important;
}
.matrix-theme .theme-text { color: #0f0 !important; text-shadow: 0 0 5px #0f0; }
.matrix-theme .theme-subtext { color: #0a0 !important; }
.matrix-theme .theme-bot-msg { 
  background-color: #001100 !important; 
  border: 1px solid #0f0 !important; 
  color: #0f0 !important; 
  border-radius: 0 !important;
}
.matrix-theme .theme-chip {
  background: transparent !important; border: 1px solid #0f0 !important; color: #0f0 !important; border-radius: 0 !important;
}
.matrix-theme .theme-chip:hover { background: #0f0 !important; color: #000 !important; }
.matrix-theme .theme-footer { border-top: 1px solid #0f0 !important; background: transparent !important; }
.matrix-theme .theme-input-box { background: #000 !important; border: 1px solid #0f0 !important; border-radius: 0 !important;}
.matrix-theme .theme-input { color: #0f0 !important; }
.matrix-theme .theme-input::placeholder { color: #050 !important; }
.matrix-theme .theme-dot { background-color: #0f0 !important; border-radius: 0 !important; }
</style>