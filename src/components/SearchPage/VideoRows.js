import React from "react";
import "./VideoRow.css";
import { useNavigate } from "react-router-dom";

function VideoRows({ views, subs, timestamp, channel, title, image }) {
  const navigate = useNavigate();

  function videoSmallClickHandler() {
    navigate("/watch");
  }

  return (
    <div onClick={videoSmallClickHandler} className="videoRow">
      <img src={image} alt={channel} />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel} •{" "}
          <span className="videoRow_subs">
            <span className="videoRow_subsNumber"> {subs}</span>
          </span>{" "}
          {views} • {timestamp}
        </p>
      </div>
    </div>
  );
}

export default VideoRows;
