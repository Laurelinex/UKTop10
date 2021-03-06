import React, {useEffect, useState} from 'react';
import SongTable from '../components/SongTable';

const SongTableContainer = ({genres}) => {

    const [allSongs, setAllSongs] = useState([]);

    const getAllSongs = url => {
        console.log("Fetching songs...")
        fetch(url)
        .then(res => res.json())
        .then(data => setAllSongs(data.feed.entry))
        .catch(err => console.error);
    }

    useEffect(() => {
        getAllSongs(genres.url);
    }, [genres]);

    return(
        <div className="table-container">
            <SongTable songs={allSongs} />
        </div>
    )
}

export default SongTableContainer;