import { toast } from 'vue-sonner'

import {
  type SignInDto,
  useAuthControllerSignIn,
} from '~/api/generated'

export const useSignIn = () => {
  const { $publicApi } = useNuxtApp()
  const { redirect } = useRedirect()
  const { mutateAsync: mutate } = useAuthControllerSignIn({
    client: { client: $publicApi },
    mutation: {
      onError(error) {
        toast('Sign in failed', {
          description:
            error.response?.data.message ?? 'Unknown error',
        })
      },
    },
  })
  const { setAuthTokens } = useAuth()

  const signIn = async (dto: SignInDto, redirectURL: string) => {
    const tokens = await mutate({ data: dto })
    setAuthTokens(tokens)
    redirect(redirectURL)
  }

  return { signIn }
}
