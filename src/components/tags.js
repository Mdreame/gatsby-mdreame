import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
export default ({ children }) => {
  const TagList = styled.ul`
    margin: 1em;
    padding: 1em 0;
  `
  const TagItem = styled.span`
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.5);
    color: #1a3743;
    font-size: 1.1em;
    line-height: 1.1em;
    margin: 0 0.5em 1em 0;
    padding: 0.4em 0.8em;
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
      {children.split(",").map((tags, index) => (
        <Link to={"/tags/" + tags} key={index}>
          <TagItem >{tags}</TagItem>
        </Link>
      ))}
    </TagList>
  )
}
