const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Lorenzo Faivre - Portfolio`,
    description: `Online portfolio showcasing the works of Lorenzo Faivre. He is a software engineer, freelancer, and co-founder based in Phoenix, Arizona.`,
    author: `@lfaivre`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        defer: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lorenzo Faivre - Portfolio`,
        short_name: `adelerium`,
        description: `Online portfolio showcasing the works of Lorenzo Faivre. He is a software engineer, freelancer, and co-founder based in Phoenix, Arizona.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#1e2223`,
        theme_color: `#fcf0ec`,
        theme_color_in_head: false,
        display: `standalone`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`${__dirname}/src/components/Layout/index.tsx`),
      },
    },
  ],
}
