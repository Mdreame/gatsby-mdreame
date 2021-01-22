import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import SEO from "../components/seo"

// const tagName = this.state.url
// const tagName = ""

export default ({ data }) => {
//   const post = data.allMarkdownRemark

  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt}></SEO> */}
      <div
        style={{
          margin: `2% 4%`,
        }}
      >
        {/* <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div> */}
        123
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { regex: $slug } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          html
        }
      }
    }
  }
`
