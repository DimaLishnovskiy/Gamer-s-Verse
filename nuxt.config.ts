// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "@/assets/main.scss",
    'vuetify/lib/styles/main.sass',
  ],

  build: {
    transpile: ['vuetify'],
  },

  devServer: {
    host: 'localhost',
    port: 3000
  },

  modules: ['vuetify-nuxt-module', '@nuxt/icon', '@nuxt/image'],
});
