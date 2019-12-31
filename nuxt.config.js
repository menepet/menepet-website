
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Petousis Menelaos | Front-End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description ||
        'The Personal Website of Developer Petousis Menelaos. Here you can check the Resume and contact also with this guy!'
      },
      { hid: 'keywords', name: 'keywords', content: 'cv, resume, portfolio, web, developer, development, menepet, front end' },
      { hid: 'author', name: 'author', content: 'Petousis Menelaos' }
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
  css: [],
  /**
   * Global Page Transition
   */
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
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
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-155164825-1'
  },
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
      name: 'Petousis Menelaos | Personal Website',
      short_name: 'Petousis Menelaos | Personal Website',
      background_color: '#f4f4f4',
      theme_color: '#668fab',
      description: 'Petousis Menelaos Front-end Dev Resume site"',
      lang: 'en-US',
      categories: ['cv', 'resume', 'portfolio', 'web', 'developer', 'development', 'menepet', 'front end']
    },
    meta: {
      name: 'Petousis Menelaos | Front-End Developer',
      author: 'Petousis Menelaos',
      description: 'Petousis Menelaos | Front-End Developer Personal site with my resume and ability to contact me!',
      theme_color: '#668fab'
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
