import React from 'react';
import { Link } from 'react-router-dom';

const SideButton = ({button, icon, route }) => {
  return (
    <Link to={`${route}`}>
   <div className='flex gap-5 m-4 items-center font-bold '>
    <span>{icon}</span>
    <span>{button}</span>
   </div>
   </Link>
  );
};

export default SideButton;






