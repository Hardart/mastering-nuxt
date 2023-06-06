export default defineNuxtRouteMiddleware(({ params }, from) => {
  const { courseData } = useCourseData()
  const chapter = courseData.chapters.find(ch => ch.slug === params.chapterSlug)
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
