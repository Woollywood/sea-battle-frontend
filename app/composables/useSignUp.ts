import {
  type SignUpDto,
  useAuthControllerSignUp,
} from '~/api/generated'

export const useSignUp = () => {
  const { mutateAsync: mutate } = useAuthControllerSignUp()
  const { signIn } = useSignIn()

  const onSignUp = async (data: SignUpDto) => {
    const { email, password } = await mutate({ data })
    await signIn({ email, password })
  }

  return { onSignUp }
}
