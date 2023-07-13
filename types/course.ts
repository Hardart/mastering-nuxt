import { Lesson } from '@prisma/client'

export type Navigation = {
  id: boolean
  name: string
  current: boolean
  href: string
}

export type LessonWithPath = Lesson & {
  path: string
}

export type ChapterProgress = {
  [key: string]: boolean
}

export type CourseProgress = {
  [key: string]: ChapterProgress
}
