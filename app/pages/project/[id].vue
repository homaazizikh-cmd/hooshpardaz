<template>
  <div class="min-h-screen bg-[#f8fafc] dark:bg-[#020617] transition-colors duration-500 pb-20">
    
    <div v-if="project" class="animate-fade-in">
      <!-- هدر و تصویر اصلی پروژه (Hero Image) -->
      <div class="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <div class="absolute inset-0 bg-gray-900/40 dark:bg-gray-900/60 z-10"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#f8fafc] dark:from-[#020617] via-transparent to-transparent z-10"></div>
        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover fixed top-0 left-0 -z-10" />
        
        <!-- دکمه برگشت -->
        <div class="absolute top-28 right-4 md:right-10 z-20">
          <NuxtLink to="/projects" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/20 dark:bg-black/40 backdrop-blur-md text-white font-bold border border-white/30 hover:bg-white/30 transition-colors">
            <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            بازگشت به گالری
          </NuxtLink>
        </div>
      </div>

      <!-- محتوای اصلی پروژه -->
      <div class="container mx-auto px-4 relative z-20 -mt-32">
        <div class="bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] border border-white/50 dark:border-white/10 shadow-2xl">
          
          <div class="flex flex-col md:flex-row gap-10">
            
            <!-- بخش توضیحات (راست) -->
            <div class="flex-1 space-y-8">
              <div>
                <span class="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-200 dark:border-blue-500/30">
                  {{ project.categoryName }}
                </span>
                <h1 class="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mt-5 leading-tight">{{ project.title }}</h1>
              </div>

              <div class="prose dark:prose-invert max-w-none text-slate-600 dark:text-gray-300 text-lg leading-loose text-justify">
                <p>{{ project.description }}</p>
                <p class="mt-4">
                  این پروژه یکی از دستاوردهای برجسته در آکادمی هوش پرداز است. هنرجوی ما با استفاده از دانش روز و منتورینگ اساتید توانسته ایده‌ی خود را از صفر تا صد پیاده‌سازی کند. چالش‌های فنی بسیاری در این مسیر وجود داشت که با کدنویسی اصولی برطرف گردید.
                </p>
              </div>

              <!-- دکمه دمو (اختیاری) -->
              <button class="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform flex items-center gap-2">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                مشاهده دموی زنده پروژه
              </button>
            </div>

            <!-- سایدبار اطلاعات (چپ) -->
            <div class="w-full md:w-80 space-y-6">
              <!-- کارت هنرجو -->
              <div class="bg-slate-50 dark:bg-white/5 p-6 rounded-3xl border border-slate-200 dark:border-white/10">
                <h3 class="text-slate-400 text-sm font-bold mb-4 uppercase tracking-wider">توسعه‌دهنده</h3>
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
                    {{ project.student.charAt(0) }}
                  </div>
                  <div>
                    <div class="font-bold text-lg text-slate-800 dark:text-white">{{ project.student }}</div>
                    <div class="text-blue-600 dark:text-blue-400 text-sm">{{ project.age }}</div>
                  </div>
                </div>
              </div>

              <!-- تکنولوژی‌ها -->
              <div class="bg-slate-50 dark:bg-white/5 p-6 rounded-3xl border border-slate-200 dark:border-white/10">
                <h3 class="text-slate-400 text-sm font-bold mb-4 uppercase tracking-wider">ابزارهای استفاده شده</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tool, index) in project.tools" :key="index" class="bg-white dark:bg-gray-800 text-slate-700 dark:text-gray-300 font-bold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-gray-700 shadow-sm">
                    {{ tool }}
                  </span>
                </div>
              </div>
              
              <!-- زمان انجام -->
              <div class="bg-slate-50 dark:bg-white/5 p-6 rounded-3xl border border-slate-200 dark:border-white/10">
                <h3 class="text-slate-400 text-sm font-bold mb-2 uppercase tracking-wider">مدت زمان توسعه</h3>
                <div class="font-black text-xl text-slate-800 dark:text-white">۳ هفته کاری</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    
    <!-- در صورتی که پروژه پیدا نشد (ارور 404) -->
    <div v-else class="h-screen flex items-center justify-center text-center">
      <div>
        <h2 class="text-4xl font-black text-slate-800 dark:text-white mb-4">پروژه یافت نشد!</h2>
        <NuxtLink to="/projects" class="text-blue-500 hover:underline font-bold">بازگشت به گالری پروژه‌ها</NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const project = ref(null)

