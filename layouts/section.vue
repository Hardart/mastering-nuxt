<template>
  <div class="section" :class="`section-${color ? color : 'default'}`">
    <div class="max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto lg:px-8">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps(['color'])
</script>
