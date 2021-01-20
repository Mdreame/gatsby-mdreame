import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <main
        style={{
          margin: `1rem auto`,
          minHeight: `600px`,
          padding: `0.5em`,
          maxWidth: `800px`,
        }}
      >
        <p
          style={{
            margin: `0.5em 0`,
            padding: `0 0 0.2em`,
            borderBottom: `1px solid #222`,
          }}
        >
          Posts: {data.allMarkdownRemark.totalCount}
        </p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            key={node.id}
            style={{
              marginBottom: `0.8em`,
              overflow: `auto`,
            }}
          >
            <Link to={node.fields.slug}>
              <h3
                style={{
                  display: "flex",
                  justifyContent: `space-between`,
                  alignItems: `center`,
                  marginTop: 0,
                }}
              >
                {node.frontmatter.title}
                <span
                  style={{
                    color: `#aaa`,
                    fontSize: `0.8em`,
                  }}
                >
                  {node.frontmatter.date}
                </span>
              </h3>
            </Link>
            <p
              style={{
                margin: `0.2em 0`,
                fontSize: `1rem`,
                color: `#555`,
              }}
            >
              {node.excerpt}
              <span
                style={{
                  float: `right`,
                  color: `#666`,
                }}
              >
                {node.timeToRead}分钟读完
              </span>
            </p>
            {/* <p>{node.excerpt}</p> */}
          </div>
        ))}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { categrory: { nin: ["bookreviews"] } } }
    ) {
      edges {
        node {
          id
          excerpt(format: PLAIN)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            categrory
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
