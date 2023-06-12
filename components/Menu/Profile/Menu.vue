<template>
  <transition
    enterActiveClass="transition ease-out duration-100"
    enterFromClass="transform opacity-0 scale-95"
    enterToClass="transform opacity-100 scale-100"
    leaveActiveClass="transition ease-in duration-75"
    leaveFromClass="transform opacity-100 scale-100"
    leaveToClass="transform opacity-0 scale-95"
  >
    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" as="ul">
      <MenuItem v-slot="{ active, close }" as="li">
        <NuxtLink @click="close" to="/profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</NuxtLink>
      </MenuItem>
      <MenuItem v-slot="{ active }" as="li">
        <NuxtLink @click="logout" to="/" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Log out</NuxtLink>
      </MenuItem>
    </MenuItems>
  </transition>
</template>

<script lang="ts" setup>
import { MenuItem, MenuItems } from '@headlessui/vue'
const { logout } = useUserAuth()
</script>

<style lang="scss"></style>
