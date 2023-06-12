export default defineNuxtRouteMiddleware(async (to, from) => {
  const { course } = await useCourseData()
  const user = useSupabaseUser()

  if (user.value || to.params.chapterSlug === course.value.chapters[0].slug) return
  return navigateTo(`/login?redirectTo=${to.path}`)
})
