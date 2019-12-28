
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#668fab' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  /**
   * Sass file import
   */
  styleResources: {
    scss: [
      'assets/styles/main.scss'
    ]
  },
  pwa: {
    manifest: {
      name: 'Menelaos Petousis Web',
      short_name: 'menepet web',
      background_color: '#f4f4f4',
      theme_color: '#f4f4f4',
      description: 'My Personal Resume Website"',
      lang: 'en-US',
      categories: ['cv', 'resume', 'portfolio', 'web', 'developer', 'development', 'menepet']
    },
    meta: {
      name: 'Petousis Menelaos',
      author: 'Petousis Menelaos',
      description: 'My Personal Resume Website"',
      theme_color: '#f4f4f4'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
