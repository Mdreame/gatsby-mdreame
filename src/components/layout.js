import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/react"

const ListLink = props => (
  <li
    css={css`
      font-size: 2rem;
    `}
  >
    <Link css={css`
      color: #2d2d2d;
      cursor: pointer;
      &:hover{
        color:#2d2d2d88;
      }
    `} to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: `1200px`,
      padding: `1rem 1.5rem 5rem`,
    }}
  >
    <header
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        alignItems: `center`,
        margin: `1rem auto`,
        padding: `0 0 0 0.5em`,
      }}
    >
      <Link to="/">
        <h1 style={{ border: `none`, margin: 0 }}>
          <span role="img" aria-labelledby="blogpage">
            💻
          </span>
        </h1>
      </Link>
      <ul
        style={{
          listStyle: `none`,
          float: `right`,
          marginLeft: `3em`,
          display: `flex`,
          minWidth: `40%`,
          justifyContent: `space-between`,
        }}
      >
        <ListLink to="/about/">余</ListLink>
        <ListLink to="/life/">生</ListLink>
        <ListLink to="/books/">書</ListLink>
        <ListLink to="/movies/">影</ListLink>
        <ListLink to="/musics/">音</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
