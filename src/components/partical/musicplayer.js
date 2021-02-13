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
  box-shadow: 0px 0px 0px 7px #000000, 0px 0px 1px 46px #1b1a1a;
  z-index: -1;
`
const AlbumnPin = styled.span`
  background-image: url(https://picture.mdreame.life/player-pin.png);
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  right: -10px;
  top: 20px;
  display: block;
  width: 50px;
  height: 80px;
  transform-origin: 14px 14px;
  transition: 0.8s;
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
const AlbumnInfo = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;

  & span,
  p,
  h3 {
    color: #868686;
    font-size: 0.75rem;
    margin: 0;
    // line-height: 1;
  }
`
const PlayBtn = styled.button`
  content: "";
  position: absolute;
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(https://picture.mdreame.life/play.png);
  bottom: 56px;
  left: calc(
    var(--albumnContainerWidth) / 2 - var(--albumnCDWidth) / 4 - 16px - 24px
  );
  width: 48px;
  height: 48px;
  z-index: 3;
`

export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isPlay: false, start: false, toggleBtn: false }
    this.player = null
    this.checkPlay = this.checkPlay.bind(this)
  }

  checkPlay() {
    this.state.isPlay
      ? this.delayPlay(this.player, "paused", 500)
      : this.delayPlay(this.player, "start", 500)

    //摇杆移动
    this.setState({
      start: !this.state.start,
      toggleBtn: !this.state.toggleBtn,
    })

    //播放结束
    this.player.addEventListener("ended", e => {
      console.log(e)
      this.setState({ isPlay: false, start: false, toggleBtn: false })
    })
  }

  delayPlay(player, action, ms) {
    setTimeout(() => {
      action === "start" ? player.play() : player.pause()

      this.setState({
        isPlay: !this.state.isPlay,
      })
    }, ms)
  }
  render() {
    const { isPlay, start, toggleBtn } = this.state

    const albumn = this.props

    const PlayBtnImg = {
      backgroundImage: `url(https://picture.mdreame.life/musicplay.png)`,
      backgroundSize: "cover",
    }
    const StopBtnImg = {
      backgroundImage: `url(https://picture.mdreame.life/musicstop.png)`,
      backgroundSize: "cover",
    }
    return (
      <div>
        <AlbumnContainer>
          <PlayBtn
            onClick={this.checkPlay}
            style={toggleBtn ? StopBtnImg : PlayBtnImg}
          ></PlayBtn>
          <AlbumnCover
            style={{ backgroundImage: `url(${albumn.cover})` }}
            className={`shadow`}
          // style={isPlay ? AlbumnCoverHide : AlbumnCoverShow}
          ></AlbumnCover>
          <AlbumnCD
            src={albumn.cover}
            alt={albumn.name}
            style={isPlay ? Rotate : StopRotate}
          ></AlbumnCD>

          <AlbumnPin
            style={start ? { transform: "rotate(45deg)" } : null}
          ></AlbumnPin>
        </AlbumnContainer>
        <AlbumnShelf></AlbumnShelf>

        <AlbumnInfo>
          <h4
            style={{
              fontSize: `1.5rem`,
              fontWeight: "600",
              color: "#4e6e6f",
              marginBottom: `0.5rem`,
            }}
          >
            {albumn.name}
          </h4>

          <p style={{ margin: "0", fontSize: "0.875rem", color: "#868686" }}>
            By:
            <span style={{ color: `#444`, fontWeight: "600" }}>
              {albumn.artist}
            </span>
          </p>
          <span>{albumn.pubTime} - </span>
          <span> {albumn.songNum}首</span>
          {/* <h3>{albumn.songName}</h3> */}
          <p style={{ fontSize: `0.875rem`, marginTop: `0.5rem` }}>
            {albumn.info}
          </p>
        </AlbumnInfo>

        <audio
          ref={el => {
            this.player = el
          }}
          src={albumn.url}
        >
          <track></track>
        </audio>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: `2rem`,
          }}
        >
          {/* 上一張專輯 */}
          {albumn.pre ? (
            <Link
              to={`/albumn/${albumn.pre.name}`}
              style={{ border: `none`, maxWidth: `120px` }}
            >
              <img
                src={albumn.pre.cover}
                alt={`${albumn.pre.name}`}
                style={{
                  width: `80px`,
                  height: `80px`,
                  margin: `0 auto`,
                  display: `block`,
                }}
              ></img>
              <p
                style={{
                  fontSize: `0.75rem`,
                  overflow: `hidden`,
                  textOverflow: `ellipsis`,
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                上一张：{albumn.pre.name}
              </p>
            </Link>
          ) : null}

          {/* 下一張专辑 */}
          {albumn.next ? (
            <Link
              to={`/albumn/${albumn.next.name}`}
              style={{ border: `none`, maxWidth: `120px` }}
            >
              <img
                src={albumn.next.cover}
                alt={`${albumn.next.name}`}
                style={{
                  width: `80px`,
                  height: `80px`,
                  margin: `0 auto`,
                  display: `block`,
                }}
              ></img>
              <p
                style={{
                  fontSize: `0.75rem`,
                  overflow: `hidden`,
                  textOverflow: `ellipsis`,
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                下一张：{albumn.next.name}
              </p>
            </Link>
          ) : null}
        </div>
      </div>
    )
  }
}
