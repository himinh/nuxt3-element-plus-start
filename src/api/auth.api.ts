import { Tokens, AuthUser, Login, Register } from '~/types/auth'
import { FetchOptions } from '~/types/fetch'

const authUrl = '/auth'
export const authApi = {
  login(data: Login, options?: FetchOptions): Promise<AuthUser> {
    return clientFetch.post(`${authUrl}/login`, data, options)
  },

  loginBySocial(data: Login, options?: FetchOptions): Promise<AuthUser> {
    return clientFetch.post(`${authUrl}/login_by_social`, data, options)
  },

  register(data: Register, options?: FetchOptions): Promise<AuthUser> {
    return clientFetch.post(`${authUrl}/register`, data, options)
  },

  sendRegisterToken(
    data: Register,
    options?: FetchOptions
  ): Promise<{ token: string }> {
    return clientFetch.post(`${authUrl}/send_register_token`, data, options)
  },

  activateRegisterToken(
    data: Register,
    options?: FetchOptions
  ): Promise<{ token: string }> {
    return clientFetch.post(`${authUrl}/activate_register_token`, data, options)
  },

  logout(): Promise<any> {
    return authFetch.post(`${authUrl}/logout`, {})
  },

  refreshToken(token: string, options?: FetchOptions): Promise<AuthUser> {
    return clientFetch.post(`${authUrl}/refresh_token`, { token }, options)
  },

  forgotPassword(
    email: string,
    options?: FetchOptions
  ): Promise<{ email: string }> {
    return clientFetch.post(`${authUrl}/forgot_password`, { email }, options)
  },

  resetPassword(
    body: {
      token: string
      password: string
    },
    options?: FetchOptions
  ): Promise<Tokens> {
    return clientFetch.post(`${authUrl}/reset_password`, body, options)
  },
}
