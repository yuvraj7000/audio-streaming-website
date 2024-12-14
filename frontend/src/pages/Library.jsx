import React from 'react';
import ArtistCard from '../components/ArtistCard';
import SongList from '../components/SongList';
import PlayCard from '../components/PlayCard';
import "./library.css";

const Library = ({ }) => {
  return (
    <>
    <div className='h-full overflow-auto pb-40 custom-scrollbar'>
<ArtistCard/>
<SongList/>

</div>
</>
  );
};

export default Library;