module.exports = {
  siteMetadata: {
    title: `t3hmun`,
    description: `This will evetually be a blog and some experiments.`,
    author: `t3hmun`,
    themeAccent: `#F5A962`,
    buildDate: new Date().toISOString(),
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
        name: `t3hmun`,
        short_name: `t3hmun`,
        start_url: `/`,
        background_color: `#2C2C32`,
        theme_color: `#F5A962`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
