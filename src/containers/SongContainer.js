import React, {useEffect, useState} from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';

const SongContainer = () => {

    const [allSongs, setAllSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    const getAllSongs = () => {
        console.log("Fetching things...")
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setAllSongs(data.feed.entry))
    }

    useEffect(() => {
        getAllSongs();
    }, []);

    const handleSelectedSong = (song) => {
        setSelectedSong(song);
    }

    return(
        <div className="item-container">
            <SongList songs={allSongs} onSongSelected={handleSelectedSong} />
            <SongDetail song={selectedSong}/>
        </div>
    )
}

export default SongContainer;