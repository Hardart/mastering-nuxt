<template>
  <Section color="default">
    <h1 class="text-4xl">{{ $route.name }}</h1>
    <h2 v-if="isReady">{{ isLogin }}</h2>
    <div class="btn" @click="resolve">resolve</div>
  </Section>
</template>

<script setup>
import { useUserStore } from '~/store/user'

const { isReady, resolveUser, isLogin } = useUserStore()
const resolve = () => resolveUser()
</script>

<style></style>
