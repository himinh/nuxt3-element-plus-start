import { User } from '~/types/user'
import { userApi } from '~/api/user.api'

export const useUserStore = defineStore('user', () => {
  const loading = ref<boolean>(false)
  const users = ref<User[] | null>()

  const { data, error } = useAsyncData(() => userApi.getAll())

  users.value = data.value

  return {
    users,
  }
})
