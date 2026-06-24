import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const client = await serverSupabaseClient(event)

  const { name, surname, phone, age, date, course, institution } = body

  // ۱. اعتبارسنجی ساده (جلوگیری از ارسال فرم خالی)
  if (!name || !phone || !course) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'لطفاً فیلدهای ضروری را پر کنید.' 
    })
  }

  // ۲. چسباندن نام و نام خانوادگی برای ستون full_name
  const fullName = surname ? `${name} ${surname}` : name

  // ۳. ذخیره در دیتابیس (دقیقاً مطابق با ستون‌های شما)
  const { data, error } = await client
    .from('registrations')
    .insert([{ 
      full_name: fullName, 
      phone: phone, 
      course: course,
      age: age,
      institution: institution
      // 💡 نکته: ستون registration_date را حذف کردیم چون در دیتابیس نبود!
      // زمان ثبت‌نام توسط خود دیتابیس در ستون created_at به صورت اتوماتیک ثبت می‌شود.
    }])

  if (error) {
    // چاپ خطای دقیق سوپابیس در ترمینال VS Code برای دیباگ راحت‌تر
    console.error("Supabase Error:", error) 
    throw createError({ statusCode: 500, statusMessage: 'خطا در اتصال به دیتابیس' })
  }

  return { success: true, message: 'ثبت‌نام شما با موفقیت انجام شد!' }
})