module.exports = {
  client: {
    includes: [`./src/graphql/queries/**/*.ts`, `./src/graphql/queries/**/*.tsx`],
    // includes: [`./src/**/*.ts`, `./src/**/*.tsx`],
    tagName: `graphql`,
    // addTypename: true,
    service: {
      name: `Gatsby`,
      url: `http://localhost:8000/___graphql`,
    },
  },
};
