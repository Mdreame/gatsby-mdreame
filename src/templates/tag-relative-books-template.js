import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import SEO from "../components/seo"

const PagesContainer = styled.ul`
  // margin: 1rem 0;
  padding: 0;
`
const PageItem = styled.li`
  display: inline-block;
  list-style: none;
  background-color: #d8d8d899;
  position: relative;
  margin: 0.5rem 0.5rem 0 0;
  padding: 0.5rem 0.5rem 0.5rem 1.75rem;
  border-radius: 0.125rem;
  height: 40px;
  overflow: hidden;
  background-color: #ffffff7a;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
    rgba(71, 63, 79, 0.08) 0px 2px 4px;
`
const PageMark = styled.span`
  position: absolute;
  transform: rotate(-90deg) translate(-0.5em, 0px);
  transform-origin: left top;
  height: 1.25rem;
  transform-origin: left top;
  line-height: 1.25rem;
  // background-color: bisque;
  // color: #db3a00;
  left: 0;
  font-size: 0.75rem;
  bottom: calc(-0.75rem - 2px);
  text-align: center;
  width: 2.5rem;
`
const TagsBar = styled.header`
  display: flex;
  justify-content: space-between;
`
const SeeTagsList = styled.h2`
  font-weight: 600;
  color: #4e6e6f;
  & a {
    color: #ea8d5f;
    border:none;
  }
`
const PageTitle = styled.h3`
  font-weight: 300;
  font-size: 1rem;
  position: relative;
  top: -2px;
  margin: 0;
  color: #545858;
`

export default ({ data, pageContext }) => {
  function CheckCategrory(props) {
    switch (props.categrory) {
      case "Essay":
        return (
          <PageMark style={{ color: `#f5f2f0`, backgroundColor: `#FF7260` }}>
            {props.categrory}
          </PageMark>
        )
      case "Tech":
        return (
          <PageMark style={{ color: `#f5f2f0`, backgroundColor: `#505050` }}>
            {props.categrory}
          </PageMark>
        )
      case "Book":
        return (
          <PageMark style={{ color: `#f5f2f0`, backgroundColor: `#6abe83` }}>
            {props.categrory}
          </PageMark>
        )
      case "Movie":
        return (
          <PageMark style={{ color: `#f5f2f0`, backgroundColor: `#4695d6` }}>
            {props.categrory}
          </PageMark>
        )
      case "Music":
        return (
          <PageMark
            style={{ color: `rgb(247 244 244)`, backgroundColor: `#FF9933` }}
          >
            {props.categrory}
          </PageMark>
        )
      default:
        return (
          <PageMark
            style={{ color: `#fff`, backgroundColor: `rgb(162 174 185)` }}
          >
            {props.categrory}
          </PageMark>
        )
    }
  }
  function ShowCurTag(){
    console.log(pageContext.tag)
    return <SeeTagsList># {pageContext.tag}</SeeTagsList>
  }

  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt}></SEO> */}
      <TagsBar>
        <ShowCurTag></ShowCurTag>
        <SeeTagsList>See
          <Link to="/alltags/"> All Tags</Link>
        </SeeTagsList>
      </TagsBar>
      <PagesContainer>
        {data.allMarkdownRemark.nodes.map(node => (
          <PageItem key={node.id}>
            <CheckCategrory
              categrory={node.frontmatter.categrory}
            ></CheckCategrory>
            <Link to={node.fields.slug} style={{ border: `none` }}>
              <PageTitle>{node.frontmatter.title}</PageTitle>
            </Link>
          </PageItem>
        ))}
      </PagesContainer>
    </Layout>
  )
}

export const query = graphql`
  query($regexTag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { regex: $regexTag } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          categrory
          date(formatString: "YY.MM.DD")
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
