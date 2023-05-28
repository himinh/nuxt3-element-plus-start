import { fetchInstance } from './fetch-instance'
import { FetchOptions, QueryParams } from '~types/fetch.type'

export const client = {
  // HTTP method GET
  get<ResT>(endpoint: string, query?: QueryParams, opts?: FetchOptions) {
    return fetchInstance<ResT>(endpoint, { ...opts, query, method: 'get' })
  },

  // HTTP method POST
  post<ResT>(endpoint: string, body: any, opts?: FetchOptions) {
    return fetchInstance<ResT>(endpoint, { ...opts, body, method: 'post' })
  },

  // HTTP method PATCH
  patch<ResT>(endpoint: string, body: any, opts?: FetchOptions) {
    return fetchInstance<ResT>(endpoint, { ...opts, body, method: 'patch' })
  },

  // HTTP method PUT
  put<ResT>(endpoint: string, body: any, opts?: FetchOptions) {
    return fetchInstance<ResT>(endpoint, { ...opts, body, method: 'put' })
  },

  // HTTP method DELETE
  delete<ResT>(endpoint: string, opts?: FetchOptions) {
    return fetchInstance<ResT>(endpoint, { ...opts, method: 'delete' })
  },
}
