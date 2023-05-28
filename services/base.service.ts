import { client } from '../utils/client'
import { FetchOptions, QueryParams } from '~types/fetch.type'

export class BaseService<ResT> {
  private _endpoint: string

  constructor(endpoint: string) {
    this._endpoint = endpoint
  }

  getAll(query?: QueryParams, options?: FetchOptions): Promise<ResT[]> {
    return client.get(this._endpoint, query, options)
  }

  getById(
    id: string,
    query?: QueryParams,
    options?: FetchOptions
  ): Promise<ResT> {
    return client.get(`/${this._endpoint}/${id}`, query, options)
  }

  create(body: ResT, options?: FetchOptions): Promise<ResT> {
    return client.post(this._endpoint, body, options)
  }

  update(id: string, body: ResT, options?: FetchOptions): Promise<ResT> {
    return client.patch(`${this._endpoint}/${id}`, body, {
      ...options,
      isAuth: true,
    })
  }

  delete(id: string, options?: FetchOptions): Promise<ResT> {
    return client.delete(`/${this._endpoint}/${id}`, options)
  }
}
