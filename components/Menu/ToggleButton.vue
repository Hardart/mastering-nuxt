<template>
  <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <!-- Mobile menu button-->
    <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span class="sr-only">Open main menu</span>
      <Bars3Icon class="block h-6 w-6" aria-hidden="true" />
    </DisclosureButton>
  </div>
</template>

<script setup>
import { DisclosureButton } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'
</script>

<style lang="scss"></style>
