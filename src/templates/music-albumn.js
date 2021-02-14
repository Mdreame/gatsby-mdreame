import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import MusicPlayer from "../components/partical/musicplayer"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const albumn = data.mongodbMusicAlbumn
  return (
    <Layout>
      <SEO title={albumn.name} description={albumn.info}></SEO>
      <div>
        <div>
          <MusicPlayer
            name={albumn.name}
            cover={albumn.cover}
            pre={pageContext.pre ? pageContext.pre.node : null}
            next={pageContext.next ? pageContext.next.node : null}
            songName={albumn.songs[0].name}
            url={albumn.songs[0].url}
            artist={albumn.artist}
            pubTime={albumn.pubTime}
            songNum={albumn.songs.length}
            info={albumn.info}
          ></MusicPlayer>
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
      info
    }
  }
`
