import { PaginateResponse } from '../types/paginate-reponse'
import { Endpoint } from '~/types/endpoint'
import { QueryParams } from '~/types/fetch'

const endpointUrl = '/endpoints'
export const endpointApi = {
  getAll(query?: QueryParams): Promise<Endpoint[]> {
    return client.get(`${endpointUrl}`, query)
  },

  getById(
    id: string,
    query?: QueryParams
  ): Promise<Endpoint> {
    return client.get(`${endpointUrl}/${id}`, query)
  },

  create(body: Endpoint): Promise<Endpoint> {
    return client.post(`${endpointUrl}`, body)
  },

  update(id: string, body: Endpoint): Promise<Endpoint> {
    return client.patch(`${endpointUrl}/${id}`, body)
  },

  delete(id: string): Promise<Endpoint> {
    return client.delete(`/${`${endpointUrl}`}/${id}`)
  },

  updatePassword(body: {
    oldPassword: string
    newPassword: string
  }) {
    return client.patch(`${endpointUrl}/`, body)
  },

  deleteManySoftByIds(ids: string[]) {
    return client.delete(
      `${endpointUrl}/${ids.toString()}/soft_ids`
    )
  },

  deleteManyByIds(ids: string[]) {
    return client.delete(`${endpointUrl}/${ids.toString()}`)
  },

  getMe() {
    return client.get(`${endpointUrl}/me`, {})
  },

  paginate(
    query?: QueryParams
  ): Promise<PaginateResponse<Endpoint>> {
    return client.get(`${endpointUrl}/paginate`, query)
  },
}
