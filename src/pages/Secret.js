import {useEffect, useState} from "react";
import axios from "axios";

const Secret = function () {
    const [secrets, setSecrets] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem('token');
        let headers = {};
        if(token) headers = {'Authorization' : `Bearer ${token}`}

        axios.get('http://localhost:8000/secrets', {headers})
            .then(({data}) => setSecrets(data))
            .catch(e => alert(e.response.data))
    }, [])

    return (
        <>
            <h1>Secret</h1>
            <p>Si vous voyez ce composant, c'est que vous êtes connecté !</p>
            <h2>Mes secrets :</h2>
            {secrets.map(s => <li key={s.id}>{s.message}</li> )}
        </>
    )
}

export default Secret;