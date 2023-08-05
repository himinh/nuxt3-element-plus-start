import { localStorageHelper } from '~/helpers/local-storage'
import { AuthUser, Login, Register, Tokens } from '~/types/auth'
import { authApi } from '~/api/auth.api'
import { handleError } from '~/helpers/get-error-message'

export const useAuthStore = defineStore('auth', () => {
  const loading = ref<boolean>(false)
  const authLoading = ref({
    isLoading: ref(),
  })
  const authUser = ref<Tokens | null>(localStorageHelper.getAuth())

  /**
   * Login
   *
   * @param inputs
   * @returns
   */
  const login = async (inputs: Login) => {
    const { data, error, pending } = await useAsyncData(() =>
      authApi.login(inputs)
    )

    authLoading.value.isLoading = pending

    if (error.value) return handleError(error.value)

    _setAuth(data.value!)
  }

  /**
   * Register
   *
   * @param inputs
   */
  const register = async (inputs: Register) => {
    const { data, error, pending } = await useAsyncData(() =>
      authApi.register(inputs)
    )

    authLoading.value.isLoading = pending

    if (error.value) return handleError(error.value)

    _setAuth(data.value!)
  }

  /**
   * Logout
   */
  const logout = async () => {
    await useAsyncData(() => authApi.logout())

    navigateTo('/auth/login')
    _clearAuth()
  }

  /**
   * Get access token
   *
   * @returns
   */
  const getAccessToken = async () => {
    if (!authUser.value) return null

    const currentMS = new Date().getTime()
    const { accessToken, refreshToken } = authUser.value

    if (accessToken.expiresAt > currentMS) return accessToken.token

    if (refreshToken.expiresAt < currentMS) {
      _clearAuth()
      return null
    }

    const data = await refreshAuthByRfToken(refreshToken.token)

    if (data) return data.accessToken.token

    _clearAuth()
    return null
  }

  /**
   * Refresh auth by refreshToken
   *
   * @param rfToken
   * @returns
   */
  const refreshAuthByRfToken = async (rfToken: string) => {
    try {
      const data = await authApi.refreshToken(rfToken)
      _setAuth(data)
      return data
    } catch (error) {
      handleError(error)
      _clearAuth()
      return null
    }
  }

  /**
   * Set auth
   *
   * @param data
   */
  const _setAuth = (data: AuthUser) => {
    authUser.value = { ...authUser.value, ...data }
    localStorageHelper.setAuth(authUser.value)
  }

  /**
   * Clear auth
   */
  const _clearAuth = () => {
    localStorageHelper.clearAuth()
    authUser.value = null
  }

  /**
   * Start loading
   */
  const _startLoading = () => {
    loading.value = true
  }

  /**
   * Stop loading
   */
  const _stopLoading = () => {
    loading.value = false
  }

  return {
    authUser,
    loading,
    authLoading,
    login,
    register,
    logout,
    getAccessToken,
  }
})
