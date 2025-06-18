import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import {
  Home,
  Flame,
  ListVideo,
  History,
  Folder,
  Video,
  Clock,
  ThumbsUp,
  PlusCircle,
} from "lucide-react";

const menuItems = [
  { label: "Home", icon: <Home size={20} />, path: "/" },
  { label: "Shorts", icon: <Flame size={20} /> },
  { label: "Subscription", icon: <ListVideo size={20} /> },
  { label: "History", icon: <History size={20} /> },
  { label: "Playlists", icon: <Folder size={20} /> },
  { label: "Your Videos", icon: <Video size={20} /> },
  { label: "Watch Later", icon: <Clock size={20} /> },
  { label: "Liked Videos", icon: <ThumbsUp size={20} /> },
  { label: "New", icon: <PlusCircle size={20} /> },
  { label: "New", icon: <PlusCircle size={20} /> },
];

export const Sidebar = () => {
  const nav = useSelector((state) => state.nav.showMenuBar);
  if (!nav) {
    return null;
  }
  return (
    <div className="w-48 bg-gray-100 h-screen flex flex-col py-4">
      <ul className="w-full">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="w-full h-10 flex items-center gap-4 px-5 hover:bg-gray-200 cursor-pointer text-sm font-medium transition"
          >
            {item.icon}
            {item.path ? <Link to={item.path}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
