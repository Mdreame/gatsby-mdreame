import { Link } from "gatsby"
import React from "react"

const ListLink = props => (
  <li
    style={{
      textShadow: `0 0 2px #000`,
      display: `inline-block`,
      fontSize: `1.5rem`,
      marginRight: `0.5em`,
    }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div
    style={{
      // backgroundColor: `lightblue`,
      margin: `1.5rem auto`,
      maxWidth: `800px`,
      padding: `0 1.5rem`,
    }}
  >
    <header
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        alignItems: `center`,
        margin: `1rem`,
        // border: `1px solid #aaa`,
        overflow: `auto`,
      }}
    >
      <Link to="/">
        <h1><span>💻</span></h1>
      </Link>
      <ul
        style={{
          listStyle: `none`,
          float: `right`,
          marginLeft: `3em`,
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
