import React from "react";
import { Menu, Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleMenuBar } from "../store/navSlice";

export const Header = () => {
  const dispatch=useDispatch();
  return (
    <div className="grid grid-flow-col p-2 mx-auto  items-center ">
      <div className="flex items-center gap-2 col-span-1 ml-2">
        <button onClick={()=>dispatch(toggleMenuBar())}>
          <Menu />
        </button>
        <div className="w-24 ">
          <img
            alt="youtubelogo"
            src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180"
          />
        </div>
      </div>

      <div className="col-span-10 mx-auto flex">
        <input
          type="text"
          name="search"
          className="p-1 pl-6 bg-gray-100 rounded-l-full w-96 placeholder-gray-500 placeholder-opacity-75"
          placeholder="search"
        />
        <div className="p-2 bg-gray-200 rounded-r-full pr-6 text-gray-500">
          <Search  className="size-5 ml-2"/>
        </div>
      </div>

      <div className="w-8 col-span-1 mx-auto">
        <img
          alt="profile"
          src="https://tse3.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
};
