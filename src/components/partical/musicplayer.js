import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const AlbumnContainer = styled.div`
  position: relative;
  height: 200px;
  width: var(--albumnContainerWidth);
  margin: 0 auto;
`
//唱片封面
const AlbumnCover = styled.span`
  position: absolute;
  left: calc(
    (
        var(--albumnContainerWidth) - var(--albumnCoverWidth) -
          (var(--albumnCDWidth) / 2)
      ) / 2 - 16px
  );
  bottom: 0;
  width: 160px;
  height: 160px;
  background-color: #ddd;
  box-shadow: 4px 3px 3px -3px #0006;
  padding: 10px;
  background-size: cover;
  background-origin: content-box;
  background-repeat: no-repeat;

  &:before {
    content: "";
    width: 80px;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    box-shadow: 2px -2px 4px 1px #0009, -21px -18px 20px 5px #0008,
      -11px -9px 11px 2px #0009;
    z-index: -1;
  }
  &:after {
    content: "";
    width: 80px;
    height: 1px;
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 60px -5px 7px 1px #0005, 65px -10px 10px 3px #0002,
      79px -10px 15px 3px #0008, 35px -6px 10px 4px #0009,
      13px -6px 7px 5px #0004;
    z-index: -1;
  }
`
//黑胶唱片
const AlbumnCD = styled.img`
  border-radius: 50%;
  position: absolute;
  bottom: 48px;
  width: var(--albumnCDWidth);
  height: var(--albumnCDWidth);
  left: calc(
    var(--albumnContainerWidth) / 2 + var(--albumnCoverWidth) / 2 -
      var(--albumnCDWidth) * 3 / 4 - 16px
  );
  //   box-shadow: 0px 0px 1px 1px #0008, 1px 0px 2px 1px #0008;
  box-shadow: 0px 0px 1px 46px #000000de, 0px 0px 0px 7px #a09292de;
  z-index: -1;
`
const AlbumnShelf = styled.span`
  display: block;
  width: 300px;
  height: 12px;
  background: #e4e1de;
  margin: 0.75rem auto 0.5rem;
  position: relative;
  border-radius: 0.5rem;
  
  &:after {
    content: "";
    width: 66px;
    height: 1px;
    box-shadow: 5px 1px 12px 2px #0009, 72px 2px 10px 2px #0005,
      141px 4px 13px 2px #0006, 211px 2px 14px 3px #0008;
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
`
// const AlbumnCoverHide = {
//   opacity: 0,
// }
// const AlbumnCoverShow = {
//   opacity: 1,
// }
const Rotate = {
  animation: `playMusic 16s linear 0.5s infinite running`,
  // zIndex: "3",
  // width: "80px",
  // height: "80px",
  // transition: `1s`,
}
const StopRotate = {
  animation: `playMusic 16s linear 0.5s infinite paused`,
}

export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isPlay: false }
    this.player = null
    this.checkPlay = this.checkPlay.bind(this)
  }

  checkPlay() {
    this.state.isPlay ? this.player.pause() : this.player.play()

    this.setState({
      isPlay: !this.state.isPlay,
    })
  }

  render() {
    const { isPlay } = this.state
    console.log(isPlay)

    return (
      <div>
        <h3>{this.props.name}</h3>
        <AlbumnContainer>
          <AlbumnCover
            style={{ backgroundImage: `url(${this.props.cover})` }}
            className={`shadow`}
            // style={isPlay ? AlbumnCoverHide : AlbumnCoverShow}
          ></AlbumnCover>
          <AlbumnCD
            src={this.props.cover}
            alt={this.props.name}
            style={isPlay ? Rotate : StopRotate}
          ></AlbumnCD>
        </AlbumnContainer>
        <AlbumnShelf></AlbumnShelf>
        <h3>{this.props.songName}</h3>

        <audio
          ref={el => {
            this.player = el
          }}
          src={this.props.url}
          controls
        >
          <track></track>
        </audio>

        {/* 上一張專輯 */}
        {this.props.pre ? (
          <Link to={`/albumn/${this.props.pre}`}>
            <p>上一张{this.props.pre}</p>
          </Link>
        ) : null}

        {/* 下一張专辑 */}
        {this.props.next ? (
          <Link to={`/albumn/${this.props.next}`} onClick={this.nextAlbumn}>
            <p>下一张{this.props.next}</p>
          </Link>
        ) : null}
        <button onClick={this.checkPlay}>play</button>
      </div>
    )
  }
}
