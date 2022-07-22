import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const Authentication = function () {

    const {handleSubmit, register} = useForm();
    const [page, setPage] = useState('login');

    // rien à voir avec authentification, suite de la partie Redux
    const panier = useSelector(state => state?.panier.value)

    const url = 'http://localhost:8000';

    async function login(user) {
        try {
            if(page === 'login') {
                const {data} = await axios.post(`${url}/login`, user);
                console.log('Connecté ', data);
                localStorage.setItem('token', data.accessToken);
            } else {
                const {data} = await axios.post(`${url}/register`, user);
                console.log('Inscrit ', data);
            }
        } catch (e) {
            console.error(e)
            alert(e.response.data)
        }
    }


    return (
        <>
            <h1>Authentification</h1>

            <article>
                <h2>Connexion / Inscription</h2>

                <p>La logique d'inscription / connexion reste la même que sur des formulaires classiques.</p>
                <p>Pour l'inscription, il faut faire un post d'un nouvel utilisateur.trice.</p>
                <p>Pour la connexion, il faut faire un post d'un objet contenant les infos d'authentification ( login / email, mot de passe )</p>

                <p>
                    <button onClick={() => setPage('login')}>Connexion</button>
                    <button onClick={() => setPage('register')}>Inscription</button>
                </p>

                <form onSubmit={handleSubmit(login)}>
                    <fieldset>
                        <legend>{page === 'login'? 'Connexion' : 'Inscription'}</legend>
                        <p>
                            <label htmlFor='login'>Login</label>
                            <input id='login' {...register('email')}/>
                        </p>
                        <p>
                            <label htmlFor='password' >Mot de passe</label>
                            <input id='password' {...register('password')}/>
                        </p>
                        <p>
                            <button>{page === 'login'? 'Connexion' : 'Inscription'}</button>
                        </p>
                    </fieldset>
                </form>
            </article>

            <article>
                <h2>Mon panier</h2>

                <ul>
                    {panier.map(el => <li key={el}>{el}</li> )}
                </ul>

            </article>
        </>
    )
}
export default Authentication;