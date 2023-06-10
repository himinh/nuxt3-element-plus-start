import { User } from './user'

export type Login = {
  password: string
  email: string
}

export type Register = Login &
  Pick<User, 'fullName' | 'dateOfBirth' | 'gender'>

export type Token = {
  token: string
  iat: number
}

export type Tokens = {
  accessToken: Token
  refreshToken: Token
}

export type AuthUser = Tokens & {
  user?: User
}
