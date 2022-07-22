import {useEffect, useState} from "react";
import {getAll} from "../utils/services/UserService";

const EffetBord = () => {
    const [bool, setBool] = useState(false);
    const [users, setUsers] = useState([]);

    function getData() {
        getAll().then(users_res => setUsers(users_res) )
    }

    //  /!\  ne JAMAIS faire ça ! Boucle infinie de requête   /!\
    // getData();

    // Ici : s' appelle à chaque modification du DOM
    useEffect(() => {
        console.log('In use effect - sans paramètres')
    });

    // S'appelle qu'à la première initialisation du composant
    useEffect(() => {
        console.log('In use effect - avec paramètres')
    }, []);

    useEffect(() => {
        console.info('--- Boolean modifié !');
    }, [bool]); // On passe dans le tableau les valeurs à surveiller ( dépendances )


    // On préfère écrire la logique directement dans le hook, plutôt que dans une fonction séparée
    // Toutes les valeurs utilisées dans le hook doivent être déclarée dans useEffect
    useEffect(() => {
        getAll().then(res => setUsers(res));
    }, []);



    // créé un interval au chargement du composant, et le coupe à la destruction du composant
    // a utiliser pour les souscriptions à des flux, à des websockets....
    useEffect(()=> {
        let secondes = 0;
        let interval = setInterval(() => {
            secondes++;
            console.log('--- last update : ', secondes)
        }, 1000)
        return () => clearInterval(interval)
    }, [])



    return (
        <>
            <h1>Effet de bord</h1>

            <article>
                <h2>Présentation</h2>
                <p>
                    <button onClick={() => setBool(!bool)}>Modifier le Dom</button>
                </p>
                <p>Valeur du boolean : {bool.toString()}</p>

                <p>La fonction composant s'exécute à chaque mise à jour du DOM.</p>
                <p>Par conséquent, il ne faut SURTOUT PAS y faire directement un appel API, ou de manière générale,
                    y modifier des hook d'état / le DOM, sous peine de créer une boucle infinie.
                </p>

            </article>
            <article>
                <h2>Présentation du Hook d'état</h2>

                <p>Le hook d'effet, useEffect, permet d'agir lors de la mise à jour du composant, ou de valeurs.</p>

                <p>Il s'éxécute dès la première initialisation du composant.</p>

                <p>Il permet de faire des effets de bords : action réalisées suite à un événement ( initialisation du composant,
                modification d'une ou plusieurs valeurs, destruction du composant.
                </p>

                <p>C'est une fonction qui prend en premier paramètre une callback</p>
                <p><code>useEffect(() => // du stuff )</code></p>

                <p>On peut utiliser plusieurs useEffect par composant : pour bien la logique, ou pour des effets de bords différents.</p>


                <ul>
                    {users.map(u => <li key={u.id}>{u.email}</li> )}
                </ul>


            </article>




        </>
    )
}

export default EffetBord;