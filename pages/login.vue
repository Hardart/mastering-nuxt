<template>
  <NuxtLayout>
    <Section color="secondary">
      <h1 class="text-4xl mb-8">
        Log in to <span class="font-bold">{{ firstLesson.title }}</span>
      </h1>
      <button class="btn btn-primary" @click="login">Login with GitHub</button>
    </Section>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['is-login'],
})
const { firstLesson } = await useCourseData()
const { login } = useUserAuth()
const { query } = useRoute()
const user = useSupabaseUser()
watchEffect(async () => {
  if (!user.value) return
  await navigateTo(query.redirectTo as string, { replace: true })
})
</script>

<style lang="scss"></style>
