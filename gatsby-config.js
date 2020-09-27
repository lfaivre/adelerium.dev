// @note Set Environment Variables (via dotenv)

const ACTIVE_ENV = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`;
require('dotenv').config({ path: `.env.${ACTIVE_ENV}` });

// @note Use Netlify Environment to Set Configuration

const {
  URL: NETLIFY_SITE_URL = `https://www.adelerium.dev`,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = ACTIVE_ENV,
} = process.env;

(() => {
  if (!NETLIFY_SITE_URL || !NETLIFY_DEPLOY_URL || !NETLIFY_ENV) {
    throw new Error(`Invalid Configuration: Netlify`);
  }
})();

const siteUrl = NETLIFY_ENV === `production` ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

// @note Set Google Analytics Tracking ID

const { GA_TRACKING_ID } = process.env;

(() => {
  if (!GA_TRACKING_ID) {
    throw new Error(`Invalid Configuration: Google Analytics`);
  }
})();

// @note Define and Extract Contentful Configuration

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_HOST,
  CONTENTFUL_ENVIRONMENT,
} = process.env;

(() => {
  if (
    !CONTENTFUL_SPACE_ID ||
    !CONTENTFUL_ACCESS_TOKEN ||
    !CONTENTFUL_HOST ||
    !CONTENTFUL_ENVIRONMENT
  ) {
    throw new Error(`Invalid Configuration: Contentful`);
  }
})();

const CONTENTFUL_CONFIGURATION = {
  spaceId: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  host: CONTENTFUL_HOST,
  environment: CONTENTFUL_ENVIRONMENT,
};

// @note Define and Extract Website and PWA Metadata

const WEBSITE_METADATA = {
  title: `Lorenzo Faivre - Software Engineer & Artist`,
  description: `Portfolio showcasing the works of Lorenzo Faivre. He is a software engineer, artist, freelancer, and cofounder based in Phoenix, Arizona.`,
  author: `@lorenzofaivre`,
};

const PWA_METADATA = {
  short_name: `adelerium`,
  lang: `en`,
  background_color: `#1e2223`,
  theme_color: `#fcf0ec`,
};

const { title, description, author } = WEBSITE_METADATA;
const { short_name, lang, background_color, theme_color } = PWA_METADATA;

module.exports = {
  siteMetadata: {
    title,
    description,
    author,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GA_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
        defer: false,
        allowAdFeatures: false,
        forceSSL: true,
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
        short_name,
        description,
        lang,
        start_url: `/`,
        background_color,
        theme_color,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: `none`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: `*` }],
            sitemap: `${siteUrl}/sitemap.xml`,
            host: siteUrl,
          },
          'branch-deploy': {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    // @note (after gatsby-plugin-manifest) gatsby-plugin-offline
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //       globPatterns: [`**/icon*`],
    //     },
    //   },
    // },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-contentful`,
      options: CONTENTFUL_CONFIGURATION,
    },
    `gatsby-plugin-netlify`,
  ],
};
