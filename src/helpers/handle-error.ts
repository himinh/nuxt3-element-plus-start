import { getErrorMessage } from './get-error-message'

export const handleError = (error: any) => {
  ElNotification({
    title: error.data ? error.data.title : error.name,
    message: error.data ? getErrorMessage(error.data) : error.message,
    dangerouslyUseHTMLString: true,
    type: 'error',
  })
}
