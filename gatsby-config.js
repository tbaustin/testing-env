require('envdotjs').load()

const plugins = ['gatsby-plugin-react-helmet', 'gatsby-plugin-styled-jsx']
if (process.env.SALSIFY_API_KEY) {
  plugins.push({
    resolve: 'gatsby-source-salsify',
    options: {
      ids: ['T8591B', 'T8591W'],
      apiKey: process.env.SALSIFY_API_KEY,
      types: {
        webImages: 'array',
      },
      media: ['webImages', 'mainImage'],
    },
  })
}
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: plugins,
}
