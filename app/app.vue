<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()

// با قرار دادن کل آبجکت به صورت یک تابع خروجی () => ({})
// ناتکس مطمئن می‌شود که تگ کاننیکال در سمت سرور (SSR) دقیقاً به متن تبدیل و چاپ می‌شود
useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `https://hoooshpardaz.ir${route.path === '/' ? '' : route.path}`
    }
  ]
}))
</script>