<template>
  <div class="group card" :data-sort="product.color" :data-price="product.price" :data-color="product.filter.color">
    <div class="card-media">
      <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div class="flex justify-between p-4">
      <div>
        <h3 class="text-sm text-gray-700 dark:text-gray-200 font-bold">
          <a :href="product.href">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.name }}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ product.color }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900 dark:text-gray-50">{{ product.price }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Product = {
  id: number
  price: string
  name: string
  color: string
  imageSrc: string
  imageAlt: string
  href: string
  filter: {
    color: string
  }
}
defineProps<{
  product: Product
}>()
</script>

<style lang="scss"></style>
