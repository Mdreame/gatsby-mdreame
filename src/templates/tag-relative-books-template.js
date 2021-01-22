import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import {Link} from "gatsby"
// import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt}></SEO> */}
      {data.allMarkdownRemark.nodes.map( node => (
        <div>
          <Link to={node.fields.slug}><h2>{node.frontmatter.title}</h2></Link>
          <p>{node.excerpt}</p>
        </div>
     ))}
    </Layout>
  )
}

export const query = graphql`
  query($regexTag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { regex: $regexTag } } }) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`
