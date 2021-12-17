require("dotenv").config({
  path: `.env`,
});
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: `Jorge Soto: Fullstack Web Developer`,
    description: `Welcome to my portfolio! Come on in and stay awhile.`,
    author: `@JorgeSoto`,
    siteUrl: `https://jorgesotocoder.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rajdhani`,
          `Roboto\:300` // you can also specify font weights and styles
        ],
        display: 'swap'
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
          accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
          host: process.env.GATSBY_CONTENTFUL_HOST,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ]
}

