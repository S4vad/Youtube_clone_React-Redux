import React from "react";
import { BarList } from "./BarList";
import { VideoContainer } from "./VideoContainer";

export const MainContainer = () => {
  return (
    <div className="flex-1">
      <BarList />
      <VideoContainer />
    </div>
  );
};
