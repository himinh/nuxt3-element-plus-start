import { EndPoint } from '~~/src/types/endpoint.type'
import { QueryParams } from '~~/src/types/fetch.type'

const USER_URL = '/endpoints'
export const endpointService = {
  getAll(query?: QueryParams): Promise<EndPoint[]> {
    return client.get(`${USER_URL}`, query)
  },

  getById(id: string, query?: QueryParams): Promise<EndPoint> {
    return client.get(`${USER_URL}/${id}`, query)
  },

  create(body: EndPoint): Promise<EndPoint> {
    return client.post(`${USER_URL}`, body)
  },

  update(id: string, body: EndPoint): Promise<EndPoint> {
    return client.patch(`${USER_URL}/${id}`, body, {
      isAuth: true,
    })
  },

  delete(id: string): Promise<EndPoint> {
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

  paginate(query?: QueryParams): Promise<{
    data: EndPoint[]
    pageInfo: {
      hasNextPage: boolean
      hasPrevPage: boolean
      limit: number
      nextPage: number
      page: number
      pagingCounter: number
      prevPage: number
      totalData: number
      totalPages: number
    }
  }> {
    return client.get(`${USER_URL}/paginate`, query)
  },
}
