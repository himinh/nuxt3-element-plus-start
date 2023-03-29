import { AuthType } from '~/utils/enums/auth-type'
import { AuthToken, SignIn } from '~/utils/types/auth.type'
import { authService } from '~/services/auth.service'

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref<boolean>(false)
  const tokens = ref<AuthToken>()

  /**
   * Login
   *
   * @param input
   * @returns
   */
  const login = async (input: SignIn) => {
    const data = await authService.signIn(input)

    return data
  }

  const getAccessToken = async () => {
    await authService.signIn({
      authKey: 'minh@gmail.com',
      authType: AuthType.EMAIL,
      password: 'minh123123',
    })

    return tokens.value!.ac_token
  }

  return { isAuth, tokens, login, getAccessToken }
})
