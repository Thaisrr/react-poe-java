import WeekDay from "../components/WeekDay";
import {roleFilter} from "../utils/filter/EnumFilter";

const StaticData = () => {

    const message = "Dans les JSX, les {} nous permettent d'interpréter du JS.";
    const jsx = <p>On peut y passer des strings, ou des variables contenants du JSX.</p>;
    const is_logged = false;
    const date = new Date();
    const fruits = ['Fraises', 'Framboises', 'Abricots', 'Brocolis']

    const getMessage = () => {
        return (
            <>
                <p>Il est tout à fait possible d'utiliser des fonctions pour récupérer du JSX.</p>
                <p>Il faut bien que la fonctionne retourne quelque chose.</p>
            </>
        )
    }

    function getDayJSX() {
        switch (date.getDay()) {
            case 1 :
                return <p>Oh no ! C'est Lundi !</p>;
            case 2 :
            case 3 :
                return <p>Courage !</p>
            case 5:
                return <p>Last day !</p>
            case 6:
            case 0 :
                return <p>Week End !</p>
            default :
                return <p>Meh</p>
        }
    }

    function getDayJSXBis() {
        const weekend = [0, 6]
        if(weekend.includes(date.getDay())) {
            return WeekEnd();
        } else {
            return <WeekDay/>
        }
    }

    const WeekEnd = () => (
        <>
            <p>🌈  C'est le week End !!!! 🌈</p>
        </>
    )


    return (
        <>
            <h1>Données statics</h1>

            <article>
                <h2>Rappels</h2>

                <p>{message}</p>
                {jsx}
                {getMessage()}

            </article>

            <article>
                <h2>Affichage Conditionnel</h2>

                <p>On peut utiliser la puissance des JSX pour faire de l'affichage conditionnel.</p>

                <h3>Ternaire</h3>

                <p>Dans le cas ou c'est un texte simple et court à modifier, afficher conditionnellement,
                    on peut afficher du ternaire dans les JSX :
                </p>
                <p>Exemple ( avec des strings ) : {is_logged? 'Vous êtes connecté.e'  :  'Veuillez vous connecter'}</p>

                <p>Exemple ( avec JSX ) : {is_logged?  <i>Vous êtes connecté.e</i>  : <i>Veuillez vous connecter</i>}</p>

                <p><i>Dans les deux cas, on peut remplacer les chaînes écrites en dur par des constantes, des variables, par des composants.</i></p>

                <h3>Fonctions : </h3>

                <p>Dans le cas ou l'affichage ( ou la condition ) est plus complexe, on va plutôt passer par une ou des fonctions : </p>

                <p>Exemple avec un Switch : </p>

                {getDayJSX()}

                <p>Exemple avec des JSX plus "complexes" : </p>
                {getDayJSXBis()}

                <p>Exemple avec structures complexes + ternaire :
                    <i>à éviter car moins lisible.</i>
                </p>

                {/*
                 WeekEnd : c'est une fonction du composant, donc j'utilise juste son nom
                 <WeekDay/> : c'est un autre composant importé, donc j'utilise sa balise
                */}
                {(date.getDay() === 0 || date.getDay() === 6) ? WeekEnd : <WeekDay/>}


                <h3>Si .... alors...</h3>

                <p>- Si is_logged est truthy (&&)</p>
                {is_logged && <p>Vous êtes connecté.e</p>}

                <p>- Si is_logged est falsy ( || ) </p>
                <p><i>
                    Peuvent être falsy : false, undefined, null, les string vide '' "" ``, 0, NaN
                </i></p>
                {is_logged || <p>Veuillez vous connecter</p>}

                <p>- Si is_logged est undefined ou null ( ?? )</p>
                {is_logged ?? <p>Impossible d'avoir le statut de connexion</p>}

            </article>

            <article>
                <h2>Affichage de listes</h2>

                <p>Pour afficher du JSX via une fonction, il faut que la fonction retourne du JSX.</p>
                <p>Pour les tableaux, la méthode "map()" qui permet de retourner quelque chose pour chaque élément du tableau.</p>
                <p>On peut donc faire de l'affichage de liste grâce à cette fonction : </p>
                <ul>
                    {fruits.map(fr => <li key={`tab1_${fr}`}>{fr}</li>)}
                </ul>


                <p>Ici je retourne un simple "li", mais on peut afficher
                    quelque chose de plus complexe à l'aide d'une autre fonction,ou d'un composant.
                </p>

                <h3>Liste + conditionnel: </h3>

                {(!fruits || fruits.length === 0)?
                    <p>La liste est vide</p> :
                    <ul>
                        { fruits.map( (f, index) => <li key={`tab2_${index}`} >{f}</li>) }
                    </ul>
                }
            </article>

            <article>
                <h2>Filtrer ou Modifier ses données</h2>

                <p>Il ne faut pas hésiter factoriser son code dans des fichiers / services à part pour le réutiliser.</p>
                <p>C'est valable aussi pour une simple amélioration de l'affichage des données: appeler des fonctions
                sera plus propre et lisible que de faire les modifications dans le JSX. ça évite également la répétition de code;</p>
                <p>Votre rôle : {roleFilter('ADMIN')}</p>
            </article>
        </>
    )

}



export default StaticData;