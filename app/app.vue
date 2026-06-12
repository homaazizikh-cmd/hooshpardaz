<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <DanaChat />
  </div>
</template>

<script setup>
const route = useRoute(); // 👈 سیمیکولن برای جلوگیری از تداخل

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `https://danaverse.ir${route.path === '/' ? '' : route.path}`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "آکادمی برنامه‌نویسی و هوش مصنوعی داناورس",
        "url": "https://danaverse.ir",
        "logo": "https://danaverse.ir/favicon.png",
        "sameAs": [
          "https://www.instagram.com/danaverse.ir",
          "https://t.me/dana_verse"
        ]
      })
    }
  ]
})); // 👈 پایان تمیزِ تابع با سیمیکولن
</script>