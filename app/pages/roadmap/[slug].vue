<template>
  <div class="container mx-auto px-4 py-20 max-w-4xl">
    <h1 class="text-4xl font-black mb-6 dark:text-white capitalize">{{ slug }}</h1>
    <p class="text-lg text-gray-600 dark:text-gray-300">
      این صفحه نقشه راه اختصاصی برای <strong>{{ slug }}</strong> است.
      به زودی محتوای کامل، سرفصل‌ها و پروژه‌های این مسیر در اینجا قرار خواهد گرفت.
    </p>
    <NuxtLink to="/" class="mt-8 inline-block text-brand-accent1 font-bold">← بازگشت به خانه</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
</script>