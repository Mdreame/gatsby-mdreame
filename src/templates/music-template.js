import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import SEO from "../components/seo"

export default ({ data }) => {
  const albumn = data.allMongodbMusicAlbumn.edges
  return (
    <Layout>
      <div>
        {albumn.map(({ node }) => (
          <div key={node.mongodb_id}>
            <h1>{node.name}</h1>
          </div>
        ))}
        123
      </div>
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    allMongodbMusicAlbumn {
      edges {
        node {
          name
          artist
          cover
          pubTime(formatString: "YYYY-MM-DD")
          songs {
            name
            url
          }
          mongodb_id
        }
      }
    }
  }
`
