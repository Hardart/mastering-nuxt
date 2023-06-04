<template>
  <div class="group relative bg-white shadow hover:shadow-xl transition-shadow duration-300 rounded-lg" :data-sort="product.color" :data-price="product.price">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div class="flex justify-between p-4">
      <div>
        <h3 class="text-sm text-gray-700 font-bold">
          <a :href="product.href">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.name }}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
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
}
defineProps<{
  product: Product
}>()
</script>

<style lang="scss"></style>
