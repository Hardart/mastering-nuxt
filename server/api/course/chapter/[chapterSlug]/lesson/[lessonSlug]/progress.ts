import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  assertMethod(event, ['POST', 'PATCH', 'PUT'])
  checkAuth(event)
  const { params, user } = event.context
  const { email: userEmail } = user
  const { completed } = await readBody(event)

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: params?.lessonSlug,
      Chapter: {
        slug: params?.chapterSlug,
      },
    },
    select: {
      id: true,
    },
  })

  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: 'Lesson is not found',
    })
  }

  return prisma.lessonProgress.upsert({
    where: {
      lessonId_userEmail: {
        lessonId: lesson.id,
        userEmail,
      },
    },
    update: { completed },
    create: {
      completed,
      userEmail,
      Lesson: {
        connect: { id: lesson.id },
      },
    },
  })
})
