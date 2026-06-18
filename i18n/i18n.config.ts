export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fa',
  fallbackLocale: 'fa',
  messages: {
    fa: {
      nav: { home: "صفحه اصلی", courses: "دوره‌ها", learning: "یادگیری", talentTest: "استعدادیابی", instructors: "اساتید", about: "درباره ما", contact: "تماس با ما" },
      auth: { adminPanel: "پنل مدیریت", dashboard: "پنل کاربری", login: "ورود / ثبت‌نام", logout: "خروج از حساب" },
      seo: { homeTitle: "آکادمی برنامه‌نویسی و هوش مصنوعی داناورس", homeDesc: "بهترین سایت آموزش پروژه‌محور برنامه‌نویسی و یادگیری هوش مصنوعی (AI) در ایران.", homeOgDesc: "آینده‌ات را با داناورس کدنویسی کن! آموزش پروژه‌محور از صفر تا ورود به بازار کار." },
      
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
      
      home: { 
        hero: { badge: "پلتفرم جامع آموزش", title1: "آکادمی برنامه‌نویسی و هوش مصنوعی", titleHighlight: "داناورس", desc: "آموزش مهارت‌های آینده با رویکرد ورود مستقیم به بازار کار.", btn: "مشاهده دوره‌های آموزشی" }, 
        benefits: { b1: "آموزش ۱۰۰٪ پروژه‌محور", b2: "منتورینگ اختصاصی", b3: "پشتیبانی بازار کار", b4: "ارائه مدرک معتبر" }, 
        talent: { badge: "سیستم استعدادیابی", title: "مسیر شغلی شما کجاست؟", desc: "مسیر آموزشی ایده‌آل خود را پیدا کنید.", btn: "شروع آنالیز ذهن" }, 
        paths: { title1: "مسیرهای جامع", titleHighlight: "آموزش", desc: "نقشه راه گام‌به‌گام.", btn: "شروع مسیر", p1: { name: "کودکان و نوجوانان", desc: "از اسکرچ تا بازی‌های جذاب رباتیک." }, p2: { name: "برنامه‌نویسی و AI", desc: "از پایتون تا یادگیری ماشین." }, p3: { name: "طراحی رابط کاربری", desc: "از فتوشاپ تا دیزاین UI/UX." } }, 
        demo: { badge: "دوره پایتون پیشرفته", title1: "کدنویسی را", titleHighlight: "عملی", title2: "لمس کنید", desc: "ما شما را مستقیماً وارد پروژه‌های واقعی می‌کنیم.", link: "مشاهده سرفصل‌ها" }, 
        projects: { badge: "خروجیِ دوره‌ها", title1: "پروژه‌های عملی", titleHighlight: "دانشجویان", desc: "ما به نتیجه کار هنرجویان افتخار می‌کنیم.", btn: "مشاهده همه پروژه‌ها", p1: { badge: "هوش مصنوعی", title: "سیستم تشخیص چهره", desc: "پروژه پایانی با پایتون." }, p2: { badge: "الکترونیک", title: "ساخت بازوی رباتیک", desc: "پیاده‌سازی صفر تا صد سخت‌افزار." } }, 
        instructors: { badge: "منتورهای شما", title1: "اساتید", titleHighlight: "برجسته", title2: "داناورس", btn: "معرفی تمام اساتید", i1: { title: "متخصص پایتون", bio: "توسعه‌دهنده ارشد." }, i2: { title: "مدیر هنری", bio: "متخصص رابط کاربری." }, i3: { title: "پژوهشگر داده‌کاوی", bio: "متخصص تحلیل داده‌های کلان." } }, 
        compare: { badge: "دپارتمان طراحی", title: "تفاوت را با چشمان خود ببینید", desc: "خروجی خام را مقایسه کنید.", after: "بعد (After)", before: "قبل (Before)" }, 
        testimonials: { title1: "صدای", titleHighlight: "هنرجویان", title2: "ما", desc: "بیش از ۵۰۰۰ نفر آغاز کرده‌اند.", t1: { text: "استخدام شدم!", course: "دانش‌آموخته پایتون" }, t2: { text: "طراحی سایت بی‌نظیر است.", course: "طراحی UI/UX" }, t3: { text: "از روز اول وارد محیط کدنویسی شدیم.", course: "دانشجوی AI" } }, 
        faq: { title1: "سوالات متداول درباره", titleHighlight: "دوره‌ها", desc: "پاسخ به دغدغه‌های شما.", q1: "نیاز به پیش‌نیاز دارم؟", a1: "خیر، رسالت ما آموزش از نقطه صفر است.", q2: "کلاس‌ها چگونه است؟", a2: "ترکیبی از ویدئو و جلسات آنلاین.", q3: "مدرک دارد؟", a3: "بله، مدرک معتبر.", q4: "تفاوت مسیر کودکان با بزرگسالان؟", a4: "مسیر کودکان مبتنی بر بازی‌سازی است." }, 
        cta: { badge: "ثبت‌نام ترم جدید", title1: "آماده‌ی تغییر", titleHighlight: "هستی", title2: "؟", desc: "روی تخصصت سرمایه‌گذاری کن.", btn: "شروع یادگیری" }, 
        footer: { desc: "ما مرزهای یادگیری را جابه‌جا کرده‌ایم.", pathsTitle: "مسیرها", contactTitle: "ارتباط", copyright: "تمامی حقوق محفوظ است.", privacy: "حریم خصوصی", terms: "شرایط استفاده" } 
      }
    },
    en: {
      nav: { home: "Home", courses: "Courses", learning: "Learning", talentTest: "Talent Test", instructors: "Instructors", about: "About Us", contact: "Contact Us" },
      auth: { adminPanel: "Admin Dashboard", dashboard: "User Dashboard", login: "Login / Register", logout: "Logout" },
      seo: { homeTitle: "Danaverse | Programming Academy", homeDesc: "Project-based coding & AI academy.", homeOgDesc: "Code your future with Danaverse!" },
      
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
      
      home: { 
        hero: { badge: "Education Platform", title1: "Programming Academy", titleHighlight: "Danaverse", desc: "Learn the skills of the future.", btn: "Explore Courses" }, 
        benefits: { b1: "100% Project-Based", b2: "Dedicated Mentoring", b3: "Career Support", b4: "Official Certification" }, 
        talent: { badge: "Talent System", title: "Where is your path?", desc: "Find your ideal educational path.", btn: "Start Analysis" }, 
        paths: { title1: "Comprehensive", titleHighlight: "Learning Paths", desc: "A clear roadmap.", btn: "Start Path", p1: { name: "Kids & Teens", desc: "From Scratch to robotics." }, p2: { name: "Programming & AI", desc: "From Python to AI." }, p3: { name: "UI/UX Design", desc: "From Photoshop to UI/UX." } }, 
        demo: { badge: "Advanced Python", title1: "Experience AI", titleHighlight: "Practically", title2: "", desc: "We plunge you directly into real AI projects.", link: "View Syllabus" }, 
        projects: { badge: "Course Outcomes", title1: "Students'", titleHighlight: "Projects", desc: "We take pride in our students.", btn: "View All Projects", p1: { badge: "AI", title: "Facial Recognition", desc: "Final project using Python." }, p2: { badge: "Electronics", title: "Smart Robotic Arm", desc: "Hardware implementation." } }, 
        instructors: { badge: "Your Mentors", title1: "Danaverse's", titleHighlight: "Mentors", title2: "", btn: "Meet All Instructors", i1: { title: "Python Expert", bio: "AI researcher." }, i2: { title: "Graphic Director", bio: "UI/UX expert." }, i3: { title: "Data Researcher", bio: "Big data analysis." } }, 
        compare: { badge: "Digital Design", title: "See the Difference", desc: "Compare the output.", after: "After", before: "Before" }, 
        testimonials: { title1: "Voice of Our", titleHighlight: "Students", title2: "", desc: "Over 5000 students.", t1: { text: "Got hired!", course: "Python Grad" }, t2: { text: "Incredible design.", course: "UI/UX Student" }, t3: { text: "Practical from day one.", course: "AI Student" } }, 
        faq: { title1: "Frequently Asked", titleHighlight: "Questions", desc: "Answering your concerns.", q1: "Need prior knowledge?", a1: "No, teaching from scratch.", q2: "How are classes held?", a2: "Blended learning.", q3: "Certificate provided?", a3: "Yes, official certification.", q4: "Difference for kids?", a4: "Gamified for kids." }, 
        cta: { badge: "Registration Started", title1: "Ready to change", titleHighlight: "your life", title2: "?", desc: "Invest in your expertise.", btn: "Start Learning" }, 
        footer: { desc: "We push the boundaries of learning.", pathsTitle: "Paths", contactTitle: "Contact", copyright: "All rights reserved.", privacy: "Privacy Policy", terms: "Terms of Use" } 
      }
    }
  }
}))