module.exports = {
  client: {
    includes: [
      `src/**/*.ts`,
      `src/**/*.tsx`,
      `node_modules/gatsby-transformer-sharp/src/fragments.js`,
      `node_modules/gatsby-source-contentful/src/fragments.js`,
    ],
    excludes: [`src/templates/**/*.ts`, `src/templates/**/*.tsx`],
    tagName: `graphql`,
  },
};
