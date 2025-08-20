import { useAuthControllerSignOut } from '~/api/generated'

export const useSignOut = () => {
  const {
    public: { signInUrl },
  } = useRuntimeConfig()
  const { clearAuthTokens } = useAuth()
  const { mutateAsync: mutate } = useAuthControllerSignOut()

  const signOut = async () => {
    await mutate()
    await navigateTo(signInUrl)
    clearAuthTokens()
  }

  return { signOut }
}
