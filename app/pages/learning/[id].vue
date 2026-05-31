<template>
  <div class="min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-500 pt-28 pb-20">
    
    <!-- اگر مقاله با این آیدی پیدا شد -->
    <div class="container mx-auto px-4 max-w-4xl" v-if="post">
      
      <!-- دکمه بازگشت -->
      <NuxtLink to="/learning" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-brand-accent1 mb-8 transition-colors font-bold">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        بازگشت به مقالات
      </NuxtLink>

      <!-- هدر مقاله (عکس و عنوان) -->
      <div class="bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 mb-10">
        <div class="h-64 md:h-[450px] w-full overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover relative z-0">
          
          <div class="absolute bottom-8 left-8 right-8 z-20">
            <div class="flex items-center gap-3 text-sm text-gray-300 mb-4 font-medium">
              <span class="bg-blue-600 text-white px-3 py-1 rounded-md shadow-sm">{{ post.category }}</span>
              <span>•</span>
              <span>{{ post.date }}</span>
            </div>
            <h1 class="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-md">
              {{ post.title }}
            </h1>
          </div>
        </div>
      </div>

      <!-- بدنه اصلی مقاله -->
      <div class="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 md:p-14 shadow-lg border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 leading-loose text-justify text-lg relative">
        
        <!-- یک استایل نقل قول برای خلاصه مقاله -->
        <blockquote class="border-r-4 border-blue-600 dark:border-brand-accent1 pr-6 py-2 mb-10 bg-blue-50 dark:bg-gray-700/30 rounded-l-xl italic font-medium text-gray-700 dark:text-gray-200">
          {{ post.excerpt }}
        </blockquote>
        
        <!-- متن تستی مقاله -->
        <div class="space-y-6">
          <p>در اینجا محتوای کامل مقاله قرار می‌گیرد. زمانی که سایت شما به یک بک‌اند (پنل مدیریت) متصل شود، متن کامل مقاله که شامل پاراگراف‌ها، عکس‌های آموزشی بین متن و تیترهای مختلف است، دقیقاً در همین بخش لود می‌شود.</p>
          <p>از آنجایی که ما فعلاً در حال طراحی قالب (فرانت‌اند) سایت هستیم و مقالات به صورت تستی قرار داده شده‌اند، شما می‌توانید ظاهر بی‌نظیر و خوانایی بسیار بالای این صفحه را مشاهده کنید.</p>
          
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mt-10 mb-4">نکات کلیدی برای طراحی وبلاگ</h2>
          <ul class="list-disc list-inside space-y-2 pr-4">
            <li>رعایت فاصله‌های مناسب بین خطوط (Line-height)</li>
            <li>استفاده از رنگ‌های ملایم برای خسته نشدن چشم کاربر</li>
            <li>پشتیبانی کامل از حالت تاریک برای مطالعه در شب</li>
          </ul>
        </div>

        <!-- باکس نویسنده -->
        <div class="mt-16 pt-8 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4">
          <img src="https://i.pravatar.cc/150?img=11" alt="نویسنده" class="w-16 h-16 rounded-full border-2 border-gray-200 dark:border-gray-600 shadow-sm">
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">نویسنده مقاله:</p>
            <p class="font-bold text-gray-800 dark:text-white text-lg">تیم تحریریه هوش‌پرداز</p>
          </div>
        </div>

      </div>

    </div>
    
    <!-- اگر کاربر آیدی اشتباه وارد کرد و مقاله پیدا نشد -->
    <div v-else class="container mx-auto px-4 text-center py-32">
      <div class="text-[100px] mb-6">🔍</div>
      <h1 class="text-4xl font-black text-gray-800 dark:text-white mb-4">مقاله‌ای با این آدرس پیدا نشد!</h1>
      <p class="text-gray-500 dark:text-gray-400 mb-8">ممکن است این مقاله حذف شده باشد یا آدرس را اشتباه وارد کرده باشید.</p>
      <NuxtLink to="/learning" class="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:-translate-y-1 transition-all">
        بازگشت به صفحه مقالات
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// برای گرفتن ID از آدرس مرورگر
const route = useRoute()
const post = ref(null)

// همان دیتای تستی صفحه قبل را اینجا هم قرار می‌دهیم تا سیستم بداند هر ID مربوط به کدام مقاله است
const posts = [
  { id: 1, title: 'چرا یادگیری برنامه‌نویسی برای کودکان ضروری است؟', excerpt: 'برنامه‌نویسی فقط تایپ کد نیست؛ بلکه یادگیری نحوه حل مسئله، تفکر منطقی و خلاقیت است که در سنین پایین به شدت موثر است.', category: 'کودکان و نوجوانان', date: '۲۰ اردیبهشت ۱۴۰۳', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'تفاوت طراح UI و UX چیست؟ راهنمای کامل', excerpt: 'بسیاری از افراد این دو مفهوم را با هم اشتباه می‌گیرند. در این مقاله به بررسی تفاوت‌ها، مهارت‌ها و بازار کار هر کدام می‌پردازیم.', category: 'طراحی و UI/UX', date: '۱۵ اردیبهشت ۱۴۰۳', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'معرفی بهترین فریم‌ورک‌های پایتون در سال جاری', excerpt: 'از جنگو تا فلسک و فست‌ای‌پی‌آی. بررسی جامع فریم‌ورک‌هایی که هر توسعه‌دهنده پایتون باید برای تسلط بر بازار کار بشناسد.', category: 'برنامه‌نویسی', date: '۱۰ اردیبهشت ۱۴۰۳', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'هوش مصنوعی چگونه آینده مشاغل را تغییر می‌دهد؟', excerpt: 'آیا ربات‌ها جای ما را می‌گیرند؟ بررسی تاثیرات عمیق AI بر مشاغل مختلف و مهارت‌هایی که برای بقا نیاز داریم.', category: 'هوش مصنوعی', date: '۵ اردیبهشت ۱۴۰۳', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'چگونه یک رزومه برنامه‌نویسی حرفه‌ای بنویسیم؟', excerpt: 'نکات کلیدی برای نوشتن رزومه‌ای که مدیران فنی شرکت‌های بزرگ نتوانند آن را نادیده بگیرند.', category: 'بازار کار', date: '۲ اردیبهشت ۱۴۰۳', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'ساخت اولین بازی با اسکرچ (مخصوص نوجوانان)', excerpt: 'در این آموزش تصویری یاد می‌گیریم چگونه بدون نیاز به نوشتن حتی یک خط کد سخت، یک بازی جذاب با اسکرچ بسازیم.', category: 'کودکان و نوجوانان', date: '۲۸ فروردین ۱۴۰۳', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
]

onMounted(() => {
  // این کد ID مقاله را از آدرس صفحه (URL) می‌گیرد و به عدد تبدیل می‌کند
  const articleId = Number(route.params.id)
  
  // جستجو در بین مقالات برای پیدا کردن مقاله‌ای که آیدی آن با آیدی آدرس صفحه یکی است
  post.value = posts.find(p => p.id === articleId)
})

// تغییر پویای عنوان تب مرورگر به اسم مقاله
useHead(() => {
  return {
    title: post.value ? `${post.value.title} | وبلاگ هوش پرداز` : 'مقاله یافت نشد | هوش پرداز'
  }
})
</script>