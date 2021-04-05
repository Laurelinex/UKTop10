

const SongDetail = ({song}) => {
    if(!song) {
        return (
            <div className="song-detail">
                <p>Pick a song to know more!</p>
            </div>
        )
    }

    return (
        <div className="song-detail">
            <h3>{song['im:name']['label']}</h3>
            {/* <h4>Position: </h4> */}
            <h4>Artist: {song['im:artist']['label']}</h4>
            <p>Cost on iTunes: {song['im:price']['label']}</p>
            <img src={song['im:image'][2]['label']} />
        </div>
    )
}

export default SongDetail;