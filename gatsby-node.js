exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      projectDetails: allContentfulProjectDetails {
        nodes {
          id
          slug
        }
      }
    }
  `);

  result.data.projectDetails.nodes.forEach((post) => {
    createPage({
      path: `projects/${post.slug}`,
      component: require.resolve(`./src/templates/ProjectDetails/index.tsx`),
      context: { id: post.id },
    });
  });
};
