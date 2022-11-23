export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3005, // default: 3005
    host: 'localhost', // default: localhost
  },
  ssr: false,
  head: {
    title: 'Hokim qabuli',
    htmlAttrs: {
      lang: 'uz',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/style/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vClickOutside', ssr: false },
    {
      src: '~/plugins/vuelidate', ssr: false ,
    },
    {
      src: '@/plugins/vmask',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module'],
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            file: 'ru.js',
          },
          {
            code: 'uz',
            file: 'uz.js',
          },
          {
            code: 'en',
            file: 'en.js',
          },
        ],
        strategy: 'prefix_and_default',
        defaultLocale: 'uz',
        detectBrowserLanguage: false,
        lazy: true,
        vueI18nLoader: true,
        langDir: 'languages/',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com/',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
