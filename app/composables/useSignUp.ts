import {
  type SignUpDto,
  useAuthControllerSignUp,
} from '~/api/generated'

export const useSignUp = () => {
  const { $publicApi } = useNuxtApp()
  const { mutateAsync: mutate } = useAuthControllerSignUp({
    client: { client: $publicApi },
  })
  const { signIn } = useSignIn()

  const onSignUp = async (data: SignUpDto) => {
    const { email, password } = await mutate({ data })
    await signIn({ email, password })
  }

  return { onSignUp }
}
