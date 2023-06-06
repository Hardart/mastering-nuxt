<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" as="ul">
      <MenuItem v-slot="{ active, close }" as="li">
        <NuxtLink @click="close" to="/profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</NuxtLink>
      </MenuItem>
      <MenuItem v-slot="{ active, close }" as="li">
        <NuxtLink @click="close" to="/" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Log out</NuxtLink>
      </MenuItem>
    </MenuItems>
  </transition>
</template>

<script setup>
import { MenuItem, MenuItems } from '@headlessui/vue'
</script>

<style lang="scss"></style>
