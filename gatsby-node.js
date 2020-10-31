exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      projects: allContentfulProject {
        nodes {
          id
          slug
        }
      }
    }
  `);

  result.data.projects.nodes.forEach((project) => {
    createPage({
      path: `projects/${project.slug}`,
      component: require.resolve(`./src/templates/ProjectDetails/index.tsx`),
      context: { id: project.id },
    });
  });
};
