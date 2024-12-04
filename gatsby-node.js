const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const { relativePath } = getNode(node.parent);
    const slug = relativePath.replace(/\.md$/, ""); // Remove file extension

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const template = path.resolve("src/templates/markdownTemplate.js");

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
