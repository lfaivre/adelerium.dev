const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Lorenzo Faivre - Portfolio`,
    description: `Online portfolio showcasing the works of Lorenzo Faivre. He is a software engineer, freelancer, and co-founder based in Phoenix, Arizona.`,
    author: `@lfaivre`,
  },
  plugins: [
    // @note (first) gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,
    // @note (first) gatsby-plugin-google-analytics
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
    // @note (after gatsby-plugin-manifest) gatsby-plugin-offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    // {
    //   resolve: `gatsby-plugin-transition-link`,
    //   options: {
    //     layout: require.resolve(`${__dirname}/src/components/Layout/index.tsx`),
    //   },
    // },
  ],
};
