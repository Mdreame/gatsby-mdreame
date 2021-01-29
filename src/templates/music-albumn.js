import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const albumn = data.mongodbMusicAlbumn
  return (
    <Layout>
      <div>
        <div>
          <h1>{albumn.name}</h1>
          <img src={albumn.cover} alt={albumn.name}></img>
          <span>{albumn.artist}</span>
          <span>{albumn.pubTime}</span>
          <h3>{albumn.songs[0].name}</h3>
          <audio src={albumn.songs[0].url}  controls></audio>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($name: String!) {
    mongodbMusicAlbumn(name: { eq: $name }) {
      cover
      name
      songs {
        name
        url
      }
      artist
      pubTime(formatString: "YYYY-MM-DD")
    }
  }
`