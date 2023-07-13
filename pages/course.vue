<template>
  <NuxtLayout name="course">
    <div class="section section-secondary flex flex-col items-center">
      <div class="mb-12 prose dark:prose-h1:text-slate-50 dark:prose-h2:text-slate-400">
        <h1 class="font-medium">
          Course: <span class="font-bold">{{ course.title }}</span>
        </h1>
      </div>

      <div class="flex flex-row justify-center flex-grow">
        <div class="bg-white prose mr-4 p-8 min-w-[20ch] max-w-[30ch] flex flex-col rounded-lg shadow-md transition-colors">
          <h3>Chapters</h3>
          <div class="flex flex-col mb-4" v-for="(chapter, i) in course.chapters">
            <div class="flex">
              <h4 :class="{ 'text-green-600': $route.path.includes(chapter.slug) }" class="flex flex-grow justify-between">
                {{ chapter.title }}
                <span class="text-gray-400 text-sm" v-if="user">{{ persentageCompleted.chapters[i] }}</span>
              </h4>
            </div>
            <NuxtLink active-class="text-sky-600" class="prose-sm flex flex-row no-underline font-normal space-x-1 py-1" :to="lesson.path" v-for="lesson in chapter.lessons">
              <span>{{ lesson.number }}.</span>
              <span>{{ lesson.title }}</span>
            </NuxtLink>
          </div>
          <h5 class="mt-5" v-if="user">
            Course total progress: <span class="font-bold text-gray-700">{{ persentageCompleted.course }}</span>
          </h5>
        </div>

        <div class="prose bg-white p-8 rounded-md shadow-md w-[65ch]">
          <NuxtErrorBoundary>
            <NuxtPage />
            <template #error="{ error }">
              <p>
                Shit is happens <code>{{ error }}</code>
              </p>
              <button class="btn-primary" @click="resetError(error)">Try again</button>
            </template>
          </NuxtErrorBoundary>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCourseProgress } from '~/store/courseProgress'
const store = useCourseProgress()
const { init } = store
const { persentageCompleted } = storeToRefs(store)
init()
const { course, firstLesson } = await useCourseData()
const user = useSupabaseUser()
const resetError = async error => {
  await navigateTo(firstLesson.path)
  error.value = null
}
</script>

<style></style>
