<template>
  <Html :lang="currentLang" :dir="currentDir">
    <Head>
      <Link rel="canonical" :href="`https://danaverse.ir${route.path === '/' ? '' : route.path}`" />
    </Head>
    
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <DanaChat />
    </Body>
  </Html>
</template>

<script setup>
// ۱. حتماً توابع مورد نیاز Vue را اولِ کار وارد می‌کنیم
import { computed } from 'vue'

// ۲. ابزارهای مسیردهی و زبان را فعال می‌کنیم
const route = useRoute()
const { locale } = useI18n()

// ۳. جهت و زبان سایت را بر اساس زبان فعلی، به صورت زنده تشخیص می‌دهیم
const currentDir = computed(() => locale.value === 'fa' ? 'rtl' : 'ltr')
const currentLang = computed(() => locale.value === 'fa' ? 'fa-IR' : 'en-US')

// ۴. کدهای سئوی شما دقیقاً در جای خودشان هستند
useHead({
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
})
</script>