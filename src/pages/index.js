import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <main
        style={{
          margin: `2rem 0.6rem`,
          minHeight: `600px`,
          padding: `0.5em`,
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
          <div key={node.id} style={{
            marginBottom: `1em`,
          }}>
            <Link to={node.fields.slug}>
              <h3
                style={{
                  display: "flex",
                  justifyContent: `space-between`,
                  alignItems: `center`,
                }}
              >
                {node.frontmatter.title}
                <span
                  style={{
                    color: `#aaa`,
                    fontSize: 1,
                  }}
                >
                  {node.frontmatter.date}
                </span>
              </h3>
            </Link>
            <p
              style={{
                margin: `1em`,
                fontSize: 1,
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
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(format: PLAIN)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
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
