export default defineNuxtRouteMiddleware((to, from) => {
  const { courseData } = useCourseData()
  if (to.params.chapterSlug !== courseData.chapters[0].slug) return navigateTo('/login')
  return
})
