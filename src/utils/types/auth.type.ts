import { User } from './user.type'

export type SignIn = Pick<User, 'authType'> & {
  password: string
  authKey: string
}

export type SignUp = SignIn & Pick<User, 'fullName' | 'dateOfBirth' | 'gender'>

export type AuthToken = {
  ac_token: string
  rf_token: string
}

export type AuthUser = AuthToken & {
  user: User
}
