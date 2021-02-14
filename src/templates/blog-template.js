import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import SEO from "../components/seo"

export default ({ data }) => {

  const post = data.markdownRemark

  //toc处理
  const toc = post.tableOfContents
  const tocPattern = /<a href="#(.*)">/g
  const tocArr = [...toc.matchAll(tocPattern)]
  const idArr = []
  tocArr.map((tocItem) => {
    idArr.push(tocItem[1])
    return 0
  })
  //toc-为标题增加id属性
  const headerPattern = /<h[1-6]>(.*)<\/h[1-6]>/g
  let pageContent = post.html
  const headerArr = [...pageContent.matchAll(headerPattern)]
  headerArr.map((item, index) => {
    const anchor = /<(h[1-6])>/g
    anchor.exec(item[0])
    const newStr = item[0].replace(RegExp.$1, `${RegExp.$1} id="${idArr[index]}"`)
    pageContent = pageContent.replace(item[0], newStr)
    return 0
  })

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt}></SEO>
      <div
        css={css`
          & p {
            margin-bottom: 0;
            text-align: left;
          }
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <div
          css={css`
            ul,
            ol {
              padding-bottom: 0;
              list-style: none;
              
              a {
                border: none;
                font-size: 0.875rem;
                &:hover {
                  margin-left: 1rem;
                  transition: 0.5s ease;
                }
              }
            }
            &:first-of-type {
              font-size: 0.5rem;
              border: 1px dashed #444;
              &:before {
                content: "目录";
                margin-left: 0.5rem;
              }
            }
          `}
          dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
        ></div>
        <div
          style={{ marginTop: `2rem` }}
          dangerouslySetInnerHTML={{ __html: pageContent }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents(absolute: false)
      frontmatter {
        title
      }
      excerpt
    }
  }
`
