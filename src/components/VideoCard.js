import React from "react";
import { useSelector } from "react-redux";

export const VideoCard = ({ info }) => {
  const showMenuBar = useSelector((store) => store.nav.showMenuBar);

  if (!info || !info.snippet) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div
      className={`p-2 m-2 ${showMenuBar ? "w-[26rem]" : "w-[22rem]"} shadow-lg`}
    >
      <img className="rounded-lg" alt="thumbnails" src={thumbnails.high.url} />
      <ul>
        <li className="font-bol py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};
