import { getAccessToken } from '~/helpers/get-access-token'
import { FetchInstanceOptions } from '~/types/fetch'

export const fetchInstance = <DataT>(
  endpoint: string,
  opts?: FetchInstanceOptions
) => {
  // Check and add access token to header
  const onRequest = async ({ options }: any) => {
    const token = await getAccessToken()

    options.headers = {
      ...options.headers,
      authorization: `Bearer ${token}`,
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
