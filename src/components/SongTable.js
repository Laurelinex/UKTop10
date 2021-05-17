const SongTable = ({songs}) => {

    if (songs.length === 0) {
        return <p>Loading...</p>
    }

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
                <td>
                    <audio controls>
                        <source src={song['link'][1]['attributes']['href']} />
                    </audio>
                </td>
            </tr>
            </>
        )
    })

    return (
        <table className="song-table">
            <colgroup>
            <col className="col1"/>
            <col className="col2"/>
            <col className="col3"/>
            </colgroup>
            <tbody>
                {songTableElements}
            </tbody>
        </table>
    );

}

export default SongTable;