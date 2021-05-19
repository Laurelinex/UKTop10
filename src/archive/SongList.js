const SongList = ({songs, onSongSelected}) => {

    const songListItems = songs.map((song, index) => {
        return <li key={index} onClick={() => onSongSelected(song)}>{song['im:name']['label']}</li>
    })

    return(
        <div className="item-list">
            <ol>{songListItems}</ol>
        </div>
    )
}

export default SongList;