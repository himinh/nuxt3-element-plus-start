import { AuthToken, AuthUser, Login, Register } from '~types/auth.type'
import { FetchOptions } from '~types/fetch.type'

const AUTH_URL = '/auth'
export const authService = {
  login(data: Login, options?: FetchOptions): Promise<AuthUser> {
    return client.post(`${AUTH_URL}/login`, data, options)
  },

  loginBySocial(data: Login, options?: FetchOptions): Promise<AuthUser> {
    return client.post(`${AUTH_URL}/login_by_social`, data, options)
  },

  register(data: Register, options?: FetchOptions): Promise<AuthUser> {
    return client.post(`${AUTH_URL}/register`, data, options)
  },

  sendRegisterToken(
    data: Register,
    options?: FetchOptions
  ): Promise<{ token: string }> {
    return client.post(`${AUTH_URL}/send_register_token`, data, options)
  },

  activateRegisterToken(
    data: Register,
    options?: FetchOptions
  ): Promise<{ token: string }> {
    return client.post(`${AUTH_URL}/activate_register_token`, data, options)
  },

  logout(): Promise<any> {
    return client.post(`${AUTH_URL}/logout`, {}, { isAuth: true })
  },

  refreshToken(token: string, options?: FetchOptions): Promise<AuthUser> {
    return client.post(`${AUTH_URL}/refresh_token`, { token }, options)
  },

  sendResetPasswordToken(
    email: string,
    options?: FetchOptions
  ): Promise<AuthUser> {
    return client.post(
      `${AUTH_URL}/send_reset_password_token`,
      { email },
      options
    )
  },

  resetPassword(
    body: {
      token: string
      password: string
    },
    options?: FetchOptions
  ): Promise<AuthToken> {
    return client.post(`${AUTH_URL}/reset_password`, body, options)
  },
}
