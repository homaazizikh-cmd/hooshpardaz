// سرور/api/register.post.js
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const client = await serverSupabaseClient(event)

  const { name, surname, phone, age, date, course, institution } = body

  // ذخیره در دیتابیس
  const { data, error } = await client
    .from('registrations')
    .insert([{ 
      full_name: `${name} ${surname}`, 
      phone: phone, 
      course: course,
      age: age,
      institution: institution 
    }])

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return { success: true }
})