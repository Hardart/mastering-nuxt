<template>
  <div>
    <p class="mt-0 text-slate-400 uppercase font-bold">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
    <h2 class="mt-0">{{ lesson.title }}</h2>
  </div>
  <VideoPlayer :video-id="lesson.videoId" />
  <p>{{ lesson.text }}</p>
  <LessonCompleteButton v-if="user" @update:model-value="toggleComplete(chapterSlug, lessonSlug)" :model-value="isComplete" />
</template>

<script setup>
import { useCourseProgress } from '~/store/courseProgress'
const user = useSupabaseUser()
const route = useRoute()
const { chapterSlug, lessonSlug } = route.params
const { course } = await useCourseData()
const lesson = await useLesson(chapterSlug, lessonSlug)
const progressStore = useCourseProgress()
const { init, toggleComplete } = progressStore
init()

definePageMeta({ middleware: ['route-validation', 'auth'] })

const chapter = computed(() => course.value.chapters.find(ch => ch.slug === route.params.chapterSlug))
const title = computed(() => `${lesson.value.title} - ${course.value.title}`)
useHead({ title })

const isComplete = computed(() => progressStore.progress?.[chapterSlug]?.[lessonSlug] || false)

const customError = () => {
  throw createError('some Errrorrr!!')
}
</script>

<style lang="scss"></style>
