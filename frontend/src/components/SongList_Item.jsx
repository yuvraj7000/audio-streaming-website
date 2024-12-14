import React from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "SONG";

const SongList_Item = ({ id, number, title, icon, playing, time, album, moveItem, index }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`flex justify-between px-4 py-3 hover:bg-[#520000] w-full ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      <div className="ml-[10%] mr-[10%] flex justify-between w-full">
        <span className="w-1/12 text-center items-center">{number}</span>
        <span className="w-3/12 text-center flex items-center pl-5 gap-4">
          <img src={icon} alt={title} className="w-9" />
          {title}
        </span>
        <span className="w-3/12 text-center items-center">{playing}</span>
        <span className="w-2/12 text-center">{time}</span>
        <span className="w-3/12 text-right truncate">{album}</span>
      </div>
    </div>
  );
};

export default SongList_Item;