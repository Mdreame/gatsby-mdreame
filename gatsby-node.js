const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

// 每当创建新节点（或更新）时，Gatsby 都会调用 onCreateNode 函数。
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// 创建页面
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //查询电影

  const movieResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { categrory: { eq: "Movie" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //查询音乐
  const musicResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { categrory: { eq: "Music" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //查询随笔
  const essayResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { categrory: { eq: "Essay" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //查询所有博客路径
  const blogResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { categrory: { eq: "Tech" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // 查询所有书评路径
  const booksResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { categrory: { eq: "Book" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //专辑页
  const albumnsResult = await graphql(`
    query  {
      allMongodbMusicAlbumn {
        edges {
          node {
            name
            artist
            cover
          }
        }
      }
    }
  `)

  //查询所有标签相关的内容页面
  const allTagsResult = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
  //将所有标签格式化成一个数组，并去重
  let allTags = []
  allTagsResult.data.allMarkdownRemark.edges.map(({ node }) => {
    allTags = allTags.concat(node.frontmatter.tags.split(","))
  })

  function unique(arr) {
    return Array.from(new Set(arr))
  }

  allTags = unique(allTags)

  // 生成博客页面
  blogResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  // 生成书评页面
  booksResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/books-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  //生成标签相关的所有的内容的页面
  allTags.forEach(tag => {
    let regexTag = `/${tag}/`
    createPage({
      path: `/tags/${tag}`,
      component: path.resolve("./src/templates/tag-relative-books-template.js"),
      context: {
        regexTag,
        tag,
      },
    })
  })
  //生成电影内容页
  movieResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/movie-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  //音评页
  musicResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/music-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  //专辑页面

  let pre = "",next = ""

  albumnsResult.data.allMongodbMusicAlbumn.edges.forEach(({node},index) => {
    pre = albumnsResult.data.allMongodbMusicAlbumn.edges[index - 1]
    next = albumnsResult.data.allMongodbMusicAlbumn.edges[index + 1]
    createPage({
      path: `/albumn/${node.name}`,
      component: path.resolve(`./src/templates/music-albumn.js`),
      context:{
        name: node.name,
        pre,
        next,
      }
    })

  })
  //随笔页
  essayResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/essay-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
