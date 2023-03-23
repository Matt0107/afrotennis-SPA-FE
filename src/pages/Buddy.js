import React from 'react';
import NavBarHome from '../components/NavBarHome';
import SearchPlayer from '../components/SearchPlayer';


const Buddy = () => {
    return (
        <div>
            <NavBarHome/>
            <h1>Search and Find your dream Partner</h1>
            <SearchPlayer/>
        </div>
    );
};

export default Buddy;