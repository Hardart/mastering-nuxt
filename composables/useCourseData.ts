import { CourseMeta, OutlineLesson } from '~/types/course'
import { products } from '~/localData'

export const useCourseData = async () => {
  const course = await useFetchWithCache<CourseMeta>('/api/course/meta')
  const firstLesson: OutlineLesson = course.value.chapters[0].lessons[0]

  return { course, products, firstLesson }
}
