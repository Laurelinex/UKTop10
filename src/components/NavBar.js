import {Link} from 'react-router-dom';
import logo from '../images/UKTOP10.png'

const NavBar = () => {
    return(
        <div className="nav-bar">
            <img className="logo" src={logo} alt="logo"/>
            <ul>
                <li><Link to="/">All</Link></li>
                <li><Link to="/rock">Rock</Link></li>
                <li><Link to="/dance">Dance</Link></li>
                <li><Link to="/country">Country</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;