import {useState} from "react";

const Reactivity = function () {
    let counter1 = 0;

    const [counter2, setCounter] =  useState(10);
    // Counter2 : variable qui contient l'état de la valeur passée dans useState
    // setCounter : fonction qui permet de mettre à jour la valeur

    const [user, setUser] = useState({prenom: 'John'})

    const [is_logged, setLogged] = useState(false);

    const [fruits, setFruits] = useState(['Pomme', 'Mangue', 'Ananas']);

    function addFruit() {
        const updated = [...fruits];
        updated.push('Gingembre');
        setFruits(updated);
    }

    function changeUser() {
       // setUser({prenom: 'Jean'}); // Pour modifier l'élément
       // setUser({nom: 'Snow'}); // Remplace la valeur : on perd le prenom

        const updated = {...user};
        updated.nom = 'Neige';
        updated.prenom = 'Jean'
        setUser(updated);

    }


    function boom(event) {alert('Boom !')}
    function choose(choice) {alert(`Vous avez choisi :  ${choice}`);}
    function handleChoice(event) {alert(`Vous avez choisi : ${event.target.dataset.veggie}`)}

    function increment() {
        counter1++;
        console.log('Compteur incrémenté, valeur actuelle : ', counter1)
    }

    function increment2() {
        setCounter(counter2 + 1);
    }

    return (
        <>
            <h1>Réactivité</h1>

            <article>
                <h2>Evénements</h2>

                <p>En React, on gère les éléments comme en HTML : avec les attributs d'évenement
                (onClick, onSubmit, onMouseOver, ....)
                </p>
                <p>
                    On passe la fonction à appeler entre accolades, et sans parenthèses : React fournit automatiquement le paramétre Event
                    à la fonction appelée.
                </p>

                <p>
                    <button onClick={boom}>Ne cliquez pas ici !</button>
                </p>

                <p>Votre choix ?</p>
                <p className="btn-container">
                    <button onClick={ () => choose('salade') }>Salade</button>
                    <button onClick={() => choose('tomates')}>Tomates</button>
                    <button data-veggie='oignons' onClick={handleChoice}>Oignons</button>
                </p>

            </article>

            <article>
                <h2>Compteur 1 : {counter1}</h2>

                <p>
                    <button onClick={increment}>Incrémenter</button>
                </p>
                <p>La modification de compteur se fait bien, mais React ne mets pas à jour le DOM de manière dynamique.</p>


            </article>


            <article>
                <h2>Hook d'état</h2>

                <p>Compteur dynamique : <b>{counter2}</b></p>
                <p>
                    <button onClick={increment2}>Incrémenter</button>
                </p>

                <p>Pour indiquer à React d'écouter des valeurs pour mettre à jours le DOM, il faut utiliser les Hooks.</p>
                <p>Le hook d'effet, useState, permet de gérer l'état d'une donnée.</p>
                <p>useState() retourne un tableau contenant 2 valeurs : </p>
                <ul>
                    <li>L'état actuel de la valeur</li>
                    <li>Une fonction permettant de modifier cet état.</li>
                </ul>

                <p>De manière "classique", pour récupérer ces valeurs : </p>
                <p><code>const state = useState('truc')</code></p>
                <p><code>const value = state[0]</code></p>
                <p><code>const setValue = state[1]</code></p>

                <p>La décomposition permet de le faire en 1 ligne  :</p>
                <p><code>const [value, setValue] = useState('truc')</code></p>

                <p>Dans un composant on peut déclarer autant de hook d'état qu'on le souhaite, et ils peuvent prendre tout type de valeur.</p>

                <ul>
                    <li><code>const [str, setStr] = useState('hello world')</code></li>
                    <li><code>const [arr, setArr] = useState([])</code></li>
                    <li><code>const [obj, setObj] = useState({ '{nom: "Jean Michel"}' })</code></li>
                </ul>


                <h3>Booleans</h3>
                <div>
                    { (is_logged)?
                        <p>Vous êtes connecté.e</p>  :
                        <p>Vous n'êtes pas connecté</p>
                    }
                </div>

                <p>
                    <button onClick={() => setLogged(!is_logged)}>
                        {is_logged? 'Déconnexion' : 'Connexion'}
                    </button>
                </p>

                <h3>Objects</h3>

                <p>{user?.prenom} {user?.nom}</p>
                <p>
                    <button onClick={changeUser}>Update User</button>
                </p>

                <h3>Tableaux</h3>

                <ul>
                    {fruits.map((f, index) => <li key={`fruits${index}`}>{f}</li> )}
                </ul>
                <p>
                    <button onClick={addFruit}>Add fruit</button>
                </p>

            </article>
        </>
    )
}

export default Reactivity;
