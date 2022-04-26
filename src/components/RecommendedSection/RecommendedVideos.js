import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h1>Recommended</h1>

      <div className="recommendedVideos_videos">
        <VideoCard
          title="Marvel Studios' Thor: Love and Thunder | Official Teaser"
          views="10M Views"
          timestamp="5 days ago"
          channelImage="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s900-c-k-c0x00ffffff-no-rj"
          channel="Marvel Entertainment"
          image="https://img.youtube.com/vi/tgB1wUcmbbw/maxresdefault.jpg"
        />
        <VideoCard
          title="SPIDER-MAN: NO WAY HOME - Official Trailer"
          views="60M Views"
          timestamp="5 months ago"
          channelImage="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s900-c-k-c0x00ffffff-no-rj"
          channel="Marvel Entertainment"
          image="https://img.youtube.com/vi/ZYzbalQ6Lg8/maxresdefault.jpg"
        />
        <VideoCard
          title="Marvel's Guardians of the Galaxy | Story Trailer"
          views="4.4 M Views"
          timestamp="10 days ago"
          channelImage="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s900-c-k-c0x00ffffff-no-rj"
          channel="Marvel Entertainment"
          image="https://img.youtube.com/vi/7MH1BLrUAuw/maxresdefault.jpg"
        />
        <VideoCard
          title="Marvel Studios’ Shang-Chi and the Legend of the Ten Rings | Official Trailer"
          views="50M Views"
          timestamp="10 months ago"
          channelImage="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s900-c-k-c0x00ffffff-no-rj"
          channel="Marvel Entertainment"
          image="https://img.youtube.com/vi/8YjFbMbfXaQ/maxresdefault.jpg"
        />
        <VideoCard
          title="Marvel’s Iron Fist: Season 2 | Official Trailer [HD] | Netflix"
          views="10M views"
          timestamp="11 months ago"
          channelImage="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s900-c-k-c0x00ffffff-no-rj"
          channel="Netflix"
          image="https://img.youtube.com/vi/kvvWB0GwCek/maxresdefault.jpg"
        />
        <VideoCard
          title="Marvel’s Daredevil: Season 3 | Official Trailer [HD] | Netflix"
          views="2M Views"
          timestamp="2 months ago"
          channelImage="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s900-c-k-c0x00ffffff-no-rj"
          channel="Netflix"
          image="https://img.youtube.com/vi/n83s6NO1NE0/maxresdefault.jpg"
        />
        <VideoCard
          title="The Witcher Season 2 | Official Trailer | Netflix"
          views="9M views"
          timestamp="5 months ago"
          channelImage="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s900-c-k-c0x00ffffff-no-rj"
          channel="Netflix"
          image="https://img.youtube.com/vi/TJFVV2L8GKs/maxresdefault.jpg"
        />
        <VideoCard
          title="Stranger Things | Official Final Trailer | Netflix"
          views="7.5M views"
          timestamp="5 years ago"
          channelImage="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s900-c-k-c0x00ffffff-no-rj"
          channel="Netflix"
          image="https://img.youtube.com/vi/b9EkMc79ZSU/maxresdefault.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
