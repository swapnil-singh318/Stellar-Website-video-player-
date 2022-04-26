import React, { useState } from "react";
import "./Watch.css";

import marvel_thor from "../../assets/marvel_thor.mp4";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import VideoSmall from "../VideoSmall/VideoSmall";
import Comments from "../Comments/Comments";

function Watch() {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div className="watch">
      <div className="watch_wrap">
        <div className="watch_left">
          <video className="watch_video" autoPlay controls>
            <source src={marvel_thor} type="video/mp4" />
          </video>

          <div className="watch_leftBtm">
            <h1 className="watch_title">
              Marvel Studios' Thor: Love and Thunder | Official Teaser
            </h1>

            <div className="watch_videoInfo">
              <div className="watch_videoInfoLeft">
                <p className="videothumb_text"> 10M Views • Apr 18, 2022</p>
              </div>

              <div className="watch_videoInfoRight">
                <div className="watch_likeContainer">
                  <div className="watch_likeWrap">
                    <div className="watch_likeBtnContainer ">
                      <ThumbUpAltIcon className="watch__icon" />
                      <p>15k</p>
                    </div>

                    <div className="watch_likeBtnContainer ">
                      <ThumbDownAltIcon className="watch_icon" />
                      <p>200</p>
                    </div>
                  </div>

                  <div className="watch_likeDislikes" />
                </div>

                <div className="watch_likeBtnContainer ">
                  <ReplyIcon className="watch_icon share-icon" />
                  <p>SHARE</p>
                </div>

                <div className="watch_likeBtnContainer ">
                  <PlaylistAddIcon className="watch_icon play-addIcon" />
                  <p>SAVE</p>
                </div>

                <div className="watch_likeBtnContainer ">
                  <MoreHorizIcon className="watch_icon play-addIcon" />
                  <p>SAVE</p>
                </div>
              </div>
            </div>

            <div className="watch_details">
              <div className="watch_detailsContainer">
                <div className="videothumb_details watch_avatarWrap">
                  <Avatar src="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s900-c-k-c0x00ffffff-no-rj" />

                  <div className="videothumb_channel">
                    <h1 className="videothumb_title">Marvel Entertainment</h1>

                    <p className="videothumb_text watch_subCount">
                      18.7M Subscribers
                    </p>
                  </div>
                </div>
                <Button
                  className="watch_subBtn"
                  color="primary"
                  variant="contained"
                >
                  SUBSCRIBE
                </Button>
              </div>

              <div className="watch_description">
                <p style={{ maxHeight: showDesc && "100%" }}>
                  Marvel Studios' Thor: Love and Thunder arrives only in
                  theaters July 8. The film finds Thor (Chris Hemsworth) on a
                  journey unlike anything he’s ever faced – a quest for inner
                  peace. But his retirement is interrupted by a galactic killer
                  known as Gorr the God Butcher (Christian Bale), who seeks the
                  extinction of the gods. To combat the threat, Thor enlists the
                  help of King Valkyrie (Tessa Thompson), Korg (Taika Waititi)
                  and ex-girlfriend Jane Foster (Natalie Portman), who – to
                  Thor’s surprise – inexplicably wields his magical hammer,
                  Mjolnir, as the Mighty Thor. Together, they embark upon a
                  harrowing cosmic adventure to uncover the mystery of the God
                  Butcher’s vengeance and stop him before it’s too late.
                  Directed by Waititi (“Thor: Ragnarok,” “Jojo Rabbit”) and
                  produced by Kevin Feige and Brad Winderbaum, “Thor: Love and
                  Thunder” opens in theaters July 8, 2022.
                </p>
                <p
                  className="watch_showMore"
                  onClick={() => setShowDesc(!showDesc)}
                >
                  SHOW {showDesc ? "LESS" : "MORE"}
                </p>
              </div>
            </div>
          </div>
          <div className="watch_comments">
            <Comments />
          </div>
        </div>

        <div className="watch_right">
          <VideoSmall />
          <VideoSmall />
          <VideoSmall />
          <VideoSmall />
          <VideoSmall />
          <VideoSmall />
          <VideoSmall />
        </div>
      </div>
    </div>
  );
}

export default Watch;
