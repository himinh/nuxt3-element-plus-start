import { formatErrorMessage } from './formatErrorMessage'

export const showErrorMessage = (error: any) => {
  let errorType = error.name
  let errorTitle = error.name

  if (error.data) {
    errorType = error.data.type
    errorTitle = error.data.title
  }

  ElNotification({
    title: errorTitle,
    message: error.data
      ? formatErrorMessage(error.data.details, errorType)
      : error.message,
    dangerouslyUseHTMLString: true,
    type: 'error',
  })
}
