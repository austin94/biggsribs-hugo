const cssImport = require('postcss-import')
const cssnext = require('postcss-cssnext')

module.exports = {
  siteMetadata: {
    title: `Biggs BBQ`,
    description: `Bigg’s barbecue is unique. Unlike traditional Kansas City-style barbecue, all the meat — brisket, pork, chicken and sausage — is served with light sauce to accentuate the hickory-smoked flavor of the meat and Bigg’s special dry rubs. Our three famous sauces are served on the side.`,
    author: `@Biggsbbq`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [cssImport({ from: './src/css/main.css' }), cssnext()],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
