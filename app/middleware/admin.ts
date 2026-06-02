// middleware/admin.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser();
  
  // ایمیل خودتان را اینجا دقیق وارد کنید
  const MY_EMAIL = 'homaazizikh@gmail.com'; 

  // اگر کاربر لاگین نیست یا ایمیلش با ایمیل شما متفاوت است، به صفحه اصلی برگردد
  if (!user.value || user.value.email !== MY_EMAIL) {
    return navigateTo('/'); 
  }
});