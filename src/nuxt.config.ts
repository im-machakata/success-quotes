// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-schema-org',
    'nuxt-appwrite'
  ],
  fonts: {
    defaults: {
      weights: [200, 300, 400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],
    },
    families: [
      { name: 'Nunito' },
    ]
  }
})