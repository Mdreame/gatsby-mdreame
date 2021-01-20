import React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
// import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.allMarkdownRemark
  console.log(post)

  return (
    123
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { categrory: { eq: "bookreviews" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          timeToRead
          frontmatter {
            categrory
            date(fromNow: true)
            tags
            title
            bookcover
          }
          id
        }
      }
      totalCount
    }
  }
`
