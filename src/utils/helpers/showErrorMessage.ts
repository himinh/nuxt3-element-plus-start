import { formatErrorMessage } from './formatErrorMessage'

export const showErrorMessage = (error: any) => {
  ElNotification({
    title: error.data ? error.data.title : error.name,
    message: error.data
      ? formatErrorMessage(error.data.details)
      : error.message,
    dangerouslyUseHTMLString: true,
    type: 'error',
  })
}
