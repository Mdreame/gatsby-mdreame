import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Tags from "../components/tags"
// import SEO from "../components/seo"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt}></SEO> */}
      <div
        style={{
          margin: `2% 4%`,
        }}
      >
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.starts}</p>

        <Tags>{post.frontmatter.tags}</Tags>

        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        bookauthor
        bookcover
        bookname
        tags
        doubanlink
        starts
        title
        date(fromNow: true)
        classify
      }
      excerpt(format: PLAIN)
      html
    }
  }
`
