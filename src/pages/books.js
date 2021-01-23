// 读书主页
import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import GridBox from "../components/gridbox"
import Bookscover from "../components/partical/bookitem"
import TotalBar from "../components/partical/totalbar"

export default ({ data }) => {
  const postReviews = data.allMarkdownRemark

  return (
    <Layout>
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

        {/* <Bookscover></Bookscover>
      <Bookscover></Bookscover>
      <Bookscover></Bookscover>
      <Bookscover></Bookscover>
      <Bookscover></Bookscover>
      <Bookscover></Bookscover>
      <Bookscover></Bookscover>
      <Bookscover></Bookscover>
      <Bookscover></Bookscover> */}
      </GridBox>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { categrory: { eq: "bookreviews" } } }
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
            doubanlink
            wereadlink
            starts
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
