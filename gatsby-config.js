// @docs https://www.gatsbyjs.com/docs/api-files-gatsby-config/

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

// @todo Use chalk to print a more visual message
console.log(`USING ENVIRONMENT: ${activeEnv.toUpperCase()}`);

require('dotenv').config({ path: `.env.${activeEnv}` });

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
};

if (activeEnv === 'development') {
  console.log(`\nCONTENTFUL CONFIG: ${JSON.stringify(contentfulConfig, null, 2)}`);
}

const { spaceId, accessToken, host, environment } = contentfulConfig;

if (!spaceId || !accessToken || !host || !environment) {
  throw new Error('Contentful Space ID, Access Token, Host, and Environment need to be provided.');
}

const title = `Lorenzo Faivre - Portfolio`;
const description = `Online portfolio showcasing the works of Lorenzo Faivre. He is a software engineer, freelancer, and co-founder based in Phoenix, Arizona.`;
const siteUrl = process.env.URL || process.env.DEPLOY_URL || `https://www.adelerium.dev`;

module.exports = {
  siteMetadata: {
    title,
    description,
    author: `@lorenzofaivre`,
    siteUrl,
  },
  plugins: [
    // @note (top) gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,
    // @note (top) gatsby-plugin-google-analytics
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
        name: title,
        short_name: `adelerium`,
        description,
        lang: `en`,
        start_url: `/`,
        background_color: `#1e2223`,
        theme_color: `#fcf0ec`,
        theme_color_in_head: true,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: `query`,
        crossOrigin: `use-credentials`,
      },
    },
    // @note (after gatsby-plugin-manifest) gatsby-plugin-offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
  ],
};
