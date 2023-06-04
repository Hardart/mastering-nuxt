// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  app: {
    head: {
      script: ['https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.19/js/uikit-core.js'],
    },
  },
})