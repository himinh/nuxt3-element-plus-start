import { FetchOptions, QueryParams } from '~types/fetch.type'
import { User } from '~types/user.type'

const USER_URL = '/users'
export const userService = {
  getAll(query?: QueryParams, options?: FetchOptions): Promise<User[]> {
    return client.get(`${USER_URL}`, query, options)
  },

  getById(
    id: string,
    query?: QueryParams,
    options?: FetchOptions
  ): Promise<User> {
    return client.get(`${USER_URL}/${id}`, query, options)
  },

  create(body: User, options?: FetchOptions): Promise<User> {
    return client.post(`${USER_URL}`, body, options)
  },

  update(id: string, body: User, options?: FetchOptions): Promise<User> {
    return client.patch(`${USER_URL}/${id}`, body, {
      ...options,
      isAuth: true,
    })
  },

  delete(id: string): Promise<User> {
    return client.delete(`/${`${USER_URL}`}/${id}`, { isAuth: true })
  },

  updatePassword(body: { oldPassword: string; newPassword: string }) {
    return client.patch(`${USER_URL}/`, body, { isAuth: true })
  },

  deleteManySoftByIds(ids: string[]) {
    return client.delete(`${USER_URL}/${ids.toString()}/soft_ids`, {
      isAuth: true,
    })
  },

  deleteManyByIds(ids: string[]) {
    return client.delete(`${USER_URL}/${ids.toString()}`, { isAuth: true })
  },

  getMe() {
    return client.get(`${USER_URL}/me`, {}, { isAuth: true })
  },

  paginate(query?: QueryParams, options?: FetchOptions): Promise<User[]> {
    return client.get(`${USER_URL}/paginate`, query, options)
  },
}
