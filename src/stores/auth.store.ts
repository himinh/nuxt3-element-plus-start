import { AuthUser, Login, Register, Tokens } from '~/types/auth'
import { authApi } from '~/api/auth.api'
import { localStorageManager, showErrorMessage } from '~/utils/helpers'

export const useAuthStore = defineStore('auth', () => {
  const authState = ref({
    isLoading: ref(),
    isLoadingForgotPass: ref(),
  })
  const forgotPassSent = ref(false)

  const authUser = ref<Tokens | null>(localStorageManager.getAuth())

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

    authState.value.isLoading = pending

    if (error.value) return showErrorMessage(error.value)

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

    authState.value.isLoading = pending

    if (error.value) return showErrorMessage(error.value)

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
      showErrorMessage(error)
      _clearAuth()
      return null
    }
  }

  /**
   * Refresh auth by refreshToken
   *
   * @param rfToken
   * @returns
   */
  const forgotPassword = async (email: string) => {
    const { data, error, pending } = await useAsyncData('forgot-password', () =>
      authApi.forgotPassword(email)
    )

    authState.value.isLoadingForgotPass = pending

    if (error.value) {
      showErrorMessage(error.value)

      return null
    }

    setForgotPassSent(true)

    return data.value
  }

  /**
   * Set auth
   *
   * @param data
   */
  const _setAuth = (data: AuthUser) => {
    authUser.value = { ...authUser.value, ...data }
    localStorageManager.setAuth(authUser.value)
  }

  /**
   * Clear auth
   */
  const _clearAuth = () => {
    localStorageManager.clearAuth()
    authUser.value = null
  }

  const setForgotPassSent = (isSent: boolean) => {
    forgotPassSent.value = isSent
  }

  return {
    authUser,
    authState,
    login,
    register,
    logout,
    getAccessToken,
    setForgotPassSent,
    forgotPassword,
    forgotPassSent,
  }
})
