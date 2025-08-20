import {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from 'axios'

import {
  authControllerRefreshToken,
  type TokensDto,
} from '~/api/generated'
import { createAxiosInstance } from '~/api/helpers'

export const useApiInterceptors = () => {
  const refreshPromis = ref<Promise<void> | null>(null)

  const {
    public: { apiEndpoint, signInUrl },
  } = useRuntimeConfig()
  const { fullPath } = useRoute()
  const { tokens, isAuth, setAuthTokens, clearAuthTokens } = useAuth()

  const refreshing = async ({
    refreshToken,
  }: Pick<TokensDto, 'refreshToken'>) => {
    refreshPromis.value = new Promise<void>(
      // eslint-disable-next-line no-async-promise-executor
      async (resolve, reject) => {
        try {
          const publicClient = createAxiosInstance({
            baseURL: apiEndpoint,
          })
          const tokens = await authControllerRefreshToken(
            {
              refreshToken,
            },
            { client: publicClient }
          )
          setAuthTokens(tokens)
        } catch (error) {
          reject(error)
        }

        resolve()
      }
    )

    await refreshPromis.value
    refreshPromis.value = null
  }

  const interceptRequest = (config: InternalAxiosRequestConfig) => {
    if (isAuth.value) {
      const { accessToken } = tokens.value
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  }

  const interceptError = async (
    error: AxiosError,
    api: AxiosInstance
  ) => {
    const originalConfig = error.response?.config

    if (error.response?.status === 401 && isAuth.value) {
      try {
        const { refreshToken } = tokens.value
        if (refreshPromis.value) {
          await refreshPromis.value
        } else {
          await refreshing({ refreshToken: refreshToken! })
        }

        return api.request(originalConfig!)
      } catch (error) {
        if (error instanceof Error) {
          clearAuthTokens()
          navigateTo({
            path: signInUrl,
            query: { redirectUrl: encodeURIComponent(fullPath) },
          })
        }
      }
    }

    const response = error.response
    throw new AxiosError(
      response?.statusText,
      undefined,
      response?.config,
      response?.request,
      response
    )
  }

  return { interceptRequest, interceptError }
}
