import { skipHydrate } from 'pinia'

let resolveUser: (v: unknown) => void

const promise = new Promise(res => {
  resolveUser = res
})

export const useUserStore = defineStore('user', () => {
  // STATE
  const user = useSupabaseUser()
  const pendingUser = ref(true)

  // GETTERS
  const isReady = computed(() => promise)
  const isLogin = computed(() => user.value !== null)

  // ACTIONS

  return { user, isReady, resolveUser, isLogin, pendingUser: skipHydrate(pendingUser) }
})
