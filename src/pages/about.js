import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
export default ({ data }) => (
  <Layout>
    {/* <h1>{data.site.siteMetadata.title}:About Me.</h1> */}
    <p>一个在现实中无处安身的人。</p>
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
