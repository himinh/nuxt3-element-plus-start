import { MenuLevel } from '~/enums/menu-level'
import { Role } from '~/enums/role'

export type Menu = {
  readonly parentId?: string
  readonly title: string
  readonly prefix: string
  readonly icon?: string
  readonly level: MenuLevel
  readonly url?: string
  readonly isHorizontal: boolean
  readonly isShow: boolean
  readonly roles: Role[]
}
