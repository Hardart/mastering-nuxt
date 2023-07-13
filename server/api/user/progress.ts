import { PrismaClient, Course } from '@prisma/client'
import { ChapterProgress, CourseProgress } from '../../../types/course'
import { ChapterOutline, UserProgress, LessonOutline } from '../course/meta.get'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  // assertMethod(event, ['POST', 'PATCH', 'PUT'])
  checkAuth(event)
  const { user } = event.context

  const { email: userEmail } = user
  const query = { slug: true }

  const userProgress: UserProgress[] = await prisma.lessonProgress.findMany({
    where: {
      userEmail,
      Lesson: {
        Chapter: {
          Course: { id: 1 },
        },
      },
    },
    select: {
      completed: true,
      Lesson: {
        select: {
          ...query,
          Chapter: { select: query },
        },
      },
    },
  })

  const courseOutline = await $fetch('/api/course/meta')

  if (!courseOutline) {
    throw createError({
      statusCode: 404,
      message: "Can't fetch course meta",
    })
  }

  function reduceChapers(courseProgress: CourseProgress, chapter: ChapterOutline): CourseProgress {
    courseProgress[chapter.slug] = chapter.lessons.reduce(reduceLessons(userProgress, chapter.slug), {})
    return courseProgress
  }

  const progress = courseOutline.chapters.reduce(reduceChapers, {})

  return progress
})

function findCompletedLesson(lessonSlug: string, chapterSlug: string) {
  return (item: UserProgress): boolean => item.Lesson.slug === lessonSlug && item.Lesson.Chapter.slug === chapterSlug
}

function reduceLessons(userProgress: UserProgress[], chapterSlug: string) {
  return (chapterProgress: ChapterProgress, lesson: LessonOutline): ChapterProgress => {
    chapterProgress[lesson.slug] = userProgress.find(findCompletedLesson(lesson.slug, chapterSlug))?.completed || false
    return chapterProgress
  }
}
