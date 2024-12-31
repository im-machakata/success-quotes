// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-schema-org',
    'nuxt-appwrite',
    '@vite-pwa/nuxt',
    '@nuxt/image'
  ],
  fonts: {
    defaults: {
      weights: [200, 300, 400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],
    },
    families: [
      { name: 'Nunito' },
    ]
  },
  pwa: {
    manifest: {
      name: 'Success Quotes',
      short_name: 'Success Quotes',
      theme_color: '#4f46e5',
    }
  },
  appwrite: {
    endpoint: 'https://cloud.appwrite.io/v1',
    project: '67484957002c26c1c175',
  },
  runtimeConfig: {
    public: {
      database: '67484a96002083a38abd',
      quotesTable: '67484aa300295a26b631',
    }
  }
})