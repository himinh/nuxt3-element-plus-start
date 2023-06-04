import { localStorageHelper } from './local-storage'
import { authApi } from '~/api/auth.api'

export const getAccessToken = async () => {
  const token = localStorageHelper.getAuth()

  if (!token) return ''

  const { accessToken, refreshToken, user } = token

  if (accessToken.iat < Date.now()) {
    try {
      // refresh token
      const newTokens = await authApi.refreshToken(refreshToken.token)

      localStorageHelper.setAuth({ ...newTokens, user })

      return accessToken.token
    } catch (error) {
      localStorageHelper.deleteAuth()
    }
  }

  return accessToken.token
}
