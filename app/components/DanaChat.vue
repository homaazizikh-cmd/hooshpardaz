<template>
  <div class="fixed bottom-6 right-6 z-[9999]">
    <button 
      @click="isOpen = !isOpen" 
      class="w-14 h-14 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-all cursor-pointer border border-blue-400/30"
    >
      <span class="text-2xl">🧠</span>
    </button>

    <div v-if="isOpen" class="absolute bottom-20 right-0 w-80 h-96 bg-[#0f172a]/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 flex flex-col shadow-2xl overflow-hidden">
      <div class="text-white font-bold mb-3 border-b border-blue-500/20 pb-2">دانا، دستیار داناورس</div>
      
      <div class="flex-1 overflow-y-auto space-y-3 mb-4 custom-scrollbar">
        <div v-for="(msg, index) in messages" :key="index" :class="msg.role === 'user' ? 'text-right' : 'text-left'">
          <span :class="msg.role === 'user' ? 'bg-blue-600' : 'bg-gray-700'" class="px-3 py-2 rounded-xl text-white text-sm inline-block max-w-[80%]">
            {{ msg.text }}
          </span>
        </div>
      </div>

      <div class="flex gap-2">
        <input 
          v-model="userInput" 
          @keyup.enter="sendMessage" 
          placeholder="سوالی بپرس..." 
          class="w-full bg-slate-800 text-white p-2 rounded-lg outline-none border border-blue-500/30 focus:border-blue-500"
        >
        <button @click="sendMessage" class="bg-blue-600 px-3 rounded-lg text-white">ارسال</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const userInput = ref('');
const messages = ref([{ role: 'bot', text: 'سلام! من دانایِ داناورسم. چطور می‌تونم کمکت کنم؟' }]);

async function sendMessage() {
  if (!userInput.value.trim()) return;
  
  const userText = userInput.value;
  messages.value.push({ role: 'user', text: userText });
  userInput.value = '';

  const response = await $fetch('/api/dana', {
    method: 'POST',
    body: { message: userText }
  });
  
  messages.value.push({ role: 'bot', text: response.reply || "خطا در برقراری ارتباط." });
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 10px; }
</style>