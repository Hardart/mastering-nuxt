<template>
  <NuxtLayout name="contacts">
    <div class="section section-secondary">
      <h1 class="text-4xl">{{ $route.name }}</h1>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'contacts',
})
</script>

<style></style>
