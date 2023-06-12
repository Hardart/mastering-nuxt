<template>
  <NuxtLayout>
    <NuxtLayout name="section" color="secondary">
      <h1 class="text-4xl mb-8">
        Log in to <span class="font-bold">{{ firstLesson.title }}</span>
      </h1>
      <button class="btn-primary" @click="login">Login with GitHub</button>
    </NuxtLayout>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['is-login'],
})
const { firstLesson } = await useCourseData()
const { login } = useUserAuth()
const { query } = useRoute()
const { isLogin } = useUserData()
watchEffect(async () => {
  if (!isLogin.value) return
  await navigateTo(query.redirectTo as string, { replace: true })
})
</script>

<style lang="scss"></style>
