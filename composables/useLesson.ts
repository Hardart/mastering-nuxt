import { LessonWithPath } from '~/types/course'

export default async (chapterSlug: string, lessonSlug: string) => {
  const url = `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  const data = await useFetchWithCache<LessonWithPath>(url)

  return data
}
