// app/middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()

  if (!user.value) {
    // اگر کاربر لاگین نبود، به صفحه ورود بفرستش
    return navigateTo('/login')
  }
})