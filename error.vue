<template>
  <NuxtLayout>
    <div class="seciton section-secondary fixed inset-0 grid place-items-center">
      <div class="text-center">
        <h1 class="text-9xl font-bold">{{ error?.statusCode }}</h1>
        <h3 class="text-4xl font-bold mb-4">{{ error?.message }}</h3>
        <button class="uppercase text-sky-700 space-x-2 hover:text-sky-500 p-2" @click="errorHandler">
          <HomeIcon class="w-5 inline-block" aria-hidden="true" />
          <span class="align-middle">go home</span>
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError()
import { HomeIcon } from '@heroicons/vue/24/outline'
const errorHandler = () => {
  clearError({
    redirect: '/',
  })
}
</script>
