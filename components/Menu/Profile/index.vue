<template>
  <!-- Profile dropdown -->
  <Menu as="div" class="relative ml-3">
    <MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <span class="sr-only">Open user menu</span>
      <img class="h-8 w-8 rounded-full" :src="avatar" alt="" />
    </MenuButton>

    <MenuProfileMenu />
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton } from '@headlessui/vue'
const { avatar, name } = useUserData()
</script>

<style lang="scss"></style>
