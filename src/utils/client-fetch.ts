import { BaseFetch } from './base-fetch'

class ClientFetch extends BaseFetch {
  constructor() {
    super({ isAuth: false })
  }
}

export const clientFetch = new ClientFetch()
