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
  app: {
    head: {
      title: 'Swift Shop', // หรือชื่อเว็บของคุณ
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
       
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kanit&family=Prompt&display=swap' }
      ],
    },
  },
  // ✅ CORS และอนุญาต Cookie สำหรับ API
  nitro: {
    routeRules: {
      "/api/**": {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5000", // ✅ URL ของ Backend
          "Access-Control-Allow-Credentials": "true", // ✅ อนุญาตส่ง Cookie
        },
      },
    },
  },

  // ✅ กำหนดค่า Backend URL
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:5000", // ✅ Backend URL
    },
    defaults: {
      fetchOptions: {
        credentials: "include", // ✅ เปิดให้ fetch ส่ง cookie ได้
      },
    },
  },
});