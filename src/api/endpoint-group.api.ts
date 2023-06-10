import { PaginateResponse } from '../types/paginate-reponse'
import { FetchOptions, QueryParams } from '~/types/fetch'
import { EndpointGroup } from '~/types/endpoint-group'

const endpointGroupUrl = '/endpointGroups'
export const endpointGroupService = {
  getAll(
    query?: QueryParams,
    options?: FetchOptions
  ): Promise<EndpointGroup[]> {
    return client.get(`${endpointGroupUrl}`, query, options)
  },

  getById(
    id: string,
    query?: QueryParams,
    options?: FetchOptions
  ): Promise<EndpointGroup> {
    return client.get(
      `${endpointGroupUrl}/${id}`,
      query,
      options
    )
  },

  create(
    body: EndpointGroup,
    options?: FetchOptions
  ): Promise<EndpointGroup> {
    return client.post(`${endpointGroupUrl}`, body, options)
  },

  update(
    id: string,
    body: EndpointGroup,
    options?: FetchOptions
  ): Promise<EndpointGroup> {
    return client.patch(
      `${endpointGroupUrl}/${id}`,
      body,
      options
    )
  },

  delete(id: string): Promise<EndpointGroup> {
    return client.delete(`/${`${endpointGroupUrl}`}/${id}`)
  },

  updatePassword(body: {
    oldPassword: string
    newPassword: string
  }) {
    return client.patch(`${endpointGroupUrl}/`, body)
  },

  deleteManySoftByIds(ids: string[]) {
    return client.delete(
      `${endpointGroupUrl}/${ids.toString()}/soft_ids`
    )
  },

  deleteManyByIds(ids: string[]) {
    return client.delete(
      `${endpointGroupUrl}/${ids.toString()}`
    )
  },

  getMe() {
    return client.get(`${endpointGroupUrl}/me`, {})
  },

  paginate(
    query?: QueryParams,
    options?: FetchOptions
  ): Promise<PaginateResponse<EndpointGroup>> {
    return client.get(
      `${endpointGroupUrl}/paginate`,
      query,
      options
    )
  },
}
