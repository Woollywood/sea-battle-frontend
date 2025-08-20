import {
  type SignInDto,
  useAuthControllerSignIn,
} from '~/api/generated'

export const useSignIn = () => {
  const { $publicApi } = useNuxtApp()
  const { query } = useRoute()
  const { mutateAsync: mutate } = useAuthControllerSignIn({
    client: { client: $publicApi },
  })
  const { setAuthTokens } = useAuth()

  const redirect = () => {
    if (query.redirectUrl) {
      navigateTo(
        decodeURIComponent(
          (Array.isArray(query.redirectUrl)
            ? query.redirectUrl[0]
            : query.redirectUrl) ?? ''
        )
      )
    } else {
      navigateTo('/')
    }
  }

  const signIn = async (data: SignInDto) => {
    const tokens = await mutate({ data })
    setAuthTokens(tokens)
    redirect()
  }

  return { signIn }
}
