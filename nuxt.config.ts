// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['@headlessui/vue']
  },
  modules: [
    'nuxt-typed-router',
    '@nuxt/devtools',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
        }
      }
    ],
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' },
  //   layoutTransition: { name: 'layout', mode: 'out-in' }
  // },
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

  ssr: false,
  // typescript: {
  //   strict: true
  // }
});
