<template>
  <div class="relative overflow-hidden" tabindex="-1" uk-slider="center: true; autoplay: true">
    <ul class="flex flex-nowrap gap-12 uk-slider-items">
      <li class="w-4/5 flex-none" v-for="image in imagesList">
        <div class="relative">
          <img :src="image" alt="" />
          <div class="bg-black/50 inset-0 absolute"></div>
          <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-50 text-center">
            <h2 uk-slider-parallax="x: 100,-100" class="text-5xl font-bold mb-8">Heading</h2>
            <p uk-slider-parallax="x: 300,-300" class="tracking-wide text-xl">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </li>
    </ul>

    <a
      class="absolute left-5 top-1/2 -translate-y-1/2 uk-icon text-white/25 hover:text-white"
      href="#"
      uk-slidenav-previous
      uk-slider-item="previous"
    ></a>
    <a class="absolute right-5 top-1/2 -translate-y-1/2 uk-icon text-white/25 hover:text-white" href="#" uk-slidenav-next uk-slider-item="next"></a>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.21/js/components/slider.min.js', tagPosition: 'bodyClose', defer: true },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.21/js/components/slider-parallax.min.js', tagPosition: 'bodyClose', defer: true },
  ],
})
defineProps<{
  imagesList: string[]
}>()
</script>

<style>
.uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve) {
  stroke: currentColor;
}
</style>
