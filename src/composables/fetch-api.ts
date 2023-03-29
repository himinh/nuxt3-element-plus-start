import { UseFetchOptions } from '#app'
import { BASE_URL } from '~/utils/constants/base_url'
import { useAuthStore } from '~/stores/auth.store'

type FetchOptions = UseFetchOptions<any> & { isAuth?: boolean }

class FetchApi {
  private readonly apiBaseURL: string

  /**
   * Constructor
   */
  constructor() {
    this.apiBaseURL = BASE_URL
  }

  /**
   * Set authorization header
   *
   * @param options
   */
  private async setAuthorization(options?: any) {
    const { getAccessToken } = useAuthStore()
    const accessToken = await getAccessToken()

    options.headers = {
      ...options.headers,
      authorization: `Bearer ${accessToken}`,
    }
  }

  /**
   * Fetch API
   *
   * @param endPoint
   * @param options
   * @returns
   */
  private async useFetchApi(endPoint: string, options: FetchOptions) {
    const { isAuth = true, ...opts } = options
    opts.baseURL = this.apiBaseURL

    if (isAuth) {
      await this.setAuthorization(opts)
    }

    return useFetch(endPoint, opts)
  }

  /**
   * HTTP GET method
   *
   * @param endPoint
   * @param options
   * @returns
   */
  get(endPoint: string, options?: FetchOptions) {
    return this.useFetchApi(endPoint, { ...options, method: 'GET' })
  }

  /**
   * HTTP POST method
   *
   * @param endPoint
   * @param options
   * @returns
   */
  post(endPoint: string, options: FetchOptions) {
    return this.useFetchApi(endPoint, { ...options, method: 'POST' })
  }

  /**
   * HTTP PUT method
   *
   * @param endPoint
   * @param options
   * @returns
   */
  put(endPoint: string, options: FetchOptions) {
    return this.useFetchApi(endPoint, { ...options, method: 'PUT' })
  }

  /**
   * HTTP DELETE method
   *
   * @param endPoint
   * @param options
   * @returns
   */
  delete(endPoint: string, options?: FetchOptions) {
    return this.useFetchApi(endPoint, { ...options, method: 'DELETE' })
  }
}

export const fetchApi = new FetchApi()
