import React from "react";
import "./VideoSmall.css";
import { useNavigate } from "react-router-dom";

function VideoSmall() {
  const navigate = useNavigate();

  function videoSmallClickHandler() {
    navigate("/watch");
  }

  return (
    <div onClick={videoSmallClickHandler} className="videoSmall">
      <div className="videoSmall_left">
        <img
          src="https://img.youtube.com/vi/ZYzbalQ6Lg8/maxresdefault.jpg"
          alt="thumbnail"
          className="videoSmall_thumbnail"
        />
      </div>

      <div className="videoSmall_right">
        <p className="videoSmall_title">
          SPIDER-MAN: NO WAY HOME - Official Trailer
        </p>

        <div className="videoSmall_texts videoThumb_texts">
          <p className="videoThumb_text">Marvel Entertainment</p>
          <p className="videoThumb_text">60M Views • 5 months ago</p>
        </div>
      </div>
    </div>
  );
}

export default VideoSmall;
