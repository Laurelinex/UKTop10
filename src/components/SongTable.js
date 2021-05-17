const SongTable = ({songs}) => {

    // const songListItems = songs.map((song, index) => {
    //     return <td key={index} >{song['im:name']['label']}</td>
    // })

    const songTableElements = songs.map((song, index) => {
        return (
            <>
            <tr>
                <td className="song-position-number" rowSpan="3">{index + 1}</td>
                <td className="song-cover" rowSpan="3">
                    <img src={song['im:image'][2]['label']} alt="Track cover"/>
                </td>
                <td className="song-title">{song['im:name']['label']}</td>
            </tr>
            <tr>
                <td className="song-artists">{song['im:artist']['label']}</td>
            </tr>
            <tr>
                <td>PLAYER</td>
            </tr>
            </>
        )
    })

    return (
        <table className="song-table">
            <tbody>
                {songTableElements}
            </tbody>
        </table>
    );

}

export default SongTable;