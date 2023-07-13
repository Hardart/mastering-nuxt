<template>
  <NuxtLayout name="contacts">
    <Section color="primary">
      <h1 class="text-4xl">{{ $route.name }}</h1>
    </Section>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'contacts',
})
</script>

<style></style>
