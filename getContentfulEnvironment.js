// @note Set Environment Variables (via dotenv)

const ACTIVE_ENV = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`;
require('dotenv').config({ path: `.env.${ACTIVE_ENV}` });

// @note Define and Extract Contentful Configuration

const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN, CONTENTFUL_ENVIRONMENT } = process.env;

(() => {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_MANAGEMENT_TOKEN || !CONTENTFUL_ENVIRONMENT) {
    throw new Error(`Invalid Configuration: Contentful`);
  }
})();

const CONTENTFUL_CONFIGURATION = {
  spaceId: CONTENTFUL_SPACE_ID,
  managementToken: CONTENTFUL_MANAGEMENT_TOKEN,
  environment: CONTENTFUL_ENVIRONMENT,
};

const { spaceId, managementToken: accessToken, environment } = CONTENTFUL_CONFIGURATION;
const contentfulManagement = require('contentful-management');

module.exports = async () => {
  const contentfulClient = contentfulManagement.createClient({ accessToken });
  return contentfulClient.getSpace(spaceId).then((space) => space.getEnvironment(environment));
};
