import React from "react";
import songImage from "../assets/song.png"; // Replace with your image path
import { next, prev, loop, shuffel, pause } from "../assets/svg";

const PlayCard = () => {
  return (
    <div className="bg-[#700404] text-white rounded-lg shadow-md p-4 w-[250px]">
      {/* Header */}
      <div className="text-center mb-3 text-sm font-medium">Now Playing</div>

      {/* Song Image */}
      <div className="mb-4">
        <img
          src={songImage}
          alt="Now Playing"
          className="w-full aspect-video rounded-md"
        />
      </div>

      {/* Song Details */}
      <div className="text-center">
        <h3 className="text-lg font-bold">Beat It</h3>
        <p className="text-sm text-gray-300">Michael Jackson</p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-2 mt-3">
        <span className="text-xs">2:15</span>
        <div className="flex-1 bg-gray-700 h-1 rounded-full">
          <div
            className="bg-white h-1 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
        <span className="text-xs">4:18</span>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-4 text-xl">
        <button>
          {loop}
        </button>
        <button>
          {prev}
        </button>
        <button className="">
          {pause}
        </button>
        <button>
          {next}
        </button>
        <button>
          {shuffel}
        </button>
      </div>
    </div>
  );
};

export default PlayCard;
