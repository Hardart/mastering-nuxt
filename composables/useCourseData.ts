import localData from '../courseLocalData'
type Chapter = {
  title: string
  slug: string
  number: number
  lessons: Lesson[]
}
type Lesson = {
  number: number
  title: string
  slug: string
  text: string
  videoId?: number
  path?: string
}

export const useCourseData = () => {
  const lessons = (chapter: Chapter) => chapter.lessons.map(less => ({ ...less, path: `/course/chapter/${chapter.slug}/lesson/${less.slug}` }))
  const chapters = localData.chapters.map(chapter => ({ ...chapter, lessons: lessons(chapter) }))
  return { courseData: { ...localData, chapters } }
}
