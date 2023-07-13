<template>
  <Section color="default">
    <div class="flex flex-col items-center space-y-12">
      <h1 class="font-black text-5xl tracking-wider">Course Mastering Nuxt 3</h1>
      <div class="shadow-xl dark:shadow-md rounded-md overflow-hidden">
        <img :src="image3" alt="" />
      </div>
      <div>
        <button class="btn btn-primary" type="button" @click="close">Buy course</button>
      </div>
    </div>
  </Section>
  <Section color="muted">
    <div class="flex flex-col items-center">
      <h2 class="font-black tracking-wide text-slate-900 text-3xl mb-16">What you will learn</h2>
      <ul class="space-y-3">
        <li v-for="item in learningOutcomes" class="relative pl-8 flex items-center">
          <CheckIcon />
          {{ item }}
        </li>
      </ul>
    </div>
  </Section>
  <Section color="default">
    <h2 class="font-black tracking-wide text-slate-900 text-3xl mb-16 text-center">Screenshots</h2>
    <Slider :images-list="screenshots" />
  </Section>
  <Section color="secondary">
    <div class="grid grid-cols-4 prose-h4:text-lg prose-h4:tracking-wider">
      <Logo size="h-11" />
      <div class="flex">
        <h4>Address:</h4>
      </div>
      <div class="flex">
        <h4>Phones:</h4>
      </div>
      <div class="flex">
        <h4>Social:</h4>
      </div>
    </div>
  </Section>
  <ModalBuyCourse :is-open="open" :set-is-open="close" />
</template>

<script setup>
useHead({
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.21/js/components/slider.min.js', tagPosition: 'bodyClose', defer: true },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.21/js/components/slider-parallax.min.js', tagPosition: 'bodyClose', defer: true },
  ],
})
import image1 from '~/assets/images/screen1.png'
import image2 from '~/assets/images/screen2.png'
import image3 from '~/assets/images/screen3.png'
import image4 from '~/assets/images/screen4.png'
import image5 from '~/assets/images/screen5.png'
const learningOutcomes = [
  'Hands-On Experience with the Benefits of TypeScript',
  'How to make the most out of your IDE',
  'How to use TypeScript with the Composition API',
  'How to use TypeScript with the Options API',
  'How to type reactive data, refs, props, custom events, event handlers, DOM elements, template refs, data from provide/inject, and more',
]

const screenshots = [image1, image2, image4, image5]
const open = ref(false)
const close = () => (open.value = !open.value)
</script>

<style lang="scss"></style>
