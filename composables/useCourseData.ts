import { CourseOutline, LessonOutline } from '~/server/api/course/meta.get'

import { products } from '~/localData'

export const useCourseData = async () => {
  const course = await useFetchWithCache<CourseOutline>('/api/course/meta')
  const firstLesson: LessonOutline = course.value.chapters[0].lessons[0]

  return { course, products, firstLesson }
}
