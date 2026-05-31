<template>
  <div class="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-500" dir="rtl">
    
    <AppHeader />

    <main class="pt-24">
      <slot />
    </main>

  </div>
</template>

<script setup>
// هیچ کدی اینجا نیاز نیست، چون تمام منطق اسکرول، تم تاریک و منوها داخل AppHeader نوشته شده است
</script>