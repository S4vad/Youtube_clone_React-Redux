import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentContainer";

export const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-20">
      <iframe
        width="800"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-3xl"
      ></iframe>
      <CommentsContainer />
    </div>
  );
};
