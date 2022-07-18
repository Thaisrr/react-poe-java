import { NavLink} from "react-router-dom";
import '../style/Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/routing">Router</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;