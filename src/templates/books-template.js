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
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>
          <img
            src={post.frontmatter.bookcover}
            alt={post.frontmatter.bookcover}
          ></img>
        </p>
        <p>{post.frontmatter.author}</p>
        <p>{post.frontmatter.bookname}</p>
        <p>{post.frontmatter.starts}</p>
        <p>阅读时间：{post.frontmatter.date}</p>
        <p>分类：{post.frontmatter.classify}</p>
        <p>{post.excerpt}</p>

        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <Tags>{post.frontmatter.tags}</Tags>
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
