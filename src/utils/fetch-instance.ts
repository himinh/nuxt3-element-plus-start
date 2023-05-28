import { FetchInstanceOptions } from '../types/fetch.type'

export const fetchInstance = <DataT>(
  endpoint: string,
  fetchOptions?: FetchInstanceOptions
) => {
  const { isAuth = false, ...opts } = fetchOptions || {}

  // Check and add access token to header
  const onRequest = async ({ options }: any) => {
    if (isAuth) {
      const { getAcToken } = useAuthStore()
      const token = await getAcToken()

      options.headers = {
        ...options.headers,
        authorization: `Bearer ${token}`,
      }
    }
  }

  const config = useRuntimeConfig()
  const baseURL = opts?.baseURL ?? config.public.apiBase

  return $fetch<DataT>(endpoint, {
    ...opts,
    onRequest,
    baseURL,
  })
}
