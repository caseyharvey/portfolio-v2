module.exports = {
  siteMetadata: {
    title: `caseys.tech`,
    author: `Casey Harvey`,
    siteUrl: `https://caseys.tech`,
    description: `The developer portfolio of Casey Harvey.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `caseys.tech`,
        short_name: `caseys.tech`,
        start_url: `/`,
        background_color: `#3a2435 `,
        theme_color: `#3a2435 `,
        display: `minimal-ui`,
        icon: `src/assets/pink-c-icon.svg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
