import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Tags from "../components/tags"

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
  const ReadDate = styled.span`
    float: right;
    font-size: 0.75em;
    padding: 0.5em 0 0 0;

    color: #a09393;
    font-style: italic;
  `
  const BookComment = styled.p`
    margin-top: 0.5em;
    &:first-letter {
      margin-left: 2em;
    }
  `
  const BookClip = styled.div`
    position: relative;
    min-height: 360px;
    max-width: 500px;
    margin: 0 auto;
  `

  const BookCover = styled.img`
    position: absolute;
    min-height: 250px;
    width: 80%;
    max-height: 350px;
    max-width: 250px;
    clip: rect(0px 250px 236px 15px);
    right: 15px;
    z-index: -1;

    @media (min-width: 720px) {
      top: 25%;
      left: -80%;
    }
  `
  const Sentence = styled.span`
    display: block;
    background-color: #e4dfdf9c;

    font-size: 0.875rem;
    padding: 1.5em 1em 1em;
    backdrop-filter: blur(5px);
    border-radius: 0.3em;
    // position: absolute;
    // left: 0;
    // top: 180px;
    // width: 95%;
    float: left;
    margin: 180px 30px 20px 10px;
    width: 85%;

    &::first-letter {
      margin-left: 2em;
    }
    &:before {
      content: "\“";
      font-size: 4rem;
      font-family: san-serif, auto;
      float: left;
      display: block;
      line-height: 1;
      margin: -10px -5px -35px 0;
      padding: 0;
    }

    @media (min-width: 720px) {
      float: right;
      width: 70%;
      margin: 30px -70px 0 0;
    }
  `
  const BookReview = styled.div`
    & h3 {
      color: #1661ab;
    }
    & p:first-of-type::first-letter {
      font-size: 2rem;
      float: left;
      line-height: 1;
      margin: 0.75rem 0.5rem 0.5rem 0.5rem;
    }
  `
  const ClearDiv = styled.div`
    clear: both;
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
          <BookCover
            src={post.frontmatter.bookcover}
            alt={post.frontmatter.bookcover}
          ></BookCover>
          <Sentence>
            {post.frontmatter.sentence
              ? post.frontmatter.sentence
              : `主题阅读：“各时代怎么会有各时代的特产呢？每一代的大作家他们从前代承受了些什么？自己又创造了什么？”这便可以作为读书的一个出发点，即求知欲。从哲学到文学可以看成每个时代的思想开枝散叶，化成一个个伟大的作家，彼此影响成就，整个下来就是一部文学史。学会将书本分门别类，根据自身水平增减。`}
          </Sentence>
          <ClearDiv></ClearDiv>
        </BookClip>

        {/* 将标签字符串格式化为数组 */}
        <Tags>{post.frontmatter.tags.split(",")}</Tags>

        <BookReview
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></BookReview>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        bookcover
        bookname
        tags
        comment
        sentence
        date(formatString: "YYYY.MM.DD HH:MM")
        classify
      }
      excerpt(format: PLAIN)
      html
    }
  }
`
