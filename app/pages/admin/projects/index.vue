<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700">
      <div>
        <h1 class="text-2xl font-black text-slate-800 dark:text-white mb-2">مدیریت پروژه‌ها</h1>
        <p class="text-slate-500 dark:text-gray-400 text-sm">لیست دستاوردهای هنرجویان را اینجا مدیریت کنید.</p>
      </div>
      <NuxtLink to="/admin/projects/create" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        افزودن پروژه جدید
      </NuxtLink>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-gray-700 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-right border-collapse">
          <thead>
            <tr class="bg-slate-50 dark:bg-gray-900/50 text-slate-500 dark:text-gray-400 text-sm border-b border-slate-100 dark:border-gray-700">
              <th class="p-4 font-bold">تصویر و عنوان</th>
              <th class="p-4 font-bold">هنرجو</th>
              <th class="p-4 font-bold">دسته‌بندی</th>
              <th class="p-4 font-bold text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.id" class="border-b border-slate-50 dark:border-gray-700/50 hover:bg-slate-50 dark:hover:bg-gray-700/20 transition-colors">
              <td class="p-4">
                <div class="flex items-center gap-4">
                  <img :src="project.image" class="w-16 h-12 rounded-lg object-cover shadow-sm bg-slate-100 dark:bg-slate-900" alt="" />
                  <div class="max-w-xs md:max-w-md">
                    <div class="font-bold text-slate-800 dark:text-gray-200 truncate">{{ project.title }}</div>
                    <div class="text-xs text-slate-500 mt-1 line-clamp-1">{{ project.description }}</div>
                  </div>
                </div>
              </td>
              <td class="p-4">
                <div class="font-bold text-slate-700 dark:text-gray-300">{{ project.student }}</div>
                <div class="text-xs text-blue-500 mt-1">{{ project.age }}</div>
              </td>
              <td class="p-4">
                <span class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800/50">
                  {{ project.categoryName }}
                </span>
              </td>
              <td class="p-4 text-center">
                <div class="flex items-center justify-center gap-2">
                  <NuxtLink :to="`/admin/projects/edit/${project.id}`" class="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="ویرایش">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                  </NuxtLink>
                  <button @click="deleteProject(project.id)" class="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="حذف">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div v-if="projects.length === 0" class="text-center py-10 text-slate-500 dark:text-gray-400">
          هیچ پروژه‌ای یافت نشد. اولین پروژه را اضافه کنید.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })

