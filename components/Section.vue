<template>
  <div class="section" :class="Color[color]">
    <div class="max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto lg:px-8">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
enum Color {
  default = 'section-default',
  primary = 'section-primary',
  secondary = 'section-secondary',
  muted = 'section-muted',
}
defineProps<{
  color: 'default' | 'primary' | 'secondary' | 'muted'
}>()
</script>
