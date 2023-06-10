interface IItem {
  url: string
  type: 'webview' | 'course' | string
  [key: string]: any
}

const commonOpen = (item: IItem) => {
  if (item.type === 'webview') {
    window.open(item.url)
    return
  }

  const to = `courses/${item.url}`
  navigateTo(to)
}

export default defineNuxtPlugin(() => {
  return {
    provide: { commonOpen },
  }
})
