import React from "react"
import styled from "@emotion/styled"

export default props => {
  const BookItem = styled.li`
    display: list-item;
    margin: 0 3% 40px;
    position: relative;
    padding: 0 0 0 0.5em;

    &:after {
      counter-increment: imgNum;
      content: counter(imgNum);
      display: block;
      width: 3em;
      height: 3em;
      line-height: 3em;
      text-align: center;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      top: -1.5em;
      left: -1em;
      z-index: 1;
    }
  `
  const BookDetials = styled.p`
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
  `

  const BookName = styled.h4`
    color: #31845a;
    font-size: 1.5rem;
    padding: 0;
    color: #1a3743;
    &:hover {
      color: #31845a;
      cursor: pointer;
    }
  `
  const BookAuthor = styled.p`
    color: #555;
  `

  const BookCategory = styled.span`
    font-size: 0.5rem;
    background-color: #aaa5;
    padding: 0.1em 0.4em;
    border-radius: 0.4em;
    color: #555;
  `
  const BookPreview = styled.a`
  line-height: 16px;
  & > svg{
    margin: 0.1em 0 -0.3em 0;
  }
  `
  const BookComment = styled.p`
    text-align: justify;
    padding: 1em 0;color: #333;
  `
  const Starts = styled.p`
    color: #555;
  `

  return (
    <BookItem>
      <BookCover
        src={props.img}
        href={props.to}
        alt={props.alt}
        title={props.title}
      ></BookCover>
      <BookDetials>
        <BookName href={props.to}>{props.bookName}</BookName>

        <BookAuthor>
          {props.bookAuthor}
          <p>
            <BookCategory>{props.classify}</BookCategory>
          </p>
        </BookAuthor>
        <BookPreview>
          <svg
            t="1611137896266"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1292"
            width="16"
            height="16"
          >
            <path
              d="M687.8 607.5H339.7c37.4 62.9 71.5 130.3 102.1 202.1h142.1c43.6-68.2 78.2-135.6 103.9-202.1z m41.7-76.7V381.5H302v149.4h427.5z m173.1 356H121.4v-77.1h233.7c-28.6-62.9-58.9-117.3-90.7-163.1l60.1-39H219.2V303h593.6v304.5H702.3l60.1 39.9c-28.4 62.9-57.9 117-88.6 162.2h228.8v77.2z m-17.1-673.3H143.7v-76.2h741.8v76.2z"
              fill="#8a8a8a"
              p-id="1293"
            ></path>
          </svg>
        </BookPreview>
        <Starts>{props.starts}</Starts>
      </BookDetials>

      <BookComment>{props.comment}</BookComment>
    </BookItem>
  )
}
