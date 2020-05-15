module.exports = {
  server: { host: '0.0.0.0' },
  dev: process.env.NODE_ENV !== 'production',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Pascal Matthiesen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
      {
        name: 'msapplication-TileColor',
        content: '#2b5797'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f38a8a' },
  /*
   ** Global CSS
   */
  css: ['@/assets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
