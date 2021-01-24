import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Tags from "../components/tags"
import Info from "../components/partical/info"

// import SEO from "../components/seo"
export default ({ data }) => {
  const post = data.markdownRemark

  const BookName = styled.h3`
    border-bottom: 1px dashed #8c7f7f;
    vertical-align: middle;
    margin-top: 2rem;
    padding: 0.3rem 0;
    line-height: 1.2;
  `
  const ReadDate = styled.p`
    margin: 0;
    float: right;
    color: #a09393;
    font-style: italic;
  `
  const BookComment = styled.p`
    margin-top: 0.5em;
    &:first-letter {
      margin-left: 2em;
    }
  `
  const BookClip = styled.p`
    position: relative;
    min-height: 360px;
    max-width: 500px;
    margin-bottom: 60px;
  `

  const BookCover = styled.img`
    position: absolute;
    min-height: 250px;
    max-height: 350px;
    max-width: 250px;
    clip: rect(0px 250px 236px 15px);
    right: 0;
    z-index: -1;
  `
  const Abstract = styled.span`
    display: block;
    background-color: #d2c7c666;
    width: 95%;
    left: 0;
    top: 50%;
    padding: 1.5em 1em 1em;
    backdrop-filter: blur(3px);
    border-radius: 0.3em;
    position: absolute;

    &:before {
      content: "\“";
      font-size: 4rem;
      font-family: san-serif, auto;
      float: left;
      display: block;
      line-height: 1;
      margin: -10px -5px -35px -33px;
      padding: 0 20px 0 0px;
    }
  `
  const BookReview = styled.div`
    & h3 {
      color: #1661ab;
    }
    & p:first-child::first-letter {
      font-size: 2rem;
      float: left;
      line-height: 1;
      margin: 0.75rem 0.5rem 0.5rem 0.5rem;
    }
  `
  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt}></SEO> */}
      <div>
        <BookName>
          {post.frontmatter.bookname}
          <ReadDate>{post.frontmatter.date}</ReadDate>
        </BookName>

        <BookComment>{post.frontmatter.comment}</BookComment>

        <BookClip>
          <Abstract>
            “过于崇敬自由自在的行动，变得不得不憎恨自由自在的行动”。这正印证了荣格的心理值的均衡原则，即当某一占统治地位的情结最终要被推翻时，心理结构的能量外流会出现严重后果，具体可表现为人的变化的巨大反复。
          </Abstract>
          <BookCover
            src={post.frontmatter.bookcover}
            alt={post.frontmatter.bookcover}
          ></BookCover>
        </BookClip>
        <Tags>{post.frontmatter.tags}</Tags>

        <BookReview
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></BookReview>
        <Info
          author={post.frontmatter.bookauthor}
          valur={post.frontmatter.starts}
          classify={post.frontmatter.classify}
        ></Info>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        bookauthor
        bookcover
        bookname
        tags
        doubanlink
        starts
        comment
        title
        date(formatString: "YYYY.MM.DD HH:MM")
        classify
      }
      excerpt(format: PLAIN)
      html
    }
  }
`
