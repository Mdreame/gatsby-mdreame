import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default props => {
  const BookItem = styled.li`
    display: list-item;
    margin: 0 3% 40px;
    position: relative;
    // padding: 0 0 0 0.5em;

    & p {
      margin-bottom: 0;
    }

    &:after {
      counter-increment: imgNum;
      content: counter(imgNum);
      display: block;
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      top: -1rem;
      left: -1rem;
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

    @media (min-width:480px and max-width: 900px){
      max-width: 80px;
    }
  `
  const BookCover = styled.img`
    display: inline-block;
    padding: 0;
    border: 1px dotted #ddd none;
    box-shadow: 6px 8px 8px 2px #aaa8;
    // width: 50%;
    min-width: 100px;
    min-height: 130px;
    max-height: 150px;

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
    font-size: 1rem;
    font-weight: 300;
    padding: 0;
    color: #1a3743;
    &:hover {
      color: #919da5;
      cursor: pointer;
    }
  `
  const BookAuthor = styled.p`
    color: #555;
    font-size: 0.75rem;
  `

  const BookCategory = styled.p`
    display: inline-block;
    font-size: 0.8rem;
    line-height: 1.75;
    // background-color: #aaa5;
    padding: 0 0.4em;
    border-radius: 0.4em;
    // color: #555;
  `
  const BookComment = styled.div`
    margin: 1.5em 0 1em 0;
    font-size: 0.875rem;
    color: #615959e8;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  `

  function CheckColor(props) {
    switch (props.classify) {
      case "文学小说":
        return (
          <BookCategory className="tagColor-wx">{props.classify}</BookCategory>
        )
      case "人文社科":
        return (
          <BookCategory className="tagColor-rw">{props.classify}</BookCategory>
        )
      case "学习工具":
        return (
          <BookCategory className="tagColor-xi">{props.classify}</BookCategory>
        )
      case "国学":
        return (
          <BookCategory className="tagColor-gx">{props.classify}</BookCategory>
        )
      case "哲学宗教":
        return (
          <BookCategory className="tagColor-zx">{props.classify}</BookCategory>
        )
      case "历史传记":
        return (
          <BookCategory className="tagColor-ls">{props.classify}</BookCategory>
        )
      case "生活休闲":
        return (
          <BookCategory className="tagColor-sh">{props.classify}</BookCategory>
        )
      case "文化艺术":
        return (
          <BookCategory className="tagColor-wy">{props.classify}</BookCategory>
        )
      case "计算机与互联网":
        return (
          <BookCategory className="tagColor-web">{props.classify}</BookCategory>
        )
      case "科学科普":
        return (
          <BookCategory className="tagColor-soci">
            {props.classify}
          </BookCategory>
        )
      case "畅销励志":
        return (
          <BookCategory className="tagColor-lz">{props.classify}</BookCategory>
        )
      case "心理":
        return (
          <BookCategory className="tagColor-xl">{props.classify}</BookCategory>
        )
      default:
        return (
          <BookCategory className="tagColor-blue">
            {props.classify}
          </BookCategory>
        )
    }
  }

  return (
    <BookItem>
      <div>
        <Link to={props.to} style={{ borderBottom: `none` }}>
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
          <CheckColor classify={props.classify}></CheckColor>
        </BookDetials>
      </div>
      <BookComment>{props.comment}</BookComment>
    </BookItem>
  )
}
