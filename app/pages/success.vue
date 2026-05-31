<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-gray-900 font-sans">
    <div class="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl text-center">
      <div class="text-6xl mb-6">✅</div>
      <h2 class="text-2xl text-white font-bold mb-4">ثبت‌نام با موفقیت انجام شد!</h2>
      <p class="text-gray-300 mb-6">از پیوستن شما به آکادمی هوش‌پرداز خوشحالیم.</p>
      
      <div class="bg-black/30 p-4 rounded-xl border border-blue-500/30 mb-8">
        <p class="text-blue-300 text-sm mb-1">کد پیگیری شما:</p>
        <span class="text-2xl font-black text-white tracking-widest">{{ route.query.id }}</span>
      </div>

      <NuxtLink to="/" class="block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition">
        بازگشت به صفحه اصلی
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>