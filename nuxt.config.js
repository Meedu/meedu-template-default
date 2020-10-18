export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'meedu-template-default',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/scss/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    './plugins/axios.js',
    './plugins/request.js',
    './plugins/api.js',
    './plugins/vue-global.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    // scss全局变量共享
    '@nuxtjs/style-resources',
    // cookie模块，用来记录token
    'cookie-universal-nuxt',
    // notification
    ["vue-toastification/nuxt", { position: 'top-center' }]
  ],

  styleResources: {
    scss: [
      '~/assets/scss/var.scss'
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
