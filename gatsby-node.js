// @docs https://www.gatsbyjs.com/docs/api-files-gatsby-node/

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

// @todo Use chalk to print a more visual message
console.log(`USING ENVIRONMENT: ${activeEnv.toUpperCase()}`);

require('dotenv').config({ path: `.env.${activeEnv}` });
