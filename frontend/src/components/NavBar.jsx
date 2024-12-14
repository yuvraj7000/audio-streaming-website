import React from 'react';
import { search } from '../assets/svg';

const NavBar = () => {
  const navItems = [
    { item: "Music", route: "music" },
    { item: "Podcast", route: "podcast" },
    { item: "Live", route: "live" },
    { item: "Radio", route: "radio" },
  ];

  return (
    <div className="navbar flex items-center justify-between p-8 px-12">
      {/* Navigation Items */}
      <div className="nav-items flex gap-10">
        {navItems.map((item, index) => (
          <span key={index} className="nav-item cursor-pointer hover:underline">
            {item.item}
          </span>
        ))}
      </div>

      
      <div className="search-bar flex items-center bg-[#1C1C1C] rounded-full px-4 py-2 w-80">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white placeholder-gray-500 focus:outline-none flex-grow"
        />
        <div className="search-icon cursor-pointer">{search}</div>
      </div>
    </div>
  );
};

export default NavBar;
