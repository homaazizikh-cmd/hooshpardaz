<template>
  <div class="container mx-auto px-4 py-20">
    <h2 class="text-4xl font-black text-center mb-16 dark:text-white">تیم اساتید هوش‌پرداز</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="i in 8" :key="i" class="text-center">
        <div class="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 border-4 border-brand-accent1"></div>
        <h4 class="font-bold dark:text-white">استاد شماره {{ i }}</h4>
        <p class="text-xs text-brand-accent1">متخصص حوزه تکنولوژی</p>
      </div>
    </div>
  </div>
</template>