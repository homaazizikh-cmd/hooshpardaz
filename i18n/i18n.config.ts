export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fa',
  fallbackLocale: 'fa',
  messages: {
    fa: {
      nav: { home: "صفحه اصلی", courses: "دوره‌ها", learning: "یادگیری", talentTest: "استعدادیابی", instructors: "اساتید", about: "درباره ما", contact: "تماس با ما" },
      auth: { adminPanel: "پنل مدیریت", dashboard: "پنل کاربری", login: "ورود / ثبت‌نام", logout: "خروج از حساب" },
      seo: { homeTitle: "آکادمی برنامه‌نویسی و هوش مصنوعی داناورس", homeDesc: "بهترین سایت آموزش پروژه‌محور برنامه‌نویسی و یادگیری هوش مصنوعی (AI) در ایران.", homeOgDesc: "آینده‌ات را با داناورس کدنویسی کن! آموزش پروژه‌محور از صفر تا ورود به بازار کار." },
      
      // 👈 بخش جدید: صفحه یادگیری (Learning) - فارسی
      learningPage: {
        seo: {
          title: "مجله آموزشی و مقالات | داناورس",
          desc: "جدیدترین مقالات و آموزش‌های تخصصی هوش مصنوعی، برنامه‌نویسی، طراحی رابط کاربری و تکنولوژی روز دنیا."
        },
        hero: {
          title1: "مجله آموزشی و",
          titleHighlight: "مقالات تخصصی",
          desc: "جدیدترین مقالات و آموزش‌های دنیای <strong>هوش مصنوعی</strong> و <strong>برنامه‌نویسی</strong> را اینجا بخوانید.",
          searchPlaceholder: "جستجو در مقالات (عنوان یا متن)..."
        },
        tabs: {
          all: "همه مقالات",
          ai: "هوش مصنوعی",
          programming: "برنامه‌نویسی",
          tech: "تکنولوژی",
          kids: "کودک و نوجوان",
          design: "طراحی UI/UX",
          career: "مسیر شغلی"
        },
        featured: {
          badge: "مقاله ویژه",
          category: "هوش مصنوعی",
          date: "۲۴ اردیبهشت ۱۴۰۳",
          title: "آینده برنامه‌نویسی با ظهور هوش مصنوعی",
          desc: "آیا هوش مصنوعی جایگزین برنامه‌نویسان می‌شود؟ در این مقاله به بررسی عمیق تاثیر ابزارهایی مانند ChatGPT و GitHub Copilot بر آینده شغل برنامه‌نویسی و مهندسی نرم‌افزار می‌پردازیم.",
          author: "دپارتمان آموزش",
          readTime: "۸ دقیقه مطالعه"
        },
        ui: {
          loading: "در حال پردازش و دریافت مقالات از دیتابیس...",
          readLabel: "مطالعه مقاله",
          emptyTitle: "مقاله‌ای یافت نشد!",
          emptyDesc: "با کلمات کلیدی دیگری جستجو کنید یا دسته‌بندی را تغییر دهید.",
          loadMoreBtn: "بارگذاری مقالات بیشتر"
        },
        manualPosts: {
          p1: { title: "آموزش منطق برنامه‌نویسی به کودکان با اسکرچ", excerpt: "اسکرچ بهترین و جذاب‌ترین زبان برای شروع برنامه‌نویسی کودکان است تا تفکر منطقی را بیاموزند..." },
          p2: { title: "اصول روانشناسی رنگ در طراحی رابط کاربری (UI)", excerpt: "چگونه با استفاده از رنگ‌ها، احساسات کاربر را درگیر کرده و تجربه کاربری بهتری خلق کنیم..." },
          p3: { title: "پایتون یا جاوا اسکریپت؟ کدام برای شروع بهتر است؟", excerpt: "یک مقایسه جامع و کاربردی از دو زبان برنامه‌نویسی محبوب جهان برای کسانی که در ابتدای مسیر هستند..." },
          p4: { title: "آشنایی با الگوریتم‌های پایه در یادگیری ماشین", excerpt: "مفاهیم اولیه یادگیری ماشین و نحوه استفاده از آن‌ها برای حل مسائل روزمره در سیستم‌های هوشمند..." },
          p5: { title: "چگونه اولین پروژه فریلنسری خود را با موفقیت بگیریم؟", excerpt: "راهنمای قدم به قدم برای ورود به بازار کار فریلنسری، ساخت رزومه قدرتمند و مذاکره با کارفرما..." },
          p6: { title: "تاثیر بازی‌سازی بر رشد خلاقیت ذهنی نوجوانان", excerpt: "چرا ساخت بازی‌های ساده کامپیوتری به توسعه مهارت‌های حل مسئله و تفکر ریاضی نوجوانان کمک می‌کند..." }
        }
      },

      instructors: { 
        seo: { title: "بهترین اساتید برنامه‌نویسی و هوش مصنوعی | داناورس", desc: "آشنایی با تیم نخبگان، پژوهشگران و منتورهای ارشد آکادمی داناورس در دپارتمان‌های هوش مصنوعی.", ogTitle: "لیست اساتید و هسته پردازش آکادمی داناورس", ogDesc: "با برترین اساتید برنامه‌نویسی و هوش مصنوعی ایران آشنا شوید." }, 
        badge: "ACCESS LEVEL: MENTORS", title1: "لیست اساتید و منتورهای", titleHighlight: "هستـه پـردازش داناورس", subtitle: "با نخبگانی آشنا شوید که قوانین بازی را تغییر می‌دهند.", 
        tabs: { all: "ALL_DATA", ai: "هوش مصنوعی", python: "مهندسی پایتون", design: "دیزاین و گرافیک", maharat: "مهارت و رباتیک" }, 
        card: { active: "ACTIVE", scanBtn: "اسکن رزومه و دوره‌ها" }, 
        empty: { title: "سیستم استادی یافت نکرد", desc: "SEARCHING_DATABASE... 0 RESULTS FOUND." } 
      },
      
      instructorDetail: { 
        backBtn: "بازگشت به دیتابیس اساتید", skillsTitle: "مهارت‌های تخصصی (ACTIVE_MODULES)", bioTitle: "بیوگرافی و رزومه علمی", coursesTitle: "دوره‌های آموزشی فعال استاد", currency: "تومان", noCourses: "درحال حاضر دوره‌ای در سیستم ثبت نشده است.", notFound: "پروفایل پیدا نشد!", notFoundBtn: "بازگشت به دیتابیس", 
        seo: { title: "استاد {name} | مدرس {title} داناورس", desc: "رزومه، سوابق تدریس و دوره‌های فعال استاد {name}.", keywords: "استاد {name}, {title}", ogTitle: "رزومه و دوره‌های استاد {name}", notFound: "پروفایل پیدا نشد" } 
      },
      
      instructorData: { 
        i1: { name: "مهدی خزاعی", title: "متخصص پایتون و AI", bio: "توسعه‌دهنده ارشد و پژوهشگر هوش مصنوعی." }, 
        i2: { name: "پانیذ برنا", title: "مدیر هنری و گرافیک", bio: "متخصص در خلق هویت بصری، رابط کاربری (UI/UX)." }, 
        i3: { name: "داود قبادی", title: "منتور برنامه‌نویسی", bio: "کارشناس نرم‌افزار و متخصص در آموزش مفاهیم پایه برنامه‌نویسی." }, 
        i4: { name: "حسین عزیزی", title: "متخصص مکاترونیک", bio: "طراح سیستم‌های تعبیه‌شده و رباتیک." }, 
        i5: { name: "فرانک خزاعی", title: "پژوهشگر داده‌کاوی", bio: "متخصص تحلیل داده‌های کلان." }, 
        i6: { name: "مجید مهربخش", title: "توسعه‌دهنده بک‌اند", bio: "برنامه‌نویس ارشد سرور." }, 
        i7: { name: "علی رضایی", title: "طراح محصول", bio: "طراح تجربه کاربری." }, 
        i8: { name: "مهدیه روشن", title: "مدرس مهارت‌های نرم", bio: "متخصص آموزش مهارت‌های پایه." } 
      },
      
      courses: { 
        seo: { title: "لیست دوره‌های برنامه‌نویسی", desc: "لیست کامل دوره‌های آموزش برنامه‌نویسی.", ogTitle: "دوره‌های تخصصی آکادمی داناورس" }, 
        badge: "SYSTEM_DEPARTMENTS", title1: "دپارتمان‌های", titleHighlight: "آکادمی داناورس", subtitle: "روی ماژول دپارتمان مورد نظر کلیک کنید.", extractedTitle: "دوره‌های استخراج‌شده:", dataset: "DATA_SET:", courseId: "COURSE_ID:", active: "ACTIVE", scanBtn: "اسکن زمان‌بندی و جزئیات", 
        empty: { title: "هیچ دیتایی یافت نشد", desc: "UPDATING_SERVER... PLEASE_WAIT." }, 
        depts: { python: "برنامه‌نویسی پایتون", ai: "هوش مصنوعی و داده", design: "هنرهای دیجیتال و گرافیک", maharat: "مهارت‌های کاربردی و سخت" } 
      },
      
      courseData: { 
        c1: { title: "مهارت‌های هفت‌گانه (ICDL)", desc: "یادگیری کامل نرم‌افزارهای آفیس.", schedule: "روزهای زوج" }, 
        c2: { title: "رباتیک بزرگسال", desc: "طراحی، ساخت و برنامه‌نویسی.", schedule: "پنج‌شنبه‌ها" }, 
        c3: { title: "رباتیک دانش‌آموزی", desc: "آشنایی با سخت‌افزار.", schedule: "دوشنبه و چهارشنبه" }, 
        c4: { title: "اسکرچ (Scratch)", desc: "آموزش منطق برنامه‌نویسی برای کودکان.", schedule: "یکشنبه و سه‌شنبه" }, 
        c5: { title: "پایتون کودکان", desc: "زبان پایتون برای نوجوانان.", schedule: "شنبه و دوشنبه" }, 
        c6: { title: "پایتون مقدماتی", desc: "شروع قدرتمند.", schedule: "روزهای فرد" }, 
        c7: { title: "پایتون پیشرفته", desc: "مسلط به مباحث پیشرفته.", schedule: "پنج‌شنبه‌ها" }, 
        c8: { title: "ابزارهای هوش مصنوعی", desc: "تسلط بر ابزارهای کاربردی.", schedule: "روزهای زوج" }, 
        c9: { title: "ماشین لرنینگ", desc: "تحلیل داده‌ها.", schedule: "جمعه‌ها" }, 
        c10: { title: "فتوشاپ (Photoshop)", desc: "خلق جهان‌های بصری.", schedule: "یکشنبه و سه‌شنبه" }, 
        c11: { title: "ایلاستریتور (Illustrator)", desc: "طراحی برداری.", schedule: "دوشنبه و چهارشنبه" }, 
        c12: { title: "ایندیزاین (InDesign)", desc: "صفحه‌آرایی حرفه‌ای.", schedule: "پنج‌شنبه‌ها" }, 
        c13: { title: "تصویرسازی اسکیچ", desc: "پیاده‌سازی ایده‌های خلاقانه.", schedule: "روزهای فرد" } 
      },
      
      courseDetail: { 
        backBtn: "بازگشت به دپارتمان‌های آموزشی", badge: "مشخصات و برنامه زمان‌بندی آنلاین", daysLabel: "روزهای برگزاری:", timeLabel: "ساعت کلاس آنلاین:", startDateLabel: "تاریخ شروع دوره:", mentorLabel: "SECURE_ACCESS // MENTOR_DATA", scanInstructorBtn: "اسکن رزومه مدرس", investmentLabel: "سرمایه‌گذاری دوره:", currency: "تومان", registerBtn: "رزرو و ثبت‌نام در دوره", notFound: "دوره مورد نظر یافت نشد!", notFoundBtn: "بازگشت به لیست دوره‌ها", defaultDesc: "توضیحات به زودی...", defaultPrice: "ثبت‌نام به‌زودی", defaultStartDate: "تعیین نشده", defaultScheduleDays: "طبق تقویم", 
        seo: { title: "ثبت‌نام دوره {title}" } 
      },
      
      about: {
        seo: { title: "درباره آکادمی داناورس | مرجع آموزش برنامه‌نویسی و هوش مصنوعی", desc: "آکادمی داناورس پلتفرمی نوین برای یادگیری عمیق هوش مصنوعی و برنامه‌نویسی با آموزش ۱۰۰٪ پروژه‌محور و منتورینگ اختصاصی. مسیر رشد خود را با ما آغاز کنید." },
        hero: { badge: "درباره آکادمی داناورس", title1: "آکادمی داناورس؛ دروازه‌ای به دنیای", titleHighlight: "هوش مصنوعی", title2: "و برنامه‌نویسی", desc: "اگر به دنبال یادگیری <strong>برنامه‌نویسی</strong> و <strong>هوش مصنوعی</strong> هستید، در جای درستی قرار دارید. ما در داناورس با روش‌های نوین، شما را به یک متخصص حرفه‌ای تبدیل می‌کنیم.", btn1: "ثبت‌نام دوره رایگان", btn2: "تماس با ما" },
        stats: { title: "اعدادی که بخشی از", titleHighlight: "مسیر رشد", title2: "ما را نشان می‌دهند", s1Num: "٪۹۸", s1Text: "رضایت مخاطبان", s2Num: "+۵۰۰۰", s2Text: "هنرجوی همراه", s3Num: "+۱۲۰", s3Text: "محتوای آموزشی", s4Num: "+۵۰", s4Text: "دوره تخصصی" },
        story: { title1: "داستان شکل‌گیری", titleHighlight: "آکادمی داناورس", p1: "داناورس، پلتفرمی نوین برای یادگیری عمیق هوش مصنوعی و برنامه‌نویسی، در سال ۱۳۹۸ با هدف آموزش تخصصی و ایجاد فرصتی برابر برای یادگیری برای همه افراد، تاسیس شد.", p2: "از بدو تاسیس، با ارائه دوره‌های آموزشی با کیفیت بالا و استفاده از به‌روزترین متدهای آموزشی، به سرعت در میان علاقه‌مندان جایگاه ویژه‌ای پیدا کردیم. امروزه، داناورس با بیش از صدها دانشجو، به یکی از مدرن‌ترین پلتفرم‌های آموزشی آنلاین تبدیل شده است.", videoTitle: "معرفی آکادمی", videoDesc: "این ویدیو دروازه‌ایست به دنیای هیجان‌انگیز برنامه‌نویسی!" },
        roadmap: { title1: "مسیر آموزش", titleHighlight: "پروژه‌محور", title2: "در داناورس", desc: "قدم به قدم تا تبدیل شدن به یک متخصص حرفه‌ای", steps: { s1: { title: "شناخت نیاز", desc: "ابتدا مسیر و نیاز آموزشی مخاطب بررسی می‌شود تا محتوا دقیق‌تر و هدفمندتر باشد." }, s2: { title: "طراحی مسیر", desc: "آموزش‌ها به‌صورت مرحله‌ای و ساختارمند تدوین می‌شوند تا فهم و اجرا آسان باشد." }, s3: { title: "ارائه محتوای کاربردی", desc: "مفاهیم با زبانی روشن، مثال‌های عملی و قابل استفاده در بازار کار ارائه می‌شوند." }, s4: { title: "رشد و بهبود", desc: "ما بر اساس بازخورد کاربران، تجربه آموزشی را به‌طور مداوم بهتر می‌کنیم." } } },
        partners: "همکاران و حامیان ما"
      },
      
      contact: {
        seo: { title: "تماس با ما | داناورس" },
        hero: { bgText: "CONNECT", badge: "پل ارتباطی ما و شما", title1: "تماس با", titleHighlight: "داناورس", desc: "ما همیشه مشتاق شنیدن ایده‌ها، سوالات و نظرات شما هستیم. تیم منتورینگ و پشتیبانی داناورس در کوتاه‌ترین زمان پاسخگوی شماست." },
        sidebar: { title: "راه‌های ارتباطی", desc: "سریع‌ترین مسیر برای رسیدن به پاسخ سوالات شما.", email: "پست الکترونیکی", telegram: "پشتیبانی تلگرام", social: "ما را در فضای مجازی دنبال کنید" },
        form: { title: "ارسال پیام مستقیم", desc: "سوال یا چالش خود را بنویسید؛ کارشناسان ما در سریع‌ترین زمان پاسخ خواهند داد.", nameLabel: "نام و نام خانوادگی", namePlaceholder: "مثال: علی محمدی", phoneLabel: "شماره تماس", phonePlaceholder: "0912XXXXXXX", messageLabel: "متن پیام", messagePlaceholder: "پیام یا شرح درخواست خود را بنویسید...", submitBtn: "ارسال پیام", loadingBtn: "در حال ارسال اطلاعات..." },
        notifications: { emptyFields: "لطفاً تمامی فیلدها را به درستی پر کنید.", success: "پیام شما با موفقیت به بخش مدیریت ارسال شد!", serverError: "خطایی در برقراری ارتباط با سرور رخ داد. مجدداً تلاش کنید." }
      },

      talent: {
        seo: { title: "تست استعدادیابی برنامه‌نویسی و هوش مصنوعی رایگان | داناورس" },
        auth: { title: "ورود برای شروع استعدادیابی", desc: "برای اینکه بتوانیم نقشه شناختی ذهن شما را تحلیل کرده و نتیجه را برای همیشه در پروفایل اختصاصی شما ذخیره کنیم، لطفاً ابتدا وارد حساب کاربری خود شوید.", btn: "ورود / ثبت‌نام در سایت" },
        intro: { title1: "استعدادیاب", titleHighlight: "هوشمند", title2: "برنامه‌نویسی", subtitle: "به غریزه خود اعتماد کنید و سریع پاسخ دهید.", questionPrefix: "سوال", of: "از" },
        answers: { yes: "بله، کاملاً", maybe: "تا حدودی", no: "خیر" },
        analyzing: { title: "در حال تحلیل و ثبت نتیجه در پنل...", desc: "لطفاً چند لحظه منتظر بمانید" },
        result: { mainTitle: "نقشه شناختی ذهن شما", subtitle: "بر اساس تحلیل تخصصی پاسخ‌های شما، نیمرخ استعدادی زیر به دست آمد:", typeLabel: "تیپ شخصیتی شما:", chartLogic: "منطق و کدنویسی", chartArt: "هنر و خلاقیت", chartSystem: "سیستم و رباتیک", viewPanelBtn: "مشاهده نتیجه در پنل من", retryBtn: "تکرار مجدد آزمون" },
        messages: { successSave: "نتیجه آزمون و نمودار شما با موفقیت در داشبورد ثبت شد.", errorSave: "آزمون تمام شد، اما اجازه ذخیره نتیجه در دیتابیس داده نشد." },
        outcomes: { logic: { title: "تحلیل‌گر و معمار سیستم (برنامه‌نویس)", desc: "پاسخ‌های شما نشان می‌دهد ذهن شما به شدت ساختاریافته، تحلیلی و منطقی است. شما از کشف الگوها در میان اطلاعات پیچیده لذت می‌برید. دنیای برنامه‌نویسی و هوش مصنوعی دقیقاً جایی است که می‌توانید در آن بدرخشید." }, creative: { title: "خالق بصری و دیزاینر (UI/UX)", desc: "شما دنیا را از دریچه زیبایی، فرم و کاربردپذیری می‌بینید. نیمکره راست ذهن شما به شدت فعال است. طراحی رابط و تجربه کاربری مسیری است که ترکیب هنر و تکنولوژی را برای شما به ارمغان می‌آورد." }, mechanical: { title: "مهندس عمل‌گرا و خالق سیستم‌ها", desc: "شما یک مهندس ذاتی هستید! کنجکاوی شما برای درک «نحوه کارکرد اشیاء» و علاقه به خلق چیزهای ملموس، نقطه قوت شماست. ترکیب کد با سخت‌افزار، IoT و رباتیک شما را به وجد خواهد آورد." } },
        questions: { q1: "آیا از حل معماهای پیچیده و مسائل منطقی لذت می‌برید؟", q2: "آیا در انتخاب رنگ لباس یا چیدمان اتاق دقت زیادی دارید؟", q3: "آیا کنجکاو هستید که بدانید وسایل الکترونیکی چگونه کار می‌کنند؟", q4: "آیا پیدا کردن الگوها و نظم در اطلاعات برای شما جذاب است؟", q5: "آیا به ظاهر و گرافیک اپلیکیشن‌ها بیشتر از کارکردشان دقت می‌کنید؟", q6: "آیا از ساختن کاردستی‌های متحرک یا کار با ابزارآلات لذت می‌برید؟", q7: "آیا یادگیری قوانین یک زبان جدید برای شما شیرین است؟", q8: "آیا به عکاسی و ویرایش خلاقانه تصاویر علاقه دارید؟", q9: "آیا تماشای ویدیوهای سرهم کردن موتورها و گجت‌ها را دوست دارید؟", q10: "آیا برای کارهای روزانه خود برنامه‌ریزی مرحله‌به‌مرحله می‌کنید؟", q11: "آیا به طراحی کاراکترها یا خلق داستان‌های جدید فکر می‌کنید؟", q12: "آیا از سرهم کردن پازل‌های سه‌بعدی یا لگوهای پیچیده لذت می‌برید؟", q13: "آیا در بازی‌های کامپیوتری، بازی‌های استراتژیک را ترجیح می‌دهید؟", q14: "آیا انتخاب فونت مناسب برای ارائه‌های درسی برایتان مهم است؟", q15: "آیا تا به حال سعی کرده‌اید یک وسیله خراب را خودتان تعمیر کنید؟" }
      },

      whyUs: {
        seo: { title: "چرا داناورس؟ | تفاوت‌ها و مزایای آکادمی" },
        hero: { badge: "تفاوت داناورس چیست؟", title1: "فراتر از یک آموزشگاه،", titleHighlight: "مسیر میان‌بر به بازار کار", desc: "ما تئوری‌های خسته‌کننده دانشگاهی را دور ریخته‌ایم. در داناورس، شما از روز اول مثل یک مهندس ارشد کار می‌کنید." },
        projects: { title1: "۱۰۰٪", titleHighlight: "پروژه‌محور", desc: "خداحافظی با کدهای بی‌معنی روی تخته سیاه! تمام مسیرهای آموزشی ما بر اساس پروژه‌های واقعی استارتاپی طراحی شده‌اند. از ساخت سیستم‌های هوش مصنوعی تا طراحی رابط کاربری یک اپلیکیشن واقعی؛ شما رزومه‌تان را حین یادگیری می‌سازید.", bullet1: "شبیه‌سازی محیط کار واقعی (Agile/Scrum)", bullet2: "خروجی قابل ارائه در گیت‌هاب و پورتفولیو" },
        mentoring: { title1: "منتورینگ", titleHighlight: "اختصاصی", desc: "یادگیری مهارت‌های پیچیده نیازمند یک راهنمای دلسوز است. اساتید ما صرفاً ویدیو ضبط نکرده‌اند؛ آن‌ها به صورت هفتگی کدهای شما را بررسی (Code Review) می‌کنند، باگ‌هایتان را رفع کرده و نقشه راه اختصاصی شما را تنظیم می‌کنند.", bullet1: "جلسات آنلاین رفع اشکال هفتگی", bullet2: "ارتباط مستقیم با مدرسین ارشد" },
        career: { title1: "پشتیبانی", titleHighlight: "بازار کار", desc: "هدف ما فقط آموزش نیست؛ هدف ما استخدام شماست! هنرجویان برترِ دوره‌های ما مستقیماً به شرکت‌های دانش‌بنیان، استارتاپ‌ها و پروژه‌های فریلنسری معرفی می‌شوند. ما در نوشتن رزومه و مصاحبه‌های شغلی کنار شما هستیم.", bullet1: "ساخت رزومه بین‌المللی و لینکدین", bullet2: "معرفی مستقیم به شبکه‌های کاریابی شریک" },
        certificate: { title1: "ارائه مدرک", titleHighlight: "معتبر", desc: "پایان دوره شما، آغاز مسیر حرفه‌ای است. با انجام موفقیت‌آمیز پروژه‌های پایانی، مدرک معتبر آکادمی داناورس (با کد رهگیری اختصاصی) به شما اعطا می‌شود که برای ارائه اعتبار بالایی دارد.", bullet1: "گواهینامه دوزبانه (فارسی و انگلیسی)", bullet2: "دارای کد پیگیری آنلاین در سایت" },
        cta: { title: "به جامعه حرفه‌ای‌ها بپیوندید", desc: "همین حالا می‌توانید یکی از مسیرهای یادگیری ما را انتخاب کنید و روی آینده خود سرمایه‌گذاری مطمئنی انجام دهید.", btn: "مشاهده دوره‌های آموزشی" }
      },

      roadmapPath: {
        seoTitle: "مسیر یادگیری {title} | داناورس",
        intro: { pathText: "مسیر یادگیری", roadmap: "نقشه راه", yourExpertise: "تخصص شما", subtitle: "این یک مسیر معمولی نیست؛ یک صعود مهندسی شده از نقطه صفر تا بازار کار حرفه‌ای است.", phase: "مرحله", skillsLabel: "مهارت‌های این مرحله:" },
        cta: { title: "آماده‌ی شروع این مسیر هستید؟", desc: "همین حالا دوره‌های مرتبط با این مسیر را مشاهده کنید یا در آزمون استعدادیابی شرکت کنید تا مطمئن شوید این بهترین انتخاب برای شماست.", coursesBtn: "مشاهده دوره‌های این مسیر", talentBtn: "شرکت در تست استعدادیابی" },
        notFound: { title: "404", desc: "مسیر یادگیری مورد نظر پیدا نشد.", btn: "بازگشت به صفحه اصلی" },
        teenagers: { title: "کودکان و نوجوانان", badge: "دپارتمان پایه و خلاقیت", description: "در این مسیر، ذهن خلاق کودکان و نوجوانان از طریق بازی‌سازی و ابزارهای بصری، با منطق برنامه‌نویسی و دنیای جذاب رباتیک آشنا می‌شود.", steps: { s1: { title: "درک منطق و الگوریتم", desc: "استفاده از پلتفرم‌های بلوکی مثل Scratch برای درک عمیق حلقه‌ها، شرط‌ها و تفکر کامپیوتری بدون درگیری با کدهای پیچیده.", skills: ["تفکر منطقی", "حل مسئله", "اسکرچ"] }, s2: { title: "بازی‌سازی دوبعدی", desc: "خلق بازی‌های تعاملی و داستان‌های متحرک. هنرجو یاد می‌گیرد چگونه ایده‌های ذهنی خود را به یک خروجی قابل بازی تبدیل کند.", skills: ["طراحی بازی", "مختصات", "خلاقیت"] }, s3: { title: "ورود به دنیای واقعی کد", desc: "گذر نرم از کدهای بلوکی به کدهای متنی با زبان برنامه‌نویسی پایتون (مخصوص نوجوانان). نوشتن اولین اسکریپت‌های واقعی.", skills: ["مبانی پایتون", "سینتکس", "متغیرها"] }, s4: { title: "رباتیک و الکترونیک", desc: "آشنایی با بردهای آردوینو و سنسورها. کدهایی که نوشتند حالا در دنیای واقعی حرکت می‌کنند و چراغ‌ها را روشن می‌کنند.", skills: ["آردوینو", "مدارات پایه", "سخت‌افزار"] } } },
        coding: { title: "برنامه‌نویسی و هوش مصنوعی", badge: "دپارتمان مهندسی نرم‌افزار", description: "جامع‌ترین مسیر برای تبدیل شدن به یک توسعه‌دهنده و مهندس هوش مصنوعی. از درک عمیق الگوریتم‌ها تا ساخت مدل‌های یادگیری ماشین.", steps: { s1: { title: "مبانی برنامه‌نویسی پایتون", desc: "شروع قدرتمند با زبان پایتون. تسلط بر متغیرها، توابع، حلقه‌ها و ساختارهای داده پایه مثل لیست‌ها و دیکشنری‌ها.", skills: ["پایتون", "ساختمان داده", "توابع"] }, s2: { title: "برنامه‌نویسی شی‌گرا (OOP)", desc: "یادگیری تفکر مهندسی. پیاده‌سازی کلاس‌ها، وراثت، و دیزاین پترن‌های پایه برای نوشتن کدهای تمیز و قابل توسعه.", skills: ["شی‌گرایی", "کدنویسی تمیز", "معماری"] }, s3: { title: "داده‌کاوی و تحلیل داده", desc: "کار با کتابخانه‌های قدرتمند Pandas و NumPy برای استخراج، پاکسازی و تحلیل داده‌های خام.", skills: ["پانداس", "نامپای", "مصورسازی داده"] }, s4: { title: "هوش مصنوعی و یادگیری ماشین", desc: "اوج مسیر! طراحی و آموزش مدل‌های هوش مصنوعی با Scikit-Learn و TensorFlow برای پیش‌بینی و پردازش تصویر.", skills: ["یادگیری ماشین", "تنسورفلو", "یادگیری عمیق"] } } },
        design: { title: "طراحی رابط کاربری (UI/UX)", badge: "دپارتمان هنرهای دیجیتال", description: "ترکیب هنر و تکنولوژی. در این مسیر یاد می‌گیرید چگونه محصولات دیجیتالی خلق کنید که علاوه بر زیبایی چشم‌نواز، تجربه کاربری بی‌نظیری داشته باشند.", steps: { s1: { title: "مبانی هنر و گرافیک دیجیتال", desc: "درک روانشناسی رنگ‌ها، تایپوگرافی، فضای منفی و اصول پایه‌ای که یک طراحی معمولی را به یک شاهکار تبدیل می‌کند.", skills: ["تئوری رنگ", "تایپوگرافی", "لی‌اوت"] }, s2: { title: "تسلط بر ابزارهای گرافیکی", desc: "یادگیری حرفه‌ای فتوشاپ و ایلاستریتور برای ساخت آیکون‌ها، ادیت تصاویر و خلق وکتورهای اختصاصی.", skills: ["فتوشاپ", "ایلاستریتور", "وکتور"] }, s3: { title: "طراحی رابط کاربری با Figma", desc: "ورود به دنیای UI. طراحی صفحات وب و اپلیکیشن‌های موبایل در نرم‌افزار قدرتمند فیگما بر اساس استانداردهای جهانی.", skills: ["فیگما", "طراحی رابط", "وایرفریم"] }, s4: { title: "تجربه کاربری و پروتوتایپ (UX)", desc: "بررسی رفتار کاربر، تست کاربرپذیری، و متحرک‌سازی صفحات (Prototyping) برای ارائه پروژه نهایی به برنامه‌نویسان.", skills: ["تحقیقات کاربر", "پروتوتایپ", "سفر کاربر"] } } }
      },

      projectsPage: {
        seo: { title: "گالری پروژه‌ها | آکادمی داناورس", desc: "گالری نمونه کارهای برنامه‌نویسی، هوش مصنوعی، رباتیک و بازی‌سازی هنرجویان آکادمی داناورس." },
        hero: { badge: "نمایشگاه دستاوردهای هنرجویان", title1: "خلق آینده با", titleHighlight: "کدهای امروز", desc: "شاهد جادوی خلاقیت و تخصص هنرجویان آکادمی داناورس باشید. اینجا جایی است که ایده‌های خام، به پروژه‌های واقعی و شگفت‌انگیز تبدیل می‌شوند." },
        categories: { all: "همه دستاوردها", ai: "هوش مصنوعی و پایتون", web: "طراحی وب و اپلیکیشن", robotics: "رباتیک و اینترنت اشیا", game: "بازی‌سازی و اسکرچ" },
        empty: { title: "داده‌ای یافت نشد", desc: "پروژه‌های این بخش در حال بروزرسانی هستند. لطفاً دسته‌بندی دیگری را انتخاب کنید." },
        list: {
          p1: { title: "دستیار صوتی هوشمند (شبیه جارویس)", desc: "توسعه یک دستیار صوتی با پایتون که می‌تواند دستورات صوتی فارسی را پردازش کرده، در وب جستجو کند و وسایل هوشمند اتاق را کنترل کند.", catName: "پایتون پیشرفته", age: "هنرجوی ۱۶ ساله" },
          p2: { title: "سیستم تشخیص سرطان پوست", desc: "یک مدل یادگیری عمیق (Deep Learning) که با دریافت تصویر ضایعه پوستی، احتمال سرطانی بودن آن را با دقت ۹۲٪ پیش‌بینی می‌کند.", catName: "ماشین لرنینگ", age: "هنرجوی ۲۱ ساله" },
          p3: { title: "ربات معامله‌گر ارز دیجیتال", desc: "رباتی که با استفاده از الگوریتم‌های هوش مصنوعی، نمودارهای قیمتی را تحلیل کرده و سیگنال‌های خرید و فروش صادر می‌کند.", catName: "هوش مصنوعی", age: "هنرجوی ۱۹ ساله" },
          p4: { title: "تشخیص خستگی راننده", desc: "پروژه‌ای بر پایه بینایی ماشین که با اسکن چشم‌های راننده، در صورت تشخیص خواب‌آلودگی، آژیر خطر را به صدا در می‌آورد.", catName: "بینایی ماشین", age: "هنرجوی ۲۴ ساله" },
          p5: { title: "پلتفرم رزرو آنلاین پزشک", desc: "طراحی صفر تا صد رابط کاربری یک اپلیکیشن نوبت‌دهی پزشکی با تمرکز بر تجربه کاربری سالمندان.", catName: "UI/UX دیزاین", age: "هنرجوی ۱۸ ساله" },
          p6: { title: "داشبورد مدیریتی مالی داینامیک", desc: "طراحی و پیاده‌سازی یک داشبورد مدرن تحت وب برای مدیریت هزینه‌ها با نمودارهای زنده و پشتیبانی کامل از دارک مود.", catName: "توسعه فرانت‌اند", age: "هنرجوی ۲۲ ساله" },
          p7: { title: "وب‌سایت سه بعدی گالری هنر", desc: "یک وب‌سایت خیره‌کننده که با استفاده از تکنولوژی‌های سه‌بعدی تحت وب، آثار هنری را در یک موزه مجازی به نمایش می‌گذارد.", catName: "توسعه وب سه‌بعدی", age: "هنرجوی ۲۰ ساله" },
          p8: { title: "اپلیکیشن مدیریت وظایف تیمی", desc: "یک پلتفرم مدیریت پروژه شبیه ترلو (Trello) با قابلیت جابجایی کارت‌ها (Drag & Drop) و چت زنده.", catName: "توسعه فول‌استک", age: "هنرجوی ۲۵ ساله" },
          p9: { title: "بازوی رباتیک خط تولید", desc: "ساخت و برنامه‌نویسی صفر تا صد یک بازوی رباتیک ۳ محوره با استفاده از برد آردوینو.", catName: "رباتیک صنعتی", age: "هنرجوی ۱۷ ساله" },
          p10: { title: "سیستم خانه هوشمند (IoT)", desc: "کنترل لامپ‌ها، دما و درب منزل از طریق اینترنت و گوشی موبایل.", catName: "اینترنت اشیا", age: "هنرجوی ۱۵ ساله" },
          p11: { title: "ربات مسیریاب مسابقه‌ای", desc: "رباتی سریع و دقیق که با استفاده از سنسورهای مادون قرمز قادر است پیچیده‌ترین مسیرها را طی کند.", catName: "رباتیک دانش‌آموزی", age: "هنرجوی ۱۴ ساله" },
          p12: { title: "گلدان هوشمند خودآبیار", desc: "گلدانی که رطوبت خاک را می‌سنجد و در صورت نیاز به صورت خودکار به گیاه آب می‌دهد.", catName: "الکترونیک کاربردی", age: "هنرجوی ۱۳ ساله" },
          p13: { title: "بازی نبرد فضایی", desc: "طراحی یک بازی آرکید هیجان‌انگیز که در آن سفینه کاربر باید به دشمنان فضایی شلیک کند.", catName: "بازی‌سازی کودکان", age: "هنرجوی ۹ ساله" },
          p14: { title: "بازی سه‌بعدی فرار از مارپیچ", desc: "توسعه یک بازی سه‌بعدی جذاب که پلیر باید در یک هزارتوی تاریک، راه خروج را پیدا کند.", catName: "بازی‌سازی پیشرفته", age: "هنرجوی ۱۶ ساله" },
          p15: { title: "پلتفرمر جادویی", desc: "یک بازی دو بعدی مشابه ماریو با گرافیک پیکسلی دست‌ساز و سیستم امتیازدهی.", catName: "بازی‌سازی ۲ بعدی", age: "هنرجوی ۱۴ ساله" },
          p16: { title: "شبیه‌ساز ترافیک شهری", desc: "انیمیشن و شبیه‌سازی هوشمند حرکت خودروها در تقاطع با رعایت چراغ راهنمایی.", catName: "برنامه‌نویسی منطقی", age: "هنرجوی ۱۰ ساله" }
        }
      },

      register: {
        seo: { title: "ثبت‌نام | آکادمی داناورس" },
        success: { title: "ثبت‌نام شما با موفقیت ثبت شد!", desc: "به زودی با شما تماس می‌گیریم.", redirect: "در حال انتقال به صفحه اصلی..." },
        form: { title: "پذیرش در آکادمی داناورس", desc: "مسیر تبدیل شدن به یک متخصص از اینجا آغاز می‌شود.", nameLabel: "نام", namePlaceholder: "مثال: علی", surnameLabel: "نام خانوادگی", surnamePlaceholder: "مثال: محمدی", phoneLabel: "شماره تماس (بدون صفر)", phonePlaceholder: "912 345 6789", ageLabel: "سن", agePlaceholder: "مثال: 24", dateLabel: "تاریخ ثبت‌نام", dateBadge: "خودکار", instLabel: "نام مدرسه یا دانشگاه", instPlaceholder: "محل تحصیل فعلی یا فارغ‌التحصیلی", courseLabel: "دوره آموزشی مورد نظر", courseDefault: "انتخاب کنید...", investmentLabel: "سرمایه‌گذاری شما:", currency: "تومان", submitBtn: "تکمیل ثبت‌نام و پرداخت", loadingBtn: "درحال پردازش..." },
        errors: { generic: "خطایی رخ داد. لطفاً مجدداً تلاش کنید." },
        courses: { c1: "پایتون مقدماتی", c2: "پایتون پیشرفته", c3: "پایتون کودکان", c4: "ابزارهای هوش مصنوعی", c5: "ماشین لرنینگ", c6: "فتوشاپ (Photoshop)", c7: "ایلاستریتور (Illustrator)", c8: "ایندیزاین (InDesign)", c9: "تصویرسازی اسکیچ", c10: "مهارت‌های هفت‌گانه (ICDL)", c11: "رباتیک بزرگسال", c12: "اسکرچ (Scratch)", c13: "رباتیک دانش‌آموزی" }
      },

      loginPage: {
        seo: { title: "ورود / ثبت‌نام | داناورس" },
        welcomeBack: "خوش برگشتید! برای ورود اطلاعات خود را وارد کنید.",
        joinUs: "به جمع ما بپیوندید و مسیر یادگیری را شروع کنید.",
        tabLogin: "ورود",
        tabRegister: "ثبت‌نام",
        nameLabel: "نام و نام خانوادگی",
        namePlaceholder: "مثال: علی رضایی",
        emailLabel: "ایمیل",
        emailPlaceholder: "example{'@'}email.com",
        passwordLabel: "رمز عبور",
        passwordPlaceholder: "••••••••",
        forgotPassword: "فراموشی رمز؟",
        btnLoading: "درحال پردازش...",
        btnLogin: "ورود به پنل",
        btnRegister: "ساخت حساب کاربری",
        msgLoginSuccess: "ورود موفقیت‌آمیز بود! در حال انتقال...",
        msgRegisterSuccess: "ثبت‌نام با موفقیت انجام شد! حالا می‌توانید وارد شوید.",
        errInvalidCreds: "ایمیل یا رمز عبور اشتباه است.",
        errUserExists: "این ایمیل قبلاً ثبت‌نام کرده است.",
        errGeneric: "خطایی رخ داد: "
      },

      home: { 
        hero: { badge: "پلتفرم جامع آموزش", title1: "آکادمی برنامه‌نویسی و هوش مصنوعی", titleHighlight: "داناورس", desc: "آموزش مهارت‌های آینده با رویکرد ورود مستقیم به بازار کار.", btn: "مشاهده دوره‌های آموزشی" }, 
        benefits: { b1: "آموزش ۱۰۰٪ پروژه‌محور", b2: "منتورینگ اختصاصی", b3: "پشتیبانی بازار کار", b4: "ارائه مدرک معتبر" }, 
        talent: { badge: "سیستم استعدادیابی", title: "مسیر شغلی شما کجاست؟", desc: "مسیر آموزشی ایده‌آل خود را پیدا کنید.", btn: "شروع آنالیز ذهن" }, 
        paths: { title1: "مسیرهای جامع", titleHighlight: "آموزش", desc: "نقشه راه گام‌به‌گام.", btn: "شروع مسیر", p1: { name: "کودکان و نوجوانان", desc: "از اسکرچ تا بازی‌های جذاب رباتیک." }, p2: { name: "برنامه‌نویسی و AI", desc: "از پایتون تا یادگیری ماشین." }, p3: { name: "طراحی رابط کاربری", desc: "از فتوشاپ تا دیزاین UI/UX." } }, 
        demo: { badge: "دوره پایتون پیشرفته", title1: "کدنویسی را", titleHighlight: "عملی", title2: "لمس کنید", desc: "ما شما را مستقیماً وارد پروژه‌های واقعی می‌کنیم.", link: "مشاهده سرفصل‌ها" }, 
        projects: { badge: "خروجیِ دوره‌ها", title1: "پروژه‌های عملی", titleHighlight: "دانشجویان", desc: "ما به نتیجه کار هنرجویان افتخار می‌کنیم.", btn: "مشاهده همه پروژه‌ها", p1: { badge: "هوش مصنوعی", title: "سیستم تشخیص چهره", desc: "پروژه پایانی با پایتون." }, p2: { badge: "الکترونیک", title: "ساخت بازوی رباتیک", desc: "پیاده‌سازی صفر تا صد سخت‌افزار." } }, 
        instructorsData: { badge: "منتورهای شما", title1: "اساتید", titleHighlight: "برجسته", title2: "داناورس", btn: "معرفی تمام اساتید", i1: { title: "متخصص پایتون", bio: "توسعه‌دهنده ارشد." }, i2: { title: "مدیر هنری", bio: "متخصص رابط کاربری." }, i3: { title: "پژوهشگر داده‌کاوی", bio: "متخصص تحلیل داده‌های کلان." } }, 
        instructors: { badge: "منتورهای شما", title1: "اساتید", titleHighlight: "برجسته", title2: "داناورس", btn: "معرفی تمام اساتید" },
        compare: { badge: "دپارتمان طراحی", title: "تفاوت را با چشمان خود ببینید", desc: "خروجی خام را مقایسه کنید.", after: "بعد (After)", before: "قبل (Before)" }, 
        testimonials: { 
          title1: "صدای", titleHighlight: "هنرجویان", title2: "ما", desc: "بیش از ۵۰۰۰ نفر مسیر آینده‌شان را با ما آغاز کرده‌اند.", 
          t1: { text: "من هیچ پیش‌زمینه‌ای نداشتم، اما با داناورس در کمتر از ۶ ماه استخدام شدم!", course: "دانش‌آموخته پایتون" }, 
          t2: { text: "پروژه‌های عملی بی‌نظیر است. احساس می‌کنی در یک شرکت بین‌المللی کار می‌کنی.", course: "طراحی UI/UX" }, 
          t3: { text: "اینکه از روز اول وارد محیط کدنویسی می‌شویم، بهترین ویژگی این آکادمی است.", course: "دانشجوی AI" },
          t4: { text: "پشتیبانی داناورس بی‌نظیره! هر جا تو کدنویسی گیر کردم، منتورها سریع مشکلم رو حل کردن.", course: "طراحی سایت" },
          t5: { text: "فضای پروژه‌محور کلاس‌ها باعث شد ترس من از برنامه‌نویسی بریزه و الان یه اپلیکیشن برای خودم نوشتم.", course: "پایتون پیشرفته" },
          t6: { text: "استعدادیابی اولیه خیلی کمکم کرد تا مسیر درست رو انتخاب کنم و وقتم رو تلف نکنم.", course: "هوش مصنوعی" }
        }, 
        faq: { 
          title1: "سوالات متداول درباره", titleHighlight: "دوره‌ها", desc: "پاسخ به دغدغه‌های همیشگی قبل از شروع مسیر.", 
          q1: "آیا برای شرکت در دوره‌ها نیاز به پیش‌نیاز یا دانش قبلی دارم؟", a1: "خیر، رسالت داناورس آموزش از نقطه صفر است. تمام دوره‌های پایه ما به گونه‌ای طراحی شده‌اند که بدون هیچ پیش‌زمینه‌ای بتوانید مفاهیم را یاد بگیرید.", 
          q2: "کلاس‌ها به چه صورت برگزار می‌شوند؟ آیا ضبط می‌شوند؟", a2: "دوره‌ها به صورت ترکیبی (ویدئوهای ضبط شده با کیفیت سینمایی + جلسات آنلاین رفع اشکال با منتور) هستند. شما همیشه به آپدیت‌های دوره دسترسی مادام‌العمر خواهید داشت.", 
          q3: "آیا در پایان دوره‌ها مدرکی هم ارائه می‌شود؟", a3: "بله! پس از انجام موفقیت‌آمیز پروژه‌های پایانی، مدرک معتبر آکادمی داناورس (دو زبانه) به شما تقدیم می‌شود که برای رزومه و مهاجرت کاری بسیار معتبر است.", 
          q4: "تفاوت مسیر کودکان با بزرگسالان در چیست؟", a4: "در مسیر کودکان، زبان آموزش مبتنی بر بازی‌سازی و ابزارهای بصری است تا کودک خسته نشود؛ اما در بخش بزرگسالان، تمرکز روی کدهای خام، چالش‌های الگوریتمی و بازار کار است.",
          q5: "آیا پس از پایان دوره، تضمینی برای استخدام وجود دارد؟", a5: "ما با ارائه آموزش‌های پروژه‌محور و جلسات شبیه‌سازی مصاحبه، شما را برای بازار کار آماده می‌کنیم. همچنین هنرجویان برتر مستقیماً به شرکت‌های همکار معرفی می‌شوند.",
          q6: "آیا امکان رفع اشکال مستقیم با استاد وجود دارد؟", a6: "بله! شما در طول دوره به گروه خصوصی تلگرامی و همچنین جلسات لایو پرسش و پاسخ دسترسی دارید تا تمام مشکلات خود را مستقیماً با منتور حل کنید.",
          q7: "چطور متوجه شوم کدام دوره برای من مناسب‌تر است؟", a7: "کافیست از بخش «استعدادیابی رایگان» سایت ما استفاده کنید. سیستم هوشمند ما با پرسیدن چند سوال، بهترین مسیر یادگیری را به شما پیشنهاد می‌دهد."
        }, 
        cta: { badge: "ثبت‌نام ترم جدید آغاز شد", title1: "آماده‌ی", titleHighlight: "تغییر", title2: "هستی؟", desc: "روی تخصصت سرمایه‌گذاری کن. با داناورس، مسیر ورود به بازار کار جهانی از همین‌جا شروع می‌شود.", btn: "شروع یادگیری" }, 
        footer: { desc: "داناورس، پیشگام در آموزش مدرن و پروژه‌محور تکنولوژی. ما اینجا هستیم تا با تلفیق هوش مصنوعی، برنامه‌نویسی و مهارت‌های توسعه فردی، نسل جدیدی از متخصصان را برای بازار کار جهانی تربیت کنیم. داناورس فقط یک آکادمی نیست؛ پلی است از استعدادهای نهفته‌ی شما تا خلق آینده‌ای درخشان در دنیای دیجیتال.", pathsTitle: "مسیرهای اصلی / Paths", contactTitle: "ارتباط / Contact", copyright: "تمامی حقوق محفوظ است.", privacy: "حریم خصوصی", terms: "شرایط استفاده" } 
      }
    },

    en: {
      nav: { home: "Home", courses: "Courses", learning: "Learning", talentTest: "Talent Test", instructors: "Instructors", about: "About Us", contact: "Contact Us" },
      auth: { adminPanel: "Admin Dashboard", dashboard: "User Dashboard", login: "Login / Register", logout: "Logout" },
      seo: { homeTitle: "Danaverse | Programming Academy", homeDesc: "Project-based coding & AI academy.", homeOgDesc: "Code your future with Danaverse!" },
      
      // 👈 بخش جدید: صفحه یادگیری (Learning) - انگلیسی
      learningPage: {
        seo: {
          title: "Learning Magazine & Articles | Danaverse",
          desc: "The latest specialized articles and tutorials on Artificial Intelligence, Programming, UI/UX Design, and Technology."
        },
        hero: {
          title1: "Educational Magazine &",
          titleHighlight: "Tech Articles",
          desc: "Read the latest articles and tutorials in the world of <strong>AI</strong> and <strong>Programming</strong>.",
          searchPlaceholder: "Search articles (title or content)..."
        },
        tabs: {
          all: "All Articles",
          ai: "AI",
          programming: "Programming",
          tech: "Technology",
          kids: "Kids & Teens",
          design: "UI/UX Design",
          career: "Career Path"
        },
        featured: {
          badge: "Featured Article",
          category: "Artificial Intelligence",
          date: "May 14, 2024",
          title: "The Future of Programming with AI",
          desc: "Will AI replace programmers? In this article, we take a deep dive into the impact of tools like ChatGPT and GitHub Copilot on the future of programming and software engineering jobs.",
          author: "Education Department",
          readTime: "8 min read"
        },
        ui: {
          loading: "Fetching articles from database...",
          readLabel: "Read Article",
          emptyTitle: "No articles found!",
          emptyDesc: "Try searching with different keywords or change the category.",
          loadMoreBtn: "Load More Articles"
        },
        manualPosts: {
          p1: { title: "Teaching Programming Logic to Kids with Scratch", excerpt: "Scratch is the best and most engaging language to start kids coding and teach them logical thinking..." },
          p2: { title: "Color Psychology Principles in UI Design", excerpt: "How to engage user emotions and create a better user experience using the right colors..." },
          p3: { title: "Python or JavaScript? Which is better for beginners?", excerpt: "A comprehensive and practical comparison of the two most popular programming languages for those just starting out..." },
          p4: { title: "Introduction to Basic Machine Learning Algorithms", excerpt: "Basic concepts of machine learning and how to use them to solve everyday problems in smart systems..." },
          p5: { title: "How to Land Your First Freelance Project Successfully?", excerpt: "A step-by-step guide to entering the freelance market, building a strong resume, and negotiating with clients..." },
          p6: { title: "The Impact of Game Development on Teen Creativity", excerpt: "Why making simple computer games helps teens develop problem-solving skills and mathematical thinking..." }
        }
      },

      instructors: { 
        seo: { title: "Best Instructors | Danaverse", desc: "Meet the elite team of Danaverse Academy.", ogTitle: "Danaverse Core Mentors", ogDesc: "Meet the top programming instructors." }, 
        badge: "ACCESS LEVEL: MENTORS", title1: "Mentors & Instructors of", titleHighlight: "Danaverse Core", subtitle: "Meet the elites.", 
        tabs: { all: "ALL_DATA", ai: "AI", python: "Python", design: "UI/UX", maharat: "Robotics" }, 
        card: { active: "ACTIVE", scanBtn: "Scan Resume" }, 
        empty: { title: "No Instructor Found", desc: "SEARCHING_DATABASE... 0 RESULTS FOUND." } 
      },
      
      instructorDetail: { 
        backBtn: "Back to Database", skillsTitle: "Skills (ACTIVE_MODULES)", bioTitle: "Biography", coursesTitle: "Active Courses", currency: "Tomans", noCourses: "No active courses.", notFound: "Profile Not Found!", notFoundBtn: "Return", 
        seo: { title: "Mentor {name} | {title}", desc: "Resume of Mentor {name}.", keywords: "Mentor {name}", ogTitle: "Resume of {name}", notFound: "Not Found" } 
      },
      
      instructorData: { 
        i1: { name: "Mehdi Khazaei", title: "Python & AI Expert", bio: "Senior developer and AI researcher." }, 
        i2: { name: "Paniz Borna", title: "Art & Graphic Director", bio: "Expert in creating visual identities." }, 
        i3: { name: "Davood Ghobadi", title: "Programming Mentor", bio: "Software expert." }, 
        i4: { name: "Hossein Azizi", title: "Mechatronics Expert", bio: "Embedded systems designer." }, 
        i5: { name: "Faranak Khazaei", title: "Data Mining Researcher", bio: "Specialist in big data." }, 
        i6: { name: "Majid Mehrbakhsh", title: "Backend Developer", bio: "Senior server programmer." }, 
        i7: { name: "Ali Rezaei", title: "Product Designer", bio: "User Experience designer." }, 
        i8: { name: "Mahdieh Roshan", title: "Soft Skills Instructor", bio: "Expert in teaching basic computer skills." } 
      },
      
      courses: { 
        seo: { title: "Courses List", desc: "Full list of programming courses.", ogTitle: "Specialized Courses" }, 
        badge: "SYSTEM_DEPARTMENTS", title1: "Departments of", titleHighlight: "Danaverse Academy", subtitle: "Click on the desired department module.", extractedTitle: "Extracted Courses:", dataset: "DATA_SET:", courseId: "COURSE_ID:", active: "ACTIVE", scanBtn: "Scan Details", 
        empty: { title: "No Data Found", desc: "UPDATING_SERVER... PLEASE_WAIT." }, 
        depts: { python: "Python", ai: "AI & Data", design: "Digital Arts", maharat: "Applied Skills" } 
      },
      
      courseData: { 
        c1: { title: "ICDL", desc: "Complete learning of Office.", schedule: "Even Days" }, 
        c2: { title: "Adult Robotics", desc: "Design & program microcontrollers.", schedule: "Thursdays" }, 
        c3: { title: "Student Robotics", desc: "Introduction to hardware.", schedule: "Mondays & Wednesdays" }, 
        c4: { title: "Scratch Programming", desc: "Teaching programming logic.", schedule: "Sundays & Tuesdays" }, 
        c5: { title: "Python for Kids", desc: "Python language for teens.", schedule: "Saturdays & Mondays" }, 
        c6: { title: "Python Basics", desc: "A strong start.", schedule: "Odd Days" }, 
        c7: { title: "Advanced Python", desc: "Master advanced Python.", schedule: "Thursdays" }, 
        c8: { title: "AI Tools Mastery", desc: "Master practical AI tools.", schedule: "Even Days" }, 
        c9: { title: "Machine Learning", desc: "Data analysis.", schedule: "Fridays" }, 
        c10: { title: "Adobe Photoshop", desc: "Create visual worlds.", schedule: "Sundays & Tuesdays" }, 
        c11: { title: "Adobe Illustrator", desc: "Vector design.", schedule: "Mondays & Wednesdays" }, 
        c12: { title: "Adobe InDesign", desc: "Professional layout design.", schedule: "Thursdays" }, 
        c13: { title: "Sketch Illustration", desc: "Implement creative visual ideas.", schedule: "Odd Days" } 
      },
      
      courseDetail: { 
        backBtn: "Back to Departments", badge: "Schedule & Details", daysLabel: "Class Days:", timeLabel: "Class Time:", startDateLabel: "Start Date:", mentorLabel: "SECURE_ACCESS // MENTOR_DATA", scanInstructorBtn: "Scan Mentor Resume", investmentLabel: "Investment:", currency: "Tomans", registerBtn: "Reserve & Register", notFound: "Course Not Found!", notFoundBtn: "Back to List", defaultDesc: "Description updated soon.", defaultPrice: "Soon", defaultStartDate: "TBD", defaultScheduleDays: "Calendar", 
        seo: { title: "{title} Registration | Danaverse" } 
      },
      
      about: {
        seo: { title: "About Danaverse Academy | Programming & AI Hub", desc: "Danaverse Academy is a modern platform for deep learning in AI and programming with 100% project-based training. Start your growth journey with us." },
        hero: { badge: "About Danaverse Academy", title1: "Danaverse Academy; A Gateway to the World of", titleHighlight: "Artificial Intelligence", title2: "and Programming", desc: "If you are looking to learn <strong>programming</strong> and <strong>AI</strong>, you are in the right place. At Danaverse, we turn you into a professional expert using modern methods.", btn1: "Register for Free Course", btn2: "Contact Us" },
        stats: { title: "Numbers that show part of our", titleHighlight: "growth path", title2: "", s1Num: "98%", s1Text: "Audience Satisfaction", s2Num: "+5000", s2Text: "Companion Students", s3Num: "+120", s3Text: "Educational Contents", s4Num: "+50", s4Text: "Specialized Courses" },
        story: { title1: "The Story of", titleHighlight: "Danaverse Academy", p1: "Danaverse, a modern platform for deep learning in AI and programming, was founded in 2019 with the goal of specialized training and creating an equal learning opportunity for everyone.", p2: "Since our inception, by providing high-quality courses and utilizing the latest educational methods, we quickly gained a special place among enthusiasts. Today, Danaverse is one of the most modern online learning platforms.", videoTitle: "Academy Intro", videoDesc: "This video is a gateway to the exciting world of programming!" },
        roadmap: { title1: "The", titleHighlight: "Project-Based", title2: "Learning Path at Danaverse", desc: "Step by step to becoming a professional expert", steps: { s1: { title: "Identifying Needs", desc: "First, the audience's path and educational needs are reviewed so the content is more accurate and targeted." }, s2: { title: "Designing the Path", desc: "Trainings are structured in stages to make understanding and execution easy." }, s3: { title: "Practical Content", desc: "Concepts are presented in clear language, with practical examples usable in the job market." }, s4: { title: "Growth & Improvement", desc: "We continuously improve the educational experience based on user feedback." } } },
        partners: "Our Partners and Sponsors"
      },

      contact: {
        seo: { title: "Contact Us | Danaverse" },
        hero: { bgText: "CONNECT", badge: "Our Communication Bridge", title1: "Contact", titleHighlight: "Danaverse", desc: "We are always eager to hear your ideas, questions, and feedback. The Danaverse support team will respond to you as soon as possible." },
        sidebar: { title: "Contact Methods", desc: "The fastest way to get answers to your questions.", email: "Email Address", telegram: "Telegram Support", social: "Follow us on social media" },
        form: { title: "Send a Direct Message", desc: "Write your question or challenge; our experts will respond shortly.", nameLabel: "Full Name", namePlaceholder: "e.g., John Doe", phoneLabel: "Phone Number", phonePlaceholder: "+1 234 567 8900", messageLabel: "Message", messagePlaceholder: "Write your message or request details here...", submitBtn: "Send Message", loadingBtn: "Sending information..." },
        notifications: { emptyFields: "Please fill out all fields correctly.", success: "Your message was successfully sent to the administration!", serverError: "An error occurred while connecting to the server. Please try again." }
      },
      
      talent: {
        seo: { title: "Free AI & Programming Talent Test | Danaverse" },
        auth: { title: "Log in to Start the Test", desc: "In order for us to analyze your cognitive map and permanently save the result in your dedicated profile, please log in to your account first.", btn: "Login / Register" },
        intro: { title1: "Smart Programming", titleHighlight: "Talent Test", title2: "", subtitle: "Trust your instincts and answer quickly.", questionPrefix: "Question", of: "of" },
        answers: { yes: "Yes, absolutely", maybe: "Somewhat", no: "No" },
        analyzing: { title: "Analyzing and saving result to dashboard...", desc: "Please wait a moment" },
        result: { mainTitle: "Your Cognitive Map", subtitle: "Based on our expert analysis, here is your talent profile:", typeLabel: "Your Personality Type:", chartLogic: "Logic & Coding", chartArt: "Art & Creativity", chartSystem: "Systems & Robotics", viewPanelBtn: "View Result in Dashboard", retryBtn: "Retake the Test" },
        messages: { successSave: "Your test result and chart have been successfully saved to your dashboard.", errorSave: "Test completed, but permission to save to database was denied." },
        outcomes: { logic: { title: "System Architect & Analyst (Programmer)", desc: "Your answers show a highly structured, analytical, and logical mind. You enjoy discovering patterns within complex information. The world of programming and AI is exactly where you will shine." }, creative: { title: "Visual Creator & Designer (UI/UX)", desc: "You see the world through the lens of aesthetics, form, and usability. Your right brain hemisphere is highly active. User interface and experience design is a path that brings art and technology together for you." }, mechanical: { title: "Pragmatic Engineer & Systems Creator", desc: "You are an innate engineer! Your curiosity to understand 'how things work' and your desire to build tangible objects is your strong suit. Combining code with hardware, IoT, and robotics will excite you." } },
        questions: { q1: "Do you enjoy solving complex puzzles and logical problems?", q2: "Do you pay a lot of attention to clothing colors or room arrangements?", q3: "Are you curious about how electronic devices work?", q4: "Is finding patterns and order in information fascinating to you?", q5: "Do you pay more attention to the visual graphics of apps than their functionality?", q6: "Do you enjoy building moving crafts or working with tools?", q7: "Is learning the rules of a new language sweet to you?", q8: "Are you interested in photography and creative image editing?", q9: "Do you like watching videos of people assembling motors and gadgets?", q10: "Do you plan your daily tasks step-by-step?", q11: "Do you think about designing characters or creating new stories?", q12: "Do you enjoy putting together 3D puzzles or complex Lego sets?", q13: "In computer games, do you prefer strategy games?", q14: "Is choosing the right font for your presentations important to you?", q15: "Have you ever tried to repair a broken device yourself?" }
      },

      whyUs: {
        seo: { title: "Why Danaverse? | Differences and Advantages" },
        hero: { badge: "What is the Danaverse difference?", title1: "Beyond an Academy,", titleHighlight: "A Shortcut to the Job Market", desc: "We have thrown away boring academic theories. At Danaverse, you work like a senior engineer from day one." },
        projects: { title1: "100%", titleHighlight: "Project-Based", desc: "Goodbye to meaningless code on a blackboard! All our learning paths are designed based on real startup projects. From building AI systems to designing real app interfaces; you build your resume while learning.", bullet1: "Real work environment simulation (Agile/Scrum)", bullet2: "Presentable output on GitHub and Portfolio" },
        mentoring: { title1: "Dedicated", titleHighlight: "Mentoring", desc: "Learning complex skills requires a caring guide. Our instructors don't just record videos; they review your code weekly, fix your bugs, and tailor your personalized roadmap.", bullet1: "Weekly online Q&A sessions", bullet2: "Direct communication with senior instructors" },
        career: { title1: "Career", titleHighlight: "Support", desc: "Our goal isn't just education; our goal is your employment! Top students are directly introduced to tech companies, startups, and freelance projects. We are by your side for resume writing and job interviews.", bullet1: "Building international resume and LinkedIn", bullet2: "Direct introduction to partner job networks" },
        certificate: { title1: "Official", titleHighlight: "Certification", desc: "The end of your course is the beginning of your professional journey. Upon successful completion of final projects, a valid Danaverse Academy certificate (with tracking code) is awarded to you, which holds high credibility.", bullet1: "Bilingual certificate (Persian & English)", bullet2: "Online tracking code on the website" },
        cta: { title: "Join the Community of Professionals", desc: "You can choose one of our learning paths right now and make a secure investment in your future.", btn: "View Training Courses" }
      },

      roadmapPath: {
        seoTitle: "{title} Learning Path | Danaverse",
        intro: { pathText: "Learning Path", roadmap: "Roadmap", yourExpertise: "Your Expertise", subtitle: "This is not an ordinary path; it's an engineered ascent from zero to a professional career.", phase: "Phase", skillsLabel: "Skills in this phase:" },
        cta: { title: "Ready to start this path?", desc: "View courses related to this path right now, or take the talent test to ensure this is the best choice for you.", coursesBtn: "View Courses in this Path", talentBtn: "Take the Talent Test" },
        notFound: { title: "404", desc: "The requested learning path was not found.", btn: "Return to Home Page" },
        teenagers: { title: "Kids & Teens", badge: "Foundation & Creativity Dept", description: "In this path, the creative minds of kids and teens are introduced to programming logic and robotics through gamification and visual tools.", steps: { s1: { title: "Logic & Algorithms", desc: "Using block platforms like Scratch to deeply understand loops, conditions, and computational thinking without writing complex code.", skills: ["Logical Thinking", "Problem Solving", "Scratch"] }, s2: { title: "2D Game Development", desc: "Creating interactive games and animated stories. Students learn how to turn their ideas into a playable output.", skills: ["Game Design", "Coordinates", "Creativity"] }, s3: { title: "Entering Real Code", desc: "Smooth transition from block codes to text codes using Python (for teens). Writing the first real scripts.", skills: ["Python Basics", "Syntax", "Variables"] }, s4: { title: "Robotics & Electronics", desc: "Introduction to Arduino boards and sensors. The codes they write will now move and light up in the real world.", skills: ["Arduino", "Basic Circuits", "Hardware"] } } },
        coding: { title: "Programming & AI", badge: "Software Engineering Dept", description: "The most comprehensive path to becoming a developer and AI engineer. From deep understanding of algorithms to building machine learning models.", steps: { s1: { title: "Python Programming Basics", desc: "A strong start with Python. Mastering variables, functions, loops, and basic data structures like lists and dictionaries.", skills: ["Python", "Data Structures", "Functions"] }, s2: { title: "Object-Oriented Programming (OOP)", desc: "Learning engineering thinking. Implementing classes, inheritance, and basic design patterns to write clean, scalable code.", skills: ["OOP", "Clean Code", "Architecture"] }, s3: { title: "Data Mining & Analysis", desc: "Working with powerful libraries like Pandas and NumPy to extract, clean, and analyze raw data.", skills: ["Pandas", "NumPy", "Data Visualization"] }, s4: { title: "AI & Machine Learning", desc: "The peak of the path! Designing and training AI models with Scikit-Learn and TensorFlow for prediction and image processing.", skills: ["Machine Learning", "TensorFlow", "Deep Learning"] } } },
        design: { title: "UI/UX Design", badge: "Digital Arts Dept", description: "Blending art and technology. In this path, you learn how to create digital products that offer an incredible user experience along with stunning beauty.", steps: { s1: { title: "Basics of Art & Digital Graphics", desc: "Understanding color psychology, typography, negative space, and the basic principles that turn an ordinary design into a masterpiece.", skills: ["Color Theory", "Typography", "Layout"] }, s2: { title: "Mastering Graphic Tools", desc: "Professional learning of Photoshop and Illustrator to create icons, edit images, and create custom vectors.", skills: ["Adobe Photoshop", "Illustrator", "Vector Art"] }, s3: { title: "UI Design with Figma", desc: "Entering the world of UI. Designing web pages and mobile apps in Figma based on global standards.", skills: ["Figma", "UI Design", "Wireframing"] }, s4: { title: "User Experience & Prototyping (UX)", desc: "Analyzing user behavior, usability testing, and animating pages (Prototyping) to present the final project to developers.", skills: ["UX Research", "Prototyping", "User Journey"] } } }
      },

      projectsPage: {
        seo: { title: "Projects Gallery | Danaverse Academy", desc: "Gallery of programming, AI, robotics, and game development projects by Danaverse Academy students." },
        hero: { badge: "Student Achievements Exhibition", title1: "Creating the Future with", titleHighlight: "Today's Code", desc: "Witness the magic of creativity and expertise of Danaverse Academy students. This is where raw ideas turn into real, amazing projects." },
        categories: { all: "All Achievements", ai: "AI & Python", web: "Web & App Design", robotics: "Robotics & IoT", game: "Game Dev & Scratch" },
        empty: { title: "No Data Found", desc: "Projects in this section are being updated. Please select another category." },
        list: {
          p1: { title: "Smart Voice Assistant (Jarvis clone)", desc: "Developing a voice assistant with Python that can process Persian voice commands, search the web, and control smart room devices.", catName: "Advanced Python", age: "16 years old student" },
          p2: { title: "Skin Cancer Detection System", desc: "A deep learning model that predicts the probability of a skin lesion being cancerous with 92% accuracy by receiving an image.", catName: "Machine Learning", age: "21 years old student" },
          p3: { title: "Crypto Trading Bot", desc: "A bot that analyzes price charts and issues buy and sell signals using artificial intelligence algorithms.", catName: "Artificial Intelligence", age: "19 years old student" },
          p4: { title: "Driver Drowsiness Detection", desc: "A computer vision-based project that scans the driver's eyes and sounds an alarm if drowsiness is detected.", catName: "Computer Vision", age: "24 years old student" },
          p5: { title: "Online Doctor Booking Platform", desc: "End-to-end user interface design of a medical appointment app focusing on elderly user experience.", catName: "UI/UX Design", age: "18 years old student" },
          p6: { title: "Dynamic Financial Dashboard", desc: "Designing and implementing a modern web-based dashboard for expense management with live charts and full dark mode support.", catName: "Frontend Development", age: "22 years old student" },
          p7: { title: "3D Art Gallery Website", desc: "A stunning website that showcases artworks in a virtual museum using web-based 3D technologies.", catName: "3D Web Development", age: "20 years old student" },
          p8: { title: "Team Task Management App", desc: "A project management platform similar to Trello with drag and drop capabilities and live chat.", catName: "Full-Stack Development", age: "25 years old student" },
          p9: { title: "Production Line Robotic Arm", desc: "Building and programming a 3-axis robotic arm from scratch using an Arduino board.", catName: "Industrial Robotics", age: "17 years old student" },
          p10: { title: "Smart Home System (IoT)", desc: "Controlling lights, temperature, and home doors via the internet and mobile phone.", catName: "Internet of Things", age: "15 years old student" },
          p11: { title: "Racing Line Follower Robot", desc: "A fast and precise robot capable of navigating the most complex paths using infrared sensors.", catName: "Student Robotics", age: "14 years old student" },
          p12: { title: "Self-Watering Smart Pot", desc: "A pot that measures soil moisture and automatically waters the plant when needed.", catName: "Applied Electronics", age: "13 years old student" },
          p13: { title: "Space Battle Game", desc: "Designing an exciting arcade game where the user's spaceship must shoot space enemies.", catName: "Kids Game Dev", age: "9 years old student" },
          p14: { title: "3D Maze Escape Game", desc: "Developing an engaging 3D game where the player must find the exit in a dark labyrinth.", catName: "Advanced Game Dev", age: "16 years old student" },
          p15: { title: "Magic Platformer", desc: "A 2D game similar to Mario with hand-crafted pixel art graphics and a scoring system.", catName: "2D Game Dev", age: "14 years old student" },
          p16: { title: "City Traffic Simulator", desc: "Smart animation and simulation of car movements at an intersection following traffic lights.", catName: "Logical Programming", age: "10 years old student" }
        }
      },

      register: {
        seo: { title: "Register | Danaverse Academy" },
        success: {
          title: "Your registration was successful!",
          desc: "We will contact you shortly.",
          redirect: "Redirecting to the home page..."
        },
        form: {
          title: "Admission to Danaverse",
          desc: "The journey to becoming an expert starts here.",
          nameLabel: "First Name",
          namePlaceholder: "e.g., John",
          surnameLabel: "Last Name",
          surnamePlaceholder: "e.g., Doe",
          phoneLabel: "Phone Number",
          phonePlaceholder: "+1 234 567 8900",
          ageLabel: "Age",
          agePlaceholder: "e.g., 24",
          dateLabel: "Registration Date",
          dateBadge: "Auto",
          instLabel: "School or University Name",
          instPlaceholder: "Current or graduated institution",
          courseLabel: "Desired Training Course",
          courseDefault: "Please select...",
          investmentLabel: "Your Investment:",
          currency: "Tomans",
          submitBtn: "Complete Registration & Pay",
          loadingBtn: "Processing..."
        },
        errors: {
          generic: "An error occurred. Please try again."
        },
        courses: {
          c1: "Python Basics",
          c2: "Advanced Python",
          c3: "Python for Kids",
          c4: "AI Tools Mastery",
          c5: "Machine Learning",
          c6: "Adobe Photoshop",
          c7: "Adobe Illustrator",
          c8: "Adobe InDesign",
          c9: "Sketch Illustration",
          c10: "ICDL (Seven Skills)",
          c11: "Adult Robotics",
          c12: "Scratch Programming",
          c13: "Student Robotics"
        }
      },

      loginPage: {
        seo: { title: "Login / Register | Danaverse" },
        welcomeBack: "Welcome back! Enter your details to log in.",
        joinUs: "Join us and start your learning journey.",
        tabLogin: "Log In",
        tabRegister: "Sign Up",
        nameLabel: "Full Name",
        namePlaceholder: "e.g., John Doe",
        emailLabel: "Email",
        emailPlaceholder: "example{'@'}email.com",
        passwordLabel: "Password",
        passwordPlaceholder: "••••••••",
        forgotPassword: "Forgot Password?",
        btnLoading: "Processing...",
        btnLogin: "Log Into Dashboard",
        btnRegister: "Create Account",
        msgLoginSuccess: "Login successful! Redirecting...",
        msgRegisterSuccess: "Registration successful! You can now log in.",
        errInvalidCreds: "Invalid email or password.",
        errUserExists: "This email is already registered.",
        errGeneric: "An error occurred: "
      },

      home: { 
        hero: { badge: "Education Platform", title1: "Programming Academy", titleHighlight: "Danaverse", desc: "Learn the skills of the future.", btn: "Explore Courses" }, 
        benefits: { b1: "100% Project-Based", b2: "Dedicated Mentoring", b3: "Career Support", b4: "Official Certification" }, 
        talent: { badge: "Talent System", title: "Where is your path?", desc: "Find your ideal educational path.", btn: "Start Analysis" }, 
        paths: { title1: "Comprehensive", titleHighlight: "Learning Paths", desc: "A clear roadmap.", btn: "Start Path", p1: { name: "Kids & Teens", desc: "From Scratch to robotics." }, p2: { name: "Programming & AI", desc: "From Python to AI." }, p3: { name: "UI/UX Design", desc: "From Photoshop to UI/UX." } }, 
        demo: { badge: "Advanced Python", title1: "Experience AI", titleHighlight: "Practically", title2: "", desc: "We plunge you directly into real AI projects.", link: "View Syllabus" }, 
        projects: { badge: "Course Outcomes", title1: "Students'", titleHighlight: "Projects", desc: "We take pride in our students.", btn: "View All Projects", p1: { badge: "AI", title: "Facial Recognition", desc: "Final project using Python." }, p2: { badge: "Electronics", title: "Smart Robotic Arm", desc: "Hardware implementation." } }, 
        instructorsData: { badge: "Your Mentors", title1: "Danaverse's", titleHighlight: "Mentors", title2: "", btn: "Meet All Instructors", i1: { title: "Python Expert", bio: "AI researcher." }, i2: { title: "Graphic Director", bio: "UI/UX expert." }, i3: { title: "Data Researcher", bio: "Big data analysis." } }, 
        instructors: { badge: "Your Mentors", title1: "Danaverse's", titleHighlight: "Mentors", title2: "", btn: "Meet All Instructors" },
        compare: { badge: "Digital Design", title: "See the Difference", desc: "Compare the output.", after: "After", before: "Before" }, 
        testimonials: { 
          title1: "Voice of Our", titleHighlight: "Students", title2: "", desc: "Over 5000 students have started their future path with us.", 
          t1: { text: "I had no background, but with Danaverse I got hired in less than 6 months!", course: "Python Graduate" }, 
          t2: { text: "Practical projects are incredible. You feel like you're working in an international company.", course: "UI/UX Student" }, 
          t3: { text: "Starting to code from day one is the best feature of this academy.", course: "AI Student" },
          t4: { text: "Danaverse's support is unmatched! Whenever I got stuck, mentors quickly solved my problem.", course: "Web Design" },
          t5: { text: "The project-based atmosphere removed my fear of programming. Now I've built my own app.", course: "Advanced Python" },
          t6: { text: "The initial talent test helped me choose the right path and save my time.", course: "Artificial Intelligence" }
        }, 
        faq: { 
          title1: "Frequently Asked", titleHighlight: "Questions", desc: "Answering your common concerns before starting.", 
          q1: "Do I need any prerequisites or prior knowledge?", a1: "No, our mission is teaching from scratch. All our foundation courses are designed so you can learn without any background.", 
          q2: "How are classes held? Are they recorded?", a2: "Courses are blended (cinematic-quality recorded videos + online Q&A sessions). You have lifetime access.", 
          q3: "Is a certificate provided at the end?", a3: "Yes! After completing final projects, you receive a valid, bilingual Danaverse Academy certificate.", 
          q4: "What is the difference between the kids' and adults' paths?", a4: "The kids' path uses gamification so they don't get bored; the adults' section focuses on raw code and the job market.",
          q5: "Is there a job guarantee after completing the course?", a5: "We prepare you for the job market with project-based training and mock interviews. Top students are introduced to partner companies.",
          q6: "Can I get direct help from the instructor?", a6: "Yes! You have access to a private Telegram group and live Q&A sessions to solve your problems directly with the mentor.",
          q7: "How do I know which course is right for me?", a7: "Just use our free 'Talent Test'. Our smart system suggests the best learning path by asking a few questions."
        }, 
        cta: { badge: "New Semester Registration", title1: "Are you ready for", titleHighlight: "Change", title2: "?", desc: "Invest in your expertise. With Danaverse, your journey to the global tech market begins here.", btn: "Start Learning" }, 
        footer: { desc: "Danaverse, a pioneer in modern, project-based tech education. We are here to train a new generation of professionals for the global job market by integrating AI, programming, and personal development skills. Danaverse is more than an academy; it's a bridge from your hidden talents to a brilliant future in the digital world.", pathsTitle: "Paths", contactTitle: "Contact", copyright: "All rights reserved.", privacy: "Privacy Policy", terms: "Terms of Use" } 
      }
    }
  }
}));