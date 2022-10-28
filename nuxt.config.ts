// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/assets/scss/index.scss'
    ],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    ssr: false
});
