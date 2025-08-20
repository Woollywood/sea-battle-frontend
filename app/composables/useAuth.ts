import type { TokensDto } from '~/api/generated'

export const useAuth = () => {
  const accessToken = useCookie('accessToken')
  const refreshToken = useCookie('refreshToken')

  const tokens = computed(() => ({
    accessToken: accessToken.value,
    refreshToken: refreshToken.value,
  }))

  const isAuth = computed(() =>
    Object.values(tokens.value).every(Boolean)
  )

  const setAuthTokens = (tokens: TokensDto) => {
    accessToken.value = tokens.accessToken
    refreshToken.value = tokens.refreshToken
  }

  const clearAuthTokens = () => {
    accessToken.value = null
    refreshToken.value = null
  }

  return { tokens, isAuth, setAuthTokens, clearAuthTokens }
}
