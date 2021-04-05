import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="nav-bar">
            <h1>Top Stuff</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/songs">Top Songs</Link></li>
                <li><Link to="/books">Top Books</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;