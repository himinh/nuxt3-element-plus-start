export const getErrorMessage = (data: any) => {
  const messages = data.details.map((message: string) => {
    const words = message.split(' ')

    const label = words[0]

    const msg = words.slice(1).join(' ')

    return `<p><b>${label}</b>:  ${msg}</p>`
  })

  return messages.join('\n')
}

export const handleError = (error: any) => {
  ElNotification({
    title: error.data ? error.data.title : error.name,
    message: error.data ? getErrorMessage(error.data) : error.message,
    dangerouslyUseHTMLString: true,
    type: 'error',
  })
}
