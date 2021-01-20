// 读书主页
import React from "react"
import Layout from "../components/layout"
import GridBox from "../components/gridbox"
import Bookscover from "../components/partical/bookitem"

export default ({ data }) => {
  const postReviews = data.allMarkdownRemark
  console.log(postReviews)

  return (
    <Layout>
      已写书评：{postReviews.totalCount}篇
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
      sort: { fields: frontmatter___date, order: DESC }
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
