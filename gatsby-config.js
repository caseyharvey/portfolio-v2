module.exports = {
  siteMetadata: {
    title: `caseys.tech`,
    author: `Casey Harvey`,
    url: `https://www.caseys.tech`,
    description: `The developer portfolio of Casey Harvey.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-manifest`,
    `gatsby-plugin-sharp`,
  ],
}
