<template>
  <div>
    <div class="mb-8">
      <h2 class="text-3xl font-black text-gray-800 dark:text-white mb-2">نمای کلی سیستم</h2>
      <p class="text-gray-500 dark:text-gray-400">آمار و اطلاعات سایت شما در یک نگاه</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
        <div class="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl">
          🎓
        </div>
        <div>
          <p class="text-sm text-gray-500 dark:text-gray-400 font-bold mb-1">کل دوره‌ها</p>
          <p class="text-2xl font-black text-gray-800 dark:text-white">۴</p>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
        <div class="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-3xl">
          📝
        </div>
        <div>
          <p class="text-sm text-gray-500 dark:text-gray-400 font-bold mb-1">مقالات بلاگ</p>
          <p class="text-2xl font-black text-gray-800 dark:text-white">۱۲</p>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
        <div class="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-3xl">
          👥
        </div>
        <div>
          <p class="text-sm text-gray-500 dark:text-gray-400 font-bold mb-1">دانشجویان</p>
          <p class="text-2xl font-black text-gray-800 dark:text-white">۱۴۵</p>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6">دسترسی سریع</h3>
      <div class="flex gap-4">
        <NuxtLink to="/admin/courses/create" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition flex items-center gap-2 shadow-lg shadow-blue-600/30">
          <span>+</span> افزودن دوره جدید
        </NuxtLink>
        <NuxtLink to="/admin/blog/create" class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition flex items-center gap-2 shadow-lg shadow-purple-600/30">
          <span>+</span> نوشتن مقاله جدید
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'admin'
})
// در آینده می‌تونیم با Supabase تعداد واقعی رو برای کارت‌ها Fetch کنیم
</script>