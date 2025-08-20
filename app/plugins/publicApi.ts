import { createAxiosInstance } from '~/api/helpers'

export default defineNuxtPlugin(() => {
  const {
    public: { apiEndpoint },
  } = useRuntimeConfig()

  const publicApi = createAxiosInstance({
    baseURL: apiEndpoint,
  })

  return { provide: { publicApi } }
})
