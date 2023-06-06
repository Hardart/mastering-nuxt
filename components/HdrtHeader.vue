<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open, close }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <MenuToggleButton />
          <div class="flex flex-shrink-0 items-center">
            <img class="h-7 w-auto block" src="/logo.svg" alt="Your Company" />
          </div>
          <MenuMain />
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <MenuNotficationButton />
          <MenuProfile />
        </div>
      </div>
    </div>
    <MenuMobile :isOpen="open" :toClose="close" :navList="navigation" />
  </Disclosure>
</template>

<script setup>
import { Disclosure } from '@headlessui/vue'

const { nav: navigation, setActiveMenuItem } = useAppSettings()
</script>
