// server/api/register.post.ts
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

  // ۲. ذخیره در دیتابیس (فیلد date هم اضافه شد)
  const { data, error } = await client
    .from('registrations')
    .insert([{ 
      full_name: `${name} ${surname}`, 
      phone: phone, 
      course: course,
      age: age,
      institution: institution,
      registration_date: date // ذخیره تاریخ شمسی که دریافت کردید
    }])

  if (error) {
    console.error("Supabase Error:", error) // برای اینکه در کنسول سرور ببینید چه مشکلی رخ داده
    throw createError({ statusCode: 500, statusMessage: 'خطا در اتصال به دیتابیس' })
  }

  return { success: true, message: 'ثبت‌نام شما با موفقیت انجام شد!' }
})