import { toast } from 'vue-sonner'

import {
  type SignUpDto,
  useAuthControllerSignUp,
} from '~/api/generated'

export const useSignUp = () => {
  const { $publicApi } = useNuxtApp()
  const { mutateAsync: mutate } = useAuthControllerSignUp({
    client: { client: $publicApi },
    mutation: {
      onError(error) {
        toast('Sign up failed', {
          description:
            error.response?.data.message ?? 'Unknown error',
        })
      },
    },
  })

  const { signIn } = useSignIn()

  const onSignUp = async (data: SignUpDto, redirectURL = '/') => {
    const { username } = await mutate({ data })
    await signIn({ username }, redirectURL)
  }

  return { onSignUp }
}
