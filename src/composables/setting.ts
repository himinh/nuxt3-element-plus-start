export const useSetting = () => {
  const setting = useState('setting', () => ({
    name: 'Guest',
    overlay: false,
    camera: null,
  }))

  const setName = (name: string) => {
    setting.value.name = name
  }

  const setOverlay = (payload: any) => {
    setting.value.overlay = payload.overlay
  }

  const setCamera = (payload: any) => {
    setting.value.camera = payload.camera
  }

  return {
    setting,
    setName,
    setOverlay,
    setCamera,
  }
}
