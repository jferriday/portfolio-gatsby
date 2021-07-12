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
    console.log(JSON.stringify(result,null,4))

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