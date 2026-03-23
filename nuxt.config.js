export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',

  app: {
    head: {
      titleTemplate: '%s - CurtisBelt.dev',
    },
    buildAssetsDir: '/assets/',
  },

  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
})
