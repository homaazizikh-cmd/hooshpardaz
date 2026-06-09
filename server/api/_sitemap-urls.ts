import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  // اتصال امن به دیتابیس Supabase در سمت سرور
  const supabase = await serverSupabaseClient(event)

  // ۱. گرفتن تمام مقالاتی که تیک "منتشر شده" دارند
  const { data: blogs } = await supabase
    .from('blogs')
    .select('id, created_at')
    .eq('is_published', true) // فقط مقالات فعال

  // ۲. گرفتن تمام دوره‌هایی که تیک "منتشر شده" دارند
  const { data: courses } = await supabase
    .from('courses')
    .select('id, slug, created_at')
    .eq('is_published', true) // فقط دوره‌های فعال

  const dynamicRoutes = []

  // ۳. تزریق مقالات به نقشه سایت
  if (blogs) {
    blogs.forEach(blog => {
      dynamicRoutes.push({
        loc: `/learning/${blog.id}`, // آدرس دقیق مقاله
        lastmod: blog.created_at || new Date().toISOString(), // تاریخ آخرین آپدیت برای گوگل
      })
    })
  }

  // ۴. تزریق دوره‌ها به نقشه سایت (با اولویت دادن به اسلاگ انگلیسی)
  if (courses) {
    courses.forEach(course => {
      const pathId = course.slug ? course.slug : course.id
      dynamicRoutes.push({
        loc: `/courses/${pathId}`, // آدرس دقیق دوره با اسلاگ
        lastmod: course.created_at || new Date().toISOString(),
      })
    })
  }

  // برگرداندن لیست نهایی به موتور نقشه سایت Nuxt
  return dynamicRoutes 
})