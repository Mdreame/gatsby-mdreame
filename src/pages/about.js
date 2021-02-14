import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default ({ data }) => (
  <Layout>
    <SEO title="我" description="关于我的信息"></SEO>

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
