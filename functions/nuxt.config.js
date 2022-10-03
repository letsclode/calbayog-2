module.exports = {
  // Target: https://go.nuxtjs.dev/config-target

  generate: {
    fallback: true
  },
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'calbayogcity',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'images/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/src/plugins/vue-js-modal.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [ 
      '@nuxtjs/firebase',
      {
        config: {
        apiKey: "AIzaSyCxPQsIHiBKejVabJHVoj8zG0x7bn4yJ08",
        authDomain: "calbayogapp.firebaseapp.com",
        projectId: "calbayogapp",
        storageBucket: "calbayogapp.appspot.com",
        messagingSenderId: "1097254884850",
        appId: "1:1097254884850:web:acffbf362713263d56c76b",
        measurementId: "G-S5SLJR6CEM"
        },
        services: {
          firestore: true ,// Just as example. Can be any other service.
          hosting: true,
          storage: true
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  pageTransition: {
    name: 'my-page',
    mode: 'out-in'
},



}
