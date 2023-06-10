import { AuthUser } from '~/types/auth'

export const localStorageKey = {
  auth: 'auth',
}

export const localStorageHelper = {
  getAuth(): AuthUser | null {
    const authString = localStorage.getItem(
      localStorageKey.auth
    )

    return authString ? JSON.parse(authString) : null
  },

  setAuth(auth: AuthUser) {
    localStorage.setItem(
      localStorageKey.auth,
      JSON.stringify(auth)
    )
  },

  deleteAuth() {
    localStorage.removeItem(localStorageKey.auth)
  },
}
