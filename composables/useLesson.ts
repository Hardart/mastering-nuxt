import { LessonWithPath } from '~/types/course'

export default async (chapterSlug: string, lessonSlug: string) => {
  const url = `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  const data = await useFetchWithCache<LessonWithPath>(url)
  // const data = await useFetchLesson<LessonWithPath>(chapterSlug, lessonSlug)

  return data
}
