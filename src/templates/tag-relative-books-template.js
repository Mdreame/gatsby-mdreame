import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import SEO from "../components/seo"

export default ({ data }) => {
  const PagesContainer = styled.ul`
    // display: flex;
    margin: 1rem 0;
    padding: 0;
  `
  const PageItem = styled.li`
    display: inline-block;
    list-style: none;
    background-color: #d8d8d899;
    position: relative;
    margin: 0 24px 0 0;
    padding: 10px;
  `
  const PageMark = styled.span`
    display: block;
    border-radius: 4px 0px 0px 4px;
    bottom: 0px;
    background-color: bisque;
    position: absolute;
    left: -18px;
    top: 0px;
    width: 1.25rem;
    font-size: 0.875rem;
    text-align: center;
    padding: 1rem 0 0 0;
    line-height: 1.2rem;
    color: #db3a00;
  `
  const TagsList = styled.h2`
    font-weight: 600;

    & a {
      color: #4e6e6f;
    }
  `
  const PageTitle = styled.h3`
    font-weight: 300;
    font-size: 1rem;
    margin: 0;
  `
  const Content = styled.p`
    font-size: 0.875rem;
  `
  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt}></SEO> */}
      <TagsList>
        <Link to="/alltags/">See All Tags</Link>
      </TagsList>

      <PagesContainer>
        {data.allMarkdownRemark.nodes.map(node => (
          <PageItem>
            <PageMark>{node.frontmatter.categrory}</PageMark>
            <Link
              to={node.fields.slug}
              key={node.id}
              style={{ border: `none` }}
            >
              <PageTitle>{node.frontmatter.title}</PageTitle>
              <Content style={{ margin: 0 }}>123</Content>
            </Link>
          </PageItem>
        ))}
      </PagesContainer>
    </Layout>
  )
}

export const query = graphql`
  query($regexTag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { regex: $regexTag } } }) {
      nodes {
        frontmatter {
          title
          categrory
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
