export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  pages: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  imports: {
    dirs: ['stores']
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API || 'https://backend-7u6l.onrender.com',
    }
  },
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: process.env.NUXT_PUBLIC_API || 'https://backend-7u6l.onrender.com/api/**'
      }
    }
  },
  app: {
    head: {
      title: 'Swift Shop',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kanit&family=Prompt&display=swap',
        },
      ],
    },
  },
})