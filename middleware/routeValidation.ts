export default defineNuxtRouteMiddleware(async ({ params }, from) => {
  const { course } = await useCourseData()
  const chapter = course.value.chapters.find(ch => ch.slug === params.chapterSlug)
  if (!chapter) {
    throw createError({
      statusCode: 404,
      message: 'Chapter is not found',
    })
  }
  const lesson = chapter.lessons.find(less => less.slug === params.lessonSlug)
  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: 'Lesson is not found',
    })
  }
})
