import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const ListLink = props => (
  <li
    css={css`
      font-size: 1.75rem;
      margin-top: 5%;
      font-weight: lighter;
      & a {
        border-bottom: none;
      }
    `}
  >
    <Link
      css={css`
        cursor: pointer;
        &:hover {
          color: #2d2d2d88;
        }
      `}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 1rem 1.75rem 5rem 2rem;
  & p {
    margin-bottom: 1.125rem;
  }
`
const PageHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 48px;
  max-width: 100px;
  & a {
    border-bottom: none;
  }
  //改
  margin: 5px 0 0 0;
  position: absolute;
  height: calc(100% - 5px);
  flex-direction: column;
  width: 20%;
  border-right: 1px solid #e4dbdb;
  left: 0;
  bottom: 0;
  transition: 0.6s ease;
  padding: 5% 0 5%;
  z-index: 1;
`
const PagesList = styled.ul`
  list-style: none;
  float: right;
  display: flex;
  text-align: center;
  min-width: 40%;
  padding: 0;
  justify-content: space-between;
  flex-direction: column;
  margin: 10% 0 0 0;
`
const PageContainerMove = {
  padding: "1rem calc(1.75rem) 5rem calc(20% + 2rem)",
  // marginLeft: "calc(10% + 2rem)",
  transition: `0.6s ease`,
  // transform: "rotate3d(0, 1, 0, 3deg) translate3d(0, 0, 0)",
}
const PageContainerBack = {
  padding: "1rem 1.75rem 5rem 2rem",
  transition: `0.6s ease`,
}
const PageHeaderHide = {
  left: `-20%`,
}
const PageHeaderShow = {
  left: 0,
}
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { toggle: false }
    this.isToggle = this.isToggle.bind(this)
  }

  isToggle() {
    console.log("click")
    this.setState({ toggle: !this.state.toggle })
    console.log(this.state.toggle)
  }

  render() {
    return (
      <div>
        <PageHeader style={this.state.toggle ? PageHeaderShow : PageHeaderHide}>
          <Link to="/">
            <h1 style={{ border: `none`, marginBottom: `0.1em` }}>
              <span role="img" aria-labelledby="blogpage">
                💻
              </span>
            </h1>
          </Link>
          <PagesList>
            <ListLink to="/about/">余</ListLink>
            <ListLink to="/life/">生</ListLink>
            <ListLink to="/books/">書</ListLink>
            <ListLink to="/movies/">影</ListLink>
            <ListLink to="/musics/">音</ListLink>
          </PagesList>
        </PageHeader>
        <PageContainer
          style={this.state.toggle ? PageContainerMove : PageContainerBack}
        >
          {this.props.children}
        </PageContainer>
        <button
          onClick={this.isToggle}
          onKeyDown={this.isToggle}
          style={{
            display: `block`,
            outline: `none`,
            border: `none`,
            cursor: "pointer",
          }}
        >
          <svg
            t="1611836175556"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="20623"
            width="16"
            height="16"
            style={{
              position: `fixed`,
              right: '-4px',
              bottom: "8%",
              zIndex: 2,
              backgroundColor: '#2f2b2b',
              color: '#fff',
              width: '30px',
              borderRadius: '50% 0 0 50%',
              height: '32px',
              padding: '8px',
            }}
          >
            <path
              d="M950.857143 768l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286zm0-292.571429l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286zm0-292.571429l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286z"
              p-id="20624"
              fill="#cdcdcd"
            ></path>
          </svg>
        </button>
      </div>
    )
  }
}

export default ({ children }) => <Layout>{children}</Layout>
