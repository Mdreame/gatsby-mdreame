import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
// import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt}></SEO> */}
      <div
        css={css`
          & p {
            margin-bottom: 0;
            text-align: left;
          }
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <div
          css={css`
            ul,
            ol {
              padding-bottom: 0;
              list-style: none;
              
              a {
                border: none;
                font-size: 0.875rem;
                &:hover {
                  margin-left: 1rem;
                  transition: 0.5s ease;
                }
              }
            }
            &:first-of-type {
              font-size: 0.5rem;
              border: 1px dashed #444;
              &:before {
                content: "目录";
                margin-left: 0.5rem;
              }
            }
          `}
          dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
        ></div>
        <div
          style={{ marginTop: `2rem` }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents(absolute: true)
      frontmatter {
        title
      }
      excerpt
    }
  }
`
