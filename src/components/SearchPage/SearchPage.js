import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRows from "./VideoRows";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneIcon />
        <h2>FILER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s900-c-k-c0x00ffffff-no-rj"
        channel="Marvel Entertainment"
        verified
        subs="18.7M subscribers"
        noOfVideos="7,771"
        description="Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company, is one of the world's most prominent character-based entertainment companies, built on a proven library of over 8,000 characters featured in a variety of media over seventy years. Marvel utilizes its character franchises in entertainment, licensing and publishing."
      />

      <hr />
      <VideoRows
        title="Marvel Studios' Thor: Love and Thunder | Official Teaser"
        views="10M Views"
        timestamp="5 days ago"
        subs="18.7M subscribers"
        channel="Marvel Entertainment"
        image="https://img.youtube.com/vi/tgB1wUcmbbw/maxresdefault.jpg"
      />
      <VideoRows
        title="SPIDER-MAN: NO WAY HOME - Official Trailer"
        views="60M Views"
        timestamp="5 months ago"
        channel="Marvel Entertainment"
        image="https://img.youtube.com/vi/ZYzbalQ6Lg8/maxresdefault.jpg"
        subs="18.7M subscribers"
      />
      <VideoRows
        title="Marvel's Guardians of the Galaxy | Story Trailer"
        views="4.4 M Views"
        timestamp="10 days ago"
        channel="Marvel Entertainment"
        image="https://img.youtube.com/vi/7MH1BLrUAuw/maxresdefault.jpg"
        subs="18.7M subscribers"
      />
      <VideoRows
        title="Marvel Studios’ Shang-Chi and the Legend of the Ten Rings | Official Trailer"
        views="50M Views"
        timestamp="10 months ago"
        channel="Marvel Entertainment"
        image="https://img.youtube.com/vi/8YjFbMbfXaQ/maxresdefault.jpg"
        subs="18.7M subscribers"
      />
    </div>
  );
}

export default SearchPage;
