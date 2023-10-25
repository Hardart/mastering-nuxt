import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/supabase', '@pinia/nuxt', 'nuxt-icon'],
  app: {
    head: {
      script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.17.5/js/uikit-core.min.js', tagPriority: 'critical' }],
    },
  },
  alias: {
    data: fileURLToPath(new URL('./server/localData.ts', import.meta.url)),
  },
  pinia: {
    autoImports: ['defineStore'],
  },
})
