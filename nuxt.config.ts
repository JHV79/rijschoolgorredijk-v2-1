import { repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Rijschool Gorredijk',
      htmlAttrs: {
        lang: 'nl',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { hid: 'description', name: 'description', content: 'Rijschool Gorredijk' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'dns-prefetch',
          href: '//fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com/',
          crossorigin: ''
        },
        {
          rel: 'dns-prefetch',
          href: '//images.prismic.io'
        },
        {
          rel: 'preconnect',
          href: 'https://images.prismic.io/',
          crossorigin: ''
        },
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/prismic", '@nuxt/image', 'nuxt-svgo', '@nuxt/fonts'],
  
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'shade-1': '#3392c5',
            'shade-2': '#66AFD1',
            'shade-3': '#99C7DD',
            'shade-4': '#CCEFF0',
          },
          transitionTimingFunction: {
            'bouncy': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Alias for ease-in-out-back
            'smooth-in': 'cubic-bezier(0.12, 0, 0.39, 0)', // Alias for ease-in-sine
            'smooth-out': 'cubic-bezier(0.61, 1, 0.88, 1)', // Alias for ease-out-sine
            'snappy': 'cubic-bezier(0.5, 1, 0.89, 1)', // Alias for ease-out-quad
          },
        },
      },
      content: [
        './app/**/*.vue',
      ],
    },
  },

  prismic: {
    endpoint: repositoryName,
    provider: 'prismic'
  }
})