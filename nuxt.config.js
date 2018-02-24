module.exports = {
  modules: [
    '@nuxtjs/markdownit'
    // '@nuxtjs/font-awesome'
    // 'bootstrap-vue/nuxt'
    // Or if you have custom bootstrap CSS...
    // ['bootstrap-vue/nuxt', { css: false }]
  ],
  plugins: ['~plugins/filters.js'],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-container',
      'markdown-it-attrs',
      'markdown-it-checkbox',
      'markdown-it-meta'
    ]
  },
  generate: {
    routes: function () {
      return require('fs').readdirSync('content/catalog').map(function (file) {
        return '/catalog/' + require('slugify')(file.replace(/\.md$/, ''), {lower: true})
      })
    }
  },
  // TODO: Разобраться как вынести css в отдельный файл https://nuxtjs.org/examples/global-css/
  css: [
    '~/css/style.css'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Цветы на окне',
    titleTemplate: '%s - Комнатные цветы',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Комнатные цветы и растения, которые можно вырастить в домашних условиях' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i', type: 'text/css' },
      // ? { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i', type: 'text/css' },
      { rel: 'stylesheet', href: '/fonts/raleway/stylesheet.css', type: 'text/css' },
      { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css', type: 'text/css' },
      { rel: 'stylesheet', href: '/css/business-casual.min.css', type: 'text/css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
