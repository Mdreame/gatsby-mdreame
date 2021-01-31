import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import GridBox from "../components/gridbox"

const SingerContainer = styled.div`
  padding: 1rem;
  margin: 0 auto;
  // min-width: 250px;
  max-width: 400px;
  position: relative;
  border-radius: 5px;

  &:before {
    counter-increment: singerImgNum;
    content: counter(singerImgNum);
    // content: "1";
    position: absolute;
    right: 16px;
    top: 16px;
    width: 32px;
    height: 32px;
    background: #fff;
    text-align: center;
    font-size: 1rem;
    line-height: 32px;
    border-radius: 0px 4px 0px 12px;
    color: #00355a;
  }
`

const SingerImg = styled.img`
  border-radius: 5px;
`

const SingerName = styled.h3`
  margin: 0;
  color: #4e6e6f;
  font-weight: 600;
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
  border-left: 2px solid #aaa;
  padding-left: 1rem;
  & p {
    font-size: 0.875rem;
    color: #4a4646;
  }
`
const AlbumnContainer = styled.div`
max-width: 150px;
`
const AlbumnName = styled.h3`
  font-size: 0.875rem;
  line-height: 1;
  margin: 0;
`
const AlbumnArtist = styled.span`
  font-size: 0.75rem;
`
const AlbumnCover = styled.img`
  max-width: 100px;
  max-height: 100px;
`
export default ({ data }) => {
  const musicdata = data.allMarkdownRemark
  const albumndata = data.allMongodbMusicAlbumn
  return (
    <Layout>
      {/* 乐评页 */}
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
      <GridBox>
        {albumndata.edges.map(({ node }) => {
          return (
            <AlbumnContainer key={node.mongodb_id}>
              <Link to={`/albumn/${node.name}`}>
              <AlbumnCover src={node.cover} alt={node.name}></AlbumnCover>
              </Link>
              <AlbumnName>{node.name}</AlbumnName>
              <AlbumnArtist>{node.artist}</AlbumnArtist>
            </AlbumnContainer>
          )
        })}
      </GridBox>
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
