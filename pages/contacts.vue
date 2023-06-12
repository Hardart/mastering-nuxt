<template>
  <NuxtLayout name="contacts">
    <NuxtLayout name="section" color="secondary">
      <h1 class="text-4xl">{{ $route.name }}</h1>
    </NuxtLayout>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'contacts',
})
</script>

<style></style>
