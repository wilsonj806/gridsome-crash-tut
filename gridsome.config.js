// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      // again similar to Webpack loader configs
      use: '@gridsome/vue-remark',
      options: {
        // GraphQL type name
        typeName: 'Posts',
        // where to find your MD files
        baseDir: './posts',

        // URL to navigate to
        pathPrefix: '/posts',

        // Vue template location
        template: './src/templates/Post.vue'
      }
    }
  ]
}
