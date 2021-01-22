index.js:83


gatsby-node.js:18-45
exports.createPages = async ({ graphql, actions }) => {
const { createPage } = actions
const result = await graphql(` query { allMarkdownRemark { edges { node { fields { slug } } } } } `)
console.log(result)
result.data.allMarkdownRemark.edges.forEach(({ node }) => {
createPage({
path: node.fields.slug,
component: path.resolve(`./src/templates/blog-template.js`),
context: {
slug: node.fields.slug,
},
})
})

}
