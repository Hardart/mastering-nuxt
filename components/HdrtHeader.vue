<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open, close }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <MenuToggleButton />
          <Logo />
          <MenuMain />
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- <UiLoading class="h-4 w-4" v-if="user" /> -->
          <MenuNotficationButton v-if="user" />
          <MenuProfile v-if="user" />
          <NuxtLink to="/login" v-if="!user" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" active-class="bg-gray-900 text-white">Login</NuxtLink>
        </div>
      </div>
    </div>
    <MenuMobile :isOpen="open" :toClose="close" :navList="navigation" />
  </Disclosure>
</template>

<script setup>
import { Disclosure } from '@headlessui/vue'

const { nav: navigation } = useAppSettings()

const user = useSupabaseUser()
</script>
