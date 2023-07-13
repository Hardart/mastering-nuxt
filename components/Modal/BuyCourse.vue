<template>
  <!-- Wrap your dialog in a `TransitionRoot`. -->
  <TransitionRoot :show="isOpen" as="template">
    <Dialog @close="setIsOpen">
      <!-- Wrap your backdrop in a `TransitionChild`. -->
      <TransitionChild
        class="fixed inset-0 backdrop-blur-sm backdrop-brightness-75"
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
      </TransitionChild>

      <!-- Wrap your panel in a `TransitionChild`. -->
      <TransitionChild
        class="fixed inset-0 grid place-items-center"
        enter="duration-500 ease-out"
        enter-from="opacity-0 scale-150"
        enter-to="opacity-100 scale-100"
        leave="duration-300 ease-in-out"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-125"
      >
        <DialogPanel class="card p-7">
          <DialogTitle>Deactivate account</DialogTitle>
          <button class="btn btn-primary mt-8 w-full">Click to buy</button>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

defineProps<{
  isOpen: boolean
  setIsOpen: any
}>()
</script>
