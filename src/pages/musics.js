import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const SingerContainer = styled.div`
  padding: 0.5rem;
  margin: 0 auto;
  // min-width: 250px;
  max-width: 300px;
  position: relative;
  border-radius: 5px;

  &:before {
    counter-increment: singerImgNum;
    content: counter(singerImgNum);
    // content: "1";
    position: absolute;
    right: 8px;
    top: 8px;
    width: 24px;
    height: 24px;
    background: #fff;
    text-align: center;
    font-size: 1rem;
    line-height: 24px;
    border-radius: 0px 4px 0px 12px;
    color: #00355a;
  }
`

const SingerImg = styled.img`
  border-radius: 5px;
  min-width: 150px;
`

const SingerName = styled.h3`
  margin: 0;
  color: #4e6e6f;
  font-size: 1rem;
`

const SingerType = styled.span`
  font-size: 0.75rem;
  background: #ddd;
  float: right;
  margin-top: -1.5rem;
  padding: 4px 7px;
  border-radius: 0.5rem;
  color: #5a5657;
  line-height: 0.5rem;
`
const SingerIntro = styled.div`
  & p {
    font-size: 0.75rem;
    color: #655e5e;
    line-height: 1.5;
  }
`
const AlbumnContainer = styled.div`
  max-width: 150px;
  margin: 0.5rem 1rem 0.5rem 0;
`
const AlbumnName = styled.h3`
  font-size: 0.875rem;
  line-height: 1;
  margin: 0;
  max-width: 90px;
`
const AlbumnArtist = styled.span`
  font-size: 0.75rem;
`
const AlbumnCover = styled.img`
  max-width: 90px;
  max-height: 90px;
`
const SectionHeader = styled.h2`
  color: #255158;
`
export default ({ data }) => {
  const musicdata = data.allMarkdownRemark
  const albumndata = data.allMongodbMusicAlbumn
  return (
    <Layout>
      <SectionHeader>Music Reviews</SectionHeader>
      <div style={{ display: "flex", justifyContent: `space-around` }}>
        {musicdata.edges.map(({ node }) => {
          // console.log(node.frontmatter.attachments)
          return (
            <SingerContainer key={node.id}>
              <Link to={node.fields.slug} style={{ border: `none` }}>
                <SingerImg
                  src={node.frontmatter.attachments[0].publicURL}
                  alt={node.frontmatter.title}
                ></SingerImg>
                <SingerName>{node.frontmatter.title}</SingerName>
              </Link>
              <SingerType>{node.frontmatter.classify}</SingerType>
              <SingerIntro
                dangerouslySetInnerHTML={{ __html: node.html }}
              ></SingerIntro>

              {/* {node.frontmatter.attachments.map((item,index) => (
                <img key={index} src={item.publicURL} alt={node.frontmatter.title}></img>
              ))} */}
            </SingerContainer>
          )
        })}
      </div>
      <SectionHeader>Favorites</SectionHeader>
      <div style={{ display: "flex" }}>
        {albumndata.edges.map(({ node }) => {
          return (
            <AlbumnContainer key={node.mongodb_id}>
              <Link to={`/albumn/${node.name}`} style={{ border: `none` }}>
                <AlbumnCover src={node.cover} alt={node.name}></AlbumnCover>
              </Link>
              <AlbumnName>{node.name}</AlbumnName>
              <AlbumnArtist>{node.artist}</AlbumnArtist>
            </AlbumnContainer>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          categrory: { eq: "Music" }
          attachments: { elemMatch: { publicURL: {} } }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            classify
            tags
            attachments {
              publicURL
            }
          }
          html
          id
          fields {
            slug
          }
        }
      }
    }
    allMongodbMusicAlbumn {
      edges {
        node {
          name
          cover
          artist
          mongodb_id
        }
      }
    }
  }
`
