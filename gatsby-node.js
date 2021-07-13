const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        allStrapiProjects {
            edges {
              node {
                project
              }
            }
          }
    }
    `)

    result.data.allStrapiProjects.edges.forEach(({node}) => {
        createPage({
            path: `projects/${node.project}`,
            component: path.resolve(`./src/templates/projectPage.js`),
            context: {
                slug: node.project
            }
        })
    })
}