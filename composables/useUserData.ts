export const useUserData = () => {
  const user = useSupabaseUser()
  const avatar = computed(() => user.value?.user_metadata.avatar_url)
  const name = computed(() => user.value?.user_metadata.user_name)
  const isLogin = computed(() => user.value?.id)
  return { avatar, name, isLogin }
}
