import { Gender } from '~/enums/gender'
import { Role } from '~/enums/role'

export type User = {
  email: string
  phone: string
  username: string

  _id: string
  fullName: string
  gender: Gender | ''
  dateOfBirth: number

  deviceID: string
  fcmTokens: string[]
  enableFcm: boolean
  role: Role
  deleted: boolean
}
