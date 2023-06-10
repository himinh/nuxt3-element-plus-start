import { PaginateResponse } from '../types/paginate-reponse'
import { Menu } from '~/types/menu'
import { QueryParams } from '~/types/fetch'

const menuUrl = '/menus'
export const menuApi = {
  getAll(query?: QueryParams): Promise<Menu[]> {
    return client.get(`${menuUrl}`, query)
  },

  getById(id: string, query?: QueryParams): Promise<Menu> {
    return client.get(`${menuUrl}/${id}`, query)
  },

  create(body: Menu): Promise<Menu> {
    return client.post(`${menuUrl}`, body)
  },

  update(id: string, body: Menu): Promise<Menu> {
    return client.patch(`${menuUrl}/${id}`, body)
  },

  delete(id: string): Promise<Menu> {
    return client.delete(`/${`${menuUrl}`}/${id}`)
  },

  updatePassword(body: {
    oldPassword: string
    newPassword: string
  }) {
    return client.patch(`${menuUrl}/`, body)
  },

  deleteManySoftByIds(ids: string[]) {
    return client.delete(
      `${menuUrl}/${ids.toString()}/soft_ids`
    )
  },

  deleteManyByIds(ids: string[]) {
    return client.delete(`${menuUrl}/${ids.toString()}`)
  },

  paginate(
    query?: QueryParams
  ): Promise<PaginateResponse<Menu>> {
    return client.get(`${menuUrl}/paginate`, query)
  },
}
