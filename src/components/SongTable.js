const SongTable = ({songs}) => {

    // const songListItems = songs.map((song, index) => {
    //     return <td key={index} >{song['im:name']['label']}</td>
    // })

    const songTableElements = songs.map((song) => {
        return (
            <>
            <tr>
                <td rowSpan="3">NUMBER</td>
                <td rowSpan="3">
                    <img src={song['im:image'][2]['label']} alt="Track cover"/>
                </td>
                <td>{song['im:name']['label']}</td>
            </tr>
            <tr>
                <td>{song['im:artist']['label']}</td>
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
                {/* <tr>
                    <td rowSpan="3">number r1</td>
                    <td rowSpan="3">image r1</td>
                    <td>TITLE r1</td>
                </tr>
                <tr>
                    <td>Artists</td>
                </tr>
                <tr>
                    <td>Player</td>
                </tr> */}
            </tbody>
        </table>
    );

}

export default SongTable;