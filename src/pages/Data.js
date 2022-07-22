import {useState} from "react";
import {getJoke} from "../utils/services/JokeService";

const Data = function () {
    const [blague, setBlague] = useState('');
    const [blague2, setBlague2] = useState({});

    function load() {
       getJoke('single')
           .then(({joke}) => setBlague(joke))
    }

    function loadTwoPart() {
        getJoke('twopart')
            .then(({setup, delivery}) => setBlague2({setup, delivery}))
    }
/*
    async function asyncLoad() {
        const joke = await getJoke();
        setBlague(joke);
    }
*/
    const loadAll = function () {
        load();
        loadTwoPart();
    }

    return (
        <>
            <h1>Gérer les requêtes</h1>

            <p>
                <button onClick={loadAll}>Charger les données</button>
            </p>

            {blague && <div className="card">{blague}</div>}

            {
              blague2 && (
                  <div className="card">
                      <h4>{blague2?.setup}</h4>
                      <p>{blague2?.delivery}</p>
                  </div>
              )
            }


        </>
    )
}
export default Data;