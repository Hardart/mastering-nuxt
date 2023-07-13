import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function seed() {
  await prisma.course.create({
    data: {
      id: 1,
      title: 'TypeScript with Vue.js 3',
      chapters: {
        create: [
          {
            title: 'Chapter 1',
            slug: '1-chapter-1',
            number: 1,
            lessons: {
              create: [
                {
                  title: 'Introduction to TypeScript with Vue. js 3',
                  slug: '1-introduction-to-typescript-with-vue-js-3',
                  number: 1,
                  videoId: 684236333,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quibusdam harum sit incidunt recusandae ea fugiat, doloribus, sapiente temporibus molestias minima, repudiandae deserunt? Quas error dolore assumenda ipsam perspiciatis numquam nesciunt',
                },
                {
                  title: 'Second lesson to TypeScript with Vue. js 3',
                  slug: '2-introduction-to-typescript-with-vue-js-3',
                  number: 2,
                  videoId: 684236333,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quibusdam harum sit incidunt recusandae ea fugiat, doloribus, sapiente temporibus molestias minima, repudiandae deserunt? Quas error dolore assumenda ipsam perspiciatis numquam nesciunt, harum fugit quia a, aut inventore placeat dolor nam officia perferendis nobis. Nostrum laboriosam fuga at sapiente laudantium! Lorem',
                },
                {
                  title: 'Third lesson to TypeScript with Vue. js 3',
                  slug: '3-introduction-to-typescript-with-vue-js-3',
                  number: 3,
                  videoId: 684236333,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quibusdam harum sit incidunt recusandae ea fugiat, doloribus, sapiente temporibus molestias minima, repudiandae deserunt? Quas error dolore assumenda ipsam perspiciatis numquam nesciunt, harum fugit quia a, aut inventore placeat dolor nam officia perferendis nobis. Nostrum laboriosam fuga at sapiente laudantium!',
                },
              ],
            },
          },
          {
            title: 'Chapter 2',
            slug: '1-chapter-2',
            number: 2,
            lessons: {
              create: [
                {
                  title: 'Introduction to TypeScript with Vue. js 3',
                  slug: '1-introduction-to-typescript-with-vue-js-3',
                  number: 1,
                  videoId: 684236333,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quibusdam harum sit incidunt recusandae ea fugiat, doloribus, sapiente temporibus molestias minima, repudiandae deserunt? Quas error dolore assumenda ipsam perspiciatis numquam nesciunt',
                },
                {
                  title: 'Second lesson to TypeScript with Vue. js 3',
                  slug: '2-introduction-to-typescript-with-vue-js-3',
                  number: 2,
                  videoId: 684236333,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quibusdam harum sit incidunt recusandae ea fugiat, doloribus, sapiente temporibus molestias minima, repudiandae deserunt? Quas error dolore assumenda ipsam perspiciatis numquam nesciunt, harum fugit quia a, aut inventore placeat dolor nam officia perferendis nobis. Nostrum laboriosam fuga at sapiente laudantium! Lorem',
                },
                {
                  title: 'Third lesson to TypeScript with Vue. js 3',
                  slug: '3-introduction-to-typescript-with-vue-js-3',
                  number: 3,
                  videoId: 684236333,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quibusdam harum sit incidunt recusandae ea fugiat, doloribus, sapiente temporibus molestias minima, repudiandae deserunt? Quas error dolore assumenda ipsam perspiciatis numquam nesciunt, harum fugit quia a, aut inventore placeat dolor nam officia perferendis nobis. Nostrum laboriosam fuga at sapiente laudantium!',
                },
              ],
            },
          },
          {
            title: 'Chapter 3',
            slug: '1-chapter-3',
            number: 3,
            lessons: {
              create: [
                {
                  title: 'Introduction to TypeScript with Vue. js 3',
                  slug: '1-introduction-to-typescript-with-vue-js-3',
                  number: 1,
                  videoId: 684236333,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quibusdam harum sit incidunt recusandae ea fugiat, doloribus, sapiente temporibus molestias minima, repudiandae deserunt? Quas error dolore assumenda ipsam perspiciatis numquam nesciunt',
                },
                {
                  title: 'Second lesson to TypeScript with Vue. js 3',
                  slug: '2-introduction-to-typescript-with-vue-js-3',
                  number: 2,
                  videoId: 684236333,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quibusdam harum sit incidunt recusandae ea fugiat, doloribus, sapiente temporibus molestias minima, repudiandae deserunt? Quas error dolore assumenda ipsam perspiciatis numquam nesciunt, harum fugit quia a, aut inventore placeat dolor nam officia perferendis nobis. Nostrum laboriosam fuga at sapiente laudantium! Lorem',
                },
                {
                  title: 'Third lesson to TypeScript with Vue. js 3',
                  slug: '3-introduction-to-typescript-with-vue-js-3',
                  number: 3,
                  videoId: 684236333,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quibusdam harum sit incidunt recusandae ea fugiat, doloribus, sapiente temporibus molestias minima, repudiandae deserunt? Quas error dolore assumenda ipsam perspiciatis numquam nesciunt, harum fugit quia a, aut inventore placeat dolor nam officia perferendis nobis. Nostrum laboriosam fuga at sapiente laudantium!',
                },
              ],
            },
          },
        ],
      },
    },
  })
}

try {
  await seed()
  await prisma.$disconnect()
} catch (e) {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
}
