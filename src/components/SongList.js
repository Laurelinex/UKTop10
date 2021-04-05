

const SongList = ({songs}) => {

    const songListItems = songs.map((song, index) => {
        return <li key={index}>{song['im:name']['label']}</li>
    })

    return(
        <div className="song-list">
            <ol>{songListItems}</ol>
        </div>
    )
}

export default SongList;