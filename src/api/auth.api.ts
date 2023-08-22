import { FetchOptions } from '../utils/fetch/types'
import { authFetch, httpClient } from '~/utils/fetch'
import {
  Tokens,
  AuthUser,
  Login,
  Register,
  LoginWithSocial,
} from '~/types/auth'

const authUrl = '/auth'
export const authApi = {
  login(data: Login, options?: FetchOptions): Promise<AuthUser> {
    return httpClient.post(`${authUrl}/login`, data, options)
  },

  loginWithSocial(
    data: LoginWithSocial,
    options?: FetchOptions
  ): Promise<AuthUser> {
    return httpClient.post(`${authUrl}/login_with_social`, data, options)
  },

  register(data: Register, options?: FetchOptions): Promise<AuthUser> {
    return httpClient.post(`${authUrl}/register`, data, options)
  },

  sendRegisterToken(
    data: Register,
    options?: FetchOptions
  ): Promise<{ token: string }> {
    return httpClient.post(`${authUrl}/send_register_token`, data, options)
  },

  activateRegisterToken(
    data: Register,
    options?: FetchOptions
  ): Promise<{ token: string }> {
    return httpClient.post(`${authUrl}/activate_register_token`, data, options)
  },

  logout(): Promise<any> {
    return authFetch.post(`${authUrl}/logout`, {})
  },

  refreshToken(token: string, options?: FetchOptions): Promise<AuthUser> {
    return httpClient.post(`${authUrl}/refresh_token`, { token }, options)
  },

  forgotPassword(
    email: string,
    options?: FetchOptions
  ): Promise<{ email: string }> {
    return httpClient.post(`${authUrl}/forgot_password`, { email }, options)
  },

  resetPassword(
    body: {
      token: string
      password: string
    },
    options?: FetchOptions
  ): Promise<Tokens> {
    return httpClient.post(`${authUrl}/reset_password`, body, options)
  },
}
