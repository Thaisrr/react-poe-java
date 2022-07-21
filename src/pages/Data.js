import axios from "axios";
import {useState} from "react";

const Data = function () {
    const [blague, setBlague] = useState('');

    function getJoke() {
        axios.get('https://v2.jokeapi.dev/joke/Programming?&safe-mode&type=single')
            .then(({data : {joke}}) => setBlague(joke))
            .catch(err => alert('Oups, c\'est cassé !'))
    }

    async function getJokeAsync() {
        try {
            const {data: {joke}} = await axios.get('https://v2.jokeapi.dev/joke/Programming?&safe-mode&type=single');
            setBlague(joke);
        } catch {
            alert(`Oups, c'est encore cassé`)
        }
    }

    return (
        <>
            <h1>Gérer les requêtes</h1>

            <p>
                <button onClick={getJoke}>Charger les données</button>
            </p>

                <div className="card">{blague}</div>

        </>
    )
}
export default Data;