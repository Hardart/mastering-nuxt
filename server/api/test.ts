import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  const { lessonSlug, chapterSlug } = getQuery(event)

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug as string,
      Chapter: {
        slug: chapterSlug as string,
      },
    },
    select: {
      title: true,
      slug: true,
      number: true,
      videoId: true,
      text: true,
    },
  })
  return lesson
})
