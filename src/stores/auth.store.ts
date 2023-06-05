import { localStorageHelper } from '~/helpers/local-storage'
import { AuthUser, Login, Register } from '~/types/auth'
import { authApi } from '~/api/auth.api'

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<AuthUser | null>(localStorageHelper.getAuth())

  const route = useRoute()

  const loginState = ref({
    pending: ref(),
    error: ref(),
  })

  const registerState = ref({
    pending: ref(),
    error: ref(),
  })

  const login = async (inputs: Login) => {
    const { data, error, pending } = await useAsyncData(() =>
      authApi.login(inputs)
    )

    loginState.value.pending = pending

    if (error.value) {
      loginState.value.error = error
      return
    }

    ElNotification({
      message: 'Login success!',
      type: 'success',
    })

    authUser.value = data.value

    // save to local storage
    localStorageHelper.setAuth(authUser.value!)

    // @ts-ignore
    navigateTo(`/${(route.query.from as string) || ''}`, { replace: true })
  }

  const register = (inputs: Register) => {
    const { data, error, pending } = useAsyncData(() =>
      authApi.register(inputs)
    )

    loginState.value = { error, pending }
    authUser.value = data.value

    // save to local storage
    localStorageHelper.setAuth(authUser.value!)
  }

  const logout = async () => {
    await useAsyncData(() => authApi.logout())

    // save to local storage
    localStorageHelper.deleteAuth()

    ElNotification({
      message: 'Logout success!',
      type: 'success',
    })

    authUser.value = null
    navigateTo('/auth/login')
  }

  const refreshTokenFromLocalStorage = () => {
    const authLocalStorage = localStorageHelper.getAuth()

    authUser.value = authLocalStorage
  }

  const getAcToken = async () => {
    refreshTokenFromLocalStorage()

    if (!authUser.value) {
      window.location.assign('/sign-in')
      return
    }

    const { accessToken, refreshToken } = authUser.value

    if (accessToken.iat > new Date().getTime()) {
      return accessToken.token
    }

    if (refreshToken.iat > new Date().getTime()) {
      try {
        const data = await authApi.refreshToken(refreshToken.token)

        authUser.value = { ...authUser.value, ...data }
        localStorageHelper.setAuth(authUser.value)

        return data.refreshToken.token
      } catch {
        window.location.assign('/sign-in')
        return
      }
    }

    window.location.assign('/sign-in')
  }

  return {
    authUser,
    loginState,
    registerState,
    login,
    register,
    logout,
    getAcToken,
  }
})
