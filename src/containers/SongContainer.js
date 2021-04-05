import React, {useEffect, useState} from 'react';
import SongList from '../components/SongList';

const SongContainer = () => {

    const [allSongs, setAllSongs] = useState([]);

    const getAllSongs = () => {
        console.log("Fetching things...")
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setAllSongs(data.feed.entry))
    }

    useEffect(() => {
        getAllSongs();
    }, []);

    return(
        <div className="song-container">
            <SongList songs={allSongs} />
        </div>
    )
}

export default SongContainer;