import { BaseService } from './base.service'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export class TodoService extends BaseService<Todo> {
  constructor(_endpoint = '/todos') {
    super(_endpoint)
  }
}

export const todoService = new TodoService()
