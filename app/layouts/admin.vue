<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900 font-sans" dir="rtl">
    
    <aside class="w-64 bg-white dark:bg-gray-800 shadow-xl border-l border-gray-200 dark:border-gray-700 hidden md:flex flex-col transition-all">
      <div class="h-20 flex items-center justify-center border-b border-gray-100 dark:border-gray-700">
        <h2 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          هوش‌پرداز | پنل مدیریت
        </h2>
      </div>

      <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        <NuxtLink to="/admin" active-class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" class="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition">
          <span>📊</span> داشبورد
        </NuxtLink>
        <NuxtLink to="/admin/courses" active-class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" class="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition">
          <span>🎓</span> مدیریت دوره‌ها
        </NuxtLink>
        <NuxtLink to="/admin/blogs" active-class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" class="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition">
          <span>📝</span> مدیریت بلاگ
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-gray-100 dark:border-gray-700 space-y-2">
        <NuxtLink to="/" class="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-lg transition">
          🏠 بازگشت به سایت
        </NuxtLink>
      </div>
    </aside>

    <div class="flex-1 flex flex-col h-screen overflow-hidden">
      <header class="h-20 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-8">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
          خوش آمدید، مدیر سایت!
        </h1>
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 text-white flex items-center justify-center font-bold shadow-lg">
            ادمین
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
// مطمئن می‌شیم که هر صفحه‌ای با این Layout محافظت میشه
definePageMeta({
  middleware: 'admin'
})
</script>