import { localStorageHelper } from '../helpers/local-storage'
import { authService } from '../../services/auth.service'
import { AuthUser, Login, Register } from '~types/auth.type'

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<AuthUser | null>(null)
  const signState = ref({
    pending: ref(),
    error: ref(),
  })
  const registerState = ref({
    pending: ref(),
    error: ref(),
  })

  /**
   * Sign in
   *
   * @param inputs
   */
  const login = (inputs: Login) => {
    const { data, error, pending } = useAsyncData(() =>
      authService.login(inputs)
    )

    signState.value = { error, pending }
    authUser.value = data.value
    // save to local storage
    localStorageHelper.setAuth(authUser.value!)
  }

  /**
   * Sign up
   *
   * @param inputs
   */
  const register = (inputs: Register) => {
    const { data, error, pending } = useAsyncData(() =>
      authService.register(inputs)
    )

    signState.value = { error, pending }
    authUser.value = data.value

    // save to local storage
    localStorageHelper.setAuth(authUser.value!)
  }

  /**
   * Sign out
   *
   * @param inputs
   */
  const signOut = () => {
    useAsyncData(() => authService.logout())

    authUser.value = null

    // save to local storage
    localStorageHelper.deleteAuth()
  }

  /**
   * Refresh token from local storage
   */
  const refreshTokenFromLocalStorage = () => {
    const authLocalStorage = localStorageHelper.getAuth()

    authUser.value = authLocalStorage
  }

  /**
   * Get access token
   *
   * @returns
   */
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
        const data = await authService.refreshToken(refreshToken.token)

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
    signState,
    registerState,
    login,
    register,
    signOut,
    getAcToken,
  }
})
