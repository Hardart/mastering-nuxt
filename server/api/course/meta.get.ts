import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
const selectParams = {
  select: {
    title: true,
    slug: true,
    number: true,
  },
}
const selectLesson = Prisma.validator<Prisma.LessonArgs>()(selectParams)
const selectChapter = Prisma.validator<Prisma.ChapterArgs>()({ select: { ...selectParams.select, lessons: selectLesson } })
const selectCourse = Prisma.validator<Prisma.CourseArgs>()({ select: { title: true, chapters: selectChapter } })

const chapterProgress = Prisma.validator<Prisma.ChapterArgs>()({ select: { slug: true } })
const lessonProgress = Prisma.validator<Prisma.LessonArgs>()({ select: { slug: true, Chapter: chapterProgress } })
const userProgress = Prisma.validator<Prisma.LessonProgressArgs>()({ select: { completed: true, Lesson: lessonProgress } })

export type LessonOutline = Prisma.LessonGetPayload<typeof selectLesson> & { path: string }
export type ChapterOutline = Omit<Prisma.ChapterGetPayload<typeof selectChapter>, 'lessons'> & { lessons: LessonOutline[] }
export type CourseOutline = Omit<Prisma.CourseGetPayload<typeof selectCourse>, 'chapters'> & { chapters: ChapterOutline[] }
export type UserProgress = Prisma.LessonProgressGetPayload<typeof userProgress>

export default defineEventHandler(async (): Promise<CourseOutline> => {
  const outlineCourse = (await prisma.course.findFirst(selectCourse)) as CourseOutline

  if (!outlineCourse) {
    throw createError({
      statusCode: 404,
      message: 'Course is not found',
    })
  }
  const chapters: ChapterOutline[] = outlineCourse.chapters.map(mapChapters)
  return { ...outlineCourse, chapters }
})

function mapChapters(chapter: ChapterOutline): ChapterOutline {
  const lessons: LessonOutline[] = chapter.lessons.map(mapLessons(chapter))
  return { ...chapter, lessons }
}

function mapLessons(chapter: ChapterOutline): (lesson: LessonOutline) => LessonOutline {
  return (lesson: LessonOutline) => {
    return { ...lesson, path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}` }
  }
}
