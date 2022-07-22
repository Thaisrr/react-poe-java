import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, add} from "../store/panierSlice";

const Redux = function () {
    const size = useSelector(state => state?.panier.length);
    const dispatch = useDispatch();
    const products = ['Furby', 'Playmobile Pirate', 'Lego Grogu']

    function _increment() {
        dispatch(increment())
    }

    function _decrement() {
        dispatch(decrement())
    }

    return (
        <>
            <h1>Redux</h1>

            <p>Il y {size} élément(s) dans mon panier</p>
            <p>
                <button onClick={_increment}>Ajouter des éléments</button>
                <button onClick={_decrement}>Supprimer des éléments</button>
            </p>
            <ul>
                {products.map(p => (
                    <li key={p}>
                        {p}
                        <button onClick={() => dispatch(add(p))}>+</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Redux;