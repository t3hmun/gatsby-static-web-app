module.exports = {
  siteMetadata: {
    title: `Gatsby t3hmun Starter`,
    description: `Me moding the gastby starter.`,
    author: `t3hmun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // More plugins for image processing
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // PWA manifest plugin.
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-t3hmun-default`,
        short_name: `t3hmun`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
