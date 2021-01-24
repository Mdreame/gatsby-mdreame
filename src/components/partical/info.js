import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
export default props => {
  const Info = styled.div`
    margin: 1em 0;
    display: flex;
    font-size: 0.85em;

    & span {
      margin-right: 0.5em;
    }
  `
  const Author = styled.span`
    padding: 0.4em 0.8em;
    border-radius: 1em;
    background-color: #8faff78c;
    :hover {
      background-color: #96aac5;
      color: #fff;
      box-shadow: none;
    }
  `
  const Value = styled.span`
    padding: 0.4em 0.8em;
    border-radius: 1em;
    background-color: #6ad0898f;
  `
  const Classify = styled.span`
    padding: 0.4em 0.8em;
    border-radius: 1em;
    background-color: #d89c5f8c;
  `

  return (
    <Info>
      <Link style={{ borderBottom: `none` }}>
        <Author>{props.author}</Author>
      </Link>
      <Link style={{ borderBottom: `none` }}>
        <Value>{props.value}</Value>
      </Link>
      <Link style={{ borderBottom: `none` }}>
        <Classify>{props.classify}</Classify>
      </Link>
    </Info>
  )
}
