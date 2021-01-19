import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}:About Me.</h1>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
