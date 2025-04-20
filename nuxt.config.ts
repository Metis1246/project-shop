export default defineNuxtConfig(<any>{
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
  router: {
    middleware: ['auth']
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
    }
  },
  proxy: {
    '/api': {
      target: process.env.API_BASE_URL || 'http://localhost:3000',
      pathRewrite: { '^/api': '/api' }
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
});
