import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import WereadIcon from "../../assets/wereadicon.png"

export default props => {
  const BookItem = styled.li`
    display: list-item;
    margin: 0 3% 40px;
    position: relative;
    padding: 0 0 0 0.5em;

    & p {
      margin-bottom: 0;
    }

    &:after {
      counter-increment: imgNum;
      content: counter(imgNum);
      display: block;
      width: 3em;
      height: 3em;
      line-height: 3em;
      font-weight: 300;
      text-align: center;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      top: -1.5em;
      left: -1em;
      z-index: 1;
    }
  `
  const BookDetials = styled.div`
    display: inline-block;
    text-align: left;
    width: 50%;
    position: absolute;
    margin: 3% 0 0 10%;
    padding: 0 0 1% 1%;
    overflow: hidden;
  `
  const BookCover = styled.img`
    display: inline-block;
    padding: 0;
    border: 1px dotted #ddd;
    box-shadow: 6px 8px 8px 2px #aaa8;
    width: 50%;
    min-width: 90px;
    min-height: 130px;

    &:hover {
      cursor: pointer;
    }

    //图片占位
    // &:after {
    //   content: "";
    //   height: 100%;
    //   width: 100%;
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    // }
  `

  const BookName = styled.h4`
    color: #31845a;
    font-size: 1.25rem;
    padding: 0;
    color: #1a3743;
    &:hover {
      color: #919da5;
      cursor: pointer;
    }
  `
  const BookAuthor = styled.p`
    color: #555;
  `

  const BookCategory = styled.p`
    display: inline-block;
    font-size: 0.8rem;
    line-height: 1.75;
    background-color: #aaa5;
    padding: 0 0.4em;
    border-radius: 0.4em;
    color: #555;
  `
  const BookPreview = styled.a`
    line-height: 16px;
    border-bottom: none;
    & > svg {
      width: 90%;
      height: 90%;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  `
  const BookComment = styled.div`
    margin: 0.5em 0 0 0;
    padding: 1em 0;
    color: #333;
    text-align: justify;
  `
  const Starts = styled.p`
    color: transparent;
    font-size: 1.25rem;
    line-height: 1.25;
    text-shadow: 0 0 #a0a0a0;
    margin-top: -0.2rem;
  `

  return (
    <BookItem>
      <Link to={props.to} style={{borderBottom: `none`}}>
        <BookCover
          src={props.img}
          alt={props.alt}
          title={props.title}
        ></BookCover>
      </Link>
      <BookDetials>
        <Link to={props.to}>
          <BookName>{props.bookName}</BookName>
        </Link>
        <BookAuthor>{props.bookAuthor}</BookAuthor>
        <BookCategory>{props.classify}</BookCategory>
        <p style={{ display: "flex", marginTop: `0.5rem` }}>
          <BookPreview
            href={props.doubanlink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              t="1611145396189"
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="593"
              width="24"
              height="24"
              style={{maxHeight:"`24px",
              maxWidth:`24px`}}
            >
              <path
                d="M687.8 607.5H339.7c37.4 62.9 71.5 130.3 102.1 202.1h142.1c43.6-68.2 78.2-135.6 103.9-202.1z m41.7-76.7V381.5H302v149.4h427.5z m173.1 356H121.4v-77.1h233.7c-28.6-62.9-58.9-117.3-90.7-163.1l60.1-39H219.2V303h593.6v304.5H702.3l60.1 39.9c-28.4 62.9-57.9 117-88.6 162.2h228.8v77.2z m-17.1-673.3H143.7v-76.2h741.8v76.2z"
                fill="#58CB6A"
                p-id="594"
              ></path>
            </svg>
          </BookPreview>
          {props.wereadlink && (
            <BookPreview
              href={props.wereadlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={WereadIcon}
                alt="WereadIcon"
                style={{ padding: 0, height: `90%`, width: `90%` }}
              ></img>
            </BookPreview>
          )}
        </p>
        <Starts>{props.starts}</Starts>
      </BookDetials>

      <BookComment>{props.comment}</BookComment>
    </BookItem>
  )
}
