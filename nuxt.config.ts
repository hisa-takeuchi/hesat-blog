// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
export default defineNuxtConfig({
  modules: [
    'nuxt-microcms-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  runtimeConfig: {
    serverEnv: 'serverValue',
    public: {
      appUrl: 'https://hes-at-blog.netlify.app'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://hes-at-blog.netlify.app'
      },
      meta: [
        { name: 'description', content: "he's at blog" },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: "he's at blog" },
        { property: 'og:image', content: '<ogpに使われる画像の絶対パス>' }
      ]
    }
  },
  microCMS: {
    apiKey: process.env.MICROCMS_API_KEY,
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    target: process.env.NODE_ENV === 'production' ? 'server' : 'all'
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography]
    }
  },
  css: ['@/assets/styles/kantan/css/style.css', '@/assets/styles/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {}
        }
      }
    }
  },
  colorMode: {
    classSuffix: ''
  }
})
