// @docs https://github.com/intercom/contentful-typescript-codegen

const contentfulManagement = require('contentful-management');

const activeEnv = process.env.NODE_ENV || 'development';
// @todo Use chalk to print a more visual message
console.log(`USING ENVIRONMENT: ${activeEnv.toUpperCase()}`);

require('dotenv').config({ path: `.env.${activeEnv}` });

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
};

if (activeEnv === 'development') {
  console.log(
    `\nCONTENTFUL CONFIG: ${JSON.stringify(contentfulConfig, null, 2)}`
  );
}

const { spaceId, managementToken, environment } = contentfulConfig;

if (!spaceId || !managementToken || !environment) {
  throw new Error(
    'Contentful Space ID, Management Token, and Environment need to be provided.'
  );
}

module.exports = async () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: managementToken,
  });
  return contentfulClient
    .getSpace(spaceId)
    .then((space) => space.getEnvironment(environment));
};
