// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  css: [
    '@/assets/scss/index.scss'
  ],
  components: [
    '~/components',
    {
      path: '~/components/Markdown',
      prefix: 'Md'
    }
  ],
  runtimeConfig: {
    public: {
      apiBase: ''
    }
  },
  ssr: false
});
