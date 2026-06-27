import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const client = await serverSupabaseClient(event)
  
  const { 
    fullName, phone, email, level, 
    occupation, challenge, referral, registration_date 
  } = body

  // اعتبارسنجی فیلدهای خالی
  if (!fullName || !phone || !email || !level) {
    throw createError({
      statusCode: 400,
      statusMessage: 'لطفاً تمامی فیلدهای ضروری را پر کنید.'
    })
  }

  // اعتبارسنجی شماره موبایل در سرور
  const phoneRegex = /^09[0-9]{9}$/
  if (!phoneRegex.test(phone)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'شماره موبایل وارد شده در سرور نامعتبر شناخته شد.'
    })
  }

  // اعتبارسنجی فرمت ایمیل در سرور
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'فرمت ایمیل وارد شده در سرور نامعتبر شناخته شد.'
    })
  }

  // ذخیره در جدول Supabase
  const { data, error } = await client
    .from('workshop_registrations') 
    .insert([{
      full_name: fullName,
      phone: phone,
      email: email,
      experience_level: level,
      occupation: occupation,
      challenge: challenge,
      referral: referral,
      date_shamsi: registration_date
    }])

  if (error) {
    console.error("Supabase Error:", error)
    throw createError({
      statusCode: 500,
      statusMessage: 'خطا در ارتباط با دیتابیس. لطفاً بعداً تلاش کنید.'
    })
  }

  return { success: true, message: 'ثبت‌نام با موفقیت انجام شد.' }
})