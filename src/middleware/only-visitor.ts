export default defineNuxtRouteMiddleware((to, from) => {
  const { authUser } = useAuthStore()

  if (authUser) return navigateTo('/')
})
