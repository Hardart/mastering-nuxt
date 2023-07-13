<template>
  <span class="-left-0 text-sm w-6 h-6 text-white rounded-full inline-flex absolute items-center justify-center mr-4" :class="`${color}`">
    <slot>&#10003;</slot>
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string
  }>(),
  {
    // Must be complete Tailwind classes otherwise they will
    // not be included in build
    color: 'bg-emerald-700',
  }
)
</script>
