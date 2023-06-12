import { Chapter, Course, Lesson, LessonWithPath } from '../../../../../../types/course'
import { course } from '../../../../../localData'
course as Course

export default defineEventHandler((event): LessonWithPath => {
  const { params } = event.context

  const chapter: Maybe<Chapter> = course.chapters.find(ch => ch.slug === params?.chapterSlug)
  if (!chapter) {
    throw createError({
      statusCode: 404,
      message: 'Chapter is not found',
    })
  }
  const lesson: Maybe<Lesson> = chapter.lessons.find(less => less.slug === params?.lessonSlug)

  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: 'Lesson is not found',
    })
  }

  return { ...lesson, path: `course/chapter/${params?.chapterSlug}/lesson/${params?.lessonSlug}` }
})
