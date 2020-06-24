
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Rohmad Fajarudin' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#ff3022'
  },
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
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** @nuxt/content configuration
  */
  content: {
    //
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const posts = await $content('blog').only(['path']).fetch()
      const snippets = await $content('snippets').only(['path']).fetch()

      let postsArray = posts.map(post => post.path === '/index' ? '/' : post.path)
      let snippetsArray = snippets.map(snippet => snippet.path === '/index' ? '/' : snippet.path)
      
      return [...postsArray, ...snippetsArray]
    }
  }
}
