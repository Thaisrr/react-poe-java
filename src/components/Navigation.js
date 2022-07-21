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
                <li>
                    <NavLink to="/static">Données Statiques</NavLink>
                </li>
                <li>
                    <NavLink to="/props">Props</NavLink>
                </li>
                <li>
                    <NavLink to='/reactivity'>Réactivité</NavLink>
                </li>
                <li>
                    <NavLink to='/form'>Formulaires</NavLink>
                </li>
                <li>
                    <NavLink to='/data'>Datas</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;