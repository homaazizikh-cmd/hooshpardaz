<template>
  <div class="max-w-7xl mx-auto pb-20">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
      <div>
        <h2 class="text-3xl font-black text-gray-800 dark:text-white mb-2 tracking-tight">مدیریت بلاگ و مقالات</h2>
        <p class="text-gray-500 dark:text-gray-400 font-medium">نوشتن، ویرایش و مدیریت محتوای آموزشی سایت.</p>
      </div>
      <NuxtLink to="/admin/blogs/create" class="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-2xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 shadow-[0_10px_20px_-10px_rgba(147,51,234,0.6)] hover:shadow-[0_15px_25px_-10px_rgba(147,51,234,0.8)] hover:-translate-y-1 overflow-hidden">
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
        <svg class="w-5 h-5 ml-2 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        <span class="relative">نوشتن مقاله جدید</span>
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between group hover:border-purple-500 transition-colors">
        <div>
          <p class="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1">کل مقالات</p>
          <h3 class="text-3xl font-black text-gray-800 dark:text-white">{{ blogs.length }}</h3>
        </div>
        <div class="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"></path></svg>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between group hover:border-green-500 transition-colors">
        <div>
          <p class="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1">منتشر شده</p>
          <h3 class="text-3xl font-black text-gray-800 dark:text-white">{{ publishedCount }}</h3>
        </div>
        <div class="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between group hover:border-orange-500 transition-colors">
        <div>
          <p class="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1">پیش‌نویس</p>
          <h3 class="text-3xl font-black text-gray-800 dark:text-white">{{ draftCount }}</h3>
        </div>
        <div class="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div class="relative w-full md:w-96">
        <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input v-model="searchQuery" type="text" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-medium rounded-2xl focus:ring-purple-500 focus:border-purple-500 block pr-11 p-3.5 outline-none transition-colors" placeholder="جستجوی عنوان مقاله...">
      </div>

      <div class="w-full md:w-64 relative">
        <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
        </div>
        <select v-model="filterCategory" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-medium rounded-2xl focus:ring-purple-500 focus:border-purple-500 block pr-11 p-3.5 outline-none appearance-none cursor-pointer transition-colors">
          <option value="all">همه دسته‌بندی‌ها</option>
          <option value="tech">اخبار تکنولوژی</option>
          <option value="tutorial">آموزش برنامه‌نویسی</option>
          <option value="ai">هوش مصنوعی</option>
        </select>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-gray-700 overflow-hidden relative">
      
      <div v-if="pending" class="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm z-10 flex items-center justify-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-600"></div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="w-full text-right border-collapse">
          <thead class="bg-gray-50/80 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm">
            <tr>
              <th class="py-5 px-6 font-bold w-24">کاور</th>
              <th class="py-5 px-6 font-bold">عنوان مقاله</th>
              <th class="py-5 px-6 font-bold">دسته‌بندی</th>
              <th class="py-5 px-6 font-bold">وضعیت انتشار</th>
              <th class="py-5 px-6 font-bold text-center">عملیات</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-700/80">
            <TransitionGroup name="list">
              <tr v-for="blog in filteredBlogs" :key="blog.id" class="hover:bg-purple-50/50 dark:hover:bg-gray-700/30 transition-colors group">
                
                <td class="py-4 px-6">
                  <div class="w-20 h-16 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 relative">
                    <img :src="blog.image_url || '/images/default-blog.jpg'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                  </div>
                </td>
                
                <td class="py-4 px-6">
                  <h4 class="font-black text-gray-800 dark:text-white text-base md:text-lg mb-1 group-hover:text-purple-600 transition-colors line-clamp-1">{{ blog.title }}</h4>
                  <div class="flex items-center text-xs text-gray-500 font-medium gap-3">
                    <span class="flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> {{ new Date(blog.created_at).toLocaleDateString('fa-IR') }}</span>
                  </div>
                </td>

                <td class="py-4 px-6">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    {{ getCategoryName(blog.category) }}
                  </span>
                </td>

                <td class="py-4 px-6">
                  <span v-if="blog.is_published === true || blog.is_published === 'true'" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> منتشر شده
                  </span>
                  <span v-else class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> پیش‌نویس
                  </span>
                </td>

                <td class="py-4 px-6 text-center">
                  <div class="flex items-center justify-center gap-2">
                    <NuxtLink :to="`/admin/blogs/edit/${blog.id}`" class="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center shadow-sm" title="ویرایش">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </NuxtLink>
                    <button @click="deleteBlog(blog.id)" class="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center shadow-sm" title="حذف">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                </td>

              </tr>
            </TransitionGroup>
          </tbody>
        </table>
      </div>
      
      <div v-if="!pending && filteredBlogs.length === 0" class="flex flex-col items-center justify-center py-20 text-center px-4">
        <div class="w-24 h-24 mb-6 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-4xl">📝</div>
        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">هنوز مقاله‌ای نوشته نشده است!</h3>
        <p class="text-gray-500 max-w-sm">با کلیک روی دکمه نوشتن مقاله جدید، اولین محتوای آموزشی خود را خلق کنید.</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'admin'
});
const supabase = useSupabaseClient();
const searchQuery = ref('');
const filterCategory = ref('all');

// دریافت اطلاعات بلاگ‌ها از دیتابیس
const { data: blogs, pending, refresh } = await useAsyncData('admin-blogs-list', async () => {
  const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
  return data || [];
});

// محاسبات آمار
const publishedCount = computed(() => {
  return blogs.value ? blogs.value.filter(b => b.is_published === true || b.is_published === 'true').length : 0;
});
const draftCount = computed(() => {
  return blogs.value ? blogs.value.length - publishedCount.value : 0;
});

// اعمال جستجو و فیلتر
const filteredBlogs = computed(() => {
  if (!blogs.value) return [];
  
  return blogs.value.filter(blog => {
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchCategory = filterCategory.value === 'all' || blog.category === filterCategory.value;
    return matchSearch && matchCategory;
  });
});

const getCategoryName = (catId) => {
  const dict = {
    'tech': 'اخبار تکنولوژی',
    'tutorial': 'آموزش برنامه‌نویسی',
    'ai': 'هوش مصنوعی'
  };
  return dict[catId] || 'نامشخص';
};

const deleteBlog = async (id) => {
  if(confirm('⚠️ آیا از حذف کامل این مقاله مطمئن هستید؟')) {
    try {
      const { error } = await supabase.from('blogs').delete().eq('id', id);
      if (error) throw error;
      
      refresh(); 
      alert('✅ مقاله با موفقیت حذف شد.');
    } catch (err) {
      alert('خطا در حذف مقاله: ' + err.message);
    }
  }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>