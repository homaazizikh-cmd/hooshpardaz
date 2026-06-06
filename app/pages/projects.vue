<template>
  <div class="min-h-screen bg-[#f8fafc] dark:bg-[#020617] pt-28 pb-20 transition-colors duration-500 relative overflow-hidden">
    
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

    <section class="container mx-auto px-4 text-center mb-16 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
      
      <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 dark:bg-white/[0.03] text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 border border-blue-200 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-blue-500/5">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
        نمایشگاه دستاوردهای هنرجویان
      </div>
      
      <h1 class="text-4xl md:text-6xl font-black text-slate-800 dark:text-white mb-6 relative z-10 leading-tight tracking-tight text-center">
        خلق آینده با <span class="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-cyan-400 drop-shadow-sm">کدهای امروز</span>
      </h1>
      <p class="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto relative z-10 leading-relaxed font-light text-center">
        شاهد جادوی خلاقیت و تخصص هنرجویان آکادمی داناورس باشید. اینجا جایی است که ایده‌های خام، به پروژه‌های واقعی و شگفت‌انگیز تبدیل می‌شوند.
      </p>
    </section>

    <section class="container mx-auto px-4 mb-16 flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="activeCategory = cat.id"
        class="px-7 py-3 rounded-2xl font-bold transition-all duration-300 outline-none backdrop-blur-md border relative overflow-hidden group"
        :class="activeCategory === cat.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] -translate-y-1 scale-105' : 'bg-white/50 dark:bg-[#0f172a]/50 border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:-translate-y-0.5'"
      >
        <span class="relative z-10">{{ cat.name }}</span>
        <div v-if="activeCategory !== cat.id" class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
      </button>
    </section>

    <section class="container mx-auto px-4 relative z-10">
      <TransitionGroup 
        name="gallery" 
        tag="div" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <NuxtLink
          v-for="project in filteredProjects"
          :key="project.id"
          :to="`/project/${project.id}`"
          class="group bg-white/70 dark:bg-[#111827]/60 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-slate-200/80 dark:border-white/5 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-500 flex flex-col hover:-translate-y-3 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] relative no-underline"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

          <div class="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-gray-900 z-10">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
              {{ project.categoryName }}
            </div>
            <div class="absolute bottom-4 inset-x-4 flex flex-wrap gap-2">
              <span v-for="(tool, index) in project.tools" :key="index" class="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-white/20">
                {{ tool }}
              </span>
            </div>
          </div>

          <div class="p-6 md:p-8 flex-1 flex flex-col z-10">
            <h3 class="text-xl md:text-2xl font-black text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">{{ project.title }}</h3>
            <p class="text-slate-500 dark:text-gray-400 mb-6 text-sm md:text-base leading-relaxed flex-1 text-justify line-clamp-3">{{ project.description }}</p>
            
            <div class="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-white/5 mt-auto">
              <div class="flex items-center gap-3">
                <div class="relative">
                  <div class="absolute inset-0 bg-blue-500 rounded-full blur group-hover:blur-md transition-all opacity-50"></div>
                  <div class="relative w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md border-2 border-white dark:border-gray-800">
                    {{ project.student.charAt(0) }}
                  </div>
                </div>
                <div class="text-sm">
                  <div class="font-bold text-slate-800 dark:text-gray-200">{{ project.student }}</div>
                  <div class="text-blue-600/80 dark:text-blue-400/80 text-[10px] font-bold mt-0.5 tracking-wider">{{ project.age }}</div>
                </div>
              </div>
              <div class="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                <svg class="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </div>
        </NuxtLink>
      </TransitionGroup>
      
      <div v-if="filteredProjects.length === 0" class="text-center py-20 bg-white/50 dark:bg-white/[0.02] rounded-[3rem] backdrop-blur-xl border border-slate-200 dark:border-white/5 mt-8 shadow-inner">
        <div class="w-24 h-24 mx-auto mb-6 bg-blue-50 dark:bg-white/5 rounded-full flex items-center justify-center text-blue-500 text-4xl shadow-inner">
          <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <h3 class="text-2xl font-black text-slate-800 dark:text-white mb-3">داده‌ای یافت نشد</h3>
        <p class="text-slate-500 dark:text-gray-400 font-light text-center">پروژه‌های این بخش در حال بروزرسانی هستند. لطفاً دسته‌بندی دیگری را انتخاب کنید.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'گالری پروژه‌ها | آکادمی داناورس',
  description: 'گالری نمونه کارهای برنامه‌نویسی، هوش مصنوعی، رباتیک و بازی‌سازی هنرجویان آکادمی داناورس.'
})

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'همه دستاوردها' },
  { id: 'ai', name: 'هوش مصنوعی و پایتون' },
  { id: 'web', name: 'طراحی وب و اپلیکیشن' },
  { id: 'robotics', name: 'رباتیک و اینترنت اشیا' },
  { id: 'game', name: 'بازی‌سازی و اسکرچ' }
]

// دیتابیس کامل ۱۶ پروژه
const projects = [
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
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
.gallery-move,
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.9);
}
.gallery-leave-active {
  position: absolute;
  z-index: -1;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>