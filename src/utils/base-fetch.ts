import { FetchInstanceOptions, FetchOptions, QueryParams } from '~/types/fetch'

export class BaseFetch {
  private readonly isAuth: boolean = false

  constructor(readonly options: { isAuth: boolean }) {
    this.isAuth = options.isAuth
  }

  // HTTP method GET
  get<ResT>(endpoint: string, query?: QueryParams, opts?: FetchOptions) {
    return this._fetchInstance<ResT>(endpoint, {
      ...opts,
      query,
      method: 'get',
    })
  }

  // HTTP method POST
  post<ResT>(endpoint: string, body: any, opts?: FetchOptions) {
    return this._fetchInstance<ResT>(endpoint, {
      ...opts,
      body,
      method: 'post',
    })
  }

  // HTTP method PATCH
  patch<ResT>(endpoint: string, body: any, opts?: FetchOptions) {
    return this._fetchInstance<ResT>(endpoint, {
      ...opts,
      body,
      method: 'patch',
    })
  }

  // HTTP method PUT
  put<ResT>(endpoint: string, body: any, opts?: FetchOptions) {
    return this._fetchInstance<ResT>(endpoint, {
      ...opts,
      body,
      method: 'put',
    })
  }

  // HTTP method DELETE
  delete<ResT>(endpoint: string, opts?: FetchOptions) {
    return this._fetchInstance<ResT>(endpoint, {
      ...opts,
      method: 'delete',
    })
  }

  private _fetchInstance = <DataT>(
    endpoint: string,
    opts?: FetchInstanceOptions
  ) => {
    const config = useRuntimeConfig()
    const baseURL = opts?.baseURL ?? config.public.apiBase

    const options = { ...opts, baseURL }

    if (this.isAuth) {
      // Check and add access token to header
      const onRequest = async ({ options }: any) => {
        const authStore = useAuthStore()
        const token = await authStore.getAccessToken()

        if (token)
          options.headers = {
            ...options.headers,
            authorization: `Bearer ${token}`,
          }
      }

      Object.assign(options, { onRequest })
    }

    return $fetch<DataT>(endpoint, options)
  }
}
