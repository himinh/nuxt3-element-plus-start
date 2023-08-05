import { BaseFetch } from './base-fetch'

class AuthFetch extends BaseFetch {
  constructor() {
    super({ isAuth: true })
  }
}

export const authFetch = new AuthFetch()
