import { BaseService } from './base.service'

type User = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export class UserService extends BaseService<User> {
  constructor(_endpoint = '/todos') {
    super(_endpoint)
  }
}

export const todoService = new UserService()
