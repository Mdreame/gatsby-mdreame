import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import MusicPlayer from "../components/partical/musicplayer"
// import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const albumn = data.mongodbMusicAlbumn
  return (
    <Layout>
      <div>
        <div>
          <MusicPlayer
            name={albumn.name}
            cover={albumn.cover}
            pre={pageContext.pre ? pageContext.pre.node.name : null}
            next={pageContext.next ? pageContext.next.node.name : null}
            songName={albumn.songs[0].name}
            url={albumn.songs[0].url}
            artist={albumn.artist}
            pubTime={albumn.pubTime}
            songNum={albumn.songs.length}
          ></MusicPlayer>
          {/* <h1>{albumn.name}</h1>
          <img src={albumn.cover} alt={albumn.name}></img>
          <span>{albumn.artist}</span>
          <span>{albumn.pubTime}</span>
          <h3>{albumn.songs[0].name}</h3>
          <audio src={albumn.songs[0].url} controls></audio> */}
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
      pubTime(formatString: "YYYY")
    }
  }
`