// دیتابیس پروژه‌ها (در حالت واقعی این اطلاعات از API سرور یا پینیا دریافت می‌شود)
// برای الان دیتابیس را اینجا قرار دادیم تا وقتی آیدی پاس داده شد، پیدایش کند
// دیتابیس کامل ۱۶ پروژه با توضیحات تخصصی برای صفحه جزئیات
const projects = [
  // ---------------- هوش مصنوعی و پایتون (ai) ----------------
  { 
    id: 1, 
    title: 'دستیار صوتی هوشمند (شبیه جارویس)', 
    description: 'این پروژه یک دستیار صوتی پیشرفته است که با استفاده از موتور تشخیص گفتار گوگل و هوش مصنوعی OpenAI طراحی شده. این برنامه قادر است دستورات صوتی فارسی را با دقت بالا درک کرده، وضعیت آب‌وهوا را گزارش دهد، در ویکی‌پدیا جستجو کند و حتی با اتصال به تجهیزات IoT، چراغ‌های اتاق هنرجو را کنترل کند. چالش اصلی این پروژه، پردازش زبان طبیعی (NLP) برای زبان فارسی بود که با موفقیت پیاده‌سازی شد.', 
    categoryName: 'پایتون پیشرفته', 
    tools: ['Python', 'SpeechRecognition', 'OpenAI API'], 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'علی رضایی', 
    age: 'هنرجوی ۱۶ ساله' 
  },
  { 
    id: 2, 
    title: 'سیستم تشخیص سرطان پوست', 
    description: 'پروژه‌ای در لبه تکنولوژی پزشکی که از شبکه‌های عصبی پیچشی (CNN) برای تحلیل تصاویر ضایعات پوستی استفاده می‌کند. هنرجو با جمع‌آوری دیتاسیستی شامل ۱۰ هزار تصویر پزشکی و آموزش مدل در محیط TensorFlow، به دقتی خیره‌کننده در تشخیص زودهنگام ملانوما دست یافته است. این پروژه نشان‌دهنده قدرت هوش مصنوعی در نجات جان انسان‌هاست.', 
    categoryName: 'ماشین لرنینگ', 
    tools: ['TensorFlow', 'Keras', 'Python'], 
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'مریم سادات حسینی', 
    age: 'هنرجوی ۲۱ ساله' 
  },
  { 
    id: 3, 
    title: 'ربات معامله‌گر ارز دیجیتال', 
    description: 'این ربات با اتصال به API صرافی‌های معتبر، داده‌های لحظه‌ای بازار را دریافت کرده و با استراتژی‌های تحلیل تکنیکال (مانند RSI و MACD) ترکیب می‌کند. هنرجو در این پروژه سیستم مدیریت ریسک و حد ضرر خودکار را پیاده‌سازی کرده است که می‌تواند به صورت ۲۴ ساعته بدون دخالت انسان، معاملات را مدیریت کند.', 
    categoryName: 'هوش مصنوعی', 
    tools: ['Pandas', 'Scikit-learn', 'Binance API'], 
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'امیرحسین کریمی', 
    age: 'هنرجوی ۱۹ ساله' 
  },
  { 
    id: 4, 
    title: 'تشخیص خستگی راننده', 
    description: 'یک سیستم ایمنی هوشمند که از کتابخانه OpenCV برای ردیابی نقاط کلیدی صورت استفاده می‌کند. این برنامه با محاسبه نرخ بسته شدن پلک‌ها (EAR)، خستگی و خواب‌آلودگی راننده را در کمتر از ۱ ثانیه تشخیص داده و هشدار صوتی پخش می‌کند. این پروژه پتانسیل بالایی برای استفاده در صنعت خودرو دارد.', 
    categoryName: 'بینایی ماشین', 
    tools: ['OpenCV', 'Dlib', 'Python'], 
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'رضا کمالی', 
    age: 'هنرجوی ۲۴ ساله' 
  },

  // ---------------- طراحی وب و اپلیکیشن (web) ----------------
  { 
    id: 5, 
    title: 'پلتفرم رزرو آنلاین پزشک', 
    description: 'طراحی مدرن و مینیمال برای حل مشکل نوبت‌دهی در کلینیک‌ها. هنرجو در این پروژه بر روی تجربه کاربر (UX) متمرکز بوده و تمام مراحل، از جستجوی تخصص تا پرداخت بیعانه نوبت را به ساده‌ترین شکل ممکن طراحی کرده است. استفاده از تایپوگرافی خوانا و رنگ‌های آرامش‌بخش از ویژگی‌های بارز این طراحی است.', 
    categoryName: 'UI/UX دیزاین', 
    tools: ['Figma', 'Illustrator', 'Prototyping'], 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'سارا احمدی', 
    age: 'هنرجوی ۱۸ ساله' 
  },
  { 
    id: 6, 
    title: 'داشبورد مدیریتی مالی داینامیک', 
    description: 'یک پنل پیشرفته برای وب‌سایت‌های حسابداری که گزارش‌های مالی را به صورت نمودارهای گرافیکی تعاملی نمایش می‌دهد. هنرجو با استفاده از Vue.js و Tailwind CSS سیستمی ساخته است که کاملاً Responsive بوده و در گوشی و دسکتاپ با سرعت بسیار بالا لود می‌شود.', 
    categoryName: 'توسعه فرانت‌اند', 
    tools: ['Vue.js', 'Tailwind CSS', 'Chart.js'], 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'نگار محمدی', 
    age: 'هنرجوی ۲۲ ساله' 
  },
  { 
    id: 7, 
    title: 'وب‌سایت سه بعدی گالری هنر', 
    description: 'پروژه‌ای نوآورانه که مرزهای وب سنتی را جابجا کرده است. کاربر در این سایت می‌تواند با کلیدهای کیبورد در یک محیط سه بعدی قدم بزند و تابلوهای نقاشی را بررسی کند. پیاده‌سازی نورپردازی و متریال‌های واقع‌گرایانه در مرورگر، از پیچیدگی‌های فنی این پروژه بود که هنرجو به خوبی از پس آن برآمده است.', 
    categoryName: 'توسعه وب سه‌بعدی', 
    tools: ['Three.js', 'React', 'WebGL'], 
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'آریا رحمانی', 
    age: 'هنرجوی ۲۰ ساله' 
  },
  { 
    id: 8, 
    title: 'اپلیکیشن مدیریت وظایف تیمی', 
    description: 'یک ابزار همکاری تیمی کامل که از قابلیت Drag & Drop برای مدیریت پروژه‌ها استفاده می‌کند. این اپلیکیشن دارای بک‌انند قدرتمند Node.js است و داده‌ها را به صورت لحظه‌ای (Real-time) بین تمام اعضای تیم همگام‌سازی می‌کند. امنیت داده‌ها و معماری دیتابیس از نقاط قوت این کار است.', 
    categoryName: 'توسعه فول‌استک', 
    tools: ['Nuxt 3', 'Node.js', 'MongoDB'], 
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'پویا نجفی', 
    age: 'هنرجوی ۲۵ ساله' 
  },

  // ---------------- رباتیک و الکترونیک (robotics) ----------------
  { 
    id: 9, 
    title: 'بازوی رباتیک خط تولید', 
    description: 'این ربات دارای ۴ درجه آزادی است و با استفاده از میکروکنترلر آردوینو هدایت می‌شود. هنرجو علاوه بر ساخت بدنه با پرینتر سه بعدی، الگوریتم‌های حرکت نرم موتورها را نوشته است تا ربات بتواند اجسام ظریف را بدون آسیب جابجا کند. این پروژه یک نمونه کوچک از اتوماسیون صنعتی است.', 
    categoryName: 'رباتیک صنعتی', 
    tools: ['Arduino', 'Servo Motors', 'C++'], 
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'محمد حسینی', 
    age: 'هنرجوی ۱۷ ساله' 
  },
  { 
    id: 10, 
    title: 'سیستم خانه هوشمند (IoT)', 
    description: 'خانه‌ای که با صاحبش حرف می‌زند! هنرجو با استفاده از ماژول‌های ESP8266 سیستمی طراحی کرده که دما، رطوبت و نشت گاز را مانیتور کرده و از طریق اپلیکیشن موبایل به کاربر اجازه می‌دهد از هر جای دنیا وسایل خانه را خاموش یا روشن کند.', 
    categoryName: 'اینترنت اشیا', 
    tools: ['ESP8266', 'IoT', 'Blynk App'], 
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'فرهاد طاهری', 
    age: 'هنرجوی ۱۵ ساله' 
  },
  { 
    id: 11, 
    title: 'ربات مسیریاب مسابقه‌ای', 
    description: 'تمرکز اصلی این پروژه بر روی سرعت و دقت بود. هنرجو با پیاده‌سازی الگوریتم کنترل PID، توانسته لرزش‌های ربات در پیچ‌های تند را حذف کند. این ربات مجهز به سنسورهای مادون قرمز آرایه‌ای است که در هر ثانیه ۱۰۰ بار موقعیت خط را چک می‌کنند.', 
    categoryName: 'رباتیک دانش‌آموزی', 
    tools: ['Arduino Nano', 'Sensors', 'PID Control'], 
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'امیرعلی نوری', 
    age: 'هنرجوی ۱۴ ساله' 
  },
  { 
    id: 12, 
    title: 'گلدان هوشمند خودآبیار', 
    description: 'راه حلی عالی برای کسانی که فراموش می‌کنند به گل‌هایشان آب بدهند. این دستگاه با سنجش میزان هدایت الکتریکی خاک، زمان دقیق تشنگی گیاه را تشخیص داده و پمپ آب را فعال می‌کند. همچنین در صورت تمام شدن منبع آب، به گوشی کاربر نوتیفیکیشن ارسال می‌کند.', 
    categoryName: 'الکترونیک کاربردی', 
    tools: ['Raspberry Pi', 'Water Pump', 'Python'], 
    image: 'https://images.unsplash.com/photo-1592484043427-0231d683fb9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'زهرا موسوی', 
    age: 'هنرجوی ۱۳ ساله' 
  },

  // ---------------- بازی‌سازی و اسکرچ (game) ----------------
  { 
    id: 13, 
    title: 'بازی نبرد فضایی', 
    description: 'یک بازی مهیج که در محیط اسکرچ با منطق برنامه‌نویسی بلاکی ساخته شده است. هنرجوی ۹ ساله ما یاد گرفته است که چگونه برای دشمنان هوش مصنوعی ساده تعریف کند، سیستم امتیازدهی بسازد و با استفاده از متغیرها، درجه سختی بازی را با گذشت زمان افزایش دهد.', 
    categoryName: 'بازی‌سازی کودکان', 
    tools: ['Scratch', 'Block Coding'], 
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'ماهان رستمی', 
    age: 'هنرجوی ۹ ساله' 
  },
  { 
    id: 14, 
    title: 'بازی سه‌بعدی فرار از مارپیچ', 
    description: 'این بازی در محیط Unity توسعه یافته است. هنرجو با استفاده از زبان #C سیستم حرکت اول‌شخص را پیاده کرده و محیطی اتمسفریک با نورپردازی داینامیک خلق کرده است. طراحی هزارتو به صورت تصادفی (Random Generation) انجام می‌شود تا بازی تکراری نشود.', 
    categoryName: 'بازی‌سازی پیشرفته', 
    tools: ['Unity 3D', 'C#', 'Blender'], 
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'کیان صفری', 
    age: 'هنرجوی ۱۶ ساله' 
  },
  { 
    id: 15, 
    title: 'پلتفرمر جادویی', 
    description: 'یک بازی دو بعدی کلاسیک با گرافیک پیکسلی که تمام کاراکترهای آن توسط خود هنرجو طراحی شده است. چالش اصلی این پروژه، پیاده‌سازی فیزیک پرش و برخورد (Collision) بود که با استفاده از موتور Godot به بهترین شکل انجام شده است.', 
    categoryName: 'بازی‌سازی ۲ بعدی', 
    tools: ['Godot Engine', 'GDScript', 'Pixel Art'], 
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'نیما جلالی', 
    age: 'هنرجوی ۱۴ ساله' 
  },
  { 
    id: 16, 
    title: 'شبیه‌ساز ترافیک شهری', 
    description: 'یک پروژه علمی-آموزشی در محیط اسکرچ که رفتار خودروها را در یک چهارراه شبیه‌سازی می‌کند. هنرجو با استفاده از مفاهیم «اگر-آنگاه» پیچیده، سیستم چراغ راهنمایی هوشمندی ساخته است که طول صف خودروها را تشخیص داده و زمان چراغ سبز را تغییر می‌دهد.', 
    categoryName: 'برنامه‌نویسی منطقی', 
    tools: ['Scratch', 'Logic Building'], 
    image: 'https://images.unsplash.com/photo-1478201087114-17f18579d47d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
    student: 'باران تیموری', 
    age: 'هنرجوی ۱۰ ساله' 
  }
];

onMounted(() => {
  // دریافت آیدی پروژه از نوار آدرس مرورگر
  const projectId = Number(route.params.id)
  // پیدا کردن پروژه از داخل دیتابیس بر اساس آیدی
  project.value = projects.find(p => p.id === projectId)
  
  if (project.value) {
    useSeoMeta({
      title: `${project.value.title} | آکادمی هوش پرداز`,
      description: project.value.description
    })
  }
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>