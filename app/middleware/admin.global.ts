export default defineNuxtRouteMiddleware((to, from) => {
  // این دربان فقط وقتی وارد عمل می‌شود که آدرس درخواستی با /admin شروع شود
  if (to.path.startsWith('/admin')) {
    const user = useSupabaseUser()
    const adminEmail = 'homaazizikh@gmail.com' // 👈 ایمیل مدیریت را اینجا وارد کنید

    // اگر کاربر لاگین نکرده بود یا ایمیلش با ایمیل ادمین فرق داشت
    if (!user.value || user.value.email !== adminEmail) {
      // او را مستقیماً به صفحه اصلی سایت پرت کن
      return navigateTo('/') 
    }
  }
})