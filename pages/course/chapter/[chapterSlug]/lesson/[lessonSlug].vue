<template>
  <div>
    <p class="mt-0 text-slate-400 uppercase font-bold">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
    <h2 class="mt-0">{{ lesson.title }}</h2>
  </div>
  <VideoPlayer :video-id="lesson.videoId" />
  <p>{{ lesson.text }}</p>
  <LessonCompleteButton @update:model-value="toggleComplete" :model-value="isLessonComplete" />
</template>

<script setup>
const route = useRoute()
const { chapterSlug, lessonSlug } = route.params
const { course } = await useCourseData()
const lesson = await useLesson(chapterSlug, lessonSlug)
definePageMeta({
  middleware: ['route-validation', 'auth'],
})

const chapter = computed(() => course.value.chapters.find(ch => ch.slug === route.params.chapterSlug))

const title = computed(() => `${lesson.value.title} - ${course.value.title}`)
useHead({ title })

const progress = useLocalStorage('lessonsProgress', [])

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) return false
  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) return false
  return progress.value[chapter.value.number - 1][lesson.value.number - 1]
})

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) progress.value[chapter.value.number - 1] = []
  progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value
}

const customError = () => {
  throw createError('some Errrorrr!!')
}
</script>

<style lang="scss"></style>
