import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4 text-white border-t border-b border-gray-500">
      <div className="grid grid-cols-3 gap-2 place-items-center p-3">
        <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
          <h1 className="font-bold text-lg md:text-xl">CineCraft</h1>
          <button className="font-semibold bg-white text-black text-xs p-1 md:p-2 rounded">Support Us</button>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <h2 className="font-bold md:text-lg">Learn</h2>
          <ul className="text-sm">
            <li>Partners</li>
            <li>News</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <h2 className="font-bold md:text-lg">Connect</h2>
          <ul className="text-sm">
            <li>Email Us</li>
            <li>Socials</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-xs border-t border-gray-600 p-2">
        <p className="text-gray-500">2024, CineCraft</p>
      </div>
    </div>
  );
}
