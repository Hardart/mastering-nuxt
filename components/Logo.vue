<template>
  <div class="flex flex-shrink-0 items-center">
    <img :class="Logo[size]" class="w-auto block" src="/logo.svg" alt="Your Company" />
  </div>
</template>

<script setup lang="ts">
enum Logo {
  xs = 'h-7',
  sm = 'h-8',
  md = 'h-9',
  lg = 'h-10',
  xl = 'h-11',
  xxl = 'h-12',
}
withDefaults(
  defineProps<{
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  }>(),
  {
    size: 'xs',
  }
)
</script>
