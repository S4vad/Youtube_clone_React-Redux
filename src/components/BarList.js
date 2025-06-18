import React from "react";
import { Bar } from "./Bar";

const barTitle = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Sports",
  "Football",
  "Tech",
  "All",
  "Gaming",
  "Music",
  "Live",
  "Sports",
  "Football",
  "Tech",
];

export const BarList = () => {
  return (
    <div className="flex p-2 gap-2 flex-row justify-evenly items-center mt-2 cursor-pointer">
      {barTitle.map((item, index) => (
        <div key={index}>
          <Bar item={item} />
        </div>
      ))}
    </div>
  );
};
