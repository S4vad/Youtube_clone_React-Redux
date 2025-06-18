import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    fetch_video();
  }, [query]);

  const fetch_video = async () => {
    try {
      const url = query
        ? `${YOUTUBE_SEARCH_API}&q=${encodeURIComponent(query)}`
        : YOUTUBE_VIDEOS_API;
      console.log(url);
      const data = await fetch(url);
      const json = await data.json();
      console.log("the out", json);
      setVideos(json.items);
    } catch (error) {}
  };
  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};
