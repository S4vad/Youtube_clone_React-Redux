import React, { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuBar } from "../store/navSlice";
import { cacheResults } from "../store/searchSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchSuggestions = async () => {
      try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const apiUrl = encodeURIComponent(
          `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
        );

        const res = await fetch(proxyUrl + apiUrl);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        const suggestions = JSON.parse(data.contents)[1];

        setSearchSuggestions(suggestions);
        dispatch(cacheResults({ [searchQuery]: suggestions }));
      } catch (err) {
        console.error("Error fetching suggestions:", err);
        setSearchSuggestions([]);
      }
    };
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        fetchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleClick = (suggestion) => {
    setShowSuggestion(false);
    navigate(`/search/${suggestion || searchQuery}`);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      setShowSuggestion(false);
      handleClick();
    }
  };

  return (
    <div className="grid grid-flow-col p-2 mx-auto  items-center ">
      <div className="flex items-center gap-2 col-span-1 ml-2">
        <button onClick={() => dispatch(toggleMenuBar())}>
          <Menu />
        </button>
        <div className="w-24 ">
          <img
            alt="youtubelogo"
            src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180"
          />
        </div>
      </div>

      <div className="relative w-96  mx-auto">
        <div className="flex w-full">
          <input
            type="text"
            name="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => handleKey(e)}
            className="p-1 pl-6 bg-gray-100 rounded-l-full w-96 placeholder-gray-500 placeholder-opacity-75"
            placeholder="search"
            value={searchQuery}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button
            onClick={() => handleClick(searchQuery)}
            className="p-2 bg-gray-200 rounded-r-full pr-6 text-gray-500"
          >
            <Search className="size-5 ml-2" />
          </button>
        </div>
        {searchSuggestions.length > 0 && showSuggestion && (
          <ul className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-lg border z-50">
            {searchSuggestions.map((suggestion, index) => (
              <li
                key={`${index}-${suggestion}`}
                // better than just `index`
                onMouseDown={() => handleClick(suggestion)}
                className="p-2 hover:bg-gray-100 hover:cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
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
