import React from 'react';
import { logo,  home, trends, library, discover, setting, logout } from '../assets/svg';
import "./sidebar.css";
import SideButton from './SideButton';
const SideBar = ({ }) => {

   const menu = [
    {
        button : "Home",
        icon : home,
        route : "/"
    },
    {
        button : "Trends",
        icon : trends,
        route : "trends"
    },
    {
        button : "Library",
        icon : library,
        route : "library"
    },
    {
        button : "Discover",
        icon : discover,
        route : "discover"
    },
   ]
    const general =[
        {
            button : "Settings",
            icon : setting,
            route : "setting"  
        },
        {
            button : "Log Out",
            icon : logout,
            route : "logout"  
        },
    ]

   

  return (
    <div className="sidebar">
        <div className="flex flex-row items-center justify-center gap-2 pt-4">
        <div className="logo-icon">
  {React.cloneElement(logo, { width: '50px', height: '50px' })}
</div>
            <div className="logo-name text-3xl font-semibold">
                <span className='text-[#FF5656]'>Dream</span>Music
            </div>
        </div>


        <div className='sidebar-list-container'>
        <div>
            <div className='mt-10 text-1xl pl-5'>MENU</div>
            <div>
            {menu.map((item)=> <SideButton button={item.button} icon={item.icon} route={item.route} />)}
            </div>
        </div>
        <div>
        <div className='mt-10 text-1xl pl-5'>GENERAL</div>
            <div>
            {general.map((item)=> <SideButton button={item.button} icon={item.icon} route={item.route} />)}
            </div>
        </div>
        </div>

    </div>
  );
};

export default SideBar;