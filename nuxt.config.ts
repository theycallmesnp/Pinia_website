// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
  
    '@pinia/nuxt',
  ],

  app:{
    head:{
      link:[{
        rel:"stylesheet" ,href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      },
    {rel:"stylesheet" ,href:"https://fonts.googleapis.com/css?family=Audiowide"}
    ]
    }

  },

  compatibilityDate: "2024-07-10"
})