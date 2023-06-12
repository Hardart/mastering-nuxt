export type Navigation = {
  id: boolean
  name: string
  current: boolean
  href: string
}

export type Chapter = {
  title: string
  slug: string
  number: number
  lessons: Lesson[] | LessonWithPath[]
}

export type Lesson = {
  number: number
  title: string
  slug: string
  text: string
  videoId?: number
}

export type Course = {
  chapters: Chapter[]
}

export type LessonWithPath = Lesson & {
  path: string
}

export type OutlineBase = {
  title: string
  slug: string
  number: number
}

export type OutlineChapter = OutlineBase & {
  lessons: OutlineLesson[]
}

export type OutlineLesson = OutlineBase & {
  path: string
}

export type CourseMeta = {
  title: string
  chapters: OutlineChapter[]
}
