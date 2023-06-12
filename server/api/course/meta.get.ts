import { Chapter, Course, CourseMeta, Lesson, OutlineChapter, OutlineLesson } from '../../../types/course'
import { course } from '../../localData'
course as Course

export default defineEventHandler((event): CourseMeta => {
  const outline: OutlineChapter[] = course.chapters.reduce(reduceChapters, [])
  return {
    title: course.title,
    chapters: outline,
  }
})

function reduceChapters(prev: OutlineChapter[], curr: Chapter): OutlineChapter[] {
  const lessons: OutlineLesson[] = curr.lessons.map(mapLessons(curr))
  const { title, slug, number } = curr
  const chapter: OutlineChapter = { title, slug, number, lessons }
  return [...prev, chapter]
}

function mapLessons(curr: Chapter): (lesson: Lesson) => OutlineLesson {
  return (lesson: Lesson) => {
    const { title, slug, number } = lesson
    return { title, slug, number, path: `/course/chapter/${curr.slug}/lesson/${lesson.slug}` }
  }
}
