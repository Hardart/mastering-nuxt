<template>
  <NuxtLayout name="course">
    <div class="section section-secondary flex flex-col items-center">
      <div class="mb-6 prose dark:prose-h1:text-slate-50">
        <h1 class="font-medium">
          Course: <span class="font-bold">{{ title }}</span>
        </h1>
        <NuxtLink class="no-underline lowercase" to="/">Home</NuxtLink>
      </div>

      <div class="flex flex-row justify-center flex-grow">
        <div class="bg-white prose mr-4 p-8 min-w-[20ch] max-w-[30ch] flex flex-col rounded-lg shadow-md transition-colors">
          <h3>Chapters</h3>
          <div class="flex flex-col mb-4" v-for="chapter in chapters">
            <h4 :class="{ 'text-green-600': $route.path.includes(chapter.slug) }">{{ chapter.title }}</h4>
            <NuxtLink active-class="text-sky-600" class="prose-sm flex flex-row no-underline font-normal space-x-1 py-1" :to="lesson.path" v-for="lesson in chapter.lessons">
              <span>{{ lesson.number }}.</span>
              <span>{{ lesson.title }}</span>
            </NuxtLink>
          </div>
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
const { courseData } = useCourseData()
const { chapters, title } = courseData
const resetError = async error => {
  await navigateTo('/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3')
  error.value = null
}
</script>

<style></style>
