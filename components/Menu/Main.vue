<template>
  <div class="hidden sm:ml-6 sm:block">
    <div class="flex space-x-4">
      <NuxtLink
        v-for="item in navList"
        :key="item.name"
        :to="item.href"
        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        active-class="bg-gray-900 text-white"
        :aria-current="item.current ? 'page' : undefined"
        :data-id="item.id"
        @click="setActiveMenuItem(item.id)"
        >{{ item.name }}</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const { nav: navList, setActiveMenuItem } = useAppSettings()
</script>

<style lang="scss"></style>
