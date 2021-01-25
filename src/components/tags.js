import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
export default ({ children }) => {
  const TagList = styled.ul`
    margin: 1rem 0 1.5rem 0;
    // padding: 1em 0;
    padding: 0;
    border-top: 1px dashed #8c7f7f;
  `
  const TagMark = styled.span`
    display: inline-block;
    font-size:0.875rem;
    background-color: #96aac575;
    padding: 2px 10px 3px;
    // border: 1px dashed #8c7f7f;
    border-top: none;
    float: right;
  `
  const TagItem = styled.span`
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.5);
    color: #1a3743;
    font-size: 0.875em;
    line-height: 1.1em;
    margin: 0 0.55em 1em 0;
    padding: 0.4em 0.5em;
    border-bottom: 2px solid #96aac5;
    box-shadow: 2px 1px 1px 0px #8f9aab55;

    :hover {
      background-color: #96aac5;
      color: #fff;
      box-shadow: none;
    }
  `

  return (
    <TagList>
      <TagMark>标签</TagMark>
      {children.split(",").map((tags, index) => (
        <Link to={"/tags/" + tags} key={index} style={{ borderBottom: `none` }}>
          <TagItem>{tags}</TagItem>
        </Link>
      ))}
    </TagList>
  )
}
