import { SignIn, SignUp } from '~/types/auth.type'
import { fetchApi } from '~/composables/fetch-api'

const AUTH_URL = '/auth'

export class AuthService {
  /**
   * Sign in
   *
   * @param {SignIn} data - Object containing user's sign-in data.
   * @returns {Promise<any>}
   */
  signIn(data: SignIn): Promise<any> {
    return fetchApi.post(`${AUTH_URL}/signin`, { isAuth: false, body: data })
  }

  /**
   * Sign up
   *
   * @param {SignUp} data - Object containing user's sign-up data.
   * @returns {Promise<any>}
   */
  signUp(data: SignUp): Promise<any> {
    return fetchApi.post(`${AUTH_URL}/signup`, { isAuth: false, body: data })
  }

  /**
   * Send email token for sign up
   *
   * @param {SignUp} data - Object containing user's sign-up data.
   * @returns {Promise<any>}
   */
  sendSignUpEmailToken(data: SignUp): Promise<any> {
    return fetchApi.post(`${AUTH_URL}/signup_send_email_token`, {
      isAuth: false,
      body: data,
    })
  }

  /**
   * Activate sign-up token
   *
   * @param {string} token - Activation token.
   * @returns {Promise<any>}
   */
  activateSignUpToken(token: string): Promise<any> {
    return fetchApi.post(`${AUTH_URL}/activate_signup_token`, {
      isAuth: false,
      body: { token },
    })
  }

  /**
   * Logout
   *
   * @returns {Promise<any>}
   */
  signOut(): Promise<any> {
    return fetchApi.post(`${AUTH_URL}/signout`, {})
  }

  /**
   * Refresh token
   *
   * @param {string} rfToken - Refresh token.
   * @returns {Promise<any>}
   */
  refreshToken(rfToken: string): Promise<any> {
    return fetchApi.post(`${AUTH_URL}/refresh_token`, {
      isAuth: false,
      body: { token: rfToken },
    })
  }
}

export const authService = new AuthService()
