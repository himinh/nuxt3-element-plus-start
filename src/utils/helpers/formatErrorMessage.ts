export const formatErrorMessage = (details: string[]) => {
  const messages = details.map((message) => {
    const words = message.split(' ')

    const label = words[0]

    const msg = words.slice(1).join(' ')

    return `<p><b>${label}</b>:  ${msg}</p>`
  })

  return messages.join('\n')
}
