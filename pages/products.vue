<template>
  <NuxtLayout>
    <Section color="secondary">
      <div class="prose py-8 prose-h1:dark:text-slate-300">
        <h1 class="mb-2">Index Page</h1>
        <NuxtLink class="no-underline lowercase text-blue-500" :to="firstLesson.path">Course page</NuxtLink>
      </div>
      <div uk-filter="target: .js-filter">
        <Filter />
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">Customers also purchased</h2>
          <div class="js-filter mt-6 grid grid-cols-1 gap-x-4 gap-y-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
          </div>
        </div>
      </div>
    </Section>
  </NuxtLayout>
  <!-- <li><NuxtLink to="/course" title="Course">Course</NuxtLink></li> -->
</template>

<script setup lang="ts">
const { course, products, firstLesson } = await useCourseData()
const title = computed(() => course.value.title)

useHead({
  title,
  script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.19/js/components/filter.min.js', tagPosition: 'bodyClose', defer: true }],
})
</script>
