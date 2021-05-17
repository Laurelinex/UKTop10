const SongTable = ({songs}) => {

    return (
        <table className="song-table">
            <tbody>
                <tr>
                    <td rowSpan="3">number r1</td>
                    <td rowSpan="3">image r1</td>
                    <td>TITLE r1</td>
                </tr>
                <tr>
                    <td>Artists</td>
                </tr>
                <tr>
                    <td>Player</td>
                </tr>
            </tbody>
        </table>
    );

}

export default SongTable;