const waitingUser = ref(false)
export const useUserData = () => {
  const user = useSupabaseUser()
  const avatar = computed(() => user.value?.user_metadata.avatar_url)
  const name = computed(() => user.value?.user_metadata.user_name)
  const loadUser = useSessionStorage('load-user', false)

  const isLogin = computed(() => user.value?.id)
  return { avatar, name, isLogin, user, loadUser }
}
