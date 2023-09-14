// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
export default defineNuxtConfig({
  modules: ['nuxt-microcms-module', '@nuxtjs/tailwindcss'],
  microCMS: {
    apiKey: process.env.MICROCMS_API_KEY,
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    target: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
  css: [
    "@/assets/styles/kantan/css/style.css",
    "@/assets/styles/tailwind.css"
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  },
})
