/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `DigiFact`,
    description: `AI deepfake detection platform helps enterprises and governments detect AI-generated content and identity at scale.`,
    author: "Sourav",
    siteUrl: "digifact.tech/",
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `digifact-website`,
        short_name: `DigiFact`,
        start_url: `/`,
        background_color: `#75baff`,
        theme_color: `#75baff`,
        display: `minimal-ui`,
        icon: "./src/assets/images/gatsby-icon.png",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-GNBJBJG8QQ"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
  pathPrefix: "/",
};
