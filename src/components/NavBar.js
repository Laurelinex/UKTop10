import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="nav-bar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/ITunes_12.2_logo.png" alt="iTunes" height="50"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/songs">Top Songs</Link></li>
                <li><Link to="/books">Top Books</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;