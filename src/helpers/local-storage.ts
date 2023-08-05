import { AuthUser } from '~/types/auth'

export const localStorageKey = {
  token: '_app_login',
}

export const localStorageHelper = {
  getAuth(): AuthUser | null {
    const authString = localStorage.getItem(localStorageKey.token)

    return authString ? JSON.parse(authString) : null
  },

  setAuth(auth: AuthUser) {
    localStorage.setItem(localStorageKey.token, JSON.stringify(auth))
  },

  clearAuth() {
    localStorage.removeItem(localStorageKey.token)
  },
}
