import Sass from 'sass'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr   : true,

  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title    : 'geckou',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#288e6e' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel  : 'apple-touch-icon',
        sizes: '180x180',
        href : '/apple-touch-icon.min.png',
      },
    ],
    base: { href: '/' },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ress/dist/ress.min.css',
    'locomotive-scroll/dist/locomotive-scroll.min.css',
    '~/assets/scss/base.scss',
    '~/assets/scss/nuxt-content.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/inview.js',
      ssr: false,
    },
    {
      src : '@/plugins/locomotiveScroll.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    // '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    // '@nuxt/content',
    'nuxt-svg-loader',
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo     : true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass,
      },
    },
  },

  optimizedImages: {
    optimizeImages: true,
  },
}
