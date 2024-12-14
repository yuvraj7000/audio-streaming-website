import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SongList_Item from "./SongList_Item";
import songImage from '../assets/song.png'; // Ensure you import the songImage

const SongList = () => {
  const initialData = [
    {
      id: 1,
      title: "Billie nnn",
      icon: songImage,
      playing: "1,040,811,084",
      cover: songImage,
      time: "4:53",
      album: "Thriller 25 Super Deluxe Edition",
    },
    {
      id: 2,
      title: "Billie Jeajbgvh",
      icon: songImage,
      playing: "1,040,811,084",
      cover: songImage,
      time: "4:53",
      album: "Thriller 25 Super Deluxe Edition",
    },
    // Add more items as needed
  ];

  const [items, setItems] = useState(initialData);

  const moveItem = (draggedIndex, hoveredIndex) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(hoveredIndex, 0, draggedItem[0]);
    setItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2 className="text-2xl font-bold">Popular</h2>
        <a href="#" className="text-gray-500 hover:text-white">
          See All
        </a>
      </div>

      <div className="text-sm">
        <div className="ml-[10%] mr-[10%]">
          <div className="flex justify-between px-4 py-3 ">
            <span className="w-1/12 text-center">#</span>
            <span className="w-3/12 text-center">TITLE</span>
            <span className="w-3/12 text-center">PLAYING</span>
            <span className="w-2/12 text-center">TIME</span>
            <span className="w-3/12 text-right">ALBUM</span>
          </div>
        </div>
        {items.map((item, index) => (
          <SongList_Item
            key={item.id}
            id={item.id}
            index={index}
            number={index + 1}
            title={item.title}
            icon={item.icon}
            time={item.time}
            playing={item.playing}
            album={item.album}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default SongList;