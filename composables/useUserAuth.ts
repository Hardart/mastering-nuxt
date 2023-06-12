export const useUserAuth = () => {
  const { auth } = useSupabaseClient()
  const { query } = useRoute()

  const login = async () => {
    const redirectTo = `${window.location.origin}${query.redirectTo}`
    const { error } = await auth.signInWithOAuth({ provider: 'github', options: { redirectTo } })
    if (error) console.error(error)
  }
  const logout = async () => {
    const { error } = await auth.signOut()
    if (error) return console.error(error)
    await navigateTo('/')
  }
  return { login, logout }
}
