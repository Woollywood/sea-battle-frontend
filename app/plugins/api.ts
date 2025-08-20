import { createAxiosInstance } from '~/api/helpers'

export default defineNuxtPlugin(() => {
  const {
    public: { apiEndpoint },
  } = useRuntimeConfig()
  const { interceptRequest, interceptError } = useApiInterceptors()

  const api = createAxiosInstance({
    baseURL: apiEndpoint,
  })
  api.interceptors.request.use(interceptRequest)
  api.interceptors.response.use(
    (config) => config,
    (error) => interceptError(error, api)
  )

  return { provide: { api } }
})
