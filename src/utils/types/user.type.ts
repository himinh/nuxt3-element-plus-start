import { AuthType } from '~/enums/auth-type'
import { Gender } from '~/enums/gender'
import { Role } from '~/enums/role'

export type User = {
  email?: string
  phone?: string
  username?: string
  authKey?: string
  authType: AuthType

  _id: string
  fullName: string
  gender: Gender
  dateOfBirth: number

  readonly deviceID: string
  readonly fcmTokens: string[]
  readonly enableFcm: boolean
  readonly role: Role
  readonly deleted: boolean
}
