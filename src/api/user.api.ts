import { PaginateResponse } from '../types/paginate-reponse'
import { FetchOptions, QueryParams } from '~/types/fetch'
import { User } from '~/types/user'

const userUrl = '/users'
export const userService = {
  getAll(query?: QueryParams, options?: FetchOptions): Promise<User[]> {
    return client.get(`${userUrl}`, query, options)
  },

  getById(
    id: string,
    query?: QueryParams,
    options?: FetchOptions
  ): Promise<User> {
    return client.get(`${userUrl}/${id}`, query, options)
  },

  create(body: User, options?: FetchOptions): Promise<User> {
    return client.post(`${userUrl}`, body, options)
  },

  update(id: string, body: User, options?: FetchOptions): Promise<User> {
    return client.patch(`${userUrl}/${id}`, body, options)
  },

  delete(id: string): Promise<User> {
    return client.delete(`/${`${userUrl}`}/${id}`)
  },

  updatePassword(body: { oldPassword: string; newPassword: string }) {
    return client.patch(`${userUrl}/`, body)
  },

  deleteManySoftByIds(ids: string[]) {
    return client.delete(`${userUrl}/${ids.toString()}/soft_ids`)
  },

  deleteManyByIds(ids: string[]) {
    return client.delete(`${userUrl}/${ids.toString()}`)
  },

  getMe() {
    return client.get(`${userUrl}/me`, {})
  },

  paginate(
    query?: QueryParams,
    options?: FetchOptions
  ): Promise<PaginateResponse<User>> {
    return client.get(`${userUrl}/paginate`, query, options)
  },
}
