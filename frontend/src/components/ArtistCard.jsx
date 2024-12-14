import React from "react";
import banner from "../assets/banner.png"; // Replace with your banner image path
import artistImage from "../assets/artist.png"; // Replace with your artist image path
import { verified } from "../assets/svg";


const ArtistCard = ({ }) => {
  const artistName = "Michel Jackson";
  const listenerCount = 102234;
  return (
<div className="flex justify-center pt-[100px]">
  <div className="relative w-[80%] aspect-[17/6] ">
    {/* Background Image with Brightness */}
    <div
      className="absolute inset-0 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${banner})`,
        borderRadius:"30px",
        filter: "brightness(0.4)", // Adjust brightness here
      }}
    ></div>

    {/* Content Layer */}
    <div className="absolute right-0 bottom-0">
      <img
        src={artistImage}
        alt={artistName}
        className="w-full h-full object-contain"
      />
    </div>
    <div className="absolute left-5 top-1/2 -translate-y-1/2 px-4 py-2 rounded-md shadow-md">
      <h3 className="flex items-center gap-2 text-xs m-1">
        {React.cloneElement(verified, { width: "20px", height: "20px" })}{" "}
        <span>Verified Artist</span>
      </h3>
      <h3 className="text-3xl font-bold m-1">{artistName}</h3>
      <p className="text-xs mt-3">
        {listenerCount.toLocaleString()} monthly listeners
      </p>
    </div>
  </div>
</div>

  );
};

export default ArtistCard;

