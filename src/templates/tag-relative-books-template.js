import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import SEO from "../components/seo"

export default ({ data }) => {
  const RelatedPages = styled.div`
    width: 75%;
    background-color: #aaa;
  `
  const TagsList = styled.div`
    width: 20%;
    float: right;
  `
  // console.log()
  // let a = `/tags/hi`
  // let pattern = /\/tags\/(*)/
  // console.log(pattern.exec(a))
  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt}></SEO> */}
      {data.allMarkdownRemark.nodes.map(node => (
        <RelatedPages key={node.id}>
          <Link to={node.fields.slug}>
            <h1>{console.log(node.fields.slug)}</h1>
            <h2>{node.frontmatter.title}</h2>
          </Link>
        </RelatedPages>
      ))}
      <TagsList>
        <Link to="/alltags/">See All Tags</Link>
      </TagsList>
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
        id
      }
    }
  }
`
