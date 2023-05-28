import { User } from './user.type'

export type Login = Pick<User, 'authType'> & {
  password: string
  authKey: string
}

export type Register = Login & Pick<User, 'fullName' | 'dateOfBirth' | 'gender'>

export type AuthToken = {
  accessToken: {
    token: string
    iat: number
  }
  refreshToken: {
    token: string
    iat: number
  }
}

export type AuthUser = AuthToken & {
  user?: User
}
