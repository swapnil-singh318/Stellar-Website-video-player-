import React from "react";
import "./VideoCard.css";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

function VideoCard({ image, title, views, channel, timestamp, channelImage }) {
  const navigate = useNavigate();

  function videoClickHandler() {
    navigate("/watch");
  }

  return (
    <div onClick={videoClickHandler} className="videoCard">
      <img className="videoCard_thumbnail" src={image} alt="thumbnail" />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
