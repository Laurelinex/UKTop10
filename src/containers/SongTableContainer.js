import React, {useEffect, useState} from 'react';
import SongTable from '../components/SongTable';

const SongTableContainer = ({genres}) => {

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

    // const handleSelectedSong = (song) => {
    //     setSelectedSong(song);
    // }

    return(
        <div className="item-container">
            <SongTable songs={allSongs} />
        </div>
    )
}

export default SongTableContainer;