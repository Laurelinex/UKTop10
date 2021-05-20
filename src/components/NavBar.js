import {Link} from 'react-router-dom';
import logo from '../images/UKTOP10.png'
import logoMobile from "../images/ukchartslogo.png"

const NavBar = () => {
    return(
        <div className="nav-bar">
            <img className="logo" src={logo} alt="logo"/>
            <img className="logo-mobile" src={logoMobile} alt="logo"/>
            <ul>
                <li><Link className="nav-link" to="/">All</Link></li>
                <li><Link className="nav-link" to="/rock">Rock</Link></li>
                <li><Link className="nav-link" to="/rap">Rap</Link></li>
                <li><Link className="nav-link" to="/dance">Dance</Link></li>
                <li><Link className="nav-link" to="/rnb">R&amp;B</Link></li>
                <li><Link className="nav-link" to="/country">Country</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;