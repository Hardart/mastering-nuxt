import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  const { params } = event.context

  if (params?.chapterSlug !== '1-chapter-1') {
    checkAuth(event)
  }

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: params?.lessonSlug,
      Chapter: {
        slug: params?.chapterSlug,
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

  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: 'Lesson is not found',
    })
  }

  return { ...lesson, path: `/api/course/chapter/${params?.chapterSlug}/lesson/${params?.lessonSlug}` }
})