// استیت مرکزی به همراه تمام ۱۶ پروژه اصلی سایت هوش‌پرداز
const projects = useState('admin_projects', () => [
  { id: 1, title: 'دستیار صوتی هوشمند (شبیه جارویس)', description: 'توسعه یک دستیار صوتی با پایتون که می‌تواند دستورات صوتی فارسی را پردازش کرده، در وب جستجو کند و وسایل هوشمند اتاق را کنترل کند.', category: 'ai', categoryName: 'پایتون پیشرفته', tools: ['Python', 'SpeechRecognition', 'OpenAI API'], image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'علی رضایی', age: 'هنرجوی ۱۶ ساله' },
  { id: 2, title: 'سیستم تشخیص سرطان پوست', description: 'یک مدل یادگیری عمیق (Deep Learning) که با دریافت تصویر ضایعه پوستی، احتمال سرطانی بودن آن را با دقت ۹۲٪ پیش‌بینی می‌کند.', category: 'ai', categoryName: 'ماشین لرنینگ', tools: ['TensorFlow', 'Keras', 'Python'], image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'مریم سادات حسینی', age: 'هنرجوی ۲۱ ساله' },
  { id: 3, title: 'ربات معامله‌گر ارز دیجیتال', description: 'رباتی که با استفاده از الگوریتم‌های هوش مصنوعی، نمودارهای قیمتی را تحلیل کرده و سیگنال‌های خرید و فروش صادر می‌کند.', category: 'ai', categoryName: 'هوش مصنوعی', tools: ['Pandas', 'Scikit-learn', 'Binance API'], image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'امیرحسین کریمی', age: 'هنرجوی ۱۹ ساله' },
  { id: 4, title: 'تشخیص خستگی راننده', description: 'پروژه‌ای بر پایه بینایی ماشین که با اسکن چشم‌های راننده، در صورت تشخیص خواب‌آلودگی، آژیر خطر را به صدا در می‌آورد.', category: 'ai', categoryName: 'بینایی ماشین', tools: ['OpenCV', 'Dlib', 'Python'], image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'رضا کمالی', age: 'هنرجوی ۲۴ ساله' },
  { id: 5, title: 'پلتفروم رزرو آنلاین پزشک', description: 'طراحی صفر تا صد رابط کاربری یک اپلیکیشن نوبت‌دهی پزشکی با تمرکز بر تجربه کاربری سالمندان.', category: 'web', categoryName: 'UI/UX دیزاین', tools: ['Figma', 'Illustrator', 'Prototyping'], image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'سارا احمدی', age: 'هنرجوی ۱۸ ساله' },
  { id: 6, title: 'داشبورد مدیریتی مالی داینامیک', description: 'طراحی و پیاده‌سازی یک داشبورد مدرن تحت وب برای مدیریت هزینه‌ها با نمودارهای زنده و پشتیبانی کامل از دارک مود.', category: 'web', categoryName: 'توسعه فرانت‌اند', tools: ['Vue.js', 'Tailwind CSS', 'Chart.js'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'نگار محمدی', age: 'هنرجوی ۲۲ ساله' },
  { id: 7, title: 'وب‌سایت سه بعدی گالری هنر', description: 'یک وب‌سایت خیره‌کننده که با استفاده از تکنولوژی‌های سه‌بعدی تحت وب، آثار هنری را در یک موزه مجازی به نمایش می‌گذارد.', category: 'web', categoryName: 'توسعه وب سه‌بعدی', tools: ['Three.js', 'React', 'WebGL'], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'آریا رحمانی', age: 'هنرجوی ۲۰ ساله' },
  { id: 8, title: 'اپلیکیشن مدیریت وظایف تیمی', description: 'یک پلتفرم مدیریت پروژه شبیه ترلو (Trello) با قابلیت جابجایی کارت‌ها (Drag & Drop) و چت زنده.', category: 'web', categoryName: 'توسعه فول‌استک', tools: ['Nuxt 3', 'Node.js', 'MongoDB'], image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'پویا نجفی', age: 'هنرجوی ۲۵ ساله' },
  { id: 9, title: 'بازوی رباتیک خط تولید', description: 'ساخت و برنامه‌نویسی صفر تا صد یک بازوی رباتیک ۳ محوره با استفاده از برد آردوینو.', category: 'robotics', categoryName: 'رباتیک صنعتی', tools: ['Arduino', 'Servo Motors', 'C++'], image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'محمد حسینی', age: 'هنرجوی ۱۷ ساله' },
  { id: 10, title: 'سیستم خانه هوشمند (IoT)', description: 'کنترل لامپ‌ها، دما و درب منزل از طریق اینترنت و گوشی موبایل.', category: 'robotics', categoryName: 'اینترنت اشیا', tools: ['ESP8266', 'IoT', 'Blynk App'], image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'فرهاد طاهری', age: 'هنرجوی ۱۵ ساله' },
  { id: 11, title: 'ربات مسیریاب مسابقه‌ای', description: 'رباتی سریع و دقیق که با استفاده از سنسورهای مادون قرمز قادر است پیچیده‌ترین مسیرها را طی کند.', category: 'robotics', categoryName: 'رباتیک دانش‌آموزی', tools: ['Arduino Nano', 'Sensors', 'PID Control'], image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'امیرعلی نوری', age: 'هنرجوی ۱۴ ساله' },
  { id: 12, title: 'گلدان هوشمند خودآبیار', description: 'گلدانی که رطوبت خاک را می‌سنجد و در صورت نیاز به صورت خودکار به گیاه آب می‌دهد.', category: 'robotics', categoryName: 'الکترونیک کاربردی', tools: ['Raspberry Pi', 'Water Pump', 'Python'], image: 'https://images.unsplash.com/photo-1592484043427-0231d683fb9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'زهرا موسوی', age: 'هنرجوی ۱۳ ساله' },
  { id: 13, title: 'بازی نبرد فضایی', description: 'طراحی یک بازی آرکید هیجان‌انگیز که در آن سفینه کاربر باید به دشمنان فضایی شلیک کند.', category: 'game', categoryName: 'بازی‌سازی کودکان', tools: ['Scratch', 'Block Coding'], image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'ماهان رستمی', age: 'هنرجوی ۹ ساله' },
  { id: 14, title: 'بازی سه‌بعدی فرار از مارپیچ', description: 'توسعه یک بازی سه‌بعدی جذاب که پلیر باید در یک هزارتوی تاریک، راه خروج را پیدا کند.', category: 'game', categoryName: 'بازی‌سازی پیشرفته', tools: ['Unity 3D', 'C#', 'Blender'], image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'کیان صفری', age: 'هنرجوی ۱۶ ساله' },
  { id: 15, title: 'پلتفرمر جادویی', description: 'یک بازی دو بعدی مشابه ماریو با گرافیک پیکسلی دست‌ساز و سیستم امتیازدهی.', category: 'game', categoryName: 'بازی‌سازی ۲ بعدی', tools: ['Godot Engine', 'GDScript', 'Pixel Art'], image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'نیما جلالی', age: 'هنرجوی ۱۴ ساله' },
  { id: 16, title: 'شبیه‌ساز ترافیک شهری', description: 'انیمیشن و شبیه‌سازی هوشمند حرکت خودروها در تقاطع با رعایت چراغ راهنمایی.', category: 'game', categoryName: 'برنامه‌نویسی منطقی', tools: ['Scratch', 'Logic Building'], image: 'https://images.unsplash.com/photo-1478201087114-17f18579d47d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', student: 'باران تیموری', age: 'هنرجوی ۱۰ ساله' }
])

const deleteProject = (id) => {
  if (confirm('آیا از حذف این پروژه اطمینان دارید؟')) {
    projects.value = projects.value.filter(p => p.id !== Number(id))
  }
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>