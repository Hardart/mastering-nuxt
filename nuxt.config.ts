import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/supabase'],
  app: {
    head: {
      script: ['https://cdnjs.cloudflare.com/ajax/libs/uikit/3.16.19/js/uikit-core.js'],
    },
  },
  alias: {
    data: fileURLToPath(new URL('./server/localData.ts', import.meta.url)),
  },
})
