// 读书主页
import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import GridBox from "../components/gridbox"
import Bookscover from "../components/partical/bookitem"
import TotalBar from "../components/partical/totalbar"
import SEO from "../components/seo"
// import Test from "./test"

export default ({ data }) => {
  const postReviews = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="書" description="阅读塑造人生"></SEO>
      <TotalBar>Readed：{postReviews.totalCount}</TotalBar>
      <GridBox>
        {postReviews.edges.map(({ node }) => (
          <Bookscover
            key={node.id}
            to={node.fields.slug}
            img={node.frontmatter.bookcover}
            alt={node.frontmatter.title}
            title={node.frontmatter.title}
            bookName={node.frontmatter.bookname}
            bookAuthor={node.frontmatter.bookauthor}
            doubanlink={node.frontmatter.doubanlink}
            wereadlink={node.frontmatter.wereadlink}
            starts={node.frontmatter.starts}
            classify={node.frontmatter.classify}
            comment={node.frontmatter.comment}
          ></Bookscover>
        ))}
      </GridBox>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { categrory: { eq: "Book" } } }
    ) {
      edges {
        node {
          id
          excerpt(format: PLAIN)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            categrory
            bookauthor
            bookcover
            bookname
            classify
            comment
          }
          fields {
            slug
          }
          timeToRead
        }
      }
      totalCount
    }
  }
`
