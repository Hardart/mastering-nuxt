import { navigation } from '~/localData'

export const useAppSettings = () => {
  let isMenuInit = false
  const { currentRoute } = useRouter()
  const nav = ref(navigation)
  const setActiveMenuItem = (id: number, close?: () => void) => {
    nav.value.map(item => (item.current = item.id == id))
    if (close) close()
  }

  const initActiveItem = (routeName: string) => {
    if (isMenuInit) return
    nav.value.map(item => (item.current = item.href == routeName))
    isMenuInit = true
  }

  initActiveItem(currentRoute.value.path)

  return { nav, setActiveMenuItem, initActiveItem }
}
