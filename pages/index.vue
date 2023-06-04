<template>
  <div class="prose p-8">
    <h1 class="mb-2">Index Page</h1>
    <NuxtLink class="no-underline lowercase" :to="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`">Course</NuxtLink>
  </div>
  <div uk-filter="target: .js-filter">
    <ul class="py-4 pr-4 mb-4 flex justify-end gap-3 bg-slate-300 rounded-md">
      <li uk-filter-control="sort: data-sort"><a class="sort-btn" href="#">Asc</a></li>
      <li class="border-r pr-3 border-gray-400" uk-filter-control="sort: data-sort; order: desc"><a class="sort-btn" href="#">Des</a></li>
      <li uk-filter-control="sort: data-price"><a class="sort-btn" href="#">Low</a></li>
      <li uk-filter-control="sort: data-price; order: desc"><a class="sort-btn" href="#">Hight</a></li>
    </ul>
    <div class="">
      <div class="mx-auto max-w-2xl px-4 py-14 sm:px-6 md:py-20 md:max-w-4xl lg:max-w-none lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        <div class="js-filter mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-6">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
  <!-- <li><NuxtLink to="/course" title="Course">Course</NuxtLink></li> -->
</template>

<script setup lang="ts">
const { courseData } = useCourseData()
const title = computed(() => courseData.title)
const chapter = courseData.chapters[0]
const lesson = chapter.lessons[0]

useHead({
  title,
  script: ['https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.19/js/components/filter.min.js'],
})
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$32',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Aspen White',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$25',
    color: 'Charcoal',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$27',
    color: 'Iso Dots',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee.",
    price: '$30',
    color: 'Dots White',
  },
  // More products...
]
</script>

<style>
.sort-btn {
  @apply bg-slate-500 px-4 py-1 rounded text-gray-50 hover:bg-slate-600;
}
</style>
