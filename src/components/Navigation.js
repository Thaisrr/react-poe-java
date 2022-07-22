import { NavLink} from "react-router-dom";
import '../style/Navigation.css';
import {useSelector} from "react-redux";

const Navigation = () => {
    const panier = useSelector(state => state?.panier.length);

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
                <li>
                    <NavLink to='/effect'>Effets de bord</NavLink>
                </li>
                <li>
                    <NavLink to='/crud'>CRUD</NavLink>
                </li>
                <li>
                    <NavLink to='/auth'>Authentication</NavLink>
                </li>
                <li>
                    <NavLink to='/secret'>Secret</NavLink>
                </li>
                <li>
                    <NavLink to='/redux'>Redux</NavLink>
                </li>
                <li>
                    <button onClick={() => localStorage.clear()}>Déconnexion</button>
                </li>
                <li>
                    Panier : {panier}
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;