import React from "react"
import { graphql } from "gatsby"
import Tags from "../components/tags"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  //将所有标签格式化成一个数组，并去重

  let allTags = []
  data.allMarkdownRemark.edges.map(({ node }) => {
    allTags = allTags.concat(node.frontmatter.tags.split(","))
    return 0
  })

  function unique(arr) {
    return Array.from(new Set(arr))
  }

  allTags = unique(allTags)

  
  const TagsTitle = styled.h2`
    font-weight: 600;
    color: #4e6e6f;
  `

  return (
    <Layout>
      <SEO title="所有标签"></SEO>
        <TagsTitle>All Tags</TagsTitle>
        <Tags>{allTags}</Tags>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
