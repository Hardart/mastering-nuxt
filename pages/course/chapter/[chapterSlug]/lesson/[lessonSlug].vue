<template>
  <div>
    <p class="mt-0 text-slate-400 uppercase font-bold">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
    <h2 class="mt-0">{{ lesson.title }}</h2>
  </div>
  <VideoPlayer :video-id="lesson.videoId" />
  <p>{{ lesson.text }}</p>
  <LessonCompleteButton @update:model-value="customError" :model-value="isLessonComplete" />
</template>

<script setup>
const { courseData } = useCourseData()
const route = useRoute()
const chapter = computed(() => courseData.chapters.find(ch => ch.slug === route.params.chapterSlug))
const lesson = computed(() => chapter.value.lessons.find(less => less.slug === route.params.lessonSlug))
const title = computed(() => `${lesson.value.title} - ${courseData.title}`)
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
