import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import SEO from "../components/seo"

export default ({ data }) => {
  const albumn = data.allMongodbMusicAlbumn.edges
  console.log(albumn)
  return (
    <Layout>
      <div>
        {albumn.map(({ node }) => (
          <div key={node.mongodb_id}>
            <h1>{node.name}</h1>
          </div>
        ))}
        {/* <h1>歌名：{song.name}</h1>
        <p>歌手：{song.artist}</p>
        <p>专辑：{song.albumn}</p>
        <audio src={song.url} controls></audio> */}
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
