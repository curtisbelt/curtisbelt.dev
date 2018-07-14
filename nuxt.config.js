const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

export default {
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk ? `${titleChunk} - CurtisBelt.dev` : 'CurtisBelt.dev'
  },

  router: {
    trailingSlash: false
  },

  css: ['assets/css/tailwind'],

  plugins: [],

  modules: ['@nuxtjs/axios'],

  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],

  eslint: {
    fix: true
  },

  modern: isProd,

  build: {
    parallel: isDev,
    cache: isDev,
    hardSource: isDev
  }
}
