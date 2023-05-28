import { endpointService } from '../../services/endpoint.service'
import { EndPoint } from '../types/endpoint.type'

export const useEndpointStore = defineStore('endpoint', () => {
  const limit = ref<number>(10)
  const page = ref<number>(1)
  const sort = ref<string>('-createdAt')
  const populate = ref<string>('')
  const fields = ref<string>('')
  const endpoints = ref<EndPoint[] | null>(null)
  const pageInfo = ref<{
    hasNextPage: boolean
    hasPrevPage: boolean
    limit: number
    nextPage: number
    page: number
    pagingCounter: number
    prevPage: number
    totalData: number
    totalPages: number
  } | null>(null)

  const { data, pending } = useAsyncData(
    () =>
      endpointService.paginate({
        _limit: limit.value,
        _page: page.value,
        _populate: populate.value,
        _fields: fields.value,
        _sort: sort.value,
      }),
    {
      watch: [limit, page, sort],
    }
  )

  const create = (item: any) => {
    data.value?.data.unshift(item)
  }

  return {
    limit,
    page,
    sort,
    pending,
    data,
    create,
  }
})
