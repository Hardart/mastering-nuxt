<template>
  <TransitionRoot :show="isOpen" as="template">
    <div>
      <Dialog class="relative z-50" @close="toClose">
        <!-- Wrap your backdrop in a `TransitionChild`. -->
        <TransitionChild
          class="fixed inset-0 bg-neutral-950/90"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
        </TransitionChild>

        <!-- Wrap your panel in a `TransitionChild`. -->
        <TransitionChild
          class="flex fixed inset-0"
          enter="transition ease-out duration-200"
          enter-from="transform -translate-x-full"
          enter-to="transform translate-x-0"
          leave="transition ease-in duration-150"
          leave-from="transform translate-x-0"
          leave-to="transform -translate-x-full"
        >
          <DialogPanel class="relative flex flex-1 w-full max-w-xs mr-16">
            <div class="absolute left-full top-0 flex justify-center w-16 pt-4">
              <button type="button" class="rounded-full p-1 text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-800" @click="toClose">
                <span class="sr-only">View notifications</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="flex flex-grow bg-slate-800 p-4 pt-12">
              <nav class="flex flex-col flex-grow">
                <ul class="flex flex-col flex-1 gap-y-4">
                  <li v-for="item in navList" :key="item.name">
                    <NuxtLink
                      :to="item.href"
                      class="flex text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      active-class="bg-gray-900 text-white"
                      :aria-current="item.current ? 'page' : undefined"
                      :data-id="item.id"
                      @click="setActiveMenuItem(item.id, toClose)"
                    >
                      {{ item.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </div>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
const { nav: navList, setActiveMenuItem } = useAppSettings()

defineProps<{
  isOpen: boolean
  toClose: any
}>()
</script>

<style lang="scss"></style>
