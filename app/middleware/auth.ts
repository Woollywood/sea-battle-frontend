export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuth } = useAuth()
  const {
    public: { signInUrl },
  } = useRuntimeConfig()

  if (!isAuth.value) {
    return navigateTo({
      path: signInUrl,
      query: { redirectUrl: encodeURIComponent(to.fullPath) },
    })
  }
})
